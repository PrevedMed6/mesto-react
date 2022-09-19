
import React from 'react';
import api from '../utils/Api';
import Card from './Card';
export default function Main(props){
  const [userName, setUserName] = React.useState('');
  const [userDescription , setUserDescription ] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards , setCards ] = React.useState([]);
  React.useEffect(
  function getInitialInfo(){
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards() ])
      .then(([user, initialCards])=>{
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(initialCards);
      })
      .catch((err)=>{
        console.log(err);
    })},[]);
  return (
    <main className="main">
      <section className="profile centred-block">
        <div className="profile__info">
          <div className="profile__avatar" onClick={props.onEditAvatar}>
            <img className="profile__avatar-picture" src={userAvatar} alt="Аватар" />
          </div>
          <div className="profile__text">
            <div className="profile__name">
              <h1 className="profile__title nooverflow-block">{userName}</h1>
              <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job nooverflow-block">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-photo" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements centred-block" aria-label="Фотогалерея">
        <ul className="elements__grid">
          {cards.map((card, i) => (
           <Card card={card} key={i} onCardClick={props.onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  );
}
