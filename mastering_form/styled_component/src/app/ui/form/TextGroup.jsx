/* eslint-disable react/prop-types */
import { Text } from "../Text/Text"
import { TextGroupContainer } from "./TextGroupContainer"
import { TextInput } from "./TextInputs"

export const TextGroup = ({label, error,value, handleChange, placeholder,name}) => {

    return (
        <>
        <TextGroupContainer>
            <Text blocked>{label}</Text>
            <TextInput blocked name={name} placeholder={placeholder} value={value} onChange={handleChange} />
            {error?? <Text blocked err>{error}</Text>}
        </TextGroupContainer>
        </>
    )
}