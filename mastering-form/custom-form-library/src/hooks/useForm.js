import { useState } from "react";
import { deepCopy, valueToState } from "../helper/formHelper";

const useForm = ({ init }) => {
	const [state, setState] = useState(valueToState({ ...init }));

	const handleChange = (e) => {
		const { name: key, value } = e.target;

		const oldState = deepCopy(state);

		oldState[key].value = value;

		setState(oldState);
	};

	return {
		formState: state,
		handleChange,
	};
};

export default useForm;
