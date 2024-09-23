import _ from 'lodash';

const getIndent = (depth) => {
  const indent = ' ';
  const spacesCount = 4;
  return indent.repeat(depth * spacesCount - 2);
};

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return `${data}`;
  }
  const str = Object
    .entries(data)
    .map(([key, value]) => `${getIndent(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`);
  return `{\n${str.join('\n')}\n  ${getIndent(depth)}}`;
};

const stylish = (data) => {
  const iter = (node, depth = 1) => {
    const newStr = node.map((diff) => {
      switch (diff.type) {
        case 'added':
          return `${getIndent(depth)}+ ${diff.key}: ${stringify(diff.value, depth)}`;
        case 'deleted':
          return `${getIndent(depth)}- ${diff.key}: ${stringify(diff.value, depth)}`;
        case 'unchanged':
          return `${getIndent(depth)}  ${diff.key}: ${stringify(diff.value, depth)}`;
        case 'changed':
          return `${getIndent(depth)}- ${diff.key}: ${stringify(diff.value1, depth)}\n${getIndent(depth)}+ ${diff.key}: ${stringify(diff.value2, depth)}`;
        case 'nested':
          return `${getIndent(depth)}  ${diff.key}: {\n${iter(diff.children, depth + 1)}\n${getIndent(depth)}  }`;
        default:
          throw new Error(`Unknown type of data: ${diff.type}`);
      }
    });
    return newStr.join('\n');
  };
  return `{\n${iter(data)}\n}`;
};
export default stylish;
