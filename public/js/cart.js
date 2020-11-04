document.addEventListener('DOMContentLoaded', () => {

    /*********************************************VARS***********************************************/

    const container = document.getElementById('container-products');

    /*********************************************FUNCTIONS***********************************************/

    // GET FROM LS
    function getProductsFromLS(){

        const arrayOfProductNames = ['healthy mix', 'dried apricots', 'pistachios', 'almonds', 'superfood mix', 'mixed nuts', 'pistachio with shell', 'walnuts with shell', 'peanuts', 'walnuts'];
        let ls, obj;
        let arrayOfChosenProducts = []; 

        arrayOfProductNames.forEach( item => {
            if(ls = localStorage.getItem(item)){
                obj = JSON.parse(ls);
                arrayOfChosenProducts.push(obj)
            }
        })
        displayProductsInCart(arrayOfChosenProducts);
        displayTotalPrice(arrayOfChosenProducts);
    }
    
    getProductsFromLS();

    // DISPLAY PRODUCTS
    function displayProductsInCart(arrayProd){

        let name, price, qty, totalPriceItem, cartRow;
        let prices = [];

        arrayProd.forEach( product => {
        
            name = product.name;
            price = parseFloat(product.price.slice(1, product.price.length));
            qty = parseInt(product.qty);
    
            totalPriceItem = (price * qty).toFixed(2);
            prices.push(parseFloat(totalPriceItem));
    
            cartRow = document.createElement('div');
            cartRow.classList.add('row');
    
            cartRow.innerHTML = `
                <div class="product-name text-uppercase col-4 text-left">
                    <div class="product-name">${name}</div>
                    <button type="button" class="btn btn-light text-uppercase">delete</button>
                </div>
                <div class="product-price col-3 text-center">€<span class="price">${price}</span></div>
                <div class="product-quantity col-2 text-center">${qty}</div>
                <div class="product-total col-3 text-center">€<span class="total-price-product">${totalPriceItem}</span></div>
            `
            container.append(cartRow);
        })

    }
    
    // DISPLAY TOTAL
    function displayTotalPrice(arrayProd){

        const totalPrice = document.getElementById('total-of-all-prices');
        let price, qty, totalPriceItem, sum, reducer;
        let prices = [];

        arrayProd.forEach( product => {
        
            price = parseFloat(product.price.slice(1, product.price.length));
            qty = parseInt(product.qty);
    
            totalPriceItem = (price * qty).toFixed(2);
            prices.push(parseFloat(totalPriceItem));
    
        })

        reducer = (acc, curr) => acc + curr;
        sum = prices.reduce(reducer);

        totalPrice.innerText = sum.toFixed(2);

    }

    // REMOVE ITEM FROM SHOPPINGCART
    function removeProduct(target){
        // Getting the right product
        const parentElement = target.parentElement.parentElement;
        const getProductName = target.parentElement.children[0].textContent;
       
        // Remove from the DOM
        parentElement.remove();

        // Remove from the LS 
        removeFromLS(getProductName);

        // Refresh webpage
        window.location.replace('cart');
    
    }

    // UPDATE THE LS
    function removeFromLS(name){
        // Update the LS
        localStorage.removeItem(name);
    
    }

    /*********************************************EVENTS***********************************************/

    container.addEventListener('click', e => {
        let target = e.target;

        console.log(target)
    
        if(target.classList[0] === 'btn'){
            removeProduct(target); 
        }
    
    })
    
})