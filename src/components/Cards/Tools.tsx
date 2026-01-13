import CardTools from "./CardTools";
import react from "../../assets/images/React.png";
import javaLogo from "../../assets/images/java logo.svg";
import javascriptLogo from "../../assets/images/javascript logo.png";
import pythonlogo from "../../assets/images/python logo.png";
import typescriptlogo from "../../assets/images/typescript logo.png";
import htmllogo from "../../assets/images/htmllogo.webp";
import csslogo from "../../assets/images/csslogo.png";
import laravellogo from "../../assets/images/laravel.png";
import nodelogo from "../../assets/images/node logo.svg";
import expresslogo from "../../assets/images/express logo.svg";
import postgreslogo from "../../assets/images/postgreslogo.png";
import mysqllogo from "../../assets/images/mysql logo.png";
import nextjslogo from "../../assets/images/next js logo.svg";
import ubuntu from "../../assets/images/ubuntu logo.png";
import docker from "../../assets/images/docker logo.png";
import dbngin from "../../assets/images/dbngin.png";
import figma from "../../assets/images/figma logo.png";
import postman from "../../assets/images/postman logo.png";
import github from "../../assets/images/github logo.png";
import git from "../../assets/images/git logo.png";
import xampp from "../../assets/images/xampp logo.svg";
import angular from "../../assets/images/angular logo svg.png";
import net from "../../assets/images/NET.png";
import csharp from "../../assets/images/C logo.png";



const Tools = () => {
    return (
        <>
            <h1 style={{ textAlign: "center", color: "white" }}>
                TECHNOLOGIES I USE
            </h1>

            <div className="targets-grid">
                {" "}
                {/* grid 2 columnas 1 fila */}
                <div>
                    <h1
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: "22px",
                        }}
                    >
                        Languages
                    </h1>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "25px",
                    }}
                >
                    <CardTools title="C#" img={csharp} />
                    <CardTools title="Javascript" img={javascriptLogo} />
                    <CardTools title="Java" img={javaLogo} />
                    <CardTools title="Python" img={pythonlogo} />
                    <CardTools title="Typescript" img={typescriptlogo} />
                </div>
            </div>

            <div className="targets-grid">
                <div>
                    <h1
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: "22px",
                        }}
                    >
                        Frontend
                    </h1>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "25px",
                    }}
                >
                    <CardTools title="Angular js" img={angular} />
                    <CardTools title="React js" img={react} />
                    <CardTools title="Next js" img={nextjslogo} />
                    <CardTools title="HTML" img={htmllogo} />
                    <CardTools title="CSS" img={csslogo} />
                </div>
            </div>

            <div className="targets-grid">
                <div>
                    <h1
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: "22px",
                        }}
                    >
                        Backend
                    </h1>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "25px",
                    }}
                >
                    <CardTools title=".NET" img={net} />
                    <CardTools title="Laravel" img={laravellogo} />
                    <CardTools title="Node js" img={nodelogo} />
                    <CardTools title="Express js" img={expresslogo} />
                </div>
            </div>

            <div className="targets-grid">
                <div>
                    <h1
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: "22px",
                        }}
                    >
                        Databases
                    </h1>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "25px",
                    }}
                >
                    <CardTools title="Postgres SQL" img={postgreslogo} />
                    <CardTools title="MySQL" img={mysqllogo} />
                </div>
            </div>

            <div className="targets-grid">
                <div>
                    <h1
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: "22px",
                        }}
                    >
                        Tools
                    </h1>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "25px",
                    }}
                >
                    <CardTools title="Ubuntu" img={ubuntu} />
                    <CardTools title="Docker" img={docker} />
                    <CardTools title="Git" img={git} />
                    <CardTools title="GitHub" img={github} />
                    <CardTools title="Postman" img={postman} />
                    <CardTools title="DBngin" img={dbngin} />
                    <CardTools title="Xampp" img={xampp} />
                    <CardTools title="Figma" img={figma} />
                </div>
            </div>
        </>
    );
};

export default Tools;
