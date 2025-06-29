# MyPortfolio--NextJS

![Screenshot 2024-09-06 at 17 32 06](https://github.com/user-attachments/assets/dbdc686f-af2b-41c5-b479-351a64e7ec62) ![Screenshot 2024-09-06 at 17 33 17](https://github.com/user-attachments/assets/05db7d82-ae54-4bcc-b78f-d39da414fdde) ![Screenshot 2024-09-06 at 17 35 03](https://github.com/user-attachments/assets/3badf931-d321-41c4-9f34-1343006ebc35) ![Screenshot 2024-09-06 at 17 35 20](https://github.com/user-attachments/assets/38c0216d-e666-479b-b59f-0dff35ab1b21) ![Screenshot 2024-09-06 at 17 35 47](https://github.com/user-attachments/assets/b75d7e28-c937-433b-b1f4-8c4143f32a69) ![Screenshot 2024-09-06 at 17 36 00](https://github.com/user-attachments/assets/9c160ac7-c523-4e07-9b69-d9e88e69f44b) ![Screenshot 2024-09-06 at 17 37 59](https://github.com/user-attachments/assets/077a8ac0-3140-480b-856a-bb49185e06b1) ![Screenshot 2024-09-06 at 17 38 40](https://github.com/user-attachments/assets/8543a5af-6cc9-4956-8750-2242cc944971)

---

## 📖 Project Summary

**MyPortfolio--NextJS** is a modern, elegant, and fully responsive portfolio website, crafted with the latest frontend technologies. It serves as a digital resume and portfolio, showcasing your professional skills, projects, work experience, and contact information in a clean, interactive, and visually appealing manner.

This project is built with **Next.js v14** (React), leverages the App Router, server-side rendering, Framer Motion for animations, Shadcn UI components, and TailwindCSS for utility-first styling. It includes a real-world contact form solution using Nodemailer, making it a great foundation for both developers' personal branding and as a learning resource for modern web development.

- **Live Demo:** [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/)

---

## 📚 Table of Contents

1. [Project Summary](#-project-summary)
2. [Features](#-features)
3. [Tech Stack](#-tech-stack)
4. [Project Structure](#-project-structure)
5. [Walkthrough: How It Works](#-walkthrough-how-it-works)
6. [Getting Started](#-getting-started)
7. [Setting up Contact Form](#-setting-up-contact-form-nodemailer)
8. [Environment Variables](#-environment-variables)
9. [Screenshots](#-screenshots)
10. [Learn More](#-learn-more)
11. [Deployment](#-deployment)
12. [Contributions](#-contributions)
13. [License](#-license)

---

## ✨ Features

- **Modern Next.js v14 Architecture:** Leverages the App Router, advanced routing, and server-side rendering for optimal performance.
- **Animated UI:** Smooth transitions and engaging animations using Framer Motion.
- **Shadcn UI Integration:** Consistent, accessible UI components.
- **TailwindCSS Styling:** Utility-first, highly customizable styling.
- **Contact Form:** Secure built-in form with email delivery via Nodemailer.
- **Dark/Light Mode:** Seamless theme switching for user preference.
- **Responsive Design:** Flawless display on desktop, tablet, and mobile devices.
- **SEO Friendly:** Enhanced metadata for search engine optimization.
- **Deployment Ready:** Easily deployable to Vercel with minimal configuration.
- **Well-Organized Structure:** Modular code for easy extension and learning.

---

## 🛠️ Tech Stack

- **Framework:** Next.js v14 (React)
- **Styling:** TailwindCSS, Shadcn UI
- **Animations:** Framer Motion
- **Forms & Email:** Nodemailer
- **Deployment:** Vercel

---

## 📦 Project Structure

The project follows a modular, scalable structure for ease of development and maintainability.

```
MyPortfolio--NextJS/
├── app/
│   ├── api/           # API routes (e.g., contact form endpoint)
│   ├── contact/       # Contact page components and logic
│   ├── resume/        # Resume display page
│   ├── services/      # Services/skills offered
│   ├── work/          # Work/projects showcase
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.jsx     # Main layout wrapper
│   └── page.jsx       # Main landing page
├── components/
│   ├── Header.jsx
│   ├── MobileNav.jsx
│   ├── Nav.jsx
│   ├── PageTransition.jsx
│   ├── Photo.jsx
│   ├── Social.jsx
│   ├── StairTransition.jsx
│   ├── Stairs.jsx
│   ├── Stats.jsx
│   ├── WorkSliderBtns.jsx
│   └── ui/            # Shadcn UI components
├── public/
│   ├── assets/        # Images, icons, and static assets
│   ├── next.svg
│   ├── photo.png
│   └── vercel.svg
├── styles/            # Tailwind and custom CSS
├── utils/             # Helper utilities, e.g., Nodemailer code
├── .env               # Environment variables (never commit!)
├── .eslintrc.json     # ESLint config
├── jsconfig.json      # JS project config
├── next.config.mjs    # Next.js config
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
└── tsconfig.json
```

> **Note:** The above is a partial listing. [See the full directory in GitHub.](https://github.com/arnobt78/MyPortfolio--NextJS/tree/main)

---

## 🏗 Walkthrough: How It Works

### 1. **Landing Page and Navigation**

- The main entry point is `app/page.jsx`, which renders the home section with your profile, summary, and highlights.
- Navigation is handled by `components/Nav.jsx` and `components/MobileNav.jsx`, providing seamless routing across pages.

### 2. **Responsive Layout**

- `app/layout.jsx` wraps all pages, applying consistent theming and header/footer.
- TailwindCSS utility classes make layout and responsiveness effortless.

### 3. **Animated Transitions**

- `components/PageTransition.jsx` and `components/StairTransition.jsx` use Framer Motion for smooth route transitions and section reveals.
- Example animation code:
  ```jsx
  import { motion } from 'framer-motion';

  export default function PageTransition({ children }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }
  ```

### 4. **Showcasing Work & Resume**

- The `app/work/` and `app/resume/` folders contain pages for your portfolio projects and resume timeline.
- Work cards and stats use `components/Stats.jsx` and custom UI from `components/ui/`.

### 5. **Contact Form with Email Integration**

- The contact page (`app/contact/`) features a form that sends messages securely via an API route using Nodemailer.
- User input is validated and safely emailed to your address.

### 6. **Theming (Dark/Light Mode)**

- Theme toggling is handled with utility classes and local state, ensuring accessibility and visual appeal in both light and dark modes.

### 7. **SEO & Deployment**

- SEO is enhanced via Next.js metadata and semantic HTML.
- Deployed on Vercel for optimal speed and reliability.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/arnobt78/MyPortfolio--NextJS.git
cd MyPortfolio--NextJS
```

---

### 2. Install Dependencies

You can use any package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

---

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site in action.

> Begin editing the page by modifying `app/page.jsx`. Changes are hot-reloaded automatically.

---

## ✉️ Setting up Contact Form (Nodemailer)

1. **Install Nodemailer:**

   ```bash
   npm install nodemailer
   ```

---

2. **Sample Nodemailer API Route:**

```javascript
// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { fullname, email, message } = await req.json();

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Important! New message from ${fullname}`,
      text: `
        Name: ${fullname}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email', details: error.message }), { status: 500 });
  }
}
```

For more details, see [Nodemailer Documentation](https://nodemailer.com/).

---

## 🔑 Environment Variables

**Important:** Never commit your `.env` file to public repos.

Create a `.env` file in your project root with:

```
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

> **Note:** For Gmail, `EMAIL_PASS` is an "App Password" (not your normal password). Enable 2-Step Verification and generate an app password ([instructions](https://support.google.com/accounts/answer/185833?hl=en)).  
> [Video Guide](https://www.youtube.com/watch?v=dpq43TGcCT4)

---

## 🖼 Screenshots

Some screenshots of the project are shown above.  
For more, see the [Live Demo](https://arnob-mahmud.vercel.app/).

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Vercel Platform](https://vercel.com/)
- [Nodemailer Docs](https://nodemailer.com/)

---

## 🌍 Deployment

The easiest way to deploy your Next.js app is on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## 🤝 Contributions

Feedback, suggestions, and contributions are highly welcome!  
Feel free to open issues or fork the repo to contribute.

---

## 🔑 Keywords

`Next.js`, `React`, `Portfolio`, `TailwindCSS`, `Shadcn UI`, `Framer Motion`, `Nodemailer`, `Vercel`, `Modern Web Development`, `App Router`, `Dark Mode`, `SEO`, `Responsive Design`, `Personal Website`, `Contact Form`, `Professional Resume`, `Open Source`

---

## 📋 Example Usage

- **As a personal portfolio:** Fork the repo, update content in `app/page.jsx`, `app/work/`, and `app/resume/` with your info.
- **For learning:** Explore the modular Next.js structure, see how API routes and forms work, and modify components in `/components`.
- **For teaching:** Use the repo as a teaching resource or boilerplate for students to build their own online portfolios.

---

## 🏁 Conclusion

**MyPortfolio--NextJS** is a robust, production-ready template for developers to showcase their skills and projects. It demonstrates best practices in modern React and Next.js development, from animation and theming to serverless APIs and deployment. Use it as a foundation for your digital identity or as a learning tool to master advanced web development concepts.

---

## © License

This project is open source and available under the [MIT License](LICENSE).
