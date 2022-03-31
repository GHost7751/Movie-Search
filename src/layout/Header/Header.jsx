import './Header.scss'

function Header() {
    return ( 
      <header>
      <div className="header__content">
        <i className="left large material-icons blue lighten-3">live_tv</i>
        <a href="!" className="header__logo">Movie Search</a>
        <a href="!" className="btn-join">Join</a>
      </div>
    </header>
    )
}



export {Header}
