import _ from 'lodash';
import genDiff from './gendiff-func.js'

const buildTree = (data1, data2) => {
	const keys1 = Object.keys(data1);
	const keys2 = Object.keys(data2);
	const keys = _.sortBy(_.union(keys1, keys2));

	const diff = keys.map((key) => {
		if (Object.hasOwn(data1, key) && !Object.hasOwn(data2, key)) {
			return { key: key, value: data1[key], type: 'deleted' };
		} else if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key) && data1[key] == data2[key]) {
			return { key: key, value: data1[key], type: 'unchanged' };
		} else if (!Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
			return { key: key, value: data2[key], type: 'added' };
		} else if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key) && data1[key] !== data2[key]) {
			return { key: key, value1: data1[key], value2: data2[key] , type: 'changed' };
		}
	});
	
	const newDiff = diff.map((item) => {
		if (item.type === 'deleted') {
			return `- ${item.key}: ${item.value}`;
		} else if (item.type === 'unchanged') {
			return ` ${item.key}: ${item.value}`;
		} else if (item.type === 'added') {
			return `+ ${item.key}: ${item.value}`;
		} else if (item.type === 'changed') {
			return `- ${item.key}: ${item.value1}\n + ${item.key}: ${item.value2}`; 
		} 
	});
	return newDiff;
};


export default buildTree;