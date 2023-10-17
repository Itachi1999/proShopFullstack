// To have correct number of decimals
export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
    //Calculate items price
    state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
    //Calculate tax price (5 percent tax)
    state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));
    //Calculate shipping price (If greater than $100 then free otherwise $10)
    state.shippingPrice = addDecimals(state.itemsPrice >= 100 ? 0 : 10);
    //calculate total price
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2);

    //saving to local storage
    localStorage.setItem("cart", JSON.stringify(state));

    return state;
};
