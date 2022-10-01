
import React from 'react';
import Card from './Card'
import { CurrentUserContext} from '../contexts/CurrentUserContext';
export default function Main(props){
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile centred-block">
        <div className="profile__info">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img className="profile__avatar-picture" src={currentUser.avatar} alt="Аватар" />
          </div>
          <div className="profile__text">
            <div className="profile__name">
              <h1 className="profile__title nooverflow-block">{currentUser.name}</h1>
              <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job nooverflow-block">{currentUser.about}</p>
          </div>
        </div>
        <button type="button" className="profile__add-photo" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements centred-block" aria-label="Фотогалерея">
        <ul className="elements__grid">
          {props.cards.map((card) => (
           <Card card={card} key={card._id} onCardClick={props.onCardClick} onLikeClick={props.onCardLike}
           onDeleteClick={props.onCardDelete}/>
          ))}
        </ul>
      </section>
    </main>
  );
}
