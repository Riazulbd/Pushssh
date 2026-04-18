import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const siteDir = path.join(rootDir, 'Site');
const usecasesDir = path.join(siteDir, 'usecases');

function readLegacyFile(relativePath) {
  return fs.readFileSync(path.join(rootDir, relativePath), 'utf8').replace(/\r\n/g, '\n');
}

function parseAttributes(attributeString) {
  const attributes = {};
  const pattern = /([:@A-Za-z0-9_-]+)(?:="([^"]*)")?/g;

  for (const match of attributeString.matchAll(pattern)) {
    const [, key, value] = match;
    attributes[key] = value ?? '';
  }

  return attributes;
}

function replaceAll(input, replacements = []) {
  return replacements.reduce((output, [from, to]) => output.split(from).join(to), input);
}

export function getLegacyPage(relativePath, replacements = []) {
  const source = replaceAll(readLegacyFile(relativePath), replacements);
  const htmlLang = source.match(/<html[^>]*lang="([^"]+)"/i)?.[1] ?? 'en';
  const head = source.match(/<head>([\s\S]*?)<\/head>/i)?.[1]?.trim() ?? '';
  const bodyMatch = source.match(/<body([^>]*)>([\s\S]*?)<\/body>/i);
  const bodyAttributes = parseAttributes(bodyMatch?.[1] ?? '');
  const body = bodyMatch?.[2]?.trim() ?? '';

  return {
    htmlLang,
    head,
    body,
    bodyAttributes,
  };
}

export function getUsecaseSlugs() {
  return fs
    .readdirSync(usecasesDir)
    .filter((entry) => entry.endsWith('.html'))
    .map((entry) => entry.replace(/\.html$/, ''))
    .sort();
}
