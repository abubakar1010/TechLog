import UserCard from "@/components/modules/user/UserCard";
import { useAppSelector } from "@/redux/app/hooks";
import { selectUser } from "@/redux/features/user/userSlice";
import { TUser } from "@/types";

const User = () => {
    const users = useAppSelector(selectUser()) as TUser[] 
    console.log(users)
    return (
        <div className=" grid grid-cols-3 gap-12 w-[920px]">
            {users.map( user => 
            <UserCard key={user.id} user={user} />
            )}
        </div>
    );
};

export default User;