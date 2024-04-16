import './curso.css'

function Curso() {
    return (
      <div className='course-main-container'>
        <div className='fist-part'>
          <div className='right-content'>
            <h1>
              Course Main Contents
            </h1>
            <div className='content-video'>
              <iframe width="1200" height="700" src="https://www.youtube.com/embed/nN0DrXR893M?si=3zwdOJU7LuyP0lBD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div> 
          </div>
        </div>
        <div className='course'>
          <h2>1. Curso de React</h2>
          <div className='basic-info'>
            <div className='avatar-container'>
            <img src="/avatares.png" alt="" />
              <div className='studying-course'>
                <p><strong>512</strong></p>
                <p>Estudiantes viendo el curso</p>
              </div>
            </div> 
            <div className='course-date-container'>
              <div>
                <strong>Última actualización</strong> Oct 26, 2023
              </div>
              <div>
                <strong>Comentarios</strong> 154
              </div>
            </div>  
          </div>
          <div className='nav'> 
            <ul>
              <li><a href="#description">Descripción</a></li>
              <li><a href="#note">Notas</a></li>
              <li><a href="#attached">Archivos Adjuntos</a></li>
              <li><a href="#coments">Comentarios</a></li>
            </ul>  
          </div>
          <div className='connect-nav'>
            <section className='description' id='description'>
              <h4 className='description-title'>Introducción a React</h4>
              <p className='description-details'>Bienvenido a la primera lección de nuestro curso 
              de React. En esta emocionante aventura de aprendizaje, te sumergirás en el fascinante
               mundo de React, una biblioteca de JavaScript ampliamente utilizada para crear 
               interfaces de usuario interactivas y dinámicas. En esta lección inicial, exploraremos 
               los fundamentos de React, desde su instalación hasta la creación de componentes básicos. 
               Prepárate para desafiar tu mente y dominar una de las herramientas más poderosas en el 
               desarrollo web moderno. ¡Comencemos a construir juntos!</p>
            </section>
            <section className='notes' id='note'>
              <h4 className='notes-title'>Notas</h4>
              <p className='notes-details'>
              Tema: Introducción a React y Fundamentos Básicos <br />
              Objetivos:
              <ul>
                <li>Comprender qué es React y por qué es una herramienta popular en el desarrollo web.</li>
                <li>Aprender los conceptos básicos de React, incluyendo componentes, JSX y el Virtual DOM.</li>
                <li>Familiarizarse con el entorno de desarrollo de React y configurar un proyecto básico.</li>
              </ul>
              Contenido:
              <ol>
                <li>¿Qué es React?
                  <ul>
                    <li>React es una biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas</li>
                    <li>Desarrollado por Facebook, React se ha convertido en una opción popular para crear aplicaciones web modernas y escalables.</li>
                  </ul>
                </li>
                <li>Conceptos Fundamentales de React:</li>
                <ul>
                  <li>Componentes:</li>
                    <ul>
                        <li>Los componentes son la piedra angular de React. Son bloques de construcción reutilizables que encapsulan la lógica y la interfaz de usuario.</li>
                    </ul>
                  <li>JSX (JavaScript XML):</li>
                    <ul>
                      <li>JSX es una extensión de sintaxis de JavaScript que permite escribir código HTML dentro de JavaScript. Facilita la creación de componentes en React.</li>
                    </ul>
                  <li>Virtual DOM (DOM Virtual):</li>
                    <ul>
                      <li>React utiliza un Virtual DOM para mejorar el rendimiento. El Virtual DOM es una representación virtual eficiente del DOM real y permite actualizaciones rápidas y eficientes de la interfaz de usuario</li>
                    </ul>
                </ul>
                 <li>Configuración del Entorno de Desarrollo:</li>
                  <ul>
                    <li>Instalación de Node.js y npm (Node Package Manager).</li>
                    <li>Creación de un nuevo proyecto de React utilizando Create React App.</li>
                    <li>Estructura básica de un proyecto de React.</li>
                  </ul>
              </ol>
              Proximos pasos:
              <ol>
                <li>Explorar ejemplos prácticos de creación de componentes en React.</li>
                <li>Profundizar en el uso de JSX y entender su sintaxis.</li>
                <li>Investigar cómo el Virtual DOM mejora el rendimiento de las aplicaciones React.</li>
              </ol>
              </p>
            </section>
            <section className='attached' id='attached'>
              <h4 className='attached-title'>Archivos Adjuntos (01)</h4>
              <div className='attached-file'>
                
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
  
  export default Curso