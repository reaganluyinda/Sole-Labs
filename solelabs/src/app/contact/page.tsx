import { MailOpen, MapPinned, PhoneCall } from "lucide-react";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
function Contact() {
  const contacts = [
    {
      id: "1",
      title: "Email Here",
      info: "contact@solelabs.site",
      icon: MailOpen,
    },
    {
      id: "2",
      title: "Location Here",
      info: "Lastutie 4 A, Vantaa 01650",
      icon: MapPinned,
    },
    { id: "3", title: "Call Here", info: "+358 449314367", icon: PhoneCall },
  ];

  return (
    // contact-us Section
    <div className=" mt-16 mb-28 mx-4 md:mx-12 lg:mx-32 my-4">
      <h1 className="text-[#33B3A9] text-center text-3xl">Contact</h1>
      <div className="flex flex-wrap gap-12 my-24 justify-center">
        {contacts.map((contact, id) => {
          const Icon = contact.icon;
          return (
            <div
              key={id}
              className=" w-full md:w-1/3 lg:w-1/4 text-center py-12 shadow-lg cursor-pointer"
            >
              <Icon className="mx-auto mb-4 w-8 h-8 text-[#33B3A9]" />
              <h1 className="font-semibold">{contact.title}</h1>
              <h1>{contact.info}</h1>
            </div>
          );
        })}
      </div>
      <div className="space-x-8">
        <h2 className="text-[#33B3A9] text-center text-xl">Contact Us</h2>
        <h2 className="text-[#33B3A9] text-center text-2xl font-semibold">
          Drop us Message for any Query
        </h2>
      </div>
    </div>
  );
}

export default Contact;
