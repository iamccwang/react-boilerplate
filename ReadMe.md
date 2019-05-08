# React Boilerplate 

Make a React boilerplate to start a React web app project easier.

## Install Dev Tool Packages

Initialize npm and install development tools
```
npm init
```

Install babel related packages
```
npm install --save-dev @babel/cli @babel/core @babel/preset-env @babel/polyfill @babel/plugin-proposal-object-rest-spread
```

Install webpack related packages
```
npm install --save-dev webpack webpack-cli webpack-dev-server
```

Install webpack related loaders
```
npm install --save-dev babel-loader style-loader css-loader sass-loader
```

Install webpack related plugins
```
npm install --save-dev html-webpack-plugin clean-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin terser-webpack-plugin
```

Install React related packages
```
npm install --save react react-dom react-modal
```

Install css and sass related packages
```
npm install --save node-sass normalize.css
```

## Create Folder Structure
```
├── ...
├── node_modules            # node app
├── public                  # public content folder
│   ├── css                 # minimize css files
│   ├── img                 # minimize image files
│   ├── js                  # minimize js file
│   └── index.html          # html files
├── src                     # source content folder
│   ├── styles              # client side image files
│   └── components          # react components
├── templates               # html templates
├── package.json            
├── package-lock.json
├── ReadMe.md          
├── webpack.config.js       
└── ...
```

## How to work on this boilerplate

Run dev-server to develop web app
```
npm run dev-server 
```

Run build to generate files and push to produtcion
```
npm run build
```