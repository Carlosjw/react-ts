```tsx
import './header.css'

interface HeaderProps {
    title?: string;
    /* 

        O ponto de interrogação (?) após o nome da propriedade indica que o valor dessa propriedade é opcional
    
    */
}

export default function Header({ title }: HeaderProps) {
    /* 

        Caso a gente não passo o valor do propriedade no componente, podemos definir um valor padão, após dizer que o valor da propriedade é opcional ( com => ?). Ex: { title="Este vai ser o valor padrão"}: HeaderProps
    
    */
    return (
        <header className='main-header'>
            <h1 className='title'>{title}</h1>
            <hr />
        </header>
    )
}
```