function About() {
    const name = "Mohammad Hasibul Hasan";
    const profession = "Softwafe Engineer";

    return (
        <section id='about' className='about'>
            <h2>About Me</h2>
            <p>Hello! I am {name}, a passionate {profession}. I love building web application that solves real world user problems.</p>
        </section>
    )
}

export default About;