import stylish from './stylish.js';

const format = (data, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(`Unknown type of format: ${formatName}`);
  }
};

export default format;
