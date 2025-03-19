export default function ImageCard({ galleryImages }) {
  return (
    <div>
      <img src={galleryImages.urls.small} alt="Gallery" />
    </div>
  );
}

// galleryImages.urls.regular або galleryImages.urls.small
