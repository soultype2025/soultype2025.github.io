# SOUL TYPE - Tour Website

A high-quality, artistic, and edgy website inspired by the aesthetic and interactive feel of modern music artist websites. Built with a dark, gritty urban aesthetic and immersive design elements.

## 🚀 Features

### ✨ Visual Experience
- **Full-screen immersive design** with dark, gritty urban aesthetic
- **Custom animated backgrounds** with noise and grunge textures
- **Glitch effects** and animated elements throughout
- **Responsive design** for all devices
- **Custom cursor** with hover interactions

### 🎵 Interactive Elements
- **Loading screen** with animated logo and progress bar
- **Scroll-triggered animations** using GSAP ScrollTrigger
- **Custom audio player** with track controls
- **Hover effects** and micro-interactions
- **Parallax scrolling** effects

### 🎨 Design Elements
- **Neon color scheme** (red #ff0000, yellow #ffff00)
- **Grunge textures** and visual noise overlays
- **Typography** with glitch animations
- **Smooth transitions** between sections
- **Modern UI components** with hover states

## 🛠️ Technology Stack

- **HTML5** - Semantic markup structure
- **CSS3** - Advanced animations and responsive design
- **Vanilla JavaScript** - Interactive functionality
- **GSAP (GreenSock)** - Professional animations and ScrollTrigger
- **Font Awesome** - Icon library
- **CSS Grid & Flexbox** - Modern layout systems

## 📁 File Structure

```
soultype/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/             # Media assets folder (create this)
    ├── hero-bg.jpg     # Hero background image
    ├── ambient.mp3     # Background ambient audio
    ├── click.mp3       # Click sound effect
    └── glitch-noise.png # Noise texture
```

## 🚀 Quick Start

### 1. Local Development
1. **Download/Clone** the project files
2. **Open** `index.html` in your web browser
3. **Or** use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### 2. Live Preview
- Open `http://localhost:8000` in your browser
- The website will load with a 3-second loading screen
- Navigate using the navigation menu or scroll naturally

## 🎨 Customization Guide

### Branding & Content
- **Change "SOUL TYPE"** to your artist name in `index.html`
- **Update tour dates** in the tour section
- **Modify track list** in `script.js` (tracks array)
- **Add your social media links** in the contact section

### Colors & Aesthetics
- **Primary colors** are defined in CSS variables (can be added)
- **Red accent**: `#ff0000`
- **Yellow accent**: `#ffff00`
- **Background**: `#000000` (pure black)

### Audio & Media
- **Add background music**: Place your audio file in `assets/ambient.mp3`
- **Add click sounds**: Place your sound effect in `assets/click.mp3`
- **Add hero background**: Place your image in `assets/hero-bg.jpg`
- **Uncomment audio lines** in `script.js` when you have audio files

### Tour Dates
Edit the tour section in `index.html`:
```html
<div class="tour-date">
    <div class="date-info">
        <div class="date">YOUR DATE</div>
        <div class="city">YOUR CITY</div>
        <div class="venue">YOUR VENUE</div>
    </div>
    <button class="ticket-btn">GET TICKETS</button>
</div>
```

### Music Player
Update the tracks array in `script.js`:
```javascript
const tracks = [
    { name: 'YOUR TRACK NAME', artist: 'YOUR ARTIST NAME', duration: 180 },
    // Add more tracks...
];
```

## 🎯 Key Sections

### 1. Hero Section
- **Full-screen landing** with animated logo
- **Enter Site button** with hover effects
- **Scroll indicator** for user guidance

### 2. Tour Section
- **Grid layout** of tour dates
- **Hover animations** on each date
- **Ticket buttons** (customize for your ticketing system)

### 3. Music Section
- **Custom audio player** with controls
- **Album art display** (currently gradient placeholder)
- **Track information** and progress bar

### 4. Gallery Section
- **Grid layout** for images/media
- **Hover overlays** with titles
- **Click interactions** (add your gallery functionality)

### 5. Contact Section
- **Social media links** with hover effects
- **Newsletter signup** form
- **Responsive layout** for all devices

## 🔧 Advanced Customization

### Adding New Sections
1. **Create section** in `index.html`
2. **Add CSS styles** in `styles.css`
3. **Add animations** in `script.js` using GSAP

### Custom Animations
```javascript
// Example: Add custom scroll animation
gsap.fromTo('.your-element', {
    opacity: 0,
    y: 100
}, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.your-element',
        start: 'top 80%',
        end: 'bottom 20%'
    }
});
```

### Performance Optimization
- **Reduce motion** for accessibility
- **Throttled scroll events** for smooth performance
- **Optimized animations** using GSAP

## 🌐 Browser Support

- **Chrome** 80+ ✅
- **Firefox** 75+ ✅
- **Safari** 13+ ✅
- **Edge** 80+ ✅
- **Mobile browsers** ✅

## 📱 Mobile Responsiveness

- **Responsive grid layouts**
- **Mobile-first navigation**
- **Touch-friendly interactions**
- **Optimized for all screen sizes**

## 🎵 Audio Features

### Background Music
- **Looping ambient audio** (uncomment when you have audio files)
- **Volume controls** (can be added)
- **Auto-play prevention** for better UX

### Sound Effects
- **Click sounds** on interactive elements
- **Hover audio feedback** (can be implemented)
- **Audio context management** for mobile devices

## 🚀 Deployment

### Static Hosting
- **Netlify** - Drag and drop deployment
- **Vercel** - Git-based deployment
- **GitHub Pages** - Free hosting for public repos
- **AWS S3** - Scalable static hosting

### Custom Domain
- **Point your domain** to your hosting provider
- **SSL certificate** (usually automatic)
- **CDN** for global performance

## 🔒 Security & Best Practices

- **No external dependencies** except CDN libraries
- **XSS protection** through proper HTML encoding
- **Mobile-first responsive design**
- **Accessibility considerations** (ARIA labels, keyboard navigation)

## 🎨 Design Philosophy

This website follows the **"Dark, Gritty, Urban"** aesthetic:
- **Minimal navigation** with hover-based interactions
- **High contrast** neon colors on black backgrounds
- **Grunge textures** and visual noise for authenticity
- **Smooth animations** that enhance rather than distract
- **Immersive experience** that feels like an art installation

## 🤝 Contributing

Feel free to:
- **Customize** the design for your needs
- **Add features** like additional sections
- **Optimize** performance for your use case
- **Share** your modifications with the community

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For questions or issues:
1. **Check the code comments** for implementation details
2. **Review the console** for JavaScript errors
3. **Test in different browsers** for compatibility issues
4. **Validate HTML/CSS** using online validators

## 🎉 Getting Creative

This website is designed to be a **canvas for your creativity**:
- **Add your own images** and media
- **Customize the color scheme** to match your brand
- **Implement additional features** like merch store or blog
- **Create unique animations** that reflect your style

---

**Built with ❤️ for the underground music scene**

*Experience the raw energy. Feel the dark soul.*
