import React from 'react';
import cl from './Footer.module.css';

function Footer() {
    return (
        <div className={cl.container}>
            <div className={cl.info}>
                <h3>About us</h3>
                <p>We're building a world powered by solar energy, running on batteries and transported by electric vehicles.</p>
            </div>
            <div className={cl.contacts}>
                <h3>Contacts</h3>
                <ul className={cl.userlists}>
                    <li className={cl.listItem}>North America</li>
                    <li className={cl.listItem}>press@tesla.com</li>
                    <li className={cl.listItem}>1 Tesla Road, Austin, TX 78725</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;