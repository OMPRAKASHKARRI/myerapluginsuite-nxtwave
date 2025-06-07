# MyEra Sticker Canvas

A beautiful, interactive sticker canvas application built with React, TypeScript, and Konva. Create stunning sticker compositions with drag-and-drop functionality, smart grid snapping, and high-quality PNG export capabilities.

## 🎨 Features

### Core Functionality
- **Interactive Canvas**: 600×400 pixel Konva-powered canvas for sticker placement
- **Sticker Library**: Three beautiful emoji stickers (🌟 Star, 🎈 Balloon, 🎨 Palette)
- **Drag & Drop**: Smooth dragging with visual feedback and shadow effects
- **PNG Export**: High-quality canvas download with 2x pixel ratio for crisp images
- **Grid Snapping**: Smart 40px grid alignment for perfect sticker positioning

### Bonus Features
- **Double-Click Delete**: Remove stickers easily with double-tap
- **Grid Visualization**: Subtle grid lines for precise placement guidance
- **Canvas Boundaries**: Automatic boundary detection to keep stickers in view
- **Real-time Stats**: Live sticker count and canvas information
- **Clear Function**: Reset canvas with one click

### User Experience
- **Modern Design**: Beautiful gradient backgrounds and glass-morphism effects
- **Responsive Layout**: Optimized for desktop and tablet viewing
- **Smooth Animations**: Hover effects, scaling, and transition animations
- **Visual Feedback**: Shadow effects and scaling for active stickers
- **Intuitive Controls**: Clear labeling and disabled states for better UX

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd myera-sticker-canvas
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be available in the `dist` folder.

## 🛠️ Technology Stack

- **React 18**: Modern React with functional components and hooks
- **TypeScript**: Full type safety and enhanced developer experience
- **Konva**: Powerful 2D canvas library for interactive graphics
- **react-konva**: React wrapper for seamless Konva integration
- **Tailwind CSS**: Utility-first CSS framework for beautiful styling
- **Lucide React**: Beautiful, customizable icon library
- **Vite**: Fast build tool and development server

## 📱 Usage

### Adding Stickers
1. Click any of the three sticker buttons in the control panel
2. A new sticker will appear on the canvas at a random, grid-aligned position
3. Each sticker is automatically snapped to a 40px grid for neat alignment

### Moving Stickers
1. Click and drag any sticker on the canvas
2. Visual feedback shows shadow and scaling effects during drag
3. Release to snap the sticker to the nearest grid position
4. Stickers are automatically kept within canvas boundaries

### Deleting Stickers
1. Double-click any sticker to remove it from the canvas
2. The sticker will be instantly deleted with no confirmation needed

### Downloading Your Creation
1. Click the "Download PNG" button in the control panel
2. A high-quality PNG file will be saved to your downloads folder
3. The file includes the current date in the filename

### Clearing the Canvas
1. Click the "Clear Canvas" button to remove all stickers
2. This action resets the canvas to its initial empty state

## 🎯 Assignment Requirements Fulfilled

✅ **600×400 Konva Canvas**: Implemented with proper dimensions and boundaries  
✅ **Three Sticker Buttons**: Star, Balloon, and Palette emoji stickers  
✅ **Click to Add**: Stickers appear at random grid-aligned positions  
✅ **Draggable Stickers**: Full drag-and-drop with visual feedback  
✅ **Download Button**: High-quality PNG export with 2x pixel ratio  
✅ **Double-Click Delete**: Easy sticker removal functionality  
✅ **Grid Snapping**: 40px grid alignment for both placement and dragging  
✅ **Clean Code**: Organized components, proper TypeScript, and clear structure  
✅ **Modern Design**: Production-ready UI with animations and polish  

## 🏗️ Project Structure

```
src/
├── components/
│   ├── StickerButton.tsx    # Individual sticker buttons
│   └── StickerCanvas.tsx    # Main Konva canvas component
├── hooks/
│   └── useCanvasDownload.ts # Canvas download functionality
├── types/
│   └── sticker.ts           # TypeScript type definitions
├── App.tsx                  # Main application component
└── main.tsx                 # Application entry point
```

## 🚀 Performance Optimizations

- **Efficient Rendering**: Only re-renders changed stickers
- **Grid Snapping**: Optimized calculations for smooth performance
- **High-Quality Export**: 2x pixel ratio for crisp downloaded images
- **Boundary Checking**: Prevents stickers from leaving canvas area
- **Memory Management**: Proper cleanup and state management

## 🎨 Design Principles

- **Apple-Level Aesthetics**: Clean, sophisticated visual presentation
- **Intuitive UX**: Clear visual hierarchy and user feedback
- **Responsive Design**: Optimized layouts for different screen sizes
- **Consistent Branding**: Cohesive color scheme and typography
- **Accessibility**: Proper contrast ratios and interactive states

## 📝 Development Notes

This project demonstrates modern React development practices including:
- Functional components with TypeScript
- Custom hooks for reusable logic
- Proper state management with useState
- Component composition and separation of concerns
- Performance optimization techniques
- Professional UI/UX design implementation

---

**Built for MyEra Frontend Internship Assignment**  
Demonstrates proficiency in React, TypeScript, Canvas manipulation, and modern web development practices.