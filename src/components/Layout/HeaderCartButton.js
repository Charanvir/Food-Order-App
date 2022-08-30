import { useContext, useEffect, useState } from "react"

import CartIcon from "../Cart/CartIcon"
import CartContext from "../../store/cart-context"

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
    const [highLighted, setHighlighted] = useState(false)

    const cartContext = useContext(CartContext);

    const numberOfCartItems = cartContext.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)

    const { items } = cartContext

    const buttonClasses = `${classes.button} ${highLighted ? classes.bump : ''}`

    useEffect(() => {
        if (cartContext.items.length === 0) {
            return
        }
        setHighlighted(true)

        const timer = setTimeout(() => {
            setHighlighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return <button className={buttonClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
}

export default HeaderCartButton