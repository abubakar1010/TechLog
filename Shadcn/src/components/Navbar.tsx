import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" flex justify-between items-center gap-4 container mx-auto my-4">
            <img src="./icon.svg" alt="" />
            <ul className=" flex gap-3 text-lg font-medium">
                <Link to="/">Task</Link>
                <Link to="/login">Login</Link>
            </ul>
        </div>
    );
};

export default Navbar;