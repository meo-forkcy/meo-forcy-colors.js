var assert = require("assert");
var colors = require("../safe");

var s = "string";

function a(s, code) {
  return "\x1B[" + code.toString() + "m" + s + "\x1B[39m";
}

function assertEqual(s, color, code) {
  assert.equal(colors[color](s), a(s, code));
  assert.equal(colors.strip(s), s);
}

var stylesColors = [
  "white",
  "black",
  "blue",
  "cyan",
  "green",
  "magenta",
  "red",
  "yellow",
  "brightYellow",
  "brightRed",
  "brightGreen",
  "brightBlue",
  "brightWhite",
  "brightCyan",
  "brightMagenta",
  "lime",
  "teal",
  "pink",
  "purple",
  "skyBlue",
  "lightBlue",
  "lightGray",
  "lightOrange",
  "lightYellow",
];
// eslint-disable-next-line
var stylesAll = stylesColors.concat([
  "bold",
  "italic",
  "underline",
  "inverse",
  "rainbow",
]);

colors.mode = "console";
assert.equal(colors.bold(s), "\x1B[1m" + s + "\x1B[22m");
assert.equal(colors.italic(s), "\x1B[3m" + s + "\x1B[23m");
assert.equal(colors.underline(s), "\x1B[4m" + s + "\x1B[24m");
assert.equal(colors.strikethrough(s), "\x1B[9m" + s + "\x1B[29m");
assert.equal(colors.inverse(s), "\x1B[7m" + s + "\x1B[27m");

assert.ok(colors.rainbow);

assertEqual(s, "white", 37);
assertEqual(s, "grey", 90);
assertEqual(s, "black", 30);
assertEqual(s, "blue", 34);
assertEqual(s, "cyan", 36);
assertEqual(s, "green", 32);
assertEqual(s, "magenta", 35);
assertEqual(s, "red", 31);
assertEqual(s, "yellow", 33);

assertEqual(s, "lime", 39);
assertEqual(s, "teal", 39);
assertEqual(s, "pink", 39);
assertEqual(s, "purple", 39);
assertEqual(s, "skyBlue", 39);
assertEqual(s, "lightBlue", 39);
assertEqual(s, "lightGray", 39);
assertEqual(s, "lightOrange", 39);
assertEqual(s, "lightYellow", 39);

assertEqual(s, "brightWhite", 97);
assertEqual(s, "brightBlue", 94);
assertEqual(s, "brightCyan", 96);
assertEqual(s, "brightGreen", 92);
assertEqual(s, "brightMagenta", 95);
assertEqual(s, "brightRed", 91);
assertEqual(s, "brightYellow", 93);

assert.equal(s, "string");

var testStringWithNewLines = s + "\n" + s;

// single style
assert.equal(
  colors.red(testStringWithNewLines),
  "\x1b[31m" + s + "\x1b[39m" + "\n" + "\x1b[31m" + s + "\x1b[39m"
);

var testStringWithNewLinesStyled = colors.underline(s) + "\n" + colors.bold(s);

// nested styles
assert.equal(
  colors.red(testStringWithNewLinesStyled),
  "\x1b[31m" +
    "\x1b[4m" +
    s +
    "\x1b[24m" +
    "\x1b[39m" +
    "\n" +
    "\x1b[31m" +
    "\x1b[1m" +
    s +
    "\x1b[22m" +
    "\x1b[39m"
);

colors.setTheme({ error: "red" });

assert.equal(typeof colors.red("astring"), "string");
assert.equal(typeof colors.error("astring"), "string");

colors.setTheme({ custom: ["blue", "bold", "underline"] });
assert.equal(
  colors.custom(s),
  "\x1b[4m" + "\x1b[1m" + "\x1b[34m" + s + "\x1b[39m" + "\x1b[22m" + "\x1b[24m"
);

colors.setTheme({ custom: ["red", "italic", "inverse"] });
assert.equal(
  colors.custom(s),
  "\x1b[7m" + "\x1b[3m" + "\x1b[31m" + s + "\x1b[39m" + "\x1b[23m" + "\x1b[27m"
);

// should not throw error on null or undefined values
var undef;
assert.equal(colors.yellow(undef), "\x1b[33mundefined\x1b[39m");

// was failing:
assert.equal(colors.red(null), "\x1b[31mnull\x1b[39m");
