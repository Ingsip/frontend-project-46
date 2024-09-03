/* const sum = (a, b) => {
return a + b;
}
export default sum; */

import path from 'path';
import { readFileSync } from 'fs';
// import fs from 'fs';
import parser from './parsers.js';
import buildTree from './buildTree.js';

const getFullPath = (filePath) => path.resolve(process.cwd(), filePath);
// console.log('getFullPath', getFullPath);

// формат расширения
const extractFormat = (filePath) => path.extname(filePath).slice(1);

// const readFile = (filePath) => fs.readFileSync(filePath, 'utf-8');
// const getData = (filePath) => parser(String(readFile, extractFormat(filePath)));

const getData = (filePath) => parser(readFileSync(filePath, 'utf-8'), extractFormat(filePath));

const genDiff = (filepath1, filepath2) => {
  // console.log(filepath1, filepath2);
  // console.log(process.cwd())
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);

  // console.log('fullFilePath1', fullFilePath1);
  // console.log('fullFilePath2', fullFilePath2);

  // console.log(JSON.parse(fs.readFileSync(fullFilePath1, 'utf-8')));
  // console.log(JSON.parse(fs.readFileSync(fullFilePath2, 'utf-8')));
  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);

  const tree = buildTree(data1, data2);

  // console.log(tree);

  // console.log('data1', data1)
  // console.log('data2',data2)
  return tree;
};

export default genDiff;
