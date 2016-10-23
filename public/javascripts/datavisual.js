var words = ["Saab", "Volvo", "BMW", "Updated"]; //will be replaced with values.
// var roots = 
// var syn = 
// var ant = 
// var hist = 

// for(word in words){ //for a word in words
// 	console.log(words[word]);
// }

var middle = (window.innerWidth/2);
var unit = (middle/4); //theyre all this many spaces appart; one unit
var rad = unit/4;
var ymid = (window.innerHeight/4);

var jsonCircles = [ //the box it produces in is 0-200 units.
  { "x_axis": middle, "y_axis": ymid, "radius": rad, "color" : "green" }, //7 circles
  { "x_axis": unit, "y_axis": ymid, "radius": rad, "color" : "purple"},
  { "x_axis": unit*2, "y_axis": ymid, "radius": rad, "color" : "red"}, //this is an array of objects
  { "x_axis": unit*3, "y_axis": ymid, "radius": rad, "color" : "blue" },
  { "x_axis": unit*5, "y_axis": ymid, "radius": rad, "color" : "green" }, //7 circles
  { "x_axis": unit*6, "y_axis": ymid, "radius": rad, "color" : "purple"},
  { "x_axis": unit*7, "y_axis": ymid, "radius": rad, "color" : "red"}];
//var test = d3.select


//breake
// var scrollCircle = d3.select(jsonCircles)
// 						.transition()


//make an svg container
var svgContainer = d3.select("body").append("div")
						.classed("svg-container", true) //classed means css
						.append("svg")
                        .attr("preserveAspectRatio", "xMinYMin meet") //responsive, but tiny circles too.
                        .attr("viewBox", "0 0 600 400")
                        .classed("svg-content-responsive", true);

//draw circles
var circles = svgContainer.selectAll("circle")
                        .data(jsonCircles) //sending json attributes. init d.
                        .enter()
                        .append("circle");


// function name (d) { return d.x_axis; };

//i want it to be set up to middle relative.
var circleAttributes = circles
                        .attr("cx", function (d) { return d.x_axis; })
                        //.attr("cx", name(this))
                        .attr("cy", function (d, i, nodes) { return d.y_axis;})
                        .attr("r", function (d) { return d.radius; })
                        .style("fill", function(d) { return d.color; })
                        //performing transitions
                        .on('click', function(d){
                            console.log(d.x_axis); //gives me the location
                            d.transition()
                                .duration(1500)
                                .delay(1000) //wait a while before you move
                                .attr("cx" , function (d) { return d.x_axis + 30; })
                                .transition()
                                .attr("cy", "130");
                        });
                        // .transition()
                        // .duration(1500)
                        // .delay(1000) //wait a while before you move
                        // .attr("cx" , function (d) { return d.x_axis + 30; })
                        // .transition()
                        // .attr("cy", "130");
                        //.each("end", function() { d3.select(this).attr("fill", "blue"); }); //at end on transition
 
