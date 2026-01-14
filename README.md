# Recipes App

A modern web application for discovering, generating, and managing recipes using AI-powered suggestions. Built with TypeScript and React, this app allows users to explore drink recipes, generate new ones with AI, and save their favorites.

## Features

- **Recipe Discovery**: Browse and view various drink recipes
- **AI Recipe Generation**: Generate custom recipes using AI technology
- **Favorites Management**: Save and manage your favorite recipes
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean interface built with Tailwind CSS and Headless UI components

## Technologies Used

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **State Management**: Zustand
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **AI Integration**: OpenRouter AI SDK Provider
- **Validation**: Zod
- **Icons**: Heroicons
- **UI Components**: Headless UI
- **Linting**: ESLint with TypeScript support
- **Utilities**: UUID for unique identifiers

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alfonsoj-entwickler/recipes-app.git
   cd recipes-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Usage

- **Home Page**: View featured recipes and navigate through the app
- **Generate AI**: Use the AI feature to create custom recipes based on your preferences
- **Favorites**: Save recipes you like and access them quickly
- **Responsive**: The app works seamlessly on different screen sizes

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check for code issues
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── components/     # Reusable UI components
├── layouts/        # Layout components
├── lib/            # Utility libraries (AI, Axios)
├── pages/          # Page components
├── services/       # API services
├── stores/         # Zustand state stores
├── types/          # TypeScript type definitions
└── utils/          # Utility functions and schemas
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and not licensed for public use.