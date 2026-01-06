import Sidebar from "./components/Sidebar";
import imagenAndres from "./assets/images/AndresBravo.jpg";
import Card from "./components/Card";

const Dashboard = () => {
    return (
        <>
            <div className="container-father">
                <Sidebar />

                <div className="container-dashboard">
                    <br />

                    <h1 style={{ textAlign: "center", color: "white" }}>
                        Andres Bravo Aguilar
                    </h1>
                    <img
                        className="img-perfil"
                        src={imagenAndres}
                        alt="Mi imagenAndres"
                    />

                    <h1 className="description-information">
                        Final semester student of Computer Systems Engineering
                        (Bachelor's Degree) with over a year of professional
                        experience in Full-Stack web application development. I
                        have worked with Laravel and JavaScript, with
                        proficiency in modern frameworks such as Node JS, React
                        JS, and relational databases. I love developing
                        software, learning new technologies, and tackling
                        technical challenges. I am looking for a team where I
                        can continue to improve my skills, add value, and grow
                        professionally
                    </h1>

                    <h1 className="certificates">CERTIFICATES</h1>

                    <div style={{ display: "flex", justifyContent: "flex-start", gap: "5px" }}>
                        <Card
                            title="React"
                            description="Librería para interfaces UI"
                        />
                        <Card
                            title="Node.js"
                            description="Backend con JavaScript"
                        />
                        <Card
                            title="Node.js"
                            description="Backend con JavaScript"
                        />
                        <Card
                            title="Node.js"
                            description="Backend con JavaScript"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
