import { ReactNode } from "react";
import {
	FieldValues,
	FormProvider,
	SubmitHandler,
	useForm,
} from "react-hook-form";

export const FormContainer = ({
	onSubmit,
	children,
}: {
	onSubmit: SubmitHandler<FieldValues>;
	children: ReactNode;
}) => {
	const method = useForm();
	return (
		<FormProvider {...method}>
			<form onSubmit={method.handleSubmit(onSubmit)}>{children}</form>
		</FormProvider>
	);
};
