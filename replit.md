# Portfolio Website

## Overview
This is a modern portfolio website built with React, TypeScript, and Vite. It features a responsive design with dark/light theme support, smooth animations, and a clean UI using shadcn/ui components and Tailwind CSS.

## Project Architecture
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber with Drei
- **Forms**: React Hook Form with Zod validation
- **Theme**: Next Themes for dark/light mode

## Current State
- ✅ Frontend application set up and running on port 5000
- ✅ Vite development server configured for Replit environment
- ✅ All dependencies installed and working
- ✅ Portfolio website ready for development and customization

## Recent Changes
- **2025-09-28**: Initial Replit environment setup
  - Updated Vite config to use port 5000 with host 0.0.0.0
  - Configured `allowedHosts: true` for Replit proxy compatibility
  - Set up "Start application" workflow to run development server

## Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Experience.tsx  # Experience timeline
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   ├── Portfolio.tsx   # Portfolio showcase
│   ├── Services.tsx    # Services offered
│   └── Skills.tsx      # Skills display
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── assets/             # Static assets (images, etc.)
```

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features
- Responsive design that works on all devices
- Dark/light theme toggle
- Smooth scrolling and animations
- Contact form with email integration
- 3D graphics and interactive elements
- Modern component architecture
- Type-safe development with TypeScript

## User Preferences
- Modern, clean design aesthetic
- Performance-focused development
- Component-based architecture
- Accessibility considerations