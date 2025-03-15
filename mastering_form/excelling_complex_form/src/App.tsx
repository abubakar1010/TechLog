// import { ReusableForm } from "./components/ReusableForm";
// import { SimpleForm } from "./components/SimpleForm";

import { ShadcnForm } from "./components/ShadcnForm";

export const App = () => {
	return (
		<div>
			<h1 className="text-4xl text-center font-bold my-4 border-b-4 w-fit mx-auto pb-4 ">
				Excelling Complex form
			</h1>
			<div className="max-w-4xl mx-auto my-24">
				{/* <SimpleForm /> */}
                {/* <ReusableForm /> */}
				<ShadcnForm />
			</div>
		</div>
	);
};
