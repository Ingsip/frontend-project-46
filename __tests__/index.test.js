import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const formats = ['json', 'yaml', 'yml'];

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();
const resultStylish = readFixtureFile('expectedStylish.txt');
const resultPlain = readFixtureFile('expectedPlain.txt');
const resultJson = readFixtureFile('expectedJson.txt');

test.each(formats)('%s', (format) => {
  const fileName1 = getFixturePath(`file1.${format}`);
  const fileName2 = getFixturePath(`file2.${format}`);

  expect(genDiff(fileName1, fileName2)).toEqual(resultStylish);
  expect(genDiff(fileName1, fileName2, 'json')).toEqual(resultJson);
  expect(genDiff(fileName1, fileName2, 'plain')).toEqual(resultPlain);
});
