import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import ConfirmPopup from './ConfirmPopup';
import Api from '../utils/Api';
import { CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false);
  const [needToAddEsc, setNeedToAddEsc] = React.useState(false);
  const [currentUser, setCurrentUser ] = React.useState({});
  const [cards , setCards ] = React.useState([]);
  const [selectedCard , setSelectedCard ] = React.useState({isOpen:false, link:'#', name:'#'});
  const [deletingCard , setDeletingCard] = React.useState({});

  React.useEffect(()=>{
    Api.getUserInfo().then((user)=>{
      setCurrentUser(user);
    })
    .catch((err)=>{
      console.log(err);
    });
  },[])
  React.useEffect(() => {
    const handleEscClose = (e) => {
      if(e.key === 'Escape')
      {
        closeAllPopups();
      }
    }
    if (needToAddEsc) {
      document.addEventListener('keydown', handleEscClose);
    }
    else
    {
      document.removeEventListener('keydown', handleEscClose);
    }
    return () => {
        document.removeEventListener('keydown', handleEscClose);
    }
  }, [needToAddEsc]);
  React.useEffect(()=>
  {
    Api.getInitialCards()
      .then((initialCards)=>{
        setCards(initialCards);
      })
      .catch((err)=>{
        console.log(err);
      })
  },[]);
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    Api.toggleLikes(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch((err)=>{
      console.log(err);
    });
  }
  function handleDeleteClick(card) {
    setConfirmPopupOpen(true);
    setDeletingCard(card);
    setNeedToAddEsc(true);
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
    setNeedToAddEsc(true);
  };
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
    setNeedToAddEsc(true);
  };
  function handleAddPlaceClick(){
    setAddPlacePopupOpen(true);
    setNeedToAddEsc(true);
  };
  function handleCardClick(card){
    setSelectedCard({isOpen:true, link:card.link, name:card.name});
    setNeedToAddEsc(true);
  };

  function closeAllPopups(evt){
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setConfirmPopupOpen(false);
    setSelectedCard({isOpen:false, link:'#', name:'#'});
    setDeletingCard({});
    setNeedToAddEsc(false);
  }
  function handleUpdateUser({name,about}){
    Api.setUserInfo(name,about)
    .then((result)=>{
      setCurrentUser(result);
      closeAllPopups();
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  function handleUpdateAvatar({avatar}){
    Api.editAvatar(avatar)
    .then((result)=>{
      setCurrentUser(result);
      closeAllPopups();
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  function handleAddPlaceSubmit ({name,link}){
    Api.addNewCard(name,link)
    .then((newCard)=>{
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  function handleDeleteConfirm (){
    Api.deleteCard(deletingCard._id).then(() => {
      setCards((state) => state.filter((c) => {return c._id !== deletingCard._id}));
      closeAllPopups();
    }).catch((err)=>{
      console.log(err);
    });
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className='page__content'>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddPlaceSubmit}/>
      <ConfirmPopup name='confirm' title='Вы уверены?' buttonText='Да' isOpen={isConfirmPopupOpen} onClose={closeAllPopups} onConfirm={handleDeleteConfirm}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace ={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleDeleteClick}/>
      <Footer />
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
