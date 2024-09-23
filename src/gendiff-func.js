import path from 'path';
import fs from 'fs';
import parser from './parsers.js';
import buildTree from './buildTree.js';
import format from '../formatters/index.js';

const getFullPath = (filePath) => path.resolve(process.cwd(), filePath);

const extractFormat = (filePath) => path.extname(filePath).slice(1);

const getData = (filePath) => parser(fs.readFileSync(filePath, 'utf-8'), extractFormat(filePath));

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);

  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);

  const tree = buildTree(data1, data2);

  return format(tree, formatName);
};

export default genDiff;
