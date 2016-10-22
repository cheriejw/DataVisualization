var words = ["Saab", "Volvo", "BMW"]; //will be replaced with values.
// var roots = 
// var syn = 
// var ant = 
// var hist = 

for(word in words){ //for a word in words
	console.log(words[word]);
}

var jsonCircles = [ //the box it produces in is 0-200 units.
  { "x_axis": 0, "y_axis": 100, "radius": 20, "color" : "green" },
  { "x_axis": 70, "y_axis": 100, "radius": 20, "color" : "purple"},
  { "x_axis": 200, "y_axis": 100, "radius": 20, "color" : "red"}]; //this is an array of objects

//make an svg container
var svgContainer = d3.select("body").append("div")
						.classed("svg-container", true)
						.append("svg")
                        .attr("preserveAspectRatio", "xMinYMin meet") //responsive, but tiny circles too.
                        .attr("viewBox", "0 0 600 400")
                        .classed("svg-content-responsive", true);

//draw circles
var circles = svgContainer.selectAll("circle")
                        .data(jsonCircles) //sending json attributes.
                        .enter()
                        .append("circle");

var circleAttributes = circles
                        .attr("cx", function (d) { return d.x_axis; })
                        .attr("cy", function (d) { return d.y_axis; })
                        .attr("r", function (d) { return d.radius; })
                        .style("fill", function(d) { return d.color; });
