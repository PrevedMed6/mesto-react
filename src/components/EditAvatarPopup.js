import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props){
  const avatarRef = React.useRef();
  const [formIsValid, setFormIsValid] = React.useState(false);
  const [linkIsValid, setLinkIsValid] = React.useState(true);
  const [validationMessage, setValidationMessage] = React.useState('');
   //очистим поля при закрытии формы
   React.useEffect(() => {
    if(!props.isOpen)
    {
      avatarRef.current.value='';
      setFormIsValid(false);
      setLinkIsValid(true);
      setValidationMessage('');
    }
  }, [props.isOpen]);
  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  function handleInput()
  {
    setLinkIsValid(avatarRef.current.validity.valid);
    setFormIsValid(avatarRef.current.validity.valid);
    setValidationMessage(avatarRef.current.validity.valid?'':avatarRef.current.validationMessage);
  }
  return (
    <PopupWithForm name='editAvatarForm' title='Обновить аватар' isValid={formIsValid} isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} buttonText='Сохранить'>
      <fieldset className="popup__input-container">
        <input type="url" className="popup__input" name="avatar" ref={avatarRef} placeholder="Ссылка на аватар" onInput={handleInput} required />
        <span className={`popup__error ${linkIsValid?'':'popup__error_visible'}`} >{validationMessage}</span>
      </fieldset>
    </PopupWithForm>
  );
}
