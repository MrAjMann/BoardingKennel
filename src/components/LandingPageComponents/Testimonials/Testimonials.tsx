import styledTestimonial from './Testimonials.module.css'
import Card from '../../utilityComponents/TestimonialsCard/Card'


const Testimonials = () => {

  return (
    <section className={styledTestimonial.testimonialsContainer}>
        <h1 className={styledTestimonial.testimonialsTitle}>Testimonials</h1>
        <div className={styledTestimonial.testimonialsWrapper}>
            <Card />
        </div>
    </section>
  )
}

export default Testimonials