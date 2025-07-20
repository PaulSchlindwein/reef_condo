# Reef Condo - Atlantis Resort Website

A modern, responsive website showcasing a luxury condo rental at Atlantis Resort in the Bahamas. Built with Next.js, TypeScript, and Tailwind CSS.

## 🏝️ Features

- **Responsive Design**: Mobile-first design that works perfectly on all devices
- **Interactive Activities**: Browse and filter on-resort and off-resort activities
- **Excursion Booking**: Explore and book various excursions and adventures
- **Photo Gallery**: Beautiful image gallery with lightbox functionality
- **Contact Form**: Easy booking and inquiry system
- **SEO Optimized**: Built with Next.js for excellent search engine optimization
- **Static Generation**: Fast loading with static site generation

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)
- **Form Handling**: Formspree (can be integrated)

## 📁 Project Structure

```
reef_condo/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── activities/         # Activity pages
│   │   ├── condo/             # Condo details page
│   │   ├── excursions/        # Excursions page
│   │   ├── gallery/           # Photo gallery
│   │   ├── contact/           # Contact page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Site footer
│   │   └── ActivityCard.tsx   # Activity display card
│   └── data/                  # Static data
│       └── activities.ts      # Activities and excursions data
├── public/                    # Static assets
│   └── images/               # Image files
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── next.config.js            # Next.js configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/reef-condo.git
cd reef-condo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📸 Adding Images

Place your images in the `public/images/` directory. The following images are referenced in the code:

### Required Images:
- `hero-condo.jpg` - Hero image for home page
- `condo-hero.jpg` - Hero image for condo page
- `condo-living-room.jpg` - Living room photo
- `condo-master-bedroom.jpg` - Master bedroom photo
- `condo-kitchen.jpg` - Kitchen photo
- `condo-balcony.jpg` - Balcony photo

### Activity Images:
- `nobu.jpg` - Nobu restaurant
- `casa-d-amore.jpg` - Casa D'Amore restaurant
- `virgils-bbq.jpg` - Virgil's BBQ
- `aqualounge.jpg` - Aqualounge bar
- `sip-sip.jpg` - Sip Sip bar
- `aquaventure.jpg` - Aquaventure water park
- `marine-habitat.jpg` - Marine habitat
- `mandara-spa.jpg` - Mandara spa

### Local Activity Images:
- `fish-fry.jpg` - Arawak Cay fish fry
- `cafe-matisse.jpg` - Café Matisse
- `senor-frogs.jpg` - Senor Frog's
- `green-parrot.jpg` - Green Parrot bar
- `queens-staircase.jpg` - Queen's Staircase
- `cable-beach.jpg` - Cable Beach
- `fort-charlotte.jpg` - Fort Charlotte

### Excursion Images:
- `swimming-pigs.jpg` - Swimming pigs excursion
- `fishing-charter.jpg` - Fishing charter
- `snorkeling-tour.jpg` - Snorkeling tour
- `island-hopping.jpg` - Island hopping tour

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  'ocean-blue': '#1e3a8a',
  'sand-beige': '#fef3c7',
  'coral-pink': '#fecaca',
  'seafoam-green': '#a7f3d0',
}
```

### Content
Update the content in `src/data/activities.ts` to modify:
- Activity descriptions
- Restaurant information
- Excursion details
- Condo amenities

### Styling
Modify `src/app/globals.css` for global styles and `tailwind.config.js` for theme customization.

## 📧 Contact Form Integration

To enable the contact form functionality, you can integrate with:

1. **Formspree**: Add your Formspree endpoint to the form action
2. **Netlify Forms**: Add `data-netlify="true"` to the form
3. **Custom API**: Create an API route in `src/app/api/`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3
- Cloudflare Pages

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Semantic HTML structure
- Optimized images with Next.js Image component
- Fast loading with static generation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email info@reefcondo.com or create an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS
