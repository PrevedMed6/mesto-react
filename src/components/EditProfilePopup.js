import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext} from '../contexts/CurrentUserContext';

export default function EditProfilePopup(props)
{
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [description, setDescription] = React.useState(currentUser.about);
  const [nameIsValid, setNameIsValid] = React.useState(true);
  const [nameValidationMessage, setNameValidationMessage] = React.useState('');
  const [nameClass, setNameClass] = React.useState('popup__error');
  const [aboutIsValid, setAboutIsValid] = React.useState(true);
  const [aboutValidationMessage, setAboutValidationMessage] = React.useState('');
  const [aboutClass, setAboutClass] = React.useState('popup__error');

  React.useEffect(() => {
    if(!props.isOpen)
    {
      setName(currentUser.name);
      setDescription(currentUser.about);
      setNameIsValid(true);
      setAboutIsValid(true);
      setAboutValidationMessage('');
      setNameValidationMessage('');
      setNameClass('popup__error');
      setAboutClass('popup__error');
    }
  }, [currentUser,props.isOpen]);

  function handleNameChange(e){
    setName(e.target.value);
  }

  function handleDescriptionChange(e){
    setDescription(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }
  function handleNameInput(e)
  {
    setNameIsValid(e.target.validity.valid);
    setNameValidationMessage(e.target.validity.valid?'':e.target.validationMessage);
    setNameClass(`popup__error ${e.target.validity.valid?'':'popup__error_visible'}`);
  }
  function handleAboutInput(e)
  {
    setAboutIsValid(e.target.validity.valid);
    setAboutValidationMessage(e.target.validity.valid?'':e.target.validationMessage);
    setAboutClass(`popup__error ${e.target.validity.valid?'':'popup__error_visible'}`);
  }

  return (
    <PopupWithForm name='editForm' title='Редактировать профиль' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} buttonText='Отправить' isValid={nameIsValid&&aboutIsValid}>
      <fieldset className="popup__input-container">
        <input type="text" className="popup__input" name="name" value={name||''} onInput={handleNameInput} onChange={handleNameChange} placeholder = "Как вас зовут?" minLength="2" maxLength="40" required />
        <span className={nameClass}>{nameValidationMessage}</span>
        <input type="text" className="popup__input" name="job"  value={description||''} onInput={handleAboutInput} onChange={handleDescriptionChange} placeholder="Чем вы занимаетесь?"  minLength="2" maxLength="200" required />
        <span className={aboutClass}>{aboutValidationMessage}</span>
      </fieldset>
    </PopupWithForm>
  )
}
