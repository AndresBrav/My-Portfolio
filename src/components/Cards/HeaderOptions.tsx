import { Link } from "react-router-dom";


const HeaderOptions = () => {
    return (
        <ul className="nav-list">
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
};

export default HeaderOptions
