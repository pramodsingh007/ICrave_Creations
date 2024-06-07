import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'Pramod Singh',
      review: 'The interior designers at Interiorize did an amazing job transforming my home. I am extremely happy with the results!',
      image: 'https://ssvminstitutions.ac.in/wp-content/uploads/2021/10/SSVM-Parent-Testimonial.jpeg', // Sample image URL
    },
    {
      id: 2,
      name: 'Sandeep Verma',
      review: 'I highly recommend Interiorize! They have a great eye for design and their attention to detail is exceptional.',
      image: 'https://cinimage.org/wp-content/uploads/2021/10/Testimonial-Videos-1.png', // Sample image URL
    },
    {
      id: 3,
      name: 'Arvind Khera',
      review: 'Working with Interiorize was a fantastic experience. They turned my vision into reality and exceeded my expectations.',
      image: 'https://www.zoho.com/inventory/case-study/images/maxime-loiselle.jpg', // Sample image URL
    },
    {
      id: 4,
      name: 'Ritu Sharma',
      review: 'Interiorize made the entire process smooth and enjoyable. I couldn\'t be happier with the outcome of my project.',
      image: 'https://aroh.in/images/Ritu.jpg', // Sample image URL
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">Testimonials</h2>
        <Slider {...settings}>
          {testimonialsData.map(testimonial => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="mx-auto h-20 w-20 rounded-full" />
                </div>
                <p className="text-lg text-gray-800 mb-4">{testimonial.review}</p>
                <p className="text-gray-600">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
