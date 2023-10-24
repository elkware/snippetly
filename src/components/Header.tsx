import './Header.css'

function Header({setShowAbout} : {setShowAbout: (state: boolean) => void}) {
  return (
      <div className={"hero"}>
          <nav className={"container"}>
              <ul>
                  <li><a href={"/"}><strong>Snippetly</strong></a></li>
              </ul>
              <ul className={"rtl"}>
                  <li><a href="#"  onClick={event => {
                      event.preventDefault();
                      setShowAbout(true);
                  }}>About</a></li>

                  <li><a href={"https://www.buymeacoffee.com/jozef"} target={"blank"}><img
                      src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee"
                      style={{height: "48px", marginTop: "-10px"}}/></a></li>
              </ul>
          </nav>
      </div>
  )
}

export default Header;