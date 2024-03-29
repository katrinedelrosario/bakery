import React from 'react'
import './footer.scss'
import { IoIosArrowUp } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className='mainFooter'>
        <div className='arrowContainer'>
        <div className='circle'>
        <a href="#top">
            <IoIosArrowUp size={40} color="black" />
          </a>
        </div>
        </div>
        <div className='container'>

            <h3>bageriet</h3>
            <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men det fleste udgaver har <br/> gennemgået forandringer.</p>
            <div className='shadow'>
                <p>Copyright © 2017 bageriet aps</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer