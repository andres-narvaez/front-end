import './blog.css'
function Blog() {
    return (
      <>
        <div className='first-fold-blog'>
          <h1>
            Descubre el Fascinante Mundo del Desarrollo Frontend con Code Pass
          </h1>
          <img src='/blog-main-image.png'/>
          <div className='blog-info'>
            <div className='avatar-container'>
              <img src='/avatares.png'/>
              <div className='reading-count-blog'>
                <p><strong>512</strong></p>
                <p>Estudiantes leyendo este articulo</p>
              </div>
            </div>
            <div className='blog-date-container'>
              <div>
                <strong>Última actualización</strong> Abr 15, 2024
              </div>
              <div>
                <strong>Comentarios</strong> 154
              </div>
            </div>
          </div> 
        </div>
        <div className='blog-main-text'>
          <div>
            <h4>
              El Arte de la Interfaz de Usuario
            </h4>
            <p>
              El desarrollo frontend abarca la creación y el diseño de la interfaz de usuario de una aplicación web o móvil. Desde la disposición de los elementos hasta la elección de colores y tipografías, cada detalle está cuidadosamente considerado para proporcionar una experiencia de usuario fluida y atractiva. En Code Pass, te sumergirás en este arte, aprendiendo las mejores prácticas y técnicas para diseñar interfaces que deleiten a los usuarios y mejoren la usabilidad.
            </p>
          </div>
          <div>
            <h4>
              Dominando las Herramientas
            </h4>
            <p>
              En nuestro extenso catálogo de cursos, encontrarás una variedad de recursos diseñados para ayudarte a dominar las herramientas y tecnologías más populares en el desarrollo frontend. Desde HTML y CSS, los cimientos de cualquier página web, hasta frameworks modernos como React.js y Vue.js que permiten la creación de aplicaciones web dinámicas y eficientes, en Code Pass encontrarás todo lo que necesitas para llevar tus habilidades al siguiente nivel.
            </p>
          </div>
          <div>
            <h4>
              Explorando la Interactividad
            </h4>
            <p>
              La interactividad es una parte crucial del desarrollo frontend, y en Code Pass te sumergirás en el mundo del JavaScript, el lenguaje de programación que impulsa la interactividad en la web. Desde la manipulación del DOM hasta la creación de animaciones y efectos visuales impresionantes, nuestros cursos te guiarán en el dominio de JavaScript y te ayudarán a transformar tus ideas en realidad.
            </p>
          </div>
          <div>
            <h4>
              Comunidad y Colaboración
            </h4>
            <p>
              En Code Pass, creemos en el poder de la comunidad y la colaboración para impulsar el aprendizaje. A través de nuestros foros de discusión y grupos de estudio, tendrás la oportunidad de conectarte con otros estudiantes, compartir conocimientos y colaborar en proyectos emocionantes. Nuestra comunidad está llena de mentes creativas y apasionadas que están listas para ayudarte en cada paso del camino. 
            </p>
          </div>
          <div>
            <h4>
              El Futuro del Desarrollo Frontend
            </h4>
            <p>
              El desarrollo frontend es un campo en constante evolución, con nuevas tecnologías y tendencias que surgen constantemente. En Code Pass, te prepararemos para enfrentar estos desafíos con confianza, brindándote las habilidades y el conocimiento necesarios para adaptarte y prosperar en este emocionante campo. <br/>
              En resumen, en Code Pass no solo aprenderás a desarrollar interfaces de usuario impresionantes, sino que también te convertirás en un maestro en el arte del desarrollo frontend. Únete a nosotros hoy y comienza tu viaje hacia una carrera emocionante y gratificante en el mundo del desarrollo de software. ¡Te esperamos en Code Pass, donde el futuro del desarrollo frontend comienza hoy!
            </p>
          </div>
        </div>
      </>

    )
  }
  
  export default Blog