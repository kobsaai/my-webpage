import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="container mx-auto py-20 bg-gray-50 dark:bg-gray-950">
      <h1 className="text-3xl font-bold mb-6 justify-center text-center">
        Kontaktformular
      </h1>
      <ContactForm />
    </div>
  );
}

export default Contact;
