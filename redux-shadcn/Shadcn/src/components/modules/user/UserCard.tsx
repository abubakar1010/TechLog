import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/app/hooks";
import { removeUser } from "@/redux/features/user/userSlice";
import { TUser } from "@/types";

type TUserCardProps = {
    user: TUser
}

const UserCard = ({user}: TUserCardProps) => {
    const dispatch = useAppDispatch()
    return (
        <>
            <div className=" bg-gray-600 flex justify-center items-center min-h-[120px]">
                <h1>{user.name}</h1>
                <Button onClick={() => dispatch(removeUser(user.id))}>Remove</Button>
            </div>
        </>
    );
};

export default UserCard;