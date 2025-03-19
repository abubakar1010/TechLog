import { ReactNode, Ref, useImperativeHandle } from "react";
import {
	Control,
	DefaultValues,
	FieldValues,
	FormState,
	Path,
	SubmitHandler,
	useForm,
	UseFormReturn,
} from "react-hook-form";
import { Form } from "../ui/form";
import { GenericFormContext } from "./CustomContext";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type TGenericFormRef<TFormFieldValues extends FieldValues> = {
	control: Control<TFormFieldValues>;
	form: UseFormReturn<TFormFieldValues>;
	formState: FormState<TFormFieldValues>;
	getValues: () => TFormFieldValues;
	setValues: (
		name: Path<TFormFieldValues>,
		value: TFormFieldValues[Path<TFormFieldValues>]
	) => void;
	reset: (value?: Partial<TFormFieldValues> | undefined) => void;
};

type TGenericFormProps<TSchema extends ZodType> = {
	children: ReactNode;
	schema: TSchema;
	initialValues: Partial<z.infer<TSchema>>;
	onSubmit: SubmitHandler<z.infer<TSchema>>;
	ref?: Ref<TGenericFormRef<z.infer<TSchema>>>;
};

export const GenericForm = <TSchema extends ZodType>(
	props: TGenericFormProps<TSchema>
) => {
	const {
		children,
		schema,
		initialValues,
		onSubmit,
		ref,
	} = props;

	type TFormValues = z.infer<TSchema>;

	const form = useForm<TFormValues>({
		resolver: zodResolver(schema),
		defaultValues: initialValues as DefaultValues<TFormValues>,
	});

	useImperativeHandle(ref, () => ({
		control: form.control,
		form: form,
		formState: form.formState,
		getValues: form.getValues,
		setValues: (
			name: Path<TFormValues>,
			value: FieldValues[Path<TFormValues>]
		) => {
			form.setValue(name, value);
		},
		reset: (values?: Partial<TFormValues> | undefined) => {
			form.reset(values as TFormValues);
		},
	}));

	return (
		<GenericFormContext value={{ control: form.control }}>
			<Form {...form}>
				<form onSubmit={ form.handleSubmit(onSubmit)}>{children}</form>
			</Form>
		</GenericFormContext>
	);
};

GenericForm.displayName = "GenericForm";
