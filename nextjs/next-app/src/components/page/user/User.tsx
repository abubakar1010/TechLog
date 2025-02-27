import Image from "next/image";

const User = ({
	user
}: {
    user: { img: string; name: string; email: string; balance: string }
}) => {

    const {img, name, email, balance} = user;

	return (
		<li className="py-3 sm:py-4">
			<div className="flex items-center">
				<div className="shrink-0">
					<Image
						className="w-8 h-8 rounded-full"
						src={img}
						alt="Michael image"
                        width={50}
                        height={50}
					/>
				</div>
				<div className="flex-1 min-w-0 ms-4">
					<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
						{name}
					</p>
					<p className="text-sm text-gray-500 truncate dark:text-gray-400">
						{email}
					</p>
				</div>
				<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
					{balance}
				</div>
			</div>
		</li>
	);
};

export default User;
