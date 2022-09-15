import logoPath from '../image/logo.svg';
export default function Header(){
  return (
    <header className="header centred-block">
      <img className="header__logo" alt="Логотип" src={logoPath}/>
    </header>
  )
}
