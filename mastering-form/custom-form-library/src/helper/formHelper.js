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

export const deepCopy = (target) => JSON.parse(JSON.stringify(target));

export const stateToChunk = (state, key = "value") =>
	Object.keys(state).reduce((acc, curr) => {
		acc[curr] = state[curr][key];
		return acc;
	}, {});

export const isEmpty = (target) => Object.keys(target).length == 0
