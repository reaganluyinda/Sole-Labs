function Contact() {
  const contacts = [
    { id: "1", title: "Email Here", info: "contact@solelabs.site" },
    { id: "2", title: "Location Here", info: "Lastutie 4 A, Vantaa 01650" },
    { id: "3", title: "Call Here", info: "+358 449314367" },
  ];
  return (
    // contact-us Section
    <div className=" mt-16 mb-28 mx-4 md:mx-12 lg:mx-32 my-4">
      <h1 className="text-emerald-500 text-center text-3xl">Contact</h1>
      <div className="flex flex-wrap gap-12 my-24 justify-center">
        {contacts.map((contact, id) => (
          <div
            key={id}
            className=" w-full md:w-1/3 lg:w-1/4 text-center py-12 shadow-lg"
          >
            <h1 className="font-semibold">{contact.title}</h1>
            <h1>{contact.info}</h1>
          </div>
        ))}
      </div>
      <div className="space-x-8">
        <h2 className="text-emerald-500 text-center text-xl">Contact Us</h2>
        <h2 className="text-emerald-500 text-center text-2xl font-semibold">
          Drop us Message for any Query
        </h2>
      </div>
    </div>
  );
}

export default Contact;
