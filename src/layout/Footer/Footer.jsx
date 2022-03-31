import './footer.scss'

function Footer() {
  return ( <footer>
    <div className="footer__content">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
        </div>
        <a href="https://github.com/GHost7751" className="btn-join-git" target="_blank">GitHub</a>
      </div>
  </footer>
  )
}

export {Footer}