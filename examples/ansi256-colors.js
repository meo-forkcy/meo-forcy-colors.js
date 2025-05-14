var colors = require("../lib/index");

function printANSI256ColorTable() {
  console.log("\n🎨 ANSI 256 Color Table:\n");

  for (let i = 0; i < 256; i++) {
    const bg = `\x1b[48;5;${i}m`;
    const reset = `\x1b[0m`;
    const label = i.toString().padStart(3, " ");
    process.stdout.write(`${bg} ${label} ${reset} `);

    if ((i + 1) % 16 === 0) console.log(); // Newline every 16 colors
  }
}

printANSI256ColorTable();

// gradient test
console.log(colors.gradient("This is gradient string!"));
