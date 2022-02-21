// SELECTORS
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const banner = document.querySelector('.banner');
const validateButton = document.getElementById('validate');
const cardItems = document.getElementById('card-items');

const purchaseButtons = document.querySelectorAll('#purchase')

banner.style.display = 'none';

// STATE
let state = {
    products: {},
    total: 0,
}

// FUNCTIONS
const validatePasswords = (event) => {
    event.preventDefault();
    banner.style.display = '';
    if(password.value === passwordConfirm.value) {
        banner.classList.remove('invalido');
        banner.classList.add('valido');
        banner.innerHTML = 'Las contraseñas coinciden';
    } else {
        banner.classList.remove('valido');
        banner.classList.add('invalido');
        banner.innerHTML = 'Las contraseñas no coinciden';
    }
}

const deleteProduct = (event) => {
    const product = event.target.dataset.name;
    state.total -= state.products[product].price;

    delete state.products[product];

    updateCart();
}

const updateCart = () => {
    // renderizar items
    let cart = Object.values(state.products).map((product) => {
        return `<div class="article-card">
                <h5 id="nombre">${product.name}</h5>
                <p id="cantidad">${product.amount}</p>
                <p id="precio">$${product.price}</p>
                <a id="delete" data-name="${product.name}" class="waves-effect waves-light btn">Borrar</a>
            </div>`
    }).join('');

    // renderizar IVA
    cart += `<div class="article-card">
                <h5 id="nombre">IVA</h5>
                <p id="nombre">$${state.total * 0.1}</p>
            </div>`;

    // renderizar items
    cart += `<div id="total" class="article-card">
                <h4 id="nombre">Total</h4>
                <h5 id="nombre">$${state.total + state.total*0.1}</h5>
            </div>`;

    cardItems.innerHTML = cart;

    document.querySelectorAll("#delete").forEach(btn => btn.addEventListener('click', deleteProduct));

    // cambiar el color de las letras cuando el mouse hace hover
    document.querySelectorAll("p").forEach(btn => btn.addEventListener('mouseover', (event) => {
        event.target.style.color = 'rgba(255, 0, 0, 0.8)';
    }));

    // mostrar informacion sobre el total
    document.getElementById("total").addEventListener('mouseover', () => {
        if(document.getElementById('bannerTotal')) {
            documen.getElementById('bannerTotal').innerHTML = `El total $${state.total + state.total*0.1} es calculando sumando el total de los productos y el IVA que es $${state.total*0.1}`;
            return;
        }
        cardItems.insertAdjacentHTML('afterend', `<div id="bannerTotal" class="col s12 banner">El total $${state.total + state.total*0.1} es calculando sumando el total de los productos y el IVA que es $${state.total*0.1}</div>`)
    })
}

const addToCart = (event) => {
    const product = event.target.dataset.name;
    const price = event.target.dataset.price;
    const amount = document.getElementById(product.split(' ')[0]).value;

    if(amount < 1 || amount > 100) {
        alert("La cantidad ingresada no está permitida");
        return;
    }

    if(state.products[product]) {
        state.products[product].price += price*amount;
        state.products[product].amount += amount*1;
    } else {
        state.products[product] = {
            name: product,
            price: price*amount,
            amount: amount*1,
        }
    }

    state.total += price*amount;

    updateCart();
}

// EVENT LISTENERS
validateButton.addEventListener('click', validatePasswords)

purchaseButtons.forEach(btn => btn.addEventListener('click', addToCart))