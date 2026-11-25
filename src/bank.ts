export const letters = ['A', 'B', 'C', 'D'] as const;
export type Letter = typeof letters[number];
export type Priority = 'core' | 'detail' | 'mock';

export interface Question {
  id: string;
  section: string;
  prompt: string;
  choices: Record<Letter, string>;
  answer: Letter;
  explanation: string;
  priority: Priority;
  source: string;
}

export interface Section {
  id: string;
  number: number | null;
  title: string;
  reference: string;
  heading: string;
  declaredCount: number;
  questions: Question[];
}

const fields = ['Question:', 'A.', 'B.', 'C.', 'D.', 'Answer:', 'Explanation:', 'Priority:', 'Source:'] as const;

export function parseBank(markdown: string) {
  const lines = markdown.replace(/^\uFEFF/, '').split(/\r?\n/);
  const start = lines.indexOf('# QUESTION BANK');
  if (start < 0) throw new Error('Missing the # QUESTION BANK heading.');

  const sections: Section[] = [];
  const byId = new Map<string, Question>();
  let section: Section | undefined;

  for (let index = start + 1; index < lines.length; index++) {
    const line = lines[index];
    if (!line.trim()) continue;
    const chapter = /^## Chapter (\d+) — (.+?) (\(pp?\. .+\)) \((\d+) questions\)$/.exec(line);
    const mock = /^## Original mock exam \((\d+) questions\)$/.exec(line);
    if (chapter || mock) {
      const number = chapter ? Number(chapter[1]) : null;
      section = {
        id: number === null ? 'mock' : `chapter-${number}`,
        number,
        title: chapter ? chapter[2] : 'Original mock exam',
        reference: chapter ? chapter[3] : '',
        heading: line.slice(3),
        declaredCount: Number(chapter ? chapter[4] : mock?.[1]),
        questions: [],
      };
      sections.push(section);
      continue;
    }

    const id = /^### ((?:Q\d{2}-|M)\d{3})$/.exec(line)?.[1];
    if (!id || !section) throw new Error(`Unexpected content at line ${index + 1}: ${line}`);
    const prefix = section.number === null ? 'M' : `Q${String(section.number).padStart(2, '0')}-`;
    const sequence = String(section.questions.length + 1).padStart(3, '0');
    if (id !== `${prefix}${sequence}` || byId.has(id)) {
      throw new Error(`Invalid or duplicate question ID ${id} at line ${index + 1}. Expected ${prefix}${sequence}.`);
    }

    const values = fields.map((field, offset) => {
      const fieldLine = lines[index + offset + 1];
      if (!fieldLine?.startsWith(`${field} `) || !fieldLine.slice(field.length + 1).trim()) {
        throw new Error(`${id} needs a nonempty ${field} field at line ${index + offset + 2}.`);
      }
      return fieldLine.slice(field.length + 1);
    });
    const [prompt, A, B, C, D, answer, explanation, priority, source] = values;
    if (answer !== 'A' && answer !== 'B' && answer !== 'C' && answer !== 'D') {
      throw new Error(`${id} has an invalid answer letter: ${answer}.`);
    }
    if (new Set([A, B, C, D].map(choice => choice.trim())).size !== 4) {
      throw new Error(`${id} needs four distinct options.`);
    }
    if (section.number === null ? priority !== 'mock' : priority !== 'core' && priority !== 'detail') {
      throw new Error(`${id} has an invalid priority for its section: ${priority}.`);
    }
    const question: Question = { id, section: section.id, prompt, choices: { A, B, C, D }, answer, explanation, priority: priority as Priority, source };
    section.questions.push(question);
    byId.set(id, question);
    index += fields.length;
  }

  sections.forEach(({ title, questions, declaredCount }) => {
    if (questions.length !== declaredCount) throw new Error(`${title} declares ${declaredCount} questions, but ${questions.length} were loaded.`);
  });
  const chapters = sections.slice(0, 12);
  const mock = sections[12];
  if (sections.length !== 13 || chapters.some((chapter, index) => chapter.number !== index + 1) || mock?.id !== 'mock') {
    throw new Error('Expected chapters 1–12 followed by the original mock exam.');
  }
  const chapterQuestions = chapters.flatMap(chapter => chapter.questions);
  const coreCount = chapterQuestions.filter(question => question.priority === 'core').length;
  if (chapterQuestions.length !== 872 || mock.questions.length !== 70 || coreCount !== 741) {
    throw new Error(`Expected 741 core, 131 detailed and 70 mock questions. Loaded ${coreCount} core, ${chapterQuestions.length - coreCount} detailed and ${mock.questions.length} mock.`);
  }
  return { chapters, chapterQuestions, mock, byId, coreCount, detailCount: chapterQuestions.length - coreCount };
}

export type Bank = ReturnType<typeof parseBank>;
