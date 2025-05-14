/**
 * Gradient formatter for colors library
 * Applies a horizontal gradient effect using ANSI 256 colors.
 *
 * @param {string} str - The string to style.
 * @param {number[]} [colorCodes] - Optional array of ANSI 256 color codes for gradient.
 *                                  If not provided, a random gradient will be used.
 * @returns {string} - Stylized string with gradient.
 */

module.exports = function gradient(str, colorCodes) {
  if (typeof str !== 'string') str = String(str);

  // Default random gradient (blue → magenta → red)
  if (!Array.isArray(colorCodes) || colorCodes.length < 2) {
    colorCodes = getRandomGradient();
  }

  const chars = str.split('');
  const steps = colorCodes.length;
  const step = steps / chars.length;

  return chars.map((ch, i) => {
    const index = Math.min(Math.floor(i * step), steps - 1);
    return `\x1b[38;5;${colorCodes[index]}m${ch}`;
  }).join('') + '\x1b[0m';
};

/**
 * Returns a randomly chosen gradient from preset options.
 * Useful when no custom colors are provided.
 */
function getRandomGradient() {
  const presets = [
    [196, 202, 208, 214, 220, 226], // Sunset
    [27, 33, 39, 45, 51, 87],       // Ocean
    [129, 135, 141, 147, 153, 159], // Cool Gray
    [201, 198, 205, 212, 219],      // Pinky
    [46, 82, 118, 154, 190, 226],   // Lime to Yellow
    [196, 202, 226, 46, 21, 93, 201]// Rainbow
  ];
  const pick = Math.floor(Math.random() * presets.length);
  return presets[pick];
}
