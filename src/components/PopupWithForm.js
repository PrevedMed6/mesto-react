import React from "react";

export default function PopupWithForm(props)
{
  return (
  <section className={props.isOpen ? `popup popup_type_${props.name} popup_opened`:`popup popup_type_${props.name}`}
    onClick={props.onClose}>
    <div className="popup__container">
      <button type="button" className="popup__close" onClick={props.onClose}></button>
      <h2 className="popup__heading">{props.title}</h2>
      {props.children}
    </div>
  </section>
  );
}
