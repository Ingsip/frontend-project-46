import _ from 'lodash';
// import genDiff from './gendiff-func.js'

const buildTree = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const sortedUnicKeys = _.sortBy(_.union(keys1, keys2));

  const diff = sortedUnicKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (!Object.hasOwn(data2, key)) {
      return { key, value: value1, type: 'deleted' };
    } if (!Object.hasOwn(data1, key)) {
      return { key, value: value2, type: 'added' };
    } if (_.isEqual(value1, value2)) {
      return { key, value: value1, type: 'unchanged' };
    }
    return {
      key,
      value1,
      value2,
      type: 'changed',
    };
  });
  return diff;
  /*  const newDiff = diff.map((item) => {
    if (item.type === 'deleted') {
      return `- ${item.key}: ${item.value}`;
    } if (item.type === 'unchanged') {
      return `  ${item.key}: ${item.value}`;
    } if (item.type === 'added') {
      return `+ ${item.key}: ${item.value}`;
    } if (item.type === 'changed') {
      return `- ${item.key}: ${item.value1}\n+ ${item.key}: ${item.value2}`;
    }
  });
  return `{\n${newDiff.join('\n')}\n}`; */

  /* const formatJson = (diff) => JSON.stringify(diff, null, 2);
  return formatJson; */
};
export default buildTree;
