import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    // Inline CSS styles
    const footerStyles = {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
        position: 'fixed',
        bottom: '0',
        width: '100%',
    };

    return (
        <div style={footerStyles}>
            &copy;{year} All Rights Reserved
        </div>
    );
};

export default Footer;
