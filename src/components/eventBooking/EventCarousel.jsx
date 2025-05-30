import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const EventCarousel = ({ eventType = 'Concert' }) => {
  // Define images for each event type
  const eventImages = {
    Concert: [
      'asset/concert-1.jpg',
      'asset/concert-2.jpg',     
      'asset/concert-3.jpg', 
    ]
  };

  const images = eventImages[eventType] || [];

  return (
    <div>
      <h3>{eventType} Gallery</h3>
      {images.length > 0 ? (
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`${eventType} ${index + 1}`} width={"70%"} height={"30%"} />
            </div>
          ))}
        </Carousel>
      ) : (
        <p>No images available for this event type.</p>
      )}
    </div>
  );
};

export default EventCarousel;