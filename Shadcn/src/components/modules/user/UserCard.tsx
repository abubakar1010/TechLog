import { TUser } from "@/types";

type TUserCardProps = {
    user: TUser
}

const UserCard = ({user}: TUserCardProps) => {
    return (
        <>
            <div className=" bg-gray-600 flex justify-center items-center min-h-[120px]">
                <h1>{user.name}</h1>
            </div>
        </>
    );
};

export default UserCard;