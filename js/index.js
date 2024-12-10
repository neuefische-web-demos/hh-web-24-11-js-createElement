const form = document.querySelector('[data-js="card-form"]');
const textInput = document.querySelector('[data-js="text-input"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  //
  const newCard = document.createElement('li');
  const emoji = document.createElement('span');
  const newTitle = document.createElement('h2');

  newCard.classList.add('card');
  newTitle.classList.add('card__title');
  cardContainer.append(newCard);
  newCard.textContent = textInput.value;
  newTitle.textContent = 'HEADLINE';
  emoji.textContent = '🎉';

  newCard.append(newTitle, emoji);

  // EXAMPLE with innerHTML
  //   const newCard = document.createElement('li');
  //   newCard.classList.add('card');
  //   cardContainer.append(newCard);
  //   const cardText = textInput.value;

  //   newCard.innerHTML = `
  //     <h2 class="card__title">Card title</h2>
  //     <p>${cardText}</p>
  //     `;

  form.reset();
});

// const newButton = document.createElement('button');
// newButton.textContent = 'Ich bin neu hier';

// newButton.addEventListener('click', () => {
//   console.log('Lösche das Internet');
// });
// document.body.append(newButton);
