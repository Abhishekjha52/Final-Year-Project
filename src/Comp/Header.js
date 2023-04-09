import React, {useState} from 'react'
import img from "./img1.png"


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <header>
      <a href='https://www.fortinet.com/resources/cyberglossary/what-is-cryptography#:~:text=The%20Importance%20of%20Cryptography&text=Individuals%20and%20organizations%20use%20cryptography,to%20the%20sender%20and%20recipient.' target='_blank'><img src={img} alt="Logo" className='logo'/></a>

        <ul className={`list ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="" className='active'>Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="secure">Encrypt</a></li>
            <li><a href="upload">Upload</a></li>

        </ul>

        <div className='main'>
          <a href='signIn' className='user'><i class="ri-user-fill"></i> Sign In</a>
          <div className="menu-icon" onClick={handleMenuClick}>
            {isMenuOpen ? (
              <i class="ri-close-line"></i>
            ):(
              <i class="ri-menu-line"></i>
            )}
            
        </div>
        </div>
      
    </header>
    </>
  )
}

export default Header