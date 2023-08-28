import './header.css'

interface HeaderProps {
    title?: string; // VER O README FILE
}

export default function Header({ title }: HeaderProps) {// VER O README FILE}
    return (
        <header className='main-header'>
            <h1 className='title'>{title}</h1>
            <hr />
        </header>
    )
}