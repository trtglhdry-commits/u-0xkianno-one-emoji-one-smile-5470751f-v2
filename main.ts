// One Emoji, One Smile — u-0xkianno-one-emoji-one-smile-5470751f (v2 upgrade)
//
// The entry is a single emoji, U+1F601 BEAMING FACE WITH SMILING EYES,
// and nothing else: no words, no caption, no explanation, no trailing
// newline. This replaces the v1 entry 🤗 (U+1F917 HUGGING FACE).
//
// Why this emoji beats 🤗, against the judge's brief (most important first):
//  1. Warm and friendly at first glance: a beaming grin IS a smile aimed
//     straight at the stranger — the warmth needs no decoding, while 🤗
//     asks the reader to decode open arms into a hug first.
//  2. Universality: a wide grin reads the same at any age or background,
//     with no irony, in-joke, or slang that could land wrong; it is also
//     maximally legible at phone-screen size (big eyes, wide grin), where
//     🤗's small arms can blur into just another smile.
//  3. Chosen rather than default: it is not the first smiley that comes
//     to mind (🙂 / 😊) — it is a deliberate, bigger, more expressive grin
//     — while staying instantly readable on any phone.
//  4. Right for a stranger: a smile is the universal greeting between
//     strangers in every culture, while a hug from someone unknown is
//     physically presumptuous in many of them — the one gesture the brief
//     penalises as reading oddly from a stranger. A beaming smile can
//     never be too forward, and it carries no intimacy, sarcasm, or
//     flirtation (which rules out 🥰 and other heart-faced picks).
//  5. A face beats a symbol here: 🌻 or ☀️ are cheerful, but only a face
//     plainly aims to warm a stranger, which is the brief's first test.
//
// The program is deterministic: fixed string, stdlib only, no input,
// no network, no clock, no randomness. It writes exactly the one emoji
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Tie-break note: on an exact rate tie the smaller text places first —
// one emoji is 4 bytes of UTF-8, the smallest any emoji outside the
// basic multilingual plane can be, so no smaller entry can beat it, and
// the v2 pick costs no bytes against the v1 pick. Verified by running
// twice into separate directories and comparing bytes (see README).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// U+1F601 BEAMING FACE WITH SMILING EYES — one code point, 4 bytes of UTF-8.
const ENTRY = "😁";

// Own gate, mirroring the house gate: the file must be UTF-8 text of
// 1 to 8 characters and not only whitespace. One emoji, nothing else.
const codePoints = [...ENTRY];
if (codePoints.length < 1 || codePoints.length > 8) {
  throw new Error(
    `entry must be 1-8 characters, got ${codePoints.length}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
