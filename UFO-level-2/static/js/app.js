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


//Build a filter object 
//Loop thru the objects to get the key to match that key with the UI. 
//make new objects to filter then loop thru the IDs to S



function handleChange() {
    var inputDate = d3.select("#datetime").property("value"); 
    
    var filterTable = tableData;

    if (inputDate) {
        filterTable = filterTable.filter(row => row[key] === inputDate)
    }

Object.entries.forEach([key,value])=> {
    filterTable
}
    newTable(filterTable);

}

d3.selectAll("#filter-btn").on("click", handleChange);

newTable(tableData);