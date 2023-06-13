let openShopping = document.querySelector('.openShopping')
let closeShopping = document.querySelector('.closeShopping')
let list = document.querySelector('.list')
let listCard = document.querySelector('.listCard')
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')
let addCard = document.querySelector('.addCard')
let images = document.querySelector('.images')


function listener() {
    addCard.classList.add('active');
}

openShopping.addEventListener('click', listener)

closeShopping.addEventListener('click', () => {
    addCard.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'product 1',
        img: '/img1.jpg',
        price: 25,
        subHeading: 'running collections',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates facilis doloribus iste, sequi optio obcaecati id laudantium quasi beatae quis. Harum animi culpa illo obcaecati molestias."
    },
    {
        id: 2,
        name: 'product 2',
        img: '/img2.jpg',
        price: 200,
        subHeading: 'running collections',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates facilis doloribus iste, sequi optio obcaecati id laudantium quasi beatae quis. Harum animi culpa illo obcaecati molestias."
    },
    {
        id: 3,
        name: 'product 3',
        img: 'img9.jpg',
        price: 100,
        subHeading: 'running collections',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates facilis doloribus iste, sequi optio obcaecati id laudantium quasi beatae quis. Harum animi culpa illo obcaecati molestias."
    },
    {
        id: 4,
        name: 'product 4',
        img: '/img3.jpg',
        price: 180,
        subHeading: 'running collections',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates facilis doloribus iste, sequi optio obcaecati id laudantium quasi beatae quis. Harum animi culpa illo obcaecati molestias."
    },
    {
        id: 5,
        name: 'product 5',
        img: '/img4.jpg',
        price: 250,
        subHeading: 'running collections',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates facilis doloribus iste, sequi optio obcaecati id laudantium quasi beatae quis. Harum animi culpa illo obcaecati molestias."
    },
    {
        id: 6,
        name: 'product 6',
        img: '/img7.jpg',
        price: 280,
        subHeading: 'running collections',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates facilis doloribus iste, sequi optio obcaecati id laudantium quasi beatae quis. Harum animi culpa illo obcaecati molestias."
    }
]

let listCards = [];

function initApp() {
    products.map((value, index) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('main');
        newDiv.innerHTML = `

<div class="img1 imgContainer"><img src=${value.img}>
</div>
<div class="contant">

    <h3>${value.name}</h3>
    <h6>${value.subHeading ?? "rdrfrvtvtfv"}</h6>
    <br>
    <p>${value.description}</p>
    <br>
    <br>
    <div class="bottom">
        <h3>${value.price}</h3>
        <button onclick="addToCard(${index})" class="btn">Add to Card</button>
    </div>
</div>
`
        images.appendChild(newDiv);
    })

}
initApp()

function addToCard(key) {

    console.log("testststs")
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard()
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.map((value, index) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="${value.img}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>
                <button onclick="changeQuantity(${index}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${index}, ${value.quantity + 1})">+</button>
            </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}