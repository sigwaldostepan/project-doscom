# Golb

Golb is a simple blog website, where you can share your opinion with other by creating a post. This project was made as an assignment for Doscom University Final Project

## Features

- User Authentication
- Create, edit, and delete post

## Running locally

1. Clone this repository
   ```bash
   git clone https://github.com/sigwaldostepan/project-doscom.git
   ```
2. Install dependencies
   ```bash
   cd frontend
   npm install
   ```
   ```bash
   cd ..
   cd backend
   npm install
   ```
3. Generate prisma client
   ```bash
   npx prisma generate
   ```
4. Push the database schemas
   ```bash
   npx prisma db push
   ```
5. Start the development server
   ```bash
   cd frontend
   npm run dev
   ```
   ```bash
   cd ..
   cd backend
   npm run dev
   ```
