# National Education — MCQ question bank and Codex website specification

**872 chapter questions (741 core + 131 detailed), plus the original 70-question mock exam.**

Source: `National_Education_Midterm_MCQ_Study_Guide(1).md`, chapters 1–12, covering the supplied textbook pages including 70–71. The original 70-question test is preserved as a separate mock. Source caveats and printed figures are retained; this is a study resource based on the provided guide, not an independent historical or statistical fact-check. Some questions intentionally overlap to reinforce recall. Core/detail labels are study priorities chosen for speed, not predictions of exam questions.

# Instructions for Codex (implement this first)

Build a complete, local, frontend-only MCQ learning website from this Markdown file. Do not require me to type in questions or convert data by hand. I am studying for a morning MCQ exam, so prioritize speed, low friction and reliable behavior over elaborate setup.

## Implementation

- Use React + TypeScript + Vite (or the existing frontend stack if there is already a project). No backend, database, authentication, external API, AI service, paid service, or network dependency at runtime. Run natively on Windows with `npm install` and `npm run dev`; also provide `npm run build` and a short README.
- Treat the `QUESTION BANK` section below as the canonical data. Parse it at build time into typed objects or use a local Markdown import with `?raw`; do not generate or rewrite the questions. Preserve every ID, section, priority, four choices, correct answer and explanation. The mock is separate from the chapter bank. Ignore the introductory instructions while parsing.
- Data format: each `### Q...` or `### M...` heading is one question; `Question:`, `A.`, `B.`, `C.`, `D.`, `Answer:`, `Explanation:`, `Priority:`, `Source:` are single-line fields. The letter is the original correct choice, not its current display position. Headings `## Chapter ...` and `## Original mock exam` define groups. Fields can include punctuation and `|` characters. Never strip semantic punctuation from values.
- Verify the parser loads exactly 872 chapter questions and 70 mock questions, four nonempty distinct options each and a valid A–D answer. Display an actionable error if parsing fails. Never silently skip a question.

## Quiz experience

- Home screen: overall progress, chapter progress, chapter selection, Continue Studying, Quick Study (core only), All Questions (core and detailed), Review Mistakes, and Mock Exam (70 questions). Default to Quick Study and allow detail questions to be enabled. Show estimates as question counts rather than promises of exam coverage.
- One question per screen, four large clickable options, no correct answer visible initially. **Every question must have an always-available “Show Answer” button even before selecting an option.** Clicking it reveals the correct option in green and the explanation below. If an option is chosen, give immediate feedback (correct green, wrong red, correct choice green), show the explanation, and enable Next. Never auto-advance before I can read. Also provide Skip, Previous, Next, and a flag/bookmark action. A revealed answer without a prior attempt is marked revealed, not correctly solved; do not award XP for revealing.
- Shuffle questions within the chosen mode when requested; shuffle choice order independently without breaking correct answer mapping. Keep order stable during a session and after reload. Keyboard shortcuts: 1–4 select options; Space or R reveals the answer when no input field is focused; Enter advances after feedback; left/right arrows navigate. Provide accessible labels, focus states, and non-color correctness indicators. Disable multiple scoring of the same attempt.
- Track first-attempt correctness, missed, revealed, skipped, mastered and flagged status. Show XP (+10 for a correct first attempt), streak, accuracy and progress, but no timer pressure in learning mode. Review wrong/revealed/skipped items; offer a retry round with shuffled options. Mastery requires a correct unrevealed attempt after an incorrect/revealed attempt. Keep first-attempt analytics separate from retries.
- Mock exam uses the supplied original 70 questions, with an optional exam-style delayed-feedback toggle. “Show Answer” must still exist on every question; using it marks that question revealed and excludes it from correct unaided score. Results show correct, incorrect, revealed, skipped and topic where available.
- Save question-level state, session order, current index, preferences, XP/streak and bookmarks in `localStorage` with a versioned schema. Resume after reload. Offer reset with explicit confirmation; optionally export/import progress as JSON locally. Do not send any data elsewhere.
- UI: clean dark/light theme, responsive desktop/mobile, readable typography, one compact progress bar, chapter sidebar/filter, no distracting animations. Make feedback immediate and explanations easy to scan. Use a subtle success animation only if reduced-motion preference allows.
- Test: every question accessible, reveal works before choice, wrong answers show correct choice, shuffle mapping correct, navigation preserves state, reveal does not award XP, refresh resumes, reset requires confirmation, mock contains all 70 questions, build passes. Report any missing data or defects rather than silently fixing source facts.

## Source cautions to show in the website

The supplied guide contains some inconsistent population/rainfall totals, overlapping parliamentary terms and unusual printed project figures. Questions that use these figures follow the guide, not corrected official data. Early-1990s events supported democratic consolidation after 1989. Missing textbook pages and bibliographic footnotes are not included. Chapters 6 and 7 specifically include photographed pages 70–71.

# QUESTION BANK


## Chapter 1 — Introduction to National Education (pp. 11–26) (127 questions)

### Q01-001
Question: What does homeland refer to?
A. Native country or region connected to a person's identity
B. A political party
C. A temporary workplace
D. A government institution
Answer: A
Explanation: Native country or region connected to a person's identity. Source context: Homeland: A person's native country or region, where they were born or raised or have a strong cultural, historical or emotional connection. It creates belonging, identity, pride, nostalgia and patriotism. It can also mean a collective national or ethnic identity tied to a specific geographical area.
Priority: core
Source: guide line 22

### Q01-002
Question: Which meaning of homeland concerns ancestral self-government?
A. Personal connection
B. Emotional symbolism
C. Security and defense
D. Political implications
Answer: D
Explanation: Political implications.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-003
Question: Which meaning of homeland concerns nostalgia and return for displaced people?
A. Security and defense
B. Political implications
C. National administration
D. Emotional and symbolic meaning
Answer: D
Explanation: Emotional and symbolic meaning.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-004
Question: Which concept involves genuine affiliation in thought AND action?
A. Loyalty
B. Political culture
C. Citizenship
D. Belonging
Answer: D
Explanation: Belonging.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-005
Question: Which is an example of belonging?
A. Avoiding cooperation
B. Rejecting all community involvement
C. Preserving ancestors' achievements
D. Ignoring national history
Answer: C
Explanation: Preserving ancestors' achievements. Source context: Manifestations of belonging: Learning; participation in construction/development; preserving ancestors' achievements; volunteering; cooperation; achieving future aspirations; knowing the homeland's history and achievements; following customs and language; knowing the national anthem; developing conscience; caring about national issues; patriotism and readiness to sacrifice.
Priority: core
Source: guide line 46

### Q01-006
Question: Which set contains manifestations of belonging?
A. Political apathy, rivalry, ignoring customs
B. Volunteering, cooperation, knowing the anthem
C. Tax evasion, isolation, abandoning heritage
D. Avoiding service, rejecting language, refusing development
Answer: B
Explanation: Volunteering, cooperation, knowing the anthem. Source context: Manifestations of belonging: Learning; participation in construction/development; preserving ancestors' achievements; volunteering; cooperation; achieving future aspirations; knowing the homeland's history and achievements; following customs and language; knowing the national anthem; developing conscience; caring about national issues; patriotism and readiness to sacrifice.
Priority: core
Source: guide line 46

### Q01-007
Question: Which citizen quality concerns belief in God and community beliefs?
A. Global perspective
B. Civic knowledge
C. Self-awareness
D. Faith and shared values
Answer: D
Explanation: Faith and shared values. Source context: 1. Faith and shared values: Belief in God and adherence to community beliefs and values.
Priority: core
Source: guide line 50

### Q01-008
Question: Which citizen quality concerns personal abilities, rights and social status?
A. Faith and shared values
B. Self-awareness
C. Contextual understanding
D. Civic knowledge
Answer: B
Explanation: Self-awareness. Source context: 2. Self-awareness: Understanding personal abilities, rights, duties and social status.
Priority: core
Source: guide line 51

### Q01-009
Question: Which citizen quality concerns social, economic and political conditions?
A. Contextual understanding
B. Faith and shared values
C. Global perspective
D. Self-awareness
Answer: A
Explanation: Contextual understanding. Source context: 3. Contextual understanding: Understanding the social, economic and political conditions of one's life.
Priority: core
Source: guide line 52

### Q01-010
Question: Which citizen quality involves voluntary contribution to public interest?
A. Commitment to the public good
B. Civic knowledge
C. Global perspective
D. Self-awareness
Answer: A
Explanation: Commitment to the public good. Source context: 4. Commitment to the public good: Belief in serving the public interest and willingness to contribute voluntarily.
Priority: core
Source: guide line 53

### Q01-011
Question: Which citizen quality involves knowing government responsibilities within its capabilities?
A. Civic knowledge
B. Global perspective
C. Faith and shared values
D. Self-awareness
Answer: A
Explanation: Civic knowledge. Source context: 5. Civic knowledge: Awareness of government responsibilities and obligations within its capabilities.
Priority: core
Source: guide line 54

### Q01-012
Question: Which citizen quality concerns the country's standing among nations?
A. Contextual understanding
B. Civic knowledge
C. Self-awareness
D. Global perspective
Answer: D
Explanation: Global perspective. Source context: 6. Global perspective: Understanding the country's standing among nations and working to enhance it.
Priority: core
Source: guide line 55

### Q01-013
Question: What is the principal purpose of national education?
A. Develop knowledge, values, identity and active citizenship
B. Train only military personnel
C. Teach only technical employment skills
D. Replace national history with foreign history
Answer: A
Explanation: Develop knowledge, values, identity and active citizenship.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-014
Question: Which pillar teaches national history and the constitution?
A. Economic
B. Emotional
C. Intellectual
D. Practical
Answer: C
Explanation: Intellectual. Source context: MCQ distinction: Learning the constitution = intellectual; celebrating national holidays = emotional; volunteering = practical.
Priority: core
Source: guide line 71

### Q01-015
Question: Which pillar builds loyalty, pride and emotional attachment?
A. Legal
B. Practical
C. Intellectual
D. Emotional
Answer: D
Explanation: Emotional. Source context: Homeland: A person's native country or region, where they were born or raised or have a strong cultural, historical or emotional connection. It creates belonging, identity, pride, nostalgia and patriotism. It can also mean a collective national or ethnic identity tied to a specific geographical area.
Priority: core
Source: guide line 22

### Q01-016
Question: Which pillar links knowledge and feelings to volunteering and civic action?
A. Intellectual
B. Practical
C. Emotional
D. Judicial
Answer: B
Explanation: Practical.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-017
Question: What is democracy based on?
A. Military control alone
B. Consent of the governed and political equality
C. Hereditary authority alone
D. Exclusion from elections
Answer: B
Explanation: Consent of the governed and political equality. Source context: Democracy: Government in which power is vested in the people directly or through elected representatives. Based on political equality, free and fair elections, and the consent of the governed.
Priority: core
Source: guide line 75

### Q01-018
Question: Which feature means authority comes from the people's will?
A. Accountability
B. Rule of law
C. Political pluralism
D. Popular sovereignty
Answer: D
Explanation: Popular sovereignty. Source context: 1. Popular sovereignty: Government authority comes from the people's will; people have ultimate decision-making power.
Priority: core
Source: guide line 79

### Q01-019
Question: Which feature ensures equal access to voting and candidacy?
A. National unity
B. Popular sovereignty
C. Political equality
D. Political pluralism
Answer: C
Explanation: Political equality. Source context: 2. Political equality: Equal access to voting, candidacy, political discussions and decisions.
Priority: core
Source: guide line 80

### Q01-020
Question: Which feature means laws apply even to rulers?
A. Popular sovereignty
B. Majority rule
C. Rule of law
D. Political equality
Answer: C
Explanation: Rule of law. Source context: 3. Rule of law: Laws apply equally, including to rulers; transparent legal systems and fair justice.
Priority: core
Source: guide line 81

### Q01-021
Question: Which feature protects speech, assembly, religion and press?
A. Political stability
B. Protection of rights and freedoms
C. Popular sovereignty
D. State capacity
Answer: B
Explanation: Protection of rights and freedoms. Source context: 4. Protection of rights and freedoms: Speech, assembly, religion and press; free expression.
Priority: core
Source: guide line 82

### Q01-022
Question: Which feature uses checks and balances to prevent abuse?
A. National identity
B. Political socialization
C. Political equality
D. Accountability and transparency
Answer: D
Explanation: Accountability and transparency. Source context: 5. Accountability and transparency: Elected officials answer to the people; checks and balances prevent abuse.
Priority: core
Source: guide line 83

### Q01-023
Question: Which principle prevents majority oppression of minority groups?
A. Majority rule with minority rights
B. Political stability alone
C. Political development
D. Popular sovereignty alone
Answer: A
Explanation: Majority rule with minority rights. Source context: 6. Majority rule with minority rights: Majority makes decisions but minorities must not be oppressed.
Priority: core
Source: guide line 84

### Q01-024
Question: Which feature encourages diverse political parties and opinions?
A. Political equality
B. State capacity
C. Political pluralism
D. Rule of law
Answer: C
Explanation: Political pluralism. Source context: 7. Political pluralism: Diverse parties and opinions create choices and competition.
Priority: core
Source: guide line 85

### Q01-025
Question: Beyond government, democracy is also what?
A. A purely economic policy
B. A purely military system
C. A social and cultural practice requiring participation and respect
D. A geographical concept
Answer: C
Explanation: A social and cultural practice requiring participation and respect. Source context: Democracy is also a social and cultural practice requiring democratic values, active participation and respect for everyone's rights and dignity.
Priority: core
Source: guide line 92

### Q01-026
Question: What is national unity?
A. Cohesion despite ethnic, religious, cultural and social differences
B. Competition between groups
C. Elimination of all cultural diversity
D. Legal recognition of individuals only
Answer: A
Explanation: Cohesion despite ethnic, religious, cultural and social differences. Source context: National unity: Solidarity, cohesion and collective identity among citizens despite ethnic, religious, cultural and social differences, supporting shared goals, values and interests beyond individual or group identities. Essential for social harmony, political stability and economic development.
Priority: core
Source: guide line 96

### Q01-027
Question: Which aspect of unity means belonging to a single community despite differences?
A. Shared national identity
B. Political stability
C. Crisis response
D. Inclusiveness
Answer: A
Explanation: Shared national identity. Source context: National unity: Solidarity, cohesion and collective identity among citizens despite ethnic, religious, cultural and social differences, supporting shared goals, values and interests beyond individual or group identities. Essential for social harmony, political stability and economic development.
Priority: core
Source: guide line 96

### Q01-028
Question: Which aspect concerns prosperity, security, justice and equality?
A. Civic knowledge
B. Crisis response
C. Political stability
D. Common goals and values
Answer: D
Explanation: Common goals and values. Source context: Common goals and values: Prosperity, security, welfare, democracy, justice and equality.
Priority: core
Source: guide line 101

### Q01-029
Question: Which aspect concerns cooperation and respect for differences?
A. Economic migration
B. Political pluralism
C. Crisis response
D. Social cohesion
Answer: D
Explanation: Social cohesion. Source context: Social cohesion: Cooperation, respect for differences and common good.
Priority: core
Source: guide line 102

### Q01-030
Question: Which aspect reduces internal conflict and promotes mutual understanding?
A. Political stability
B. Crisis response
C. Shared identity
D. Self-awareness
Answer: A
Explanation: Political stability. Source context: Political stability: Reduces internal conflicts, increases mutual understanding.
Priority: core
Source: guide line 103

### Q01-031
Question: Which aspect ensures everyone feels valued and has equal opportunities?
A. Nationalism
B. Political sovereignty
C. Inclusiveness
D. Crisis response
Answer: C
Explanation: Inclusiveness. Source context: Inclusiveness: Everyone feels valued and has equal social, political and economic opportunities.
Priority: core
Source: guide line 104

### Q01-032
Question: Which aspect becomes particularly important during disasters, wars and economic crises?
A. Self-awareness
B. Political pluralism
C. Crisis response
D. Political socialization
Answer: C
Explanation: Crisis response. Source context: Crisis response: Solidarity during disasters, wars and economic crises.
Priority: core
Source: guide line 105

### Q01-033
Question: What does national unity help achieve in the long run?
A. Stability, development, pride and reduced fragmentation
B. More internal division
C. Political exclusion
D. Less cooperation
Answer: A
Explanation: Stability, development, pride and reduced fragmentation. Source context: Importance: Long-term stability and success; reduces division, conflict and fragmentation through common purpose and mutual support; builds pride, loyalty, development and global standing. (The book numbers the importance heading and its explanation separately.)
Priority: core
Source: guide line 106

### Q01-034
Question: What does political culture comprise?
A. Only military policies
B. Opinions, knowledge and attitudes about political affairs and state structure
C. Only economic statistics
D. Only election laws
Answer: B
Explanation: Opinions, knowledge and attitudes about political affairs and state structure. Source context: Political culture: Opinions, knowledge and attitudes concerning political affairs and state structure, including loyalty, belonging, legitimacy and participation. Shaped by history, civilization, geography, political system and external influences. Affects government structure, leadership and people's relationship with politics.
Priority: core
Source: guide line 110

### Q01-035
Question: What shapes political culture?
A. Only election dates
B. History, civilization, geography, political system and external influences
C. Only geography
D. Only age
Answer: B
Explanation: History, civilization, geography, political system and external influences. Source context: Political culture: Opinions, knowledge and attitudes concerning political affairs and state structure, including loyalty, belonging, legitimacy and participation. Shaped by history, civilization, geography, political system and external influences. Affects government structure, leadership and people's relationship with politics.
Priority: core
Source: guide line 110

### Q01-036
Question: What can alienation from national political life produce?
A. Apathy and disengagement
B. Guaranteed stability
C. Automatic participation
D. Higher civic responsibility
Answer: A
Explanation: Apathy and disengagement. Source context: Strong loyalty, citizenship and responsibility encourage voluntary community contribution; alienation can lead to apathy and disengagement.
Priority: core
Source: guide line 112

### Q01-037
Question: When is political stability more likely according to the political culture discussion?
A. When elite and public cultures sharply diverge
B. When all citizens avoid politics
C. When political knowledge disappears
D. When elite and public political cultures are harmonious
Answer: D
Explanation: When elite and public political cultures are harmonious.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-038
Question: Which statement about political culture is correct?
A. It contains subcultures that interact with wider culture
B. It never varies among individuals
C. It consists solely of laws
D. It never varies across countries
Answer: A
Explanation: It contains subcultures that interact with wider culture. Source context: Four characteristics: (1) values, attitudes and knowledge held by society; (2) varies across societies and contains subcultures (youth, ruling elite, workers, peasants and women) that both influence and are influenced by the wider culture; (3) varies among individuals by origin, residence, profession, education and economic status; (4) dynamic, changing with internalized attitudes, state economic/social/political structures and elite involvement in reshaping culture.
Priority: core
Source: guide line 114

### Q01-039
Question: Which factors explain individual differences in political culture?
A. Only military rank
B. Only constitutional articles
C. Only climate
D. Origin, residence, occupation, education and economic status
Answer: D
Explanation: Origin, residence, occupation, education and economic status. Source context: Four characteristics: (1) values, attitudes and knowledge held by society; (2) varies across societies and contains subcultures (youth, ruling elite, workers, peasants and women) that both influence and are influenced by the wider culture; (3) varies among individuals by origin, residence, profession, education and economic status; (4) dynamic, changing with internalized attitudes, state economic/social/political structures and elite involvement in reshaping culture.
Priority: core
Source: guide line 114

### Q01-040
Question: Why is political culture dynamic?
A. Attitudes, state structures and elite influence can change it
B. It is legally impossible to change
C. It is inherited without modification
D. It has no connection to society
Answer: A
Explanation: Attitudes, state structures and elite influence can change it. Source context: Four characteristics: (1) values, attitudes and knowledge held by society; (2) varies across societies and contains subcultures (youth, ruling elite, workers, peasants and women) that both influence and are influenced by the wider culture; (3) varies among individuals by origin, residence, profession, education and economic status; (4) dynamic, changing with internalized attitudes, state economic/social/political structures and elite involvement in reshaping culture.
Priority: core
Source: guide line 114

### Q01-041
Question: What is national security intended to protect?
A. Only government buildings
B. State survival, sovereignty, territorial integrity and public welfare
C. Only electoral results
D. Only trade profits
Answer: B
Explanation: State survival, sovereignty, territorial integrity and public welfare. Source context: National security: Collective duty of leaders and citizens to protect state survival, sovereignty, territorial integrity and public welfare from internal vulnerabilities and external aggression. Includes military attacks, espionage, terrorism, economic turmoil and cyber warfare; also physical, food, job and psychological security. Provides stability, development, innovation, technological advancement, prosperity and fulfillment of political commitments.
Priority: core
Source: guide line 118

### Q01-042
Question: Which is included in the broad concept of national security?
A. Only border geography
B. Food, job and psychological security
C. Only diplomatic relations
D. Only military defense
Answer: B
Explanation: Food, job and psychological security. Source context: National security: Collective duty of leaders and citizens to protect state survival, sovereignty, territorial integrity and public welfare from internal vulnerabilities and external aggression. Includes military attacks, espionage, terrorism, economic turmoil and cyber warfare; also physical, food, job and psychological security. Provides stability, development, innovation, technological advancement, prosperity and fulfillment of political commitments.
Priority: core
Source: guide line 118

### Q01-043
Question: According to the 1991 National Charter, Jordanian national security forms part of what?
A. Only domestic policing
B. A purely economic alliance
C. European security
D. Arab national security
Answer: D
Explanation: Arab national security. Source context: Jordanian national security is part of Arab national security, influencing and being influenced by it positively and negatively.
Priority: core
Source: guide line 130

### Q01-044
Question: What dangers threaten Jordanian and Arab security according to the Charter?
A. Fragmentation and dependence
B. Regional cooperation
C. Social cohesion and self-reliance
D. Economic stability
Answer: A
Explanation: Fragmentation and dependence. Source context: Jordan recognizes dangers of fragmentation and dependence threatening political, economic and social security in Jordan and the Arab world.
Priority: core
Source: guide line 131

### Q01-045
Question: Which national security approach includes water scarcity, unemployment and environment?
A. Electoral reform
B. Political pluralism
C. Military-only defense
D. Comprehensive security
Answer: D
Explanation: Comprehensive security. Source context: Comprehensive security: Beyond military defense, includes economic stability, social cohesion and environmental sustainability. Unemployment and resource scarcity, especially water, threaten internal stability.
Priority: core
Source: guide line 132

### Q01-046
Question: Which institutions address both military and nonmilitary security challenges?
A. Only foreign embassies
B. Only parliament
C. Armed forces, security agencies and civilian agencies
D. Only schools
Answer: C
Explanation: Armed forces, security agencies and civilian agencies. Source context: Defense and security framework: Armed Forces and security agencies protect borders/internal stability; civilian agencies address nonmilitary threats through health, education and development.
Priority: core
Source: guide line 133

### Q01-047
Question: Which security dimension includes international alliances and global public opinion?
A. Political and diplomatic engagement
B. Internal economic migration
C. Political socialization
D. Judicial reform
Answer: A
Explanation: Political and diplomatic engagement. Source context: Political and diplomatic engagement: Alliances, international organizations, diplomatic ties and global public opinion advance national objectives.
Priority: core
Source: guide line 134

### Q01-048
Question: Which security dimension integrates military, diplomatic, economic and social sectors?
A. Political equality
B. Individual self-awareness
C. Internal and external coordination
D. National identity
Answer: C
Explanation: Internal and external coordination. Source context: Internal and external coordination: Integrate military, diplomacy, economy and social fields for internal/external challenges.
Priority: core
Source: guide line 135

### Q01-049
Question: Which security dimension concerns neighbors, global powers and regional coexistence?
A. Public education
B. Civic knowledge
C. Geopolitical considerations
D. Political participation
Answer: C
Explanation: Geopolitical considerations. Source context: Geopolitical considerations: Relations with neighbors and global powers, peaceful coexistence and regional stability.
Priority: core
Source: guide line 136

### Q01-050
Question: What distinguishes a regulation from instructions?
A. Regulation applies a law; instructions can apply a law or regulation
B. Instructions can only apply a constitution
C. Both are approved only by Parliament
D. Regulations never apply laws
Answer: A
Explanation: Regulation applies a law; instructions can apply a law or regulation.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-051
Question: Who redrafts a regulation before Cabinet approval?
A. House of Representatives
B. Audit Bureau
C. Legislation and Opinion Bureau
D. Ministry of Water
Answer: C
Explanation: Legislation and Opinion Bureau. Source context: MCQ trap: Cabinet + Legislation and Opinion Bureau = regulation. Director/president/board/minister = instructions. Both are published in the Official Gazette.
Priority: core
Source: guide line 146

### Q01-052
Question: Where are both regulations and instructions published?
A. Official Gazette
B. Party newsletter
C. Court minutes only
D. National anthem
Answer: A
Explanation: Official Gazette. Source context: MCQ trap: Cabinet + Legislation and Opinion Bureau = regulation. Director/president/board/minister = instructions. Both are published in the Official Gazette.
Priority: core
Source: guide line 146

### Q01-053
Question: What are traditions?
A. Only written legislation
B. Practices and cultural expressions passed between generations
C. Political institutions
D. New temporary preferences
Answer: B
Explanation: Practices and cultural expressions passed between generations. Source context: Traditions: Social practices and cultural expressions passed from generation to generation. Include customs, beliefs, rituals, values, proverbs, songs, popular poetry, legends and tales. Often highly regarded and produce sanctity and pride.
Priority: core
Source: guide line 150

### Q01-054
Question: What are customs?
A. Habitual, socially accepted practices regularly observed
B. Temporary individual opinions
C. Government budgets
D. Constitutional amendments
Answer: A
Explanation: Habitual, socially accepted practices regularly observed. Source context: Customs: Established, habitual, socially accepted behaviors regularly observed. Learned through socialization, adherence to patterns, intentionality and persistence; part of cultural identity/social interaction, giving reassurance and pride.
Priority: core
Source: guide line 151

### Q01-055
Question: What are social values?
A. Official population statistics
B. Core beliefs and principles guiding norms and behavior
C. Only religious holidays
D. Only political parties
Answer: B
Explanation: Core beliefs and principles guiding norms and behavior. Source context: Social values: Core beliefs and principles guiding behavior and society's norms; determine what is desirable, important and acceptable, influencing goals, behaviors and lifestyles.
Priority: core
Source: guide line 152

### Q01-056
Question: Which category of Jordanian customs covers roles and obligations among relatives?
A. Dispute resolution
B. Family relationships
C. Celebrations
D. Food and clothing
Answer: B
Explanation: Family relationships. Source context: 1. Family relationships: Roles, obligations, interactions and rituals strengthening family ties.
Priority: core
Source: guide line 156

### Q01-057
Question: Which category includes customary justice, reparation and reconciliation?
A. Family relationships
B. Vengeance and dispute resolution
C. Food and clothing
D. Celebrations
Answer: B
Explanation: Vengeance and dispute resolution. Source context: 3. Vengeance and dispute resolution: Customary justice, conflict settlement, reparation and reconciliation; maintaining social order.
Priority: core
Source: guide line 158

### Q01-058
Question: Which category reinforces heritage through festivals and gatherings?
A. Dispute resolution
B. Food and clothing
C. Celebrations, events and holidays
D. Political institutions
Answer: C
Explanation: Celebrations, events and holidays. Source context: 4. Celebrations, events and holidays: Religious/national holidays, ceremonies, festivals and gatherings reinforcing heritage.
Priority: core
Source: guide line 159

### Q01-059
Question: Which values are especially associated with Bedouin life?
A. Material profit, modernization and competition
B. Lineage loyalty, honor, hospitality and chivalry
C. Only land and agriculture
D. Political pluralism and elections
Answer: B
Explanation: Lineage loyalty, honor, hospitality and chivalry.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-060
Question: Which values are especially associated with rural life?
A. Industrial ambition and modernization
B. Material profit and competition
C. Only military discipline
D. Land, family, livelihood and agriculture
Answer: D
Explanation: Land, family, livelihood and agriculture.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-061
Question: Which values are especially associated with urban life?
A. Material profit, ambition, modernization and competition
B. Lineage loyalty and vengeance
C. Only agriculture and land
D. Only tribal hospitality
Answer: A
Explanation: Material profit, ambition, modernization and competition.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-062
Question: What is political development?
A. Evolution of political institutions toward effective, stable and responsive governance
B. Acquiring political attitudes as a child
C. A society's existing political beliefs
D. Changing national borders
Answer: A
Explanation: Evolution of political institutions toward effective, stable and responsive governance.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-063
Question: Which aspect builds lasting political institutions and legal systems?
A. Institutionalization
B. Social integration
C. Democratization
D. Political participation
Answer: A
Explanation: Institutionalization. Source context: 1. Institutionalization: Stable enduring institutions, legal system, political parties and governance organizations.
Priority: core
Source: guide line 173

### Q01-064
Question: Which aspect extends voting, advocacy and public office opportunities?
A. Political stability
B. Political participation
C. State capacity
D. Institutionalization
Answer: B
Explanation: Political participation. Source context: 2. Political participation: More opportunities for voting, advocacy and public office; extending rights to marginalized groups.
Priority: core
Source: guide line 174

### Q01-065
Question: Which aspect seeks peaceful transfers of power and predictable conflict management?
A. Political stability
B. State capacity
C. Political participation
D. Social integration
Answer: A
Explanation: Political stability. Source context: 3. Political stability: Predictability, peaceful power transitions, conflict management and rule of law; reduced risk of coups/violent conflict.
Priority: core
Source: guide line 175

### Q01-066
Question: Which aspect transitions authoritarian government toward democratic rule?
A. Institutionalization
B. Political culture
C. Democratization
D. Nationalism
Answer: C
Explanation: Democratization. Source context: 4. Democratization: Transition from authoritarian/non-democratic to democratic government; fair elections, civil liberties and accountability.
Priority: core
Source: guide line 176

### Q01-067
Question: Which aspect means effective implementation of policy, law and public services?
A. Political pluralism
B. Political socialization
C. State capacity
D. Political participation
Answer: C
Explanation: State capacity. Source context: 5. State capacity: Effective policy implementation, law enforcement, public services, promises delivered and resources managed efficiently.
Priority: core
Source: guide line 177

### Q01-068
Question: Which aspect addresses inequality and representation of diverse groups?
A. Political stability
B. Institutionalization
C. Social integration
D. State capacity
Answer: C
Explanation: Social integration. Source context: 6. Social integration: Cohesive society where diverse groups are represented, addressing identity, ethnicity and inequality.
Priority: core
Source: guide line 178

### Q01-069
Question: What is Jordan's political development royal vision?
A. A purely economic system
B. A state without constitutional authorities
C. A system excluding youth
D. Modern, progressive, tolerant democratic Arab-Islamic state
Answer: D
Explanation: Modern, progressive, tolerant democratic Arab-Islamic state. Source context: Royal vision: modern, progressive, tolerant democratic Arab-Islamic state based on justice, rights and rule of law.
Priority: core
Source: guide line 182

### Q01-070
Question: Which three constitutional authorities are to be activated?
A. Local, tribal and foreign
B. Judicial, legislative and executive
C. Military, economic and religious
D. Education, health and trade
Answer: B
Explanation: Judicial, legislative and executive. Source context: Activate the judicial, legislative and executive authorities; foster democracy, equality, participation and youth involvement.
Priority: core
Source: guide line 183

### Q01-071
Question: Which is a challenge to political development in Jordan?
A. Weak youth and women's participation
B. Increased participation and media freedom
C. Equal political opportunities
D. Effective party building
Answer: A
Explanation: Weak youth and women's participation.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-072
Question: Which ministry helps implement the royal political development vision?
A. Ministry of Education only
B. Ministry of Political Development and Parliamentary Affairs
C. Ministry of Water and Irrigation
D. Ministry of Tourism
Answer: B
Explanation: Ministry of Political Development and Parliamentary Affairs. Source context: Ministry of Political Development and Parliamentary Affairs helps implement royal vision; obstacles include favoritism, nepotism and corruption.
Priority: core
Source: guide line 186

### Q01-073
Question: Which obstacles face that ministry according to the guide?
A. Youth involvement and justice
B. Free elections and accountability
C. Media freedom and equality
D. Favoritism, nepotism and corruption
Answer: D
Explanation: Favoritism, nepotism and corruption. Source context: Ministry of Political Development and Parliamentary Affairs helps implement royal vision; obstacles include favoritism, nepotism and corruption.
Priority: core
Source: guide line 186

### Q01-074
Question: What is political socialization?
A. Existing government structure only
B. Acquiring political beliefs, attitudes, values and behaviors
C. Changing territory
D. Reforming state institutions
Answer: B
Explanation: Acquiring political beliefs, attitudes, values and behaviors. Source context: Political socialization: Process of acquiring and internalizing political beliefs, values, attitudes and behaviors, shaping political identity, engagement, understanding and role in the political system. Occurs through family, education, media, peers and personal experiences.
Priority: core
Source: guide line 190

### Q01-075
Question: Which is the first and generally most influential socialization agent?
A. Political institutions
B. Family
C. Media
D. Peer groups
Answer: B
Explanation: Family.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-076
Question: Which stage teaches authority, rules and fairness through family?
A. Adulthood
B. Later adulthood
C. Young adulthood
D. Early childhood
Answer: D
Explanation: Early childhood.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-077
Question: Which stage involves schools, peers and increasing media exposure?
A. Later adulthood
B. Early childhood
C. Adolescence
D. Adulthood
Answer: C
Explanation: Adolescence.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-078
Question: Which stage involves first voting, campus activism and entering the workforce?
A. Adolescence
B. Later adulthood
C. Young adulthood
D. Early childhood
Answer: C
Explanation: Young adulthood.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-079
Question: Which stage often shifts priorities to taxes, careers, family and healthcare?
A. Early childhood
B. Adulthood
C. Young adulthood
D. Adolescence
Answer: B
Explanation: Adulthood.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-080
Question: Which stage emphasizes retirement, legacy and passing beliefs to grandchildren?
A. Adolescence
B. Early childhood
C. Young adulthood
D. Later adulthood
Answer: D
Explanation: Later adulthood.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-081
Question: What is direct political socialization?
A. Explicit teaching such as civics classes
B. Unconscious exposure to entertainment only
C. Implicit messages during family conversations
D. Economic migration
Answer: A
Explanation: Explicit teaching such as civics classes.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-082
Question: What is indirect political socialization?
A. Explicit teaching of norms
B. Implicit messages through daily experience
C. Formal civics instruction
D. Written political instruction
Answer: B
Explanation: Implicit messages through daily experience. Source context: Indirect socialization: Implicit messages through daily experience (family discussions, media consumption).
Priority: core
Source: guide line 215

### Q01-083
Question: What does political socialization influence?
A. Only rainfall patterns
B. Only income statistics
C. Political efficacy, voting, protesting and joining groups
D. Only national borders
Answer: C
Explanation: Political efficacy, voting, protesting and joining groups. Source context: Impact on political behavior: Affects view of one's role, political efficacy, voting, protesting and joining political groups.
Priority: core
Source: guide line 216

### Q01-084
Question: Which wider factors influence socialization?
A. Only personal income
B. National history, economic conditions and social movements
C. Only geographical coordinates
D. Only election day
Answer: B
Explanation: National history, economic conditions and social movements. Source context: Cultural/societal influence: National history, economic conditions and social movements shape the content and direction of socialization.
Priority: core
Source: guide line 217

### Q01-085
Question: Which concept describes the individual legally recognized as member of a sovereign state?
A. National identity
B. Citizenship
C. Nation
D. Citizen
Answer: D
Explanation: Citizen.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-086
Question: Which political socialization agent reinforces attitudes through voting and party membership?
A. Peer groups
B. Family
C. Media
D. Political institutions
Answer: D
Explanation: Political institutions. Source context: Political development: Evolution and maturation of a political system toward stability, effectiveness and responsiveness. Improves institutions and practices so society can manage conflicts, make collective decisions and implement policies.
Priority: core
Source: guide line 169

### Q01-087
Question: Which forms of media affect political socialization?
A. Only official laws
B. News, social media and entertainment
C. Only public speeches
D. Only textbooks
Answer: B
Explanation: News, social media and entertainment.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-088
Question: What influence can peers have during adolescence?
A. Reinforce or challenge beliefs learned from family and school
B. Prevent all political learning
C. Replace every other influence
D. Provide only legal rights
Answer: A
Explanation: Reinforce or challenge beliefs learned from family and school.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-089
Question: What does entering the workforce expose young adults to?
A. Only retirement issues
B. Only national holidays
C. Only early childhood rules
D. Social and economic realities including labor and social justice
Answer: D
Explanation: Social and economic realities including labor and social justice.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-090
Question: Which civic activities reinforce political identity in adulthood?
A. Only attending primary school
B. Only watching entertainment
C. Voting, volunteering and serving on local boards
D. Avoiding all public affairs
Answer: C
Explanation: Voting, volunteering and serving on local boards.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-091
Question: Which aspect of national education does learning national symbols and anthem illustrate?
A. Emotional pillar
B. Practical pillar
C. Intellectual pillar
D. Economic pillar
Answer: A
Explanation: Emotional pillar.
Priority: core
Source: Introduction to National Education (pp. 11–26)

### Q01-092
Question: Which examples are listed as traditional cultural expressions?
A. Treaties, armies and borders
B. Dams, reservoirs and rivers
C. Proverbs, songs, popular poetry, legends and tales
D. Budgets, laws, election results and court rulings
Answer: C
Explanation: Proverbs, songs, popular poetry, legends and tales. Source context: Traditions: Social practices and cultural expressions passed from generation to generation. Include customs, beliefs, rituals, values, proverbs, songs, popular poetry, legends and tales. Often highly regarded and produce sanctity and pride.
Priority: core
Source: guide line 150

### Q01-093
Question: What characterizes the acquisition of customs?
A. A single random action
B. No repetition or social acceptance
C. Instant compulsory legislation only
D. Socialization, established patterns, intentionality and persistence
Answer: D
Explanation: Socialization, established patterns, intentionality and persistence. Source context: Customs: Established, habitual, socially accepted behaviors regularly observed. Learned through socialization, adherence to patterns, intentionality and persistence; part of cultural identity/social interaction, giving reassurance and pride.
Priority: core
Source: guide line 151

### Q01-094
Question: What reforms are included in Jordan's political development strategy?
A. Restricting all youth involvement
B. Removing judicial authority
C. Judicial legislation, media freedom, election laws and party building
D. Eliminating party building and media freedom
Answer: C
Explanation: Judicial legislation, media freedom, election laws and party building. Source context: Reform judicial legislation, media freedom, election laws and political party building.
Priority: core
Source: guide line 184

### Q01-095
Question: Which meaning of homeland is described by: Birthplace, upbringing, family and heritage; source of identity, tradition and shared memories.?
A. Emotional and symbolic meaning
B. Security and defense
C. Personal and cultural connection
D. National and ethnic significance
Answer: C
Explanation: Personal and cultural connection | Birthplace, upbringing, family and heritage; source of identity, tradition and shared memories.
Priority: core
Source: guide line 28

### Q01-096
Question: Which meaning of homeland is described by: Region historically inhabited by a nation or ethnic group; collective history, cultural significance, unity and shared identity.?
A. National and ethnic significance
B. Personal and cultural connection
C. Political implications
D. Security and defense
Answer: A
Explanation: National and ethnic significance | Region historically inhabited by a nation or ethnic group; collective history, cultural significance, unity and shared identity.
Priority: core
Source: guide line 29

### Q01-097
Question: Which meaning of homeland is described by: Sovereignty, nationalism, self-determination; may support independence, autonomy or the right to govern traditional/ancestral lands.?
A. Emotional and symbolic meaning
B. Security and defense
C. Personal and cultural connection
D. Political implications
Answer: D
Explanation: Political implications | Sovereignty, nationalism, self-determination; may support independence, autonomy or the right to govern traditional/ancestral lands.
Priority: core
Source: guide line 30

### Q01-098
Question: Which meaning of homeland is described by: Nostalgia, loss, belonging; migrants and displaced people may see it as a place of return, safety, familiarity and cultural roots.?
A. Emotional and symbolic meaning
B. Political implications
C. Security and defense
D. National and ethnic significance
Answer: A
Explanation: Emotional and symbolic meaning | Nostalgia, loss, belonging; migrants and displaced people may see it as a place of return, safety, familiarity and cultural roots.
Priority: core
Source: guide line 31

### Q01-099
Question: Which meaning of homeland is described by: Protecting the country against external threats, terrorism and other security concerns (e.g. homeland security in the United States).?
A. Personal and cultural connection
B. Political implications
C. Security and defense
D. National and ethnic significance
Answer: C
Explanation: Security and defense | Protecting the country against external threats, terrorism and other security concerns (e.g. homeland security in the United States).
Priority: core
Source: guide line 32

### Q01-100
Question: Which concept matches this definition: Collective sense of belonging to a nation, including its values, traditions, language, culture and historical experiences. Produces unity and solidarity and distinguishes that nation from others.?
A. Loyalty
B. National identity
C. Citizen
D. Nation
Answer: B
Explanation: National identity | Collective sense of belonging to a nation, including its values, traditions, language, culture and historical experiences. Produces unity and solidarity and distinguishes that nation from others.
Priority: core
Source: guide line 38

### Q01-101
Question: Which concept matches this definition: Respecting others' legal rights and committing to one's corresponding duties; understanding legal responsibilities and actively interacting with society.?
A. Citizenship
B. Belonging
C. Nationalism
D. National identity
Answer: A
Explanation: Citizenship | Respecting others' legal rights and committing to one's corresponding duties; understanding legal responsibilities and actively interacting with society.
Priority: core
Source: guide line 39

### Q01-102
Question: Which concept matches this definition: Large group sharing identity based on culture, language, ethnicity, history, and sometimes geography or political governance. A social and cultural construct, not just a territory or political state.?
A. Nation
B. Citizenship
C. Loyalty
D. Belonging
Answer: A
Explanation: Nation | Large group sharing identity based on culture, language, ethnicity, history, and sometimes geography or political governance. A social and cultural construct, not just a territory or political state.
Priority: core
Source: guide line 40

### Q01-103
Question: Which concept matches this definition: Ideology and sociopolitical movement emphasizing a nation's interests, culture, identity and sovereignty. Characterized by national pride, self-determination and independence. Shaped nation-states, independence movements and conflicts.?
A. Citizenship
B. Nationalism
C. Nation
D. Loyalty
Answer: B
Explanation: Nationalism | Ideology and sociopolitical movement emphasizing a nation's interests, culture, identity and sovereignty. Characterized by national pride, self-determination and independence. Shaped nation-states, independence movements and conflicts.
Priority: core
Source: guide line 41

### Q01-104
Question: Which concept matches this definition: Genuine, sincere affiliation with the homeland in thought and action; pride in it and dedication to serving and defending it.?
A. Citizen
B. Nation
C. Nationalism
D. Belonging
Answer: D
Explanation: Belonging | Genuine, sincere affiliation with the homeland in thought and action; pride in it and dedication to serving and defending it.
Priority: core
Source: guide line 42

### Q01-105
Question: Which concept matches this definition: Strong support, allegiance or commitment to a person, group, cause, nation or institution; steadfastness, obligations, shared principles, trust, fidelity and devotion.?
A. Nation
B. National identity
C. Citizen
D. Loyalty
Answer: D
Explanation: Loyalty | Strong support, allegiance or commitment to a person, group, cause, nation or institution; steadfastness, obligations, shared principles, trust, fidelity and devotion.
Priority: core
Source: guide line 43

### Q01-106
Question: Which concept matches this definition: Individual legally recognized as a member of a sovereign state or nation, with rights, duties and privileges (voting, running for office, state protection, obeying laws).?
A. National identity
B. Citizen
C. Citizenship
D. Belonging
Answer: B
Explanation: Citizen | Individual legally recognized as a member of a sovereign state or nation, with rights, duties and privileges (voting, running for office, state protection, obeying laws).
Priority: core
Source: guide line 44

### Q01-107
Question: Which national education pillar includes these examples: History, civics, social studies, government institutions and constitution.?
A. Intellectual (knowledge)
B. Emotional (feelings)
C. Political
D. Practical (actions)
Answer: A
Explanation: Intellectual (knowledge) | Understand national history, achievements, state institutions, public authorities, constitutional principles, governance and legal rights/responsibilities. Cultivates informed citizens who understand political and social systems. | History, civics, social studies, government institutions and constitution.
Priority: core
Source: guide line 65

### Q01-108
Question: Which national education pillar includes these examples: National holidays, symbols, anthem, historical events and cultural narratives.?
A. Political
B. Practical (actions)
C. Emotional (feelings)
D. Intellectual (knowledge)
Answer: C
Explanation: Emotional (feelings) | Deepen citizenship and belonging; emotional attachment, loyalty, pride, patriotism and shared identity through national values, heritage and achievements. | National holidays, symbols, anthem, historical events and cultural narratives.
Priority: core
Source: guide line 66

### Q01-109
Question: Which national education pillar includes these examples: Volunteering, community projects, democratic participation and actions for national welfare.?
A. Political
B. Intellectual (knowledge)
C. Practical (actions)
D. Emotional (feelings)
Answer: C
Explanation: Practical (actions) | Connect knowledge and emotional attachment with behavior that benefits national development. Emphasizes civic engagement and community service. | Volunteering, community projects, democratic participation and actions for national welfare.
Priority: core
Source: guide line 67

### Q01-110
Question: Which form of democracy is described by: Citizens make decisions themselves, often through referendums or initiatives.?
A. Direct democracy
B. Representative democracy
C. Constitutional monarchy
D. Political pluralism
Answer: A
Explanation: Direct democracy | Citizens make decisions themselves, often through referendums or initiatives.
Priority: core
Source: guide line 89

### Q01-111
Question: Which form of democracy is described by: Citizens elect representatives who decide on their behalf; common in modern democracies.?
A. Constitutional monarchy
B. Representative democracy
C. Political pluralism
D. Direct democracy
Answer: B
Explanation: Representative democracy | Citizens elect representatives who decide on their behalf; common in modern democracies.
Priority: core
Source: guide line 90

### Q01-112
Question: Which constitutional article concerns Defense Law?
A. 15
B. 25
C. 124
D. 125
Answer: C
Explanation: 124 | Defense Law
Priority: core
Source: guide line 124

### Q01-113
Question: Which constitutional article concerns Emergency states and martial law?
A. 125
B. 124
C. 25
D. 15
Answer: A
Explanation: 125 | Emergency states and martial law
Priority: core
Source: guide line 125

### Q01-114
Question: Which constitutional article concerns Press, publications and radio restrictions in emergencies/martial law for public safety and national defense, as described in the book.?
A. 125
B. 15
C. 25
D. 124
Answer: B
Explanation: 15 | Press, publications and radio restrictions in emergencies/martial law for public safety and national defense, as described in the book.
Priority: core
Source: guide line 126

### Q01-115
Question: Which legal concept has this approval process or requirement: Must be respected and obeyed.?
A. Regulation
B. Treaty
C. Instructions
D. Law
Answer: D
Explanation: Law | Rules, regulations and instructions issued by state/official bodies to organize people's affairs and behavior. | Must be respected and obeyed.
Priority: core
Source: guide line 142

### Q01-116
Question: Which legal concept has this approval process or requirement: Drafted by concerned department/institution/body/ministry; redrafted by Legislation and Opinion Bureau; approved by Cabinet; published in Official Gazette.?
A. Instructions
B. Law
C. Regulation
D. Treaty
Answer: C
Explanation: Regulation | Applies provisions of a law. | Drafted by concerned department/institution/body/ministry; redrafted by Legislation and Opinion Bureau; approved by Cabinet; published in Official Gazette.
Priority: core
Source: guide line 143

### Q01-117
Question: Which legal concept has this approval process or requirement: Drafted by concerned department/institution/body/ministry; approved by general director, president, board of directors or minister; published in Official Gazette.?
A. Regulation
B. Law
C. Instructions
D. Treaty
Answer: C
Explanation: Instructions | Apply provisions of a law OR regulation. | Drafted by concerned department/institution/body/ministry; approved by general director, president, board of directors or minister; published in Official Gazette.
Priority: core
Source: guide line 144

### Q01-118
Question: Which political socialization agent has this role: Usually first and most influential; early political attitudes and party preferences.?
A. Media
B. Education system
C. Family
D. Peer groups
Answer: C
Explanation: Family | Usually first and most influential; early political attitudes and party preferences.
Priority: core
Source: guide line 196

### Q01-119
Question: Which political socialization agent has this role: Civics, history, values, citizenship and identity.?
A. Media
B. Education system
C. Family
D. Peer groups
Answer: B
Explanation: Education system | Civics, history, values, citizenship and identity.
Priority: core
Source: guide line 197

### Q01-120
Question: Which political socialization agent has this role: Friends and colleagues, especially adolescence and adulthood.?
A. Education system
B. Peer groups
C. Media
D. Political institutions
Answer: B
Explanation: Peer groups | Friends and colleagues, especially adolescence and adulthood.
Priority: core
Source: guide line 198

### Q01-121
Question: Which political socialization agent has this role: News, social media and entertainment shape perceptions and knowledge.?
A. Media
B. Family
C. Education system
D. Peer groups
Answer: A
Explanation: Media | News, social media and entertainment shape perceptions and knowledge.
Priority: core
Source: guide line 199

### Q01-122
Question: Which political socialization agent has this role: Voting, party affiliation and institutional engagement reinforce attitudes and behavior.?
A. Peer groups
B. Political institutions
C. Education system
D. Family
Answer: B
Explanation: Political institutions | Voting, party affiliation and institutional engagement reinforce attitudes and behavior.
Priority: core
Source: guide line 200

### Q01-123
Question: Which political socialization stage is characterized by: Family influence: observe parents/relatives, develop early party affiliations/ideologies. Learn basic authority, rules, fairness and justice.?
A. Adolescence (secondary)
B. Later adulthood
C. Adulthood
D. Early childhood (primary)
Answer: D
Explanation: Early childhood (primary) | Family influence: observe parents/relatives, develop early party affiliations/ideologies. Learn basic authority, rules, fairness and justice.
Priority: core
Source: guide line 206

### Q01-124
Question: Which political socialization stage is characterized by: Schools teach civics, history, government, rights and responsibilities; peers reinforce/challenge inherited beliefs and shape individual identity; media/social media expose young people to events, figures, issues and diverse viewpoints.?
A. Later adulthood
B. Young adulthood
C. Adolescence (secondary)
D. Adulthood
Answer: C
Explanation: Adolescence (secondary) | Schools teach civics, history, government, rights and responsibilities; peers reinforce/challenge inherited beliefs and shape individual identity; media/social media expose young people to events, figures, issues and diverse viewpoints.
Priority: core
Source: guide line 207

### Q01-125
Question: Which political socialization stage is characterized by: Universities encourage critical thinking, diverse ideas, campus organizations, debate and activism; workplace exposes people to social/economic realities and labor, economy and social justice issues; first voting, campaigns, political organizations consolidate identity.?
A. Young adulthood
B. Early childhood (primary)
C. Adulthood
D. Later adulthood
Answer: A
Explanation: Young adulthood | Universities encourage critical thinking, diverse ideas, campus organizations, debate and activism; workplace exposes people to social/economic realities and labor, economy and social justice issues; first voting, campaigns, political organizations consolidate identity.
Priority: core
Source: guide line 208

### Q01-126
Question: Which political socialization stage is characterized by: Careers and family shift interests toward economic stability, taxes, education and healthcare; beliefs become pragmatic; media use continues, sometimes specialized or ideologically aligned; voting, volunteering and local boards reinforce civic duty.?
A. Adulthood
B. Young adulthood
C. Early childhood (primary)
D. Adolescence (secondary)
Answer: A
Explanation: Adulthood | Careers and family shift interests toward economic stability, taxes, education and healthcare; beliefs become pragmatic; media use continues, sometimes specialized or ideologically aligned; voting, volunteering and local boards reinforce civic duty.
Priority: core
Source: guide line 209

### Q01-127
Question: Which political socialization stage is characterized by: Reflection and legacy, retirement, healthcare and social security; influence children/grandchildren by passing on beliefs and values.?
A. Later adulthood
B. Adulthood
C. Early childhood (primary)
D. Young adulthood
Answer: A
Explanation: Later adulthood | Reflection and legacy, retirement, healthcare and social security; influence children/grandchildren by passing on beliefs and values.
Priority: core
Source: guide line 210

## Chapter 2 — Geography and population (pp. 28–39) (179 questions)

### Q02-001
Question: Which three continents does Jordan connect?
A. Asia, Australia and Europe
B. Africa, Europe and North America
C. Asia, Africa and South America
D. Asia, Africa and Europe
Answer: D
Explanation: Asia, Africa and Europe. Source context: Jordan (the Hashemite Kingdom of Jordan) lies in the heart of the Middle East, connecting Asia, Africa and Europe. Its geography includes deserts, fertile plains, rugged highlands and a small coastline, producing climatic diversity and environmental challenges.
Priority: core
Source: guide line 227

### Q02-002
Question: Where is Jordan situated in the Arabian Peninsula?
A. Northeastern part
B. Southeastern part
C. Northwestern part
D. Southwestern part
Answer: C
Explanation: Northwestern part.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-003
Question: What are Jordan's longitude and latitude ranges?
A. 29–34° E and 35–39° N
B. 25–29° E and 39–44° N
C. 35–39° E and 29–34° N
D. 35–39° W and 29–34° S
Answer: C
Explanation: 35–39° E and 29–34° N.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-004
Question: Which country borders Jordan to the north?
A. Syria
B. Saudi Arabia
C. Egypt
D. Iraq
Answer: A
Explanation: Syria. Source context: Borders according to the book: Syria north, Saudi Arabia south, Iraq and Saudi Arabia east, historical Palestine west. Gulf of Aqaba southwest provides sea access for trade and naval activities.
Priority: core
Source: guide line 231

### Q02-005
Question: Which countries border Jordan to the east according to the geography section?
A. Iraq and Saudi Arabia
B. Syria and Egypt
C. Lebanon and Syria
D. Egypt and Palestine
Answer: A
Explanation: Iraq and Saudi Arabia. Source context: Borders according to the book: Syria north, Saudi Arabia south, Iraq and Saudi Arabia east, historical Palestine west. Gulf of Aqaba southwest provides sea access for trade and naval activities.
Priority: core
Source: guide line 231

### Q02-006
Question: Which water body gives Jordan sea access?
A. Mediterranean Sea directly
B. Gulf of Aden
C. Gulf of Aqaba
D. Persian Gulf
Answer: C
Explanation: Gulf of Aqaba. Source context: Borders according to the book: Syria north, Saudi Arabia south, Iraq and Saudi Arabia east, historical Palestine west. Gulf of Aqaba southwest provides sea access for trade and naval activities.
Priority: core
Source: guide line 231

### Q02-007
Question: What makes Jordan important for modern geopolitics?
A. An extensive ocean coastline
B. Being the world's largest oil producer
C. Regional mediation, refugees, energy security and trade routes
D. Control of central Siberia
Answer: C
Explanation: Regional mediation, refugees, energy security and trade routes. Source context: Modern importance: regional stability (borders with Israel, Syria, Iraq, Saudi Arabia as listed in this subsection), mediation, hosting refugees, security of energy supplies and trade routes connecting Arabian Peninsula, Levant and beyond. Jordan is not a major oil producer. Its foreign policy and stability affect both Heartland and Rimland power balances.
Priority: core
Source: guide line 241

### Q02-008
Question: Who developed Heartland Theory and when?
A. Halford Mackinder, 1950
B. Nicholas Spykman, 1904
C. Nicholas Spykman, 1921
D. Halford Mackinder, 1904
Answer: D
Explanation: Halford Mackinder, 1904.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-009
Question: What does Heartland Theory emphasize?
A. The Arabian Peninsula alone
B. North African deserts
C. Central Eurasia from Eastern Europe to Siberia
D. Only coastal Eurasia
Answer: C
Explanation: Central Eurasia from Eastern Europe to Siberia.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-010
Question: What role does Jordan play in Heartland Theory?
A. It is outside Eurasian geopolitics entirely
B. It is in Siberia
C. Buffer and access point outside but near Heartland
D. It is the center of Heartland
Answer: C
Explanation: Buffer and access point outside but near Heartland.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-011
Question: Who developed Rimland Theory?
A. Winston Churchill
B. Halford Mackinder
C. Nicholas Spykman
D. Ibn Manzur
Answer: C
Explanation: Nicholas Spykman.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-012
Question: Which region is emphasized by Rimland Theory?
A. Central Siberia alone
B. Eurasian coastal fringes
C. The Americas alone
D. Central Africa
Answer: B
Explanation: Eurasian coastal fringes.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-013
Question: Why is Jordan significant in Rimland Theory?
A. Its major oil production
B. It is at the center of Siberia
C. Middle Eastern position, alliances and regional stability
D. Its isolation from trade routes
Answer: C
Explanation: Middle Eastern position, alliances and regional stability.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-014
Question: Which geographical region includes the Jordan River and Dead Sea?
A. Badia
B. Central Plateau
C. Highlands
D. Jordan Rift Valley
Answer: D
Explanation: Jordan Rift Valley.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-015
Question: How far does the Great Rift Valley extend according to the text?
A. Northern Syria to central Mozambique
B. Egypt to Morocco
C. Aqaba to Amman
D. Iraq to Iran
Answer: A
Explanation: Northern Syria to central Mozambique.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-016
Question: How low is the Dead Sea approximately?
A. 430 m below sea level
B. 540 m below sea level
C. 325 m below sea level
D. 85 m below sea level
Answer: A
Explanation: 430 m below sea level.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-017
Question: Why is the arid Jordan Rift Valley agriculturally important?
A. Mountain snowfall only
B. Heavy rainfall throughout the year
C. River irrigation
D. Absence of water
Answer: C
Explanation: River irrigation.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-018
Question: Which region is mountainous, forested and cooler and wetter?
A. Badia
B. Jordan Rift Valley
C. Highlands
D. Central Plateau
Answer: C
Explanation: Highlands.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-019
Question: Which region contains most population and Amman according to the topography section?
A. Badia
B. Eastern Desert
C. Jordan Rift Valley
D. Central Plateau
Answer: D
Explanation: Central Plateau.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-020
Question: Which oases are examples in Badia?
A. Amman, Salt and Irbid
B. Aqaba, Karak and Jerash
C. Azraq, Bayer and Jafar
D. Ma'in, Afra and Zara
Answer: C
Explanation: Azraq, Bayer and Jafar.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-021
Question: Which climate features hot dry summers and cool wet winters?
A. Mediterranean
B. Desert
C. Polar
D. Tropical monsoon
Answer: A
Explanation: Mediterranean. Source context: Mediterranean / Eastern Mediterranean: Highlands and especially northwest; hot dry summers, cool wet winters; book also describes scorching summers and chilly wet winters. Temperatures generally 0–40°C with occasional extremes. Annual rain below 50 mm in desert to over 600 mm in north.
Priority: core
Source: guide line 265

### Q02-022
Question: Where does desert climate dominate?
A. Northwestern highlands
B. Western mountains only
C. Eastern and southern Jordan
D. Jordan Valley only
Answer: C
Explanation: Eastern and southern Jordan. Source context: Desert: Eastern/southern Jordan; very hot summers, cold winters, little rainfall.
Priority: core
Source: guide line 266

### Q02-023
Question: What general temperature range does the text give for Mediterranean climate?
A. 30–60°C
B. −20–10°C
C. 0–40°C
D. 10–25°C
Answer: C
Explanation: 0–40°C. Source context: Mediterranean / Eastern Mediterranean: Highlands and especially northwest; hot dry summers, cool wet winters; book also describes scorching summers and chilly wet winters. Temperatures generally 0–40°C with occasional extremes. Annual rain below 50 mm in desert to over 600 mm in north.
Priority: core
Source: guide line 265

### Q02-024
Question: How does annual rainfall vary across Jordan?
A. Below 50 mm in deserts to over 600 mm in north
B. Above 600 mm everywhere
C. Highest in eastern deserts
D. Uniformly 500 mm
Answer: A
Explanation: Below 50 mm in deserts to over 600 mm in north. Source context: Mediterranean / Eastern Mediterranean: Highlands and especially northwest; hot dry summers, cool wet winters; book also describes scorching summers and chilly wet winters. Temperatures generally 0–40°C with occasional extremes. Annual rain below 50 mm in desert to over 600 mm in north.
Priority: core
Source: guide line 265

### Q02-025
Question: What was the highest 2021 rainfall and where?
A. 430 mm at Amman
B. 600 mm at Azraq
C. 21.6 mm at Aqaba
D. 538.7 mm at Ras Munif, Ajloun
Answer: D
Explanation: 538.7 mm at Ras Munif, Ajloun. Source context: 2021 highest rainfall: Ras Munif, Ajloun — 538.7 mm. Lowest: King Hussein Airport, Aqaba — 21.6 mm.
Priority: core
Source: guide line 268

### Q02-026
Question: What was the lowest 2021 rainfall and where?
A. 21.6 mm at King Hussein Airport, Aqaba
B. 50 mm at Jerash
C. 100 mm at Salt
D. 538.7 mm at Ras Munif
Answer: A
Explanation: 21.6 mm at King Hussein Airport, Aqaba. Source context: 2021 highest rainfall: Ras Munif, Ajloun — 538.7 mm. Lowest: King Hussein Airport, Aqaba — 21.6 mm.
Priority: core
Source: guide line 268

### Q02-027
Question: Which areas receive most rainfall?
A. Western highlands
B. All areas equally
C. Eastern deserts
D. Southern Badia
Answer: A
Explanation: Western highlands. Source context: Western highlands get most rain; eastern desert very dry. Variability affects agriculture, water and livability.
Priority: core
Source: guide line 267

### Q02-028
Question: Which cities historically housed 75% of Jordan's population?
A. Salt, Karak and Aqaba
B. Amman, Irbid and Zarqa
C. Jerash, Madaba and Ma'an
D. Azraq, Bayer and Jafar
Answer: B
Explanation: Amman, Irbid and Zarqa. Source context: Historical distribution: 92% in northwestern highlands, 8% in southern half. Amman, Irbid and Zarqa together house 75%; desert/Badia sparsely populated. Young population (many under 30) offers opportunities and challenges in education, employment and social services.
Priority: core
Source: guide line 296

### Q02-029
Question: How was historical population distributed between northwestern highlands and southern half?
A. 75% and 25%
B. 92% and 8%
C. 69% and 31%
D. 90.3% and 7.9%
Answer: B
Explanation: 92% and 8%. Source context: Historical distribution: 92% in northwestern highlands, 8% in southern half. Amman, Irbid and Zarqa together house 75%; desert/Badia sparsely populated. Young population (many under 30) offers opportunities and challenges in education, employment and social services.
Priority: core
Source: guide line 296

### Q02-030
Question: What caused the population increase after the 1948 war?
A. Mass emigration
B. A new census only
C. Declining urbanization
D. Refugee influx
Answer: D
Explanation: Refugee influx. Source context: Migration and refugee influx: Conflicts (1948 Arab-Israeli War, 1990–91 Gulf War, Syrian Civil War starting 2011); refugees from Palestine, Iraq, Syria. Economic migrants seek work in relatively stable Jordan. Rural-to-urban migration for jobs, education and healthcare increases population in Amman, Zarqa and Irbid.
Priority: core
Source: guide line 356

### Q02-031
Question: What caused the population rise to 1,371,654 in 1950?
A. Independence treaty alone
B. Political union of Jordan and Palestine
C. Oil discovery
D. Disi water project
Answer: B
Explanation: Political union of Jordan and Palestine.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-032
Question: What share of 2015 census population was Jordanian?
A. 92%
B. 69%
C. 75%
D. 31%
Answer: B
Explanation: 69%.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-033
Question: What share was non-Jordanian in the 2015 census?
A. 31%
B. 69%
C. 8%
D. 42%
Answer: A
Explanation: 31%.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-034
Question: Nearly half of non-Jordanians in the 2015 census were what group?
A. Iraqi officials
B. Armenian citizens
C. Syrian refugees
D. European workers
Answer: C
Explanation: Syrian refugees.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-035
Question: What was Jordan's median age in 2020?
A. 23.27 years
B. 36 years
C. 25.54 years
D. 34 years
Answer: A
Explanation: 23.27 years. Source context: Median age in 2020: 23.27 years, rising since the 1950s and expected to continue rising.
Priority: core
Source: guide line 340

### Q02-036
Question: Which age group is the largest single group in the textbook?
A. 25–54
B. 0–14
C. 15–24
D. 55–64
Answer: A
Explanation: 25–54. Source context: Working-age population (25–54): important for workforce and economic productivity; drives economic growth.
Priority: core
Source: guide line 342

### Q02-037
Question: What does a youthful population require?
A. Eliminating school investment
B. Less healthcare planning
C. Only retirement services
D. Strong education and youth employment policies
Answer: D
Explanation: Strong education and youth employment policies. Source context: Youthful population: many under 25; high birth rate and growing younger generation. Requires strong education and youth employment policies.
Priority: core
Source: guide line 341

### Q02-038
Question: What urban share is stated for 1960?
A. 31%
B. 42%
C. 90.3%
D. 75%
Answer: B
Explanation: 42%. Source context: 1. Urbanization: Over 90% urban by 2022, concentrated in Amman, Zarqa and Irbid; only 42% urban in 1960. Reflects socioeconomic change.
Priority: core
Source: guide line 347

### Q02-039
Question: What urban share is stated for 2022?
A. 42%
B. 69%
C. 90.3%
D. 92%
Answer: C
Explanation: 90.3%. Source context: 4. Urban vs rural: 2022 urban 90.3%; rural 7.9% including Badia (less than 1% of total population). Rural and desert communities face challenges preserving traditional lifestyles. These figures are as printed and do not sum to 100%.
Priority: core
Source: guide line 350

### Q02-040
Question: What rural share is stated for 2022?
A. 1.3%
B. 8.6%
C. 7.9%
D. 12.5%
Answer: C
Explanation: 7.9%. Source context: 4. Urban vs rural: 2022 urban 90.3%; rural 7.9% including Badia (less than 1% of total population). Rural and desert communities face challenges preserving traditional lifestyles. These figures are as printed and do not sum to 100%.
Priority: core
Source: guide line 350

### Q02-041
Question: What share lives in Badia according to the demographic subsection?
A. Less than 1%
B. 7.9%
C. 20%
D. 78.4%
Answer: A
Explanation: Less than 1%. Source context: 4. Urban vs rural: 2022 urban 90.3%; rural 7.9% including Badia (less than 1% of total population). Rural and desert communities face challenges preserving traditional lifestyles. These figures are as printed and do not sum to 100%.
Priority: core
Source: guide line 350

### Q02-042
Question: Which minority communities are identified in the ethnic composition section?
A. Only East Asians
B. Circassians, Chechens and Armenians
C. Only Europeans
D. Only North Americans
Answer: B
Explanation: Circassians, Chechens and Armenians. Source context: Other minorities approximately 2%: book lists Shia Muslims, Baha'is from Iran, Turkmen, Druze, Armenians, Circassians, Chechens. Note that the textbook groups ethnic and religious labels together here.
Priority: core
Source: guide line 368

### Q02-043
Question: Which regional conflicts contributed major refugee influxes?
A. Only the 1928 treaty
B. 1948 war, 1990–91 Gulf War, Syrian war from 2011
C. Only the 1964 summit
D. Only the 1958 union
Answer: B
Explanation: 1948 war, 1990–91 Gulf War, Syrian war from 2011. Source context: Migration and refugee influx: Conflicts (1948 Arab-Israeli War, 1990–91 Gulf War, Syrian Civil War starting 2011); refugees from Palestine, Iraq, Syria. Economic migrants seek work in relatively stable Jordan. Rural-to-urban migration for jobs, education and healthcare increases population in Amman, Zarqa and Irbid.
Priority: core
Source: guide line 356

### Q02-044
Question: Why has mortality declined?
A. Less healthcare
B. Reduced life expectancy
C. Improved healthcare, sanitation and living standards
D. Higher infant mortality
Answer: C
Explanation: Improved healthcare, sanitation and living standards. Source context: Declining mortality: Improved healthcare, sanitation and living standards reduce infant mortality and increase life expectancy.
Priority: core
Source: guide line 355

### Q02-045
Question: Why does rural-to-urban migration occur?
A. Jobs, education and healthcare opportunities
B. Only access to desert land
C. Lower urban infrastructure
D. Avoidance of public services
Answer: A
Explanation: Jobs, education and healthcare opportunities. Source context: Migration and refugee influx: Conflicts (1948 Arab-Israeli War, 1990–91 Gulf War, Syrian Civil War starting 2011); refugees from Palestine, Iraq, Syria. Economic migrants seek work in relatively stable Jordan. Rural-to-urban migration for jobs, education and healthcare increases population in Amman, Zarqa and Irbid.
Priority: core
Source: guide line 356

### Q02-046
Question: How does a youth bulge contribute to population growth?
A. It guarantees fewer births
B. It stops migration
C. Many people enter reproductive age and start families
D. It increases elderly share only
Answer: C
Explanation: Many people enter reproductive age and start families.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-047
Question: Why do family planning programs have varied effectiveness?
A. No government involvement
B. Cultural and social factors
C. Only rainfall
D. Only geography
Answer: B
Explanation: Cultural and social factors. Source context: Government policies: Family planning programs aim to limit births, with varied effectiveness due to cultural and social factors. Integration of refugees through services/employment affects demographics.
Priority: core
Source: guide line 359

### Q02-048
Question: How does women's education affect population trends in the source?
A. Always raises birth rates
B. Always reduces life expectancy
C. Has no relationship to health
D. Often lowers births while improving health and life expectancy
Answer: D
Explanation: Often lowers births while improving health and life expectancy.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-049
Question: What is Jordan's state religion?
A. Christianity
B. Baha'i faith
C. No state religion in textbook
D. Islam
Answer: D
Explanation: Islam. Source context: Islam is the state religion; Sunni Muslims approximately 92%.
Priority: core
Source: guide line 365

### Q02-050
Question: What approximate religious shares does the source state?
A. 90% Sunni, 9% Christian, 1% other
B. 75% Sunni, 20% Christian, 5% other
C. 92% Sunni, 6% Christian, 2% other
D. 69% Sunni, 31% Christian, 0% other
Answer: C
Explanation: 92% Sunni, 6% Christian, 2% other.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-051
Question: How many Christian seats are allocated in the House of Representatives in the text?
A. 9
B. 12
C. 16
D. 6
Answer: A
Explanation: 9.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-052
Question: Which Christian denominations are mentioned?
A. Orthodox, Roman Catholics, Latins and Evangelical Episcopal
B. Only Evangelical Episcopal
C. Only Roman Catholics
D. Only Orthodox
Answer: A
Explanation: Orthodox, Roman Catholics, Latins and Evangelical Episcopal.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-053
Question: Where does the Jordan River originate and end?
A. Mount Nebo to Red Sea
B. Mount Hermon to Dead Sea
C. Aqaba to Mediterranean
D. Yarmouk to Persian Gulf
Answer: B
Explanation: Mount Hermon to Dead Sea. Source context: River originates at Mount Hermon, flows to Dead Sea.
Priority: core
Source: guide line 374

### Q02-054
Question: Which dimensions are stated for Jordan River in the source?
A. 26 km long, 16 km wide, 475 km²
B. 85 km long, 16 km wide, 1,015 km²
C. 1,619 km long, 85 km wide, 89,318 km²
D. 325 km long, 26 km wide, 540 km²
Answer: B
Explanation: 85 km long, 16 km wide, 1,015 km². Source context: Book's dimensions: approximately 85 km long, 16 km wide, 1,015 km² area.
Priority: core
Source: guide line 375

### Q02-055
Question: Which set contains Jordan River tributaries listed in the guide?
A. Wadi Yabis, Zarqa, Jerash and Yarmouk
B. Ma'in, Zara, Afra and Suwaima
C. Nile, Tigris, Euphrates and Litani
D. Disi, Aqaba, Jafr and Hasa
Answer: A
Explanation: Wadi Yabis, Zarqa, Jerash and Yarmouk. Source context: Tributaries: Wadi Yabis (Wadi Al-Rayyan), Zarqa Stream, Jerash Stream, Yarmouk River.
Priority: core
Source: guide line 376

### Q02-056
Question: Which geographical region lies between Jordan Rift Valley and Eastern Desert?
A. Highlands
B. Central Plateau
C. Dead Sea
D. Badia alone
Answer: B
Explanation: Central Plateau.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-057
Question: Which mountain peak is mentioned in the Highlands section?
A. Mount Sinai
B. Mount Hermon
C. Jebel Umm ad Dami
D. Mount Everest
Answer: C
Explanation: Jebel Umm ad Dami.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-058
Question: What explains relatively rapid population growth in Jordan's cities?
A. Collapse of all urban services
B. Only international tourism
C. Only decline of birth rates
D. Infrastructure expansion, labor demand and internal/international migration
Answer: D
Explanation: Infrastructure expansion, labor demand and internal/international migration.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-059
Question: What characterized Eastern Jordan's 1928 population?
A. Mainly elderly retirees
B. Mainly Bedouin and rural inhabitants
C. Mainly urban industrial workers
D. Mainly foreign diplomats
Answer: B
Explanation: Mainly Bedouin and rural inhabitants.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-060
Question: Which migration sources influenced population growth in 1928?
A. Canada and Australia
B. Syria and Hejaz
C. Japan and Korea
D. France and Germany
Answer: B
Explanation: Syria and Hejaz.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-061
Question: Which 1928 urban centers are listed?
A. Damascus, Aleppo and Baghdad
B. Amman, Aqaba, Cairo and Beirut
C. Azraq, Bayer, Jafar and Disi
D. Salt, Irbid, Ajloun, Jerash, Madaba and Karak
Answer: D
Explanation: Salt, Irbid, Ajloun, Jerash, Madaba and Karak.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-062
Question: Which demographic challenges accompany the young population?
A. Only retirement services
B. Only international security
C. Education, employment and social services
D. Only desert climate
Answer: C
Explanation: Education, employment and social services. Source context: Historical distribution: 92% in northwestern highlands, 8% in southern half. Amman, Irbid and Zarqa together house 75%; desert/Badia sparsely populated. Young population (many under 30) offers opportunities and challenges in education, employment and social services.
Priority: core
Source: guide line 296

### Q02-063
Question: How do improved healthcare and education affect demographic planning?
A. They make healthcare unnecessary
B. Longer life expectancy requires planning for future aging as well as youth
C. They eliminate all demographic change
D. They eliminate all economic planning
Answer: B
Explanation: Longer life expectancy requires planning for future aging as well as youth.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-064
Question: Which groups are listed under the textbook's other-minorities category?
A. Shia Muslims, Baha'is, Turkmen, Druze, Armenians, Circassians and Chechens
B. Only Orthodox and Roman Catholics
C. Only Sunni Muslims
D. Only Latins and Evangelical Episcopalians
Answer: A
Explanation: Shia Muslims, Baha'is, Turkmen, Druze, Armenians, Circassians and Chechens. Source context: Other minorities approximately 2%: book lists Shia Muslims, Baha'is from Iran, Turkmen, Druze, Armenians, Circassians, Chechens. Note that the textbook groups ethnic and religious labels together here.
Priority: core
Source: guide line 368

### Q02-065
Question: Who explained the Arabic meaning of Jordan in Lisan al-Arab?
A. Halford Mackinder
B. Mohammed Ali
C. Ibn Manzur
D. Nicholas Spykman
Answer: C
Explanation: Ibn Manzur.
Priority: core
Source: Geography and population (pp. 28–39)

### Q02-066
Question: Which river is also called Wadi Al-Rayyan?
A. Zarqa
B. Jerash
C. Wadi Yabis
D. Yarmouk
Answer: C
Explanation: Wadi Yabis. Source context: Tributaries: Wadi Yabis (Wadi Al-Rayyan), Zarqa Stream, Jerash Stream, Yarmouk River.
Priority: core
Source: guide line 376

### Q02-067
Question: What is the textbook figure for Total territory (land + territorial waters)?
A. 1,619 km
B. 26 km
C. 89,318 km²
D. 540 km²
Answer: C
Explanation: Total territory (land + territorial waters) | 89,318 km²
Priority: core
Source: guide line 247

### Q02-068
Question: What is the textbook figure for Land?
A. 88,778 km²
B. 89,318 km²
C. 112th
D. 540 km²
Answer: A
Explanation: Land | 88,778 km²
Priority: core
Source: guide line 248

### Q02-069
Question: What is the textbook figure for Territorial waters (Gulf of Aqaba, Dead Sea)?
A. 540 km²
B. 112th
C. 88,778 km²
D. 89,318 km²
Answer: A
Explanation: Territorial waters (Gulf of Aqaba, Dead Sea) | 540 km²
Priority: core
Source: guide line 249

### Q02-070
Question: What is the textbook figure for World land-area ranking stated?
A. 112th
B. 1,619 km
C. 26 km
D. 540 km²
Answer: A
Explanation: World land-area ranking stated | 112th
Priority: core
Source: guide line 250

### Q02-071
Question: What is the textbook figure for Borders with neighbors?
A. 1,619 km
B. 88,778 km²
C. 26 km
D. 112th
Answer: A
Explanation: Borders with neighbors | 1,619 km
Priority: core
Source: guide line 251

### Q02-072
Question: What is the textbook figure for Gulf of Aqaba coastline?
A. 1,619 km
B. 540 km²
C. 26 km
D. 112th
Answer: C
Explanation: Gulf of Aqaba coastline | 26 km
Priority: core
Source: guide line 252

### Q02-073
Question: Which topographic region matches: Part of Great Rift Valley stretching northern Syria to central Mozambique. Jordan River and Dead Sea (approximately 430 m below sea level, lowest point on Earth). Arid but agricultural due to river irrigation; tourist attractions include highly saline Dead Sea, therapeutic properties and historical significance.?
A. Desert region (Badia)
B. Jordan Rift Valley
C. Highlands
D. Central Plateau
Answer: B
Explanation: Jordan Rift Valley | Part of Great Rift Valley stretching northern Syria to central Mozambique. Jordan River and Dead Sea (approximately 430 m below sea level, lowest point on Earth). Arid but agricultural due to river irrigation; tourist attractions include highly saline Dead Sea, therapeutic properties and historical significance.
Priority: core
Source: guide line 258

### Q02-074
Question: Which topographic region matches: North–south along western edge of central plateau; mountainous, forested, cooler and wetter; includes high peaks such as Jebel Umm ad Dami.?
A. Jordan Rift Valley
B. Highlands
C. Desert region (Badia)
D. Central Plateau
Answer: B
Explanation: Highlands | North–south along western edge of central plateau; mountainous, forested, cooler and wetter; includes high peaks such as Jebel Umm ad Dami.
Priority: core
Source: guide line 259

### Q02-075
Question: Which topographic region matches: Between Rift Valley and Eastern Desert; most population, including Amman; rolling hills, fertile valleys, temperate climate; agricultural heartland.?
A. Desert region (Badia)
B. Jordan Rift Valley
C. Highlands
D. Central Plateau
Answer: D
Explanation: Central Plateau | Between Rift Valley and Eastern Desert; most population, including Amman; rolling hills, fertile valleys, temperate climate; agricultural heartland.
Priority: core
Source: guide line 260

### Q02-076
Question: Which topographic region matches: Syrian Desert north to Saudi Arabia south and Iraqi Badia east; 78.4% of Jordan; oases include Azraq, Bayer and Jafar.?
A. Jordan Rift Valley
B. Central Plateau
C. Highlands
D. Desert region (Badia)
Answer: D
Explanation: Desert region (Badia) | Syrian Desert north to Saudi Arabia south and Iraqi Badia east; 78.4% of Jordan; oases include Azraq, Bayer and Jafar.
Priority: core
Source: guide line 261

### Q02-077
Question: Which year or period matches this population description: 235,000; mainly Bedouin and rural people; urban centers Salt, Irbid, Ajloun, Jerash, Madaba and Karak; migration from Syria/Hejaz.?
A. After 1948 war
B. 1928
C. 2022
D. 1950
Answer: B
Explanation: 1928 | 235,000; mainly Bedouin and rural people; urban centers Salt, Irbid, Ajloun, Jerash, Madaba and Karak; migration from Syria/Hejaz.
Priority: core
Source: guide line 288

### Q02-078
Question: Which year or period matches this population description: About 400,000.?
A. 1946
B. 1928
C. 1950
D. 2024
Answer: A
Explanation: 1946 | About 400,000.
Priority: core
Source: guide line 289

### Q02-079
Question: Which year or period matches this population description: Refugee influx increased population to about 600,000.?
A. 2022
B. 1946
C. 2024
D. After 1948 war
Answer: D
Explanation: After 1948 war | Refugee influx increased population to about 600,000.
Priority: core
Source: guide line 290

### Q02-080
Question: Which year or period matches this population description: 1,371,654 following political union of Jordan and Palestine.?
A. 2022
B. 2015 census
C. 1928
D. 1950
Answer: D
Explanation: 1950 | 1,371,654 following political union of Jordan and Palestine.
Priority: core
Source: guide line 291

### Q02-081
Question: Which year or period matches this population description: 9.5 million; 6.6m Jordanians (69%), 2.9m non-Jordanians (31%); nearly half of non-Jordanians Syrian refugees.?
A. After 1948 war
B. 2015 census
C. 1946
D. 1950
Answer: B
Explanation: 2015 census | 9.5 million; 6.6m Jordanians (69%), 2.9m non-Jordanians (31%); nearly half of non-Jordanians Syrian refugees.
Priority: core
Source: guide line 292

### Q02-082
Question: Which year or period matches this population description: 92nd globally in population size.?
A. 2024
B. After 1948 war
C. 1946
D. 2022
Answer: D
Explanation: 2022 | 92nd globally in population size.
Priority: core
Source: guide line 293

### Q02-083
Question: Which year or period matches this population description: About 11.6 million; growth through natural increase and refugees from Syria, Iraq, Palestine.?
A. 1928
B. After 1948 war
C. 2024
D. 2015 census
Answer: C
Explanation: 2024 | About 11.6 million; growth through natural increase and refugees from Syria, Iraq, Palestine.
Priority: core
Source: guide line 294

### Q02-084
Question: What percentage of the population is in age group 0–14?
A. 6%
B. 4%
C. 34%
D. 36%
Answer: C
Explanation: 0–14 | 34%
Priority: core
Source: guide line 334

### Q02-085
Question: What percentage of the population is in age group 15–24?
A. 20%
B. 36%
C. 34%
D. 6%
Answer: A
Explanation: 15–24 | 20%
Priority: core
Source: guide line 335

### Q02-086
Question: What percentage of the population is in age group 25–54 (largest single group)?
A. 4%
B. 36%
C. 20%
D. 6%
Answer: B
Explanation: 25–54 (largest single group) | 36%
Priority: core
Source: guide line 336

### Q02-087
Question: What percentage of the population is in age group 55–64?
A. 4%
B. 20%
C. 34%
D. 6%
Answer: D
Explanation: 55–64 | 6%
Priority: core
Source: guide line 337

### Q02-088
Question: What percentage of the population is in age group 65+?
A. 36%
B. 4%
C. 6%
D. 20%
Answer: B
Explanation: 65+ | 4%
Priority: core
Source: guide line 338

### Q02-089
Question: Which language gives the meaning of Jordan as: Ibn Manzur, Lisan al-Arab: overpowering drowsiness.?
A. Latin
B. Aramaic
C. Greek
D. Arabic
Answer: D
Explanation: Arabic | Ibn Manzur, Lisan al-Arab: overpowering drowsiness.
Priority: core
Source: guide line 380

### Q02-090
Question: Which language gives the meaning of Jordan as: Strength and dominance; steep winding descent.?
A. Arabic
B. Aramaic
C. Greek
D. Latin
Answer: B
Explanation: Aramaic | Strength and dominance; steep winding descent.
Priority: core
Source: guide line 381

### Q02-091
Question: Which language gives the meaning of Jordan as: Water descending from high to low areas.?
A. Latin
B. Arabic
C. Aramaic
D. Greek
Answer: D
Explanation: Greek | Water descending from high to low areas.
Priority: core
Source: guide line 382

### Q02-092
Question: What name is associated with Islamic era in the textbook?
A. Hashemite Kingdom of Jordan after independence
B. Jund al-Urdunn (both sides of river)
C. Transjordan (east of river)
D. East Arab
Answer: B
Explanation: Islamic era | Jund al-Urdunn (both sides of river)
Priority: core
Source: guide line 386

### Q02-093
Question: What name is associated with Crusades in the textbook?
A. Emirate of Transjordan
B. East Jordan
C. Transjordan (east of river)
D. River called Al-Shari'a
Answer: D
Explanation: Crusades | River called Al-Shari'a
Priority: core
Source: guide line 387

### Q02-094
Question: What name is associated with World War I / British entry into Palestine in the textbook?
A. Jund al-Urdunn (both sides of river)
B. Transjordan (east of river)
C. Emirate of Transjordan
D. East Arab
Answer: B
Explanation: World War I / British entry into Palestine | Transjordan (east of river)
Priority: core
Source: guide line 388

### Q02-095
Question: What name is associated with After British control in the textbook?
A. Emirate of Transjordan
B. East Jordan
C. River called Al-Shari'a
D. Jund al-Urdunn (both sides of river)
Answer: B
Explanation: After British control | East Jordan
Priority: core
Source: guide line 389

### Q02-096
Question: What name is associated with 1921 in the textbook?
A. River called Al-Shari'a
B. Name retained after East/West Bank union, distinguishing the two regions
C. Transjordan (east of river)
D. Emirate of Transjordan
Answer: D
Explanation: 1921 | Emirate of Transjordan
Priority: core
Source: guide line 390

### Q02-097
Question: What name is associated with 1923 in the textbook?
A. Name retained after East/West Bank union, distinguishing the two regions
B. Emirate of Transjordan
C. East Arab
D. Jund al-Urdunn (both sides of river)
Answer: C
Explanation: 1923 | East Arab
Priority: core
Source: guide line 391

### Q02-098
Question: What name is associated with 1946 in the textbook?
A. Name retained after East/West Bank union, distinguishing the two regions
B. Emirate of Transjordan
C. East Arab
D. Hashemite Kingdom of Jordan after independence
Answer: D
Explanation: 1946 | Hashemite Kingdom of Jordan after independence
Priority: core
Source: guide line 392

### Q02-099
Question: What name is associated with 1950 in the textbook?
A. Name retained after East/West Bank union, distinguishing the two regions
B. Emirate of Transjordan
C. East Arab
D. Jund al-Urdunn (both sides of river)
Answer: A
Explanation: 1950 | Name retained after East/West Bank union, distinguishing the two regions
Priority: core
Source: guide line 393

### Q02-100
Question: What coverage percentage is printed for annual rainfall of Over 500 mm?
A. 8.6
B. 3.8
C. 1.3
D. 1.8
Answer: C
Explanation: Over 500 | 1.3
Priority: detail
Source: guide line 274

### Q02-101
Question: What coverage percentage is printed for annual rainfall of 300–500 mm?
A. 1.3
B. 1.8
C. 8.6
D. 12.5
Answer: B
Explanation: 300–500 | 1.8
Priority: detail
Source: guide line 275

### Q02-102
Question: What coverage percentage is printed for annual rainfall of 200–300 mm?
A. 1.3
B. 3.8
C. 12.5
D. 1.8
Answer: B
Explanation: 200–300 | 3.8
Priority: detail
Source: guide line 276

### Q02-103
Question: What coverage percentage is printed for annual rainfall of 100–200 mm?
A. 8.6
B. 1.8
C. 3.8
D. 12.5
Answer: D
Explanation: 100–200 | 12.5
Priority: detail
Source: guide line 277

### Q02-104
Question: What coverage percentage is printed for annual rainfall of Less than 100 mm?
A. 1.8
B. 12.5
C. 1.3
D. 8.6
Answer: D
Explanation: Less than 100 | 8.6
Priority: detail
Source: guide line 278

### Q02-105
Question: According to the printed population-by-gender table, what was the male population in 1952 (thousands)?
A. 301.7
B. 2,160.7
C. 1,115.8
D. 469.4
Answer: A
Explanation: 1952 (thousands): male population: 301.7; female population: 284.5; total population: 586.2. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 304

### Q02-106
Question: According to the printed population-by-gender table, what was the female population in 1952 (thousands)?
A. 1,978.7
B. 431.4
C. 284.5
D. 1,017.2
Answer: C
Explanation: 1952 (thousands): male population: 301.7; female population: 284.5; total population: 586.2. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 304

### Q02-107
Question: According to the printed population-by-gender table, what was the total population in 1952 (thousands)?
A. 4,139.4
B. 2,132.0
C. 586.2
D. 900.8
Answer: C
Explanation: 1952 (thousands): male population: 301.7; female population: 284.5; total population: 586.2. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 304

### Q02-108
Question: According to the printed population-by-gender table, what was the male population in 1961 (thousands)?
A. 469.4
B. 2,160.7
C. 301.7
D. 1,115.8
Answer: A
Explanation: 1961 (thousands): male population: 469.4; female population: 431.4; total population: 900.8. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 305

### Q02-109
Question: According to the printed population-by-gender table, what was the female population in 1961 (thousands)?
A. 1,017.2
B. 431.4
C. 284.5
D. 1,978.7
Answer: B
Explanation: 1961 (thousands): male population: 469.4; female population: 431.4; total population: 900.8. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 305

### Q02-110
Question: According to the printed population-by-gender table, what was the total population in 1961 (thousands)?
A. 900.8
B. 4,139.4
C. 2,132.0
D. 586.2
Answer: A
Explanation: 1961 (thousands): male population: 469.4; female population: 431.4; total population: 900.8. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 305

### Q02-111
Question: According to the printed population-by-gender table, what was the male population in 1979 (thousands)?
A. 2,160.7
B. 1,115.8
C. 301.7
D. 469.4
Answer: B
Explanation: 1979 (thousands): male population: 1,115.8; female population: 1,017.2; total population: 2,132.0. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 306

### Q02-112
Question: According to the printed population-by-gender table, what was the female population in 1979 (thousands)?
A. 431.4
B. 1,978.7
C. 284.5
D. 1,017.2
Answer: D
Explanation: 1979 (thousands): male population: 1,115.8; female population: 1,017.2; total population: 2,132.0. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 306

### Q02-113
Question: According to the printed population-by-gender table, what was the total population in 1979 (thousands)?
A. 4,139.4
B. 900.8
C. 2,132.0
D. 586.2
Answer: C
Explanation: 1979 (thousands): male population: 1,115.8; female population: 1,017.2; total population: 2,132.0. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 306

### Q02-114
Question: According to the printed population-by-gender table, what was the male population in 1994 (thousands)?
A. 469.4
B. 2,160.7
C. 2,757.7
D. 1,115.8
Answer: B
Explanation: 1994 (thousands): male population: 2,160.7; female population: 1,978.7; total population: 4,139.4. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 307

### Q02-115
Question: According to the printed population-by-gender table, what was the female population in 1994 (thousands)?
A. 2,592.3
B. 431.4
C. 1,017.2
D. 1,978.7
Answer: D
Explanation: 1994 (thousands): male population: 2,160.7; female population: 1,978.7; total population: 4,139.4. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 307

### Q02-116
Question: According to the printed population-by-gender table, what was the total population in 1994 (thousands)?
A. 900.8
B. 4,139.4
C. 5,350.0
D. 2,132.0
Answer: B
Explanation: 1994 (thousands): male population: 2,160.7; female population: 1,978.7; total population: 4,139.4. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 307

### Q02-117
Question: According to the printed population-by-gender table, what was the male population in 2004 (thousands)?
A. 2,160.7
B. 2,757.7
C. 1,115.8
D. 469.4
Answer: B
Explanation: 2004 (thousands): male population: 2,757.7; female population: 2,592.3; total population: 5,350.0. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 308

### Q02-118
Question: According to the printed population-by-gender table, what was the female population in 2004 (thousands)?
A. 2,592.3
B. 431.4
C. 1,978.7
D. 1,017.2
Answer: A
Explanation: 2004 (thousands): male population: 2,757.7; female population: 2,592.3; total population: 5,350.0. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 308

### Q02-119
Question: According to the printed population-by-gender table, what was the total population in 2004 (thousands)?
A. 2,132.0
B. 5,350.0
C. 900.8
D. 4,139.4
Answer: B
Explanation: 2004 (thousands): male population: 2,757.7; female population: 2,592.3; total population: 5,350.0. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 308

### Q02-120
Question: According to the printed population-by-gender table, what was the male population in 2005?
A. 2,968,000
B. 3,243,000
C. 3,058,000
D. 3,146,000
Answer: A
Explanation: 2005: male population: 2,968,000; female population: 2,790,000; total population: 5,758,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 309

### Q02-121
Question: According to the printed population-by-gender table, what was the female population in 2005?
A. 2,870,000
B. 2,960,000
C. 3,050,000
D. 2,790,000
Answer: D
Explanation: 2005: male population: 2,968,000; female population: 2,790,000; total population: 5,758,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 309

### Q02-122
Question: According to the printed population-by-gender table, what was the total population in 2005?
A. 6,293,000
B. 5,758,000
C. 6,106,000
D. 5,928,000
Answer: B
Explanation: 2005: male population: 2,968,000; female population: 2,790,000; total population: 5,758,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 309

### Q02-123
Question: According to the printed population-by-gender table, what was the male population in 2006?
A. 3,243,000
B. 3,146,000
C. 2,968,000
D. 3,058,000
Answer: D
Explanation: 2006: male population: 3,058,000; female population: 2,870,000; total population: 5,928,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 310

### Q02-124
Question: According to the printed population-by-gender table, what was the female population in 2006?
A. 2,960,000
B. 3,050,000
C. 2,790,000
D. 2,870,000
Answer: D
Explanation: 2006: male population: 3,058,000; female population: 2,870,000; total population: 5,928,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 310

### Q02-125
Question: According to the printed population-by-gender table, what was the total population in 2006?
A. 5,758,000
B. 5,928,000
C. 6,293,000
D. 6,106,000
Answer: B
Explanation: 2006: male population: 3,058,000; female population: 2,870,000; total population: 5,928,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 310

### Q02-126
Question: According to the printed population-by-gender table, what was the male population in 2007?
A. 2,968,000
B. 3,243,000
C. 3,146,000
D. 3,058,000
Answer: C
Explanation: 2007: male population: 3,146,000; female population: 2,960,000; total population: 6,106,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 311

### Q02-127
Question: According to the printed population-by-gender table, what was the female population in 2007?
A. 2,870,000
B. 3,050,000
C. 2,790,000
D. 2,960,000
Answer: D
Explanation: 2007: male population: 3,146,000; female population: 2,960,000; total population: 6,106,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 311

### Q02-128
Question: According to the printed population-by-gender table, what was the total population in 2007?
A. 6,293,000
B. 5,928,000
C. 5,758,000
D. 6,106,000
Answer: D
Explanation: 2007: male population: 3,146,000; female population: 2,960,000; total population: 6,106,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 311

### Q02-129
Question: According to the printed population-by-gender table, what was the male population in 2008?
A. 3,340,000
B. 3,058,000
C. 3,243,000
D. 3,146,000
Answer: C
Explanation: 2008: male population: 3,243,000; female population: 3,050,000; total population: 6,293,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 312

### Q02-130
Question: According to the printed population-by-gender table, what was the female population in 2008?
A. 3,050,000
B. 3,150,000
C. 2,960,000
D. 2,870,000
Answer: A
Explanation: 2008: male population: 3,243,000; female population: 3,050,000; total population: 6,293,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 312

### Q02-131
Question: According to the printed population-by-gender table, what was the total population in 2008?
A. 6,106,000
B. 6,490,000
C. 6,293,000
D. 5,928,000
Answer: C
Explanation: 2008: male population: 3,243,000; female population: 3,050,000; total population: 6,293,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 312

### Q02-132
Question: According to the printed population-by-gender table, what was the male population in 2009?
A. 3,448,000
B. 3,340,000
C. 3,243,000
D. 3,146,000
Answer: B
Explanation: 2009: male population: 3,340,000; female population: 3,150,000; total population: 6,490,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 313

### Q02-133
Question: According to the printed population-by-gender table, what was the female population in 2009?
A. 3,150,000
B. 3,250,000
C. 2,960,000
D. 3,050,000
Answer: A
Explanation: 2009: male population: 3,340,000; female population: 3,150,000; total population: 6,490,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 313

### Q02-134
Question: According to the printed population-by-gender table, what was the total population in 2009?
A. 6,106,000
B. 6,293,000
C. 6,698,000
D. 6,490,000
Answer: D
Explanation: 2009: male population: 3,340,000; female population: 3,150,000; total population: 6,490,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 313

### Q02-135
Question: According to the printed population-by-gender table, what was the male population in 2010?
A. 3,448,000
B. 3,340,000
C. 3,243,000
D. 3,705,000
Answer: A
Explanation: 2010: male population: 3,448,000; female population: 3,250,000; total population: 6,698,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 314

### Q02-136
Question: According to the printed population-by-gender table, what was the female population in 2010?
A. 3,150,000
B. 3,250,000
C. 3,050,000
D. 3,288,000
Answer: B
Explanation: 2010: male population: 3,448,000; female population: 3,250,000; total population: 6,698,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 314

### Q02-137
Question: According to the printed population-by-gender table, what was the total population in 2010?
A. 6,993,000
B. 6,490,000
C. 6,698,000
D. 6,293,000
Answer: C
Explanation: 2010: male population: 3,448,000; female population: 3,250,000; total population: 6,698,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 314

### Q02-138
Question: According to the printed population-by-gender table, what was the male population in 2011?
A. 3,705,000
B. 3,448,000
C. 3,340,000
D. 3,935,000
Answer: A
Explanation: 2011: male population: 3,705,000; female population: 3,288,000; total population: 6,993,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 315

### Q02-139
Question: According to the printed population-by-gender table, what was the female population in 2011?
A. 3,250,000
B. 3,288,000
C. 3,492,000
D. 3,150,000
Answer: B
Explanation: 2011: male population: 3,705,000; female population: 3,288,000; total population: 6,993,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 315

### Q02-140
Question: According to the printed population-by-gender table, what was the total population in 2011?
A. 6,698,000
B. 6,993,000
C. 6,490,000
D. 7,427,000
Answer: B
Explanation: 2011: male population: 3,705,000; female population: 3,288,000; total population: 6,993,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 315

### Q02-141
Question: According to the printed population-by-gender table, what was the male population in 2012?
A. 3,705,000
B. 4,299,000
C. 3,448,000
D. 3,935,000
Answer: D
Explanation: 2012: male population: 3,935,000; female population: 3,492,000; total population: 7,427,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 316

### Q02-142
Question: According to the printed population-by-gender table, what was the female population in 2012?
A. 3,815,000
B. 3,492,000
C. 3,288,000
D. 3,250,000
Answer: B
Explanation: 2012: male population: 3,935,000; female population: 3,492,000; total population: 7,427,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 316

### Q02-143
Question: According to the printed population-by-gender table, what was the total population in 2012?
A. 6,698,000
B. 8,114,000
C. 6,993,000
D. 7,427,000
Answer: D
Explanation: 2012: male population: 3,935,000; female population: 3,492,000; total population: 7,427,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 316

### Q02-144
Question: According to the printed population-by-gender table, what was the male population in 2013?
A. 3,705,000
B. 3,935,000
C. 4,299,000
D. 4,664,000
Answer: C
Explanation: 2013: male population: 4,299,000; female population: 3,815,000; total population: 8,114,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 317

### Q02-145
Question: According to the printed population-by-gender table, what was the female population in 2013?
A. 3,288,000
B. 3,815,000
C. 3,492,000
D. 4,140,000
Answer: B
Explanation: 2013: male population: 4,299,000; female population: 3,815,000; total population: 8,114,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 317

### Q02-146
Question: According to the printed population-by-gender table, what was the total population in 2013?
A. 6,993,000
B. 8,804,000
C. 7,427,000
D. 8,114,000
Answer: D
Explanation: 2013: male population: 4,299,000; female population: 3,815,000; total population: 8,114,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 317

### Q02-147
Question: According to the printed population-by-gender table, what was the male population in 2014?
A. 4,299,000
B. 4,664,000
C. 3,935,000
D. 5,046,800
Answer: B
Explanation: 2014: male population: 4,664,000; female population: 4,140,000; total population: 8,804,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 318

### Q02-148
Question: According to the printed population-by-gender table, what was the female population in 2014?
A. 3,492,000
B. 4,140,000
C. 4,484,900
D. 3,815,000
Answer: B
Explanation: 2014: male population: 4,664,000; female population: 4,140,000; total population: 8,804,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 318

### Q02-149
Question: According to the printed population-by-gender table, what was the total population in 2014?
A. 9,531,700
B. 7,427,000
C. 8,114,000
D. 8,804,000
Answer: D
Explanation: 2014: male population: 4,664,000; female population: 4,140,000; total population: 8,804,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 318

### Q02-150
Question: According to the printed population-by-gender table, what was the male population in 2015 (7)?
A. 4,664,000
B. 5,061,000
C. 5,046,800
D. 4,299,000
Answer: C
Explanation: 2015 (7): male population: 5,046,800; female population: 4,484,900; total population: 9,531,700. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 319

### Q02-151
Question: According to the printed population-by-gender table, what was the female population in 2015 (7)?
A. 4,498,000
B. 3,815,000
C. 4,140,000
D. 4,484,900
Answer: D
Explanation: 2015 (7): male population: 5,046,800; female population: 4,484,900; total population: 9,531,700. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 319

### Q02-152
Question: According to the printed population-by-gender table, what was the total population in 2015 (7)?
A. 8,114,000
B. 8,804,000
C. 9,559,000
D. 9,531,700
Answer: D
Explanation: 2015 (7): male population: 5,046,800; female population: 4,484,900; total population: 9,531,700. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 319

### Q02-153
Question: According to the printed population-by-gender table, what was the male population in 2015 (8)?
A. 5,046,800
B. 5,061,000
C. 5,188,000
D. 4,664,000
Answer: B
Explanation: 2015 (8): male population: 5,061,000; female population: 4,498,000; total population: 9,559,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 320

### Q02-154
Question: According to the printed population-by-gender table, what was the female population in 2015 (8)?
A. 4,498,000
B. 4,140,000
C. 4,610,000
D. 4,484,900
Answer: A
Explanation: 2015 (8): male population: 5,061,000; female population: 4,498,000; total population: 9,559,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 320

### Q02-155
Question: According to the printed population-by-gender table, what was the total population in 2015 (8)?
A. 9,531,700
B. 8,804,000
C. 9,559,000
D. 9,798,000
Answer: C
Explanation: 2015 (8): male population: 5,061,000; female population: 4,498,000; total population: 9,559,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 320

### Q02-156
Question: According to the printed population-by-gender table, what was the male population in 2016?
A. 5,061,000
B. 5,046,800
C. 5,188,000
D. 5,323,000
Answer: C
Explanation: 2016: male population: 5,188,000; female population: 4,610,000; total population: 9,798,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 321

### Q02-157
Question: According to the printed population-by-gender table, what was the female population in 2016?
A. 4,498,000
B. 4,730,000
C. 4,484,900
D. 4,610,000
Answer: D
Explanation: 2016: male population: 5,188,000; female population: 4,610,000; total population: 9,798,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 321

### Q02-158
Question: According to the printed population-by-gender table, what was the total population in 2016?
A. 9,559,000
B. 10,530,000
C. 9,798,000
D. 9,531,700
Answer: C
Explanation: 2016: male population: 5,188,000; female population: 4,610,000; total population: 9,798,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 321

### Q02-159
Question: According to the printed population-by-gender table, what was the male population in 2017?
A. 5,323,000
B. 5,458,000
C. 5,061,000
D. 5,188,000
Answer: A
Explanation: 2017: male population: 5,323,000; female population: 4,730,000; total population: 10,530,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 322

### Q02-160
Question: According to the printed population-by-gender table, what was the female population in 2017?
A. 4,610,000
B. 4,730,000
C. 4,498,000
D. 4,851,000
Answer: B
Explanation: 2017: male population: 5,323,000; female population: 4,730,000; total population: 10,530,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 322

### Q02-161
Question: According to the printed population-by-gender table, what was the total population in 2017?
A. 10,309,000
B. 9,559,000
C. 10,530,000
D. 9,798,000
Answer: C
Explanation: 2017: male population: 5,323,000; female population: 4,730,000; total population: 10,530,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 322

### Q02-162
Question: According to the printed population-by-gender table, what was the male population in 2018?
A. 5,588,000
B. 5,188,000
C. 5,458,000
D. 5,323,000
Answer: C
Explanation: 2018: male population: 5,458,000; female population: 4,851,000; total population: 10,309,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 323

### Q02-163
Question: According to the printed population-by-gender table, what was the female population in 2018?
A. 4,610,000
B. 4,966,000
C. 4,730,000
D. 4,851,000
Answer: D
Explanation: 2018: male population: 5,458,000; female population: 4,851,000; total population: 10,309,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 323

### Q02-164
Question: According to the printed population-by-gender table, what was the total population in 2018?
A. 10,309,000
B. 10,554,000
C. 10,530,000
D. 9,798,000
Answer: A
Explanation: 2018: male population: 5,458,000; female population: 4,851,000; total population: 10,309,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 323

### Q02-165
Question: According to the printed population-by-gender table, what was the male population in 2019?
A. 5,458,000
B. 5,588,000
C. 5,722,000
D. 5,323,000
Answer: B
Explanation: 2019: male population: 5,588,000; female population: 4,966,000; total population: 10,554,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 324

### Q02-166
Question: According to the printed population-by-gender table, what was the female population in 2019?
A. 4,851,000
B. 5,806,050
C. 4,966,000
D. 4,730,000
Answer: C
Explanation: 2019: male population: 5,588,000; female population: 4,966,000; total population: 10,554,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 324

### Q02-167
Question: According to the printed population-by-gender table, what was the total population in 2019?
A. 10,554,000
B. 10,806,000
C. 10,530,000
D. 10,309,000
Answer: A
Explanation: 2019: male population: 5,588,000; female population: 4,966,000; total population: 10,554,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 324

### Q02-168
Question: According to the printed population-by-gender table, what was the male population in 2020?
A. 5,722,000
B. 5,854,000
C. 5,458,000
D. 5,588,000
Answer: A
Explanation: 2020: male population: 5,722,000; female population: 5,806,050; total population: 10,806,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 325

### Q02-169
Question: According to the printed population-by-gender table, what was the female population in 2020?
A. 5,203,000
B. 4,851,000
C. 4,966,000
D. 5,806,050
Answer: D
Explanation: 2020: male population: 5,722,000; female population: 5,806,050; total population: 10,806,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 325

### Q02-170
Question: According to the printed population-by-gender table, what was the total population in 2020?
A. 11,570,000
B. 10,309,000
C. 10,806,000
D. 10,554,000
Answer: C
Explanation: 2020: male population: 5,722,000; female population: 5,806,050; total population: 10,806,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 325

### Q02-171
Question: According to the printed population-by-gender table, what was the male population in 2021?
A. 5,854,000
B. 5,722,000
C. 5,588,000
D. 5,984,000
Answer: A
Explanation: 2021: male population: 5,854,000; female population: 5,203,000; total population: 11,570,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 326

### Q02-172
Question: According to the printed population-by-gender table, what was the female population in 2021?
A. 4,966,000
B. 5,318,000
C. 5,806,050
D. 5,203,000
Answer: D
Explanation: 2021: male population: 5,854,000; female population: 5,203,000; total population: 11,570,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 326

### Q02-173
Question: According to the printed population-by-gender table, what was the total population in 2021?
A. 11,570,000
B. 10,554,000
C. 11,302,000
D. 10,806,000
Answer: A
Explanation: 2021: male population: 5,854,000; female population: 5,203,000; total population: 11,570,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 326

### Q02-174
Question: According to the printed population-by-gender table, what was the male population in 2022?
A. 5,984,000
B. 5,854,000
C. 6,097,000
D. 5,722,000
Answer: A
Explanation: 2022: male population: 5,984,000; female population: 5,318,000; total population: 11,302,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 327

### Q02-175
Question: According to the printed population-by-gender table, what was the female population in 2022?
A. 5,203,000
B. 5,419,000
C. 5,318,000
D. 5,806,050
Answer: C
Explanation: 2022: male population: 5,984,000; female population: 5,318,000; total population: 11,302,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 327

### Q02-176
Question: According to the printed population-by-gender table, what was the total population in 2022?
A. 11,570,000
B. 11,516,000
C. 10,806,000
D. 11,302,000
Answer: D
Explanation: 2022: male population: 5,984,000; female population: 5,318,000; total population: 11,302,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 327

### Q02-177
Question: According to the printed population-by-gender table, what was the male population in 2023?
A. 6,097,000
B. 5,984,000
C. 5,854,000
D. 5,722,000
Answer: A
Explanation: 2023: male population: 6,097,000; female population: 5,419,000; total population: 11,516,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 328

### Q02-178
Question: According to the printed population-by-gender table, what was the female population in 2023?
A. 5,419,000
B. 5,318,000
C. 5,806,050
D. 5,203,000
Answer: A
Explanation: 2023: male population: 6,097,000; female population: 5,419,000; total population: 11,516,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 328

### Q02-179
Question: According to the printed population-by-gender table, what was the total population in 2023?
A. 11,570,000
B. 11,516,000
C. 11,302,000
D. 10,806,000
Answer: B
Explanation: 2023: male population: 6,097,000; female population: 5,419,000; total population: 11,516,000. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 328

## Chapter 3 — Water and natural resources (pp. 40–45) (110 questions)

### Q03-001
Question: Why is Jordan River flow limited according to the textbook?
A. Excess precipitation
B. Disputes and diversion of water to Israeli territories
C. No river tributaries
D. Expansion of groundwater reserves
Answer: B
Explanation: Disputes and diversion of water to Israeli territories. Source context: Limited freshwater: Jordan River flow drastically reduced by disputes with Israel and diversion into Israeli territories. Yarmouk (major tributary of Jordan River) lies largely in Syria; Jordan's share limited by Syrian dams and wells. The book cites around 46 dams and 3,500 artesian wells, exceeding permitted dam numbers.
Priority: core
Source: guide line 401

### Q03-002
Question: Why is Jordan's share of Yarmouk water limited?
A. Syrian dams and wells restrict flow
B. The river has no water
C. Only sea evaporation
D. The river is entirely in Jordan
Answer: A
Explanation: Syrian dams and wells restrict flow. Source context: Limited freshwater: Jordan River flow drastically reduced by disputes with Israel and diversion into Israeli territories. Yarmouk (major tributary of Jordan River) lies largely in Syria; Jordan's share limited by Syrian dams and wells. The book cites around 46 dams and 3,500 artesian wells, exceeding permitted dam numbers.
Priority: core
Source: guide line 401

### Q03-003
Question: How many Syrian dams and artesian wells are cited?
A. 21 dams and 400 wells
B. 46 dams and 3,500 wells
C. 14 dams and 275 wells
D. 55 dams and 120 wells
Answer: B
Explanation: 46 dams and 3,500 wells. Source context: Limited freshwater: Jordan River flow drastically reduced by disputes with Israel and diversion into Israeli territories. Yarmouk (major tributary of Jordan River) lies largely in Syria; Jordan's share limited by Syrian dams and wells. The book cites around 46 dams and 3,500 artesian wells, exceeding permitted dam numbers.
Priority: core
Source: guide line 401

### Q03-004
Question: What annual rainfall volume is stated for wetter years?
A. 7,200–12,000 million m³
B. 275–475 million m³
C. 60–100 million m³
D. 692–1,050 million m³
Answer: A
Explanation: 7,200–12,000 million m³. Source context: Seasonal rainfall: Inconsistent; 7,200–12,000 million m³ annual rainfall in wetter years, less in dry years; difficult to plan supply.
Priority: core
Source: guide line 402

### Q03-005
Question: What portion of average rainfall evaporates?
A. 60%
B. 78.4%
C. 69%
D. 90–92%
Answer: D
Explanation: 90–92%. Source context: High evaporation: 90–92% of average rainfall evaporates; some remainder flows into streams, valleys and rivers, rest recharges groundwater.
Priority: core
Source: guide line 405

### Q03-006
Question: What happens to the rainfall that does not evaporate?
A. All is lost to industrial use
B. All reaches the Dead Sea
C. All becomes drinking water
D. Some flows to streams and rivers; rest recharges groundwater
Answer: D
Explanation: Some flows to streams and rivers; rest recharges groundwater. Source context: High evaporation: 90–92% of average rainfall evaporates; some remainder flows into streams, valleys and rivers, rest recharges groundwater.
Priority: core
Source: guide line 405

### Q03-007
Question: What increases Jordan's water demand?
A. Reduced urbanization alone
B. Lower industrial activity
C. Population, industry, tourism and agriculture growth
D. Declining consumption alone
Answer: C
Explanation: Population, industry, tourism and agriculture growth.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-008
Question: What does groundwater overexploitation cause?
A. Lower water levels and deteriorating quality
B. Improved quality automatically
C. Unlimited water supply
D. Higher rainfall
Answer: A
Explanation: Lower water levels and deteriorating quality. Source context: Overconsumption and overexploitation lower water levels and quality.
Priority: core
Source: guide line 407

### Q03-009
Question: Which is a water management measure?
A. Encouraging groundwater overextraction
B. Removing water purification stations
C. Expanding dams and increasing treated water use
D. Ending water harvesting
Answer: C
Explanation: Expanding dams and increasing treated water use.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-010
Question: Which household measure is in the water plan?
A. Prohibit rainwater storage
B. Use only imported bottled water
C. Require rainwater collection wells
D. Eliminate sewage infrastructure
Answer: C
Explanation: Require rainwater collection wells. Source context: 9. Require household rainwater collection wells.
Priority: core
Source: guide line 440

### Q03-011
Question: Which agricultural measure is in the water plan?
A. End all Jordan Valley irrigation
B. Promote overextraction of groundwater
C. Replace treated water with seawater
D. Sustain irrigated agriculture in Jordan Valley
Answer: D
Explanation: Sustain irrigated agriculture in Jordan Valley.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-012
Question: Which projects are included in the government plan?
A. Red–Dead and Disi
B. Cairo and Jerusalem conferences
C. Arab Maritime Bridge and Tapline
D. Rimland and Heartland
Answer: A
Explanation: Red–Dead and Disi. Source context: MCQ trap: Both projects mention 325 km; Red–Dead aims at 2 billion m³ annually; Disi supplies 100 million m³ annually.
Priority: core
Source: guide line 473

### Q03-013
Question: What is the Red–Dead project's proposed canal length and transfer volume?
A. 26 km and 275 million m³ annually
B. 120 km and 60 million m³ annually
C. 325 km and 100 million m³ annually
D. 325 km and 2 billion m³ annually
Answer: D
Explanation: 325 km and 2 billion m³ annually. Source context: Proposed connection of Red Sea to Dead Sea using a 325 km canal, transferring 2 billion m³ annually; book describes Dead Sea as having slow evaporation rates in this project passage.
Priority: core
Source: guide line 446

### Q03-014
Question: Which parties were involved in the Red–Dead project's origins?
A. Jordan, Syria and Lebanon
B. Jordan, Libya and Iran
C. Jordan, Israel and Palestinian Authority
D. Jordan, Iraq and Egypt
Answer: C
Explanation: Jordan, Israel and Palestinian Authority. Source context: Originated in peace process between Jordan, Israel and Palestinian Authority. World Bank involved in feasibility studies.
Priority: core
Source: guide line 447

### Q03-015
Question: Which institution was involved in Red–Dead feasibility studies?
A. Gama Energy
B. Arab League
C. Audit Bureau
D. World Bank
Answer: D
Explanation: World Bank. Source context: Originated in peace process between Jordan, Israel and Palestinian Authority. World Bank involved in feasibility studies.
Priority: core
Source: guide line 447

### Q03-016
Question: Which facilities were proposed for Red–Dead?
A. Only agricultural wells
B. Railway and shipping terminal
C. Oil refinery and airport
D. Hydroelectric station and desalination plant
Answer: D
Explanation: Hydroelectric station and desalination plant.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-017
Question: What estimated cost is stated for Red–Dead?
A. $1 billion
B. $100 million
C. $600 million
D. $3 billion
Answer: D
Explanation: $3 billion. Source context: Challenges: fluctuating peace with Israel; approximately $3 billion cost, slow World Bank funding.
Priority: core
Source: guide line 449

### Q03-018
Question: Why did Palestinian government object to Red–Dead in 2009?
A. Land confiscation near Dead Sea could separate northern and southern West Bank
B. The project involved no water
C. It replaced the Disi tender
D. It was too far from Aqaba
Answer: A
Explanation: Land confiscation near Dead Sea could separate northern and southern West Bank. Source context: In 2009, Palestinian government objected and threatened to take the issue to UN Security Council and International Court of Justice due to Israeli plans to confiscate land near Dead Sea, separating northern/southern West Bank.
Priority: core
Source: guide line 450

### Q03-019
Question: Where did the Palestinian government threaten to raise the issue?
A. European Investment Bank only
B. UN Security Council and International Court of Justice
C. Audit Bureau
D. Arab Maritime Bridge
Answer: B
Explanation: UN Security Council and International Court of Justice. Source context: In 2009, Palestinian government objected and threatened to take the issue to UN Security Council and International Court of Justice due to Israeli plans to confiscate land near Dead Sea, separating northern/southern West Bank.
Priority: core
Source: guide line 450

### Q03-020
Question: What is required for Red–Dead to proceed according to the guide?
A. Only a Jordanian election
B. International and regional consensus
C. Only private funding
D. No coordination
Answer: B
Explanation: International and regional consensus. Source context: Cannot proceed without international and regional consensus, according to book.
Priority: core
Source: guide line 451

### Q03-021
Question: What is BOT?
A. Build, Organize, Test
B. Buy, Own, Trade
C. Build, Operate, Transfer
D. Bank, Operate, Transfer
Answer: C
Explanation: Build, Operate, Transfer.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-022
Question: Which are conventional water sources?
A. Only treated wastewater
B. Surface water and groundwater
C. Treated wastewater and cloud seeding
D. Only desalination
Answer: B
Explanation: Surface water and groundwater. Source context: A. Surface water — permanent flow in valleys/rivers, spring discharge and floodwater.
Priority: core
Source: guide line 479

### Q03-023
Question: What is surface water?
A. Only treated sewage
B. Water trapped in rock layers only
C. Only fossil groundwater
D. Permanent river/valley flow, spring discharge and floodwater
Answer: D
Explanation: Permanent river/valley flow, spring discharge and floodwater. Source context: A. Surface water — permanent flow in valleys/rivers, spring discharge and floodwater.
Priority: core
Source: guide line 479

### Q03-024
Question: How much surface water is estimated annually?
A. 60 million m³
B. 692 million m³
C. 100 million m³
D. 275 million m³
Answer: B
Explanation: 692 million m³. Source context: Total estimated 692 million m³/year.
Priority: core
Source: guide line 481

### Q03-025
Question: How much surface water is in Yarmouk basin?
A. 275 million m³
B. 692 million m³
C. 475 million m³
D. 400 million m³
Answer: D
Explanation: 400 million m³. Source context: 400 million m³ in Yarmouk River basin.
Priority: core
Source: guide line 482

### Q03-026
Question: How much surface water can be economically developed?
A. 692 million m³
B. 60 million m³
C. 400 million m³
D. 475 million m³
Answer: D
Explanation: 475 million m³. Source context: Due to basin effectiveness and geographic/economic constraints, 475 million m³ can be economically developed.
Priority: core
Source: guide line 484

### Q03-027
Question: Which set consists of listed surface water basins?
A. Nile, Tigris and Euphrates
B. Ma'in, Afra and Zara only
C. Aqaba, Suez and Negev
D. Zarqa, Dead Sea, Wadi Araba, Yatim, Jafr and Azraq
Answer: D
Explanation: Zarqa, Dead Sea, Wadi Araba, Yatim, Jafr and Azraq. Source context: Other basins: Zarqa River, Dead Sea, north/south Wadi Araba, Yatim, Jafr and Azraq.
Priority: core
Source: guide line 483

### Q03-028
Question: How is groundwater formed?
A. Only water flows through open rivers
B. Rainwater infiltrates and becomes trapped between rock layers
C. Only wastewater is treated
D. Only seawater evaporates
Answer: B
Explanation: Rainwater infiltrates and becomes trapped between rock layers.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-029
Question: How many groundwater basins does the textbook state?
A. 55
B. 14
C. 21
D. 12
Answer: D
Explanation: 12. Source context: Textbook states 12 groundwater basins; named examples: Amman–Zarqa, Yarmouk, Disi, Mudawwara, Jafr, Azraq, Sarhan, Hamad, Jordan Valley, Dead Sea, Mujib, Hasa, northern/southern Wadi Araba and Quweira. The enumeration is longer than the stated number.
Priority: core
Source: guide line 488

### Q03-030
Question: What is renewable groundwater?
A. Rainwater reaching aquifers through rock cracks
B. Water stored for long periods without replenishment
C. Only treated sewage
D. Only river floodwater
Answer: A
Explanation: Rainwater reaching aquifers through rock cracks.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-031
Question: What is renewable groundwater volume within safe limits?
A. 400 million m³
B. 275 million m³
C. 18 million m³
D. 692 million m³
Answer: B
Explanation: 275 million m³.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-032
Question: Where is non-renewable groundwater mainly found?
A. South and east, including Disi and Jafr
B. Only Amman and Irbid
C. Only the Mediterranean coast
D. Only western highlands
Answer: A
Explanation: South and east, including Disi and Jafr.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-033
Question: What non-renewable water figure is printed?
A. 100 million m³ for 10 years
B. 60 million m³ for 30 years
C. 18 million m³ for 20 years
D. 275 million m³ for 25 years
Answer: C
Explanation: 18 million m³ for 20 years.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-034
Question: How does the Ministry aim to protect groundwater?
A. Unlimited extraction
B. Increasing pollution
C. Legal and financial controls on extraction and pollution
D. Eliminating monitoring
Answer: C
Explanation: Legal and financial controls on extraction and pollution. Source context: Overextraction is a major problem; Ministry aims at legal/financial measures to control extraction and protect groundwater from pollution.
Priority: core
Source: guide line 495

### Q03-035
Question: Which is a non-conventional water source?
A. Spring water
B. Treated wastewater
C. River water
D. Groundwater
Answer: B
Explanation: Treated wastewater.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-036
Question: Approximately how many wastewater treatment plants are cited?
A. 46
B. 14
C. 12
D. 55
Answer: B
Explanation: 14. Source context: Treated wastewater: About 14 treatment plants, including Khirbet As-Samra; flows into King Talal Dam in Dhulail and used for Jordan Valley irrigation.
Priority: core
Source: guide line 499

### Q03-037
Question: Which dam receives Khirbet As-Samra treated water?
A. Dabuq Reservoir
B. King Talal Dam
C. Disi Reservoir
D. Abu Alanda Reservoir
Answer: B
Explanation: King Talal Dam. Source context: Treated wastewater: About 14 treatment plants, including Khirbet As-Samra; flows into King Talal Dam in Dhulail and used for Jordan Valley irrigation.
Priority: core
Source: guide line 499

### Q03-038
Question: What is annual treated wastewater quantity?
A. 275 million m³
B. 692 million m³
C. 100 million m³
D. 60 million m³
Answer: D
Explanation: 60 million m³. Source context: Seasonal rainfall: Inconsistent; 7,200–12,000 million m³ annual rainfall in wetter years, less in dry years; difficult to plan supply.
Priority: core
Source: guide line 402

### Q03-039
Question: Which standard governs non-domestic treated wastewater use?
A. Defense Law No. 13 of 1992
B. Article 124
C. Law No. 10 of 1993
D. Jordanian Standard No. 893 of 1995
Answer: D
Explanation: Jordanian Standard No. 893 of 1995. Source context: Must meet Jordanian Standard No. 893 of 1995 for non-domestic use; mixed with freshwater as appropriate.
Priority: core
Source: guide line 501

### Q03-040
Question: What other practices are mentioned under non-conventional sources?
A. Military defense
B. Oil extraction and refining
C. Only conventional groundwater extraction
D. Rainwater harvesting and cloud seeding
Answer: D
Explanation: Rainwater harvesting and cloud seeding.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-041
Question: Which set contains hot mineral springs from the guide?
A. Ma'in, Afra, Zara and Suwaima
B. Dabuq, Abu Alanda, Madaba and Aqaba
C. Disi, Jafr, Azraq and Sarhan
D. Zarqa, Yarmouk, Yabis and Jerash
Answer: A
Explanation: Ma'in, Afra, Zara and Suwaima. Source context: Found along the Rift Valley/Jordan Valley: Jordanian Hamma springs, Shuna North springs, Ma'in Hot Springs, Afra springs, Zara Spring, Suwaima Spring, Deir Alla Spring, Wadi Bin Hamad Hot Springs northwest of Karak.
Priority: core
Source: guide line 506

### Q03-042
Question: Where are hot mineral waters mainly found?
A. Only central Amman
B. Along Jordan Rift Valley/Jordan Valley
C. Only Syrian territory
D. Only eastern desert
Answer: B
Explanation: Along Jordan Rift Valley/Jordan Valley. Source context: Found along the Rift Valley/Jordan Valley: Jordanian Hamma springs, Shuna North springs, Ma'in Hot Springs, Afra springs, Zara Spring, Suwaima Spring, Deir Alla Spring, Wadi Bin Hamad Hot Springs northwest of Karak.
Priority: core
Source: guide line 506

### Q03-043
Question: Which pair is listed among Jordan's groundwater basins?
A. Lake Tiberias and Suez
B. Aqaba and Nuweiba
C. Nile and Tigris
D. Amman–Zarqa and Yarmouk
Answer: D
Explanation: Amman–Zarqa and Yarmouk. Source context: Textbook states 12 groundwater basins; named examples: Amman–Zarqa, Yarmouk, Disi, Mudawwara, Jafr, Azraq, Sarhan, Hamad, Jordan Valley, Dead Sea, Mujib, Hasa, northern/southern Wadi Araba and Quweira. The enumeration is longer than the stated number.
Priority: core
Source: guide line 488

### Q03-044
Question: Which set contains groundwater basins named in the guide?
A. Mudawwara, Sarhan, Hamad and Mujib
B. Harrow, Sandhurst and Alexandria
C. Cairo, Beirut, Damascus and Baghdad
D. Ma'in, Afra, Zara and Suwaima
Answer: A
Explanation: Mudawwara, Sarhan, Hamad and Mujib. Source context: Textbook states 12 groundwater basins; named examples: Amman–Zarqa, Yarmouk, Disi, Mudawwara, Jafr, Azraq, Sarhan, Hamad, Jordan Valley, Dead Sea, Mujib, Hasa, northern/southern Wadi Araba and Quweira. The enumeration is longer than the stated number.
Priority: core
Source: guide line 488

### Q03-045
Question: Which additional groundwater basins are listed?
A. Hasa, northern/southern Wadi Araba and Quweira
B. Nile, Tigris and Euphrates
C. Beit Shean, Jezreel and Negev
D. Red Sea, Suez and Gulf of Aden
Answer: A
Explanation: Hasa, northern/southern Wadi Araba and Quweira. Source context: Textbook states 12 groundwater basins; named examples: Amman–Zarqa, Yarmouk, Disi, Mudawwara, Jafr, Azraq, Sarhan, Hamad, Jordan Valley, Dead Sea, Mujib, Hasa, northern/southern Wadi Araba and Quweira. The enumeration is longer than the stated number.
Priority: core
Source: guide line 488

### Q03-046
Question: What determines the volume of non-renewable groundwater?
A. Daily evaporation alone
B. Number of political parties
C. Length of coastline alone
D. Aquifer thickness and horizontal extent
Answer: D
Explanation: Aquifer thickness and horizontal extent.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-047
Question: Where is treated wastewater from King Talal Dam used?
A. Only domestic drinking water
B. Only industrial oil refining
C. Only Red Sea desalination
D. Jordan Valley irrigation
Answer: D
Explanation: Jordan Valley irrigation. Source context: Treated wastewater: About 14 treatment plants, including Khirbet As-Samra; flows into King Talal Dam in Dhulail and used for Jordan Valley irrigation.
Priority: core
Source: guide line 499

### Q03-048
Question: Which hot mineral spring is located northwest of Karak?
A. Ma'in Hot Springs
B. Shuna North Springs
C. Wadi Bin Hamad Hot Springs
D. Jordanian Hamma Springs
Answer: C
Explanation: Wadi Bin Hamad Hot Springs. Source context: Found along the Rift Valley/Jordan Valley: Jordanian Hamma springs, Shuna North springs, Ma'in Hot Springs, Afra springs, Zara Spring, Suwaima Spring, Deir Alla Spring, Wadi Bin Hamad Hot Springs northwest of Karak.
Priority: core
Source: guide line 506

### Q03-049
Question: Which countries were initially ready to lay pipes for Disi project before international issues prevented it?
A. Egypt and Syria
B. France and Britain
C. Libya and Iran
D. Saudi Arabia and Kuwait
Answer: C
Explanation: Libya and Iran.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-050
Question: Who attended Disi project inauguration with King Abdullah II?
A. Muammar Gaddafi
B. King Saud
C. Anthony Eden
D. Gamal Abdel Nasser
Answer: A
Explanation: Muammar Gaddafi.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-051
Question: Which banks/agencies financed Disi through sovereign loan agreements in May 2009?
A. European Investment Bank and French Development Agency
B. Audit Bureau and IMF only
C. Gama Energy and Tapline only
D. World Bank and Arab League
Answer: A
Explanation: European Investment Bank and French Development Agency.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-052
Question: What were the annual supply allocations of the Disi reservoirs?
A. Abu Alanda 60m m³; Dabuq 40m m³
B. Both 100m m³
C. Both 50m m³
D. Abu Alanda 40m m³; Dabuq 60m m³
Answer: D
Explanation: Abu Alanda 40m m³; Dabuq 60m m³.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-053
Question: What were the stated Disi reservoir storage capacities?
A. Abu Alanda 150,000 m³; Dabuq about 250,000 m³
B. Abu Alanda 250,000 m³; Dabuq 150,000 m³
C. Both 60 million m³
D. Both 100 million m³
Answer: A
Explanation: Abu Alanda 150,000 m³; Dabuq about 250,000 m³.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-054
Question: How many wells and how much iron did Disi construction involve?
A. 46 wells and 150,000 tons
B. 14 wells and 60,000 tons
C. 120 wells and 325,000 tons
D. 55 wells and 250,000 tons of iron
Answer: D
Explanation: 55 wells and 250,000 tons of iron.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-055
Question: What lengths were stated for Disi collection lines and main pipelines?
A. 325 km and 120 km
B. 16 km and 540 km
C. 120 km and 325 km
D. 26 km and 85 km
Answer: C
Explanation: 120 km and 325 km. Source context: MCQ trap: Both projects mention 325 km; Red–Dead aims at 2 billion m³ annually; Disi supplies 100 million m³ annually.
Priority: core
Source: guide line 473

### Q03-056
Question: What diameter range was stated for Disi main pipelines?
A. 35–39 mm
B. 1,600–1,800 mm
C. 100–200 mm
D. 300–500 mm
Answer: B
Explanation: 1,600–1,800 mm.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-057
Question: When did Disi water begin flowing to Amman?
A. July 1957
B. July 2013
C. September 2000
D. May 2009
Answer: B
Explanation: July 2013.
Priority: core
Source: Water and natural resources (pp. 40–45)

### Q03-058
Question: Which groundwater type is described by: Rainwater reaches aquifers through rock cracks; 275 million m³ within safe limits.?
A. Surface water
B. Renewable
C. Non-renewable
D. Treated wastewater
Answer: B
Explanation: Renewable | Rainwater reaches aquifers through rock cracks; 275 million m³ within safe limits.
Priority: core
Source: guide line 492

### Q03-059
Question: Which groundwater type is described by: Water stored in aquifers for long periods; amount depends on thickness and horizontal extent. Mainly south/east (Disi and Jafr); about 18 million m³ for 20 years as stated.?
A. Renewable
B. Surface water
C. Treated wastewater
D. Non-renewable
Answer: D
Explanation: Non-renewable | Water stored in aquifers for long periods; amount depends on thickness and horizontal extent. Mainly south/east (Disi and Jafr); about 18 million m³ for 20 years as stated.
Priority: core
Source: guide line 493

### Q03-060
Question: In the Disi project, what does the guide state about Idea?
A. Early 1980s; extract 60 million m³/year
B. Late 2000s; extract 275 million m³/year
C. Mid-1990s; extract 100 million m³/year
D. Early 1970s; extract 400 million m³/year
Answer: C
Explanation: Idea | Mid-1990s; extract 100 million m³/year
Priority: detail
Source: guide line 457

### Q03-061
Question: In the Disi project, what does the guide state about Main pumping stations?
A. Salt and Irbid
B. Mafraq and Zizia
C. Madaba and Disi
D. Amman and Aqaba
Answer: C
Explanation: Main pumping stations | Madaba and Disi
Priority: detail
Source: guide line 458

### Q03-062
Question: In the Disi project, what does the guide state about Early estimated cost?
A. About $1 billion; Jordan sought funds/donors. Libya and Iran had been ready to lay pipes, but lack of international understandings prevented it.
B. About $100 million
C. About $3 billion
D. About $10 million
Answer: A
Explanation: Early estimated cost | About $1 billion; Jordan sought funds/donors. Libya and Iran had been ready to lay pipes, but lack of international understandings prevented it.
Priority: detail
Source: guide line 459

### Q03-063
Question: In the Disi project, what does the guide state about Inauguration?
A. September 27, 2000, patronage of King Abdullah II, with Libyan President Muammar Gaddafi
B. March 25, 1992, with King Hussein
C. May 17, 2009, with EIB
D. July 2013, with King Abdullah II
Answer: A
Explanation: Inauguration | September 27, 2000, patronage of King Abdullah II, with Libyan President Muammar Gaddafi
Priority: detail
Source: guide line 460

### Q03-064
Question: In the Disi project, what does the guide state about Later project cost?
A. $600 million
B. $100 million
C. $3 billion
D. $1 billion
Answer: A
Explanation: Later project cost | $600 million
Priority: detail
Source: guide line 461

### Q03-065
Question: In the Disi project, what does the guide state about Source?
A. Southern Disi groundwater reservoir near Saudi border, 325 km south of Amman
B. Western Dead Sea basin
C. Eastern Azraq basin
D. Northern Yarmouk basin near Syria
Answer: A
Explanation: Source | Southern Disi groundwater reservoir near Saudi border, 325 km south of Amman
Priority: detail
Source: guide line 462

### Q03-066
Question: In the Disi project, what does the guide state about Tender?
A. Ended 2000, World Bank
B. Ended 2013, European Investment Bank
C. Ended 2008, Turkish company Gama Energy
D. Ended 2009, French Development Agency
Answer: C
Explanation: Tender | Ended 2008, Turkish company Gama Energy
Priority: detail
Source: guide line 463

### Q03-067
Question: In the Disi project, what does the guide state about System?
A. Public operation with no transfer
B. Permanent private ownership
C. BOT = Build, Operate, Transfer; government ownership/private sector operation and eventual handover
D. Build, Own, Trade
Answer: C
Explanation: System | BOT = Build, Operate, Transfer; government ownership/private sector operation and eventual handover
Priority: detail
Source: guide line 464

### Q03-068
Question: In the Disi project, what does the guide state about Construction?
A. 250,000 tons iron; 55 wells; depth printed as 244 inches each (unusual unit); 120 km well collection lines; 325 km main pipelines; 1,600–1,800 mm diameters
B. 12 wells and 85 km main pipes
C. 14 wells and 26 km main pipes
D. 46 wells and 325 km collection lines
Answer: A
Explanation: Construction | 250,000 tons iron; 55 wells; depth printed as 244 inches each (unusual unit); 120 km well collection lines; 325 km main pipelines; 1,600–1,800 mm diameters
Priority: detail
Source: guide line 465

### Q03-069
Question: In the Disi project, what does the guide state about Annual water supply?
A. 60 million m³ drinking water to Amman
B. 100 million m³ drinking water to Amman
C. 400 million m³ drinking water to Amman
D. 275 million m³ drinking water to Amman
Answer: B
Explanation: Annual water supply | 100 million m³ drinking water to Amman
Priority: detail
Source: guide line 466

### Q03-070
Question: In the Disi project, what does the guide state about Abu Alanda Reservoir?
A. 60 million m³/year; storage 250,000 m³
B. 40 million m³/year; storage 250,000 m³
C. 40 million m³/year; storage 150,000 m³
D. 60 million m³/year; storage 150,000 m³
Answer: C
Explanation: Abu Alanda Reservoir | 40 million m³/year; storage 150,000 m³
Priority: detail
Source: guide line 467

### Q03-071
Question: In the Disi project, what does the guide state about Dabuq Reservoir?
A. 60 million m³/year; storage 150,000 m³
B. 40 million m³/year; storage 250,000 m³
C. 40 million m³/year; storage 150,000 m³
D. 60 million m³/year; storage about 250,000 m³
Answer: D
Explanation: Dabuq Reservoir | 60 million m³/year; storage about 250,000 m³
Priority: detail
Source: guide line 468

### Q03-072
Question: In the Disi project, what does the guide state about Operation?
A. Turkish company sells water for 25 years before transfer to Jordanian government
B. 15 years before transfer
C. Six months before transfer
D. 10 years before transfer
Answer: A
Explanation: Operation | Turkish company sells water for 25 years before transfer to Jordanian government
Priority: detail
Source: guide line 469

### Q03-073
Question: In the Disi project, what does the guide state about Financing?
A. Jordan allocated $100 million in reserves; sovereign loan agreements May 17, 2009 with European Investment Bank (EIB) and French Development Agency (AFD); Gama and lenders cover rest
B. $10m reserves; 2000 loans
C. $600m in Jordanian reserves; 2008 loans
D. $3bn reserves; 2013 loans
Answer: A
Explanation: Financing | Jordan allocated $100 million in reserves; sovereign loan agreements May 17, 2009 with European Investment Bank (EIB) and French Development Agency (AFD); Gama and lenders cover rest
Priority: detail
Source: guide line 470

### Q03-074
Question: In the Disi project, what does the guide state about Completion estimate and delivery?
A. Water started flowing in July 1957
B. Water started flowing in July 2000
C. Water started flowing in May 2009
D. Book gives 3–4 year completion estimate and states water began flowing to Amman in July 2013 after delays, improving supply and storage
Answer: D
Explanation: Completion estimate and delivery | Book gives 3–4 year completion estimate and states water began flowing to Amman in July 2013 after delays, improving supply and storage
Priority: detail
Source: guide line 471

### Q03-075
Question: According to the printed water resources table, what was the population (millions) in 1990?
A. 3.9
B. 4.01
C. 3.7
D. 3.5
Answer: D
Explanation: 1990: population (millions): 3.5; available water (million m³): 870; water demand (million m³): 1,070; water deficit (million m³): 200. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 416

### Q03-076
Question: According to the printed water resources table, what was the available water (million m³) in 1990?
A. 870
B. 904
C. 983
D. 945
Answer: A
Explanation: 1990: population (millions): 3.5; available water (million m³): 870; water demand (million m³): 1,070; water deficit (million m³): 200. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 416

### Q03-077
Question: According to the printed water resources table, what was the water demand (million m³) in 1990?
A. 1,130
B. 1,098
C. 1,216
D. 1,070
Answer: D
Explanation: 1990: population (millions): 3.5; available water (million m³): 870; water demand (million m³): 1,070; water deficit (million m³): 200. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 416

### Q03-078
Question: According to the printed water resources table, what was the water deficit (million m³) in 1990?
A. 194
B. 185
C. 233
D. 200
Answer: D
Explanation: 1990: population (millions): 3.5; available water (million m³): 870; water demand (million m³): 1,070; water deficit (million m³): 200. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 416

### Q03-079
Question: According to the printed water resources table, what was the population (millions) in 1991?
A. 3.7
B. 3.5
C. 3.9
D. 4.01
Answer: A
Explanation: 1991: population (millions): 3.7; available water (million m³): 904; water demand (million m³): 1,098; water deficit (million m³): 194. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 417

### Q03-080
Question: According to the printed water resources table, what was the available water (million m³) in 1991?
A. 983
B. 904
C. 870
D. 945
Answer: B
Explanation: 1991: population (millions): 3.7; available water (million m³): 904; water demand (million m³): 1,098; water deficit (million m³): 194. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 417

### Q03-081
Question: According to the printed water resources table, what was the water demand (million m³) in 1991?
A. 1,216
B. 1,130
C. 1,098
D. 1,070
Answer: C
Explanation: 1991: population (millions): 3.7; available water (million m³): 904; water demand (million m³): 1,098; water deficit (million m³): 194. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 417

### Q03-082
Question: According to the printed water resources table, what was the water deficit (million m³) in 1991?
A. 200
B. 185
C. 194
D. 233
Answer: C
Explanation: 1991: population (millions): 3.7; available water (million m³): 904; water demand (million m³): 1,098; water deficit (million m³): 194. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 417

### Q03-083
Question: According to the printed water resources table, what was the population (millions) in 1992?
A. 3.7
B. 4.01
C. 3.5
D. 3.9
Answer: D
Explanation: 1992: population (millions): 3.9; available water (million m³): 945; water demand (million m³): 1,130; water deficit (million m³): 185. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 418

### Q03-084
Question: According to the printed water resources table, what was the available water (million m³) in 1992?
A. 904
B. 870
C. 945
D. 983
Answer: C
Explanation: 1992: population (millions): 3.9; available water (million m³): 945; water demand (million m³): 1,130; water deficit (million m³): 185. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 418

### Q03-085
Question: According to the printed water resources table, what was the water demand (million m³) in 1992?
A. 1,130
B. 1,216
C. 1,098
D. 1,070
Answer: A
Explanation: 1992: population (millions): 3.9; available water (million m³): 945; water demand (million m³): 1,130; water deficit (million m³): 185. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 418

### Q03-086
Question: According to the printed water resources table, what was the water deficit (million m³) in 1992?
A. 200
B. 194
C. 185
D. 233
Answer: C
Explanation: 1992: population (millions): 3.9; available water (million m³): 945; water demand (million m³): 1,130; water deficit (million m³): 185. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 418

### Q03-087
Question: According to the printed water resources table, what was the population (millions) in 1993?
A. 4.07
B. 4.01
C. 3.9
D. 3.7
Answer: B
Explanation: 1993: population (millions): 4.01; available water (million m³): 983; water demand (million m³): 1,216; water deficit (million m³): 233. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 419

### Q03-088
Question: According to the printed water resources table, what was the available water (million m³) in 1993?
A. 945
B. 983
C. 940
D. 904
Answer: B
Explanation: 1993: population (millions): 4.01; available water (million m³): 983; water demand (million m³): 1,216; water deficit (million m³): 233. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 419

### Q03-089
Question: According to the printed water resources table, what was the water demand (million m³) in 1993?
A. 1,325
B. 1,130
C. 1,216
D. 1,098
Answer: C
Explanation: 1993: population (millions): 4.01; available water (million m³): 983; water demand (million m³): 1,216; water deficit (million m³): 233. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 419

### Q03-090
Question: According to the printed water resources table, what was the water deficit (million m³) in 1993?
A. 233
B. 194
C. 185
D. 385
Answer: A
Explanation: 1993: population (millions): 4.01; available water (million m³): 983; water demand (million m³): 1,216; water deficit (million m³): 233. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 419

### Q03-091
Question: According to the printed water resources table, what was the population (millions) in 1994?
A. 4.3
B. 4.01
C. 3.9
D. 4.07
Answer: D
Explanation: 1994: population (millions): 4.07; available water (million m³): 940; water demand (million m³): 1,325; water deficit (million m³): 385. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 420

### Q03-092
Question: According to the printed water resources table, what was the available water (million m³) in 1994?
A. 945
B. 950
C. 940
D. 983
Answer: C
Explanation: 1994: population (millions): 4.07; available water (million m³): 940; water demand (million m³): 1,325; water deficit (million m³): 385. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 420

### Q03-093
Question: According to the printed water resources table, what was the water demand (million m³) in 1994?
A. 1,431
B. 1,130
C. 1,325
D. 1,216
Answer: C
Explanation: 1994: population (millions): 4.07; available water (million m³): 940; water demand (million m³): 1,325; water deficit (million m³): 385. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 420

### Q03-094
Question: According to the printed water resources table, what was the water deficit (million m³) in 1994?
A. 233
B. 385
C. 481
D. 185
Answer: B
Explanation: 1994: population (millions): 4.07; available water (million m³): 940; water demand (million m³): 1,325; water deficit (million m³): 385. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 420

### Q03-095
Question: According to the printed water resources table, what was the population (millions) in 1995?
A. 5.3
B. 4.3
C. 4.07
D. 4.01
Answer: B
Explanation: 1995: population (millions): 4.3; available water (million m³): 950; water demand (million m³): 1,431; water deficit (million m³): 481. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 421

### Q03-096
Question: According to the printed water resources table, what was the available water (million m³) in 1995?
A. 980
B. 950
C. 983
D. 940
Answer: B
Explanation: 1995: population (millions): 4.3; available water (million m³): 950; water demand (million m³): 1,431; water deficit (million m³): 481. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 421

### Q03-097
Question: According to the printed water resources table, what was the water demand (million m³) in 1995?
A. 1,431
B. 1,325
C. 1,515
D. 1,216
Answer: A
Explanation: 1995: population (millions): 4.3; available water (million m³): 950; water demand (million m³): 1,431; water deficit (million m³): 481. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 421

### Q03-098
Question: According to the printed water resources table, what was the water deficit (million m³) in 1995?
A. 535
B. 233
C. 385
D. 481
Answer: D
Explanation: 1995: population (millions): 4.3; available water (million m³): 950; water demand (million m³): 1,431; water deficit (million m³): 481. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 421

### Q03-099
Question: According to the printed water resources table, what was the population (millions) in 2000?
A. 5.3
B. 4.07
C. 6.2
D. 4.3
Answer: A
Explanation: 2000: population (millions): 5.3; available water (million m³): 980; water demand (million m³): 1,515; water deficit (million m³): 535. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 422

### Q03-100
Question: According to the printed water resources table, what was the available water (million m³) in 2000?
A. 950
B. 980
C. 940
D. 1,050
Answer: B
Explanation: 2000: population (millions): 5.3; available water (million m³): 980; water demand (million m³): 1,515; water deficit (million m³): 535. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 422

### Q03-101
Question: According to the printed water resources table, what was the water demand (million m³) in 2000?
A. 1,515
B. 1,431
C. 1,594
D. 1,325
Answer: A
Explanation: 2000: population (millions): 5.3; available water (million m³): 980; water demand (million m³): 1,515; water deficit (million m³): 535. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 422

### Q03-102
Question: According to the printed water resources table, what was the water deficit (million m³) in 2000?
A. 544
B. 481
C. 385
D. 535
Answer: D
Explanation: 2000: population (millions): 5.3; available water (million m³): 980; water demand (million m³): 1,515; water deficit (million m³): 535. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 422

### Q03-103
Question: According to the printed water resources table, what was the population (millions) in 2005?
A. 4.3
B. 5.3
C. 6.2
D. 7.2
Answer: C
Explanation: 2005: population (millions): 6.2; available water (million m³): 1,050; water demand (million m³): 1,594; water deficit (million m³): 544. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 423

### Q03-104
Question: According to the printed water resources table, what was the available water (million m³) in 2005?
A. 1,050
B. 950
C. 980
D. 1,100
Answer: A
Explanation: 2005: population (millions): 6.2; available water (million m³): 1,050; water demand (million m³): 1,594; water deficit (million m³): 544. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 423

### Q03-105
Question: According to the printed water resources table, what was the water demand (million m³) in 2005?
A. 1,594
B. 1,515
C. 1,683
D. 1,431
Answer: A
Explanation: 2005: population (millions): 6.2; available water (million m³): 1,050; water demand (million m³): 1,594; water deficit (million m³): 544. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 423

### Q03-106
Question: According to the printed water resources table, what was the water deficit (million m³) in 2005?
A. 481
B. 583
C. 535
D. 544
Answer: D
Explanation: 2005: population (millions): 6.2; available water (million m³): 1,050; water demand (million m³): 1,594; water deficit (million m³): 544. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 423

### Q03-107
Question: According to the printed water resources table, what was the population (millions) in 2010?
A. 6.2
B. 4.3
C. 5.3
D. 7.2
Answer: D
Explanation: 2010: population (millions): 7.2; available water (million m³): 1,100; water demand (million m³): 1,683; water deficit (million m³): 583. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 424

### Q03-108
Question: According to the printed water resources table, what was the available water (million m³) in 2010?
A. 980
B. 950
C. 1,050
D. 1,100
Answer: D
Explanation: 2010: population (millions): 7.2; available water (million m³): 1,100; water demand (million m³): 1,683; water deficit (million m³): 583. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 424

### Q03-109
Question: According to the printed water resources table, what was the water demand (million m³) in 2010?
A. 1,683
B. 1,431
C. 1,515
D. 1,594
Answer: A
Explanation: 2010: population (millions): 7.2; available water (million m³): 1,100; water demand (million m³): 1,683; water deficit (million m³): 583. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 424

### Q03-110
Question: According to the printed water resources table, what was the water deficit (million m³) in 2010?
A. 583
B. 544
C. 481
D. 535
Answer: A
Explanation: 2010: population (millions): 7.2; available water (million m³): 1,100; water demand (million m³): 1,683; water deficit (million m³): 583. Use the printed values, even where the source is inconsistent.
Priority: detail
Source: guide line 424

## Chapter 4 — Historical background (pp. 53–54, 63–64) (61 questions)

### Q04-001
Question: When was the Ottoman Empire established?
A. 1918 CE
B. 1516 CE
C. 1798 CE
D. 1299 CE
Answer: D
Explanation: 1299 CE. Source context: Ottoman Empire established 1299 CE; reached peak by early 16th century. Territories included parts of Austrian Empire, Balkans, Caucasus, Bosphorus, Red Sea and Levant.
Priority: core
Source: guide line 516

### Q04-002
Question: When did Ottoman rule in Jordan begin and end?
A. 1798–1921
B. 1918–1946
C. 1299–1920
D. 1516–1918
Answer: D
Explanation: 1516–1918.
Priority: core
Source: Historical background (pp. 53–54, 63–64)

### Q04-003
Question: Who defeated the Mamluks at Marj Dabiq in 1516?
A. Mohammed Ali
B. Sultan Selim I
C. Ibn Saud
D. Prince Faisal
Answer: B
Explanation: Sultan Selim I. Source context: 1516 — Battle of Marj Dabiq, north of Aleppo: Sultan Selim I defeated Mamluks and extended control over Jordan and Palestine. Egypt followed after Battle of Ridaniya.
Priority: core
Source: guide line 517

### Q04-004
Question: Where was Marj Dabiq?
A. Near Aqaba
B. South of Amman
C. North of Aleppo
D. Near Cairo
Answer: C
Explanation: North of Aleppo. Source context: 1516 — Battle of Marj Dabiq, north of Aleppo: Sultan Selim I defeated Mamluks and extended control over Jordan and Palestine. Egypt followed after Battle of Ridaniya.
Priority: core
Source: guide line 517

### Q04-005
Question: Which battle preceded Ottoman control of Egypt?
A. Marj Dabiq alone
B. Latrun
C. Ridaniya
D. Maysalun
Answer: C
Explanation: Ridaniya. Source context: 1516 — Battle of Marj Dabiq, north of Aleppo: Sultan Selim I defeated Mamluks and extended control over Jordan and Palestine. Egypt followed after Battle of Ridaniya.
Priority: core
Source: guide line 517

### Q04-006
Question: Which North African country remained independent of Ottoman rule according to the text?
A. Morocco
B. Egypt
C. Algeria
D. Libya
Answer: A
Explanation: Morocco. Source context: Ottoman influence extended across North Africa except Morocco, which remained independent under Saadi and later Alawite dynasties until Spanish/French colonization in 1912. Also included Yemen, Iraq and parts of Iran.
Priority: core
Source: guide line 518

### Q04-007
Question: Which dynasties ruled Morocco before colonial subjugation in 1912?
A. Saadi and Alawite
B. Abbasid and Umayyad
C. Mamluk and Ottoman
D. Hashemite and Ottoman
Answer: A
Explanation: Saadi and Alawite. Source context: Ottoman influence extended across North Africa except Morocco, which remained independent under Saadi and later Alawite dynasties until Spanish/French colonization in 1912. Also included Yemen, Iraq and parts of Iran.
Priority: core
Source: guide line 518

### Q04-008
Question: When did Ottoman dominance begin gradually declining?
A. Early 13th century
B. Mid-18th century
C. After 1946
D. Early 16th century
Answer: B
Explanation: Mid-18th century. Source context: Dominance until mid-18th century; gradual decline afterward.
Priority: core
Source: guide line 519

### Q04-009
Question: Why did Islamic legitimacy help Ottoman control?
A. They promoted political fragmentation
B. They abolished holy sites
C. Sultans claimed Caliph title and protected Mecca and Medina
D. They rejected shared religion
Answer: C
Explanation: Sultans claimed Caliph title and protected Mecca and Medina. Source context: 1. Religious solidarity and Islamic legitimacy: Shared Islam, Ottoman sultans claimed Caliph title, particularly legitimate in Sunni Arab world; protected Mecca and Medina, seen as defenders of Islam, reducing resistance.
Priority: core
Source: guide line 523

### Q04-010
Question: What condition made Mamluk territories vulnerable?
A. Strong centralized unity
B. Absence of rival powers
C. Economic prosperity alone
D. Military and economic weakness and political fragmentation
Answer: D
Explanation: Military and economic weakness and political fragmentation.
Priority: core
Source: Historical background (pp. 53–54, 63–64)

### Q04-011
Question: Why did some Arab elites welcome Ottoman centralization?
A. Desire to end all centralized government
B. Hope for stability and unity after Abbasid-era fragmentation
C. Hope for French colonial rule
D. Desire for economic isolation
Answer: B
Explanation: Hope for stability and unity after Abbasid-era fragmentation. Source context: 3. Desire for political unity and stability: Fragmentation since fall of Abbasid Caliphate; Arab elites saw extensive empire and central government as restoring order and unity after centuries of competing rulers.
Priority: core
Source: guide line 525

### Q04-012
Question: What characterized the stagnation phase of Ottoman rule?
A. Arab independence and free elections
B. Modern democratic institutions
C. No taxes or conscription
D. Neglect, heavy taxes, conscription and erasure of Arab identity
Answer: D
Explanation: Neglect, heavy taxes, conscription and erasure of Arab identity.
Priority: core
Source: Historical background (pp. 53–54, 63–64)

### Q04-013
Question: When was Napoleon's French campaign in Egypt?
A. 1516–1518
B. 1918–1920
C. 1798–1801
D. 1921–1928
Answer: C
Explanation: 1798–1801. Source context: Napoleon's French campaign in Egypt 1798–1801 exposed Arabs to European advances and governance.
Priority: core
Source: guide line 536

### Q04-014
Question: Whose rule extended to the Levant during awakening?
A. King Hussein
B. Sultan Selim I
C. Lord Plumer
D. Mohammed Ali
Answer: D
Explanation: Mohammed Ali. Source context: Mohammed Ali's rule extended to Levant.
Priority: core
Source: guide line 537

### Q04-015
Question: Which religious movement emerged in Najd?
A. Sanusi
B. Mamluk
C. Mahdist
D. Wahhabi
Answer: D
Explanation: Wahhabi. Source context: Religious movements: Wahhabi in Najd, Sanusi in Libya, Mahdist in Sudan.
Priority: core
Source: guide line 538

### Q04-016
Question: Which religious movement emerged in Libya?
A. Wahhabi
B. Sanusi
C. Abbasid
D. Mahdist
Answer: B
Explanation: Sanusi. Source context: Religious movements: Wahhabi in Najd, Sanusi in Libya, Mahdist in Sudan.
Priority: core
Source: guide line 538

### Q04-017
Question: Which religious movement emerged in Sudan?
A. Mahdist
B. Alawite
C. Wahhabi
D. Sanusi
Answer: A
Explanation: Mahdist. Source context: Religious movements: Wahhabi in Najd, Sanusi in Libya, Mahdist in Sudan.
Priority: core
Source: guide line 538

### Q04-018
Question: Which ideas did Western influence introduce during awakening?
A. Only tribal isolation
B. Nationalism, freedom, democracy and sovereignty
C. Only conscription and taxation
D. Only Ottoman absolutism
Answer: B
Explanation: Nationalism, freedom, democracy and sovereignty. Source context: Western influence: nationalism, freedom, democracy and sovereignty.
Priority: core
Source: guide line 539

### Q04-019
Question: Why did scientific and literary societies become political entities?
A. Disi water shortage
B. Arab Union federalism
C. Ottoman Turkification policies
D. The 1948 truce
Answer: C
Explanation: Ottoman Turkification policies. Source context: Scientific/literary societies: promoted Arab heritage and contributions, later became political entities due to Ottoman Turkification.
Priority: core
Source: guide line 540

### Q04-020
Question: Where did Sharif Hussein stay until his health deteriorated?
A. Libya
B. Cyprus
C. Iraq
D. Egypt
Answer: B
Explanation: Cyprus. Source context: Sharif Hussein remained in Cyprus until deteriorating health; transferred to Amman for treatment in late November 1930.
Priority: core
Source: guide line 546

### Q04-021
Question: When was Sharif Hussein transferred to Amman for treatment?
A. Late November 1930
B. June 1931
C. December 1925
D. March 1921
Answer: A
Explanation: Late November 1930. Source context: Sharif Hussein remained in Cyprus until deteriorating health; transferred to Amman for treatment in late November 1930.
Priority: core
Source: guide line 546

### Q04-022
Question: When did Sharif Hussein die?
A. June 5, 1925
B. May 25, 1946
C. June 4, 1931
D. December 17, 1925
Answer: C
Explanation: June 4, 1931. Source context: Died June 4, 1931; buried in Jerusalem in Dar Al-Afifi area, within a corridor of Al-Haram Al-Sharif (Noble Sanctuary).
Priority: core
Source: guide line 547

### Q04-023
Question: Where was Sharif Hussein buried?
A. Jerusalem, Dar Al-Afifi at Al-Haram Al-Sharif
B. Mecca, Hejaz
C. Amman, Royal Court
D. Baghdad, Iraq
Answer: A
Explanation: Jerusalem, Dar Al-Afifi at Al-Haram Al-Sharif. Source context: Died June 4, 1931; buried in Jerusalem in Dar Al-Afifi area, within a corridor of Al-Haram Al-Sharif (Noble Sanctuary).
Priority: core
Source: guide line 547

### Q04-024
Question: When did King Ali abdicate in Hejaz?
A. June 5, 1925
B. June 4, 1931
C. March 2, 1921
D. December 17, 1925
Answer: D
Explanation: December 17, 1925. Source context: His son King Ali abdicated December 17, 1925, after a 15-month reign in Hejaz. Took refuge with brother King Faisal I in Iraq. Hashemite rule in Hejaz ended and Hejaz came fully under Ibn Saud.
Priority: core
Source: guide line 548

### Q04-025
Question: How long did King Ali reign in Hejaz?
A. 6 months
B. 10 years
C. 25 years
D. 15 months
Answer: D
Explanation: 15 months.
Priority: core
Source: Historical background (pp. 53–54, 63–64)

### Q04-026
Question: Where did King Ali seek refuge?
A. With Churchill in Britain
B. With Ibn Saud in Najd
C. With King Faisal I in Iraq
D. With France in Syria
Answer: C
Explanation: With King Faisal I in Iraq. Source context: His son King Ali abdicated December 17, 1925, after a 15-month reign in Hejaz. Took refuge with brother King Faisal I in Iraq. Hashemite rule in Hejaz ended and Hejaz came fully under Ibn Saud.
Priority: core
Source: guide line 548

### Q04-027
Question: Who gained full control of Hejaz after Hashemite rule ended?
A. Prince Abdullah
B. Herbert Samuel
C. King Faisal
D. Ibn Saud
Answer: D
Explanation: Ibn Saud. Source context: His son King Ali abdicated December 17, 1925, after a 15-month reign in Hejaz. Took refuge with brother King Faisal I in Iraq. Hashemite rule in Hejaz ended and Hejaz came fully under Ibn Saud.
Priority: core
Source: guide line 548

### Q04-028
Question: Who formed an Arab government in Syria in 1918?
A. Sultan Selim
B. King Ali
C. Prince Faisal
D. Prince Abdullah
Answer: C
Explanation: Prince Faisal. Source context: After liberation of Hejaz, Prince Faisal's northern army entered Syria in 1918; he formed an Arab government.
Priority: core
Source: guide line 552

### Q04-029
Question: Who administered Palestine in the three-zone division?
A. France
B. Britain
C. Faisal
D. Italy
Answer: B
Explanation: Britain.
Priority: core
Source: Historical background (pp. 53–54, 63–64)

### Q04-030
Question: Who administered Syrian and Lebanese coast?
A. Britain
B. France
C. Faisal
D. Ottoman Empire
Answer: B
Explanation: France.
Priority: core
Source: Historical background (pp. 53–54, 63–64)

### Q04-031
Question: Who administered inner Syria from Aqaba to Aleppo?
A. Britain
B. Prince Faisal
C. Ibn Saud
D. France
Answer: B
Explanation: Prince Faisal. Source context: After liberation of Hejaz, Prince Faisal's northern army entered Syria in 1918; he formed an Arab government.
Priority: core
Source: guide line 552

### Q04-032
Question: How many districts did Faisal divide his area into?
A. 8
B. 3
C. 21
D. 16
Answer: A
Explanation: 8.
Priority: core
Source: Historical background (pp. 53–54, 63–64)

### Q04-033
Question: Which three districts formed Eastern Jordan under Faisal?
A. Karak, Balqa and Hauran
B. Amman, Mafraq and Zizia
C. Aqaba, Ma'an and Jerash
D. Salt, Ajloun and Karak
Answer: A
Explanation: Karak, Balqa and Hauran. Source context: Faisal divided his area into eight districts, three forming Eastern Jordan: Karak, Balqa, Hauran.
Priority: core
Source: guide line 557

### Q04-034
Question: Where and when did Syrian General Congress meet?
A. Damascus, March 6, 1920
B. Cairo, March 12, 1921
C. Rome, April 24, 1920
D. Jerusalem, March 28, 1921
Answer: A
Explanation: Damascus, March 6, 1920. Source context: Syrian General Congress in Damascus on March 6, 1920; announced decisions two days later (March 8): recognize Syrian independence in natural borders, Faisal as king with civil parliamentary monarchy; recognize Iraq's independence; reject Balfour Declaration.
Priority: core
Source: guide line 558

### Q04-035
Question: What did the Syrian Congress announce on March 8, 1920?
A. French monarchy in Iraq
B. Independent Syria under Faisal, Iraq independence, rejection of Balfour
C. British rule of Syria and support for Balfour
D. Annexation of Hejaz by France
Answer: B
Explanation: Independent Syria under Faisal, Iraq independence, rejection of Balfour.
Priority: core
Source: Historical background (pp. 53–54, 63–64)

### Q04-036
Question: When was San Remo Conference held?
A. July 24, 1920
B. April 24, 1920
C. April 11, 1921
D. March 6, 1920
Answer: B
Explanation: April 24, 1920. Source context: San Remo Conference — April 24, 1920 (Italy): Iraq, Eastern Jordan and Palestine under British mandate with obligation to implement Balfour Declaration; Syria and Lebanon under French mandate.
Priority: core
Source: guide line 559

### Q04-037
Question: Which territories were assigned to Britain at San Remo?
A. Syria and Lebanon
B. Morocco and Sudan
C. Hejaz and Egypt
D. Iraq, Eastern Jordan and Palestine
Answer: D
Explanation: Iraq, Eastern Jordan and Palestine. Source context: San Remo Conference — April 24, 1920 (Italy): Iraq, Eastern Jordan and Palestine under British mandate with obligation to implement Balfour Declaration; Syria and Lebanon under French mandate.
Priority: core
Source: guide line 559

### Q04-038
Question: Which territories were assigned to France at San Remo?
A. Egypt and Sudan
B. Palestine and Hejaz
C. Iraq and Eastern Jordan
D. Syria and Lebanon
Answer: D
Explanation: Syria and Lebanon. Source context: San Remo Conference — April 24, 1920 (Italy): Iraq, Eastern Jordan and Palestine under British mandate with obligation to implement Balfour Declaration; Syria and Lebanon under French mandate.
Priority: core
Source: guide line 559

### Q04-039
Question: When was French ultimatum to Faisal issued?
A. July 14, 1920
B. March 8, 1920
C. April 24, 1920
D. July 24, 1920
Answer: A
Explanation: July 14, 1920. Source context: July 14, 1920: French ultimatum demanded Faisal accept French mandate; Arab government rejected and prepared resistance.
Priority: core
Source: guide line 560

### Q04-040
Question: When was Battle of Maysalun?
A. July 24, 1920
B. October 21, 1920
C. April 24, 1920
D. July 14, 1920
Answer: A
Explanation: July 24, 1920. Source context: July 24, 1920 — Battle of Maysalun: War Minister Yusuf Al-Azma killed; French entered Damascus. Faisal left via Daraa, Haifa, Tyre, Port Said, then toured European destinations listed as Italy, Rome, Switzerland, Germany, Belgium and Britain; returned as King of Iraq.
Priority: core
Source: guide line 561

### Q04-041
Question: Who was war minister killed at Maysalun?
A. Ibrahim Hashem
B. Rashid Tali'a
C. Mazhar Arslan
D. Yusuf Al-Azma
Answer: D
Explanation: Yusuf Al-Azma. Source context: July 24, 1920 — Battle of Maysalun: War Minister Yusuf Al-Azma killed; French entered Damascus. Faisal left via Daraa, Haifa, Tyre, Port Said, then toured European destinations listed as Italy, Rome, Switzerland, Germany, Belgium and Britain; returned as King of Iraq.
Priority: core
Source: guide line 561

### Q04-042
Question: What happened to Faisal after French entry into Damascus?
A. He departed and eventually returned as King of Iraq
B. He became British High Commissioner
C. He remained ruler of Syria
D. He became king of Hejaz
Answer: A
Explanation: He departed and eventually returned as King of Iraq.
Priority: core
Source: Historical background (pp. 53–54, 63–64)

### Q04-043
Question: Why did Britain organize local governments in Eastern Jordan in 1920?
A. End of 1948 war
B. Discovery of oil
C. Establishment of Arab Union
D. Political vacuum after fall of Arab government in Syria
Answer: D
Explanation: Political vacuum after fall of Arab government in Syria. Source context: After Arab government in Syria fell, Eastern Jordan had a political vacuum. Britain appointed officers in Salt, Amman, Irbid, Karak and Jerash, forming local governments under English officers reporting to High Commissioner in Jerusalem.
Priority: core
Source: guide line 565

### Q04-044
Question: To whom did British officers supervising local governments report?
A. Arab League Secretary-General
B. French governor of Damascus
C. High Commissioner in Jerusalem
D. King of Iraq
Answer: C
Explanation: High Commissioner in Jerusalem. Source context: After Arab government in Syria fell, Eastern Jordan had a political vacuum. Britain appointed officers in Salt, Amman, Irbid, Karak and Jerash, forming local governments under English officers reporting to High Commissioner in Jerusalem.
Priority: core
Source: guide line 565

### Q04-045
Question: What were local governments' main objectives?
A. Independence of Syria alone
B. Water desalination
C. Security, tax collection and local gendarmerie
D. Formation of Arab Union
Answer: C
Explanation: Security, tax collection and local gendarmerie.
Priority: core
Source: Historical background (pp. 53–54, 63–64)

### Q04-046
Question: Which was a reason local governments failed?
A. Unified tribal leadership
B. Excess financial resources
C. Strong international recognition
D. Tribal fragmentation, lack of military force and finances
Answer: D
Explanation: Tribal fragmentation, lack of military force and finances.
Priority: core
Source: Historical background (pp. 53–54, 63–64)

### Q04-047
Question: Who headed Dair Yousuf government?
A. Rafeefan Al-Majali
B. Mazhar Arslan
C. Kulaib Al-Shreida
D. Ali Khulqi Al-Sharayri
Answer: C
Explanation: Kulaib Al-Shreida. Source context: 1. Tribal and clan spirit: Tribal leaders refused to join, causing splintering; examples: Dair Yousuf government led by Sheikh Kulaib Al-Shreida; Ajloun government led by Sheikh Rashid Al-Khazei Al-Freihat; Jerash government formed by Jerash/Mi'raad leaders, Muhammad Al-Moghrabi director; Wasatiya district led by Najib Al-Azzam; Ramtha by Nasser Fawaz Al-Zu'bi.
Priority: core
Source: guide line 577

### Q04-048
Question: Who headed the splinter Ajloun government?
A. Nasser Fawaz Al-Zu'bi
B. Najib Al-Azzam
C. Muhammad Al-Moghrabi
D. Rashid Al-Khazei Al-Freihat
Answer: D
Explanation: Rashid Al-Khazei Al-Freihat. Source context: 1. Tribal and clan spirit: Tribal leaders refused to join, causing splintering; examples: Dair Yousuf government led by Sheikh Kulaib Al-Shreida; Ajloun government led by Sheikh Rashid Al-Khazei Al-Freihat; Jerash government formed by Jerash/Mi'raad leaders, Muhammad Al-Moghrabi director; Wasatiya district led by Najib Al-Azzam; Ramtha by Nasser Fawaz Al-Zu'bi.
Priority: core
Source: guide line 577

### Q04-049
Question: Who directed Jerash government formed by Jerash and Mi'raad leaders?
A. Najib Al-Azzam
B. Kulaib Al-Shreida
C. Muhammad Al-Moghrabi
D. Mazhar Arslan
Answer: C
Explanation: Muhammad Al-Moghrabi. Source context: 1. Tribal and clan spirit: Tribal leaders refused to join, causing splintering; examples: Dair Yousuf government led by Sheikh Kulaib Al-Shreida; Ajloun government led by Sheikh Rashid Al-Khazei Al-Freihat; Jerash government formed by Jerash/Mi'raad leaders, Muhammad Al-Moghrabi director; Wasatiya district led by Najib Al-Azzam; Ramtha by Nasser Fawaz Al-Zu'bi.
Priority: core
Source: guide line 577

### Q04-050
Question: Who led Wasatiya district?
A. Nasser Fawaz Al-Zu'bi
B. Muhammad Al-Moghrabi
C. Rashid Tali'a
D. Najib Al-Azzam
Answer: D
Explanation: Najib Al-Azzam. Source context: 1. Tribal and clan spirit: Tribal leaders refused to join, causing splintering; examples: Dair Yousuf government led by Sheikh Kulaib Al-Shreida; Ajloun government led by Sheikh Rashid Al-Khazei Al-Freihat; Jerash government formed by Jerash/Mi'raad leaders, Muhammad Al-Moghrabi director; Wasatiya district led by Najib Al-Azzam; Ramtha by Nasser Fawaz Al-Zu'bi.
Priority: core
Source: guide line 577

### Q04-051
Question: Who led Ramtha district?
A. Najib Al-Azzam
B. Mazhar Arslan
C. Nasser Fawaz Al-Zu'bi
D. Kulaib Al-Shreida
Answer: C
Explanation: Nasser Fawaz Al-Zu'bi. Source context: 1. Tribal and clan spirit: Tribal leaders refused to join, causing splintering; examples: Dair Yousuf government led by Sheikh Kulaib Al-Shreida; Ajloun government led by Sheikh Rashid Al-Khazei Al-Freihat; Jerash government formed by Jerash/Mi'raad leaders, Muhammad Al-Moghrabi director; Wasatiya district led by Najib Al-Azzam; Ramtha by Nasser Fawaz Al-Zu'bi.
Priority: core
Source: guide line 577

### Q04-052
Question: Why did local governments receive no outside financial or military aid?
A. Strong army
B. Successful foreign alliances
C. Lack of international recognition
D. Excess tax revenues
Answer: C
Explanation: Lack of international recognition. Source context: 3. Lack of financial resources for employee salaries; no international recognition, therefore no outside military/financial aid.
Priority: core
Source: guide line 579

### Q04-053
Question: What ended local governments automatically?
A. Battle of Ridaniya
B. Arrival of Prince Abdullah in Eastern Jordan
C. 1928 national conference
D. Creation of PLO
Answer: B
Explanation: Arrival of Prince Abdullah in Eastern Jordan. Source context: They dissolved automatically when Prince Abdullah arrived in Eastern Jordan.
Priority: core
Source: guide line 581

### Q04-054
Question: Which areas formed part of Ottoman expansion at its peak?
A. Only central Siberia
B. Only Jordan and Palestine
C. Balkans, Caucasus, Bosphorus, Red Sea and Levant
D. Only Morocco and Spain
Answer: C
Explanation: Balkans, Caucasus, Bosphorus, Red Sea and Levant. Source context: Ottoman Empire established 1299 CE; reached peak by early 16th century. Territories included parts of Austrian Empire, Balkans, Caucasus, Bosphorus, Red Sea and Levant.
Priority: core
Source: guide line 516

### Q04-055
Question: Which cities did Britain place officers in after the Syrian Arab government fell?
A. Aqaba, Ma'an, Disi and Jafr only
B. Zizia, Mafraq and Dabuq only
C. Cairo, Beirut, Damascus and Baghdad
D. Salt, Amman, Irbid, Karak and Jerash
Answer: D
Explanation: Salt, Amman, Irbid, Karak and Jerash. Source context: After Arab government in Syria fell, Eastern Jordan had a political vacuum. Britain appointed officers in Salt, Amman, Irbid, Karak and Jerash, forming local governments under English officers reporting to High Commissioner in Jerusalem.
Priority: core
Source: guide line 565

### Q04-056
Question: Which phase of Ottoman rule is described by: Neglect of Arab territories, heavy taxes, conscription and erasure of Arab identity.?
A. Stagnation (16th–19th centuries)
B. Mandate phase
C. Awakening and awareness
D. Independence phase
Answer: A
Explanation: Stagnation (16th–19th centuries) | Neglect of Arab territories, heavy taxes, conscription and erasure of Arab identity.
Priority: core
Source: guide line 531

### Q04-057
Question: Which phase of Ottoman rule is described by: Five factors below.?
A. Stagnation (16th–19th centuries)
B. Independence phase
C. Mandate phase
D. Awakening and awareness
Answer: D
Explanation: Awakening and awareness | Five factors below.
Priority: core
Source: guide line 532

### Q04-058
Question: Who led the Ajloun local government and where was its center?
A. Mazhar Arslan; Salt
B. Ali Khulqi Al-Sharayri; Irbid
C. Rafeefan Al-Majali; Karak
D. Rashid Tali’a; Amman
Answer: B
Explanation: Ajloun | Ali Khulqi Al-Sharayri; Irbid
Priority: core
Source: guide line 569

### Q04-059
Question: Who led the Balqa local government and where was its center?
A. Rashid Tali’a; Amman
B. Rafeefan Al-Majali; Karak
C. Mazhar Arslan; Salt
D. Ali Khulqi Al-Sharayri; Irbid
Answer: C
Explanation: Balqa | Mazhar Arslan; Salt
Priority: core
Source: guide line 570

### Q04-060
Question: Who led the Moab local government and where was its center?
A. Rashid Tali’a; Amman
B. Ali Khulqi Al-Sharayri; Irbid
C. Mazhar Arslan; Salt
D. Rafeefan Al-Majali; Karak
Answer: D
Explanation: Moab | Rafeefan Al-Majali; Karak
Priority: core
Source: guide line 571

### Q04-061
Question: When was the Battle of Marj Dabiq?
A. 1299
B. 1516
C. 1918
D. 1798
Answer: B
Explanation: 1516. Source context: 1516 — Battle of Marj Dabiq, north of Aleppo: Sultan Selim I defeated Mamluks and extended control over Jordan and Palestine. Egypt followed after Battle of Ridaniya.
Priority: core
Source: guide line 517

## Chapter 5 — Establishment of the Emirate (pp. 65–67) (54 questions)

### Q05-001
Question: Why did nationalist leaders ask Sharif Hussein to send a son to Eastern Jordan?
A. To continue struggle against French rule and reclaim Syria
B. To establish Red–Dead project
C. To form a British military government
D. To annex Iraq to France
Answer: A
Explanation: To continue struggle against French rule and reclaim Syria. Source context: After French occupation of Syria/Maysalun, Arab nationalist leaders and liberation advocates who fled to Eastern Jordan sought to continue struggle against French colonial rule. They appealed to Sharif Hussein to send a son to lead the movement to reclaim Syria. He chose Prince Abdullah.
Priority: core
Source: guide line 587

### Q05-002
Question: Whom did Sharif Hussein select?
A. Prince Faisal
B. King Ali
C. Ibn Saud
D. Prince Abdullah
Answer: D
Explanation: Prince Abdullah. Source context: After French occupation of Syria/Maysalun, Arab nationalist leaders and liberation advocates who fled to Eastern Jordan sought to continue struggle against French colonial rule. They appealed to Sharif Hussein to send a son to lead the movement to reclaim Syria. He chose Prince Abdullah.
Priority: core
Source: guide line 587

### Q05-003
Question: From where did Abdullah travel to Ma'an?
A. Mecca
B. Damascus
C. Cairo
D. Baghdad
Answer: A
Explanation: Mecca.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-004
Question: What did local dignitaries in Ma'an invite Abdullah to do?
A. Travel to Amman
B. Return permanently to Mecca
C. Become governor of Damascus
D. Join French army
Answer: A
Explanation: Travel to Amman.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-005
Question: Who chaired Cairo Conference in 1921?
A. Herbert Samuel
B. Winston Churchill
C. Lord Plumer
D. Anthony Eden
Answer: B
Explanation: Winston Churchill.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-006
Question: What did Cairo Conference decide about Faisal and Abdullah?
A. Faisal to rule Jordan; Abdullah to rule Iraq
B. Faisal to rule Iraq; Abdullah to head Eastern Jordan government
C. Both to rule Hejaz
D. Both to rule Syria
Answer: B
Explanation: Faisal to rule Iraq; Abdullah to head Eastern Jordan government.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-007
Question: What kind of government did Jerusalem Conference agree to establish?
A. Republic headed by Herbert Samuel
B. National government headed by Abdullah
C. French government headed by Faisal
D. British government headed by Churchill
Answer: B
Explanation: National government headed by Abdullah. Source context: 1. Establish national government in Eastern Jordan headed by Abdullah.
Priority: core
Source: guide line 603

### Q05-008
Question: What assistance did Britain agree to provide at Jerusalem Conference?
A. No assistance
B. Only cultural assistance
C. Financial and military assistance
D. Only water infrastructure
Answer: C
Explanation: Financial and military assistance. Source context: 2. Britain provides financial and military assistance.
Priority: core
Source: guide line 604

### Q05-009
Question: What military commitment was made at Jerusalem Conference?
A. Cease operations from Eastern Jordan against Syria and Palestine
B. Invade Syria immediately
C. Fight Britain
D. Establish an Iraqi army
Answer: A
Explanation: Cease operations from Eastern Jordan against Syria and Palestine. Source context: 3. Government ceases military operations launched from Eastern Jordan against Syria and Palestine.
Priority: core
Source: guide line 605

### Q05-010
Question: What advisory arrangement was agreed in Jerusalem?
A. A French military governor
B. A British representative as adviser to government
C. A Syrian king as adviser
D. An Arab League Secretary-General
Answer: B
Explanation: A British representative as adviser to government.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-011
Question: Which airports were agreed upon at Jerusalem Conference?
A. Amman and Zizia
B. Aqaba and Ma'an
C. Salt and Irbid
D. Amman and Mafraq
Answer: A
Explanation: Amman and Zizia. Source context: 5. Britain establishes airports in Amman and Zizia.
Priority: core
Source: guide line 607

### Q05-012
Question: How long was the Jerusalem Conference agreement?
A. 25 years
B. 10 years
C. 15 months
D. Six months, renewable
Answer: D
Explanation: Six months, renewable. Source context: 6. Agreement lasts six months, renewable.
Priority: core
Source: guide line 608

### Q05-013
Question: Who was first Prime Minister of Eastern Jordan?
A. Suleiman Nabulsi
B. Fawzi Al-Mulqi
C. Rashid Tali'a
D. Ibrahim Hashem
Answer: C
Explanation: Rashid Tali'a.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-014
Question: What was the first government called?
A. Arab Union
B. House of Representatives
C. Audit Bureau
D. Advisory Council
Answer: D
Explanation: Advisory Council.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-015
Question: Which three districts comprised the new emirate?
A. Amman, Zizia and Mafraq
B. Salt, Ajloun and Karak
C. Karak, Balqa and Hauran
D. Ma'an, Aqaba and Jerash
Answer: B
Explanation: Salt, Ajloun and Karak.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-016
Question: Which Mandate Charter article was amended to exclude Eastern Jordan from Balfour Declaration?
A. 25
B. 125
C. 15
D. 124
Answer: A
Explanation: 25.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-017
Question: Which areas were annexed by Abdullah's decree in 1925?
A. Ma'an and Aqaba
B. Irbid and Salt
C. Jerash and Karak
D. Balqa and Hauran
Answer: A
Explanation: Ma'an and Aqaba.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-018
Question: Who relinquished Ma'an and Aqaba in Jeddah Treaty?
A. Lord Plumer
B. King Faisal I
C. King Hussein bin Talal
D. King Ali bin Al-Hussein
Answer: D
Explanation: King Ali bin Al-Hussein.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-019
Question: What was Abdullah originally expected to rule?
A. Iraq
B. Syria
C. Egypt
D. Palestine
Answer: A
Explanation: Iraq. Source context: Abdullah explained that he originally expected to be king of Iraq while Faisal would be king of Syria; after France expelled Faisal, Faisal became king of Iraq. British authorities prevented Abdullah's recruitment of men to fight France and restore his brother's throne; Herbert Samuel complained to Colonial Office. Abdullah accepted the British condition not to disturb the French or leave Eastern Jordan forever, to gain time for his aims. He also faced absence of Syrian conference members in Amman and conditional/unreliable financial support from officers and tribal leaders, depending on occasional money from his father for expenses.
Priority: core
Source: guide line 610

### Q05-020
Question: What was Faisal originally expected to rule?
A. Syria
B. Jordan
C. Iraq
D. Egypt
Answer: A
Explanation: Syria. Source context: Abdullah explained that he originally expected to be king of Iraq while Faisal would be king of Syria; after France expelled Faisal, Faisal became king of Iraq. British authorities prevented Abdullah's recruitment of men to fight France and restore his brother's throne; Herbert Samuel complained to Colonial Office. Abdullah accepted the British condition not to disturb the French or leave Eastern Jordan forever, to gain time for his aims. He also faced absence of Syrian conference members in Amman and conditional/unreliable financial support from officers and tribal leaders, depending on occasional money from his father for expenses.
Priority: core
Source: guide line 610

### Q05-021
Question: Who complained to Colonial Office about Abdullah's recruitment efforts?
A. Gamal Abdel Nasser
B. Herbert Samuel
C. Anthony Eden
D. Lord Plumer
Answer: B
Explanation: Herbert Samuel. Source context: Abdullah explained that he originally expected to be king of Iraq while Faisal would be king of Syria; after France expelled Faisal, Faisal became king of Iraq. British authorities prevented Abdullah's recruitment of men to fight France and restore his brother's throne; Herbert Samuel complained to Colonial Office. Abdullah accepted the British condition not to disturb the French or leave Eastern Jordan forever, to gain time for his aims. He also faced absence of Syrian conference members in Amman and conditional/unreliable financial support from officers and tribal leaders, depending on occasional money from his father for expenses.
Priority: core
Source: guide line 610

### Q05-022
Question: Why did Abdullah accept Britain's condition not to disturb France?
A. To establish a republic
B. To become French governor
C. To permanently renounce all aims
D. To gain time for his aims
Answer: D
Explanation: To gain time for his aims. Source context: Abdullah explained that he originally expected to be king of Iraq while Faisal would be king of Syria; after France expelled Faisal, Faisal became king of Iraq. British authorities prevented Abdullah's recruitment of men to fight France and restore his brother's throne; Herbert Samuel complained to Colonial Office. Abdullah accepted the British condition not to disturb the French or leave Eastern Jordan forever, to gain time for his aims. He also faced absence of Syrian conference members in Amman and conditional/unreliable financial support from officers and tribal leaders, depending on occasional money from his father for expenses.
Priority: core
Source: guide line 610

### Q05-023
Question: What financial challenge did Abdullah face in Amman?
A. Unreliable local support and dependence on occasional money from father
B. Excess government revenue
C. Guaranteed Syrian financing
D. Unlimited British donations
Answer: A
Explanation: Unreliable local support and dependence on occasional money from father. Source context: Abdullah explained that he originally expected to be king of Iraq while Faisal would be king of Syria; after France expelled Faisal, Faisal became king of Iraq. British authorities prevented Abdullah's recruitment of men to fight France and restore his brother's throne; Herbert Samuel complained to Colonial Office. Abdullah accepted the British condition not to disturb the French or leave Eastern Jordan forever, to gain time for his aims. He also faced absence of Syrian conference members in Amman and conditional/unreliable financial support from officers and tribal leaders, depending on occasional money from his father for expenses.
Priority: core
Source: guide line 610

### Q05-024
Question: What were the early emirate's state-building goals in 1921–1928?
A. Create Arab Union
B. End parliamentary representation permanently
C. Centralize government, build army and mobilize people and tribes
D. Dissolve government and army
Answer: C
Explanation: Centralize government, build army and mobilize people and tribes. Source context: 1921–1928: Consolidate state foundations, centralize government, build army, mobilize people/tribes to accept emirate.
Priority: core
Source: guide line 614

### Q05-025
Question: Why did some tribal leaders rebel?
A. Abundance of government jobs
B. Support for all new rulers
C. Loss of Ottoman-era privileges
D. Increase in their privileges
Answer: C
Explanation: Loss of Ottoman-era privileges. Source context: Reasons for uprisings: tribal leaders lost Ottoman-era privileges; new rulers (former Ottoman officials) did not distinguish old/new eras; poverty and ignorance; educated young Jordanians allied with some tribal leaders to seek government jobs instead of Arab employees from neighboring countries.
Priority: core
Source: guide line 627

### Q05-026
Question: What other factors contributed to early uprisings?
A. No political changes
B. Complete foreign recognition
C. Universal prosperity
D. Poverty, ignorance and competition for government jobs
Answer: D
Explanation: Poverty, ignorance and competition for government jobs. Source context: Reasons for uprisings: tribal leaders lost Ottoman-era privileges; new rulers (former Ottoman officials) did not distinguish old/new eras; poverty and ignorance; educated young Jordanians allied with some tribal leaders to seek government jobs instead of Arab employees from neighboring countries.
Priority: core
Source: guide line 627

### Q05-027
Question: Which absence complicated Abdullah's position in Amman?
A. Absence of Syrian conference members
B. Absence of all British officials
C. Absence of local dignitaries
D. Absence of his father from Hejaz only
Answer: A
Explanation: Absence of Syrian conference members. Source context: Abdullah explained that he originally expected to be king of Iraq while Faisal would be king of Syria; after France expelled Faisal, Faisal became king of Iraq. British authorities prevented Abdullah's recruitment of men to fight France and restore his brother's throne; Herbert Samuel complained to Colonial Office. Abdullah accepted the British condition not to disturb the French or leave Eastern Jordan forever, to gain time for his aims. He also faced absence of Syrian conference members in Amman and conditional/unreliable financial support from officers and tribal leaders, depending on occasional money from his father for expenses.
Priority: core
Source: guide line 610

### Q05-028
Question: What distinguished the 1923 recognition from 1946 independence?
A. 1946 preceded 1923
B. Both were identical treaties
C. 1923 proclaimed republic; 1946 restored mandate
D. 1923 recognized emirate independence; 1946 proclaimed fully independent kingdom
Answer: D
Explanation: 1923 recognized emirate independence; 1946 proclaimed fully independent kingdom.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-029
Question: When did this event occur: Abdullah arrived in Ma'an (then part of Hejaz) from Mecca. Local dignitaries invited him to Amman.?
A. May 25, 1923
B. July 24, 1922
C. October 21, 1920
D. June 24, 1925
Answer: C
Explanation: October 21, 1920 | Abdullah arrived in Ma'an (then part of Hejaz) from Mecca. Local dignitaries invited him to Amman.
Priority: core
Source: guide line 591

### Q05-030
Question: When did this event occur: Arrived in Amman; laid foundations for emirate under British recognition/influence.?
A. July 24, 1922
B. March 12–23, 1921
C. May 25, 1923
D. March 2, 1921
Answer: D
Explanation: March 2, 1921 | Arrived in Amman; laid foundations for emirate under British recognition/influence.
Priority: core
Source: guide line 592

### Q05-031
Question: When did this event occur: Cairo Conference, chaired by British Colonial Secretary Winston Churchill; decided Faisal would rule Iraq and Abdullah would head Eastern Jordan government.?
A. October 21, 1920
B. July 24, 1922
C. March 12–23, 1921
D. June 5, 1925
Answer: C
Explanation: March 12–23, 1921 | Cairo Conference, chaired by British Colonial Secretary Winston Churchill; decided Faisal would rule Iraq and Abdullah would head Eastern Jordan government.
Priority: core
Source: guide line 593

### Q05-032
Question: When did this event occur: Jerusalem Conference: Abdullah invited by Churchill; attended negotiations for two consecutive days.?
A. March 12–23, 1921
B. June 5, 1925
C. July 24, 1922
D. March 28–30, 1921
Answer: D
Explanation: March 28–30, 1921 | Jerusalem Conference: Abdullah invited by Churchill; attended negotiations for two consecutive days.
Priority: core
Source: guide line 594

### Q05-033
Question: When did this event occur: Emirate announced; first government named Advisory Council, Rashid Tali'a first Prime Minister. Districts Salt, Ajloun and Karak.?
A. May 25, 1923
B. March 28–30, 1921
C. April 11, 1921
D. October 21, 1920
Answer: C
Explanation: April 11, 1921 | Emirate announced; first government named Advisory Council, Rashid Tali'a first Prime Minister. Districts Salt, Ajloun and Karak.
Priority: core
Source: guide line 595

### Q05-034
Question: When did this event occur: Britain asked League of Nations to amend Article 25 of Mandate Charter to exclude Eastern Jordan from Balfour Declaration (Palestinian territories west of Yarmouk/Jordan River, middle of Dead Sea, Wadi Araba and west of Gulf of Aqaba).?
A. May 25, 1923
B. June 5, 1925
C. July 24, 1922
D. March 2, 1921
Answer: C
Explanation: July 24, 1922 | Britain asked League of Nations to amend Article 25 of Mandate Charter to exclude Eastern Jordan from Balfour Declaration (Palestinian territories west of Yarmouk/Jordan River, middle of Dead Sea, Wadi Araba and west of Gulf of Aqaba).
Priority: core
Source: guide line 596

### Q05-035
Question: When did this event occur: Britain officially recognized independence of Emirate of Eastern Jordan. Distinguish from kingdom's full independence in 1946.?
A. June 5, 1925
B. July 24, 1922
C. March 2, 1921
D. May 25, 1923
Answer: D
Explanation: May 25, 1923 | Britain officially recognized independence of Emirate of Eastern Jordan. Distinguish from kingdom's full independence in 1946.
Priority: core
Source: guide line 597

### Q05-036
Question: When did this event occur: Jeddah Treaty: King Ali bin Al-Hussein relinquished Ma'an and Aqaba.?
A. July 24, 1922
B. June 5, 1925
C. March 2, 1921
D. May 25, 1923
Answer: B
Explanation: June 5, 1925 | Jeddah Treaty: King Ali bin Al-Hussein relinquished Ma'an and Aqaba.
Priority: core
Source: guide line 598

### Q05-037
Question: When did this event occur: Abdullah issued decree annexing Ma'an and Aqaba.?
A. June 5, 1925
B. March 12–23, 1921
C. June 24, 1925
D. March 28–30, 1921
Answer: C
Explanation: June 24, 1925 | Abdullah issued decree annexing Ma'an and Aqaba.
Priority: core
Source: guide line 599

### Q05-038
Question: Which detail matches the early emirate challenge: Koura uprising?
A. Najd raids on southern Jordan and Balqa, 1922–1924
B. Difficulty dealing with refugees after France entered Syria
C. 1921, Sheikh Kulaib Al-Shreida
D. Imposed on Jordanian government
Answer: C
Explanation: Koura uprising | 1921, Sheikh Kulaib Al-Shreida
Priority: core
Source: guide line 620

### Q05-039
Question: Which detail matches the early emirate challenge: Adwan uprising?
A. 1921, Sheikh Kulaib Al-Shreida
B. 1926
C. Difficulty dealing with refugees after France entered Syria
D. 1923, Sheikh Sultan Al-Adwan
Answer: D
Explanation: Adwan uprising | 1923, Sheikh Sultan Al-Adwan
Priority: core
Source: guide line 621

### Q05-040
Question: Which detail matches the early emirate challenge: Wadi Musa uprising?
A. 1926
B. Imposed on Jordanian government
C. Difficulty dealing with refugees after France entered Syria
D. 1923, Sheikh Sultan Al-Adwan
Answer: A
Explanation: Wadi Musa uprising | 1926
Priority: core
Source: guide line 622

### Q05-041
Question: Which detail matches the early emirate challenge: Syrian groups?
A. Difficulty dealing with refugees after France entered Syria
B. 1926
C. Najd raids on southern Jordan and Balqa, 1922–1924
D. 1921, Sheikh Kulaib Al-Shreida
Answer: A
Explanation: Syrian groups | Difficulty dealing with refugees after France entered Syria
Priority: core
Source: guide line 623

### Q05-042
Question: Which detail matches the early emirate challenge: Wahhabi raids?
A. 1926
B. Najd raids on southern Jordan and Balqa, 1922–1924
C. Difficulty dealing with refugees after France entered Syria
D. 1923, Sheikh Sultan Al-Adwan
Answer: B
Explanation: Wahhabi raids | Najd raids on southern Jordan and Balqa, 1922–1924
Priority: core
Source: guide line 624

### Q05-043
Question: Which detail matches the early emirate challenge: British financial oversight?
A. Najd raids on southern Jordan and Balqa, 1922–1924
B. 1926
C. Imposed on Jordanian government
D. Difficulty dealing with refugees after France entered Syria
Answer: C
Explanation: British financial oversight | Imposed on Jordanian government
Priority: core
Source: guide line 625

### Q05-044
Question: When did Prince Abdullah arrive in Ma'an?
A. March 2, 1921
B. April 11, 1921
C. October 21, 1920
D. May 25, 1923
Answer: C
Explanation: October 21, 1920.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-045
Question: When did Prince Abdullah arrive in Amman?
A. March 2, 1921
B. October 21, 1920
C. March 28, 1921
D. April 11, 1921
Answer: A
Explanation: March 2, 1921.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-046
Question: When did Cairo Conference take place?
A. March 28–30, 1921
B. March 2–11, 1921
C. April 11–23, 1921
D. March 12–23, 1921
Answer: D
Explanation: March 12–23, 1921.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-047
Question: When did Jerusalem Conference take place?
A. March 28–30, 1921
B. May 25–27, 1923
C. April 11–13, 1921
D. March 12–23, 1921
Answer: A
Explanation: March 28–30, 1921.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-048
Question: When was the emirate officially announced?
A. May 25, 1923
B. April 11, 1921
C. March 2, 1921
D. June 24, 1925
Answer: B
Explanation: April 11, 1921.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-049
Question: When did Britain officially recognize emirate independence?
A. May 25, 1946
B. May 25, 1923
C. April 11, 1921
D. June 24, 1925
Answer: B
Explanation: May 25, 1923.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-050
Question: When was the Koura uprising?
A. 1926
B. 1928
C. 1923
D. 1921
Answer: D
Explanation: 1921.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-051
Question: When was the Adwan uprising?
A. 1928
B. 1926
C. 1921
D. 1923
Answer: D
Explanation: 1923.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-052
Question: Who led the Adwan uprising?
A. Mazhar Arslan
B. Rashid Tali'a
C. Sheikh Sultan Al-Adwan
D. Sheikh Kulaib Al-Shreida
Answer: C
Explanation: Sheikh Sultan Al-Adwan.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-053
Question: When was the Wadi Musa uprising?
A. 1921
B. 1923
C. 1926
D. 1928
Answer: C
Explanation: 1926.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

### Q05-054
Question: When did Wahhabi raids from Najd occur?
A. 1918–1920
B. 1946–1948
C. 1925–1928
D. 1922–1924
Answer: D
Explanation: 1922–1924.
Priority: core
Source: Establishment of the Emirate (pp. 65–67)

## Chapter 6 — Anglo-Jordanian treaties and independence (pp. 68–70) (50 questions)

### Q06-001
Question: Why did Abdullah seek the 1928 treaty?
A. End Jordanian independence
B. Free Eastern Jordan from Mandate Charter
C. Join French Syria
D. Create Arab Union
Answer: B
Explanation: Free Eastern Jordan from Mandate Charter. Source context: Abdullah sought to free Eastern Jordan from Mandate Charter, especially after Zionist refusal to exclude it from Balfour Declaration.
Priority: core
Source: guide line 635

### Q06-002
Question: Where was the 1928 treaty signed?
A. Jerusalem
B. Amman
C. London
D. Cairo
Answer: A
Explanation: Jerusalem. Source context: February 20, 1928, signed in Jerusalem by Lord Plumer (British High Commissioner in Palestine) and Hassan Khalid Abu Al-Huda (Jordanian Executive Council Chairman).
Priority: core
Source: guide line 637

### Q06-003
Question: Who signed 1928 treaty for Britain?
A. Lord Plumer
B. Winston Churchill
C. Herbert Samuel
D. Anthony Eden
Answer: A
Explanation: Lord Plumer. Source context: February 20, 1928, signed in Jerusalem by Lord Plumer (British High Commissioner in Palestine) and Hassan Khalid Abu Al-Huda (Jordanian Executive Council Chairman).
Priority: core
Source: guide line 637

### Q06-004
Question: Who signed 1928 treaty for Jordan?
A. Ibrahim Hashem
B. Rashid Tali'a
C. Fawzi Al-Mulqi
D. Hassan Khalid Abu Al-Huda
Answer: D
Explanation: Hassan Khalid Abu Al-Huda. Source context: February 20, 1928, signed in Jerusalem by Lord Plumer (British High Commissioner in Palestine) and Hassan Khalid Abu Al-Huda (Jordanian Executive Council Chairman).
Priority: core
Source: guide line 637

### Q06-005
Question: How many articles were in 1928 treaty?
A. 21
B. 25
C. 41
D. 16
Answer: A
Explanation: 21.
Priority: core
Source: Anglo-Jordanian treaties and independence (pp. 68–70)

### Q06-006
Question: What law did the 1928 treaty provide for?
A. Defense Law 1992
B. Political Parties Law
C. Anti-Communism Law
D. Basic Law
Answer: D
Explanation: Basic Law. Source context: April 16, 1928: Basic Law issued, requiring legislative council.
Priority: core
Source: guide line 659

### Q06-007
Question: To whom did mandate government relinquish executive and legislative powers?
A. British High Commissioner
B. King Faisal
C. Prince Abdullah
D. French government
Answer: C
Explanation: Prince Abdullah. Source context: 2. Mandate government relinquishes executive/legislative powers to Prince Abdullah.
Priority: core
Source: guide line 643

### Q06-008
Question: What remained under British oversight in 1928 treaty?
A. Laws, regulations, budget and expenditures
B. Only agricultural exports
C. Nothing
D. Only cultural events
Answer: A
Explanation: Laws, regulations, budget and expenditures. Source context: 3. Laws, regulations, budget and expenditures under British oversight.
Priority: core
Source: guide line 644

### Q06-009
Question: What military right did Britain retain under 1928 treaty?
A. Establishing Arab Union
B. Keeping military forces in Jordan
C. No military presence
D. Controlling Egypt only
Answer: B
Explanation: Keeping military forces in Jordan. Source context: 4. Britain retains right to keep military forces in Jordan.
Priority: core
Source: guide line 645

### Q06-010
Question: What fraction of Border Force expenses was Jordanian treasury to pay?
A. One-half
B. One-sixth
C. All expenses
D. One-third
Answer: B
Explanation: One-sixth. Source context: 6. Jordanian treasury pays British Residency costs and one-sixth of Border Force expenses.
Priority: core
Source: guide line 647

### Q06-011
Question: What else did Jordanian treasury cover under 1928 treaty?
A. Disi project costs
B. Arab League headquarters
C. French occupation costs
D. British Residency costs
Answer: D
Explanation: British Residency costs. Source context: 6. Jordanian treasury pays British Residency costs and one-sixth of Border Force expenses.
Priority: core
Source: guide line 647

### Q06-012
Question: What did Britain supervise under 1928 treaty besides legislation?
A. Only school curricula
B. Privileges and exploitation of natural resources
C. Only religious practices
D. Only national celebrations
Answer: B
Explanation: Privileges and exploitation of natural resources.
Priority: core
Source: Anglo-Jordanian treaties and independence (pp. 68–70)

### Q06-013
Question: How did Jordanians react to negative aspects of 1928 treaty?
A. Immediate end of British oversight
B. Demonstrations and protests
C. Unanimous approval without objection
D. Formation of United Arab Republic
Answer: B
Explanation: Demonstrations and protests. Source context: Demonstrations and protests to British officials against negative aspects.
Priority: core
Source: guide line 652

### Q06-014
Question: Where was First National Conference in 1928 held?
A. Hamdan Cafe in Amman
B. Aqaba
C. Cairo
D. Jerusalem
Answer: A
Explanation: Hamdan Cafe in Amman. Source context: First National Conference: July 25, 1928, Hamdan Cafe, Amman.
Priority: core
Source: guide line 653

### Q06-015
Question: What did 1928 National Charter demand?
A. Continuation of mandate and Balfour
B. Independence, constitutional government accountable to legislature and rejection of mandate and Balfour
C. Military rule without legislature
D. French rule
Answer: B
Explanation: Independence, constitutional government accountable to legislature and rejection of mandate and Balfour. Source context: National Charter demands: emirate independence; constitutional government headed by Abdullah and accountable to legislature; reject British mandate and Balfour Declaration; refuse Border Force expenses.
Priority: core
Source: guide line 654

### Q06-016
Question: What expense did the 1928 National Charter reject?
A. Border Force expenses
B. Local tax collection
C. Public healthcare
D. Primary education costs
Answer: A
Explanation: Border Force expenses. Source context: National Charter demands: emirate independence; constitutional government headed by Abdullah and accountable to legislature; reject British mandate and Balfour Declaration; refuse Border Force expenses.
Priority: core
Source: guide line 654

### Q06-017
Question: How did Britain respond to 1928 protests?
A. Recognized full kingdom independence
B. Transferred control to France
C. Immediately canceled treaty
D. Insisted treaty stay unchanged and go to legislative council
Answer: D
Explanation: Insisted treaty stay unchanged and go to legislative council. Source context: Britain insisted treaty remain unchanged and be submitted to legislative council for ratification/rejection.
Priority: core
Source: guide line 655

### Q06-018
Question: How many elected members are stated for first legislative council?
A. 21
B. 25
C. 16
D. 9
Answer: C
Explanation: 16. Source context: April 1929: First legislative council: 16 elected members (9 Muslims, 3 Christians, 2 Circassians, as listed), plus book mentions 2 appointed by Abdullah (southern and northern Bedouins), plus 5 ministers. The printed categories are not entirely clear about whether the 2 appointed are included in the 16.
Priority: core
Source: guide line 661

### Q06-019
Question: What communities are listed in first council composition?
A. 9 Muslims, 3 Christians, 2 Circassians
B. 9 Muslims, 2 Christians, 3 Circassians
C. 16 Muslims only
D. 3 Muslims, 9 Christians, 2 Circassians
Answer: A
Explanation: 9 Muslims, 3 Christians, 2 Circassians. Source context: April 1929: First legislative council: 16 elected members (9 Muslims, 3 Christians, 2 Circassians, as listed), plus book mentions 2 appointed by Abdullah (southern and northern Bedouins), plus 5 ministers. The printed categories are not entirely clear about whether the 2 appointed are included in the 16.
Priority: core
Source: guide line 661

### Q06-020
Question: Who were the two appointed council members intended to represent?
A. Amman and Aqaba airports
B. British and French officials
C. Egypt and Syria
D. Southern and northern Bedouins
Answer: D
Explanation: Southern and northern Bedouins. Source context: April 1929: First legislative council: 16 elected members (9 Muslims, 3 Christians, 2 Circassians, as listed), plus book mentions 2 appointed by Abdullah (southern and northern Bedouins), plus 5 ministers. The printed categories are not entirely clear about whether the 2 appointed are included in the 16.
Priority: core
Source: guide line 661

### Q06-021
Question: What was first council's most significant act?
A. Signing 1946 independence treaty
B. Creating PLO
C. Arabizing army
D. Ratifying Jordanian-British treaty
Answer: D
Explanation: Ratifying Jordanian-British treaty. Source context: Most significant act: ratification of Jordanian-British treaty.
Priority: core
Source: guide line 662

### Q06-022
Question: Why did first council reject 1931 budget?
A. Supplement included £6,269 for Desert Force
B. It ended British oversight
C. It provided no education funding
D. It provided too much water funding
Answer: A
Explanation: Supplement included £6,269 for Desert Force. Source context: Rejected 1931 general budget after supplementary budget included 6,269 pounds for newly formed Desert Force.
Priority: core
Source: guide line 663

### Q06-023
Question: What caused Britain to reconsider agreements after WWII?
A. Economic difficulties and debts to Egypt, Iraq and US
B. Discovery of Jordanian oil
C. Creation of Arab Union
D. Disappearance of British interests
Answer: A
Explanation: Economic difficulties and debts to Egypt, Iraq and US. Source context: After World War II, Britain's economic difficulties/debts to Egypt, Iraq and US made it reconsider Middle East agreements without surrendering its ambitions.
Priority: core
Source: guide line 669

### Q06-024
Question: What was the 1946 treaty duration?
A. 21 years
B. 10 years
C. 25 years
D. Six months
Answer: C
Explanation: 25 years. Source context: Duration 25 years.
Priority: core
Source: guide line 672

### Q06-025
Question: What did 1946 treaty abolish?
A. British mandate and 1928 treaty
B. National Charter 1991
C. 1948 treaty
D. Jordanian constitution
Answer: A
Explanation: British mandate and 1928 treaty. Source context: Abolished British mandate and 1928 treaty.
Priority: core
Source: guide line 673

### Q06-026
Question: Who was recognized as king by 1946 treaty?
A. Faisal I
B. Abdullah bin Al-Hussein
C. Hussein bin Talal
D. Talal bin Abdullah
Answer: B
Explanation: Abdullah bin Al-Hussein.
Priority: core
Source: Anglo-Jordanian treaties and independence (pp. 68–70)

### Q06-027
Question: What was established between Jordan and Britain in 1946?
A. Federal union
B. French mandate
C. Diplomatic relations
D. Common parliament
Answer: C
Explanation: Diplomatic relations. Source context: Established diplomatic relations between two countries.
Priority: core
Source: guide line 675

### Q06-028
Question: What was required if either country faced conflict with another country under 1946 treaty?
A. Arab League approval only
B. No communication
C. Automatic dissolution of treaty
D. Consult each other
Answer: D
Explanation: Consult each other. Source context: Consult each other in case of conflict with another country.
Priority: core
Source: guide line 676

### Q06-029
Question: Who was solely responsible for security and defense of Eastern Jordan under 1946 treaty?
A. United Nations
B. Prince Abdullah
C. King Faisal
D. British High Commissioner
Answer: B
Explanation: Prince Abdullah.
Priority: core
Source: Anglo-Jordanian treaties and independence (pp. 68–70)

### Q06-030
Question: What military roles remained for Britain under 1946 treaty?
A. Control of Syria
B. No role whatsoever
C. Only naval control in Egypt
D. Supervision of Jordanian army training and retention of armed force
Answer: D
Explanation: Supervision of Jordanian army training and retention of armed force. Source context: Britain supervises Jordanian army training and retains armed force in Eastern Jordan.
Priority: core
Source: guide line 678

### Q06-031
Question: Which legislative council proclaimed full independence?
A. Arab Union Council
B. Eleventh Parliament
C. First Legislative Council
D. Fifth Legislative Council (1942–47)
Answer: D
Explanation: Fifth Legislative Council (1942–47). Source context: Textbook says four legislative councils formed until 1947, when second constitution replaced legislative council with parliament; following page identifies 1942–47 as fifth council. Preserve both statements as printed.
Priority: core
Source: guide line 665

### Q06-032
Question: What government system was proclaimed on May 25, 1946?
A. Hereditary parliamentary government with constitutional king
B. Federal union
C. Republic
D. Military government
Answer: A
Explanation: Hereditary parliamentary government with constitutional king.
Priority: core
Source: Anglo-Jordanian treaties and independence (pp. 68–70)

### Q06-033
Question: What was central to the 1948 treaty?
A. Jordan–Britain alliance
B. Arab–Israeli armistice
C. French mandate
D. Jordan–Iraq federation
Answer: A
Explanation: Jordan–Britain alliance.
Priority: core
Source: Anglo-Jordanian treaties and independence (pp. 68–70)

### Q06-034
Question: What did Britain promise in 1948 if Jordan fought another country?
A. Immediate assistance
B. Neutrality in all cases
C. Only consultation without assistance
D. Withdrawal of all aid
Answer: A
Explanation: Immediate assistance. Source context: 2. Immediate British assistance if Jordan goes to war with another country.
Priority: core
Source: guide line 691

### Q06-035
Question: What foreign-policy restriction applied to Jordan under 1948 treaty?
A. Mandatory alliance with France
B. No relations with Arab countries ever
C. No stance contrary to Jordan–Britain alliance
D. No diplomatic relations with Britain
Answer: C
Explanation: No stance contrary to Jordan–Britain alliance. Source context: 3. Jordan must not take a stance with foreign countries contrary to alliance.
Priority: core
Source: guide line 692

### Q06-036
Question: What military presence did Britain retain in Jordan under 1948 treaty?
A. No forces
B. Armed forces and two air units
C. Only civilian advisers
D. Only naval vessels
Answer: B
Explanation: Armed forces and two air units.
Priority: core
Source: Anglo-Jordanian treaties and independence (pp. 68–70)

### Q06-037
Question: Where were the two British air units under 1948 treaty?
A. Amman and Mafraq
B. Salt and Karak
C. Amman and Zizia
D. Aqaba and Ma'an
Answer: A
Explanation: Amman and Mafraq. Source context: MCQ distinction: Jerusalem Conference airports = Amman and Zizia; 1948 treaty air units = Amman and Mafraq. Treaty of Independence = 1946, not 1928 or 1948.
Priority: core
Source: guide line 699

### Q06-038
Question: What facilities did Jordan agree to provide under 1948 treaty?
A. Passage facilities and leases of required lands to British forces
B. Exclusive oil ownership to France
C. Only public schools
D. No access for British forces
Answer: A
Explanation: Passage facilities and leases of required lands to British forces. Source context: 6. Jordan provides facilities for British forces passing through territory and leases required lands.
Priority: core
Source: guide line 695

### Q06-039
Question: Who ended Jordan–Britain alliance in 1957?
A. King Faisal I
B. King Abdullah I
C. King Talal
D. King Hussein bin Talal
Answer: D
Explanation: King Hussein bin Talal. Source context: Agreements ended when King Hussein bin Talal ended the alliance in 1957.
Priority: core
Source: guide line 697

### Q06-040
Question: When did this event occur: Fifth Legislative Council (1942–47) proclaimed fully independent state with hereditary parliamentary government; pledged allegiance to Abdullah bin Al-Hussein as constitutional king.?
A. March 15, 1948
B. October 20, 1947
C. May 25, 1946
D. February 1, 1947
Answer: C
Explanation: May 25, 1946 | Fifth Legislative Council (1942–47) proclaimed fully independent state with hereditary parliamentary government; pledged allegiance to Abdullah bin Al-Hussein as constitutional king.
Priority: core
Source: guide line 682

### Q06-041
Question: When did this event occur: Second constitution issued.?
A. March 15, 1948
B. May 25, 1946
C. October 20, 1947
D. February 1, 1947
Answer: D
Explanation: February 1, 1947 | Second constitution issued.
Priority: core
Source: guide line 683

### Q06-042
Question: When did this event occur: Elections produced first parliamentary council in new kingdom.?
A. October 20, 1947
B. February 1, 1947
C. May 25, 1946
D. March 15, 1948
Answer: A
Explanation: October 20, 1947 | Elections produced first parliamentary council in new kingdom.
Priority: core
Source: guide line 684

### Q06-043
Question: When was the first Anglo-Jordanian treaty signed?
A. May 25, 1923
B. March 22, 1946
C. February 20, 1928
D. March 15, 1948
Answer: C
Explanation: February 20, 1928. Source context: February 20, 1928, signed in Jerusalem by Lord Plumer (British High Commissioner in Palestine) and Hassan Khalid Abu Al-Huda (Jordanian Executive Council Chairman).
Priority: core
Source: guide line 637

### Q06-044
Question: When was the First National Conference held?
A. June 17, 1928
B. February 20, 1928
C. April 16, 1928
D. July 25, 1928
Answer: D
Explanation: July 25, 1928. Source context: First National Conference: July 25, 1928, Hamdan Cafe, Amman.
Priority: core
Source: guide line 653

### Q06-045
Question: When was Basic Law issued?
A. June 17, 1928
B. April 16, 1928
C. February 20, 1928
D. July 25, 1928
Answer: B
Explanation: April 16, 1928. Source context: April 16, 1928: Basic Law issued, requiring legislative council.
Priority: core
Source: guide line 659

### Q06-046
Question: When was first election law issued?
A. February 20, 1928
B. June 17, 1928
C. April 16, 1928
D. July 25, 1928
Answer: B
Explanation: June 17, 1928. Source context: June 17, 1928: First election law; book states elections held that year.
Priority: core
Source: guide line 660

### Q06-047
Question: When was first legislative council formed?
A. January 1931
B. April 1928
C. February 1947
D. April 1929
Answer: D
Explanation: April 1929. Source context: April 1929: First legislative council: 16 elected members (9 Muslims, 3 Christians, 2 Circassians, as listed), plus book mentions 2 appointed by Abdullah (southern and northern Bedouins), plus 5 ministers. The printed categories are not entirely clear about whether the 2 appointed are included in the 16.
Priority: core
Source: guide line 661

### Q06-048
Question: When did Abdullah dissolve first council?
A. January 9, 1931
B. July 25, 1928
C. February 1, 1947
D. April 16, 1928
Answer: A
Explanation: January 9, 1931. Source context: January 9, 1931: Abdullah dissolved council (as stated in source).
Priority: core
Source: guide line 664

### Q06-049
Question: When was Treaty of Independence signed?
A. February 20, 1928
B. May 25, 1946
C. March 15, 1948
D. March 22, 1946
Answer: D
Explanation: March 22, 1946. Source context: Signed March 22, 1946.
Priority: core
Source: guide line 671

### Q06-050
Question: When was the third Anglo-Jordanian treaty signed?
A. March 15, 1948
B. March 13, 1957
C. May 25, 1946
D. March 22, 1946
Answer: A
Explanation: March 15, 1948. Source context: Signed March 15, 1948. Main points:
Priority: core
Source: guide line 688

## Chapter 7 — First Arab-Israeli War (pp. 70–71) (43 questions)

### Q07-001
Question: In which year did Britain refer Palestine issue to UN?
A. 1949
B. 1946
C. 1947
D. 1948
Answer: C
Explanation: 1947. Source context: Britain referred Palestinian issue to UN in 1947.
Priority: core
Source: guide line 707

### Q07-002
Question: What were three components of UN partition plan?
A. Arab state, French state and Jerusalem under Jordan
B. One united state and international Aqaba
C. Jewish state, Arab state and British Jerusalem
D. Jewish state, Arab state and internationally administered Jerusalem
Answer: D
Explanation: Jewish state, Arab state and internationally administered Jerusalem. Source context: November 29, 1947: UN General Assembly approved partition of Palestine into Jewish state, Arab state, Jerusalem under international trusteeship.
Priority: core
Source: guide line 708

### Q07-003
Question: How did Arab and Jewish leadership respond to partition plan?
A. Arabs welcomed it; Jewish leadership rejected it
B. Both rejected it
C. Arabs rejected it; Jewish leadership welcomed it
D. Both welcomed it
Answer: C
Explanation: Arabs rejected it; Jewish leadership welcomed it. Source context: Arabs rejected partition. On December 20, 1947, declared it null and decided to establish Arab Salvation Army: 10,000 rifles, 3,000 volunteers (500 Palestinians), and one million pounds for military committee. Jewish leadership welcomed partition.
Priority: core
Source: guide line 709

### Q07-004
Question: What army did Arab leaders decide to form in December 1947?
A. Arab Union Army
B. Desert Force
C. British Residency Force
D. Arab Salvation Army
Answer: D
Explanation: Arab Salvation Army. Source context: Arabs rejected partition. On December 20, 1947, declared it null and decided to establish Arab Salvation Army: 10,000 rifles, 3,000 volunteers (500 Palestinians), and one million pounds for military committee. Jewish leadership welcomed partition.
Priority: core
Source: guide line 709

### Q07-005
Question: How many Arab Salvation Army volunteers and Palestinian volunteers were planned?
A. 21,500 including 500 Palestinians
B. 3,000 including 500 Palestinians
C. 4,500 including 1,000 Palestinians
D. 10,000 including 3,000 Palestinians
Answer: B
Explanation: 3,000 including 500 Palestinians. Source context: Arabs rejected partition. On December 20, 1947, declared it null and decided to establish Arab Salvation Army: 10,000 rifles, 3,000 volunteers (500 Palestinians), and one million pounds for military committee. Jewish leadership welcomed partition.
Priority: core
Source: guide line 709

### Q07-006
Question: What funding was allocated to military committee in December 1947?
A. £1 million
B. £12.5 million
C. £5 million
D. £2.5 million
Answer: A
Explanation: £1 million.
Priority: core
Source: First Arab-Israeli War (pp. 70–71)

### Q07-007
Question: Who immediately recognized Israel according to the textbook?
A. Winston Churchill
B. Anthony Eden
C. US President Harry Truman
D. Count Bernadotte
Answer: C
Explanation: US President Harry Truman. Source context: Britain decided to end mandate on May 15, 1948; Zionist Council in Tel Aviv proclaimed State of Israel. US President Harry Truman immediately recognized Israel; Soviet Union followed three days later (book's account). Jewish forces took areas assigned to them by partition plan.
Priority: core
Source: guide line 710

### Q07-008
Question: Which country recognized Israel three days after US according to textbook?
A. Soviet Union
B. Syria
C. Jordan
D. Egypt
Answer: A
Explanation: Soviet Union. Source context: Britain decided to end mandate on May 15, 1948; Zionist Council in Tel Aviv proclaimed State of Israel. US President Harry Truman immediately recognized Israel; Soviet Union followed three days later (book's account). Jewish forces took areas assigned to them by partition plan.
Priority: core
Source: guide line 710

### Q07-009
Question: What helped opposing Jewish forces before war according to textbook?
A. No international recognition
B. Prepared fortifications
C. Absence of recruits
D. Lack of preparedness
Answer: B
Explanation: Prepared fortifications.
Priority: core
Source: First Arab-Israeli War (pp. 70–71)

### Q07-010
Question: What limited early Arab military success according to the guide?
A. Limited preparedness and underestimation of opposing forces
B. Disi water crisis
C. Arab Union dissolution
D. No initial territorial gains
Answer: A
Explanation: Limited preparedness and underestimation of opposing forces. Source context: Arab armies initially controlled significant parts of Palestine despite limited preparedness and underestimating opposing forces. The book credits Jordanian army with control of southern Jordan Valley, Jerusalem/Old Jerusalem, Ramallah and Lydda, and contact with Iraqi army in north and Egyptian army south/west.
Priority: core
Source: guide line 724

### Q07-011
Question: Which international organization sent a mediator during 1948 war?
A. World Bank
B. European Investment Bank
C. United Nations
D. Arab Union
Answer: C
Explanation: United Nations.
Priority: core
Source: First Arab-Israeli War (pp. 70–71)

### Q07-012
Question: Who was the Swedish UN mediator?
A. Anthony Eden
B. David Ben-Gurion
C. Count Folke Bernadotte
D. Harry Truman
Answer: C
Explanation: Count Folke Bernadotte. Source context: UN mediator: Count Folke Bernadotte, Swedish. He was assassinated by members of a Jewish extremist group; the textbook uses a broader collective description.
Priority: core
Source: guide line 741

### Q07-013
Question: What happened to Count Bernadotte?
A. He became Jordanian king
B. He was assassinated
C. He signed 1946 treaty
D. He became Israeli prime minister
Answer: B
Explanation: He was assassinated. Source context: UN mediator: Count Folke Bernadotte, Swedish. He was assassinated by members of a Jewish extremist group; the textbook uses a broader collective description.
Priority: core
Source: guide line 741

### Q07-014
Question: What did Israeli side use first truce for according to book?
A. Signing Arab Union
B. Recruiting and buying arms
C. Ending all military preparations
D. Disbanding all forces
Answer: B
Explanation: Recruiting and buying arms.
Priority: core
Source: First Arab-Israeli War (pp. 70–71)

### Q07-015
Question: What pressures contributed to the second truce?
A. Only Jordanian water shortage
B. Only Arab Union negotiations
C. Only France's occupation of Syria
D. Security Council pressure, British arms-supply threat and US pressure on Jordan
Answer: D
Explanation: Security Council pressure, British arms-supply threat and US pressure on Jordan.
Priority: core
Source: First Arab-Israeli War (pp. 70–71)

### Q07-016
Question: Which battles are highlighted for Jordanian Arab Army?
A. Marj Dabiq, Ridaniya and Maysalun
B. Bab Al-Wad, Latrun and Jenin
C. Cairo, Jerusalem and San Remo
D. Koura, Adwan and Wadi Musa
Answer: B
Explanation: Bab Al-Wad, Latrun and Jenin. Source context: Jordanian Arab Army suffered approximately 562 deaths (called martyrs in the book). Key battles: Bab Al-Wad, Latrun and Jenin. The book credits the army with preserving Jerusalem and West Bank.
Priority: core
Source: guide line 745

### Q07-017
Question: What territory does the book credit Jordanian army with preserving?
A. Hejaz and Iraq
B. Syria and Lebanon
C. Sinai and Gaza only
D. Jerusalem and West Bank
Answer: D
Explanation: Jerusalem and West Bank. Source context: Jordanian Arab Army suffered approximately 562 deaths (called martyrs in the book). Key battles: Bab Al-Wad, Latrun and Jenin. The book credits the army with preserving Jerusalem and West Bank.
Priority: core
Source: guide line 745

### Q07-018
Question: Approximately how many Jordanian soldiers died according to textbook?
A. 4,500
B. 3,000
C. 562
D. 1,000
Answer: C
Explanation: 562. Source context: Jordanian Arab Army suffered approximately 562 deaths (called martyrs in the book). Key battles: Bab Al-Wad, Latrun and Jenin. The book credits the army with preserving Jerusalem and West Bank.
Priority: core
Source: guide line 745

### Q07-019
Question: Who is attributed the claim about Israeli losses at Bab Al-Wad?
A. Harry Truman
B. David Ben-Gurion
C. Count Bernadotte
D. King Hussein
Answer: B
Explanation: David Ben-Gurion. Source context: Textbook attributes to Israeli PM David Ben-Gurion, speaking before the Knesset, a claim that Israeli soldier losses at Bab Al-Wad alone were twice those in the entire war. This is internally inconsistent if the battle is part of the war; it is retained as an attributed textbook claim, not a verified statistic.
Priority: core
Source: guide line 746

### Q07-020
Question: What institution does textbook largely blame for Arab defeat in 1948?
A. Audit Bureau
B. Arab League
C. World Bank
D. Arab Union
Answer: B
Explanation: Arab League. Source context: Textbook largely attributes Arab defeat to the Arab League's decision to withdraw support from Palestinian fighters and dismantle military/popular organizations in Palestine, arguing that these organizations hindered Arab armies.
Priority: core
Source: guide line 747

### Q07-021
Question: What decision does textbook cite as major reason for defeat?
A. Establishment of PLO in 1964
B. Creation of Arab Union in 1958
C. Withdrawal of support for Palestinian fighters and dismantling their organizations
D. Signing of 1946 treaty alone
Answer: C
Explanation: Withdrawal of support for Palestinian fighters and dismantling their organizations.
Priority: core
Source: First Arab-Israeli War (pp. 70–71)

### Q07-022
Question: Which city hosted the Zionist Council's proclamation according to the guide?
A. Jerusalem
B. Tel Aviv
C. Haifa
D. Cairo
Answer: B
Explanation: Tel Aviv. Source context: Britain decided to end mandate on May 15, 1948; Zionist Council in Tel Aviv proclaimed State of Israel. US President Harry Truman immediately recognized Israel; Soviet Union followed three days later (book's account). Jewish forces took areas assigned to them by partition plan.
Priority: core
Source: guide line 710

### Q07-023
Question: Which areas did the guide say Jordanian army controlled early in the 1948 war?
A. Southern Jordan Valley, Jerusalem, Ramallah and Lydda
B. Sinai, Cairo, Alexandria and Suez
C. Baghdad, Basra, Mosul and Kirkuk
D. Hejaz, Mecca, Medina and Najd
Answer: A
Explanation: Southern Jordan Valley, Jerusalem, Ramallah and Lydda. Source context: Arab armies initially controlled significant parts of Palestine despite limited preparedness and underestimating opposing forces. The book credits Jordanian army with control of southern Jordan Valley, Jerusalem/Old Jerusalem, Ramallah and Lydda, and contact with Iraqi army in north and Egyptian army south/west.
Priority: core
Source: guide line 724

### Q07-024
Question: What was the stated 1948 military strength of Egypt?
A. 10,000
B. 5,000
C. 21,500
D. 3,000
Answer: A
Explanation: Egypt | 10,000
Priority: core
Source: guide line 716

### Q07-025
Question: What was the stated 1948 military strength of Jordan?
A. 10,000
B. 4,500
C. 3,000
D. 21,500
Answer: B
Explanation: Jordan | 4,500
Priority: core
Source: guide line 717

### Q07-026
Question: What was the stated 1948 military strength of Syria?
A. 60,000, with prepared fortifications
B. 21,500
C. 3,000
D. 10,000
Answer: C
Explanation: Syria | 3,000
Priority: core
Source: guide line 718

### Q07-027
Question: What was the stated 1948 military strength of Iraq?
A. 5,000
B. 1,000
C. 3,000
D. 10,000
Answer: C
Explanation: Iraq | 3,000
Priority: core
Source: guide line 719

### Q07-028
Question: What was the stated 1948 military strength of Lebanon?
A. 4,500
B. 3,000
C. 1,000
D. 2,000
Answer: C
Explanation: Lebanon | 1,000
Priority: core
Source: guide line 720

### Q07-029
Question: What was the stated 1948 military strength of Total Arab forces?
A. 1,000
B. 4,500
C. 2,000
D. 21,500
Answer: D
Explanation: Total Arab forces | 21,500
Priority: core
Source: guide line 721

### Q07-030
Question: What was the stated 1948 military strength of Jewish forces?
A. 2,000
B. 21,500
C. 60,000, with prepared fortifications
D. 4,500
Answer: C
Explanation: Jewish forces | 60,000, with prepared fortifications
Priority: core
Source: guide line 722

### Q07-031
Question: When did this event occur: Jordanian Arab Army crossed Jordan River (as stated in textbook).?
A. April 3, 1949
B. July 20, 1949
C. May 16, 1948
D. February 24, 1949
Answer: C
Explanation: May 16, 1948 | Jordanian Arab Army crossed Jordan River (as stated in textbook).
Priority: core
Source: guide line 730

### Q07-032
Question: When did this event occur: First truce.?
A. July 17, 1948
B. June 11, 1948
C. July 20, 1949
D. February 24, 1949
Answer: B
Explanation: June 11, 1948 | First truce.
Priority: core
Source: guide line 731

### Q07-033
Question: When did this event occur: Fighting resumed; book says Israeli side used truce to recruit and buy arms.?
A. February 24, 1949
B. July 9, 1948
C. July 17, 1948
D. May 16, 1948
Answer: B
Explanation: July 9, 1948 | Fighting resumed; book says Israeli side used truce to recruit and buy arms.
Priority: core
Source: guide line 732

### Q07-034
Question: When did this event occur: Fighting in Jerusalem continued until this date.?
A. July 17, 1948
B. April 3, 1949
C. May 16, 1948
D. July 20, 1949
Answer: A
Explanation: July 17, 1948 | Fighting in Jerusalem continued until this date.
Priority: core
Source: guide line 733

### Q07-035
Question: When did this event occur: Second truce elsewhere; Security Council pressure, Britain threatened to stop arms supplies to Jordan, US pressed Jordan to implement ceasefire.?
A. July 9, 1948
B. May 16, 1948
C. February 24, 1949
D. July 18, 1948
Answer: D
Explanation: July 18, 1948 | Second truce elsewhere; Security Council pressure, Britain threatened to stop arms supplies to Jordan, US pressed Jordan to implement ceasefire.
Priority: core
Source: guide line 734

### Q07-036
Question: When did this event occur: Egypt–Israel armistice.?
A. May 16, 1948
B. April 3, 1949
C. February 24, 1949
D. July 20, 1949
Answer: C
Explanation: February 24, 1949 | Egypt–Israel armistice.
Priority: core
Source: guide line 735

### Q07-037
Question: When did this event occur: Lebanon–Israel armistice.?
A. July 18, 1948
B. July 17, 1948
C. June 11, 1948
D. March 23, 1949
Answer: D
Explanation: March 23, 1949 | Lebanon–Israel armistice.
Priority: core
Source: guide line 736

### Q07-038
Question: When did this event occur: Jordan–Israel armistice.?
A. April 3, 1949
B. May 16, 1948
C. February 24, 1949
D. July 18, 1948
Answer: A
Explanation: April 3, 1949 | Jordan–Israel armistice.
Priority: core
Source: guide line 737

### Q07-039
Question: When did this event occur: UN General Assembly approved Israel's full membership.?
A. July 17, 1948
B. February 24, 1949
C. May 11, 1949
D. June 11, 1948
Answer: C
Explanation: May 11, 1949 | UN General Assembly approved Israel's full membership.
Priority: core
Source: guide line 738

### Q07-040
Question: When did this event occur: Syria–Israel armistice.?
A. February 24, 1949
B. July 20, 1949
C. July 17, 1948
D. June 11, 1948
Answer: B
Explanation: July 20, 1949 | Syria–Israel armistice.
Priority: core
Source: guide line 739

### Q07-041
Question: When was partition plan approved by UN General Assembly?
A. November 29, 1947
B. December 20, 1947
C. June 11, 1948
D. May 15, 1948
Answer: A
Explanation: November 29, 1947. Source context: November 29, 1947: UN General Assembly approved partition of Palestine into Jewish state, Arab state, Jerusalem under international trusteeship.
Priority: core
Source: guide line 708

### Q07-042
Question: When did Arabs convene to reject the partition decision?
A. November 29, 1947
B. December 20, 1947
C. July 18, 1948
D. June 11, 1948
Answer: B
Explanation: December 20, 1947. Source context: Arabs rejected partition. On December 20, 1947, declared it null and decided to establish Arab Salvation Army: 10,000 rifles, 3,000 volunteers (500 Palestinians), and one million pounds for military committee. Jewish leadership welcomed partition.
Priority: core
Source: guide line 709

### Q07-043
Question: When did Britain decide to end Palestine mandate according to guide?
A. May 25, 1946
B. May 11, 1949
C. May 15, 1948
D. November 29, 1947
Answer: C
Explanation: May 15, 1948. Source context: Britain decided to end mandate on May 15, 1948; Zionist Council in Tel Aviv proclaimed State of Israel. US President Harry Truman immediately recognized Israel; Soviet Union followed three days later (book's account). Jewish forces took areas assigned to them by partition plan.
Priority: core
Source: guide line 710

## Chapter 8 — King Talal (p. 77) (6 questions)

### Q08-001
Question: When was the Arab Social Security Agreement signed?
A. March 1, 1956
B. March 13, 1957
C. March 25, 1992
D. March 24, 1952
Answer: D
Explanation: March 24, 1952. Source context: 2. Signing the Social Security Agreement between Arab countries on March 24, 1952.
Priority: core
Source: guide line 754

### Q08-002
Question: What institution was established in 1952 to oversee state revenue and expenditure?
A. Arab League
B. Audit Bureau
C. Legislation and Opinion Bureau
D. PLO
Answer: B
Explanation: Audit Bureau. Source context: 3. Establishment of Audit Bureau in 1952 to oversee state revenues and expenditures.
Priority: core
Source: guide line 755

### Q08-003
Question: Which railway law was enacted during King Talal's reign?
A. Aqaba Maritime Law
B. Disi Railway Law
C. Hejaz Railway Law
D. Defense Law 1992
Answer: C
Explanation: Hejaz Railway Law. Source context: 4. Enactment of Hejaz Railway Law and new agreement with Tapline.
Priority: core
Source: guide line 756

### Q08-004
Question: Which company was mentioned in a new agreement during Talal's reign?
A. Gama Energy
B. World Bank
C. EIB
D. Tapline
Answer: D
Explanation: Tapline. Source context: 4. Enactment of Hejaz Railway Law and new agreement with Tapline.
Priority: core
Source: guide line 756

### Q08-005
Question: What education policy was introduced during Talal's reign?
A. Private-only education
B. Compulsory paid university education
C. Abolition of primary schooling
D. Compulsory and free primary education
Answer: D
Explanation: Compulsory and free primary education. Source context: 5. Making primary education compulsory and free.
Priority: core
Source: guide line 757

### Q08-006
Question: Which bilateral relationships were strengthened during Talal's reign?
A. Jordan–Iranian and Jordan–Libyan
B. Jordan–Saudi and Jordan–Egyptian
C. Jordan–British and Jordan–Israeli only
D. Jordan–French and Jordan–Soviet
Answer: B
Explanation: Jordan–Saudi and Jordan–Egyptian.
Priority: core
Source: King Talal (p. 77)

## Chapter 9 — King Hussein (pp. 77–82) (103 questions)

### Q09-001
Question: Where was King Hussein born?
A. Jerusalem
B. Amman
C. Cairo
D. Baghdad
Answer: B
Explanation: Amman.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-002
Question: Where did King Hussein receive primary education?
A. Victoria College
B. Islamic Scientific College
C. Sandhurst
D. Harrow School
Answer: B
Explanation: Islamic Scientific College.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-003
Question: Where was Victoria College located?
A. Baghdad
B. Amman
C. London
D. Alexandria
Answer: D
Explanation: Alexandria.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-004
Question: Which British school did King Hussein attend?
A. Victoria College
B. Islamic Scientific College
C. Royal Jordanian University
D. Harrow School
Answer: D
Explanation: Harrow School.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-005
Question: Where did King Hussein receive military education?
A. Cairo University
B. Harrow School
C. Royal Military Academy Sandhurst
D. Victoria College
Answer: C
Explanation: Royal Military Academy Sandhurst.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-006
Question: When did Hussein graduate from Sandhurst?
A. 1952
B. 1951
C. 1953
D. 1956
Answer: C
Explanation: 1953.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-007
Question: Why was a Regency Council formed?
A. King Hussein's young age
B. British treaty cancellation
C. His retirement
D. Arab Union creation
Answer: A
Explanation: King Hussein's young age.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-008
Question: Who was Senate president on Regency Council?
A. Radi Annab
B. Ibrahim Hashem
C. Suleiman Nabulsi
D. Fawzi Al-Mulqi
Answer: B
Explanation: Ibrahim Hashem. Source context: Regency Council: Ibrahim Hashem, President of the Senate; Suleiman Toukan and Abdul Rahman Ershidat, Senate members.
Priority: core
Source: guide line 776

### Q09-009
Question: Who were other two Regency Council members?
A. Fawzi Al-Mulqi and Hazza' Al-Majali
B. Hassan and Muhammad bin Talal
C. Radi Annab and Patrick Coe
D. Suleiman Toukan and Abdul Rahman Ershidat
Answer: D
Explanation: Suleiman Toukan and Abdul Rahman Ershidat. Source context: Regency Council: Ibrahim Hashem, President of the Senate; Suleiman Toukan and Abdul Rahman Ershidat, Senate members.
Priority: core
Source: guide line 776

### Q09-010
Question: Who formed government May 15, 1953?
A. Suleiman Nabulsi
B. Ibrahim Hashem
C. Fawzi Al-Mulqi
D. Hazza' Al-Majali
Answer: C
Explanation: Fawzi Al-Mulqi.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-011
Question: Whom did King Hussein marry in 1955?
A. Princess Muna
B. Queen Dina
C. Queen Alia
D. Queen Noor
Answer: B
Explanation: Queen Dina. Source context: Queen Dina (1955), Princess Muna (1961), Queen Alia (1972), Queen Noor (1978).
Priority: core
Source: guide line 789

### Q09-012
Question: Whom did King Hussein marry in 1961?
A. Queen Dina
B. Queen Alia
C. Princess Muna
D. Queen Noor
Answer: C
Explanation: Princess Muna. Source context: Queen Dina (1955), Princess Muna (1961), Queen Alia (1972), Queen Noor (1978).
Priority: core
Source: guide line 789

### Q09-013
Question: Whom did King Hussein marry in 1972?
A. Princess Muna
B. Queen Alia
C. Queen Noor
D. Queen Dina
Answer: B
Explanation: Queen Alia. Source context: Queen Dina (1955), Princess Muna (1961), Queen Alia (1972), Queen Noor (1978).
Priority: core
Source: guide line 789

### Q09-014
Question: Whom did King Hussein marry in 1978?
A. Queen Noor
B. Queen Alia
C. Queen Dina
D. Princess Muna
Answer: A
Explanation: Queen Noor. Source context: Queen Dina (1955), Princess Muna (1961), Queen Alia (1972), Queen Noor (1978).
Priority: core
Source: guide line 789

### Q09-015
Question: What helped shape King Hussein's governance experience?
A. Long reign, upbringing with grandfather Abdullah and international involvement
B. A short reign and isolation
C. Only military education
D. No regional involvement
Answer: A
Explanation: Long reign, upbringing with grandfather Abdullah and international involvement. Source context: King Hussein's governance experience was distinctive because of his long reign, upbringing with his grandfather King Abdullah, and involvement in international, regional and local issues. These helped him resolve complex challenges and develop a stable, secure modern state with political institutions.
Priority: core
Source: guide line 800

### Q09-016
Question: Who was Arab Army first Chief of Staff?
A. Frederick Peake
B. Radi Annab
C. Patrick Coe
D. John Bagot Glubb
Answer: A
Explanation: Frederick Peake. Source context: British officers had led Arab Army since emirate establishment. Frederick Peake (F. Peake) was first Chief of Staff until 1939, followed by John Bagot Glubb (Glubb Pasha), who remained after independence (1946).
Priority: core
Source: guide line 804

### Q09-017
Question: Until which year did Frederick Peake lead Arab Army?
A. 1957
B. 1939
C. 1956
D. 1946
Answer: B
Explanation: 1939. Source context: British officers had led Arab Army since emirate establishment. Frederick Peake (F. Peake) was first Chief of Staff until 1939, followed by John Bagot Glubb (Glubb Pasha), who remained after independence (1946).
Priority: core
Source: guide line 804

### Q09-018
Question: Who succeeded Peake?
A. Patrick Coe
B. John Bagot Glubb
C. Major Hutton
D. Radi Annab
Answer: B
Explanation: John Bagot Glubb. Source context: British officers had led Arab Army since emirate establishment. Frederick Peake (F. Peake) was first Chief of Staff until 1939, followed by John Bagot Glubb (Glubb Pasha), who remained after independence (1946).
Priority: core
Source: guide line 804

### Q09-019
Question: Why was Glubb unpopular?
A. He supported civilian elections without interference
B. He ended all British influence in 1946
C. He had already Arabized army
D. Symbolized British dominance and interference
Answer: D
Explanation: Symbolized British dominance and interference. Source context: Glubb symbolized British dominance; unpopular with Jordanians, especially during internal Ba'athist/communist political activity and leftist Arab nationalism centered in Syria/Egypt.
Priority: core
Source: guide line 805

### Q09-020
Question: What allowed British officers to influence elections according to guide?
A. Universal postal voting
B. Only municipal elections
C. Army voting inside barracks
D. No military voting
Answer: C
Explanation: Army voting inside barracks. Source context: Hussein recognized British officers controlled military affairs and interfered in domestic politics, especially parliamentary elections. Election law allowed army to vote inside barracks, influencing candidate results.
Priority: core
Source: guide line 806

### Q09-021
Question: What disagreements existed between Hussein and Glubb?
A. School curricula only
B. Tourism and trade only
C. Water distribution and agriculture only
D. Jordanian officer appointments, budget and air force
Answer: D
Explanation: Jordanian officer appointments, budget and air force. Source context: Conflicts with Glubb: appointing Jordanian officers to battalions/brigades, military budget, effective air force, other defense strategy matters.
Priority: core
Source: guide line 807

### Q09-022
Question: What trade-off did Hussein face when Arabizing army?
A. Domestic support versus risk of losing British aid
B. Water supply versus electricity
C. Oil exports versus imports
D. Arab League membership versus UN membership
Answer: A
Explanation: Domestic support versus risk of losing British aid. Source context: Hussein faced a choice: keep British military leadership and economic/financial support, or remove British control, gain internal support and risk losing British aid. He chose the latter, reflecting Arab nationalism and public sentiment.
Priority: core
Source: guide line 808

### Q09-023
Question: Who replaced Glubb as Chief of Staff?
A. Frederick Peake
B. Patrick Coe
C. Radi Annab
D. Major Hutton
Answer: C
Explanation: Radi Annab. Source context: 2. Promote Major General Radi Annab to General and appoint him Chief of Staff.
Priority: core
Source: guide line 813

### Q09-024
Question: Which officers' services were terminated besides Glubb?
A. Ibrahim Hashem and Suleiman Toukan
B. Radi Annab and Frederick Peake
C. Patrick Coe and Major Hutton
D. Fawzi Al-Mulqi and Hazza' Al-Majali
Answer: C
Explanation: Patrick Coe and Major Hutton.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-025
Question: How many British officers left along with Glubb?
A. 21
B. 16
C. 76
D. 55
Answer: C
Explanation: 76. Source context: Glubb and 76 British officers left Jordan. British Prime Minister Anthony Eden reacted angrily; Hussein was surprised because he had exercised a constitutional right. Egypt and Saudi Arabia welcomed it; public celebrations followed.
Priority: core
Source: guide line 817

### Q09-026
Question: Which British PM reacted angrily to Arabization?
A. Lord Plumer
B. Herbert Samuel
C. Winston Churchill
D. Anthony Eden
Answer: D
Explanation: Anthony Eden. Source context: Glubb and 76 British officers left Jordan. British Prime Minister Anthony Eden reacted angrily; Hussein was surprised because he had exercised a constitutional right. Egypt and Saudi Arabia welcomed it; public celebrations followed.
Priority: core
Source: guide line 817

### Q09-027
Question: Which Arab countries welcomed Arabization?
A. Iraq and Iran
B. Libya and Britain
C. Syria and France
D. Egypt and Saudi Arabia
Answer: D
Explanation: Egypt and Saudi Arabia. Source context: Glubb and 76 British officers left Jordan. British Prime Minister Anthony Eden reacted angrily; Hussein was surprised because he had exercised a constitutional right. Egypt and Saudi Arabia welcomed it; public celebrations followed.
Priority: core
Source: guide line 817

### Q09-028
Question: What political change followed Arabization?
A. New British military rule
B. All parties dissolved immediately
C. Parties could resume open activity without official permits
D. Parliament permanently abolished
Answer: C
Explanation: Parties could resume open activity without official permits. Source context: Democratic phase followed: Hussein permitted political parties to resume banned activity openly without official permits. On June 6, 1956, dissolved House of Representatives; parliamentary elections held October 21, 1956, with previously banned and active opposition parties participating.
Priority: core
Source: guide line 819

### Q09-029
Question: What was the aim announced by PM on November 27, 1956?
A. Sign 1948 treaty
B. Create United Arab Republic
C. Reinstate British mandate
D. End British treaty, accept Arab aid and request troop withdrawal
Answer: D
Explanation: End British treaty, accept Arab aid and request troop withdrawal.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-030
Question: Which leaders signed Arab Solidarity Agreement?
A. Nasser, Shukri Al-Quwatli, King Saud and King Hussein
B. Sadat, Begin, Carter and Hussein
C. Faisal, Glubb, Churchill and Eden
D. Qasim, Arif, Al-Sallal and Al-Badr
Answer: A
Explanation: Nasser, Shukri Al-Quwatli, King Saud and King Hussein.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-031
Question: Where was Arab Solidarity Agreement signed?
A. Cairo
B. Baghdad
C. Jerusalem
D. Amman
Answer: A
Explanation: Cairo.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-032
Question: What was annual Arab aid under agreement?
A. £12.5 million
B. £10 million
C. £2.5 million
D. £5 million
Answer: A
Explanation: £12.5 million. Source context: Arab aid for 10 years, £12.5 million annually, replacing previous £10 million annual British aid for armed forces.
Priority: core
Source: guide line 834

### Q09-033
Question: How long was Arab Solidarity aid to last?
A. 15 years
B. 10 years
C. Six months
D. 25 years
Answer: B
Explanation: 10 years. Source context: Arab aid for 10 years, £12.5 million annually, replacing previous £10 million annual British aid for armed forces.
Priority: core
Source: guide line 834

### Q09-034
Question: What annual British aid was replaced?
A. £2.5 million
B. £5 million
C. £10 million
D. £12.5 million
Answer: C
Explanation: £10 million. Source context: Arab aid for 10 years, £12.5 million annually, replacing previous £10 million annual British aid for armed forces.
Priority: core
Source: guide line 834

### Q09-035
Question: How was annual Arab aid divided?
A. All three £10m each
B. Egypt £10m, Syria £2.5m, Saudi £0
C. Egypt £2.5m, Saudi £5m, Syria £5m
D. Egypt £5m, Saudi Arabia £5m, Syria £2.5m
Answer: D
Explanation: Egypt £5m, Saudi Arabia £5m, Syria £2.5m.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-036
Question: Which PM disagreed with Hussein over Eisenhower Doctrine?
A. Hazza' Al-Majali
B. Ibrahim Hashem
C. Suleiman Nabulsi
D. Fawzi Al-Mulqi
Answer: C
Explanation: Suleiman Nabulsi. Source context: Jordan faced economic difficulties after ending alliance and political conflict between PM Suleiman Nabulsi and Hussein over acceptance of Eisenhower Doctrine in 1957.
Priority: core
Source: guide line 839

### Q09-037
Question: What was Eisenhower Doctrine intended to do?
A. Create PLO
B. Fill British/French withdrawal vacuum and counter communism
C. End US influence in Middle East
D. Restore Ottoman control
Answer: B
Explanation: Fill British/French withdrawal vacuum and counter communism. Source context: Doctrine: US wanted to fill vacuum after British/French withdrawal from Middle East, cooperate economically/militarily with regional states and send forces to counter communist threat.
Priority: core
Source: guide line 840

### Q09-038
Question: What followed 1957 political crisis?
A. A new Ottoman mandate
B. Formation of French government
C. Martial law, curfew and dissolution of political parties
D. Immediate parliamentary expansion
Answer: C
Explanation: Martial law, curfew and dissolution of political parties. Source context: Nabulsi government dismissed April 24, 1957 (book's date); disturbances within army in Zarqa intended to overthrow monarchy and declare republic. Martial law, curfew, political party dissolution followed; those responsible fled to Syria.
Priority: core
Source: guide line 841

### Q09-039
Question: Where did those responsible for disturbances flee?
A. Syria
B. Libya
C. Egypt
D. Iraq
Answer: A
Explanation: Syria. Source context: Nabulsi government dismissed April 24, 1957 (book's date); disturbances within army in Zarqa intended to overthrow monarchy and declare republic. Martial law, curfew, political party dissolution followed; those responsible fled to Syria.
Priority: core
Source: guide line 841

### Q09-040
Question: Why did Jordan turn to US aid in 1957?
A. British aid doubled
B. Arab Union began funding Jordan
C. Arab financial support stopped
D. Oil exports increased
Answer: C
Explanation: Arab financial support stopped. Source context: Arab financial aid stopped; Jordan turned to US friendship/cooperation.
Priority: core
Source: guide line 842

### Q09-041
Question: How much US aid was received in April, June and December 1957 respectively?
A. $10m, $10m, $10m
B. $12.5m, $10m, $5m
C. $5m, $5m, $2.5m
D. $100m, $60m, $40m
Answer: A
Explanation: $10m, $10m, $10m.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-042
Question: Which constitutional article relates to martial law?
A. 25
B. 125
C. 124
D. 15
Answer: B
Explanation: 125. Source context: Martial law note (p. 80–81 footnote): Textbook refers to constitutional Article 125 and suspension of ordinary legal procedures in cases of threat to public safety/defense. Military authorities are empowered under martial law to issue orders and restrict activities, including detention and searches. The book cites later martial law regulations and notes limits on appeals to civilian courts and enforceability of orders.
Priority: core
Source: guide line 845

### Q09-043
Question: Which states formed United Arab Republic?
A. Jordan and Egypt
B. Iraq and Saudi Arabia
C. Jordan and Iraq
D. Egypt and Syria
Answer: D
Explanation: Egypt and Syria. Source context: Glubb symbolized British dominance; unpopular with Jordanians, especially during internal Ba'athist/communist political activity and leftist Arab nationalism centered in Syria/Egypt.
Priority: core
Source: guide line 805

### Q09-044
Question: Who was United Arab Republic president?
A. King Faisal
B. King Hussein
C. King Saud
D. Gamal Abdel Nasser
Answer: D
Explanation: Gamal Abdel Nasser.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-045
Question: Which states formed Arab Union?
A. Jordan and Syria
B. Egypt and Syria
C. Egypt and Iraq
D. Jordan and Iraq
Answer: D
Explanation: Jordan and Iraq. Source context: Jordan faced Egyptian/Syrian political, economic and media pressure and turned to Saudi Arabia and Iraq. Faisal visited Amman and signed union agreement with Jordan.
Priority: core
Source: guide line 855

### Q09-046
Question: Who were Arab Union president and vice president?
A. King Faisal and King Hussein
B. King Saud and Nasser
C. King Hussein and King Faisal
D. Nasser and King Saud
Answer: A
Explanation: King Faisal and King Hussein.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-047
Question: Which union accepted Eisenhower Doctrine?
A. Both rejected it
B. Neither existed
C. United Arab Republic
D. Arab Union
Answer: D
Explanation: Arab Union. Source context: July 14, 1958: Iraqi coup by Abdul Karim Qasim and Abdul Salam Arif overthrew royal family, ended Arab Union.
Priority: core
Source: guide line 857

### Q09-048
Question: What was Arab Union government structure?
A. Federal government with each state's sovereignty retained
B. French administration
C. Complete merger into single unitary state
D. British mandate
Answer: A
Explanation: Federal government with each state's sovereignty retained.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-049
Question: Which matters were handled by Arab Union federal government?
A. Only water supply
B. Only education and tourism
C. Foreign affairs, defense and joint parliamentary council
D. Only local customs
Answer: C
Explanation: Foreign affairs, defense and joint parliamentary council.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-050
Question: Who led Iraqi coup that ended Arab Union?
A. Abdul Karim Qasim and Abdul Salam Arif
B. Nasser and Shukri Al-Quwatli
C. Glubb and Peake
D. Al-Sallal and Al-Badr
Answer: A
Explanation: Abdul Karim Qasim and Abdul Salam Arif. Source context: July 14, 1958: Iraqi coup by Abdul Karim Qasim and Abdul Salam Arif overthrew royal family, ended Arab Union.
Priority: core
Source: guide line 857

### Q09-051
Question: What happened in Jordan after Iraqi coup?
A. Arab Union expanded
B. British mandate restored legally
C. British forces deployed due to fear of similar coup
D. Jordan joined UAR immediately
Answer: C
Explanation: British forces deployed due to fear of similar coup. Source context: Fear of similar coup led to British forces deployed in Jordan; loss of Iraqi ally worsened difficulties.
Priority: core
Source: guide line 858

### Q09-052
Question: Through whose airspace did Jordan request US fuel deliveries?
A. Egypt
B. Iraq
C. Saudi Arabia
D. Syria
Answer: C
Explanation: Saudi Arabia. Source context: Glubb and 76 British officers left Jordan. British Prime Minister Anthony Eden reacted angrily; Hussein was surprised because he had exercised a constitutional right. Egypt and Saudi Arabia welcomed it; public celebrations followed.
Priority: core
Source: guide line 817

### Q09-053
Question: Which prime minister was killed in 1960 office bombing?
A. Ibrahim Hashem
B. Suleiman Nabulsi
C. Hazza' Al-Majali
D. Fawzi Al-Mulqi
Answer: C
Explanation: Hazza' Al-Majali. Source context: August 29, 1960: Bombing in PM office killed Prime Minister Hazza' Al-Majali; tensions with UAR persisted.
Priority: core
Source: guide line 861

### Q09-054
Question: Why did Jordan recognize Kuwait in 1961 according to guide?
A. To restore British treaty
B. To annex Kuwait
C. Hope for financial aid and reduced US dependence
D. To join Iraqi coup
Answer: C
Explanation: Hope for financial aid and reduced US dependence.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-055
Question: What happened on September 28, 1961?
A. Iraq invaded Kuwait
B. Jordan gained independence
C. Arab Union was formed
D. Syria separated from Egypt following coup
Answer: D
Explanation: Syria separated from Egypt following coup. Source context: September 28, 1961: Syrian coup separated Egypt and Syria; Jordan quickly recognized new Syrian regime and eased tensions.
Priority: core
Source: guide line 863

### Q09-056
Question: Who led Yemeni coup in 1962?
A. Abdul Salam Arif
B. Abdullah al-Sallal
C. Muhammad al-Badr
D. Abdul Karim Qasim
Answer: B
Explanation: Abdullah al-Sallal. Source context: September 26, 1962: Yemeni coup led by Colonel Abdullah al-Sallal. Jordan supported deposed Imam Muhammad al-Badr; Egypt supported Yemeni revolution and sent 50,000 troops to support it.
Priority: core
Source: guide line 864

### Q09-057
Question: Which side did Jordan support in Yemen?
A. Revolution led by al-Sallal
B. Deposed Imam Muhammad al-Badr
C. Neither side according to guide
D. Both sides equally
Answer: B
Explanation: Deposed Imam Muhammad al-Badr. Source context: September 26, 1962: Yemeni coup led by Colonel Abdullah al-Sallal. Jordan supported deposed Imam Muhammad al-Badr; Egypt supported Yemeni revolution and sent 50,000 troops to support it.
Priority: core
Source: guide line 864

### Q09-058
Question: Which side did Egypt support in Yemen?
A. Yemeni revolution
B. Jordanian monarchy
C. Deposed Imam al-Badr
D. British mandate
Answer: A
Explanation: Yemeni revolution. Source context: September 26, 1962: Yemeni coup led by Colonel Abdullah al-Sallal. Jordan supported deposed Imam Muhammad al-Badr; Egypt supported Yemeni revolution and sent 50,000 troops to support it.
Priority: core
Source: guide line 864

### Q09-059
Question: How many Egyptian troops were sent to support Yemeni revolution according to guide?
A. 60,000
B. 50,000
C. 10,000
D. 21,500
Answer: B
Explanation: 50,000. Source context: September 26, 1962: Yemeni coup led by Colonel Abdullah al-Sallal. Jordan supported deposed Imam Muhammad al-Badr; Egypt supported Yemeni revolution and sent 50,000 troops to support it.
Priority: core
Source: guide line 864

### Q09-060
Question: How many times had Soviet Union vetoed Jordan's UN membership according to guide?
A. 8
B. 5
C. 12
D. 3
Answer: A
Explanation: 8. Source context: August 8, 1958: Jordan complained to UN Security Council against UAR; Jordanian–Syrian border repeatedly closed.
Priority: core
Source: guide line 859

### Q09-061
Question: What did Israel begin diverting in 1964 according to guide?
A. Disi water to Amman
B. Yarmouk to Syria exclusively
C. Red Sea water to Aqaba
D. Jordan River waters to Negev Desert
Answer: D
Explanation: Jordan River waters to Negev Desert. Source context: Israeli economic growth and military industrial development intensified media conflict; in 1964, Israel began diverting Jordan River water to Negev Desert for reclamation and Jewish immigrant settlement.
Priority: core
Source: guide line 866

### Q09-062
Question: Which political currents increased opposition to British military dominance?
A. Only environmental movements
B. Only European monarchists
C. Ba'athist and communist activity and Arab nationalism centered in Syria/Egypt
D. Only Ottoman loyalists
Answer: C
Explanation: Ba'athist and communist activity and Arab nationalism centered in Syria/Egypt. Source context: Glubb symbolized British dominance; unpopular with Jordanians, especially during internal Ba'athist/communist political activity and leftist Arab nationalism centered in Syria/Egypt.
Priority: core
Source: guide line 805

### Q09-063
Question: What happened to ordinary legal procedures under martial law as described in the guide?
A. Only school regulations changed
B. They could be suspended for public safety and defense
C. All laws were permanently abolished
D. They were never affected
Answer: B
Explanation: They could be suspended for public safety and defense.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-064
Question: When did Jordan complain to UN Security Council against UAR?
A. July 14, 1958
B. August 8, 1958
C. August 29, 1960
D. February 11, 1958
Answer: B
Explanation: August 8, 1958. Source context: August 8, 1958: Jordan complained to UN Security Council against UAR; Jordanian–Syrian border repeatedly closed.
Priority: core
Source: guide line 859

### Q09-065
Question: What happened to Jordanian–Syrian border during UAR tensions?
A. It was repeatedly closed
B. It was opened without interruptions
C. It was moved to Egypt
D. It was permanently abolished
Answer: A
Explanation: It was repeatedly closed. Source context: August 8, 1958: Jordan complained to UN Security Council against UAR; Jordanian–Syrian border repeatedly closed.
Priority: core
Source: guide line 859

### Q09-066
Question: Which countries recognized the Yemeni republic before regional tensions eased according to guide?
A. Iraq, Egypt, Syria and Lebanon
B. Jordan, Saudi Arabia, Britain and France
C. Kuwait, Bahrain, Qatar and UAE
D. Libya, Iran, Morocco and Tunisia
Answer: A
Explanation: Iraq, Egypt, Syria and Lebanon. Source context: August 21, 1963: Jordan established diplomatic relations with Soviet Union (which had used veto against Jordan's UN membership eight times since independence in 1946). Tensions eased after Iraq, Egypt, Syria and Lebanon recognized Yemeni republic.
Priority: core
Source: guide line 865

### Q09-067
Question: Which date or period matches this event in King Hussein’s biography: Born in Amman.?
A. November 14, 1935
B. September 6, 1951
C. May 2, 1953
D. June 4, 1952
Answer: A
Explanation: November 14, 1935 | Born in Amman.
Priority: core
Source: guide line 768

### Q09-068
Question: Which date or period matches this event in King Hussein’s biography: Appointed Crown Prince.?
A. May 2, 1953
B. May 15, 1953
C. September 6, 1951
D. November 14, 1935
Answer: C
Explanation: September 6, 1951 | Appointed Crown Prince.
Priority: core
Source: guide line 770

### Q09-069
Question: Which date or period matches this event in King Hussein’s biography: Cabinet decided to form Regency Council due to his young age (as dated in textbook).?
A. May 2, 1953
B. August 11, 1952
C. June 4, 1952
D. Education
Answer: C
Explanation: June 4, 1952 | Cabinet decided to form Regency Council due to his young age (as dated in textbook).
Priority: core
Source: guide line 771

### Q09-070
Question: Which date or period matches this event in King Hussein’s biography: Proclaimed King.?
A. August 11, 1952
B. May 2, 1953
C. May 15, 1953
D. September 6, 1951
Answer: A
Explanation: August 11, 1952 | Proclaimed King.
Priority: core
Source: guide line 772

### Q09-071
Question: Which date or period matches this event in King Hussein’s biography: Turned eighteen according to the book's constitutional account, took constitutional oath and assumed powers.?
A. August 11, 1952
B. November 14, 1935
C. May 2, 1953
D. Education
Answer: C
Explanation: May 2, 1953 | Turned eighteen according to the book's constitutional account, took constitutional oath and assumed powers.
Priority: core
Source: guide line 773

### Q09-072
Question: Which date or period matches this event in King Hussein’s biography: Fawzi Al-Mulqi formed new government.?
A. August 11, 1952
B. May 15, 1953
C. June 4, 1952
D. September 6, 1951
Answer: B
Explanation: May 15, 1953 | Fawzi Al-Mulqi formed new government.
Priority: core
Source: guide line 774

### Q09-073
Question: Which period corresponds to this crown prince appointment or tenure: Prince Muhammad bin Talal?
A. 1952–1962
B. 1965–1999
C. 1962–1965
D. Appointed again January 24, 1999
Answer: A
Explanation: Prince Muhammad bin Talal | 1952–1962
Priority: core
Source: guide line 782

### Q09-074
Question: Which period corresponds to this crown prince appointment or tenure: Prince Abdullah bin Al-Hussein (first tenure)?
A. 1965–1999
B. 1962–1965
C. 1952–1962
D. Appointed again January 24, 1999
Answer: B
Explanation: Prince Abdullah bin Al-Hussein | 1962–1965
Priority: core
Source: guide line 783

### Q09-075
Question: Which period corresponds to this crown prince appointment or tenure: Prince Hassan bin Talal?
A. 1952–1962
B. 1965–1999
C. 1962–1965
D. Appointed again January 24, 1999
Answer: B
Explanation: Prince Hassan bin Talal | 1965–1999
Priority: core
Source: guide line 784

### Q09-076
Question: Which period corresponds to this crown prince appointment or tenure: Prince Abdullah bin Al-Hussein (second appointment)?
A. Appointed again January 24, 1999
B. 1962–1965
C. 1952–1962
D. 1965–1999
Answer: A
Explanation: Prince Abdullah bin Al-Hussein | Appointed again January 24, 1999
Priority: core
Source: guide line 785

### Q09-077
Question: Which of King Hussein’s books matches this description: Childhood and early years of rule.?
A. The Duties of King
B. Uneasy Lies the Head: The Autobiography of His Majesty King Hussein I of the Hashemite Kingdom of Jordan
C. My War with Israel
D. Mon Métier de Roi (My Profession as a King)
Answer: A
Explanation: The Duties of King | 1962 | Childhood and early years of rule.
Priority: core
Source: guide line 795

### Q09-078
Question: Which of King Hussein’s books matches this description: Originally French; role, duties and challenges guiding Jordan through regional conflicts and political upheavals.?
A. The Duties of King
B. My War with Israel
C. Mon Métier de Roi (My Profession as a King)
D. Uneasy Lies the Head: The Autobiography of His Majesty King Hussein I of the Hashemite Kingdom of Jordan
Answer: C
Explanation: Mon Métier de Roi (My Profession as a King) | 1975 | Originally French; role, duties and challenges guiding Jordan through regional conflicts and political upheavals.
Priority: core
Source: guide line 796

### Q09-079
Question: Which of King Hussein’s books matches this description: English autobiography; personal/professional life and views on regional and global politics.?
A. Uneasy Lies the Head: The Autobiography of His Majesty King Hussein I of the Hashemite Kingdom of Jordan
B. My War with Israel
C. Mon Métier de Roi (My Profession as a King)
D. The Duties of King
Answer: A
Explanation: Uneasy Lies the Head: The Autobiography of His Majesty King Hussein I of the Hashemite Kingdom of Jordan | 1962 | English autobiography; personal/professional life and views on regional and global politics.
Priority: core
Source: guide line 797

### Q09-080
Question: Which of King Hussein’s books matches this description: Six-Day War of 1967, aftermath, conflict with Israel and challenges Jordan faced.?
A. Uneasy Lies the Head: The Autobiography of His Majesty King Hussein I of the Hashemite Kingdom of Jordan
B. Mon Métier de Roi (My Profession as a King)
C. The Duties of King
D. My War with Israel
Answer: D
Explanation: My War with Israel | 1969 | Six-Day War of 1967, aftermath, conflict with Israel and challenges Jordan faced.
Priority: core
Source: guide line 798

### Q09-081
Question: When did this event occur: Prime Minister told House of Representatives of intention to terminate British treaty, accept Arab financial aid and request British troop withdrawal.?
A. March 13, 1957
B. July 7, 1957
C. November 27, 1956
D. January 16, 1957
Answer: C
Explanation: November 27, 1956 | Prime Minister told House of Representatives of intention to terminate British treaty, accept Arab financial aid and request British troop withdrawal.
Priority: core
Source: guide line 825

### Q09-082
Question: When did this event occur: Arab Solidarity Agreement signed in Cairo by Gamal Abdel Nasser (Egypt), Shukri Al-Quwatli (Syria), King Saud bin Abdulaziz (Saudi Arabia), King Hussein (Jordan).?
A. November 27, 1956
B. January 19, 1957
C. January 16, 1957
D. July 7, 1957
Answer: B
Explanation: January 19, 1957 | Arab Solidarity Agreement signed in Cairo by Gamal Abdel Nasser (Egypt), Shukri Al-Quwatli (Syria), King Saud bin Abdulaziz (Saudi Arabia), King Hussein (Jordan).
Priority: core
Source: guide line 826

### Q09-083
Question: When did this event occur: Britain sent memorandum to terminate treaty (as printed).?
A. November 27, 1956
B. January 19, 1957
C. March 13, 1957
D. January 16, 1957
Answer: D
Explanation: January 16, 1957 | Britain sent memorandum to terminate treaty (as printed).
Priority: core
Source: guide line 827

### Q09-084
Question: When did this event occur: Negotiations began.?
A. July 7, 1957
B. November 27, 1956
C. January 16, 1957
D. February 13, 1957
Answer: D
Explanation: February 13, 1957 | Negotiations began.
Priority: core
Source: guide line 828

### Q09-085
Question: When did this event occur: Agreement signed to cancel Jordanian–British treaty.?
A. November 27, 1956
B. July 7, 1957
C. March 13, 1957
D. February 13, 1957
Answer: C
Explanation: March 13, 1957 | Agreement signed to cancel Jordanian–British treaty.
Priority: core
Source: guide line 829

### Q09-086
Question: When did this event occur: Deadline for withdrawal of British forces.?
A. January 16, 1957
B. July 7, 1957
C. November 27, 1956
D. January 19, 1957
Answer: B
Explanation: July 7, 1957 | Deadline for withdrawal of British forces.
Priority: core
Source: guide line 830

### Q09-087
Question: When was Arab Army Arabized?
A. March 13, 1957
B. August 11, 1952
C. October 21, 1956
D. March 1, 1956
Answer: D
Explanation: March 1, 1956.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-088
Question: When did King Hussein dissolve House of Representatives after Arabization?
A. October 21, 1956
B. November 27, 1956
C. June 6, 1956
D. March 1, 1956
Answer: C
Explanation: June 6, 1956. Source context: Democratic phase followed: Hussein permitted political parties to resume banned activity openly without official permits. On June 6, 1956, dissolved House of Representatives; parliamentary elections held October 21, 1956, with previously banned and active opposition parties participating.
Priority: core
Source: guide line 819

### Q09-089
Question: When were parliamentary elections after Arabization held?
A. June 6, 1956
B. March 13, 1957
C. March 1, 1956
D. October 21, 1956
Answer: D
Explanation: October 21, 1956. Source context: Democratic phase followed: Hussein permitted political parties to resume banned activity openly without official permits. On June 6, 1956, dissolved House of Representatives; parliamentary elections held October 21, 1956, with previously banned and active opposition parties participating.
Priority: core
Source: guide line 819

### Q09-090
Question: When was Arab Solidarity Agreement signed?
A. March 13, 1957
B. February 13, 1957
C. January 19, 1957
D. January 16, 1957
Answer: C
Explanation: January 19, 1957.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-091
Question: When was Nabulsi government dismissed according to guide?
A. March 13, 1957
B. April 29, 1957
C. July 7, 1957
D. April 24, 1957
Answer: D
Explanation: April 24, 1957. Source context: Nabulsi government dismissed April 24, 1957 (book's date); disturbances within army in Zarqa intended to overthrow monarchy and declare republic. Martial law, curfew, political party dissolution followed; those responsible fled to Syria.
Priority: core
Source: guide line 841

### Q09-092
Question: When did Jordan accept US aid program?
A. March 13, 1957
B. January 19, 1957
C. April 29, 1957
D. April 24, 1957
Answer: C
Explanation: April 29, 1957. Source context: April 29, 1957: Jordan accepted US aid program; $10 million April, $10 million June military aid, another $10 million December technical/investment support.
Priority: core
Source: guide line 843

### Q09-093
Question: When was United Arab Republic formed?
A. February 11, 1958
B. July 14, 1958
C. August 8, 1958
D. February 1, 1958
Answer: D
Explanation: February 1, 1958.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-094
Question: When was Arab Union formed?
A. February 1, 1958
B. August 8, 1958
C. February 11, 1958
D. July 14, 1958
Answer: C
Explanation: February 11, 1958.
Priority: core
Source: King Hussein (pp. 77–82)

### Q09-095
Question: When did Iraqi coup end Arab Union?
A. February 11, 1958
B. July 14, 1958
C. August 8, 1958
D. August 29, 1960
Answer: B
Explanation: July 14, 1958. Source context: July 14, 1958: Iraqi coup by Abdul Karim Qasim and Abdul Salam Arif overthrew royal family, ended Arab Union.
Priority: core
Source: guide line 857

### Q09-096
Question: When did Hazza' Al-Majali die?
A. August 21, 1963
B. June 27, 1961
C. August 29, 1960
D. July 14, 1958
Answer: C
Explanation: August 29, 1960. Source context: August 29, 1960: Bombing in PM office killed Prime Minister Hazza' Al-Majali; tensions with UAR persisted.
Priority: core
Source: guide line 861

### Q09-097
Question: When did Jordan recognize Kuwait?
A. September 26, 1962
B. August 29, 1960
C. September 28, 1961
D. June 27, 1961
Answer: D
Explanation: June 27, 1961. Source context: June 27, 1961: Jordan recognized Kuwait after first crisis in 1961, without reacting to Iraq's unilateral policy; hoped for Kuwaiti aid and less US dependence.
Priority: core
Source: guide line 862

### Q09-098
Question: When did Yemeni coup take place?
A. June 27, 1961
B. September 26, 1962
C. September 28, 1961
D. August 21, 1963
Answer: B
Explanation: September 26, 1962. Source context: September 26, 1962: Yemeni coup led by Colonel Abdullah al-Sallal. Jordan supported deposed Imam Muhammad al-Badr; Egypt supported Yemeni revolution and sent 50,000 troops to support it.
Priority: core
Source: guide line 864

### Q09-099
Question: When did Jordan establish diplomatic relations with Soviet Union?
A. July 14, 1958
B. January 13, 1964
C. August 21, 1963
D. August 29, 1960
Answer: C
Explanation: August 21, 1963. Source context: August 21, 1963: Jordan established diplomatic relations with Soviet Union (which had used veto against Jordan's UN membership eight times since independence in 1946). Tensions eased after Iraq, Egypt, Syria and Lebanon recognized Yemeni republic.
Priority: core
Source: guide line 865

### Q09-100
Question: In what year was The Duties of King published, according to the guide?
A. 1969
B. 1962
C. 1975
D. 1956
Answer: B
Explanation: The Duties of King | 1962 | Childhood and early years of rule.
Priority: core
Source: guide line 795

### Q09-101
Question: In what year was Mon Métier de Roi (My Profession as a King) published, according to the guide?
A. 1975
B. 1962
C. 1956
D. 1969
Answer: A
Explanation: Mon Métier de Roi (My Profession as a King) | 1975 | Originally French; role, duties and challenges guiding Jordan through regional conflicts and political upheavals.
Priority: core
Source: guide line 796

### Q09-102
Question: In what year was Uneasy Lies the Head: The Autobiography of His Majesty King Hussein I of the Hashemite Kingdom of Jordan published, according to the guide?
A. 1969
B. 1975
C. 1962
D. 1956
Answer: C
Explanation: Uneasy Lies the Head: The Autobiography of His Majesty King Hussein I of the Hashemite Kingdom of Jordan | 1962 | English autobiography; personal/professional life and views on regional and global politics.
Priority: core
Source: guide line 797

### Q09-103
Question: In what year was My War with Israel published, according to the guide?
A. 1956
B. 1969
C. 1975
D. 1962
Answer: B
Explanation: My War with Israel | 1969 | Six-Day War of 1967, aftermath, conflict with Israel and challenges Jordan faced.
Priority: core
Source: guide line 798

## Chapter 10 — Arab League summits (pp. 82–85) (67 questions)

### Q10-001
Question: Why did Arab League summit meetings emerge?
A. Formation of British mandate
B. End of Ottoman rule alone
C. Ideological and intellectual differences among Arab states
D. Jordan's water project alone
Answer: C
Explanation: Ideological and intellectual differences among Arab states. Source context: Arab League summits emerged due to ideological/intellectual differences among Arab states.
Priority: core
Source: guide line 874

### Q10-002
Question: What prompted first organized Cairo summit in 1964?
A. Israel's diversion of Jordan River tributaries to Negev
B. Establishment of Arab Union
C. Jordan's 1989 uprising
D. Egypt's suspension in 1978
Answer: A
Explanation: Israel's diversion of Jordan River tributaries to Negev. Source context: First Arab League summit in Cairo, January 13–16, 1964, to discuss Israeli diversion of Jordan River tributaries shared by Lebanon, Syria, Jordan, Palestine toward Negev Desert in southern Palestine to accommodate Jewish immigrants.
Priority: core
Source: guide line 875

### Q10-003
Question: Which territories shared the tributaries discussed in Cairo summit?
A. Lebanon, Syria, Jordan and Palestine
B. Egypt, Iraq, Saudi Arabia and Kuwait
C. Jordan, Egypt, Iraq and Iran
D. Morocco, Libya, Sudan and Tunisia
Answer: A
Explanation: Lebanon, Syria, Jordan and Palestine. Source context: First Arab League summit in Cairo, January 13–16, 1964, to discuss Israeli diversion of Jordan River tributaries shared by Lebanon, Syria, Jordan, Palestine toward Negev Desert in southern Palestine to accommodate Jewish immigrants.
Priority: core
Source: guide line 875

### Q10-004
Question: From which lake did Israeli diversion project take water?
A. Lake Tiberias
B. Gulf of Aqaba
C. Dead Sea
D. Red Sea
Answer: A
Explanation: Lake Tiberias. Source context: Israeli irrigation project described as diverting water from Lake Tiberias via pumping stations west of lake, through Beit Shean and Jezreel valleys to Negev.
Priority: core
Source: guide line 876

### Q10-005
Question: Which valleys were included in diversion route described in guide?
A. Zarqa and Yarmouk
B. Beit Shean and Jezreel
C. Disi and Jafr
D. Wadi Musa and Wadi Araba
Answer: B
Explanation: Beit Shean and Jezreel. Source context: Israeli irrigation project described as diverting water from Lake Tiberias via pumping stations west of lake, through Beit Shean and Jezreel valleys to Negev.
Priority: core
Source: guide line 876

### Q10-006
Question: What organization was established by decision of 1964 summit?
A. Palestine Liberation Organization
B. Arab Union
C. United Arab Republic
D. Audit Bureau
Answer: A
Explanation: Palestine Liberation Organization. Source context: Decisions: plan to redirect Jordan River waters to Arab lands; establish Palestine Liberation Organization (PLO) without affecting East/West Bank unity.
Priority: core
Source: guide line 877

### Q10-007
Question: What was the condition concerning PLO establishment at 1964 summit?
A. End Jordanian sovereignty
B. Immediately sever Jordanian ties with West Bank
C. Not affect East/West Bank unity
D. Dissolve Arab League
Answer: C
Explanation: Not affect East/West Bank unity. Source context: Decisions: plan to redirect Jordan River waters to Arab lands; establish Palestine Liberation Organization (PLO) without affecting East/West Bank unity.
Priority: core
Source: guide line 877

### Q10-008
Question: Where was the 33rd Arab League summit held in 2024 according to guide?
A. Tunis
B. Amman
C. Cairo
D. Bahrain
Answer: D
Explanation: Bahrain. Source context: Book identifies 33rd Arab League summit in Bahrain in 2024 as its most recent summit. Jordan advocated these summits, regularly held since 2001.
Priority: core
Source: guide line 878

### Q10-009
Question: Since which year have summit meetings been held regularly according to guide?
A. 2017
B. 2001
C. 1987
D. 1964
Answer: B
Explanation: 2001. Source context: Book identifies 33rd Arab League summit in Bahrain in 2024 as its most recent summit. Jordan advocated these summits, regularly held since 2001.
Priority: core
Source: guide line 878

### Q10-010
Question: Which earlier gatherings does the guide distinguish from organized Cairo summit?
A. Amman 1980 and Tunis 1979
B. Anshas 1946 and Beirut 1956
C. Cairo 1921 and Jerusalem 1921
D. Rabat 1974 and Baghdad 1978
Answer: B
Explanation: Anshas 1946 and Beirut 1956. Source context: Textbook footnote notes earlier summit gatherings: Anshas, May 28, 1946; Beirut, November 13, 1956; the book treats Cairo 1964 as beginning of organized Arab summit meetings.
Priority: core
Source: guide line 879

### Q10-011
Question: How many Arab countries attended regular Amman Summit in 1980?
A. 15
B. 9
C. 21
D. 33
Answer: A
Explanation: 15. Source context: 15 Arab countries participated. Main resolutions:
Priority: core
Source: guide line 883

### Q10-012
Question: Who signed Camp David Accords?
A. Nasser and King Faisal
B. Hafez al-Assad and Saddam Hussein
C. King Hussein and King Saud
D. Anwar Sadat and Menachem Begin
Answer: D
Explanation: Anwar Sadat and Menachem Begin. Source context: Reject Camp David Accords signed by Egyptian President Anwar Sadat and Israeli PM Menachem Begin, under US President Jimmy Carter, September 17, 1978. Accords led to Egyptian–Israeli Peace Treaty, ended war between them, established friendly relations and led to Israeli withdrawal from occupied territories as described in book.
Priority: core
Source: guide line 885

### Q10-013
Question: Which US president sponsored Camp David Accords?
A. Harry Truman
B. Jimmy Carter
C. Dwight Eisenhower
D. Ronald Reagan
Answer: B
Explanation: Jimmy Carter. Source context: Reject Camp David Accords signed by Egyptian President Anwar Sadat and Israeli PM Menachem Begin, under US President Jimmy Carter, September 17, 1978. Accords led to Egyptian–Israeli Peace Treaty, ended war between them, established friendly relations and led to Israeli withdrawal from occupied territories as described in book.
Priority: core
Source: guide line 885

### Q10-014
Question: When were Camp David Accords signed?
A. March 29, 2017
B. November 8, 1987
C. September 17, 1978
D. November 25, 1980
Answer: C
Explanation: September 17, 1978. Source context: Reject Camp David Accords signed by Egyptian President Anwar Sadat and Israeli PM Menachem Begin, under US President Jimmy Carter, September 17, 1978. Accords led to Egyptian–Israeli Peace Treaty, ended war between them, established friendly relations and led to Israeli withdrawal from occupied territories as described in book.
Priority: core
Source: guide line 885

### Q10-015
Question: What was 1980 summit's stance toward Camp David Accords?
A. Created them
B. Approved them unanimously
C. Did not discuss them
D. Rejected them
Answer: D
Explanation: Rejected them.
Priority: core
Source: Arab League summits (pp. 82–85)

### Q10-016
Question: Which conflict did 1980 summit call to cease?
A. Iraq–Iran war
B. Yemeni conflict of 1962
C. Ottoman–Mamluk war
D. 1948 Arab–Israeli war
Answer: A
Explanation: Iraq–Iran war. Source context: All Arab states except Egypt participated; Egypt's membership suspended and headquarters moved to Tunisia. Baghdad summit November 2, 1978 decided to suspend Egypt, confirmed at Tunis summit November 20, 1979, enforcing boycott. Arab world lost its largest military force (Egypt) and was split during First Gulf War, with Syria/Libya siding with Iran; Iraq advocated restoration of Egypt relations.
Priority: core
Source: guide line 894

### Q10-017
Question: Until which year was Arab economic cooperation strategy approved in 1980?
A. 2000
B. 1991
C. 2024
D. 1987
Answer: A
Explanation: 2000. Source context: Approve Arab economic cooperation strategy until 2000, based on comprehensive development; Saudi Arabia, Kuwait, Iraq, UAE and Qatar support with $5 billion during 1980s, affirm that every Arab country forms economic depth for others.
Priority: core
Source: guide line 887

### Q10-018
Question: Which countries pledged economic support at 1980 summit?
A. Egypt, Syria, Lebanon, Libya and Sudan
B. Jordan, Israel, Iran, Egypt and Turkey
C. Saudi Arabia, Kuwait, Iraq, UAE and Qatar
D. Morocco, Tunisia, Algeria, Libya and Egypt
Answer: C
Explanation: Saudi Arabia, Kuwait, Iraq, UAE and Qatar. Source context: Approve Arab economic cooperation strategy until 2000, based on comprehensive development; Saudi Arabia, Kuwait, Iraq, UAE and Qatar support with $5 billion during 1980s, affirm that every Arab country forms economic depth for others.
Priority: core
Source: guide line 887

### Q10-019
Question: What amount supported 1980 economic strategy?
A. $500 million for one year
B. $5 billion during 1980s
C. £12.5 million annually
D. $3 billion
Answer: B
Explanation: $5 billion during 1980s. Source context: Approve Arab economic cooperation strategy until 2000, based on comprehensive development; Saudi Arabia, Kuwait, Iraq, UAE and Qatar support with $5 billion during 1980s, affirm that every Arab country forms economic depth for others.
Priority: core
Source: guide line 887

### Q10-020
Question: Which summit was called Reconciliation and Agreement Summit?
A. Regular Amman Summit 1980
B. Extraordinary Amman Summit 1987
C. Dead Sea Summit 2017
D. First Regular Amman Summit 2001
Answer: B
Explanation: Extraordinary Amman Summit 1987. Source context: MCQ trap: 1980 = regular summit, Iran–Iraq ceasefire and economic cooperation until 2000; 1987 = extraordinary/reconciliation; 2001 = first regular summit and Amr Moussa; 2017 = Dead Sea and Amman Declaration.
Priority: core
Source: guide line 929

### Q10-021
Question: What was the goal of extraordinary 1987 summit?
A. Establish British mandate
B. Approve Camp David Accords
C. Create United Arab Republic
D. Reconcile Arab leaders and resolve Arab crises
Answer: D
Explanation: Reconcile Arab leaders and resolve Arab crises. Source context: Also called Reconciliation and Agreement Summit. Goal: reconciliation among leaders and comprehensive Arab agreement to resolve crises.
Priority: core
Source: guide line 891

### Q10-022
Question: What did Kuwait condition aid to Syria on?
A. Improved Syrian relations with Iraq
B. Syrian withdrawal from Arab League
C. Syrian support for France
D. Syrian recognition of Kuwait only
Answer: A
Explanation: Improved Syrian relations with Iraq.
Priority: core
Source: Arab League summits (pp. 82–85)

### Q10-023
Question: Which country did not participate in 1987 summit?
A. Syria
B. Egypt
C. Iraq
D. Jordan
Answer: B
Explanation: Egypt.
Priority: core
Source: Arab League summits (pp. 82–85)

### Q10-024
Question: Where were Arab League headquarters moved after Egypt's suspension?
A. Iraq
B. Jordan
C. Syria
D. Tunisia
Answer: D
Explanation: Tunisia. Source context: All Arab states except Egypt participated; Egypt's membership suspended and headquarters moved to Tunisia. Baghdad summit November 2, 1978 decided to suspend Egypt, confirmed at Tunis summit November 20, 1979, enforcing boycott. Arab world lost its largest military force (Egypt) and was split during First Gulf War, with Syria/Libya siding with Iran; Iraq advocated restoration of Egypt relations.
Priority: core
Source: guide line 894

### Q10-025
Question: Which summit decided to suspend Egypt?
A. Tunis, November 20, 1979
B. Cairo, January 13, 1964
C. Baghdad, November 2, 1978
D. Amman, November 25, 1980
Answer: C
Explanation: Baghdad, November 2, 1978. Source context: All Arab states except Egypt participated; Egypt's membership suspended and headquarters moved to Tunisia. Baghdad summit November 2, 1978 decided to suspend Egypt, confirmed at Tunis summit November 20, 1979, enforcing boycott. Arab world lost its largest military force (Egypt) and was split during First Gulf War, with Syria/Libya siding with Iran; Iraq advocated restoration of Egypt relations.
Priority: core
Source: guide line 894

### Q10-026
Question: Which summit confirmed Egypt's suspension?
A. Baghdad, November 2, 1978
B. Tunis, November 20, 1979
C. Dead Sea, March 29, 2017
D. Amman, November 8, 1987
Answer: B
Explanation: Tunis, November 20, 1979. Source context: All Arab states except Egypt participated; Egypt's membership suspended and headquarters moved to Tunisia. Baghdad summit November 2, 1978 decided to suspend Egypt, confirmed at Tunis summit November 20, 1979, enforcing boycott. Arab world lost its largest military force (Egypt) and was split during First Gulf War, with Syria/Libya siding with Iran; Iraq advocated restoration of Egypt relations.
Priority: core
Source: guide line 894

### Q10-027
Question: Which countries sided with Iran during First Gulf War according to guide?
A. Jordan and Iraq
B. Egypt and UAE
C. Syria and Libya
D. Saudi Arabia and Kuwait
Answer: C
Explanation: Syria and Libya. Source context: All Arab states except Egypt participated; Egypt's membership suspended and headquarters moved to Tunisia. Baghdad summit November 2, 1978 decided to suspend Egypt, confirmed at Tunis summit November 20, 1979, enforcing boycott. Arab world lost its largest military force (Egypt) and was split during First Gulf War, with Syria/Libya siding with Iran; Iraq advocated restoration of Egypt relations.
Priority: core
Source: guide line 894

### Q10-028
Question: Which country advocated restoration of Egypt relations?
A. Iraq
B. Libya
C. Israel
D. Iran
Answer: A
Explanation: Iraq. Source context: All Arab states except Egypt participated; Egypt's membership suspended and headquarters moved to Tunisia. Baghdad summit November 2, 1978 decided to suspend Egypt, confirmed at Tunis summit November 20, 1979, enforcing boycott. Arab world lost its largest military force (Egypt) and was split during First Gulf War, with Syria/Libya siding with Iran; Iraq advocated restoration of Egypt relations.
Priority: core
Source: guide line 894

### Q10-029
Question: What did 1987 summit condemn?
A. Iran's occupation of Iraqi land, continued war and provocation of Gulf states
B. Arab maritime cooperation
C. Jordan's restoration of Egyptian ties
D. Iraq's rights to its lands
Answer: A
Explanation: Iran's occupation of Iraqi land, continued war and provocation of Gulf states.
Priority: core
Source: Arab League summits (pp. 82–85)

### Q10-030
Question: When had Jordan already restored diplomatic relations with Egypt?
A. 1987
B. 1978
C. 1980
D. 1984
Answer: D
Explanation: 1984. Source context: 2. Restore diplomatic ties with Egypt respecting states' sovereignty. Jordan had already restored them in 1984, forming joint Jordanian–Egyptian committee for economic/trade cooperation.
Priority: core
Source: guide line 899

### Q10-031
Question: What resulted from restored Jordan–Egypt relations?
A. Arab Union
B. Joint economic and trade cooperation committee
C. United Arab Republic
D. New British treaty
Answer: B
Explanation: Joint economic and trade cooperation committee. Source context: 2. Restore diplomatic ties with Egypt respecting states' sovereignty. Jordan had already restored them in 1984, forming joint Jordanian–Egyptian committee for economic/trade cooperation.
Priority: core
Source: guide line 899

### Q10-032
Question: Which states established Arab Maritime Bridge in 1987?
A. Egypt, Saudi Arabia and Kuwait
B. Jordan, Egypt and Iraq
C. Jordan, Iran and Iraq
D. Jordan, Syria and Lebanon
Answer: B
Explanation: Jordan, Egypt and Iraq. Source context: 3. 1987 Arab Maritime Bridge between Jordan, Egypt and Iraq linked Arab East to West, completing shipping route Aqaba–Nuweiba.
Priority: core
Source: guide line 900

### Q10-033
Question: Which shipping route was completed by Arab Maritime Bridge?
A. Cairo–Beirut
B. Amman–Mafraq
C. Disi–Dabuq
D. Aqaba–Nuweiba
Answer: D
Explanation: Aqaba–Nuweiba. Source context: 3. 1987 Arab Maritime Bridge between Jordan, Egypt and Iraq linked Arab East to West, completing shipping route Aqaba–Nuweiba.
Priority: core
Source: guide line 900

### Q10-034
Question: Which leaders were reconciled in 1987 after seven years of estrangement?
A. Sadat and Begin
B. Nasser and King Faisal
C. King Hussein and Glubb
D. Hafez al-Assad and Saddam Hussein
Answer: D
Explanation: Hafez al-Assad and Saddam Hussein. Source context: 4. Reconcile Syrian President Hafez al-Assad and Iraqi President Saddam Hussein after seven years of estrangement due to Syria's support for Iran. Reconciliation failed to last; Syria declined invitation to Arab Cooperation Council in 1989, and in 1991 sided with coalition expelling Iraq from Kuwait.
Priority: core
Source: guide line 901

### Q10-035
Question: Why had Syria and Iraq been estranged?
A. Syria joined Arab Union
B. Iraq supported Syria in 1948
C. Iraq recognized Israel
D. Syria supported Iran
Answer: D
Explanation: Syria supported Iran. Source context: All Arab states except Egypt participated; Egypt's membership suspended and headquarters moved to Tunisia. Baghdad summit November 2, 1978 decided to suspend Egypt, confirmed at Tunis summit November 20, 1979, enforcing boycott. Arab world lost its largest military force (Egypt) and was split during First Gulf War, with Syria/Libya siding with Iran; Iraq advocated restoration of Egypt relations.
Priority: core
Source: guide line 894

### Q10-036
Question: What did Syria do when invited to Arab Cooperation Council in 1989?
A. Joined immediately
B. Declined invitation
C. Dissolved Arab League
D. Became its president
Answer: B
Explanation: Declined invitation. Source context: 4. Reconcile Syrian President Hafez al-Assad and Iraqi President Saddam Hussein after seven years of estrangement due to Syria's support for Iran. Reconciliation failed to last; Syria declined invitation to Arab Cooperation Council in 1989, and in 1991 sided with coalition expelling Iraq from Kuwait.
Priority: core
Source: guide line 901

### Q10-037
Question: Which side did Syria take in 1991 Kuwait crisis?
A. Neither side according to guide
B. Coalition expelling Iraq from Kuwait
C. Iraq's occupation of Kuwait
D. British mandate
Answer: B
Explanation: Coalition expelling Iraq from Kuwait. Source context: 4. Reconcile Syrian President Hafez al-Assad and Iraqi President Saddam Hussein after seven years of estrangement due to Syria's support for Iran. Reconciliation failed to last; Syria declined invitation to Arab Cooperation Council in 1989, and in 1991 sided with coalition expelling Iraq from Kuwait.
Priority: core
Source: guide line 901

### Q10-038
Question: Which Palestinian body was reconciled with Jordanian government at 1987 summit?
A. PLO
B. United Arab Republic
C. Arab Salvation Army
D. Arab Union
Answer: A
Explanation: PLO. Source context: 5. Reconcile Jordanian government and PLO.
Priority: core
Source: guide line 902

### Q10-039
Question: Which interests did 1987 summit prioritize?
A. No national interests
B. Regional over national interests
C. Only foreign interests
D. National over regional interests
Answer: D
Explanation: National over regional interests. Source context: 6. Prioritize national over regional interests.
Priority: core
Source: guide line 903

### Q10-040
Question: What other crises did 1987 summit address?
A. Jordan's 1928 election law
B. Disi tender and drought
C. Ottoman taxes and conscription
D. Lebanese crisis and safety of Hajj pilgrims in Saudi Arabia
Answer: D
Explanation: Lebanese crisis and safety of Hajj pilgrims in Saudi Arabia.
Priority: core
Source: Arab League summits (pp. 82–85)

### Q10-041
Question: Under which king was 2001 First Regular Amman Summit held?
A. King Talal
B. King Hussein
C. King Abdullah II
D. King Abdullah I
Answer: C
Explanation: King Abdullah II. Source context: Under King Abdullah II.
Priority: core
Source: guide line 909

### Q10-042
Question: Which Palestinian activities did 2001 summit support?
A. Rejection of Palestinian refugees' return
B. Dissolution of PLO
C. PLO-led struggle, intifada and UN protection efforts
D. Ending UN involvement
Answer: C
Explanation: PLO-led struggle, intifada and UN protection efforts. Source context: Mobilize Arab resources to liberate occupied territories and support Palestinian struggle led by PLO, support intifada and continue efforts at UN Security Council to protect Palestinian people.
Priority: core
Source: guide line 911

### Q10-043
Question: Which Security Council resolution was cited regarding Lebanon in 2001?
A. 25 (1922)
B. 2334 (2016)
C. 124 (1952)
D. 425 (1978)
Answer: D
Explanation: 425 (1978). Source context: Solidarity with Lebanon against Israeli occupation, including Shebaa Farms, under UN Security Council Resolution 425 (1978); release Lebanese prisoners, remove Israeli landmines and condemn threats against Lebanon and Syria.
Priority: core
Source: guide line 912

### Q10-044
Question: Which Lebanese territory was specifically mentioned in 2001 summit?
A. Gulf of Aqaba
B. Shebaa Farms
C. Negev Desert
D. West Bank
Answer: B
Explanation: Shebaa Farms. Source context: Solidarity with Lebanon against Israeli occupation, including Shebaa Farms, under UN Security Council Resolution 425 (1978); release Lebanese prisoners, remove Israeli landmines and condemn threats against Lebanon and Syria.
Priority: core
Source: guide line 912

### Q10-045
Question: What did 2001 summit call for regarding Lebanon?
A. Support occupation of Lebanon
B. End Lebanese sovereignty
C. Move League headquarters to Lebanon
D. Release prisoners, remove landmines and condemn threats against Lebanon and Syria
Answer: D
Explanation: Release prisoners, remove landmines and condemn threats against Lebanon and Syria. Source context: Solidarity with Lebanon against Israeli occupation, including Shebaa Farms, under UN Security Council Resolution 425 (1978); release Lebanese prisoners, remove Israeli landmines and condemn threats against Lebanon and Syria.
Priority: core
Source: guide line 912

### Q10-046
Question: What right of Palestinian refugees was reaffirmed in 2001?
A. Right of return
B. Right to British citizenship
C. No right to return
D. Right to Jordanian government offices
Answer: A
Explanation: Right of return. Source context: Reaffirm Palestinian refugees' right of return.
Priority: core
Source: guide line 913

### Q10-047
Question: What was 2001 summit's stance toward US sanctions on Sudan?
A. Rejected them and advocated constructive dialogue
B. Did not discuss Sudan
C. Imposed new sanctions itself
D. Supported them without qualification
Answer: A
Explanation: Rejected them and advocated constructive dialogue.
Priority: core
Source: Arab League summits (pp. 82–85)

### Q10-048
Question: Where was first economic conference approved in 2001 to be held?
A. Tunis
B. Cairo
C. Amman
D. Bahrain
Answer: B
Explanation: Cairo. Source context: Approve first economic conference in Cairo.
Priority: core
Source: guide line 915

### Q10-049
Question: Who was first Arab League Secretary-General elected by a summit?
A. Gamal Abdel Nasser
B. Hafez al-Assad
C. Count Bernadotte
D. Amr Moussa
Answer: D
Explanation: Amr Moussa. Source context: Amr Moussa appointed Arab League Secretary-General; first Secretary-General elected by a summit.
Priority: core
Source: guide line 916

### Q10-050
Question: Where was Amman Summit held in 2017?
A. Bahrain
B. Dead Sea, Jordan
C. Cairo
D. Amman city center
Answer: B
Explanation: Dead Sea, Jordan. Source context: Held at Dead Sea, Jordan, all Arab League member states except Syria (membership suspended since 2011).
Priority: core
Source: guide line 920

### Q10-051
Question: Which member state did not attend 2017 summit due to suspended membership?
A. Egypt
B. Syria
C. Lebanon
D. Iraq
Answer: B
Explanation: Syria. Source context: All Arab states except Egypt participated; Egypt's membership suspended and headquarters moved to Tunisia. Baghdad summit November 2, 1978 decided to suspend Egypt, confirmed at Tunis summit November 20, 1979, enforcing boycott. Arab world lost its largest military force (Egypt) and was split during First Gulf War, with Syria/Libya siding with Iran; Iraq advocated restoration of Egypt relations.
Priority: core
Source: guide line 894

### Q10-052
Question: Since when had Syria's membership been suspended according to guide?
A. 2001
B. 2017
C. 1987
D. 2011
Answer: D
Explanation: 2011. Source context: Held at Dead Sea, Jordan, all Arab League member states except Syria (membership suspended since 2011).
Priority: core
Source: guide line 920

### Q10-053
Question: What was the 2017 final statement called?
A. National Charter
B. Balfour Declaration
C. Arab Solidarity Agreement
D. Amman Declaration
Answer: D
Explanation: Amman Declaration. Source context: Final statement: Amman Declaration.
Priority: core
Source: guide line 922

### Q10-054
Question: What was reaffirmed regarding East Jerusalem in 2017?
A. Egyptian administration
B. Arab identity and status as Palestinian capital
C. International trusteeship under 1947 plan only
D. Annexation to Syria
Answer: B
Explanation: Arab identity and status as Palestinian capital. Source context: Centrality of Palestinian cause to Arab nation; Arab identity of occupied East Jerusalem as capital of State of Palestine.
Priority: core
Source: guide line 924

### Q10-055
Question: Which occupied territories did 2017 summit reaffirm Palestinian sovereignty over?
A. Only territories occupied in 1948 excluding Jerusalem
B. Only Shebaa Farms
C. Territories occupied in 1967, including East Jerusalem
D. Only Sinai
Answer: C
Explanation: Territories occupied in 1967, including East Jerusalem. Source context: Reaffirm Palestinian sovereignty over territories occupied in 1967, including East Jerusalem.
Priority: core
Source: guide line 925

### Q10-056
Question: By how much did 2017 summit call to increase Al-Aqsa and Jerusalem Funds?
A. $5 billion
B. $3 billion
C. $500 million
D. $100 million
Answer: C
Explanation: $500 million. Source context: Call to increase capital of Al-Aqsa and Jerusalem Funds by $500 million, and support Palestine's budget for one year.
Priority: core
Source: guide line 926

### Q10-057
Question: For how long did 2017 summit call to support Palestine's budget?
A. One year
B. 25 years
C. Ten years
D. Six months
Answer: A
Explanation: One year. Source context: Call to increase capital of Al-Aqsa and Jerusalem Funds by $500 million, and support Palestine's budget for one year.
Priority: core
Source: guide line 926

### Q10-058
Question: Which Security Council resolution was reiterated in 2017?
A. 124 of 1952
B. 25 of 1922
C. 425 of 1978
D. 2334 of 2016
Answer: D
Explanation: 2334 of 2016. Source context: Reiterate UN Security Council Resolution 2334 of 2016 (the sentence ends mid-thought at bottom of supplied p. 85; next page absent).
Priority: core
Source: guide line 927

### Q10-059
Question: What did the 1964 Cairo summit decide regarding Jordan River water?
A. Abandon all Arab water claims
B. End all regional cooperation
C. Transfer Disi water to Negev
D. Plan to redirect water toward Arab lands
Answer: D
Explanation: Plan to redirect water toward Arab lands. Source context: Decisions: plan to redirect Jordan River waters to Arab lands; establish Palestine Liberation Organization (PLO) without affecting East/West Bank unity.
Priority: core
Source: guide line 877

### Q10-060
Question: What did 1980 summit emphasize about Arab economies?
A. Every Arab country forms economic depth for the others
B. Only oil producers matter
C. Every Arab state must isolate its economy
D. No shared development is possible
Answer: A
Explanation: Every Arab country forms economic depth for the others. Source context: Approve Arab economic cooperation strategy until 2000, based on comprehensive development; Saudi Arabia, Kuwait, Iraq, UAE and Qatar support with $5 billion during 1980s, affirm that every Arab country forms economic depth for others.
Priority: core
Source: guide line 887

### Q10-061
Question: What was Hussein's role before the 1987 summit?
A. Refused participation
B. Organized an Israeli–Egyptian peace treaty himself
C. Ended all Arab diplomatic relations
D. Secured consensus and attendance, visited Egypt/Gulf states and restored Libya relations
Answer: D
Explanation: Secured consensus and attendance, visited Egypt/Gulf states and restored Libya relations. Source context: Hussein secured consensus and attendance, visited Egypt and Gulf states and restored diplomatic relations with Libya. Kuwait said financial aid to Syria depended on better relations with Iraq.
Priority: core
Source: guide line 893

### Q10-062
Question: How did the 2001 summit describe political dialogue over Sudan?
A. Reject sovereignty
B. Support sanctions without dialogue
C. Require foreign intervention in domestic affairs
D. Respect international legitimacy, sovereignty and noninterference
Answer: D
Explanation: Respect international legitimacy, sovereignty and noninterference. Source context: Reject US sanctions on Sudan; constructive political dialogue respecting international legitimacy, sovereignty and noninterference.
Priority: core
Source: guide line 914

### Q10-063
Question: When was first organized Arab League summit in Cairo?
A. March 27–28, 2001
B. January 13–16, 1964
C. November 8–11, 1987
D. November 25–27, 1980
Answer: B
Explanation: January 13–16, 1964. Source context: First Arab League summit in Cairo, January 13–16, 1964, to discuss Israeli diversion of Jordan River tributaries shared by Lebanon, Syria, Jordan, Palestine toward Negev Desert in southern Palestine to accommodate Jewish immigrants.
Priority: core
Source: guide line 875

### Q10-064
Question: When was Regular Amman Summit?
A. November 25–27, 1980
B. March 27–28, 2001
C. March 29, 2017
D. November 8–11, 1987
Answer: A
Explanation: November 25–27, 1980.
Priority: core
Source: Arab League summits (pp. 82–85)

### Q10-065
Question: When was Extraordinary Amman Summit?
A. March 27–28, 2001
B. March 29, 2017
C. November 25–27, 1980
D. November 8–11, 1987
Answer: D
Explanation: November 8–11, 1987.
Priority: core
Source: Arab League summits (pp. 82–85)

### Q10-066
Question: When was First Regular Amman Summit?
A. November 8–11, 1987
B. March 27–28, 2001
C. March 29, 2017
D. November 25–27, 1980
Answer: B
Explanation: March 27–28, 2001.
Priority: core
Source: Arab League summits (pp. 82–85)

### Q10-067
Question: When was the Dead Sea Amman Summit?
A. November 8–11, 1987
B. March 29, 2017
C. March 27–28, 2001
D. November 25–27, 1980
Answer: B
Explanation: March 29, 2017.
Priority: core
Source: Arab League summits (pp. 82–85)

## Chapter 11 — Iran–Iraq War (p. 98) (8 questions)

### Q11-001
Question: Which territorial issues are mentioned in the Iran–Iraq war section?
A. Cyprus, Hejaz and Syria
B. Khuzestan, Arabian Gulf and shared rivers
C. Jerusalem, Latrun and Jenin
D. Aqaba, Ma'an and Disi
Answer: B
Explanation: Khuzestan, Arabian Gulf and shared rivers. Source context: Page begins partway through the discussion; its upper/right edge is partly obscured. The visible text mentions disputes over Khuzestan (Arabistan), the Arabian Gulf and shared rivers, as well as issues connected with Arabism and Islam.
Priority: core
Source: guide line 935

### Q11-002
Question: Why did Jordan support Iraq?
A. Support for Iranian control of Iraq
B. Arab nationalist solidarity and defense of Arab dignity
C. Disi project funding
D. British treaty obligations alone
Answer: B
Explanation: Arab nationalist solidarity and defense of Arab dignity. Source context: Jordan supported Iraq for Arab nationalist reasons, treating attacks on Iraq as attacks on all Arabs and Iraq's defense of dignity as defense of Arab dignity generally.
Priority: core
Source: guide line 937

### Q11-003
Question: Where did Jordan support Iraq diplomatically?
A. Only European Investment Bank
B. Only World Bank
C. Only Jordanian courts
D. UN General Assembly and Arab summits
Answer: D
Explanation: UN General Assembly and Arab summits. Source context: Supported Iraq at UN General Assembly and Arab summits during war.
Priority: core
Source: guide line 938

### Q11-004
Question: How did King Hussein seek to resolve Iran–Iraq conflict?
A. Annexation of Iran
B. Peaceful means
C. Expansion of war
D. Dissolution of Iraq
Answer: B
Explanation: Peaceful means.
Priority: core
Source: Iran–Iraq War (p. 98)

### Q11-005
Question: Which Jordanian port remained open to Iraqi imports?
A. Nuweiba
B. Aqaba
C. Haifa
D. Beirut
Answer: B
Explanation: Aqaba. Source context: Jordan kept Port of Aqaba open to Iraqi imports; benefited Jordanian economy as an alternative to Syrian Mediterranean ports closed to Iraq due to deteriorating relations.
Priority: core
Source: guide line 940

### Q11-006
Question: Why did Aqaba become an important alternative for Iraq?
A. Syrian Mediterranean ports were closed to Iraqi imports
B. Jordan closed its land borders
C. Iraq had no demand for imports
D. Syria opened all ports to Iraq
Answer: A
Explanation: Syrian Mediterranean ports were closed to Iraqi imports. Source context: Jordan kept Port of Aqaba open to Iraqi imports; benefited Jordanian economy as an alternative to Syrian Mediterranean ports closed to Iraq due to deteriorating relations.
Priority: core
Source: guide line 940

### Q11-007
Question: What did Jordan seek after Iran–Iraq war?
A. Agreement respecting Iraqi rights to land and waters
B. Iranian annexation of Iraqi land
C. Formation of British mandate
D. Ending all Iraqi diplomatic relations
Answer: A
Explanation: Agreement respecting Iraqi rights to land and waters. Source context: After war, Jordan continued political/diplomatic support for an agreement requiring Iran to respect Iraq's rights to its land and waters.
Priority: core
Source: guide line 941

### Q11-008
Question: What economic benefit did Jordan receive during Iran–Iraq war?
A. Elimination of Iraqi demand
B. Iraqi imports through Aqaba supported Jordanian economy
C. Loss of all shipping traffic
D. Closure of all trade routes
Answer: B
Explanation: Iraqi imports through Aqaba supported Jordanian economy. Source context: Jordan kept Port of Aqaba open to Iraqi imports; benefited Jordanian economy as an alternative to Syrian Mediterranean ports closed to Iraq due to deteriorating relations.
Priority: core
Source: guide line 940

## Chapter 12 — Democratic and legislative development (pp. 98–103) (64 questions)

### Q12-001
Question: When did Jordan resume democratic life?
A. 1988
B. 1992
C. 1989
D. 1991
Answer: C
Explanation: 1989. Source context: 1989 marked revival of democratic/parliamentary life after suspension of parliamentary governance. Internal political/economic pressures and external regional/global changes drove or supported the reform process.
Priority: core
Source: guide line 947

### Q12-002
Question: What did severance of legal/administrative ties with West Bank enable?
A. PLO responsibility for Palestinian cause and East Bank political restructuring
B. Dissolution of PLO
C. Restoration of British mandate
D. Expansion of joint parliamentary representation
Answer: A
Explanation: PLO responsibility for Palestinian cause and East Bank political restructuring. Source context: 1. Severance of legal and administrative ties with West Bank — July 31, 1988. King Hussein ended ties to resolve political complications following 1974 Rabat Summit. Jordan had maintained East/West Bank parliamentary representation despite Israeli occupation since 1967. Severance allowed PLO full responsibility for Palestinian cause and Jordan to restructure its political system for East Bank, paving way for democratic resumption.
Priority: core
Source: guide line 951

### Q12-003
Question: How were electoral districts reorganized after 1988 severance?
A. To eliminate all elections
B. To represent Syria and Jordan jointly
C. To represent East Bank exclusively
D. To include only West Bank
Answer: C
Explanation: To represent East Bank exclusively. Source context: 2. Reorganization of electoral districts: After severance, districts represented East Bank exclusively; streamlined the previous dual representation system and allowed more focused/inclusive elections.
Priority: core
Source: guide line 952

### Q12-004
Question: When was last joint parliamentary session representing both banks?
A. April 1967
B. July 1988
C. March 1992
D. April 1989
Answer: A
Explanation: April 1967. Source context: 3. Last joint parliamentary representation — April 1967: Last parliamentary session representing both banks before Israeli occupation made electoral ties impossible. Led ultimately to 1988 severance.
Priority: core
Source: guide line 953

### Q12-005
Question: What did 1974 Rabat summit recognize?
A. Arab Union as representative
B. Jordan as sole representative of Palestinians
C. PLO as sole legitimate representative of Palestinians
D. United Arab Republic as representative
Answer: C
Explanation: PLO as sole legitimate representative of Palestinians. Source context: 4. Impact of Rabat Summit, 1974: Arab League recognized PLO as sole legitimate representative of Palestinian people. Jordan could no longer claim Palestinian political representation; necessitated restructuring; 1988 severance followed this shift.
Priority: core
Source: guide line 954

### Q12-006
Question: Why did April Uprising erupt in 1989?
A. Establishment of Arab Union
B. Arab Army Arabization
C. Disi water project inauguration
D. Price increases, economic mismanagement and political stagnation
Answer: D
Explanation: Price increases, economic mismanagement and political stagnation. Source context: 5. April Uprising, 1989: Began in southern Jordan due to steep price increases, economic mismanagement and political stagnation. Protesters demanded government's resignation and restoration of democracy. April 26, 1989: Hussein's speech called for urgent reforms and announced parliamentary elections to restore trust and participation.
Priority: core
Source: guide line 955

### Q12-007
Question: Where did April Uprising begin?
A. Southern Jordan
B. Baghdad
C. Northern Syria
D. Cairo
Answer: A
Explanation: Southern Jordan. Source context: 5. April Uprising, 1989: Began in southern Jordan due to steep price increases, economic mismanagement and political stagnation. Protesters demanded government's resignation and restoration of democracy. April 26, 1989: Hussein's speech called for urgent reforms and announced parliamentary elections to restore trust and participation.
Priority: core
Source: guide line 955

### Q12-008
Question: What did protesters demand in April 1989?
A. Government resignation and restoration of democracy
B. A new Ottoman mandate
C. British military rule
D. Ending elections
Answer: A
Explanation: Government resignation and restoration of democracy. Source context: 5. April Uprising, 1989: Began in southern Jordan due to steep price increases, economic mismanagement and political stagnation. Protesters demanded government's resignation and restoration of democracy. April 26, 1989: Hussein's speech called for urgent reforms and announced parliamentary elections to restore trust and participation.
Priority: core
Source: guide line 955

### Q12-009
Question: What did Hussein announce in April 26, 1989 speech?
A. Urgent reform and parliamentary elections
B. Arab Union creation
C. Dissolution of all representative institutions forever
D. British treaty signing
Answer: A
Explanation: Urgent reform and parliamentary elections. Source context: 5. April Uprising, 1989: Began in southern Jordan due to steep price increases, economic mismanagement and political stagnation. Protesters demanded government's resignation and restoration of democracy. April 26, 1989: Hussein's speech called for urgent reforms and announced parliamentary elections to restore trust and participation.
Priority: core
Source: guide line 955

### Q12-010
Question: Why did Jordanian workers return from Gulf in 1980s?
A. Oil price collapse
B. Ottoman expansion
C. Arab League headquarters move
D. Disi project completion
Answer: A
Explanation: Oil price collapse.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-011
Question: What economic consequence followed workers' return?
A. Increased remittances and no unemployment
B. End of inflation
C. Reduced remittances and higher unemployment
D. Guaranteed fiscal surplus
Answer: C
Explanation: Reduced remittances and higher unemployment. Source context: 1. Return of Jordanian workers from Gulf: Oil prices collapsed in 1980s, thousands of expatriates returned; reduced remittances (previously a major economic support), unemployment and financial strain.
Priority: core
Source: guide line 959

### Q12-012
Question: Why did Gulf financial aid decline?
A. World Bank takeover
B. Regional economic downturn
C. Arab Army Arabization
D. Jordan's population disappeared
Answer: B
Explanation: Regional economic downturn. Source context: 2. Decline in Gulf financial aid: Regional downturn sharply reduced Gulf assistance, worsening fiscal crisis and making domestic/international obligations difficult to meet.
Priority: core
Source: guide line 960

### Q12-013
Question: What characterized Jordan's economic crisis by 1989?
A. Strong dinar and falling debt
B. Large oil export surplus
C. No unemployment
D. Dinar devaluation, debt crisis and inflation
Answer: D
Explanation: Dinar devaluation, debt crisis and inflation. Source context: 3. Economic crisis and currency devaluation: By 1989 dinar plummeted, debt crisis, inflation and government inability to handle downturn fueled discontent. April Uprising demanded economic relief and political change.
Priority: core
Source: guide line 961

### Q12-014
Question: Which is an internal economic factor for democratic reform?
A. Madrid Conference
B. Declining Gulf financial aid
C. Collapse of Soviet Union
D. Oslo Accords
Answer: B
Explanation: Declining Gulf financial aid.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-015
Question: Which is an internal political factor for democratic reform?
A. West Bank legal and administrative severance
B. Gulf remittance decline
C. Collapse of Soviet Union
D. Oil price collapse
Answer: A
Explanation: West Bank legal and administrative severance. Source context: 1. Severance of legal and administrative ties with West Bank — July 31, 1988. King Hussein ended ties to resolve political complications following 1974 Rabat Summit. Jordan had maintained East/West Bank parliamentary representation despite Israeli occupation since 1967. Severance allowed PLO full responsibility for Palestinian cause and Jordan to restructure its political system for East Bank, paving way for democratic resumption.
Priority: core
Source: guide line 951

### Q12-016
Question: Which is a regional external factor associated with democratic consolidation?
A. Dinar devaluation
B. Return of Jordanian workers from Gulf
C. April Uprising itself
D. Arab–Israeli peace process
Answer: D
Explanation: Arab–Israeli peace process. Source context: Arab–Israeli peace process: Early 1990s; Madrid Conference 1991, Oslo Accords, and Wadi Araba Peace Agreement (Jordan–Israel). Improved regional stability and helped Jordan focus on internal political/economic problems, creating a more favorable environment for democratic continuation.
Priority: core
Source: guide line 968

### Q12-017
Question: Which conference began a new phase of peace talks in 1991?
A. Jerusalem Conference 1921
B. Madrid Conference
C. San Remo Conference
D. Cairo Conference 1921
Answer: B
Explanation: Madrid Conference. Source context: Arab–Israeli peace process: Early 1990s; Madrid Conference 1991, Oslo Accords, and Wadi Araba Peace Agreement (Jordan–Israel). Improved regional stability and helped Jordan focus on internal political/economic problems, creating a more favorable environment for democratic continuation.
Priority: core
Source: guide line 968

### Q12-018
Question: Which agreements are mentioned alongside Madrid Conference?
A. Camp David and Arab Union only
B. British treaties 1928 and 1946
C. Jeddah Treaty and Arab Solidarity Agreement
D. Oslo Accords and Wadi Araba Peace Agreement
Answer: D
Explanation: Oslo Accords and Wadi Araba Peace Agreement. Source context: Arab–Israeli peace process: Early 1990s; Madrid Conference 1991, Oslo Accords, and Wadi Araba Peace Agreement (Jordan–Israel). Improved regional stability and helped Jordan focus on internal political/economic problems, creating a more favorable environment for democratic continuation.
Priority: core
Source: guide line 968

### Q12-019
Question: How did regional stability support domestic reform?
A. Prevented all domestic reforms
B. Allowed Jordan to focus on institutions and elections
C. Eliminated political participation
D. Restored military government
Answer: B
Explanation: Allowed Jordan to focus on institutions and elections.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-020
Question: Which global event occurred in 1991 and supported democratic trends?
A. Fall of Ottoman Empire
B. 1948 partition plan
C. Collapse of Soviet Union
D. Creation of Arab Union
Answer: C
Explanation: Collapse of Soviet Union. Source context: Collapse of Soviet Union, 1991: End of Cold War, global spread of capitalist democracies, movement away from authoritarian governments, pressure toward democracy and human rights.
Priority: core
Source: guide line 973

### Q12-021
Question: What global political trend supported democratic reform?
A. Rejection of democratic participation
B. Expansion of colonial mandates
C. Abolition of civil liberties
D. Democracy and human rights after Cold War
Answer: D
Explanation: Democracy and human rights after Cold War. Source context: Global emphasis on democracy and human rights: Post-Cold War values encouraged Jordan to adopt more open, participatory political systems and supported democratic reform.
Priority: core
Source: guide line 974

### Q12-022
Question: How should early 1990s peace events be understood relative to 1989?
A. They occurred before 1989
B. They supported later consolidation rather than preceding 1989
C. They were events of Ottoman period
D. They ended Jordan's democracy in 1989
Answer: B
Explanation: They supported later consolidation rather than preceding 1989.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-023
Question: Which regulations were canceled by instructions as described in guide?
A. Martial Law Regulations No. 1 of 1991
B. Defense Law No. 13 of 1992
C. Political Parties Law of 1992
D. Basic Law of 1928
Answer: A
Explanation: Martial Law Regulations No. 1 of 1991. Source context: Issuance of instructions to cancel prevailing Martial Law Regulations No. 1 of 1991, as worded in the source.
Priority: core
Source: guide line 980

### Q12-024
Question: When was Jordanian National Charter issued?
A. 1992
B. 1993
C. 1991
D. 1989
Answer: C
Explanation: 1991. Source context: Jordanian National Charter, 1991.
Priority: core
Source: guide line 981

### Q12-025
Question: What did Political Parties Law 1992 enable?
A. Cancellation of parliamentary elections
B. Permanent ban on parties
C. British rule
D. Formation of new political parties
Answer: D
Explanation: Formation of new political parties.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-026
Question: What was original Publications and Publishing Law number and year?
A. No. 1 of 1953
B. No. 7 of 1992
C. No. 13 of 1992
D. No. 10 of 1993
Answer: D
Explanation: No. 10 of 1993.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-027
Question: Which publications law amendment was issued in 1997?
A. No. 8
B. No. 27
C. No. 24
D. No. 30
Answer: B
Explanation: No. 27.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-028
Question: Which publications law amendment was issued in 1998?
A. No. 27
B. No. 30
C. No. 24
D. No. 8
Answer: D
Explanation: No. 8.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-029
Question: Which publications law amendment was issued in 1999?
A. No. 30
B. No. 8
C. No. 27
D. No. 24
Answer: A
Explanation: No. 30.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-030
Question: Which temporary publications law was issued in 2003?
A. No. 8
B. No. 13
C. No. 24
D. No. 30
Answer: C
Explanation: No. 24.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-031
Question: In which year was temporary Publications Law No. 24 annulled?
A. 1997
B. 2003
C. 1999
D. 2007
Answer: D
Explanation: 2007.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-032
Question: Which amended publications law was issued in 2007 to be read with No. 8 of 1998?
A. No. 10
B. No. 24
C. No. 30
D. No. 27
Answer: D
Explanation: No. 27.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-033
Question: Which law canceled Defense Law of 1935?
A. Publications Law No. 10 of 1993
B. Anti-Communism Law No. 1 of 1953
C. Political Parties Law 1992
D. Defense Law No. 13 of 1992
Answer: D
Explanation: Defense Law No. 13 of 1992.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-034
Question: Who receives exceptional authority under Defense Law No. 13?
A. Arab League Secretary-General
B. British High Commissioner
C. Director of Audit Bureau
D. Prime Minister
Answer: D
Explanation: Prime Minister.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-035
Question: Which conditions can trigger Defense Law measures?
A. Routine elections and school holidays
B. Economic competition alone
C. Normal diplomatic visits
D. War, internal unrest, general disasters or epidemics
Answer: D
Explanation: War, internal unrest, general disasters or epidemics.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-036
Question: Which law abolished Anti-Communism Law?
A. No. 7 of 1992
B. No. 10 of 1993
C. No. 24 of 2003
D. No. 13 of 1992
Answer: A
Explanation: No. 7 of 1992.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-037
Question: Which law was repealed by No. 7 of 1992?
A. Basic Law of 1928
B. Defense Law of 1935
C. Publications Law No. 10 of 1993
D. Anti-Communism Law No. 1 of 1953
Answer: D
Explanation: Anti-Communism Law No. 1 of 1953.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-038
Question: When did idea of Legislative Council in Transjordan originate?
A. 1928
B. 1923
C. 1989
D. 1947
Answer: B
Explanation: 1923.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-039
Question: Who chaired elected committee of people's representatives in 1923?
A. Fawzi Al-Mulqi
B. Rashid Tali'a
C. Hassan Khalid Abu Al-Huda
D. Ibrahim Hashem
Answer: D
Explanation: Ibrahim Hashem. Source context: Idea dates to 1923. Prince Abdullah approved elected committee of people's representatives chaired by Ibrahim Hashem, Minister of Justice.
Priority: core
Source: guide line 1011

### Q12-040
Question: What position did Ibrahim Hashem hold in 1923 committee discussion?
A. Minister of Justice
B. Chief of Staff
C. British High Commissioner
D. Arab League Secretary-General
Answer: A
Explanation: Minister of Justice. Source context: Idea dates to 1923. Prince Abdullah approved elected committee of people's representatives chaired by Ibrahim Hashem, Minister of Justice.
Priority: core
Source: guide line 1011

### Q12-041
Question: What was the 1923 committee's task?
A. Cancel political parties
B. Organize Arab Union
C. Draft election law based on ordinary legal representation
D. Draft Disi water project
Answer: C
Explanation: Draft election law based on ordinary legal representation. Source context: Task: draft election law based on ordinary legal representation.
Priority: core
Source: guide line 1012

### Q12-042
Question: What was formed in 1924?
A. Arab Union parliament
B. Audit Bureau
C. First Legislative Council itself
D. Preparatory committee to draft Basic Law
Answer: D
Explanation: Preparatory committee to draft Basic Law. Source context: 1924: Preparatory committee formed to draft Basic Law. Work completed, government ready for elections, but British mandate delayed until 1928.
Priority: core
Source: guide line 1013

### Q12-043
Question: Why were elections delayed until 1928?
A. Jordan had no representatives
B. British mandate delayed them
C. No preparatory work was completed
D. Arab Union opposed them
Answer: B
Explanation: British mandate delayed them. Source context: 1924: Preparatory committee formed to draft Basic Law. Work completed, government ready for elections, but British mandate delayed until 1928.
Priority: core
Source: guide line 1013

### Q12-044
Question: Which article of 1928 treaty required Basic Law?
A. Article 25
B. Article 124
C. Article 2
D. Article 125
Answer: C
Explanation: Article 2. Source context: February 20, 1928: First Jordanian–British treaty signed; Article 2 required Basic Law.
Priority: core
Source: guide line 1014

### Q12-045
Question: Which Basic Law articles outlined legislative authority?
A. 15–21
B. 1–7
C. 124–125
D. 25–41
Answer: D
Explanation: 25–41. Source context: April 16, 1928: Basic Law issued; Articles 25–41 outlined legislative authority vested in Prince and Legislative Council.
Priority: core
Source: guide line 1015

### Q12-046
Question: Who held legislative authority under Basic Law?
A. Arab League
B. Prince and Legislative Council
C. Prime Minister alone
D. British High Commissioner alone
Answer: B
Explanation: Prince and Legislative Council. Source context: April 16, 1928: Basic Law issued; Articles 25–41 outlined legislative authority vested in Prince and Legislative Council.
Priority: core
Source: guide line 1015

### Q12-047
Question: What representation was ensured in Legislative Council?
A. No elected representatives
B. Only appointed military personnel
C. Only one religious community
D. Fair representation for minorities
Answer: D
Explanation: Fair representation for minorities. Source context: Elected representatives in accordance with election law, with fair representation for minorities.
Priority: core
Source: guide line 1019

### Q12-048
Question: Who served in Legislative Council besides elected representatives?
A. Only British officers
B. King and all military officers
C. Prime Minister and up to five other cabinet members
D. All Arab League delegates
Answer: C
Explanation: Prime Minister and up to five other cabinet members.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

### Q12-049
Question: Which law matches this purpose or detail: Freedom to form new political parties.?
A. Political Parties Law
B. Election Law
C. Defense Law
D. Abolition of Anti-Communism Law
Answer: A
Explanation: Political Parties Law | 1992 | Freedom to form new political parties.
Priority: core
Source: guide line 985

### Q12-050
Question: Which law matches this purpose or detail: Amended by No. 27 of 1997, No. 8 of 1998, No. 30 of 1999; temporary/amended Law No. 24 of 2003, annulled by declaration in 2007; amended Law No. 27 of 2007 read with No. 8 of 1998.?
A. Abolition of Anti-Communism Law
B. Publications and Publishing Law
C. Political Parties Law
D. Election Law
Answer: B
Explanation: Publications and Publishing Law | No. 10 of 1993 | Amended by No. 27 of 1997, No. 8 of 1998, No. 30 of 1999; temporary/amended Law No. 24 of 2003, annulled by declaration in 2007; amended Law No. 27 of 2007 read with No. 8 of 1998.
Priority: core
Source: guide line 986

### Q12-051
Question: Which law matches this purpose or detail: Canceled Defense Law of 1935; gives PM authority to take necessary measures beyond ordinary laws in emergencies threatening security/safety in whole or part of kingdom: war, internal unrest, general disasters or epidemics.?
A. Abolition of Anti-Communism Law
B. Defense Law
C. Publications and Publishing Law
D. Political Parties Law
Answer: B
Explanation: Defense Law | No. 13 of 1992, March 25, 1992 | Canceled Defense Law of 1935; gives PM authority to take necessary measures beyond ordinary laws in emergencies threatening security/safety in whole or part of kingdom: war, internal unrest, general disasters or epidemics.
Priority: core
Source: guide line 987

### Q12-052
Question: Which law matches this purpose or detail: Repealed Anti-Communism Law No. 1 of 1953.?
A. Abolition of Anti-Communism Law
B. Publications and Publishing Law
C. Political Parties Law
D. Election Law
Answer: A
Explanation: Abolition of Anti-Communism Law | No. 7 of 1992 | Repealed Anti-Communism Law No. 1 of 1953.
Priority: core
Source: guide line 988

### Q12-053
Question: Which law matches this purpose or detail: Produced parliaments listed below.?
A. Election Law
B. Political Parties Law
C. Publications and Publishing Law
D. Defense Law
Answer: A
Explanation: Election Law | Numerous amendments | Produced parliaments listed below.
Priority: core
Source: guide line 989

### Q12-054
Question: What was the printed parliamentary term of the Eleventh Parliament?
A. 1993–1997
B. 1989–1993
C. 2007–2011
D. 2016–2020
Answer: B
Explanation: Eleventh | 1989–1993
Priority: core
Source: guide line 995

### Q12-055
Question: What was the printed parliamentary term of the Twelfth Parliament?
A. 2003–2007
B. 1993–1997
C. 1989–1993
D. 2020–2024
Answer: B
Explanation: Twelfth | 1993–1997
Priority: core
Source: guide line 996

### Q12-056
Question: What was the printed parliamentary term of the Thirteenth Parliament?
A. 1989–1993
B. 2013–2016
C. 2003–2007
D. 1997–2001
Answer: D
Explanation: Thirteenth | 1997–2001
Priority: core
Source: guide line 997

### Q12-057
Question: What was the printed parliamentary term of the Fourteenth Parliament?
A. 2016–2020
B. 1993–1997
C. 1997–2001
D. 2003–2007
Answer: D
Explanation: Fourteenth | 2003–2007
Priority: core
Source: guide line 998

### Q12-058
Question: What was the printed parliamentary term of the Fifteenth Parliament?
A. 2013–2016
B. 1989–1993
C. 2007–2011
D. 2010–2013
Answer: C
Explanation: Fifteenth | 2007–2011
Priority: core
Source: guide line 999

### Q12-059
Question: What was the printed parliamentary term of the Sixteenth Parliament?
A. 1997–2001
B. 2003–2007
C. 2016–2020
D. 2010–2013
Answer: D
Explanation: Sixteenth | 2010–2013
Priority: core
Source: guide line 1000

### Q12-060
Question: What was the printed parliamentary term of the Seventeenth Parliament?
A. 2007–2011
B. 2013–2016
C. 2020–2024
D. 2003–2007
Answer: B
Explanation: Seventeenth | 2013–2016
Priority: core
Source: guide line 1001

### Q12-061
Question: What was the printed parliamentary term of the Eighteenth Parliament?
A. 1993–1997
B. 1989–1993
C. 2003–2007
D. 2016–2020
Answer: D
Explanation: Eighteenth | 2016–2020
Priority: core
Source: guide line 1002

### Q12-062
Question: What was the printed parliamentary term of the Nineteenth Parliament?
A. 2007–2011
B. 2010–2013
C. 2020–2024
D. 1989–1993
Answer: C
Explanation: Nineteenth | 2020–2024
Priority: core
Source: guide line 1003

### Q12-063
Question: When were legal and administrative ties with West Bank severed?
A. April 1967
B. April 26, 1989
C. March 25, 1992
D. July 31, 1988
Answer: D
Explanation: July 31, 1988. Source context: 1. Severance of legal and administrative ties with West Bank — July 31, 1988. King Hussein ended ties to resolve political complications following 1974 Rabat Summit. Jordan had maintained East/West Bank parliamentary representation despite Israeli occupation since 1967. Severance allowed PLO full responsibility for Palestinian cause and Jordan to restructure its political system for East Bank, paving way for democratic resumption.
Priority: core
Source: guide line 951

### Q12-064
Question: When was Defense Law No. 13 issued?
A. April 26, 1989
B. April 16, 1928
C. July 31, 1988
D. March 25, 1992
Answer: D
Explanation: March 25, 1992.
Priority: core
Source: Democratic and legislative development (pp. 98–103)

## Original mock exam (70 questions)

### M001
Question: Which concept refers to the legal rights of others and fulfilling corresponding duties?
A. Nationalism
B. Citizenship
C. National unity
D. Loyalty
Answer: B
Explanation: Citizenship.
Priority: mock
Source: original guide section 14, question 1

### M002
Question: Which pillar includes studying the constitution?
A. Emotional
B. Practical
C. Intellectual
D. Economic
Answer: C
Explanation: Intellectual.
Priority: mock
Source: original guide section 14, question 2

### M003
Question: Volunteering in a community project is part of which pillar?
A. Intellectual
B. Practical
C. Emotional
D. Judicial
Answer: B
Explanation: Practical.
Priority: mock
Source: original guide section 14, question 3

### M004
Question: Celebrating national holidays is mainly which pillar?
A. Emotional
B. Practical
C. Intellectual
D. Legal
Answer: A
Explanation: Emotional.
Priority: mock
Source: original guide section 14, question 4

### M005
Question: Which democratic feature means that citizens are the source of government authority?
A. Pluralism
B. Transparency
C. Rule of law
D. Popular sovereignty
Answer: D
Explanation: Popular sovereignty.
Priority: mock
Source: original guide section 14, question 5

### M006
Question: Referendums are examples of:
A. Representative democracy
B. Direct democracy
C. Nationalism
D. Political development
Answer: B
Explanation: Direct democracy.
Priority: mock
Source: original guide section 14, question 6

### M007
Question: Which body approves regulations after the Legislation and Opinion Bureau redrafts them?
A. Cabinet
B. General director
C. House speaker
D. President of institution
Answer: A
Explanation: Cabinet.
Priority: mock
Source: original guide section 14, question 7

### M008
Question: Which can be approved by a general director or minister to apply provisions of a law or regulation?
A. Constitution
B. Regulation
C. Instructions
D. Treaty
Answer: C
Explanation: Instructions.
Priority: mock
Source: original guide section 14, question 8

### M009
Question: What is the first and generally most influential political socialization agent?
A. Media
B. Family
C. School
D. Parliament
Answer: B
Explanation: Family.
Priority: mock
Source: original guide section 14, question 9

### M010
Question: Which is indirect political socialization?
A. Explicit civics lesson
B. Formal political teaching
C. Family discussion
D. Written curriculum instruction
Answer: C
Explanation: Family discussion.
Priority: mock
Source: original guide section 14, question 10

### M011
Question: Which term concerns the evolution and maturation of political systems?
A. Political culture
B. Political development
C. Political socialization
D. National identity
Answer: B
Explanation: Political development.
Priority: mock
Source: original guide section 14, question 11

### M012
Question: Which is a Bedouin value?
A. Material profit
B. Modernization
C. Lineage loyalty
D. Competition
Answer: C
Explanation: Lineage loyalty.
Priority: mock
Source: original guide section 14, question 12

### M013
Question: Which constitutional article addresses Defense Law?
A. 15
B. 125
C. 124
D. 25
Answer: C
Explanation: 124.
Priority: mock
Source: original guide section 14, question 13

### M014
Question: Who proposed Heartland Theory?
A. Nicholas Spykman
B. Halford Mackinder
C. Winston Churchill
D. Ibn Manzur
Answer: B
Explanation: Halford Mackinder.
Priority: mock
Source: original guide section 14, question 14

### M015
Question: Which geopolitical theory emphasizes coastal Eurasia?
A. Rimland
B. Heartland
C. National unity
D. Political culture
Answer: A
Explanation: Rimland.
Priority: mock
Source: original guide section 14, question 15

### M016
Question: Jordan's total territory is:
A. 88,778 km²
B. 89,318 km²
C. 89,138 km²
D. 78,400 km²
Answer: B
Explanation: 89,318 km².
Priority: mock
Source: original guide section 14, question 16

### M017
Question: Jordan's coastline is approximately:
A. 16 km
B. 85 km
C. 26 km
D. 54 km
Answer: C
Explanation: 26 km.
Priority: mock
Source: original guide section 14, question 17

### M018
Question: Badia covers approximately:
A. 92%
B. 78.4%
C. 75%
D. 36%
Answer: B
Explanation: 78.4%.
Priority: mock
Source: original guide section 14, question 18

### M019
Question: The highest 2021 rainfall was recorded at:
A. King Hussein Airport
B. Ras Munif
C. Azraq
D. Ma'an
Answer: B
Explanation: Ras Munif.
Priority: mock
Source: original guide section 14, question 19

### M020
Question: The largest single age group in the source is:
A. 0–14
B. 15–24
C. 25–54
D. 65+
Answer: C
Explanation: 25–54.
Priority: mock
Source: original guide section 14, question 20

### M021
Question: Jordan's 2015 Jordanian-citizen share was:
A. 31%
B. 92%
C. 69%
D. 75%
Answer: C
Explanation: 69%.
Priority: mock
Source: original guide section 14, question 21

### M022
Question: How many House seats are allocated specifically to Christians according to the book?
A. 6
B. 9
C. 12
D. 16
Answer: B
Explanation: 9.
Priority: mock
Source: original guide section 14, question 22

### M023
Question: The Jordan River originates at:
A. Mount Hermon
B. Dead Sea
C. Jebel Umm ad Dami
D. Gulf of Aqaba
Answer: A
Explanation: Mount Hermon.
Priority: mock
Source: original guide section 14, question 23

### M024
Question: In Greek, the name Jordan refers to:
A. Strength
B. Drowsiness
C. Water descending from high to low
D. Unity
Answer: C
Explanation: Water descending from high to low.
Priority: mock
Source: original guide section 14, question 24

### M025
Question: What percentage of Jordan's average rainfall evaporates?
A. 78.4%
B. 90–92%
C. 69%
D. 60%
Answer: B
Explanation: 90–92%.
Priority: mock
Source: original guide section 14, question 25

### M026
Question: Estimated annual surface water is:
A. 275 million m³
B. 400 million m³
C. 692 million m³
D. 60 million m³
Answer: C
Explanation: 692 million m³.
Priority: mock
Source: original guide section 14, question 26

### M027
Question: Which is a non-conventional water source?
A. River water
B. Treated wastewater
C. Groundwater
D. Spring water
Answer: B
Explanation: Treated wastewater.
Priority: mock
Source: original guide section 14, question 27

### M028
Question: Renewable groundwater within safe limits is estimated at:
A. 692 million m³
B. 18 million m³
C. 275 million m³
D. 475 million m³
Answer: C
Explanation: 275 million m³.
Priority: mock
Source: original guide section 14, question 28

### M029
Question: Which project supplies 100 million m³ of drinking water annually to Amman?
A. Red–Dead
B. Disi
C. King Talal
D. Wadi Araba
Answer: B
Explanation: Disi.
Priority: mock
Source: original guide section 14, question 29

### M030
Question: Which company obtained the Disi tender?
A. Tapline
B. Gama Energy
C. EIB
D. AFD
Answer: B
Explanation: Gama Energy.
Priority: mock
Source: original guide section 14, question 30

### M031
Question: What does BOT stand for?
A. Build, Operate, Transfer
B. Buy, Own, Trade
C. Build, Organize, Test
D. Bank, Operate, Transfer
Answer: A
Explanation: Build, Operate, Transfer.
Priority: mock
Source: original guide section 14, question 31

### M032
Question: Which battle established Ottoman control of Jordan and Palestine?
A. Ridaniya
B. Maysalun
C. Marj Dabiq
D. Latrun
Answer: C
Explanation: Marj Dabiq.
Priority: mock
Source: original guide section 14, question 32

### M033
Question: Which religious movement was in Sudan?
A. Sanusi
B. Mahdist
C. Wahhabi
D. Turkification
Answer: B
Explanation: Mahdist.
Priority: mock
Source: original guide section 14, question 33

### M034
Question: Who was Syria's War Minister killed at Maysalun?
A. Rashid Tali'a
B. Yusuf Al-Azma
C. Mazhar Arslan
D. Faisal
Answer: B
Explanation: Yusuf Al-Azma.
Priority: mock
Source: original guide section 14, question 34

### M035
Question: Who headed the Balqa local government?
A. Ali Khulqi Al-Sharayri
B. Rafeefan Al-Majali
C. Mazhar Arslan
D. Kulaib Al-Shreida
Answer: C
Explanation: Mazhar Arslan.
Priority: mock
Source: original guide section 14, question 35

### M036
Question: When did Abdullah arrive in Amman?
A. October 21, 1920
B. March 2, 1921
C. April 11, 1921
D. May 25, 1923
Answer: B
Explanation: March 2, 1921.
Priority: mock
Source: original guide section 14, question 36

### M037
Question: Who chaired the Cairo Conference of 1921?
A. Herbert Samuel
B. Lord Plumer
C. Winston Churchill
D. Harry Truman
Answer: C
Explanation: Winston Churchill.
Priority: mock
Source: original guide section 14, question 37

### M038
Question: The Jerusalem Conference agreement lasted:
A. 25 years
B. 10 years
C. Six months renewable
D. One year
Answer: C
Explanation: Six months renewable.
Priority: mock
Source: original guide section 14, question 38

### M039
Question: First Prime Minister of the Emirate was:
A. Fawzi Al-Mulqi
B. Ibrahim Hashem
C. Rashid Tali'a
D. Suleiman Nabulsi
Answer: C
Explanation: Rashid Tali'a.
Priority: mock
Source: original guide section 14, question 39

### M040
Question: The Adwan uprising took place in:
A. 1921
B. 1923
C. 1926
D. 1928
Answer: B
Explanation: 1923.
Priority: mock
Source: original guide section 14, question 40

### M041
Question: The first Anglo-Jordanian treaty included how many articles?
A. 16
B. 21
C. 25
D. 41
Answer: B
Explanation: 21.
Priority: mock
Source: original guide section 14, question 41

### M042
Question: Where was the First National Conference held in 1928?
A. Hamdan Cafe
B. Cairo
C. Salt
D. Jerusalem
Answer: A
Explanation: Hamdan Cafe.
Priority: mock
Source: original guide section 14, question 42

### M043
Question: Treaty of Independence was signed:
A. March 22, 1946
B. May 25, 1946
C. March 15, 1948
D. February 20, 1928
Answer: A
Explanation: March 22, 1946.
Priority: mock
Source: original guide section 14, question 43

### M044
Question: What form of government was proclaimed on May 25, 1946?
A. Republic
B. Hereditary parliamentary monarchy
C. Military administration
D. Federal union
Answer: B
Explanation: Hereditary parliamentary monarchy.
Priority: mock
Source: original guide section 14, question 44

### M045
Question: The 1948 treaty retained British air units at:
A. Amman and Zizia
B. Amman and Mafraq
C. Aqaba and Ma'an
D. Salt and Irbid
Answer: B
Explanation: Amman and Mafraq.
Priority: mock
Source: original guide section 14, question 45

### M046
Question: The UN partition plan was approved on:
A. November 29, 1947
B. December 20, 1947
C. May 15, 1948
D. June 11, 1948
Answer: A
Explanation: November 29, 1947.
Priority: mock
Source: original guide section 14, question 46

### M047
Question: Under partition, Jerusalem was to be under:
A. Egyptian rule
B. British annexation
C. International trusteeship
D. Iraqi rule
Answer: C
Explanation: International trusteeship.
Priority: mock
Source: original guide section 14, question 47

### M048
Question: The UN mediator during 1948 war was:
A. Harry Truman
B. Count Folke Bernadotte
C. David Ben-Gurion
D. Anthony Eden
Answer: B
Explanation: Count Folke Bernadotte.
Priority: mock
Source: original guide section 14, question 48

### M049
Question: First truce in 1948 began:
A. July 9
B. July 18
C. June 11
D. May 16
Answer: C
Explanation: June 11.
Priority: mock
Source: original guide section 14, question 49

### M050
Question: Jordan–Israel armistice was signed:
A. February 24, 1949
B. March 23, 1949
C. April 3, 1949
D. July 20, 1949
Answer: C
Explanation: April 3, 1949.
Priority: mock
Source: original guide section 14, question 50

### M051
Question: Which institution was established in 1952 to supervise revenues and expenditures?
A. Audit Bureau
B. PLO
C. Arab Union
D. Legislation and Opinion Bureau
Answer: A
Explanation: Audit Bureau.
Priority: mock
Source: original guide section 14, question 51

### M052
Question: Which book was originally published in French?
A. My War with Israel
B. The Duties of King
C. Mon Métier de Roi
D. Uneasy Lies the Head
Answer: C
Explanation: Mon Métier de Roi.
Priority: mock
Source: original guide section 14, question 52

### M053
Question: When was the Arab Army Arabized?
A. March 13, 1957
B. March 1, 1956
C. August 11, 1952
D. October 21, 1956
Answer: B
Explanation: March 1, 1956.
Priority: mock
Source: original guide section 14, question 53

### M054
Question: Who replaced Glubb as Chief of Staff?
A. Patrick Coe
B. Radi Annab
C. Frederick Peake
D. Major Hutton
Answer: B
Explanation: Radi Annab.
Priority: mock
Source: original guide section 14, question 54

### M055
Question: Jordanian–British alliance cancellation agreement signed:
A. January 19, 1957
B. July 7, 1957
C. March 13, 1957
D. February 13, 1957
Answer: C
Explanation: March 13, 1957.
Priority: mock
Source: original guide section 14, question 55

### M056
Question: The Arab Solidarity Agreement provided annually:
A. £10m
B. £5m
C. £12.5m
D. £2.5m
Answer: C
Explanation: £12.5m.
Priority: mock
Source: original guide section 14, question 56

### M057
Question: The Arab Union of 1958 consisted of:
A. Egypt and Syria
B. Jordan and Iraq
C. Jordan and Egypt
D. Syria and Iraq
Answer: B
Explanation: Jordan and Iraq.
Priority: mock
Source: original guide section 14, question 57

### M058
Question: Who was president of the Arab Union?
A. King Hussein
B. Nasser
C. King Faisal
D. King Saud
Answer: C
Explanation: King Faisal.
Priority: mock
Source: original guide section 14, question 58

### M059
Question: The first organized Arab League summit was in:
A. Amman 1980
B. Cairo 1964
C. Bahrain 2024
D. Tunis 1979
Answer: B
Explanation: Cairo 1964.
Priority: mock
Source: original guide section 14, question 59

### M060
Question: Which summit was called the Reconciliation and Agreement Summit?
A. Amman 1980
B. Cairo 1964
C. Amman 1987
D. Dead Sea 2017
Answer: C
Explanation: Amman 1987.
Priority: mock
Source: original guide section 14, question 60

### M061
Question: Amr Moussa became Secretary-General at which summit?
A. Amman 2001
B. Amman 1987
C. Amman 1980
D. Bahrain 2024
Answer: A
Explanation: Amman 2001.
Priority: mock
Source: original guide section 14, question 61

### M062
Question: Amman Declaration of 2017 was issued at:
A. Cairo
B. Dead Sea
C. Aqaba
D. Irbid
Answer: B
Explanation: Dead Sea.
Priority: mock
Source: original guide section 14, question 62

### M063
Question: Which summit recognized PLO as sole legitimate representative of Palestinians?
A. Rabat 1974
B. Cairo 1964
C. Amman 1980
D. Baghdad 1978
Answer: A
Explanation: Rabat 1974.
Priority: mock
Source: original guide section 14, question 63

### M064
Question: When did Jordan sever legal and administrative ties with West Bank?
A. April 1967
B. July 31, 1988
C. April 26, 1989
D. March 25, 1992
Answer: B
Explanation: July 31, 1988.
Priority: mock
Source: original guide section 14, question 64

### M065
Question: Which of these was an internal economic factor leading to democracy resumption?
A. Collapse of Soviet Union
B. Madrid Conference
C. Decline of Gulf financial support
D. Oslo Accords
Answer: C
Explanation: Decline of Gulf financial support.
Priority: mock
Source: original guide section 14, question 65

### M066
Question: When did democratic life resume?
A. 1988
B. 1991
C. 1992
D. 1989
Answer: D
Explanation: 1989.
Priority: mock
Source: original guide section 14, question 66

### M067
Question: Jordanian National Charter was issued in:
A. 1928
B. 1989
C. 1991
D. 1993
Answer: C
Explanation: 1991.
Priority: mock
Source: original guide section 14, question 67

### M068
Question: Defense Law No. 13 was issued on:
A. March 25, 1992
B. April 26, 1989
C. July 31, 1988
D. April 16, 1928
Answer: A
Explanation: March 25, 1992.
Priority: mock
Source: original guide section 14, question 68

### M069
Question: Which parliament covered 1989–1993?
A. Tenth
B. Eleventh
C. Twelfth
D. Thirteenth
Answer: B
Explanation: Eleventh.
Priority: mock
Source: original guide section 14, question 69

### M070
Question: Who chaired the 1923 committee to draft election law?
A. Rashid Tali'a
B. Fawzi Al-Mulqi
C. Ibrahim Hashem
D. Hassan Khalid Abu Al-Huda
Answer: C
Explanation: Ibrahim Hashem.
Priority: mock
Source: original guide section 14, question 70
