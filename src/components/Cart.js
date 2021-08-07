import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Cart/cart'

export default function Cart() {
    const cartItems = useSelector(state => state.Cart.cartItems)
    const dispatch = useDispatch()
    return (
        <div>
            <p>{cartItems}</p>
            <button onClick={() => dispatch(increment())}>Add Items to Cart</button>
            <button  onClick={() => dispatch(decrement())}>Remove items in cart</button>
            
        </div>
    )
}
