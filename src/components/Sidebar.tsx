import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
const Sidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setOpen(!open)}
                style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    background: "#222",
                    color: "white",
                    border: "none",
                    padding: "8px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    zIndex: 100,
                }}
            >
                <FiMenu size={30} />
            </button>

            <div className={`sidebar ${open ? "open" : ""}`}>
                <h3>Menu</h3>
                <ul>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
