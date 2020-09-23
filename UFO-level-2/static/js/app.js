// from data.js
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

     // Select the input for different filtering values 
     var inputElement = d3.select("#input");

     // Get the value property of the filtering values 
     var inputValue = inputElement.property("value");
     console.log(inputValue);
 
     // Filter data to match input value 
     var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                     sighting.city === inputValue ||
                                                     sighting.state === inputValue ||
                                                     sighting.country === inputValue ||
                                                     sighting.shape === inputValue);
     console.log(filteredData);
});
