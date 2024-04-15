import './testimonial-card.css'

function TestimonialCard() {
  return (
    <div className='testimonial-card-container'>
      <div className='photo-container'>
        <img src='/testimonial-picture.png' />
      </div>
      <div className='testimonial-container'>
        <div className='stars-container'>
          <img src='/star.png' />
          <img src='/star.png' />
          <img src='/star.png' />
          <img src='/star.png' />
          <img src='/star.png' />
        </div>
        <div className='testimonial-text'>
          Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed. 
        </div>
        <div className='testimonial-name'>
          <p>
            <strong>
              Anthony Bahringer
            </strong>
          </p>
          <p>
            Senior Research Manager
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard