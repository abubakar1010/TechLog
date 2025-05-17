
type TProps = {
    text: string;
    type: "button" | "submit" | "reset";
}

export const Button = ({ text, type }: TProps) => {
	return (
		<>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type={type}>{text}</button>
		</>
	);
};
