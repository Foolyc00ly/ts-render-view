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
│   ├── common
│   │   └── Component-Handler.ts
│   │   |-- index.ts
│   ├── components
│   │   └── My-Component-Memoized 
│   │   |-- My-Global-Scroll-Listener 
│   │   |-- My-View-App-Root
└── package.json
└── index.html
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
##  Link

https://foolyc00ly.github.io/ts-render-view-dist/