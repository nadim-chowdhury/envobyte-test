export default function ProcessSteps() {
  return (
    <div
      className="relative bg-cover bg-center text-white py-20 px-6"
      style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-gray-300">
          HOW WE WORK
        </p>
        <h2 className="text-3xl font-bold mt-2">
          Our Process For Delivering Results
        </h2>
        <p className="text-gray-300 mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text
          ever.
        </p>

        {/* Process Steps */}
        <div className="relative flex flex-col items-center md:flex-row md:justify-between mt-10">
          {/* Dotted Line */}
          <div className="absolute top-1/2 left-0 right-0 mx-auto border-t-2 border-dashed border-gray-400 w-4/5 hidden md:block"></div>

          {/* Steps */}
          {[
            { step: "01.", text: "Make An Appointment" },
            { step: "02.", text: "Meet Our Team" },
            { step: "03.", text: "Get Consultation" },
            { step: "04.", text: "Start Project" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-orange-500 to-red-600 w-40 h-40 rounded-full flex items-center justify-center text-center shadow-lg"
            >
              <div className="text-white font-bold">
                <p className="text-lg">{item.step}</p>
                <p className="text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
}
