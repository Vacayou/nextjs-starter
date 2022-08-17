This project is a Next.js starter kit, which includes all the base tooling needed for a React project using Next.js.

Project Includes:

-   TypeScript configs
-   ESLint
-   Prettier auto-formatting
-   Automatic lint checks using lint-staged and Husky
-   Sentry error logging
-   Firebase Auth
-   Firebase Admin

## Steps used to provision this project:

1. `npx create-next-app@latest --typescript` to install the base Next.js project with TypeScript
2. `npm run lint` runs ESLint for the first time and configures the "next/core-web-vitals" extension.
3. `npm install --save-dev eslint-config-prettier` to configure ESLint ant Prettier to work together.
4. Add "prettier" to the ESLint config.
5. Add a the `.prettierrc` config file with the following default configurations:

```
{
  "printWidth": 120,
  "tabWidth": 4
}

```

6. Install Husky and lint-staged with `npm install --save-dev husky lint-staged`
7. Add script to `package.json` to install Husky: `"prepare": "husky install"`
8. Add `.lintstagedrc.js` and copy and paste config from [this Next.js documentation](https://nextjs.org/docs/basic-features/eslint#lint-staged).
9. Run script to install Husky: `npm run prepare`
10. Add the following lint-staged config to `package.json`:

```
"lint-staged": {
        "*.{ts,js,tsx,jsx}": "eslint --cache --fix",
        "*.{ts,js,tsx,jsx,css,md,json}": "prettier --write"
    }
```

11. Add a precommit hook to run lint-staged on every git commit: `npx husky add .husky/pre-commit "npx lint-staged"`
12. Add Sentry package: `npm install --save @sentry/nextjs`

## Getting Started

### Add Sentry to New Project

1. Go to https://sentry.io/organizations/vacayou/projects/new/ to add a new project
2. Select Next.js as the platform
3. Configure your desired settings, then click "Create Project"
4. Run the "Sentry Wizard" command to setup the project: `npx @sentry/wizard -i nextjs`
5. Follow the steps for the Sentry Wizard, and resolve any file merges that may come up.
6. Wrap your API handlers with a withSentry function to capture Next.js API route errors. See the example in `/pages/api/hello.ts`

### Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
