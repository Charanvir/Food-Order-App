import React from "react"

import mealsImage from '../../assets/meals.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img
                src={mealsImage}
                alt="Table full of delicious food"
            ></img>
        </div>
    </React.Fragment>
}

export default Header