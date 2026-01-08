// import Sidebar from "../Sidebar";

import cars from "../../assets/images/cars.png";
import game from "../../assets/images/game1.png";

import CardProjects from "../Cards/CardProjects";
import HeaderOptions from "../Cards/HeaderOptions";

const Projects = () => {
    return (
        <>
            <header className="header">
                <HeaderOptions />
            </header>
            <br />
            <br />
            <br />
            <div className="container-father">
                <div></div> {/* first element */}
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

                        <CardProjects
                            title="Programming Logic Video Game"
                            img={game}
                            description="An educational video game was developed to teach programming logic to first-semester Systems Engineering students at the Universidad Mayor de San Simón. The project included the modeling and implementation of a MySQL database, as well as the development of a REST API using Node.js, Express.js, and TypeScript. User authentication and authorization mechanisms were implemented using tokens to secure system access, and the Sequelize ORM was used for data management and querying in the database. Game mockups were designed as part of the user experience planning, and the graphical interface was developed using React.js and TypeScript, resulting in an interactive and learning-oriented application."
                        >
                            <div className="buttons-container">
                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/AndresBrav/PG-Frontend-TS-",
                                            "_blank"
                                        )
                                    }
                                >
                                    Frontend Repository
                                </button>

                                <button
                                    onClick={() =>
                                        window.open(
                                            "https://github.com/AndresBrav/Backend_JuegoLP",
                                            "_blank"
                                        )
                                    }
                                >
                                    Backend Repository
                                </button>
                            </div>
                        </CardProjects>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
