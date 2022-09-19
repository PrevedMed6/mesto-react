export default function Card(props)
{
  function handleClick() {
    props.onCardClick(props.card);
  }
  return(
  <li className="element">
    <button className="element__delete" type="button"></button>
    <div className="element__image-container" role="img" style={{ backgroundImage: `url(${props.card.link ?? '#'})` }}  onClick={handleClick}>
    </div>
    <div className="element__title">
      <h2 className="element__title-text nooverflow-block" title="">{props.card.name ?? 'Картинка без названия'}</h2>
      <div className="element__like-container">
        <button type="button" className="element__heart"></button>
        <span className="element__likes-count">{props.card.likes?.length ?? 0}</span>
      </div>
    </div>
  </li>
  );
}
