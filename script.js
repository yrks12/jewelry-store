document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to Cart!');
            // Logic to add the product to the cart will go here.
        });
    });
});