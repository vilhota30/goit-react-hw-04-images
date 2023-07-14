import React, {Component} from "react";
import { GroupLayout } from "./App.styled";
import Searchbar from "./Searchbar/Searchbar";
import fetchAPI from "./ServiceAPI/ServiceAPI";
import Modal from "./Modal/Modal";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageCallery/ImageGallery";
import Button from "./Button/Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    query: '',
    page: 0,
    images: [],
    imagesOnPage: 0,
    totalImages: 0,
    currentImageUrl: null,
    currentImageTag: null,
    isLoading: false,
    showModal: false,
    error: null,
  };

  imageLimit = 12;

   async componentDidUpdate (_, prevState) {
      if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
       await this.loadImages(this.state.query);
     }
   }

   loadImages = async (query) => {
     try {
       const {hits, total} = await fetchAPI(query, this.state.page);
      //  if (hits.length === 0 ) {
      //    return (` Sorry, but there is no data for ${query}`);
      //  }
      if (hits.length === 0) {
        return toast.error(`Sorry, but there is no data for '${query}'`, {
          className: 'toast-message', colored: 'red'
        });
      }

       this.setState(prevState => ({
         images: [...prevState.images, ...hits],
         imagesOnPage: prevState.imagesOnPage + hits.length,
         totalImages: total,
       }));
   } catch (error) {
   this.setState({error}) 
 } finally {
   this.setState({isLoading: false})
 }
 
 };

// loadImages = async (query) => {
//   try {
//     const { hits, total } = await fetchAPI(query, this.state.page);
//      if (hits.length === 0) {
//        return (` Sorry, but there is no data for ${query}`);
//      }

//     this.setState(prevState => ({
//       images: [...prevState.images, ...hits],
//       imagesOnPage: prevState.imagesOnPage + hits.length,
//       totalImages: total,
//     }));
//   } catch (error) {
//     this.setState({ error })
//   } finally {
//     this.setState({ isLoading: false })
//   }
// };

getResult = (query) => {
  this.setState({
    query,
    page: 1,
    images:[],
    imagesOnPage: 0,
    totalImages: 0,
    currentImageUrl: null,
    currentImageTag: null,
    isLoading: false,
    showModal: false,
    error: null,

  });
};

onLoadMore = () => {
  this.setState(({page}) => ({page: page + 1 }));
};

onToggleModal = () => {
  this.setState(({showModal}) => ({showModal: !showModal}));
};

onOpenModal = event => {
  const currentImageUrl = event.target.dataset.large;
  const currentImageTag = event.target.alt;

  if (event.target.nodeName === 'IMG') {
    this.setState(({showModal}) => ({
      showModal: !showModal,
      currentImageUrl: currentImageUrl,
      currentImageTag: currentImageTag,
    }));
  }
};

render () {
  const {images, imagesOnPage, totalImages, currentImageUrl, currentImageTag, isLoading, showModal} = this.state;

  const getResult = this.getResult;
  const onLoadMore = this.onLoadMore;
  const onOpenModal = this.onOpenModal;
  const onToggleModal = this.onToggleModal;

  return (
    <GroupLayout>
      <Searchbar onSubmit={getResult} />

      {isLoading && <Loader />}

      {images && <ImageGallery images={images} openModal={onOpenModal} />}

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
}
