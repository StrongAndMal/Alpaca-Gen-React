# Alpaca Avatar Generator

A modern, responsive React application for creating customizable alpaca avatars. Built with React and styled with CSS.

## Features

- Customizable alpaca parts (eyes, mouth, hair, accessories, legs, neck, and background)
- Random generation of complete avatars or individual parts
- Download your created avatar
- Modern, responsive design
- Mobile-friendly interface
- Smooth animations and transitions

## Live Demo

[Link to live demo will be added after deployment]

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd alpaca-react
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Build for production:

```bash
npm run build
```

## Project Structure

```
alpaca-react/
├── public/
│   ├── assets/
│   │   ├── accessories/
│   │   ├── backgrounds/
│   │   ├── eyes/
│   │   ├── hair/
│   │   ├── leg/
│   │   ├── mouth/
│   │   ├── neck/
│   │   └── nose.png
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Alpaca.js
│   │   └── Alpaca.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Deployment

The application can be deployed to various platforms:

1. **GitHub Pages**:

   - Install gh-pages: `npm install --save gh-pages`
   - Add homepage to package.json: `"homepage": "https://[username].github.io/[repo-name]"`
   - Add deploy script: `"deploy": "gh-pages -d build"`
   - Deploy: `npm run deploy`

2. **Netlify**:

   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`

3. **Vercel**:
   - Import your GitHub repository
   - Automatic deployment with zero configuration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React for the amazing framework
- Google Fonts for the Poppins font
- All contributors and supporters
