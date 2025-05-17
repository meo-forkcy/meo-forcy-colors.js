/**
 * Applies a "Zalgo" text effect to the input string by adding a combination of 
 * diacritic-like Unicode characters above, below, and in the middle of each letter.
 * 
 * The result is a glitched, corrupted-looking string often used for horror-themed 
 * or chaotic visual text effects, mimicking the idea that "he comes".
 * 
 * ⚠️ Use with care. Too much Zalgo can make text unreadable, and rendering large 
 * amounts of it may slow down some applications.
 *
 * @param {string} [text="   he is here   "] - The input text to corrupt.
 * @param {Object} [options] - Optional configuration for the corruption effect.
 * @param {boolean} [options.up=true] - Whether to add diacritics above characters.
 * @param {boolean} [options.mid=true] - Whether to add diacritics in the middle of characters.
 * @param {boolean} [options.down=true] - Whether to add diacritics below characters.
 * @param {string} [options.size="maxi"] - Amount of corruption: "mini", "maxi", or default.
 * @returns {string} The corrupted Zalgo text.
 *
 * @example
 * zalgo("hello");
 * // Possible output: "h̷́͛͞e̸̛̥ͦl̴̬͂l̪̎͡o̢͙̗̿" (exact result will vary each time)
 */


// please no
module.exports = function zalgo(text, options) {
  text = text || "   he is here   ";
  var soul = {
    up: [
      "̍",
      "̎",
      "̄",
      "̅",
      "̿",
      "̑",
      "̆",
      "̐",
      "͒",
      "͗",
      "͑",
      "̇",
      "̈",
      "̊",
      "͂",
      "̓",
      "̈",
      "͊",
      "͋",
      "͌",
      "̃",
      "̂",
      "̌",
      "͐",
      "̀",
      "́",
      "̋",
      "̏",
      "̒",
      "̓",
      "̔",
      "̽",
      "̉",
      "ͣ",
      "ͤ",
      "ͥ",
      "ͦ",
      "ͧ",
      "ͨ",
      "ͩ",
      "ͪ",
      "ͫ",
      "ͬ",
      "ͭ",
      "ͮ",
      "ͯ",
      "̾",
      "͛",
      "͆",
      "̚",
    ],
    down: [
      "̖",
      "̗",
      "̘",
      "̙",
      "̜",
      "̝",
      "̞",
      "̟",
      "̠",
      "̤",
      "̥",
      "̦",
      "̩",
      "̪",
      "̫",
      "̬",
      "̭",
      "̮",
      "̯",
      "̰",
      "̱",
      "̲",
      "̳",
      "̹",
      "̺",
      "̻",
      "̼",
      "ͅ",
      "͇",
      "͈",
      "͉",
      "͍",
      "͎",
      "͓",
      "͔",
      "͕",
      "͖",
      "͙",
      "͚",
      "̣",
    ],
    mid: [
      "̕",
      "̛",
      "̀",
      "́",
      "͘",
      "̡",
      "̢",
      "̧",
      "̨",
      "̴",
      "̵",
      "̶",
      "͜",
      "͝",
      "͞",
      "͟",
      "͠",
      "͢",
      "̸",
      "̷",
      "͡",
      " ҉",
    ],
  };
  var all = [].concat(soul.up, soul.down, soul.mid);

  function randomNumber(range) {
    var r = Math.floor(Math.random() * range);
    return r;
  }

  function isChar(character) {
    var bool = false;
    all.filter(function (i) {
      bool = i === character;
    });
    return bool;
  }

  function heComes(text, options) {
    var result = "";
    var counts;
    var l;
    options = options || {};
    options["up"] = typeof options["up"] !== "undefined" ? options["up"] : true;
    options["mid"] =
      typeof options["mid"] !== "undefined" ? options["mid"] : true;
    options["down"] =
      typeof options["down"] !== "undefined" ? options["down"] : true;
    options["size"] =
      typeof options["size"] !== "undefined" ? options["size"] : "maxi";
    text = text.split("");
    for (l in text) {
      if (isChar(l)) {
        continue;
      }
      result = result + text[l];
      counts = { up: 0, down: 0, mid: 0 };
      switch (options.size) {
        case "mini":
          counts.up = randomNumber(8);
          counts.mid = randomNumber(2);
          counts.down = randomNumber(8);
          break;
        case "maxi":
          counts.up = randomNumber(16) + 3;
          counts.mid = randomNumber(4) + 1;
          counts.down = randomNumber(64) + 3;
          break;
        default:
          counts.up = randomNumber(8) + 1;
          counts.mid = randomNumber(6) / 2;
          counts.down = randomNumber(8) + 1;
          break;
      }

      var arr = ["up", "mid", "down"];
      for (var d in arr) {
        var index = arr[d];
        for (var i = 0; i <= counts[index]; i++) {
          if (options[index]) {
            result = result + soul[index][randomNumber(soul[index].length)];
          }
        }
      }
    }
    return result;
  }
  // don't summon him
  return heComes(text, options);
};

// that's how the war begin :(
