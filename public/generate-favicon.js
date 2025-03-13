const { createCanvas } = require('canvas');
const fs = require('fs');
const sharp = require('sharp');

// Create a 32x32 canvas
const canvas = createCanvas(32, 32);
const ctx = canvas.getContext('2d');

// Fill with a blue background (using a color similar to Tailwind's blue-500)
ctx.fillStyle = '#3B82F6';
ctx.fillRect(0, 0, 32, 32);

// Add text "M"
ctx.fillStyle = 'white';
ctx.font = 'bold 24px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('M', 16, 16);

// Convert to PNG buffer
const pngBuffer = canvas.toBuffer('image/png');

// Save as PNG first
fs.writeFileSync('favicon.png', pngBuffer);

// Convert PNG to ICO using sharp
sharp(pngBuffer)
  .resize(32, 32)
  .toFile('favicon.ico', (err) => {
    if (err) {
      console.error('Error creating favicon.ico:', err);
    } else {
      console.log('favicon.ico created successfully!');
      
      // Clean up the PNG file
      fs.unlinkSync('favicon.png');
    }
  });