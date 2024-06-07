import Image1 from '../assets/img1.jpg';
import Image2 from '../assets/img2.jpg';
import Image3 from '../assets/img3.jpg';
import Image4 from '../assets/img4.jpg';
import Image5 from '../assets/img5.jpg';
import Image6 from '../assets/img6.jpg';

const ServicesSection = () => {
  const services = [
    {
      title: "Residential Design",
      description: "Tailored designs to make your home a reflection of your personality and lifestyle.",
      imageUrl: Image1, 
    },
    {
      title: "Commercial Design",
      description: "Innovative solutions for your office or retail space to enhance productivity and appeal.",
      imageUrl: Image2, 
    },
    {
      title: "Space Planning",
      description: "Efficient space planning to make the most out of your available space.",
      imageUrl: Image3, 
    },
    {
      title: "Furniture Design",
      description: "Custom furniture design to fit your space perfectly and enhance the overall aesthetics.",
      imageUrl: Image4, 
    },
    {
      title: "Lighting Design",
      description: "Creating the perfect lighting setup to highlight the beauty of your space.",
      imageUrl: Image5, 
    },
    {
      title: "Project Management",
      description: "Comprehensive project management from concept to completion to ensure a seamless experience.",
      imageUrl: Image6,
    },
  ];

  return (
    <div className="bg-white py-16" id='services'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Design Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide a wide range of interior design services tailored to meet your needs.
          </p>
        </div>
        <div className="mt-12 space-y-12 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-12">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
              <img className="w-full h-48 object-cover rounded-t-lg" src={service.imageUrl} alt={service.title} />
              <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">{service.title}</h3>
              <p className="mt-2 text-base text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
