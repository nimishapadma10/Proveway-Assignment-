var cardContainer = document.getElementsByClassName("card");

for (let i = 0; i < cardContainer.length; i++) {
    cardContainer[i].id = "card_" + (i + 1);
    cardContainer[i].addEventListener("click", clickEvent);
}

function clickEvent(event) {

    console.log(event.target.nodeName);
    if (event.target.nodeName == "SELECT") 
        return;

    let cardId = event.target.closest('.card').id;

    for (let i = 0; i < cardContainer.length; i++) {
        let currentCard = cardContainer[i];
        let bottomSection = currentCard.querySelector('.bottom_section');

        if (cardId !== currentCard.id) {
            bottomSection.style.display = 'none';
            currentCard.style.backgroundColor = ''; 
            currentCard.style.border =  ' 1px solid #C8C8C8'
        } else {
            bottomSection.style.display = (bottomSection.style.display === 'none' || bottomSection.style.display === '') ? 'block' : 'none';
            currentCard.style.backgroundColor = '#FFF9FA';
            currentCard.style.border = '2px solid #FF6B82'
        }
        console.log(currentCard.querySelector('input[type="radio"]'));
        if (bottomSection.style.display == 'block') {
            currentCard.querySelector('input[type="radio"]').checked = true;
        } else {
            currentCard.querySelector('input[type="radio"]').checked = false;
        }
    }
}
