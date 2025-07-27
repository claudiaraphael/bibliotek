# Bibliotek - Modern Book Management Frontend

A modern React frontend for a book management application, featuring a dark mode and rounded edges UI design.

## Features

- **Modern UI Design**: Clean interface with rounded edges and responsive layout
- **Dark Mode Support**: Automatically detects system preference with manual toggle option
- **Book Management**: Add and view books with detailed information
- **Responsive Design**: Works on mobile, tablet, and desktop devices

## Tech Stack

- React 18 with TypeScript
- Chakra UI for component library
- Vite for fast development and building

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/` - Source code
  - `components/` - React components
  - `types.ts` - TypeScript interfaces
  - `theme.ts` - Chakra UI theme configuration
  - `App.tsx` - Main application component
  - `main.tsx` - Application entry point
- `public/` - Static assets
- `index.html` - HTML entry point