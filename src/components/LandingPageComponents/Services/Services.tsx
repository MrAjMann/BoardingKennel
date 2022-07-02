import styledServices from "./Services.module.css";
import Card from "../../utilityComponents/ServicesCard/Card";
const Services = () => {
  return (
    <section className={styledServices.sectionContainer}>
        
            <h1 className={styledServices.servicesTitle}>Services</h1>
        
        <div className={styledServices.servicesWrapper}>
            <Card />
        </div>
    </section>
  )
}

export default Services