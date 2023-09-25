import React from 'react'

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <div>
            &copy;{year} All Rights Reserved
        </div>
    )
}

export default Footer