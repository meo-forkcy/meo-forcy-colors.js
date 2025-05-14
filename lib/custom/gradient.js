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
