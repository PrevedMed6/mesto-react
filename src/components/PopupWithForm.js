import React from "react";

export default function PopupWithForm(props)
{
  const [buttonText, setButtonText] = React.useState(props.buttonText);
  const [buttonClass, setButtonClass] = React.useState('popup__button popup__button_disabled');
  React.useEffect(()=>{
    setButtonClass(`popup__button ${props.isValid?'':'popup__button_disabled'}`);
  },[props.isValid]);
  React.useEffect(() => {
    if(!props.isOpen)
    {
      setButtonText(props.buttonText);
    }
  }, [props.isOpen,props.buttonText]);
  function handleClose(e)
  {
    if (e.target === e.currentTarget)
    {
      props.onClose();
    }
  }

  function handleSubmit(e)
  {
    setButtonText('Сохранение...');
    props.onSubmit(e)
  }

  return (
  <section className={props.isOpen ? `popup popup_type_${props.name} popup_opened`:`popup popup_type_${props.name}`}
    onClick={handleClose}>
    <div className="popup__container">
      <button type="button" className="popup__close" onClick={handleClose}></button>
      <h2 className="popup__heading">{props.title}</h2>
      <form className="popup__form" name={props.name} onSubmit={handleSubmit} noValidate>
        {props.children}
        <button type="submit" className={buttonClass}>{buttonText}</button>
      </form>
    </div>
  </section>
  );
}
