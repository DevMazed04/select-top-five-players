/* =============== player-1 selected =============== */
document.getElementById("btn-select-1").addEventListener("click", function () {
    const player1Element = document.getElementById("player-1-name");
    const player1Name = player1Element.innerText;

    const playerSelectedList = document.getElementById("selection-list");
    const li = document.createElement("li");
    li.innerText = player1Name;
    playerSelectedList.appendChild(li);

    const selectButton1 = document.getElementById("btn-select-1");
    selectButton1.disabled = true;
    selectButton1.style.backgroundColor = "#A2A9AF";

    const liLength = document.querySelectorAll("#selection-list li").length;
    document.getElementById("selected-counter").innerText = liLength;
});

/* =============== player-2 selected =============== */
document.getElementById("btn-select-2").addEventListener("click", function () {
    const player2Element = document.getElementById("player-2-name");
    const player2Name = player2Element.innerText;

    const playerSelectedList = document.getElementById("selection-list");
    const li = document.createElement("li");
    li.innerText = player2Name;
    playerSelectedList.appendChild(li);

    const selectButton2 = document.getElementById("btn-select-2");
    selectButton2.disabled = true;
    selectButton2.style.backgroundColor = "#A2A9AF";

    const liLength = document.querySelectorAll("#selection-list li").length;
    document.getElementById("selected-counter").innerText = liLength;
});

/* =============== player-3 selected =============== */
document.getElementById("btn-select-3").addEventListener("click", function () {
    const player3Element = document.getElementById("player-3-name");
    const player3Name = player3Element.innerText;

    const playerSelectedList = document.getElementById("selection-list");
    const li = document.createElement("li");
    li.innerText = player3Name;
    playerSelectedList.appendChild(li);

    const selectButton3 = document.getElementById("btn-select-3");
    selectButton3.disabled = true;
    selectButton3.style.backgroundColor = "#A2A9AF";

    const liLength = document.querySelectorAll("#selection-list li").length;
    document.getElementById("selected-counter").innerText = liLength;
});

/* =============== player-4 selected =============== */
document.getElementById("btn-select-4").addEventListener("click", function () {
    const player4Element = document.getElementById("player-4-name");
    const player4Name = player4Element.innerText;

    const playerSelectedList = document.getElementById("selection-list");
    const li = document.createElement("li");
    li.innerText = player4Name;
    playerSelectedList.appendChild(li);

    const selectButton4 = document.getElementById("btn-select-4");
    selectButton4.disabled = true;
    selectButton4.style.backgroundColor = "#A2A9AF";

    const liLength = document.querySelectorAll("#selection-list li").length;
    document.getElementById("selected-counter").innerText = liLength;
});

/* =============== player-5 selected =============== */
document.getElementById("btn-select-5").addEventListener("click", function () {
    const player5Element = document.getElementById("player-5-name");
    const player5Name = player5Element.innerText;

    const playerSelectedList = document.getElementById("selection-list");
    const li = document.createElement("li");
    li.innerText = player5Name;
    playerSelectedList.appendChild(li);

    const selectButton5 = document.getElementById("btn-select-5");
    selectButton5.disabled = true;
    selectButton5.style.backgroundColor = "#A2A9AF";

    const liLength = document.querySelectorAll("#selection-list li").length;
    document.getElementById("selected-counter").innerText = liLength;
});

/* =============== player-6 selected =============== */
document.getElementById("btn-select-6").addEventListener("click", function () {
    const player6Element = document.getElementById("player-6-name");
    const player6Name = player6Element.innerText;

    const playerSelectedList = document.getElementById("selection-list");
    const li = document.createElement("li");
    li.innerText = player6Name;
    playerSelectedList.appendChild(li);

    const selectButton6 = document.getElementById("btn-select-6");
    selectButton6.disabled = true;
    selectButton6.style.backgroundColor = "#A2A9AF";

    const liLength = document.querySelectorAll("#selection-list li").length;
    document.getElementById("selected-counter").innerText = liLength;
});
