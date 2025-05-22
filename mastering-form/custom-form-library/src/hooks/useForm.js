import { useState } from "react";
import { valueToState } from "../helper/formHelper";

const useForm = ({ init }) => {
	const [state, setState] = useState(valueToState({ ...init }));




	return {
		formState: state,
	};
};

export default useForm;
