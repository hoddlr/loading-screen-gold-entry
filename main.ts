import { mkdirSync, writeFileSync } from "node:fs";

const LOADING_TIP =
  "The build isn't stuck — it's just thinking as hard as you are. Breathe. The agent already rewrote that function twice, and it's still not your fault.";

if ([...LOADING_TIP].length > 200) {
  throw new Error(
    `Loading tip must be at most 200 characters, got ${[...LOADING_TIP].length}.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LOADING_TIP, "utf8");
