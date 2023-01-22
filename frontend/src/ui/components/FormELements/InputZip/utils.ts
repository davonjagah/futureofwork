export const isValidZip = (zip: string): boolean => {
	return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);
};
