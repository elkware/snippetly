import './Header.css'

function Header({setShowAbout} : {setShowAbout: (state: boolean) => void}) {
  return (
      <div className={"hero"}>
          <nav className={"container"}>
              <ul>
                  <li><a href={"/"}><strong>Snippetly</strong></a></li>
              </ul>
              <ul className={"rtl"}>
                  <li><a href="/"  onClick={event => {
                      event.preventDefault();
                      setShowAbout(true);
                  }}>About</a></li>

                  <li><a href="https://www.buymeacoffee.com/jozef"><img alt="Buy me a coffee" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=jozef&button_colour=01aaff&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=F0DDff" style={{height: "48px", marginTop: "-10px"}}/></a>
                  </li>
              </ul>
          </nav>
      </div>
  )
}

export default Header;