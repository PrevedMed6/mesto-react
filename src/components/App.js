import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard , setSelectedCard ] = React.useState({isOpen:false, link:'#', name:'#'});
  React.useEffect(() => {
    const handleEscClose = (evt) => {
      closeAllPopups(evt);
    }
    if (isEditProfilePopupOpen||isAddPlacePopupOpen||isEditAvatarPopupOpen||selectedCard.isOpen) {
      document.addEventListener('keydown', handleEscClose);
    }
    else
    {
      document.removeEventListener('keydown', handleEscClose);
    }
    return () => {
        document.removeEventListener('keydown', handleEscClose);
    }
  }, [isEditProfilePopupOpen,isAddPlacePopupOpen,isEditAvatarPopupOpen,selectedCard.isOpen]);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };
  function handleAddPlaceClick(){
    setAddPlacePopupOpen(true);
  };
  function handleCardClick(card){
    setSelectedCard({isOpen:true, link:card.link, name:card.name});
  };
  function closeAllPopups(evt){
    if(evt.target===evt.currentTarget || evt.key === 'Escape')
    {
      setEditAvatarPopupOpen(false);
      setEditProfilePopupOpen(false);
      setAddPlacePopupOpen(false);
      setSelectedCard({isOpen:false, link:'#', name:'#'});
    }
  }

  return (
  <div className='page__content'>
    <PopupWithForm name='editForm' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText='Отправить'>
        <fieldset className="popup__input-container">
          <input type="text" className="popup__input" name="name" id="nameInput" placeholder = "Как вас зовут?" minLength="2" maxLength="40" required />
          <span className="popup__error" id="nameInput-error"></span>
          <input type="text" className="popup__input" name="job" id="jobInput" placeholder="Чем вы занимаетесь?"  minLength="2" maxLength="200" required />
          <span className="popup__error" id="jobInput-error"></span>
        </fieldset>
    </PopupWithForm>
    <PopupWithForm name='addCardForm' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText='Создать'>
        <fieldset className="popup__input-container">
          <input type="text" className="popup__input" name="name" id="cardName" placeholder = "Название"  minLength="2" maxLength="30" required />
          <span className="popup__error" id="cardName-error"></span>
          <input type="url" className="popup__input" name="link" id="cardLink" placeholder="Ссылка на картинку" required />
          <span className="popup__error" id="cardLink-error"></span>
        </fieldset>
    </PopupWithForm>
    <PopupWithForm name='editAvatarForm' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText='Сохранить'>
        <fieldset className="popup__input-container">
          <input type="url" className="popup__input" name="avatar" id="avatarLink" placeholder="Ссылка на аватар" required />
          <span className="popup__error" id="avatarLink-error"></span>
        </fieldset>
    </PopupWithForm>
    <PopupWithForm name='noForm' title='Вы уверены?' buttonText='Да' />
    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    <Header />
    <Main onEditProfile={handleEditProfileClick} onAddPlace ={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}/>
    <Footer />
  </div>
  );
}

export default App;
