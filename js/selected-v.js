/* -------------player-1 selected------------- */
document.getElementById('btn-select-1').addEventListener('click', function () {
    const player1Element = document.getElementById('player-1-name');
    const player1Name = player1Element.innerText;
    console.log(player1Name)

    const playerSelectedList = document.getElementById('player-selected-list');
    const li = document.createElement('li');
    li.innerText = player1Name;
    playerSelectedList.appendChild(li);
})

/* -------------player-2 selected------------- */
document.getElementById('btn-select-2').addEventListener('click', function () {
    const player2Element = document.getElementById('player-2-name');
    const player2Name = player2Element.innerText;

    const playerSelectedList = document.getElementById('player-selected-list');
    const li = document.createElement('li');
    li.innerText = player2Name;
    playerSelectedList.appendChild(li);
})

/* -------------player-3 selected------------- */
document.getElementById('btn-select-3').addEventListener('click', function () {
    const player3Element = document.getElementById('player-3-name');
    const player3Name = player3Element.innerText;

    const playerSelectedList = document.getElementById('player-selected-list');
    const li = document.createElement('li');
    li.innerText = player3Name;
    playerSelectedList.appendChild(li);
})
