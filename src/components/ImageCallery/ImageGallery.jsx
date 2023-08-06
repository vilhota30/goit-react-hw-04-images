import PropTypes from "prop-types";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import {List} from "./ImageGallery.styled";

export default function ImageGallery ({images, openModal}) {
 return (
 <List>
    {images.map(({id, tags: tag, webformatURL: smallImage, largeImageURL: largeImage}) => (
        <ImageGalleryItem 
         key={id}
         tag={tag}
         smallImage={smallImage}
         largeImage={largeImage}
         openModal={openModal}
        />
    ))}
 </List>
 );
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            tag: PropTypes.string,
            smallImage: PropTypes.string,
            largeImage: PropTypes.string,
        }),
    ).isRequired,
    openModal: PropTypes.func.isRequired,
};