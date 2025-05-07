function Projects() {
    const projects = [
        {
            title: "EduTrack Learning Platform",
            description: "An interactive online platform for students to access courses, track progress, and take quizzes in real-time.",
            link: "#"
        },
        {
            title: "GreenBasket Grocery App",
            description: "A responsive web application that allows users to order fresh groceries online with doorstep delivery tracking.",
            link: "#"
        },
        {
            title: "PortfolioCraft",
            description: "A personal portfolio builder that helps developers create and publish customizable portfolios without coding.",
            link: "#"
        }
    ];

    return (
        <section id='projects' className='projects'>
            <h2>Projects</h2>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className='project-item'>
                        <h3>{project.title}</h3>
                        <h3>{project.description}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;