import React from 'react';
import cl from './Header.module.css';


function Header() {
    return (
        <div className={cl.container}>
            <div className={cl.image}>
                <img className={cl.img} src='https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80' alt=''/>
            </div>
            <div className={cl.navigation}>
                <h3>Menu</h3>
                <ul className={cl.userlists}>
                    <li className={cl.listItem}>Home</li>
                    <li className={cl.listItem}>News</li>
                    <li className={cl.listItem}>Contact</li>
                    <li className={cl.listItem}>About</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;