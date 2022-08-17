This project is a Next.js starter kit, which includes all the base tooling needed for a React project using Next.js.

Includes:

- TypeScript configs
- ESLint
- Prettier auto-formatting
- Automatic lint checks using lint-staged and Husky
- Sentry error logging
- Firebase Auth
- Firebase Admin

Steps used to provision this project:

1. `npx create-next-app@latest --typescript` to install the base Next.js project with TypeScript
2. `npm run lint` runs ESLint for the first time and configures the "next/core-web-vitals" extension.
3. `npm install --save-dev eslint-config-prettier` to configure ESLint ant Prettier to work together.
4. Add "prettier" to the ESLint config.
5. Install Husky and lint-staged with `npm install --save-dev husky lint-staged`
6. Add script to `package.json` to install Husky: `"prepare": "husky install"`
7. Add `.lintstagedrc.js` and copy and paste config from [this Next.js documentation](https://nextjs.org/docs/basic-features/eslint#lint-staged).
8. Run script to install Husky: `npm run prepare`
9. Add the following lint-staged config to `package.json`:

```
"lint-staged": {
        "*.{ts,js,tsx,jsx}": "eslint --cache --fix",
        "*.{ts,js,tsx,jsx,css,md}": "prettier --write"
    }
```

10. Add script to `package.json` to run lint-staged before commit: `"precommit": "lint-staged"`
11. Add a precommit hook to run lint-staged on every git commit: `npx husky add .husky/pre-commit "npm run precommit"`

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
