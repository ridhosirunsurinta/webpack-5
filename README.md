# Webpack 5 React Boilerplate

A modern and optimized Webpack 5 boilerplate for React applications with development and production configurations.

## Features

- ⚡️ Webpack 5 with optimized configuration
- ⚛️ React 18
- 🎯 Babel configuration for React
- 📦 Code splitting and vendor chunk optimization
- 🔥 Hot Module Replacement (HMR)
- 🎨 SASS/SCSS support with PostCSS
- 🗜️ CSS Minification and Optimization
- 💾 File-system caching for faster builds
- 🖼️ Asset management for images and fonts
- 🔍 Source maps for development
- 🏷️ TypeScript-ready

## Quick Start

### Prerequisites

- Node.js >= 14
- npm >= 6

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd webpack-5
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update Git remote (optional):
   ```bash
   git remote remove origin
   git remote add origin <your-repository-url>
   ```

## Available Scripts

### Development

Start the development server:
```bash
npm run dev
```
- Opens automatically at [http://localhost:3000](http://localhost:3000)
- Includes Hot Module Replacement
- Shows build progress and errors overlay

### Production Build

Create a production build:
```bash
npm run predeploy
```
- Generates optimized assets in `/dist` folder
- Includes minification and cache-busting
- Optimizes images and assets
- Extracts CSS into separate files

## Project Structure

```
webpack-5/
├── src/               # Source files
├── public/            # Static files
├── dist/              # Production build
├── webpack.common.js  # Shared webpack config
├── webpack.dev.js     # Development config
├── webpack.prod.js    # Production config
└── postcss.config.js  # PostCSS configuration
```

## Features in Detail

### Optimization

- **Code Splitting**: Automatically splits code for optimal loading
- **Cache Busting**: Implements contenthash in filenames
- **Asset Optimization**: Handles images and fonts efficiently
- **CSS Optimization**: Minifies and optimizes CSS with PostCSS

### Development Features

- Live reload with HMR
- Source maps for better debugging
- Error overlay
- Build progress indication
- React Router support with historyApiFallback

## Dependencies

### Core
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.4.1

### Build Tools
- `webpack`: ^5.74.0
- `webpack-cli`: ^4.10.0
- `webpack-dev-server`: ^4.11.1
- `webpack-merge`: ^5.8.0

### Loaders and Plugins
- `babel-loader`: ^8.2.5
- `css-loader`: ^6.7.1
- `sass-loader`: ^13.0.2
- `style-loader`: ^3.3.1
- `postcss-loader`: ^7.0.1
- `html-webpack-plugin`: ^5.5.0
- `mini-css-extract-plugin`: ^2.6.1

### Transpilers and Preprocessors
- `@babel/core`: ^7.19.1
- `@babel/preset-env`: ^7.19.1
- `@babel/preset-react`: ^7.18.6
- `sass`: ^1.55.0
- `autoprefixer`: ^10.4.12
- `cssnano`: ^5.1.13

## Contributing

Feel free to open issues and pull requests!

## License

This project is licensed under the ISC License.
