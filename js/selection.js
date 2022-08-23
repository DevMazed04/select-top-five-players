function getPlayerNameById(playerId) {
    const playerNameElement = document.getElementById(playerId);
    const playerName = playerNameElement.innerText;
    return playerName;
}

function selectButtonDisable(buttonId) {
    const selectButton = document.getElementById(buttonId);
    selectButton.disabled = true;
    selectButton.style.backgroundColor = "#A2A9AF";
}

function showAlertForPlayerList(playerListLength, li) {
    alert("You can not add more than Five players !");
    document.getElementById("selected-counter").innerText = playerListLength - 1;
    document.getElementById("selection-list").removeChild(li);
}


/* =============== player-1 selected =============== */
document.getElementById("btn-select-1").addEventListener("click", function () {
    const player1Name = getPlayerNameById("player-1-name");

    const playerSelectedList = document.getElementById("selection-list");
    const li = document.createElement("li");
    li.innerText = player1Name;
    playerSelectedList.appendChild(li);

    const playerListLength =
        document.querySelectorAll("#selection-list li").length;
    document.getElementById("selected-counter").innerText = playerListLength;

    if (playerListLength > 5) {
        showAlertForPlayerList(playerListLength, li);
        return;
    }
    selectButtonDisable("btn-select-1");
});


/* =============== player-2 selected =============== */
document.getElementById("btn-select-2").addEventListener("click", function () {
    const player2Name = getPlayerNameById("player-2-name");

    const playerSelectedList = document.getElementById("selection-list");
    const li = document.createElement("li");
    li.innerText = player2Name;
    playerSelectedList.appendChild(li);

    const playerListLength =
        document.querySelectorAll("#selection-list li").length;
    document.getElementById("selected-counter").innerText = playerListLength;

    if (playerListLength > 5) {
        showAlertForPlayerList(playerListLength, li);
        return;
    }
    selectButtonDisable("btn-select-2");
});


/* =============== player-3 selected =============== */
document.getElementById("btn-select-3").addEventListener("click", function () {
    const player3Name = getPlayerNameById("player-3-name");

    const playerSelectedList = document.getElementById("selection-list");
    const li = document.createElement("li");
    li.innerText = player3Name;
    playerSelectedList.appendChild(li);

    const playerListLength =
        document.querySelectorAll("#selection-list li").length;
    document.getElementById("selected-counter").innerText = playerListLength;

    if (playerListLength > 5) {
        showAlertForPlayerList(playerListLength, li);
        return;
    }
    selectButtonDisable("btn-select-3");
});


/* =============== player-4 selected =============== */
document.getElementById("btn-select-4").addEventListener("click", function () {
    const player4Name = getPlayerNameById("player-4-name");

    const playerSelectedList = document.getElementById("selection-list");
    const li = document.createElement("li");
    li.innerText = player4Name;
    playerSelectedList.appendChild(li);

    const playerListLength =
        document.querySelectorAll("#selection-list li").length;
    document.getElementById("selected-counter").innerText = playerListLength;

    if (playerListLength > 5) {
        showAlertForPlayerList(playerListLength, li);
        return;
    }
    selectButtonDisable("btn-select-4");
});


/* =============== player-5 selected =============== */
document.getElementById("btn-select-5").addEventListener("click", function () {
    const player5Name = getPlayerNameById("player-5-name");

    const playerSelectedList = document.getElementById("selection-list");
    const li = document.createElement("li");
    li.innerText = player5Name;
    playerSelectedList.appendChild(li);

    const playerListLength =
        document.querySelectorAll("#selection-list li").length;
    document.getElementById("selected-counter").innerText = playerListLength;

    if (playerListLength > 5) {
        showAlertForPlayerList(playerListLength, li);
        return;
    }
    selectButtonDisable("btn-select-5");
});


/* =============== player-6 selected =============== */
document.getElementById("btn-select-6").addEventListener("click", function () {
    const player6Name = getPlayerNameById("player-6-name");

    const playerSelectedList = document.getElementById("selection-list");
    const li = document.createElement("li");
    li.innerText = player6Name;
    playerSelectedList.appendChild(li);

    const playerListLength =
        document.querySelectorAll("#selection-list li").length;
    document.getElementById("selected-counter").innerText = playerListLength;

    if (playerListLength > 5) {
        showAlertForPlayerList(playerListLength, li);
        return;
    }
    selectButtonDisable("btn-select-6");
});
