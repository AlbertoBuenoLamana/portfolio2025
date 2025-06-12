# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production version (builds both client and server)
- `npm start` - Run production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes using Drizzle

## Architecture Overview

This is a full-stack TypeScript application with a React frontend and Express backend:

### Project Structure
- `/client` - React frontend with Vite build system
- `/server` - Express.js backend API
- `/shared` - Shared TypeScript schemas and types
- `/attached_assets` - Static assets and documentation

### Frontend Architecture
- **React 18** with TypeScript and Vite
- **Wouter** for client-side routing (not React Router)
- **TanStack Query** for server state management
- **Tailwind CSS** + **shadcn/ui** components for styling
- **Framer Motion** for animations
- **Theme & Language contexts** for app-wide state

### Backend Architecture
- **Express.js** server with TypeScript
- **Drizzle ORM** with PostgreSQL database
- **Passport.js** for authentication
- Server serves both API routes (`/api/*`) and static frontend files

### Key Configuration
- Path aliases: `@/` maps to `client/src/`, `@shared/` maps to `shared/`
- TypeScript configured for ESM modules with bundler resolution
- Vite handles frontend builds, esbuild handles server builds
- Single port (5000) serves both frontend and backend

### Database
- PostgreSQL with Drizzle ORM
- Schema defined in `shared/schema.ts`
- Migrations in `./migrations` directory
- Requires `DATABASE_URL` environment variable

This is a personal portfolio website showcasing a timeline, skills, projects, and contact information with dark/light theme support and internationalization.