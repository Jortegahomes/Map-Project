var map = L.map('mymap').setView([36.77, -119.41], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: "pk.eyJ1Ijoiam9ydGVnYWhvbWVzIiwiYSI6ImNqeWtsbXIwODBmcmczbW9iYTcycmUycXIifQ.YQcwA678CCL-sQwDDMh49g"
}).addTo(map);

//create the main funciton **note there are three funcitons in this mega function**
var bubbles = ("");
function fetchData(){
  fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson") //link used to "fetch the data"
  .then(function(response){ //tcreate a funciton to remove the data, snapshot it and stored in "response"
    return response.json(); // we tell the computer that this data is called .json
   })
   .then(function(data){ //creates new funciton to console log the data
     //console.log(data);
                  // NOTE:  this is just for a one time use!!!! DON'T USE EVER!!!!!! ******var marker = ////L.marker([data.features[0].geometry.coordinates[1], data.features[0].geometry.coordinates[0]]).addTo(map);
                        // NOTE: THIS IS FOR ONE TIME USE ONLY marker.bindPopup("Hello World! ");// used to create one time popup for testing//
     //do something with data
             //we are creating a function to loop the data we chose.

      for(i=0; i<data.features.length; i++){ //setting the parameters for the loop
     bubbles = L.marker([data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0]]).addTo(map); // the loop will be for creating markers or anything else we need. //
        //create the fx needed to make multiple markers with required data.
        bubbles.bindPopup("<strong>Magnitude:</strong> " + data.features[i].properties.mag + "<br /><strong>Location:</strong> " + data.features[i].properties.place + "<br /><strong>Alert:</strong> " + data.features[i].properties.alert).addTo(map);

       }
 });
 }
 fetchData(); //RUN THAT FUNCTION!!!!!

 // NOTE: NEW FUNC: TIME TO CREATE THAT BUTTON WITH EVENT LISTENER AND AN IF ELSE STATEMENT.
