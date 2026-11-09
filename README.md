# Fatima Khan — Portfolio

A responsive personal portfolio for Fatima Khan, an e-commerce website specialist based in Lahore, Pakistan. Built with React, Vite, modern CSS, and Lucide icons.

## Features

- Responsive layout with mobile navigation
- About, skills, featured project, education, and contact sections
- Custom illustrated previews for the portfolio hero and Omnagora project
- Contact form that prepares an email in the visitor’s default mail app
- Reduced-motion support, smooth in-page navigation, SEO metadata, and custom SVG favicon
- No invented testimonials, statistics, or work history

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deploy

### Vercel

Import this repository into Vercel. Vercel detects Vite automatically. Use `npm run build` as the build command and `dist` as the output directory.

### GitHub Pages

This app uses Vite. For a project site, configure `base` in `vite.config.js` to `'/fatima-khan-portfolio/'`, then build with `npm run build` and publish the `dist` directory using GitHub Pages (or a Pages deployment workflow). For a custom domain or user site, the default `/` base is appropriate.

## Contact form note

No contact email address was provided. The form validates the visitor’s name, email, and message, then opens their default mail app with the message prepared and the recipient left blank. Add Fatima’s public email address to the `mailto:` URL in `src/App.jsx` when available so visitors can send it directly.

## Project

[Omnagora](https://omnagora.com)
