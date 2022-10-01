import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup (props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  const [nameIsValid, setNameIsValid] = React.useState(false);
  const [nameValidationMessage, setNameValidationMessage] = React.useState('');
  const [nameClass, setNameClass] = React.useState('popup__error');
  const [linkIsValid, setLinkIsValid] = React.useState(false);
  const [linkValidationMessage, setLinkValidationMessage] = React.useState('');
  const [linkClass, setLinkClass] = React.useState('popup__error');
  //очистим поля при закрытии формы
  React.useEffect(() => {
    if(!props.isOpen)
    {
      setName('');
      setLink('');
      setNameIsValid(false);
      setLinkIsValid(false);
      setLinkValidationMessage('');
      setNameValidationMessage('');
      setLinkClass('popup__error');
      setNameClass('popup__error');
    }
  }, [props.isOpen]);

  function handleNameChange(e){
    setName(e.target.value);
  }

  function handleLinkChange(e){
    setLink(e.target.value);
  }
  function handleNameInput(e)
  {
    setNameIsValid(e.target.validity.valid);
    setNameValidationMessage(e.target.validity.valid?'':e.target.validationMessage);
    setNameClass(`popup__error ${e.target.validity.valid?'':'popup__error_visible'}`);
  }
  function handleLinkInput(e)
  {
    setLinkIsValid(e.target.validity.valid);
    setLinkValidationMessage(e.target.validity.valid?'':e.target.validationMessage);
    setLinkClass(`popup__error ${e.target.validity.valid?'':'popup__error_visible'}`);
  }
  function handleSubmit(e){
    e.preventDefault();

    props.onAddCard({
      name:name,
      link:link,
    });
  }
  return (
    <PopupWithForm name='addCardForm' title='Новое место' isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} buttonText='Создать' isValid={nameIsValid&&linkIsValid}>
    <fieldset className="popup__input-container">
      <input type="text" className="popup__input" name="name" placeholder = "Название" value={name || ''} onInput={handleNameInput} onChange={handleNameChange} minLength="2" maxLength="30" required />
      <span className={nameClass}>{nameValidationMessage}</span>
      <input type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" value={link || ''} onInput={handleLinkInput} onChange={handleLinkChange} required />
      <span className={linkClass}>{linkValidationMessage}</span>
    </fieldset>
  </PopupWithForm>
  );
}
