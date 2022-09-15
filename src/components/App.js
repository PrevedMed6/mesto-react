import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className='page__content'>
      <section className="popup" id="popup-edit">
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h2 className="popup__heading">Редактировать профиль</h2>
        <form className="popup__form" name="editForm" noValidate>
          <fieldset className="popup__input-container">
            <input type="text" className="popup__input" name="name" id="nameInput" placeholder = "Как вас зовут?" minLength="2" maxLength="40" required />
            <span className="popup__error" id="nameInput-error"></span>
            <input type="text" className="popup__input" name="job" id="jobInput" placeholder="Чем вы занимаетесь?"  minLength="2" maxLength="200" required />
            <span className="popup__error" id="jobInput-error"></span>
          </fieldset>
          <button type="submit" className="popup__button">Отправить</button>
        </form>
      </div>
    </section>
    <section className="popup" id="popup-add-card">
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h2 className="popup__heading">Новое место</h2>
        <form className="popup__form" name="addCardForm" noValidate>
          <fieldset className="popup__input-container">
            <input type="text" className="popup__input" name="name" id="cardName" placeholder = "Название"  minLength="2" maxLength="30" required />
            <span className="popup__error" id="cardName-error"></span>
            <input type="url" className="popup__input" name="link" id="cardLink" placeholder="Ссылка на картинку" required />
            <span className="popup__error" id="cardLink-error"></span>
          </fieldset>
          <button type="submit" className="popup__button popup__button_disabled">Создать</button>
        </form>
      </div>
    </section>
    <section className="popup" id="popup-edit-avatar">
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h2 className="popup__heading">Обновить аватар</h2>
        <form className="popup__form" name="addCardForm" noValidate>
          <fieldset className="popup__input-container">
            <input type="url" className="popup__input" name="avatar" id="avatarLink" placeholder="Ссылка на аватар" required />
            <span className="popup__error" id="avatarLink-error"></span>
          </fieldset>
          <button type="submit" className="popup__button popup__button_disabled">Сохранить</button>
        </form>
      </div>
    </section>
    <section className="popup popup_ispicture" id="popup-picture" aria-label="форма просмотра фото">
      <div className="popup__container popup__container_ispicture">
        <button type="button" className="popup__close"></button>
        <img className="popup__big-photo" src="#" alt="#" />
        <p className="popup__picture-title nooverflow-block"></p>
      </div>
    </section>
    <section className="popup" id="popup-confirm" aria-label="подтверждение">
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <h2 className="popup__heading">Вы уверены?</h2>
        <button type="button" className="popup__button popup__button_isconfirm">Да</button>
      </div>
    </section>
    <Header />
    <Main />
    <Footer />
    <template className="grid-card">
      <li className="element">
        <button className="element__delete" type="button"></button>
        <div className="element__image-container" role="img" >
        </div>
        <div className="element__title">
          <h2 className="element__title-text nooverflow-block" title=""></h2>
          <div className="element__like-container">
            <button type="button" className="element__heart"></button>
            <span className="element__likes-count"></span>
          </div>
        </div>
      </li>
    </template>
  </div>
  );
}

export default App;
