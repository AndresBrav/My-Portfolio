import Sidebar from "./components/Sidebar";
import imagenAndres from "./assets/images/AndresBravo.jpg";

const Dashboard = () => {
    return (
        <>
            <div className="container-father">
                <Sidebar />

                <div className="container-dashboard">
                    <br />

                    <h1 style={{ textAlign: "center" }}>
                        Andres Bravo Aguilar
                    </h1>
                    <img
                        className="img-perfil"
                        src={imagenAndres}
                        alt="Mi imagenAndres"
                    />

                    <h1 style={{ color: "white" }}>
                        hola como estan todos en este dashboard
                    </h1>
                    <h1 style={{ color: "white" }}>
                        hola como estan todos en este dashboard
                    </h1>
                    <h1 style={{ color: "white" }}>
                        hola como estan todos en este dashboard
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
