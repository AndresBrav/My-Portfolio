import Sidebar from "../Sidebar";

import cars from "../../assets/images/cars.png";
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
                            title="System for managing automobiles"
                            img={cars}
                            description="A comprehensive vehicle management system was developed, including the modeling and implementation of a MySQL database, as well as the development of a REST API using Node.js, Express.js, and TypeScript. The system incorporated user authentication and authorization using tokens to ensure secure access to resources. The Sequelize ORM was used for database queries. Furthermore, a graphical user interface was developed using Next.js, providing a modern and intuitive user experience, and functionalities were implemented that allow generating and saving system information to .pdf and .txt files directly from the database data."
                        >
                            <div className="buttons-container">
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/AndresBrav/FRONTEND-NEXT-JS-CARS",
                                            "_blank"
                                        )
                                    }
                                >
                                    Frontend Repository
                                </button>

                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/AndresBrav/FRONTEND-NEXT-JS-CARS",
                                            "_blank"
                                        )
                                    }
                                >
                                    Backend Repository
                                </button>
                            </div>
                        </CardProjects>

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
