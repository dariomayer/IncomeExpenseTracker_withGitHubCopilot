// on window load run this function
window.onload = function () {
  function getIncomeValues() {
    var months = ["january", "february", "march", "april"];
    var incomes = [];

    for (var i = 0; i < months.length; i++) {
      var income = document.getElementById(months[i] + "Income").value || 2000;
      incomes.push(income);
    }

    return incomes;
  }

  function getExpenseValues() {
    var months = ["january", "february", "march", "april"];
    var expenses = [];

    for (var i = 0; i < months.length; i++) {
      var expense =
        document.getElementById(months[i] + "Expenses").value || 1000;
      expenses.push(expense);
    }

    return expenses;
  }

  //get context of canvas for id myChart
  var ctx = document.getElementById("myChart").getContext("2d");
  //create new chart
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April"],
      //create datasets
      datasets: [
        {
          label: "Income",
          //create data for the datasets
          data: getIncomeValues(),
          //create background color for the datasets
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          //create border color for the datasets
          //create border width for the datasets
          borderWidth: 1,
        },
        {
          label: "Expense",
          //create data for the datasets
          data: getExpenseValues(),
          //create background color for the datasets
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
          //create border color for the datasets
          //create border width for the datasets
          borderWidth: 1,
        },
      ],
    },
  });
  //get element for id chart-tab
  var chartTab = document.getElementById("chart-tab");
  //add listener for click
  chartTab.addEventListener("click", function () {
    myChart.data.datasets[0].data = getIncomeValues();
    myChart.data.datasets[1].data = getExpenseValues();
    myChart.update();
  });
};
//green rgba(75, 192, 192, 0.2)
//red rgba(255, 99, 132, 0.2)
