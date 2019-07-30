import React from 'react'
import {Link} from 'react-router-dom'

const leftNav = (mode) => {
    return(
        <div className={`${mode}-left-nav`}>
            <a href="https://www.linkedin.com/in/alex-seant-62baa945/" target="_blank"> <i className="fab fa-linkedin"></i> </a>
            <a href="https://angel.co/alex-seant" target="_blank"> <i className="fab fa-angellist"></i> </a>
            <a href="https://pushdabutton.github.io/portfolio/" target="_blank"><i className="fas fa-address-card"></i> </a>
        </div>
    )
}

export default leftNav;