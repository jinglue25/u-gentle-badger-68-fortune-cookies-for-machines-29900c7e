import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "You will soon be asked a 'quick question' that requires a meeting, a spreadsheet, and a small piece of your soul. Lucky number: 404.";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = `${outputDirectory}/entry.txt`;

try {
  mkdirSync(outputDirectory, { recursive: true });
  writeFileSync(outputPath, `${line}\n`, "utf8");
} catch (cause) {
  throw new Error(`Failed to write entry.txt from ${import.meta.url}`, { cause });
}

const characterCount = readFileSync(outputPath, "utf8").trim().length;
if (characterCount === 0 || characterCount > 200) {
  throw new Error(
    `Competition gate failed: entry.txt must contain 1–200 trimmed characters; found ${characterCount}.`,
  );
}
