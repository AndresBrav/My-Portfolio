import type { ReactNode } from "react";

type CardPropsProjects = {
    title: string;
    img: string;
    description: string;
    children?: ReactNode;
};

export default function CardProjects({
    title,
    img,
    description,
    children,
}: CardPropsProjects) {
    return (
        <div className="cardP">
            <h3>{title}</h3>
            <img src={img} alt={title} />
            <p style={{textAlign:"center", fontSize:"15px"}}>{description}</p>
            <br />
            {children}
        </div>
    );
}
