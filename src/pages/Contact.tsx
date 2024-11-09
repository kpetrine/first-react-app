import ContactForm from "../Components/ContactForm";


//ContactPage component - includes both text and the form
const ContactPage = () => {
  return (
   
      <div className="contact-content">
        <h1>Contact Us</h1> 
        <p>Please email with questions or concerns.</p>{" "}
        {/* Contact instructions */}
        <ContactForm />{" "}
        {/* The actual form where users can submit their contact info */}
      </div>
  
  );
};

export default ContactPage; // Export component
