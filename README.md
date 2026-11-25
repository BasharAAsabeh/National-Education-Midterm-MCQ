# National Education Study Quiz

Open `dist/quiz.html` in a current browser to study immediately after a build. This single file works offline. Progress is saved in that browser for the same file location. The development server and offline file each have their own saved progress.

## Run locally on Windows

In this workspace, start the development server from PowerShell with the bundled Node.js runtime:

```powershell
.\start-dev.cmd
```

Open the local URL Vite prints. On a fresh checkout, the launcher uses Node.js 22.16 or later and npm from your PATH. You can also run the standard commands directly:

```powershell
npm install
npm run dev
```

Use `npm test` to verify the complete question bank and study logic, and `npm run build` to generate the production site and `dist/quiz.html`. `npm run preview` serves the production build locally.

## Publish on GitHub Pages

In the GitHub repository, open **Settings → Pages** and select **GitHub Actions** under **Build and deployment → Source**. Push the included Pages workflow to `main`, or run it from the **Actions** tab if it is already on GitHub. The workflow builds and publishes `dist`, and the successful deployment shows the shareable URL. Use a public repository if publishing with GitHub Free.

## Study controls

- Quick Study covers 741 core questions. All Questions adds 131 detailed questions, and Mock Exam covers the original 70 questions.
- Use `1`–`4` to choose, `Space` or `R` to reveal, `Enter` to continue after a response, and the arrow keys to navigate. Jump to question can open any numbered question in the current mode.
- Study Settings controls independent question and choice shuffling and delayed mock feedback. The browser saves progress, bookmarks, quiz order, and settings. Reset Progress asks for confirmation.

The Markdown in the project folder is the canonical source. The quiz uses the original prompts, options, answer keys, explanations, priorities, and source references. The mock source has no topic field, so results group mock questions by their corresponding study chapter.
