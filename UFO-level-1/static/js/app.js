// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// YOUR CODE HERE!
function newTable(data) {

    tbody.html("")

    data.forEach(row => {

        var newRow = tbody.append ("tr");

        Object.values(row).forEach(inside => {
            var newCell = newRow.append("td");
            newCell.text(inside);
        });
    });
}

function handleChange() {
    var inputDate = d3.select("#datetime").property("value"); 

    var filterTable = tableData;

    if (inputDate) {
        filterTable = filterTable.filter(row => row.datetime === inputDate)
    }


    newTable(filterTable);

}

d3.selectAll("#filter-btn").on("click", handleChange);

newTable(tableData);
S
