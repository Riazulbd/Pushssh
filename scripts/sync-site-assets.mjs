import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();

const targets = [
  ['Site/dashboards', 'public/dashboards'],
  ['Site/logos', 'public/logos'],
];

for (const [source, destination] of targets) {
  const sourcePath = path.join(rootDir, source);
  const destinationPath = path.join(rootDir, destination);

  await rm(destinationPath, { recursive: true, force: true });
  await mkdir(path.dirname(destinationPath), { recursive: true });
  await cp(sourcePath, destinationPath, { recursive: true, force: true });
}

const usecasesDir = path.join(rootDir, 'public', 'usecases');
await mkdir(usecasesDir, { recursive: true });
await cp(path.join(rootDir, 'Site', 'usecases', '_shared.css'), path.join(usecasesDir, '_shared.css'), { force: true });
