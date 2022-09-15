import defaultAvatar from '../image/avatar.jpg';

export default function Main(){
  return (
    <main className="main">
      <section className="profile centred-block">
        <div className="profile__info">
          <div className="profile__avatar">
            <img className="profile__avatar-picture" src={defaultAvatar} alt="Аватар" />
          </div>
          <div className="profile__text">
            <div className="profile__name">
              <h1 className="profile__title nooverflow-block"></h1>
              <button type="button" className="profile__edit-button"></button>
            </div>
            <p className="profile__job nooverflow-block"></p>
          </div>
        </div>
        <button type="button" className="profile__add-photo"></button>
      </section>
      <section className="elements centred-block" aria-label="Фотогалерея">
        <ul className="elements__grid">
        </ul>
      </section>
    </main>
  );
}
