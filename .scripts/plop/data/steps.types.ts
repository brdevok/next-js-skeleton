export type Option = {
	name: string;
	value: string;
};

export type Step = {
	type: 'list' | 'input' | 'number' | 'confirm';
	name: string;
	question: string;
	options?: Array<Option>;
};
