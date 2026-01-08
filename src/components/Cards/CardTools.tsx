type CardT = {
    title: string;
    img: string;
};

const CardTools = ({ title, img }: CardT) => {
    return (
        <div className="cardTool">
            <h3>{title}</h3>
            <img src={img} alt="" />
        </div>
    );
};

export default CardTools;
