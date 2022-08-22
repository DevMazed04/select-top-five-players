/* ================= Per Player Expense Calculate ================= */
document.getElementById("btn-calculate").addEventListener("click", function () {
    const perPlayerExpenseField = document.getElementById("per-player-expense");
    const perPlayerExpense = parseFloat(perPlayerExpenseField.value);
    console.log("perPlayerExpense:", perPlayerExpense);

    const playerExpensesElement = document.getElementById("player-expenses");
    const playerExpenses = parseFloat(playerExpensesElement.innerText);
    console.log("playerExpenses:", playerExpenses);
    playerExpensesElement.innerText = perPlayerExpense * 5;
});



/* ================= Total Expense Calculate ================= */
document
    .getElementById("btn-calculate-total")
    .addEventListener("click", function () {
        const managerExpenseField = document.getElementById("manager-expense");
        const managerExpense = parseFloat(managerExpenseField.value);
        console.log("managerExpense:", managerExpense);

        const coachExpenseField = document.getElementById('coach-expense');
        const coachExpense = parseFloat(coachExpenseField.value);
        console.log('coachExpense:', coachExpense);

        const playerExpenses = parseFloat(document.getElementById('per-player-expense').value) * 5;

        const totalExpense = managerExpense + coachExpense + playerExpenses;
        console.log('totalExpense:', totalExpense);

        const totalExpenseElement = document.getElementById('total-expense');
        totalExpenseElement.innerText = totalExpense;
    });
