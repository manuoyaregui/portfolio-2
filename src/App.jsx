import './App.css'
import PaintingBlocks from './components/PaintingsBlock/PaintingsBlock'
import ProyectCard from './components/ProyectCard/ProyectCard'

import SocialMediaBlock from './components/SocialMediaBlock/SocialMediaBlock'


function App() {
  return (
    <>
      <main>
          <header id='headerSection'>
            <div className="HeaderTextBlock">
              <h3>
                <span>FullStack Web Developer</span> / <span>Artist</span>
              </h3>
              <h1>Manu Oyaregui</h1>
              <article className='ContactSection'>
                <a className="CTAButton" href="mailto:manu.oyaregui@gmail.com">Contact</a>
                <SocialMediaBlock/>
              </article>

            </div>
            <div className="HeaderIllustration"></div>

          </header>
          <section className='' id='devProjectsSection'>
            <h2>Dev Projects</h2>
            <div className="content devProjsContent">
              <ProyectCard 
                title={'Infonete'}
                description={'Web Application made for buy and sell informative stories'}
                badges={ ['PHP', 'HTML', 'CSS', 'MySql', 'XAMPP'] }
                repoUrl={'https://github.com/manuoyaregui/InfoneteGrupo3'}
              />
              <ProyectCard 
                title={'Infonete'}
                description={'Web Application made for buy and sell informative stories'}
                badges={ ['PHP', 'HTML', 'CSS', 'MySql', 'XAMPP'] }
                repoUrl={'https://github.com/manuoyaregui/InfoneteGrupo3'}
              />
              <ProyectCard 
                title={'Infonete'}
                description={'Web Application made for buy and sell informative stories'}
                badges={ ['PHP', 'HTML', 'CSS', 'MySql', 'XAMPP'] }
                repoUrl={'https://github.com/manuoyaregui/InfoneteGrupo3'}
              />
            </div>
            <a className="CTAButton">View all</a>
          </section>

          <section className="" id='devStackSection'>
            <h2>DevStack</h2>
            <p>machete: acá pondria las tecnologías que conozco</p>
          </section>

          <section className="" id='artSection'>
            <h2>My Art</h2>
            <div className="content">
              <PaintingBlocks/>
            </div>
          </section>

          <section className="" id='educationSection'>
            <h2>Education</h2>
            <p>machete: aca pondria la educacion universitaria, secundaria, cursos, capacitaciones e inglés</p>
          </section>

      </main>
      <footer>
        <article className='ContactSection'>
          <a className="CTAButton" href="mailto:manu.oyaregui@gmail.com">Contact</a>
          <SocialMediaBlock/>
        </article>
      </footer>

    </>
  )
}

export default App
