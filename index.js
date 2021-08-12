const pocemonEl = document.querySelector('.js-pokemon');
const formEl = document.querySelector('.js-form');
const inputEl = document.querySelector('.js-input');
const buttonEl = document.querySelector('.js-button');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
event.preventDefault();

const formData = event.currentTarget;
const numberID = formData.elements.query.value;

fechPocemon(numberID)
.then(r => downPokemon(r))
.catch(e => alert('Мы не нашли вашего покемона!'))
.finally(() => {formData.reset();
})
};

function renderCard(r) {
    return `<div class='card-img-top'>
<img src='${r.sprites.front_default}' alt=''>
</div>
<div class='card-body>
<h2 class='card-title'> Имя: ${r.name}</h2>
<p class='card-text'> Вес: ${r.weight}</p>
<p class='card-text'> Рост: ${r.height}</p>
<p class='card-text'><b>Умения ${r.base_experience}</b></p>
<ul class='list-groop'>
<li class='list-groop-item'></li>
</ul>
</div>
`}

function fechPocemon(id) {
 return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
.then(r => r.json())  
};

function downPokemon(r) {
    return pocemonEl.innerHTML = renderCard(r)
};