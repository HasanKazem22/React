function Header() {
    const name = "Mohammad Hasibul Hasan";
    const profession = "Softwafe Engineer";

    return (
        <header className='header'>
            <h1>{name}</h1>
            <p>{profession}</p>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header;