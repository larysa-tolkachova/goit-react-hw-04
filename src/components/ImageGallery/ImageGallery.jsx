import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map(image => (
        <li key={image.id}>
          <ImageCard galleryImages={image} />
        </li>
      ))}
    </ul>
  );
}
