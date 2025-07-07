# LMS Frontend

## Setup instruction

1. Clone the project

```

    https://github.com/pankajsharma81/LMS.git
```

2. Move into the directory

```
    cd lms-frontend-hn
```

3. install dependencies

```
    npm i
```

4. run the server

```
    npm run dev
```

## Tailwind Setup

## Adding plugins and dependencies 

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axi
os react-hot-toast @tailwindcss/line-clamp
```

## Configure auto import sort esline

1. Install simple import sore

```
    npm i -D eslint-plugin-simple-import-sort
```

2. Add rule in `.eslint.cjs`

```
    'simple-import-sort/imports': 'error'
    'simple-import-sort/exports': 'error'
```

1. add simple-import sort plugin in `.eslint.cjs`

```
    import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'

     plugins: {
      'simple-import-sort': eslintPluginSimpleImportSort
    },
```

4. To enable auto import sort on file save in vscode

    - Open `settings.json`
    - add the following config
```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }