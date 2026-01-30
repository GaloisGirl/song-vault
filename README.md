# song-vault

A static website for organizing and displaying songs, built with 11ty (Eleventy) and Tailwind CSS.

## Features

- **Common header and footer** on all pages
- **Content separated from presentation** - Songs can be provided as JSON with elements for verses, bridges, choruses, etc.
- **Styled with Tailwind CSS** for a modern, responsive design
- **Built with 11ty** - Fast and flexible static site generator
- **Hello World page** as a starting point

## Screenshot

![Song Vault Homepage](https://github.com/user-attachments/assets/61fdc664-cd18-48dc-91b9-669964205f78)

## Prerequisites

- Node.js (v14 or higher recommended)
- npm

## Installation

1. Clone the repository:
```bash
git clone https://github.com/GaloisGirl/song-vault.git
cd song-vault
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development

To start the development server with hot reload:

```bash
npm start
```

The site will be available at http://localhost:8080

### Building

To build the site for production:

```bash
npm run build
```

The built site will be in the `_site` directory.

### Build Scripts

- `npm run build:css` - Build Tailwind CSS
- `npm run build:11ty` - Build 11ty site
- `npm run build` - Build both CSS and 11ty site
- `npm run watch:css` - Watch and rebuild CSS on changes
- `npm run watch:11ty` - Watch and rebuild site with dev server
- `npm start` - Build CSS and start dev server

## Project Structure

```
song-vault/
├── src/
│   ├── _includes/       # Layout templates
│   │   └── base.njk     # Base layout with header and footer
│   ├── _data/           # Data files (for future JSON songs)
│   ├── css/
│   │   ├── input.css    # Tailwind CSS input
│   │   └── output.css   # Generated CSS (gitignored)
│   └── index.njk        # Homepage (Hello World)
├── _site/               # Generated static site (gitignored)
├── .eleventy.js         # 11ty configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies and scripts
```

## Customization

### Adding New Pages

Create new `.njk` or `.md` files in the `src/` directory. They will automatically use the base layout if you add the front matter:

```yaml
---
layout: base.njk
title: Your Page Title
---
```

### Styling

- Tailwind CSS classes can be used throughout your templates
- Modify `src/css/input.css` to add custom CSS
- Configure Tailwind in `tailwind.config.js`

### Layouts

- Edit `src/_includes/base.njk` to modify the header, footer, or overall page structure
- Create additional layouts in the `src/_includes/` directory

## Future Enhancements

- Add song pages with JSON data
- Create a song listing page
- Add search and filtering functionality
- Include more layout options for different page types

## License

ISC.
