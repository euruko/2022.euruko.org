# Euruko 2022

💎 The Euruko 2022 site hosted at [https://2022.euruko.org](2022.euruko.org).

🔥 Note that the `main` branch of this repository is **automatically** deployed to production. Use branches and PRs if you don't want your changes to go live immediately.

## 🚀 Project Structure

The site uses [Astro](https://docs.astro.build). Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Tour.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
|:----------------|:--------------------------------------------|
| `npm install`   | Installs dependencies                       |
| `npm run start` | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |
