# Vercel Deployment Guide for Mandamanedi Suresh Portfolio

Follow this step-by-step guide to deploy your portfolio to Vercel for free with automated CI/CD deployment on every git push.

---

## STEP 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in.
2. Click the **"+"** icon in the top-right corner and select **"New repository"**.
3. Set Repository name: `mandamanedi-suresh-portfolio`.
4. Choose **Public** or **Private**.
5. Click **"Create repository"** (do NOT initialize with a README if you already have one).

---

## STEP 2: Push Code to GitHub

In your project terminal, execute the following commands:

```bash
git init
git add .
git commit -m "Initial portfolio release"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mandamanedi-suresh-portfolio.git
git push -u origin main
```

*(Replace `YOUR_USERNAME` with your actual GitHub username)*

---

## STEP 3: Sign In to Vercel

1. Navigate to [Vercel](https://vercel.com).
2. Click **"Log In"** or **"Sign Up"**.
3. Choose **"Continue with GitHub"** to link your GitHub account.

---

## STEP 4: Import Project on Vercel

1. On the Vercel Overview Dashboard, click **"Add New..."** → **"Project"**.
2. Under **"Import Git Repository"**, locate `mandamanedi-suresh-portfolio`.
3. Click **"Import"**.

---

## STEP 5: Configure Build Settings

Vercel auto-detects Vite configuration:

- **Framework Preset**: `Vite`
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

---

## STEP 6: Deploy

Click **"Deploy"**. Vercel will build your portfolio in under 60 seconds and assign a live production URL (e.g., `mandamanedi-suresh-portfolio.vercel.app`).

---

## STEP 7: Post-Deployment Quality Check

Once deployed, visit your live URL and test:

1. **Homepage**: Hero visual animation and typewriter text transitions.
2. **Navigation**: Smooth scroll to sections and sticky backdrop blur navbar.
3. **Projects**: Click project cards to open detail modals.
4. **Resume Download**: Click "Download Resume" to test PDF download.
5. **Contact Form**: Test field validation and submission fallback.
6. **Mobile Layout**: Test responsive menu on mobile viewport.

---

## (Optional) Custom Domain Setup

To link a custom domain like `suresh.dev`:

1. Go to your project settings in Vercel → **Domains**.
2. Enter `suresh.dev` and click **Add**.
3. Configure the CNAME and A records in your domain registrar DNS settings as prompted by Vercel.
