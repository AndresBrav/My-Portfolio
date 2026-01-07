import Sidebar from "../Sidebar";
import redes from "../../assets/images/redes.jpg";
import java from "../../assets/images/java.jpg";
import spring from "../../assets/images/spring boot.jpg";
import comteco from "../../assets/images/comteco.jpg";
import CardProjects from "../CardProjects";

const Projects = () => {
    return (
        <>
            <div className="container-father">
                <Sidebar />

                <div className="container-dashboard">
                    <br />
                    <br />
                    <br />
                    <h1 style={{ textAlign: "center", color: "white" }}>
                        Completed Projects
                    </h1>
                    <br />
                    <br />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            flexWrap: "wrap",
                            gap: "25px",
                        }}
                    >
                        <CardProjects
                            title="Internship Certificate - Comteco"
                            img={comteco}
                            description="Cochabamba, Bolivia | Aug 2025 "
                            boton={<button>View Repository</button>}
                        />
                        {/* <CardProjects
                            title="Java Programming Course – Mayor de San Simon University"
                            img={java}
                            description="Cochabamba, Bolivia | Sep 2025"
                        />
                        <CardProjects
                            title="Spring Boot Framework Course – Mayor de San Simon University"
                            img={spring}
                            description="Cochabamba, Bolivia | Sep 2024"
                        />
                        <CardProjects
                            title="Information Routing in Networks - Mayor de San Simon University"
                            img={redes}
                            description="Cochabamba, Bolivia | Mar 2023 – Apr 2023"
                        /> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
