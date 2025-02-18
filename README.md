# Next.js Modern Template with Firebase

![{41602E08-84AA-4E81-9C0C-5776007BE469}](https://github.com/user-attachments/assets/b21258dd-982c-402d-942b-18eb8b9d3582)

A highly customizable, production-ready template built with Next.js, Tailwind CSS, and Firebase. Perfect for building modern web applications with features like form handling, database integration, and responsive design.

## Features

- 🚀 Next.js 15 with App Router
- 🎨 Tailwind CSS with custom animations
- 🔥 Firebase Firestore integration
- 📱 Responsive design
- 📝 Form validation with Zod
- 📊 Animated components with Framer Motion
- 📧 Newsletter subscription
- 📞 Contact form with phone number input
- 💼 Ready-to-use components (Navbar, Footer, Pricing, etc.)

## Getting Started

### Prerequisites

- Node.js 18+
- Firebase account
- Google Cloud project

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/nextjs-firebase-template.git
cd nextjs-firebase-template
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Firebase

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. In the project settings, add a web app
4. Copy the Firebase configuration object

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory and add your Firebase credentials:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-bucket.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### 5. Set Up Firestore

1. In the Firebase Console, go to Firestore Database
2. Create a new database in production mode
3. Add the following collections:
   - `contacts`
   - `newsletter_subscribers`

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

### Vercel Deployment

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Run the following command and follow the prompts:
   ```bash
   vercel
   ```

### Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Login to Firebase:
   ```bash
   firebase login
   ```
3. Initialize Firebase Hosting:
   ```bash
   firebase init hosting
   ```
4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## Customization

### Change Colors

Edit the `tailwind.config.ts` file to customize the color scheme:

```ts
extend: {
colors: {
primary: '#b24e55',
secondary: '#E3405F',
// Add your custom colors here
},
},
// existing code...
```

### Modify Components

All components are located in the `components` directory. Key components include:

- `Navbar.tsx` - Customizable navigation bar
- `Footer.tsx` - Footer component
- `ContactForm.tsx` - Form with validation
- `Newsletter.tsx` - Email subscription form
- `Pricing.tsx` - Pricing section with cards
- `FAQ.tsx` - Expandable FAQ section

## Support

For support or customization requests, please contact [your email].

## License

This template is available for purchase with a single-site license. For multi-site or extended licenses, please contact us.

---

**Note:** This is a template and requires additional development for production use. The seller is not responsible for any issues arising from the implementation of this template.
