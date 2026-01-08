import HeaderOptions from "../Cards/HeaderOptions";

HeaderOptions;
const Contact = () => {
    return (
        <>
            <header className="header">
                <HeaderOptions />
            </header>
            <br /><br /><br />
            <div className="container-father">
                <div></div> {/* first element */}
                <div className="container-dashboard">
                    <br />
                    <br />
                    <br />

                    <h1 style={{ textAlign: "center", color: "white" }}>
                        this is the contact page
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Contact;
