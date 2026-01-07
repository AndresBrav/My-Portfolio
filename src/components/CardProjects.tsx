import type { ReactNode } from "react";

type CardPropsProjects = {
    title: string;
    img: string;
    description: string;
    boton: ReactNode;
};

export default function CardProjects({
    title,
    img,
    description,
    boton,
}: CardPropsProjects) {
    return (
        <div className="card">
            {boton}
            <h3>{title}</h3>
            <img src={img} alt={title} />
            <p>{description}</p>
        </div>
    );
}
