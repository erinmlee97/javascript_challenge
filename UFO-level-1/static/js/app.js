// From data.js
var tableData = data;
console.group(tableData);


//Reference table body
var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Create an event for button
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");

    // Select the input date
    var inputElement = d3.select("#datetime");

    // Get the value property of the input date, state, shape 
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Filter data to match input value 
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);


    filteredData.forEach(function(selections) {
    console.log(selections);

    // Append rows for each row in data
    var row = tbody.append("tr");

    // Console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});
