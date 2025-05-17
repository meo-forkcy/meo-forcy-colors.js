# ⚡ `meo-forkcy-colors.js`

> 🧪 A **custom fork** of [`colors`](https://github.com/Marak/colors.js) by [Marak Squires](https://github.com/Marak), maintained by [meo-forkcy](https://github.com/meo-forkcy) for educational and non-commercial use.

[![npm version](https://img.shields.io/npm/v/colors.svg)](https://www.npmjs.org/package/meo-forkcy-colors)

📍 Check out the [ROADMAP](ROADMAP.md) for upcoming features.
💬 Feel free to open issues for feedback or contribute via the `develop` branch.

---

## 📦 Installation

```bash
npm i meo-forkcy-colors
```

---

## 🎨 Features

### ✅ Text Colors

```
black, red, green, yellow, blue, magenta, cyan, white, gray/grey
orange, lightOrange, lightYellow, lime, teal, skyBlue, lightBlue, pink, purple, lightGray
```

### 🌟 Bright Text Colors

```
brightRed, brightGreen, brightYellow, brightBlue, brightMagenta, brightCyan, brightWhite
```

### 🎨 Background Colors

```
bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite, bgGray/bgGrey
```

### 💡 Bright Background Colors

```
bgBrightRed, bgBrightGreen, bgBrightYellow, bgBrightBlue, bgBrightMagenta, bgBrightCyan, bgBrightWhite
```

### ✨ Styles

```
reset, bold, dim, italic, underline, inverse, hidden, strikethrough
```

### 🌈 Extras

```
rainbow, zebra, america, trap, random, gradient
```

---

## 🚀 Usage

### 1. Extend `String.prototype`

```js
const colors = require('colors');

console.log('hello'.green);
console.log('i like cake'.underline.red);
console.log('inverse'.inverse);
console.log('OMG Rainbows!'.rainbow);
console.log('Trap music!'.trap);
```

### 2. Safe Mode (no prototype pollution)

```js
const colors = require('colors/safe');

console.log(colors.green('hello'));
console.log(colors.red.underline('i like cake'));
console.log(colors.inverse('inverse'));
console.log(colors.rainbow('OMG Rainbows!'));
console.log(colors.trap('Trap music!'));
```

---

## 🔧 Enable/Disable Colors

### CLI Flags

```bash
node app.js --no-color
node app.js --color=false
node app.js --color
node app.js --color=always

# or using environment variable
FORCE_COLOR=1 node app.js
```

### In Code

```js
colors.enable();
colors.disable();
```

---

## 📜 String Substitution

```js
const name = 'Marak';
console.log(colors.green('Hello %s'), name);
// -> Hello Marak
```

---

## 🎯 Custom Themes

### Standard API

```js
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
  link: 'grey',
  love: 'pink'
});

console.log('this is an error'.error);
console.log('this is a warning'.warn);
```

### Safe API

```js
const colors = require('colors/safe');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
  link: 'grey',
  love: 'pink'
});

console.log(colors.error('this is an error'));
console.log(colors.warn('this is a warning'));
```

---

## 🎨 Combining Styles

```js
colors.setTheme({
  custom: ['red', 'underline'],
});

console.log('styled text'.custom);
```

---

## 🌈 Gradient Text

```js
// Custom gradient
console.log(colors.gradient('Sunset!', [196, 202, 208, 214, 220, 226]));

// Random preset
console.log(colors.gradient('Random Gradient!'));
```

🖼 Preview ANSI 256 Colors:
Check `examples/ansi256-colors.js` or
🔗 [Wikipedia: ANSI Escape Codes](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit)

---

> 🕵️ **Protip:** There’s a hidden undocumented style.
> If you find it, **you can summon him**...
