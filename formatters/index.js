import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const format = (data, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return json(data);
    default:
      throw new Error(`Unknown type of format: ${formatName}`);
  }
};

export default format;
