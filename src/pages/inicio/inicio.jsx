import './inicio.css'
import { Link } from 'react-router-dom'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import TestimonialCard from '../../components/testimonial-card/testimonial-card'
import 'pure-react-carousel/dist/react-carousel.es.css'

function Inicio() {
    return (
      <div className="home-main-container">
        <div className="first-fold">
          <div className="right-content">
            <h1>
              Desbloquea tu potencial con <strong>CodePass</strong>
            </h1>
            <h3>
              Sumérgete en el vasto océano del conocimiento y explora las infinitas posibilidades que te esperan.  ¡Atrévete a aprender, a desafiar tus límites y a alcanzar tus metas con nosotros en CodePass!
            </h3>
            <div className='banner-buttons'>
              <Link className='login-item' to='cursos'>Clases en vivo</Link>
              <Link className='login-item' to='inicia-sesion'>Empieza ahora</Link>
            </div>
            <div className='check-items-container'>
              <img src='/check-1.png' />
              <img src='/check-2.png' />
            </div>
          </div>
          <div className="left-content">
            <img src="/banner-image.png" />
          </div>
        </div>
        <div className="testimonials-container">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={30}
            totalSlides={3}
          >
            <Slider>
              <Slide className='slider-item-home' index={0}>
                <div className='cards-container'>
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                </div>
              </Slide>
              <Slide className='slider-item-home' index={1}>
                <div className='cards-container'>
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                </div>
              </Slide>
              <Slide className='slider-item-home' index={2}>
                <div className='cards-container'>
                  <TestimonialCard />
                  <TestimonialCard />
                  <TestimonialCard />
                </div>
              </Slide>
            </Slider>
            <ButtonBack className='carousel-button'><img src='/left-arrow.png' /></ButtonBack>
            <ButtonNext className='carousel-button'><img src='/right-arrow.png' /></ButtonNext>
          </CarouselProvider>
        </div>

      </div>
    )
  }
  
  export default Inicio