const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item)=>{
        total += (item.product.price * item.product.quantity)
    })
    return total;
}

const getCount = () => {
    let count = 0;
    // Loop through all cart items
    cartItems.forEach((item) => {
        // add the quantity of the cart item to tota;
        count += item.product.quantity;
    })

    return count;
}