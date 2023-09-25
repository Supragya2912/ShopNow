import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { NavLink, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';


const Header = () => {



    const cart = (
        <span>
            <Link to={'/cart'}>
                Cart
                <FaShoppingCart />
            </Link>
        </span>
    );

    return (


        <div
            style={{
                backgroundColor: '#2196f3', // Change to your desired background color
                color: '#fff', // Change to your desired text color
                padding: '10px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography>SHOP NOW</Typography>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <span style={{ marginLeft: '20px' }}>
                        <NavLink to='/login' style={{ color: '#fff', textDecoration: 'none' }}>
                            Login
                        </NavLink>
                    </span>
                    <span style={{ marginLeft: '20px' }}>
                        <NavLink to='/register' style={{ color: '#fff', textDecoration: 'none' }}>
                            Register
                        </NavLink>
                    </span>
                    <span style={{ marginLeft: '20px' }}>
                        <NavLink to='/orders' style={{ color: '#fff', textDecoration: 'none' }}>
                            Order
                        </NavLink>
                    </span>
                    <span style={{ marginLeft: '20px' }}>
                        {cart}
                    </span>

                </div>

            </div>
        </div>
    );
};

export default Header;
