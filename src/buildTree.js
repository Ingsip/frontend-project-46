import _ from 'lodash';

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
    } if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, children: buildTree(data1[key], data2[key]), type: 'nested' };
    }
    return {
      key,
      value1,
      value2,
      type: 'changed',
    };
  });
  return diff;
};
export default buildTree;
