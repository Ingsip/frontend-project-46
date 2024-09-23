import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  } if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (data) => {
  const iter = (node, path) => {
    const result = node.flatMap((item) => {
      const newPath = path ? `${path}.${item.key}` : item.key;
      switch (item.type) {
        case 'added':
          return `Property '${newPath}' was added with value: ${stringify(item.value)}`;
        case 'deleted':
          return `Property '${newPath}' was removed`;
        case 'changed':
          return `Property '${newPath}' was updated. From ${stringify(item.value1)} to ${stringify(item.value2)}`;
        case 'nested':
          return iter(item.children, newPath);
        default:
          return [];
      }
    });
    return result.join('\n');
  };
  return iter(data, '');
};
export default plain;
