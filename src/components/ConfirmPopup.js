import React from "react";
export default function ConfirmPopup (props) {
  function handleClose(e)
  {
    if (e.target === e.currentTarget)
    {
      props.onClose();
    }
  }
  return (
    <section className={props.isOpen ? `popup popup_type_${props.name} popup_opened`:`popup popup_type_${props.name}`}
      onClick={handleClose}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={handleClose}></button>
        <h2 className="popup__heading">{props.title}</h2>
        <button type="button" className="popup__button popup__button_isconfirm" onClick={props.onConfirm}>{props.buttonText}</button>
      </div>
    </section>
  );
}
