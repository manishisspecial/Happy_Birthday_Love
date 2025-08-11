# Romantic Birthday Page for Sameer ❤️

A beautiful, interactive birthday webpage created with React.js and Tailwind CSS for Sameer from Matina.

## ✨ Features

- 🎂 Romantic birthday design with floating hearts
- 🎵 Background music with play/pause control
- 🎭 Interactive buttons with animations:
  - Send a Hug 🤗 (floating hearts)
  - Send a Kiss 💋 (floating kisses)
  - Shower with Love ❤️ (confetti)
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🎨 Beautiful gradient colors and effects

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Navigate to the project folder:**
   ```bash
   cd romantic-birthday-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## 🎵 Customizing Music

To change the background music, edit the `src` attribute in the `<audio>` tag in `src/RomanticBirthdayPage.jsx`:

```jsx
<audio
  ref={audioRef}
  src="YOUR_MUSIC_URL_HERE"
  preload="auto"
/>
```

## 🎨 Customizing Content

You can easily customize:
- Names and messages
- Colors and styling
- Button text and effects
- Background animations

## 📱 Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder.

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **HTML5 Audio API** - Background music
- **CSS Animations** - Smooth effects and transitions

## 💝 Special Features

- **Auto-play music** when the page loads
- **Staggered animations** for content sections
- **Interactive effects** triggered by button clicks
- **Responsive design** that works on all devices
- **Beautiful gradients** and glass-morphism effects

## 📁 Project Structure

```
romantic-birthday-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── RomanticBirthdayPage.jsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

**Made with ❤️ for Sameer from Matina**

Happy Birthday! 🎉🎂✨
