/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Text } from "../../ui/Text/Text";
import { TextGroupContainer } from "../../ui/form/TextGroupContainer";
import { TextInput } from "../../ui/form/TextInputs";

const ErrorMessage = styled.div`
	color: red;
    /* background-color: yellow; */
`;

export const TextGroup = ({
	label,
	error,
	value,
	handleChange,
	placeholder,
	name,
    handleFocus,
    handleBlur
}) => {
    // console.log(error)
	return (
		<>
			<TextGroupContainer>
				<Text blocked="true">{label}</Text>
				<TextInput
					blocked="true"
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
                    err={error}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
				/>
					{error && <ErrorMessage >
						{error}
					</ErrorMessage>}
				
			</TextGroupContainer>
		</>
	);
};
