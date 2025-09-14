# 🚀 Deployment Guide

This guide will help you deploy your Anemic Disease Detection System to various hosting platforms.

## 📋 Prerequisites

Before deploying, ensure you have:
- ✅ A GitHub account
- ✅ Your project pushed to a GitHub repository
- ✅ All dependencies listed in `requirements.txt`
- ✅ Production-ready Flask app (already configured)

## ⚠️ Python Version Compatibility

**Important**: Some deployment platforms use Python 3.12 by default, which has compatibility issues with certain packages. We've included:
- `runtime.txt` - Specifies Python 3.11.7 for better compatibility
- `requirements-deploy.txt` - Alternative requirements with version ranges for more flexible deployment

## 🌐 Deployment Options

### Option 1: Heroku (Recommended for Beginners)

Heroku is one of the easiest platforms to deploy Flask applications.

#### Steps:

1. **Create a Heroku account**
   - Go to [heroku.com](https://heroku.com)
   - Sign up for a free account

2. **Install Heroku CLI**
   - Download from [devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)
   - Or install via package manager:
     ```bash
     # Windows (with Chocolatey)
     choco install heroku-cli
     
     # macOS (with Homebrew)
     brew tap heroku/brew && brew install heroku
     
     # Linux
     curl https://cli-assets.heroku.com/install.sh | sh
     ```

3. **Login to Heroku**
   ```bash
   heroku login
   ```

4. **Create a new Heroku app**
   ```bash
   heroku create your-app-name
   ```

5. **Deploy your app**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push heroku main
   ```

6. **Open your app**
   ```bash
   heroku open
   ```

#### Heroku Configuration:
- The `Procfile` is already created
- Environment variables are automatically handled
- Free tier includes 550-1000 dyno hours per month

---

### Option 2: Railway

Railway offers simple deployment with automatic GitHub integration.

#### Steps:

1. **Go to Railway**
   - Visit [railway.app](https://railway.app)
   - Sign up with your GitHub account

2. **Create a new project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure deployment**
   - Railway will auto-detect your Flask app
   - Set the root directory to your project folder
   - The app will automatically deploy

4. **Access your app**
   - Railway provides a public URL
   - Your app will be live at `https://your-app-name.railway.app`

---

### Option 3: Render

Render provides free hosting with automatic deployments.

#### Steps:

1. **Go to Render**
   - Visit [render.com](https://render.com)
   - Sign up with your GitHub account

2. **Create a new Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure the service**
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn Flask.app:app`
   - **Environment**: Python 3

4. **Deploy**
   - Click "Create Web Service"
   - Render will build and deploy your app
   - Your app will be available at `https://your-app-name.onrender.com`

---

### Option 4: PythonAnywhere

PythonAnywhere is great for Python applications with a free tier.

#### Steps:

1. **Create PythonAnywhere account**
   - Go to [pythonanywhere.com](https://pythonanywhere.com)
   - Sign up for a free account

2. **Upload your code**
   - Use the Files tab to upload your project
   - Or clone from GitHub using the Bash console

3. **Create a Web App**
   - Go to the Web tab
   - Click "Add a new web app"
   - Choose Flask
   - Select Python 3.10

4. **Configure the app**
   - Set the source code directory to your project folder
   - Set the WSGI configuration file to `Flask/wsgi.py`

5. **Install dependencies**
   - Use the Bash console to run:
     ```bash
     pip3.10 install --user -r requirements.txt
     ```

6. **Reload your web app**
   - Click the reload button in the Web tab

---

### Option 5: Vercel (Alternative)

Vercel can host Flask apps with some configuration.

#### Steps:

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Create `vercel.json`**
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "Flask/app.py",
         "use": "@vercel/python"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "Flask/app.py"
       }
     ]
   }
   ```

3. **Deploy**
   ```bash
   vercel
   ```

---

## 🔧 Environment Variables

Some platforms may require environment variables. Common ones include:

```bash
# For production
FLASK_ENV=production
FLASK_DEBUG=False

# For database (if you add one later)
DATABASE_URL=your_database_url

# For security
SECRET_KEY=your_secret_key
```

## 📊 Monitoring and Logs

### Heroku
```bash
# View logs
heroku logs --tail

# Check app status
heroku ps
```

### Railway
- Logs are available in the Railway dashboard
- Real-time monitoring included

### Render
- Logs available in the Render dashboard
- Automatic health checks

## 🚨 Troubleshooting

### Common Issues:

1. **Python 3.12 compatibility errors (distutils module not found)**
   - **Solution**: Use `requirements-deploy.txt` instead of `requirements.txt`
   - **Alternative**: Ensure your platform uses Python 3.11 (check `runtime.txt`)
   - **Command**: `pip install -r requirements-deploy.txt`

2. **App crashes on startup**
   - Check that all dependencies are in `requirements.txt`
   - Verify the `Procfile` is correct
   - Check logs for specific error messages

3. **Static files not loading**
   - Ensure static files are in the correct directory
   - Check Flask static file configuration

4. **Model file not found**
   - Verify `model.pkl` is in the Flask directory
   - Check file permissions

5. **Port binding issues**
   - Ensure your app uses `os.environ.get('PORT', 5000)`
   - Don't hardcode port numbers

### Debug Commands:

```bash
# Test locally with production settings
export PORT=5000
python Flask/app.py

# Check if all dependencies are installed
pip check

# Test the app
curl http://localhost:5000
```

## 🔄 Continuous Deployment

Most platforms support automatic deployment when you push to GitHub:

1. **Enable auto-deploy** in your platform's settings
2. **Push changes** to your main branch
3. **Platform automatically rebuilds** and deploys

## 💰 Cost Considerations

| Platform | Free Tier | Paid Plans |
|----------|-----------|------------|
| Heroku | 550-1000 dyno hours/month | $7/month+ |
| Railway | $5 credit/month | $5/month+ |
| Render | 750 hours/month | $7/month+ |
| PythonAnywhere | 1 web app, 3 months | $5/month+ |
| Vercel | 100GB bandwidth | $20/month+ |

## 🎯 Recommended Deployment Strategy

1. **Start with Heroku** for simplicity
2. **Use Railway** for better performance
3. **Consider Render** for cost-effectiveness
4. **Upgrade to paid plans** as your app grows

## 📞 Support

If you encounter issues:

1. Check the platform's documentation
2. Look at the deployment logs
3. Test your app locally first
4. Create an issue in this repository

---

**Happy Deploying! 🚀**
