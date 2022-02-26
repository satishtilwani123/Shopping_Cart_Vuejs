const cart = {
    state: {
        cartData: {
            products:[
            
            ],
            totalprice: 0,
            totalquantity: 0,
        }
    },
    getters: {
        getQuantity: (state) => {
            let quan = 0;
            state.cartData.products.forEach(prod => (
                quan += parseInt(prod.quantity)
            ))
            return quan
        },
        getTotalPrice: (state) => {
            let price = 0;
            state.cartData.products.forEach(prod => (
                price += prod.totalprice
            ))
            return price
        },
        getCartProducts: (state) => {
            return state.cartData.products
        },
        getProductsName: (state) => {
            const proname = []
            state.cartData.products.forEach(pro => (
                proname.push(pro.title)
            ))
            return proname
        },
        getProductsQuantity: (state) => {
            const proquan = []
            state.cartData.products.forEach(pro => (
                proquan.push(pro.quantity)
            ))
            return proquan
        }
    },
    mutations: {
        addItem: (state, product) => {
            const prod = state.cartData.products.find(pro => pro.id === product.id)
            if(prod){
                alert('Already added in the Cart!');
            } else {
                product.quantity = 1
                product.totalprice = parseInt(product.quantity) * product.price;
                state.cartData = {...state.cartData, products: [...state.cartData.products, product], totalprice: state.cartData.totalprice + product.price, totalquantity: state.cartData.totalquantity + 1}
            }
        },
        removeItem: (state, id) => {
            state.cartData.products = state.cartData.products.filter(prod => prod.id !== id)
        },
        updateQuantity: (state, proitem) => {
            const product = state.cartData.products.find(pro => pro.id === proitem.index)
            product.totalprice = product.price * parseInt(product.quantity)
            const prodindex = state.cartData.products.findIndex(pro => pro.id === proitem.index)
            state.cartData.products[prodindex] = product
        }
    },
    actions: {
        addItem: (obj, product) => {
            obj.commit("addItem", product)
        },
        removeItem: (obj, id) => {
            obj.commit("removeItem", id)
        },
        updateQuantity: (obj, proitem) => {
            obj.commit("updateQuantity", proitem)
        }
    },
}

export default cart;