import { createContext, useContext } from "react";
import { Control, FieldValues } from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TGenericForm<TFormValues extends FieldValues = any> = {
    control: Control<TFormValues>;
};

export const GenericFormContext = createContext<TGenericForm | null>(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useGenericFormContext = <TFormValues extends FieldValues = any>() => {
    const context = useContext(GenericFormContext);
    if (!context) {
        throw new Error("GenericFormContext is not provided");
    }
    return context.control as Control<TFormValues>;
};