import './App.css'

function App() {
  const name = "Mohammad Hasibul Hasan";
  const profession = "Softwafe Engineer";
  const projects = [
    {
      title: "TinySteps Baby Store",
      description: "An eCommerce website offering a wide range of baby products including clothes, toys, and accessories.",
      link: "#"
    },
    {
      title: "OrdekDeen Matrimony",
      description: "A modern matrimonial web application tailored for the Muslim community to help users find compatible life partners.",
      link: "#"
    }
  ];

  return (
    <div className='app'>
      {/* Header Section */}
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id='about' className='about'>
        <h2>About Me</h2>
        <p>Hello! I am {name}, a passionate {profession}. I love building web application that solves real world user problems.</p>
      </section>

      {/* Profile Section */}
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

      {/* Contact Section */}
      <section id='contact' className='contact'>
        <h2>Contact Me</h2>
        <p>If you would like to get in touch, fell free to mail me at <a href='mailto:hasib@example.com'>hasib@example.com</a></p>
      </section>

      {/* Footer Section */}
      <footer className='footer'>
        <p>2025. All Right Reserved</p>
      </footer>
    </div>
  )
}

export default App