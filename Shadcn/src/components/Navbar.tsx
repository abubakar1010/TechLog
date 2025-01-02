import { Link } from "react-router-dom";
import { ModeToggle } from "./ui/mode-toggole";

const Navbar = () => {
    return (
        <div className=" flex justify-between items-center gap-4 my-4">
            <div className=" flex gap-3 items-center">
            <img src="./icon.svg" alt="" />
            <ul className=" flex gap-3 text-lg">
                <Link to="/">Todos</Link>
                <Link to="/">Backlog</Link>
                <Link to="/login">Login</Link>
            </ul>
            </div>
            <ModeToggle />
        </div>
    );
};

export default Navbar;