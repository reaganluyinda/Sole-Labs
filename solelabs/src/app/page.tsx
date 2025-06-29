"use client";
import Image from "next/image";
import { title } from "process";
import { useState } from "react";
function Home() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    { id: 1, title: "Web-Designing" },
    { id: 2, title: "Graphic Design" },
    { id: 3, title: "Mobile Apps" },
    { id: 4, title: "E-Commerce" },
  ];

  const serviceDetails: Record<
    number,
    { header: string; description: string; image: string }
  > = {
    1: {
      header: "We create Designs & Technology",
      description:
        "We design responsive and modern websites tailored to your brand.",
      image: "/web design.jpg",
    },
    2: {
      header: "Lets Make Something Beautiful",
      description:
        "We create stunning graphic content including logos and banners.",
      image: "/graphics.jpg",
    },
    3: {
      header: "A brand with an App is Valued More!",
      description:
        "Mobile apps built for speed, great UI/UX and native compatibility.",
      image: "/mobile-app.jpg",
    },
    4: {
      header: "Blue-Print for an Evolution",
      description:
        "Start your e-commerce journey with scalable, secure solutions.",
      image: "/e-commerce.jpg",
    },
  };

  const serviceBullets: Record<
    number,
    { bullet1: string; bullet2: string; bullet3: string }
  > = {
    1: {
      bullet1: "Responsive Websites",
      bullet2: "CRM & ERP",
      bullet3: "Website Redesigning",
    },
    2: {
      bullet1: "Logo Design",
      bullet2: "Letterhead Design",
      bullet3: "E-mail Newsletter Design",
    },
    3: {
      bullet1: "Cross platform Apps",
      bullet2: "Custom App Development",
      bullet3: "E-commerce Apps",
    },
    4: {
      bullet1: "Shopping Carts",
      bullet2: "E-billing & Payment Gateways",
      bullet3: "Inventory Management",
    },
  };

  return (
    <div className="mt-28 ">
      {/* Hero Section */}
      <div className="mx-4 md:mx-12 lg:mx-32">
        <div id="Hero-section" className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h1 className="text-amber-400 text-5xl mb-2 ">
              Digital Agency with Excellence Service
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              quaerat corporis aut ullam maxime, cumque temporibus sequi nihil
              dolorum voluptas dolores voluptate aliquid, incidunt nostrum
              libero! Dolores atque ab quo! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Fugit quaerat corporis aut ullam
              maxime, cumque temporibus sequi nihil dolorum voluptas dolores
              voluptate aliquid, incidunt nostrum libero! Dolores atque ab quo!
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/Hero.jpg"
              alt="Hero image"
              height={800}
              width={700}
              className="rounded-md"
            />
          </div>
        </div>
        {/* About Us Section */}
        <div id="About Section" className="mt-32">
          <h1 className="text-3xl md:text-4xl text-center font-semibold">
            About Us
          </h1>
          <div className="flex flex-col md:flex-row mt-12 gap-8">
            <div className="md:w-1/2">
              <Image
                src="/About.jpg"
                alt="About us image"
                height={754}
                width={573}
                className="rounded-md"
              />
            </div>
            <div className="space-y-4 md:w-1/2">
              <h1 className="text-3xl md:text-5xl">
                We live and Breathe Digital.
                <br /> The Internet is Our Home!
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                voluptate culpa magni quo quod dolorum minus iste a, eligendi
                praesentium, velit atque omnis sit aliquam unde iure. Quo, amet
                perferendis! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sunt voluptate culpa magni quo quod dolorum minus iste a,
                eligendi praesentium, velit atque omnis sit aliquam unde iure.
                Quo, amet perferendis!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                voluptate culpa magni quo quod dolorum minus iste a, eligendi
                praesentium, velit atque omnis sit aliquam unde iure. Quo, amet
                perferendis! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sunt voluptate culpa magni quo quod dolorum minus iste a,
                eligendi praesentium, velit atque omnis sit aliquam unde iure.
                Quo, amet perferendis!
              </p>
            </div>
          </div>
        </div>
        {/* Service section */}
        <div className="mt-32">
          <h1 className="text-center font-bold text-3xl">Services</h1>
          <h2 className="text-3xl md:text-5xl text-center mt-4">
            Working to build the Online <br />
            Value
          </h2>
          <div className="flex flex-wrap  gap-6 justify-center mt-12">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`w-full md:w-1/3 lg:w-1/5 text-center px-4 py-16 rounded-md cursor-pointer shadow-md transition duration-300 hover:shadow-lg ${
                  selectedService === service.id ? "bg-amber-100" : ""
                }`}
              >
                <h1>{service.title}</h1>
              </div>
            ))}
          </div>
          <div className="shadow-md rounded-md my-12 max-w-5xl mx-auto p-4">
            {selectedService && serviceDetails[selectedService] ? (
              <div className="flex">
                <div className="w-1/2">
                  <h1 className="text-lg text-cyan-600">
                    {serviceDetails[selectedService].header}
                  </h1>
                  <h1 className="text-2xl font-bold mb-2">
                    {services.find((s) => s.id === selectedService)?.title}
                  </h1>
                  <p className="text-gray-700">
                    {serviceDetails[selectedService].description}
                  </p>
                  <div className="mt-4 gap-2">
                    {selectedService && serviceBullets[selectedService] ? (
                      <>
                        <p>{serviceBullets[selectedService].bullet1}</p>
                        <p>{serviceBullets[selectedService].bullet2}</p>
                        <p>{serviceBullets[selectedService].bullet3}</p>
                      </>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>
                <Image
                  src={serviceDetails[selectedService].image}
                  alt="Service detail image"
                  width={600}
                  height={400}
                  className="rounded-md mx-auto w-1/2"
                />
              </div>
            ) : (
              <p className="text-gray-500">
                Click a service to see more information.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* contact us section */}

      <div className="flex flex-col md:flex-row gap-6 bg-blue-200 justify-around py-16 items-center max-sm:text-center">
        <div className="gap-4 ">
          <h1 className="text-base">READY TO DO THIS</h1>
          <h1 className="text-5xl font-semibold">Let's get to work!</h1>
        </div>
        <button className="bg-amber-300 px-8 py-4 rounded-md ">
          CONTACT US
        </button>
      </div>
    </div>
  );
}

export default Home;
