import { mkdirSync, writeFileSync } from "node:fs";

// Pigeon Pitch, One Line: a city pigeon pitches investors for its startup.
// The joke is the seed round itself — a pigeon raising "seed" money has
// already eaten half of it, so the pitch is also a deadline. "Literally"
// sells the pun; the shorter closer lands it.
const ENTRY =
  "Investors, I'm raising a seed round — literally. I already ate half of it, so wire the money before I finish the rest.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
