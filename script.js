let clickedCard = null;
let preventClick = false;
let comboFind = 0;

function onCardClicked(event) {
    const target = event.currentTarget;

    if (
        preventClick ||
        target === clickedCard
        || target.className.includes('done')) {
        return;
    }

    //console.log(target.className);
    target.className = target.className
        .replace('color-hidden', '')
        .trim();
    target.className += ' done '; // that means that when we have already clicked the card we can no longer clicked on it again

    //console.log(target.getAttribute('data-color')); // better to have data-atribute in DOM, bcs if we ever want to change the color...

    if (!clickedCard) {
        // if we haven't clicked a card, keep track of the card, display it's color
        clickedCard = target;
    } else if (clickedCard) {
        // if we have already clicked a card, check if the new card matches the old card color

if (clickedCard.getAttribute('data-color')
    !== target.getAttribute('data-color')) {
    //console.log('cards ARE equal');
    //console.log('cards NOT equal');
    preventClick = true;
    setTimeout(() => {
        //console.log('we are here');
        clickedCard.className =
        clickedCard.className.replace(' done ', '').trim() + 'color-hidden';
        target.className =
        target.className.replace(' done ', '').trim() + 'color-hidden';
        clickedCard = null;
        preventClick = false;
    }, 500);
} else {
    comboFind++;
    clickedCard = null;
    if (comboFind === 8) {
        alert('YOU WIN');
    }

}

    }


}