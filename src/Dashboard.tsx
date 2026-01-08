import Sidebar from "./components/Sidebar";
import imagenAndres from "./assets/images/AndresBravo.jpg";
import Card from "./components/Cards/Card";
import redes from "./assets/images/redes.jpg";
import java from "./assets/images/java.jpg";
import spring from "./assets/images/spring boot.jpg";
import comteco from "./assets/images/comteco.jpg";
import HeaderOptions from "./components/Cards/HeaderOptions";
import Tools from "./components/Cards/Tools";


const Dashboard = () => {
    return (
        <>
            <header className="header">
                <HeaderOptions />
            </header>
            <br />
            <br />
            <br />
            <div className="container-father">
                <div> </div> {/* elemento primero lugar del grid */}
                <div className="container-dashboard">
                    {/* <HeaderOptions /> */}

                    <br />

                    <h1 style={{ textAlign: "center", color: "white" }}>
                        ANDRES BRAVO AGUILAR
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

                    <Tools/>

                    <h1 className="certificates">CERTIFICATES</h1>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            gap: "25px",
                        }}
                    >
                        <Card
                            title="Internship Certificate - Comteco"
                            img={comteco}
                            description="Cochabamba, Bolivia | Aug 2025 "
                        />
                        <Card
                            title="Java Programming Course – Mayor de San Simon University"
                            img={java}
                            description="Cochabamba, Bolivia | Sep 2025"
                        />
                        <Card
                            title="Spring Boot Framework Course – Mayor de San Simon University"
                            img={spring}
                            description="Cochabamba, Bolivia | Sep 2024"
                        />
                        <Card
                            title="Information Routing in Networks - Mayor de San Simon University"
                            img={redes}
                            description="Cochabamba, Bolivia | Mar 2023 – Apr 2023"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
