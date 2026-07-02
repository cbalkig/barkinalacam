# 🚀 How to Publish Your Website for Free & Connect GoDaddy

I have already configured your project code to make deploying as simple as running a single command! Just follow these steps to get your website live on the internet and connected to your custom GoDaddy domain.

---

## Part 1: Push to GitHub & Publish for Free

1. **Create a GitHub Repository**
   - Go to [GitHub.com](https://github.com) and log in (or create an account).
   - Click the **+** icon in the top right and select **New repository**.
   - Name it something like `barkinalacam-website`.
   - Leave it **Public** and do NOT check "Add a README file".
   - Click **Create repository**.

2. **Push Your Local Code to GitHub**
   Open your terminal (in the folder where your project is) and run these commands one by one. *(Replace `USERNAME` and `REPO` with your actual GitHub username and repository name)*:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```

3. **Deploy the Website**
   Now that your code is on GitHub, you can publish it using the tool I already installed for you. Just run:
   ```bash
   npm run deploy
   ```
   *This command automatically builds the website and pushes it to a special `gh-pages` branch.*

4. **Enable GitHub Pages**
   - Go to your repository on GitHub.
   - Click the **Settings** tab.
   - On the left sidebar, click **Pages**.
   - Under **Build and deployment** -> **Source**, make sure it says "Deploy from a branch".
   - Under **Branch**, select the `gh-pages` branch and `/ (root)` folder, then click **Save**.

Your website is now live! It will be accessible at `https://USERNAME.github.io/REPO/` within a few minutes.

---

## Part 2: Connect Your GoDaddy Custom Domain

To use a custom domain (e.g., `barkinalacam.com`), you need to tell GitHub and GoDaddy how to talk to each other.

### 1. Configure GitHub
1. Go back to your repository **Settings** -> **Pages**.
2. Scroll down to **Custom domain**.
3. Enter your GoDaddy domain (e.g., `barkinalacam.com`) and click **Save**.
   *(GitHub will automatically create a `CNAME` file in your repository).*
4. Once saved, check the box that says **Enforce HTTPS** (this might take a few minutes to become clickable while the certificate generates).

### 2. Configure GoDaddy DNS Settings
1. Log in to your [GoDaddy Account](https://sso.godaddy.com/).
2. Go to **My Products**, find your domain, and click **DNS** (or Manage DNS).
3. **Delete** any existing `A` records that point to GoDaddy's default parking IPs.
4. **Add four new 'A' Records** pointing to GitHub's servers:
   - **Type:** A | **Name:** @ | **Value:** `185.199.108.153`
   - **Type:** A | **Name:** @ | **Value:** `185.199.109.153`
   - **Type:** A | **Name:** @ | **Value:** `185.199.110.153`
   - **Type:** A | **Name:** @ | **Value:** `185.199.111.153`
5. **Add/Edit the 'CNAME' Record for www**:
   - **Type:** CNAME | **Name:** www | **Value:** `USERNAME.github.io.` *(Replace with your exact GitHub username, and don't forget the dot at the end if GoDaddy requires it).*

### 🎉 You're Done!
DNS changes can take anywhere from a few minutes to a few hours to propagate globally. Once they do, typing `barkinalacam.com` into the browser will securely load his brand new website!
