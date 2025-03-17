import { ReactNode } from "react";
import { DefaultValues, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { GenericFormContext } from "./CustomContext";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type TGenericFormProps<TSchema extends ZodType> = {
	children: ReactNode;
	schema: TSchema;
	initialValues: Partial<z.infer<TSchema>>;
	onSubmit: SubmitHandler<z.infer<TSchema>>;
	mode?: "onChange" | "onSubmit" | "onBlur";
};


export const GenericForm = <TSchema extends ZodType>(props: TGenericFormProps<TSchema>) => {
	const {children, schema, initialValues, onSubmit, mode="onChange"} = props;
	
	type TFormValues = z.infer<TSchema>;

	const form = useForm<TFormValues>({
		mode,
		resolver: zodResolver(schema),
		defaultValues: initialValues as DefaultValues<TFormValues>,
	});


	return (
		<GenericFormContext value={{ control: form.control }}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
			</Form>
		</GenericFormContext>
	);
};

GenericForm.displayName = "GenericForm";
