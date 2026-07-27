import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);
const caseStudyRoot = new URL("case-studies/", outputRoot);

test("exports the portfolio homepage with production metadata", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(
    html,
    /<title>Harishan Rajendrakumar — Lead UI\/UX Engineer<\/title>/,
  );
  assert.match(html, /I make complex journeys feel/);
  assert.match(html, /Complete project archive/);
  assert.match(
    html,
    /https:\/\/harishan15\.github\.io\/SHS-Portfolio\/og\.png/,
  );
  assert.match(
    html,
    /href="\/SHS-Portfolio\/case-studies\/world-holiday-vibes\/"/,
  );
});

test("pre-renders every case study and includes portfolio media", async () => {
  const routes = (await readdir(caseStudyRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  assert.equal(routes.length, 14);
  assert.ok(routes.includes("drawing-robot"));
  assert.ok(routes.includes("world-holiday-vibes"));
  assert.ok(routes.includes("world-pinoy-flights"));

  const caseStudyHtml = await readFile(
    new URL("drawing-robot/index.html", caseStudyRoot),
    "utf8",
  );
  assert.match(caseStudyHtml, /Drawing Robot case study/);
  assert.match(
    caseStudyHtml,
    /\/SHS-Portfolio\/media\/drawing-robot\/success-attempt\.mp4/,
  );

  await access(new URL("media/drawing-robot/hero.jpg", outputRoot));
  await access(new URL("media/early-design/refraction-poster.jpg", outputRoot));
  await access(new URL("og.png", outputRoot));
});
