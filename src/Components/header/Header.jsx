import './header.style.css'

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <h1>Track Your Expenses</h1>
        <nav>
          <span className="headerNav-link">Home</span>
          <span className="headerNav-link">Sign In</span>
        </nav>
      </div>
    </div>
  )
}

export default Header
