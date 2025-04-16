import React, { useState } from 'react';
import './Gallery.css'; // Import the CSS file for styling
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg'; // Import your images here
import logo from '../images/logo2.png'; // Import the logo

// Define the type for gallery items
type GalleryItem = {
  src: string;
  description: string;
};

const Gallery: React.FC = () => {
  // Gallery items
  const galleryItems: GalleryItem[] = [
    { src: image1, description: 'This is image 1' },
    { src: image2, description: 'This is image 2' },
    { src: image3, description: 'This is image 3' },
    { src: image4, description: 'This is image 4' },
    { src: image5, description: 'This is image 5' },
    { src: image6, description: 'This is image 6' },
  ];

  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleImageClick = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="gallery-container">
      {/* Logo in the center */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <img
              src={item.src}
              alt={`Gallery item ${index + 1}`}
              onClick={() => handleImageClick(item)}
              className="gallery-image"
            />
          </div>
        ))}
      </div>

      {/* Modal for selected image */}
      {selectedItem && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedItem.src}
              alt="Selected"
              className="modal-image"
            />
            <p className="modal-description">{selectedItem.description}</p>
            <button className="modal-close" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;