import { useState } from "react";
import HeaderOptions from "../Cards/HeaderOptions";
import whatsapp from "../../assets/images/whatsapp logo.png";
import githublogo from "../../assets/images/github logo.png";
import linkedlnlogo from "../../assets/images/linketln logo.png";
import gmaillogo from "../../assets/images/gmail logo.png";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
// importa estilos de SweetAlert2

const Contact = () => {
    const whatsappLink =
        "https://wa.me/59168466877?text=Necesito%20m%C3%A1s%20informaci%C3%B3n";
    const githubLink = "https://github.com/AndresBrav";
    const linkedinLink = "https://www.linkedin.com/in/andres-brav/";

    const [formData, setFormData] = useState({
        from_email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.from_email || !formData.subject || !formData.message) {
            Swal.fire({
                icon: "warning",
                title: "Fill all fields",
                background: "#131314",
                color: "white",
            });
            return;
        }

        emailjs
            .send(
                "service_pxjoyxb", // tu Service ID
                "template_q8myeu8", // tu Template ID
                formData,
                "AiksdL0i9ZetsH0hj" // tu Public Key
            )
            .then(
                () => {
                    Swal.fire({
                        icon: "success",
                        title: "Email sent successfully!",
                        background: "#131314",
                        color: "white",
                    });
                    setFormData({ from_email: "", subject: "", message: "" });
                },
                (error) => {
                    console.error(error);
                    Swal.fire({
                        icon: "error",
                        title: "Failed to send email. Try again.",
                        background: "#131314",
                        color: "white",
                    });
                }
            );
    };

    return (
        <>
            <header className="header">
                <HeaderOptions />
            </header>

            <div className="container-father">
                <div></div> {/* first element */}
                <div className="container-dashboard">
                    <h1
                        style={{
                            textAlign: "center",
                            color: "white",
                            marginBottom: "24px",
                        }}
                    >
                        Contacts
                    </h1>

                    {/* Lista de contacto */}
                    <ul
                        style={{
                            listStyle: "none",
                            padding: 0,
                            marginBottom: "32px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: "12px",
                            color: "white",
                        }}
                    >
                        <li
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                            }}
                        >
                            <img
                                src={whatsapp}
                                alt="WhatsApp"
                                style={{ width: "30px", height: "30px" }}
                            />
                            <span>+591 68466877</span>
                        </li>

                        <li
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                            }}
                        >
                            <img
                                src={githublogo}
                                alt="GitHub"
                                style={{ width: "30px", height: "30px" }}
                            />
                            <span>https://github.com/AndresBrav</span>
                        </li>

                        <li
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                            }}
                        >
                            <img
                                src={linkedlnlogo}
                                alt="LinkedIn"
                                style={{ width: "30px", height: "30px" }}
                            />
                            <span>www.linkedin.com/in/andres-brav</span>
                        </li>

                        <li
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                            }}
                        >
                            <img
                                src={gmaillogo}
                                alt="Gmail"
                                style={{ width: "30px", height: "30px" }}
                            />
                            <span>bravoandres1706@gmail.com</span>
                        </li>
                    </ul>

                    {/* Formulario con EmailJS */}
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            maxWidth: "400px",
                            margin: "0 auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={formData.from_email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    from_email: e.target.value,
                                })
                            }
                            required
                            style={{
                                padding: "10px",
                                borderRadius: "6px",
                                border: "1px solid #555",
                                backgroundColor: "#222",
                                color: "white",
                            }}
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    subject: e.target.value,
                                })
                            }
                            required
                            style={{
                                padding: "10px",
                                borderRadius: "6px",
                                border: "1px solid #555",
                                backgroundColor: "#222",
                                color: "white",
                            }}
                        />

                        <textarea
                            placeholder="Message"
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                })
                            }
                            rows={5}
                            required
                            style={{
                                padding: "10px",
                                borderRadius: "6px",
                                border: "1px solid #555",
                                backgroundColor: "#222",
                                color: "white",
                            }}
                        />

                        <button
                            type="submit"
                            style={{
                                padding: "10px 16px",
                                backgroundColor: "#25D366",
                                color: "#fff",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: 600,
                                fontSize: "16px",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                    "#1ebe57")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                    "#25D366")
                            }
                        >
                            Send Email
                        </button>
                    </form>
                    <br />
                    <br />
                    <br />
                    {/* Botones de contacto */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "12px",
                            marginBottom: "32px",
                        }}
                    >
                        {/* WhatsApp */}
                        <button
                            onClick={() =>
                                window.open(
                                    whatsappLink,
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "8px",
                                padding: "10px 16px",
                                backgroundColor: "#25D366",
                                color: "#ffffff",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: 600,
                                width: "200px",
                                fontSize: "18px",
                                transition: "background-color 0.3s",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                    "#1ebe57")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                    "#25D366")
                            }
                        >
                            <img
                                src={whatsapp}
                                alt="WhatsApp"
                                style={{ width: "25px", height: "25px" }}
                            />
                            Contact me
                        </button>

                        {/* GitHub */}
                        <button
                            onClick={() =>
                                window.open(
                                    githubLink,
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "8px",
                                padding: "10px 16px",
                                backgroundColor: "#333333",
                                color: "#ffffff",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: 600,
                                width: "200px",
                                fontSize: "18px",
                                transition: "background-color 0.3s",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                    "#242424")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                    "#333333")
                            }
                        >
                            <img
                                src={githublogo}
                                alt="GitHub"
                                style={{ width: "25px", height: "25px" }}
                            />
                            Github
                        </button>

                        {/* LinkedIn */}
                        <button
                            onClick={() =>
                                window.open(
                                    linkedinLink,
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "8px",
                                padding: "10px 16px",
                                backgroundColor: "#0077B5",
                                color: "#ffffff",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontWeight: 600,
                                width: "200px",
                                fontSize: "18px",
                                transition: "background-color 0.3s",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                    "#005983")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                    "#0077B5")
                            }
                        >
                            <img
                                src={linkedlnlogo}
                                alt="LinkedIn"
                                style={{ width: "25px", height: "25px" }}
                            />
                            LinkedIn
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
