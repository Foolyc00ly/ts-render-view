---
title:"Typescript para renderizar vistas"
---

# Encabezado Bienvenidos
[!NOTE] This is a note!

# Typescript para Renderizado de Vistas

## 🚀 Getting Started

To get started, run the following command from the root of this project:

```bash
  npm install
```
or
```bash
  yarn
```

Then, run the following command to start the dev server:

```bash
  npm run dev
```
or
```bash
  yarn dev
```


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
|   ├── vite.svg
├── src/
│   ├── components/ - shared components
│   │   └── home - page components
│   │       ├── Hero.astro
│   │       ├── Features.astro
│   │       ├── Testimonials.astro
│   │   |-- ui - ui components
│   │       ├── Footer - footer components
│   │       │   ├── Footer.astro
│   │       │   ├── ImportantLinksFooter.astro
│   │       │   ├── SocialLinksFooter.astro
│   │       |
│   │       ├── Breadcrumb.astro
│   │       ├── Header.astro
│   │    |-- 
│   ├── layouts/ - shared layouts
│   │   └── BaseLayout.astro
|   ├── config/ - config files
│   │   └── index.ts
│   └── pages/ - pages
|   |   ├── privacy-policy.astro
|   |   ├── terms-conditions.astro
│       └── index.astro
|   ├── template/ - configurations base of template
│   │   └── styles/ - styles
│   │       └── styles.css
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`            | Installs dependencies                            |
| `yarn dev`                | Starts local dev server at `localhost:4321`      |
| `yarn build`              | Build your production site to `./dist/`          |


## ¿Do you want to add new pages?

You can add new pages in the `src/pages` folder, you can use the `index.astro` file as a template.

A page is composed of a layout and components, you can use the `BaseLayout.astro` to create a Layout.

This is the format of a page:

```astro
---
import { BaseLayout } from '../layouts/BaseLayout.astro'

---
