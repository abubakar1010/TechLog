import User from "./User";

type TUSer = {
	id: number,
	name: string,
	email: string,
	img: string;
	username: string,
	password: string,
	balance: string,
	createdAt: string
}

const UsersCard = async() => {
	const res = await fetch("http://localhost:5000/users",{
		next:{
			revalidate: 2
		}
	});
	const users = await res.json();
	return (
		<div>
			<div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
				<div className="flex items-center justify-between mb-4">
					<h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
						Latest Customers
					</h5>
					<a
						href="#"
						className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
					>
						View all
					</a>
				</div>
				<div className="flow-root">
					<ul
						role="list"
						className="divide-y divide-gray-200 dark:divide-gray-700"
					>
						{
							users.map((user: TUSer) => <User key={user.id} user={user}/> )
						}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default UsersCard;
