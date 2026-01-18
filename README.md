# Aditya Paswan - Developer Portfolio

A modern, responsive, and interactive developer portfolio website to showcase skills, projects, and professional experience. Built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

![Portfolio Preview](./public/profile.jpg)
*(Note: Replace this with a screenshot of your actual website if available)*

## 🚀 Features

- **Modern UI/UX**: Sleek dark-themed design with glassmorphism effects.
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop devices.
- **Interactive Animations**: Smooth transitions and entry animations using Framer Motion.
- **Project Showcase**: specific sections for "Live Demos" and "Project Showcase".
- **Downloadable Assets**: Direct links to download Resume and CV.
- **Contact Section**: Integrated contact form for inquiries.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [Netlify](https://www.netlify.com/)

## 📂 Project Structure

```
├── public/              # Static assets (images, pdfs)
├── src/
│   ├── components/      # Reusable UI components (Hero, Projects, Contact, etc.)
│   ├── data/            # Static data configurations (constants.ts)
│   ├── app/             # Next.js App Router pages
│   └── styles/          # Global styles
├── netlify.toml         # Netlify deployment configuration
└── package.json         # Project dependencies and scripts
```

## ⚡ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn



## 🚀 Deployment

### Deploy to Netlify

This project is configured for easy deployment on [Netlify](https://www.netlify.com/).

1.  Push your code to a GitHub repository.
2.  Log in to Netlify and "Import from Git".
3.  Select your repository.
4.  Netlify will automatically detect the build settings from `netlify.toml`:
    - **Build Command:** `npm run build`
    - **Publish Directory:** `.next`
5.  Click **Deploy**.

## 📝 Customization

You can easily update the content of the portfolio by editing:
- `src/data/constants.ts`: Update your personal info, projects list, skills, and experience here.
- `public/`: Add your own images and resume files here.

## 📄 License

This project is licensed under the MIT License.
