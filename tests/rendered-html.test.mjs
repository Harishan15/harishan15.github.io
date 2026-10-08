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
  assert.match(html, /Designing clarity/);
  assert.match(html, /Explore all 14 projects/);
  assert.match(html, /data-portfolio-version="v2"/);
  assert.match(html, /href="\/portfolio-v1\/"[^>]*>Portfolio V1/);
  assert.match(html, /aria-current="page"[^>]*>Portfolio V2/);
  assert.match(html, /href="\/Harishan-Rajendrakumar-Resume\.pdf"/);
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
  assert.match(caseStudyHtml, /\/media\/drawing-robot\/success-attempt\.mp4/);

  await access(new URL("media/drawing-robot/hero.jpg", outputRoot));
  await access(new URL("media/early-design/refraction-poster.jpg", outputRoot));
  await access(new URL("og.png", outputRoot));
});

test("preserves the entire V1 portfolio and keeps its internal links in V1", async () => {
  const html = await readFile(new URL("portfolio-v1/index.html", outputRoot), "utf8");
  assert.match(html, /I make complex journeys feel/);
  assert.match(html, /Complete project archive/);
  assert.match(html, /href="\/portfolio-v1\/case-studies\/world-holiday-vibes\/"/);
  assert.match(html, /aria-current="page"[^>]*>Portfolio V1/);
  assert.match(html, /href="\/"[^>]*>Portfolio V2/);
  assert.doesNotMatch(html, /href="\/case-studies\//);
});

test("exports 14 case studies in each design and switches to the equivalent page", async () => {
  const routes = (await readdir(caseStudyRoot, { withFileTypes: true })).filter(entry => entry.isDirectory());
  for (const { name } of routes) {
    const modern = await readFile(new URL(`case-studies/${name}/index.html`, outputRoot), "utf8");
    const legacy = await readFile(new URL(`portfolio-v1/case-studies/${name}/index.html`, outputRoot), "utf8");
    assert.ok(modern.includes(`href="/portfolio-v1/case-studies/${name}/"`), `V2 → V1: ${name}`);
    assert.ok(legacy.includes(`href="/case-studies/${name}/"`), `V1 → V2: ${name}`);
    assert.match(modern, /data-portfolio-version="v2"/);
    assert.match(legacy, /class="case-page accent-/);
    assert.match(legacy, /href="\/portfolio-v1\/#work"/);
  }
  await access(new URL("Harishan-Rajendrakumar-Resume.pdf", outputRoot));
});
