// One Emoji, One Smile — entry for @syukuran.
//
// The program writes exactly one emoji to entry.txt inside the output
// directory and nothing else: no words, no caption, no explanation.
// The grader sandbox uses /output; set MAKEFUN_OUTPUT_DIR to override
// the directory for a local run.
//
// The emoji: 🌞 U+1F31E SUN WITH FACE.
//
// Why this one, against the judge's brief (warmth first, then
// universality, chosen-not-default, right-for-a-stranger):
// - It is a smiling face AND literal warmth in a single glyph: the sun
//   is warm by nature, and the face on it is smiling. A stranger sees
//   a smile and feels sunshine at the same instant — no context needed.
// - It beats a hug (🤗) on the stranger test: a hug is physical contact
//   from someone unknown, which can read too intimate; sunshine asks
//   nothing of the stranger and imposes nothing on them.
// - It beats heart-hands (🫶) on readability: hands alone show no face
//   and no smile, and the gesture is trendy enough that an older
//   stranger may not read it at first glance. The sun's face smiles
//   plainly, to any age, in any culture.
// - Chosen, not default: it is not the first smiley that comes to mind
//   (🙂 / 😊). A sun with a face is a deliberate pick for the moment.
// - No irony, no in-joke, no flirtation, no sarcasm: sunshine is kind
//   to everyone, equally, from a stranger or a friend.
//
// Gate: 1 character, 4 bytes UTF-8, no trailing newline — inside the
// 1–8 character gate, not whitespace-only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🌞"; // U+1F31E SUN WITH FACE

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
