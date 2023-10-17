# About

This is the possible future website for Jesuit Robotics. It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Important

Some things will not work, because you need to have the database secrets, normally stored in a .env.local file while testing, which should never be published on GitHub. Some pages will just crash, since they rely on these secrets...

# Guide for Next.js

Here are some basic things you should know when using this framework:

## Getting Started

First, install the packages (I installed a couple, I put a description below):

```bash
npm install
```

Then, run the actual project:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Packages

- Tailwind CSS: Everything that is CSS is in Tailwind, and the properties are passed on as classnames
- Framer Motion: For all of the animation
- Firebase: Everything that is backend (auth, firestore)
- Radix UI: For some of the UI components

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
