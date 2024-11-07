import ContactForm from "../Components/ContactForm"
import Layout from "../Components/Layout";

const ContactPage = () => {
    return (
      <Layout>  
        <div className="contact-content">
          <h1>Contact Holiday Sales</h1>
          <p>Please email with questions or concerns.</p>
        </div>
      </Layout>
    );
  };

export default function Contact() {
 return (
    <>
    <h1>Contact Us</h1>
    <br />
    <ContactForm />
    </>
)
}