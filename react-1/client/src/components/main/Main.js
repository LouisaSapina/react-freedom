import React from 'react';
import classes from '../main/Main.module.css';

function Main(props) {
    return (
        <div className={classes.box}>
            <div className={classes.posts}>
                <h4>{props.head}</h4>
                <p>{props.info}</p>
            </div>
        </div>
    );
}

export default Main;