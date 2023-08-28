// interface TypeScript
interface StudentProps {
    name: string;
    age: number;
}

export default function Student({ name, age }: StudentProps) {
    return (

        <div>
            <h2>Nome: <span className="student-name">{name}</span></h2>
            <h3>Idade: <span className="student-age">{age}</span></h3>
        </div>

    )
}