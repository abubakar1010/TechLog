export const valueToState = (values) =>
	Object.keys(values).reduce((acc, key) => {
		acc[key] = {
			value: "",
			error: "",
			isFocused: false,
			isTouched: false,
		};
		return acc;
	}, {});
