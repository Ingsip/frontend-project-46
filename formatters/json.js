/* import tree from '../src/gendiff-func.js';

const formatJson = tree.map((item) => {
  if (item.type === 'deleted') {
    return `- ${item.key}: ${item.value}`;
  } if (item.type === 'unchanged') {
    return `  ${item.key}: ${item.value}`;
  } if (item.type === 'added') {
    return `+ ${item.key}: ${item.value}`;
  } if (item.type === 'changed') {
    return `- ${item.key}: ${item.value1}\n+ ${item.key}: ${item.value2}`;
  }
  // return ' ';
  return formatJson.join('\n');
});

export default formatJson;

*/
