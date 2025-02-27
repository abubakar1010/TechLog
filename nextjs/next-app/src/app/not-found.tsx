import Link from "next/link";

const NotFound = () => {
	return (
		<div className=" flex justify-center items-center flex-col gap-7 text-3xl h-screen ">
			<h1>404 page not found</h1>
            <p>Oops! Something went wrong please try again</p>
            <p> 🙀🙀🙀 </p>
			<Link href={"/"}>
			<button className=" text-lg cursor-pointer bg-amber-500 shadow-md shadow-amber-100 px-3 py-2 rounded-md  font-extrabold ">Back To Home</button>
			</Link>
		</div>
	);
};

export default NotFound;
