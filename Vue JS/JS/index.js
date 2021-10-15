let app1 = new Vue({
    el: "#app1",
    data: {
        message: "Hello, Vue!"
    }
})

let app2 = new Vue({
    el: "#app2",
    data: {
        message: "Loaded on " + new Date().toLocaleString(),
        linkUrl: "https://bbc.in/2LAnJs8",
        linkText: "Google Is Down"
    }
})

let app3 = new Vue({
    el:"#app3",
    data:{
        showIt: false
    },
    methods: {
        toggleMsg: function(){
            if(this.showIt){
                this.showIt = false
            } else {
                this.showIt = true
            }
        }
    }
})

let app4 = new Vue({
    el:"#app4",
    data: {
        theList: [
            {text: "Learn HTML"},
            {text: "Learn CSS"},
            {text: "Learn Javascript"}
        ]
    }
})

let app5 = new Vue({
    el:"#app5",
    data: {
        message: "Hello World!",
        groceryList: [
            {
                id: 1,
                decs: "Rocket Salt"
            },
            {
                id: 2,
                decs: "Cheese"
            },
            {
                id: 3,
                decs: "Ramen"
            },
            {
                id: 4,
                decs: "Iced Lemon Tea"
            }
            
        ],
        orderList: [
            {
                id: 1,
                decs: "Nasi Lemak"
            },
            {
                id: 2,
                decs: "Rojak"
            },
            {
                id: 3,
                decs: "Nasi Ayam"
            }
        ]
    }
})
