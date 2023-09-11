//display 10x10 table by default (on load)
document.addEventListener('DOMContentLoaded', function() {
  var table = document.getElementById("table");
  table.innerHTML = "";
  for (var i = 1; i <= 10; i++) {
    var row = table.insertRow();
    for (var j = 1; j <= 10; j++) {
      var cell = row.insertCell();
      cell.textContent = i * j;
    }
  }
});
function drawTable() {
    // Get the number of rows and columns from the form
    var numRows = document.getElementById("rows").value;
    var numCols = document.getElementById("cols").value;
    //check input
    if (numRows > 10 || numCols > 10 ) {
      alert("Please enter a number less than or equal to 10");
      return;
    }
    if (numRows < 1 || numCols < 1 ) {
      alert("Please enter a positive number");
      return;
    }
    // Get a reference to the table element
    var table = document.getElementById("table");
  
    // Clear the table
    table.innerHTML = "";
  
    // Draw the table
    for (var i = 1; i <= numRows; i++) {
      var row = table.insertRow();
      for (var j = 1; j <= numCols; j++) {
        var cell = row.insertCell();
        cell.textContent = i * j;
      }
    }
  }
  
  // Call the drawTable function when the form is submitted (when redraw button is pressed)
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from default submition
    drawTable(); // Redraw the table
  });
  
  