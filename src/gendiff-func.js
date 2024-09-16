/* const sum = (a, b) => {
return a + b;
}
export default sum; */

import path from 'path';
import fs from 'fs';
import parser from './parsers.js';
import buildTree from './buildTree.js';
import format from '../formatters/index.js';

const getFullPath = (filePath) => path.resolve(process.cwd(), filePath);
// console.log('getFullPath', getFullPath);
// console.log(process.cwd());

// формат расширения
const extractFormat = (filePath) => path.extname(filePath).slice(1);

const getData = (filePath) => parser(fs.readFileSync(filePath, 'utf-8'), extractFormat(filePath));

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  // console.log('filepath1111', filepath1, 'filepath2222', filepath2);
  // console.log('process.cwd', process.cwd());
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);
  // console.log('fullFilePath1', fullFilePath1);
  // console.log('fullFilePath2', fullFilePath2);

  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);

  /* const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2); */
  // console.log('data1', data1);
  // console.log('data2', data2);

  const tree = buildTree(data1, data2);

  // console.log('tree', tree);

  return format(tree, formatName);
};

export default genDiff;
