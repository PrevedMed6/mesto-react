export default function ImagePopup(props) {
  return (
  <section className={props.card.isOpen ? `popup ppopup_ispicture popup_opened`:`popup popup_ispicture`} aria-label="форма просмотра фото" onClick={props.onClose}>
    <div className="popup__container popup__container_ispicture">
      <button type="button" className="popup__close" onClick={props.onClose}></button>
      <img className="popup__big-photo" src={props.card.link} alt={props.card.name} />
      <p className="popup__picture-title nooverflow-block">{props.card.name}</p>
    </div>
  </section>
  );
}
