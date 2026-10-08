import assert from 'node:assert/strict';
import test from 'node:test';
import { versionPath } from '../app/components/version-paths.mjs';

test('switches home and deep links in both directions without double prefixes', () => {
  assert.equal(versionPath('/', 'v1'), '/portfolio-v1/');
  assert.equal(versionPath('/portfolio-v1/', 'v2'), '/');
  assert.equal(versionPath('/case-studies/drawing-robot/', 'v1'), '/portfolio-v1/case-studies/drawing-robot/');
  assert.equal(versionPath('/portfolio-v1/case-studies/drawing-robot/', 'v2'), '/case-studies/drawing-robot/');
  assert.equal(versionPath('/portfolio-v1/case-studies/drawing-robot/', 'v1'), '/portfolio-v1/case-studies/drawing-robot/');
  assert.equal(versionPath(null, 'v2'), '/');
});

test('keeps project-site base paths and trailing slashes', () => {
  assert.equal(versionPath('/demo/case-studies/world-cruise-vibes', 'v1', '/demo/'), '/demo/portfolio-v1/case-studies/world-cruise-vibes/');
  assert.equal(versionPath('/demo/portfolio-v1/', 'v2', '/demo'), '/demo/');
  assert.equal(versionPath('/portfolio-v1-extra/', 'v2'), '/portfolio-v1-extra/');
});
