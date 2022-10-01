import React from 'react';
import { CurrentUserContext} from '../contexts/CurrentUserContext';

export default function Card(props)
{
  const currentUser = React.useContext(CurrentUserContext);
  const card = props.card;
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__heart ${isLiked?'element__heart_active':''}`;

  function handleClick() {
    props.onCardClick(card);
  }
  function handleLikeClick() {
    props.onLikeClick(card)
  }
  function handleDeleteClick() {
    props.onDeleteClick(card);
  }
  return(
  <li className="element">
    {!isOwn || <button className={"element__delete"} type="button" onClick={handleDeleteClick}></button>}
    <div className="element__image-container" role="img" style={{ backgroundImage: `url(${card.link ?? '#'})` }}  onClick={handleClick}>
    </div>
    <div className="element__title">
      <h2 className="element__title-text nooverflow-block" title="">{card.name ?? 'Картинка без названия'}</h2>
      <div className="element__like-container">
        <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
        <span className="element__likes-count">{card.likes?.length ?? 0}</span>
      </div>
    </div>
  </li>
  );
}
