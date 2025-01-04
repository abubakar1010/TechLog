import { useAppSelector } from "@/redux/app/hooks";
import { selectUser } from "@/redux/features/user/userSlice";

const User = () => {
    const users = useAppSelector(selectUser)
    return (
        <div className=" grid grid-cols-3 gap-12 w-[920px]">
            {users.map( user => <>
            <div className=" bg-gray-600 flex justify-center items-center min-h-[120px]">
                <h1>{user.name}</h1>
            </div>
            </>)}
        </div>
    );
};

export default User;