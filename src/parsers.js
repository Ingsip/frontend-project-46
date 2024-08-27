import yaml from 'js-yaml';

const parser = (data, format) => {
	switch (format) {
		case 'json':
			return JSON.parse(data);
			break;
		case 'yaml':
			return yaml.load(data);
			break;
		case 'yml':
			return yaml.load(data);
			break;
		default:
			console.log('throw new Error("что-то пошло не так")');
	}
}

/*
const parser = (data, format) => {
	if (format === 'json') {
		return JSON.parse(data)
	} else if (format === 'yaml') {
		return yaml.load(data)
	} else if (format === 'yml') {
		return yaml.load(data)
	}
}
*/
export default parser;
