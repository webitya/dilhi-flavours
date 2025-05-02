
// import ContactHero from "./ContactHero/ContactHero"
import ContactForm from "./ContactForm/ContactForm"
// import ContactInfo from "./ContactInfo/ContactInfo"
// import ContactMap from "./ContactMap/ContactMap"

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
     
      <main className="flex-grow pt-16">
        {/* <ContactHero /> */}
        <ContactForm />
        {/* <ContactInfo />
        <ContactMap /> */}
      </main>
  
    </div>
  )
}

export default ContactPage
