const products = {
    state: {
        products:[
            {id: 1, title: 'AirPods', name: 'Apple AirPods with Charging Case (Wired)', image: '1.jpg', price: 50, quantity: 1},
            {id: 2, title: 'Nintendo Switch', name: 'Nintendo Switch - Animal Crossing: New Horizons Edition - Switch', image: '2.jpg', price: 100, quantity: 1},
            {id: 3, title: 'Alkaline Batteries', name: 'AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack', image: '3.jpg', price: 80, quantity: 1},
            {id: 4, title: 'Media Player', name: 'Roku Express HD Streaming Media Player', image: '4.jpg', price: 60, quantity: 1},
        ]
    },
    getters: {
        getProducts: (state) => {
            return state.products
        },
    },
    mutations: {

    },
    actions: {
    
    },
}

export default products