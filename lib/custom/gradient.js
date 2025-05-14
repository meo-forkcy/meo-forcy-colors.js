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
  const chars = str.split('');
  const len = chars.length;
  const step = colorCodes.length / len;

  return chars.map((ch, i) => {
    const colorIndex = Math.floor(i * step);
    const code = colorCodes[colorIndex];
    return `\x1b[38;5;${code}m${ch}`;
  }).join('') + '\x1b[0m';
};
