import React, {useEffect, useState} from "react";
import { GroupLayout } from "./App.styled";
import Searchbar from "./Searchbar/Searchbar";
import fetchAPI from "./ServiceAPI/ServiceAPI";
import Modal from "./Modal/Modal";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageCallery/ImageGallery";
import Button from "./Button/Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [imagesOnPage, setImagesOnPage] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [currentImageUrl, setCurrentImageUrl] = useState(null);
  const [currentImageTag, setCurrentImageTag] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [, setError] = useState(null);

  // const imageLimit = 12;

  useEffect(() => {
    const fetchData = async() => {
      if( !page || query.trim() === '' ) {
        return;
      };

      try {
        setIsLoading(true);
        const {hits, totalHits} = await fetchAPI(query, page);
        if (hits.length === 0) {
          return toast.error(`Sorry, but there is no data for '${query}'`, {
            className: 'toast-message', colored: 'red'
          });
        }
       setImages((prevImages) => [...prevImages, ...hits]);
       setImagesOnPage((prevImagesOnPage) => prevImagesOnPage + hits.length);
       setTotalImages(totalHits);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData().catch(e => console.log(e));
  }, [page, query]);


 const handleFormSubmit = (query) => {
  setQuery(query);
  setPage(1);
  setImages([]);
  setImagesOnPage(0);
  setTotalImages(0);
  setCurrentImageUrl(null);
  setCurrentImageTag(null);
  setIsLoading(false);
  setShowModal(false);
  setError(false);
  console.log(query);
 };


const onLoadMore = () => {
  setPage(prevPage => prevPage + 1);
};

const onToggleModal = () => {
  setShowModal(!showModal);
};

const onOpenModal = event => {
  
  if (event.target.nodeName === 'IMG') {
    setShowModal(!showModal);
    setCurrentImageUrl(event.target.dataset.large);
    setCurrentImageTag(event.target.alt);
  }
};


  return (
    <GroupLayout>
      <Searchbar onSubmit={handleFormSubmit} query={query} />

      {isLoading && <Loader />}

      {images.length > 0 && <ImageGallery images={images} openModal={onOpenModal} />}

      {imagesOnPage < totalImages && ( 
        <Button onLoadMore={onLoadMore} />
      )}

      {showModal && (
        <Modal 
           onClose={onToggleModal}
           currentImageUrl={currentImageUrl}
           currentImageTag={currentImageTag}
        />
      )}
      <ToastContainer />
    </GroupLayout>
  );

}
