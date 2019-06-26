import React from 'react'

const leftNav = (mode) => {
    return(
        <div className={`${mode}-left-nav`}>
            <i className="fas fa-home"></i>
            <i className="fas fa-fire"></i>
            <i className="far fa-clock"></i>
        </div>
    )
}

export default leftNav;