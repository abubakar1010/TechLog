import { useState } from "react";
import {
	deepCopy,
	isEmpty,
	stateToChunk,
	valueToState,
} from "../helper/formHelper";

const useForm = ({ init, validator }) => {
	const [state, setState] = useState(valueToState({ ...init }));

	const handleChange = (e) => {
		const { name: key, value } = e.target;

		const oldState = deepCopy(state);

		oldState[key].value = value;

		const { errors } = getError(stateToChunk(oldState));

		if (errors[key] ) {
			oldState[key].error = errors[key];
		} else {
			oldState[key].error = "";
		}

		setState(oldState);
	};

	const handleTouched = (e) => {
		const { name: key } = e.target;

		const oldState = deepCopy(state);

		oldState[key].isFocused = true;

		if (!oldState[key].isTouched) oldState[key].isTouched = true;

		setState(oldState);
	};

	const handleBlur = (e) => {
		const { name: key } = e.target;

		const { errors } = getError();
		const oldState = deepCopy(state);

		if (oldState[key].isTouched && errors[key])
			oldState[key].error = errors[key];

		oldState[key].isFocused = false;

		setState(oldState);
	};

	const getError = (values = stateToChunk(state)) => {
		let hasError = false,
			errors = {};

		if (typeof validator == "boolean") {
			(hasError = validator), (errors = stateToChunk(state, "error"));
		} else if (typeof validator == "function") {
			const { errors: userDefineError } = validator(values);
			hasError = !isEmpty(userDefineError);
			errors = userDefineError;
		} else {
			throw new Error("Error must be either boolean or function type");
		}

		return {
			hasError,
			errors,
		};
	};

	const handleSubmit = (e, cb) => {
		e.preventDefault();
		const { hasError, errors} = getError()
		cb({
			values: stateToChunk(state),
			errors,
			hasError
		})
	}

	const handleClear = () => setState(valueToState(init))

	return {
		formState: state,
		handleChange,
		handleTouched,
		handleBlur,
		handleSubmit,
		handleClear
	};
};

export default useForm;
