
# MyPortfolio--NextJS

![Screenshot 2024-09-06 at 17 32 06](https://github.com/user-attachments/assets/dbdc686f-af2b-41c5-b479-351a64e7ec62) ![Screenshot 2024-09-06 at 17 33 17](https://github.com/user-attachments/assets/05db7d82-ae54-4bcc-b78f-d39da414fdde) ![Screenshot 2024-09-06 at 17 35 03](https://github.com/user-attachments/assets/3badf931-d321-41c4-9f34-1343006ebc35) ![Screenshot 2024-09-06 at 17 35 20](https://github.com/user-attachments/assets/38c0216d-e666-479b-b59f-0dff35ab1b21) ![Screenshot 2024-09-06 at 17 35 47](https://github.com/user-attachments/assets/b75d7e28-c937-433b-b1f4-8c4143f32a69) ![Screenshot 2024-09-06 at 17 36 00](https://github.com/user-attachments/assets/9c160ac7-c523-4e07-9b69-d9e88e69f44b) ![Screenshot 2024-09-06 at 17 37 59](https://github.com/user-attachments/assets/077a8ac0-3140-480b-856a-bb49185e06b1) ![Screenshot 2024-09-06 at 17 38 40](https://github.com/user-attachments/assets/8543a5af-6cc9-4956-8750-2242cc944971)

---

## 📖 Project Overview

**MyPortfolio--NextJS** is a modern, fully responsive portfolio website built with the latest frontend technologies and design trends. It is powered by **Next.js v14**, with beautiful animations via **Framer Motion**, styled with **TailwindCSS** and **Shadcn UI**, and equipped with a functional contact form using **Nodemailer** for email delivery.

This project serves as a professional digital resume and portfolio, showcasing your skills, projects, experience, and contact information in a clean and interactive manner.

**Live Demo:** https://arnob-mahmud.vercel.app/

---

## ✨ Features

- **Modern Next.js v14 Architecture:** Leveraging the latest features of Next.js, including the App Router and server-side rendering.
- **Animated UI:** Smooth and engaging transitions/animations using Framer Motion.
- **Shadcn UI Integration:** Consistent and accessible UI components.
- **TailwindCSS Styling:** Utility-first, highly customizable styling.
- **Contact Form:** Built-in contact form with secure email delivery via Nodemailer.
- **Dark/Light Mode:** Visually appealing in both themes.
- **Responsive Design:** Looks great on all devices (desktop, tablet, mobile).
- **SEO Friendly:** Optimized for search engines.
- **Deployment Ready:** Easily deployable to Vercel.

---

## 🛠️ Tech Stack

- **Framework:** Next.js v14 (React)
- **Styling:** TailwindCSS, Shadcn UI
- **Animations:** Framer Motion
- **Forms & Email:** Nodemailer
- **Deployment:** Vercel

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/arnobt78/MyPortfolio--NextJS.git
cd MyPortfolio--NextJS
```

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

You can start editing the page by modifying `app/page.js`. Changes are hot-reloaded automatically.

---

## 📦 Project Structure

- `app/` - Main application folder (pages, layout, components, etc.)
- `components/` - Reusable React components.
- `styles/` - Tailwind and custom CSS files.
- `public/` - Static assets and images.
- `utils/` - Utility/helper functions (including Nodemailer).

---

## ✉️ Setting up Contact Form (Nodemailer)

1. **Install Nodemailer:**

   ```bash
   npm install nodemailer
   ```

2. **Sample Nodemailer Implementation:**

   ```js
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

   For more details, visit [Nodemailer Documentation](https://nodemailer.com/).

---

## 🔑 Environment Variables

**Important:** Never commit your `.env` file to public repos.

Create a `.env` file in your project root with:

```
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

> **Note:** For Gmail, `EMAIL_PASS` is not your normal password. Enable 2-Step Verification, then create an "App Password" ([instructions](https://support.google.com/accounts/answer/185833?hl=en)).  
> [Video Guide](https://www.youtube.com/watch?v=dpq43TGcCT4)

---

## 🖼 Screenshots

You can find some screenshots of the project above.  

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Vercel Platform](https://vercel.com/)
- [Nodemailer Docs](https://nodemailer.com/)

---

## 🌍 Deployment

The easiest way to deploy your Next.js app is on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## 🤝 Contributions

Feedback, suggestions, and contributions are highly welcome!  
Feel free to open issues or fork the repo to contribute.

---

## © License

This project is open source and available under the [MIT License](LICENSE).
