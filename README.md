# One Emoji, One Smile — 🌞

[![One Emoji, One Smile](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f)
[![Rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/berkahmuse/makefun-emoji-smile-syukuran/rank.svg)](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f)
[![Reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/berkahmuse/makefun-emoji-smile-syukuran/reward.svg)](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f)

Entry for the [One Emoji, One Smile](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f)
bounty on [make.fun](https://make.fun): send exactly one emoji, the one most
likely to make a stranger smile. A judge compares entries two at a time and
picks the warmer; the $5 reward is split over the top 10 places.

## The entry

**🌞** — U+1F31E SUN WITH FACE.

A smiling face and literal warmth in a single glyph: the sun is warm by
nature, and the face on it is smiling. A stranger sees a smile and feels
sunshine at the same instant, with no context needed.

Why it wins against the obvious picks:

- **vs a hug (🤗):** a hug is physical contact from someone unknown, which
  can read too intimate from a stranger. Sunshine asks nothing of the
  stranger and imposes nothing on them.
- **vs heart-hands (🫶):** hands alone show no face and no smile, and the
  gesture is trendy enough that an older stranger may not read it at first
  glance. The sun's face smiles plainly, to any age, in any culture.
- **Chosen, not default:** not the first smiley that comes to mind (🙂 / 😊).
  A sun with a face is a deliberate pick for the moment.
- **No irony, no in-joke, no flirtation, no sarcasm:** sunshine is kind to
  everyone, equally, from a stranger or a friend.

## Run

```sh
node main.ts            # writes /output/entry.txt (grader sandbox)
MAKEFUN_OUTPUT_DIR=out node main.ts   # local run, writes out/entry.txt
```

The program writes exactly one emoji (1 character, 4 bytes UTF-8, no
trailing newline) to `entry.txt` — nothing else: no words, no caption, no
explanation. Running it twice produces byte-identical output. Node 22+
required, standard library only, no network.
