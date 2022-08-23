function getPerPlayerExpense(expenseId) {
    const perPlayerExpenseField = document.getElementById(expenseId);
    const perPlayerExpense = parseFloat(perPlayerExpenseField.value);
    return perPlayerExpense;
}

/* ================= Player Expenses Calculate ================= */
document.getElementById("btn-calculate").addEventListener("click", function () {
    const playerSelectedNumber =
        document.querySelectorAll("#selection-list li").length;
    const perPlayerExpense = getPerPlayerExpense("per-player-expense");
    const playerExpenses = perPlayerExpense * playerSelectedNumber;

    const playerExpensesElement = document.getElementById("player-expenses");
    playerExpensesElement.innerText = playerExpenses;
});

/* ================= Total Expenses Calculate ================= */
document
    .getElementById("btn-calculate-total")
    .addEventListener("click", function () {
        const managerExpenseField = document.getElementById("manager-expense");
        const managerExpense = parseFloat(managerExpenseField.value);

        const coachExpenseField = document.getElementById("coach-expense");
        const coachExpense = parseFloat(coachExpenseField.value);

        const playerSelectedNumber =
            document.querySelectorAll("#selection-list li").length;
        const perPlayerExpense = getPerPlayerExpense("per-player-expense");
        const playerExpenses = perPlayerExpense * playerSelectedNumber;

        const totalExpenses = playerExpenses + managerExpense + coachExpense;
        const totalExpensesElement = document.getElementById("total-expenses");
        totalExpensesElement.innerText = totalExpenses;
    });
