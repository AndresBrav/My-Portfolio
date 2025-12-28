import { useState } from "react";
import { FiMenu } from "react-icons/fi"; // ICONO del botón

const Sidebar = () => {
    const [open, setOpen] = useState(false); // controla abrir/cerrar

    return (
        // <div className="sidebar-container">
        <div >
            {/* Botón pequeño arriba */}
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

            {/* SIDEBAR */}
            <div
                style={{
                    background: "#111",
                    color: "white",
                    height: "100vh",
                    width: open ? "230px" : "0px",
                    overflow: "hidden",
                    transition: "0.3s",
                    paddingTop: "60px", // para que no choque con el botón
                }}
            >
                <h3 style={{ padding: "10px" }}>Menú</h3>
                <ul>
                    <li style={{ padding: "10px" }}>Inicio</li>
                    <li style={{ padding: "10px" }}>Perfil</li>
                    <li style={{ padding: "10px" }}>Ajustes</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
