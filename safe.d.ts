// Type definitions for Colors.js 1.2
// Project: https://github.com/Marak/colors.js
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, Staffan Eketorp <https://github.com/staeke>
// Definitions: https://github.com/Marak/colors.js

export const enabled: boolean;
export function enable(): void;
export function disable(): void;
export function setTheme(theme: any): void;

export function strip(str: string): string;
export function stripColors(str: string): string;

export function black(str: string): string;
export function red(str: string): string;
export function green(str: string): string;
export function yellow(str: string): string;
export function blue(str: string): string;
export function magenta(str: string): string;
export function cyan(str: string): string;
export function white(str: string): string;
export function gray(str: string): string;
export function grey(str: string): string;

export function orange(str: string): string;
export function lime(str: string): string;
export function teal(str: string): string;
export function skyBlue(str: string): string;
export function pink(str: string): string;
export function purple(str: string): string;

export function lightGray(str: string): string;
export function lightBlue(str: string): string;
export function lightOrange(str: string): string;
export function lightYellow(str: string): string;

export function bgBlack(str: string): string;
export function bgRed(str: string): string;
export function bgGreen(str: string): string;
export function bgYellow(str: string): string;
export function bgBlue(str: string): string;
export function bgMagenta(str: string): string;
export function bgCyan(str: string): string;
export function bgWhite(str: string): string;

export function reset(str: string): string;
export function bold(str: string): string;
export function dim(str: string): string;
export function italic(str: string): string;
export function underline(str: string): string;
export function inverse(str: string): string;
export function hidden(str: string): string;
export function strikethrough(str: string): string;

export function rainbow(str: string): string;
export function zebra(str: string): string;
export function america(str: string): string;
export function trap(str: string): string;
export function random(str: string): string;
export function zalgo(str: string): string;
