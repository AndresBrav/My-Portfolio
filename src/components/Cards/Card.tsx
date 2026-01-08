// src/components/Card.tsx
type CardProps = {
    title: string;
    img: string;
    description: string;
};

export default function Card({ title,img, description }: CardProps) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <img src={img} alt="" />
            <p>{description}</p>
        </div>
    );
}
