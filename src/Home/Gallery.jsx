import {
  GalleryImgFive,
  GalleryImgFour,
  GalleryImgOne,
  GalleryImgSix,
  GalleryImgThree,
  GalleryImgTwo,
} from "../assets/images";

const Gallery = () => {
  const photos = [
    { id: 1, img: <GalleryImgOne className="gallery-img" /> },
    { id: 2, img: <GalleryImgTwo className="gallery-img" /> },
    { id: 3, img: <GalleryImgThree className="gallery-img" /> },
    { id: 4, img: <GalleryImgFour className="gallery-img" /> },
    { id: 5, img: <GalleryImgFive className="gallery-img" /> },
    { id: 6, img: <GalleryImgSix className="gallery-img" /> },
  ];
  return (
    <section className="gallery">
      <div className="gallery-section-holder sections-holder">
        <h2 className="gallery-title h2-titles">Naša galerija aparata</h2>
        <div className="galley-holder">
          {photos.map((photo) => (
            <div key={photo.id}>{photo.img}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
