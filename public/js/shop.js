document.addEventListener('DOMContentLoaded', () => {

    console.log('shop.js is loaded')

    /************************************************VARS************************************************************/

    const cart = document.querySelectorAll('.cart');

    /***********************************************FUNCTIONS********************************************************/


    // ADD TO CART
    function checkLS(name, price, qty){
        if(localStorage.getItem(name) === null){
            saveNewProductToLS(name, price, qty);
        }else{
            updateProductInLS(name, price, qty);
        }
    }

    function saveNewProductToLS(name, price, qty){
        let product = {
            name,
            price,
            qty
        }
        localStorage.setItem(name, JSON.stringify(product));
    }

    function updateProductInLS(name, price, qty){
        let q, newQty, ls, toArray, product;
            
            // GET PRODUCT
            ls = JSON.parse(localStorage.getItem(name));
            toArray = Object.entries(ls);
            
            // GET CURRENT QTY
            toArray.forEach(product => {
                if(product.includes('qty')) q = product[1];
            });

            // UPDATE QTY
            newQty = parseInt(q) + parseInt(qty);

            // REMOVE OLD LS
            localStorage.removeItem(name);

            // UPDATE LS WITH NEW PRODUCT
            product = {
                name,
                price,
                qty: newQty
            }
            localStorage.setItem(name, JSON.stringify(product));
    }

    function addAnimationToCart(animation){
        animation.classList.add('added');
        setTimeout(() => {
            animation.classList.remove('added');
        }, 8000);
    }


    /*************************************************EVENTS************************************************/

    cart.forEach(c => {
        c.addEventListener('click', (e) => {
            const selectedCart = e.target;
            const getParent = selectedCart.parentNode.parentNode.parentNode;
            const getProductName = getParent.children[0].textContent;
            const getProductPrice = getParent.children[2].children[0].textContent;
            const getProductQty = getParent.children[2].children[1].children[0].value;
            const animation = getParent.children[3];
            
            if(getProductQty > 0){
                checkLS(getProductName, getProductPrice, getProductQty, animation);
                addAnimationToCart(animation);
                // delete value input
                getParent.children[2].children[1].children[0].value = '';
            }
                
        })
    });



})