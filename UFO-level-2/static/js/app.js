// from data.js
var tableData = data;
// console.group(tableData);

//Reference table body
var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    // console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      // console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Reference the button
  var button = d3.select("#filter-btn");
  var form = d3.select("#form");

  // Create event handlers for clicking the button
  button.on("click", runFilter);

  // Create a function to run event on click
  function runFilter() {
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input elements and get the raw HTML node
    var inputFieldDate = d3.select("#datetime");
    var inputFieldCity = d3.select("#city");
    var inputFieldState = d3.select("#state");
    var inputFieldCountry = d3.select("#country");
    var inputFieldShape = d3.select("#shape");
  
    // Get the value properties of each input element
    var inputDate = inputFieldDate.property("value");
    var inputCity = inputFieldCity.property("value");
    var inputState = inputFieldState.property("value");
    var inputCountry = inputFieldCountry.property("value");
    var inputShape = inputFieldShape.property("value");
  
    // Print the value to the console
    console.log(inputDate, inputCity, inputState, inputCountry, inputShape);
  
    // use conditionals to filter through all data input values
    if (inputDate) {
      var filteredData = tableData.filter(sighting => sighting.datetime === inputDate);
    }
  
    else {
      var filteredData = tableData;
    }
  
    if (inputCity) {
      filteredData = filteredData.filter(sighting => sighting.city === inputCity);
    }
  
    if (inputState) {
      filteredData = filteredData.filter(sighting => sighting.state === inputState);
    }
  
    if (inputCountry) {
      filteredData = filteredData.filter(sighting => sighting.country === inputCountry);
    }
  
    if (inputShape) {
      filteredData = filteredData.filter(sighting => sighting.shape === inputShape);
    }
  
    // run table loop again to create filtered table
    filteredData.forEach((ufoSighting) => {
      var row = tbody.append("tr");
      Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }
