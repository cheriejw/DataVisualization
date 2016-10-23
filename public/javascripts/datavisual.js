//var words = ["Saab", "Volvo", "BMW", "Updated"]; //will be replaced with values.
// var roots = 
var syn = [
      "search",
      "attempt",
      "final",
      "evaluation",
      "analysis",
      "standard",
      "trial",
      "experiment",
      "inquiry",
      "investigation",
      "assessment",
      "approval",
      "inspection",
      "check",
      "essay",
      "lick",
      "elimination",
      "go",
      "probation",
      "questionnaire",
      "shibboleth",
      "inquest",
      "corroboration",
      "criterion",
      "yardstick",
      "confirmation",
      "exam",
      "fling",
      "scrutiny",
      "preliminary",
      "probing",
      "substantiation",
      "catechism",
      "ordeal",
      "try",
      "tryout",
      "oral",
      "touchstone",
      "proof",
      "dry run",
      "trial and error",
      "trial run",
      "countdown",
      "comp",
      "verification",
      "blue book",
      "pop quiz"
    ]; //syn.push ("word");
// var ant = 
// var hist = 

const colors = ["gold", "yellow", "greenyellow", "yellowgreen", "mediumseagreen", "lightseagreen",
                "mediumturquoise", "turquoise", "deepskyblue", "mediumslateblue", "mediumpurple", "mediumvioletred", 
                "red", "orangered", "salmon", "tomato", "orange"];

var jsonCircles = []; //7 circles

var len = colors.length;

// for(word in words){ //for a word in words
// 	console.log(words[word]);
// }

var middle = (window.innerWidth/2);
var unit = (middle/4); //theyre all this many spaces appart; one unit
var rad = unit/3;
var ymid = (window.innerHeight/3);
var syndec = middle + unit;
var yunit = ymid/4;

for(syno in syn){
    syndec = syndec - unit;
    jsonCircles.push({"x_axis": syndec, "y_axis": ymid, "radius": rad, "color" : colors[syno%len], "word" : syn[syno]});
}


// function shiftx (d){
//     d.x_axis = d.x_axis + unit;
//     console.log(d.x_axis);
//     return d.x_axis;
// }


// var jsonCircles = [ //the box it produces in is 0-200 units.
//   { "x_axis": middle, "y_axis": ymid, "radius": rad, "color" : "yellow" }, //7 circles
//   { "x_axis": unit, "y_axis": ymid, "radius": rad, "color" : "purple"},
//   { "x_axis": unit*2, "y_axis": ymid, "radius": rad, "color" : "red"}, //this is an array of objects
//   { "x_axis": unit*3, "y_axis": ymid, "radius": rad, "color" : "blue" },
//   { "x_axis": unit*5, "y_axis": ymid, "radius": rad, "color" : "green" }, //7 circles
//   { "x_axis": unit*6, "y_axis": ymid, "radius": rad, "color" : "purple"},
//   { "x_axis": unit*7, "y_axis": ymid, "radius": rad, "color" : "#000000"}];
//var test = d3.select


//breake
// var scrollCircle = d3.select(jsonCircles)
// 						.transition()

//console.log(d3.select("body").append("svg").attr("width",200).attr("height",200).selectAll("text").data(jsonCircles).enter().append("text"));

//make an svg container
var svgContainer = d3.select("body").append("div")
						//.classed("svg-container", true) //classed means css
						.append("svg")
                        .attr("preserveAspectRatio", "xMinYMin meet") //responsive, but tiny circles too.
                        .attr("viewBox", "0 0 " + window.innerWidth + " " + window.innerHeight)
                        //.classed("svg-content-responsive", true);

var node = svgContainer.selectAll(".node")
  .data(jsonCircles)
  .enter().append("g")
  .attr("class", "node")
  .attr("transform", function(d) { return "translate (" + d.x + "," + d.y + ")";})
  .on('click', function(d){
                            var dom_el = document.querySelector('[ng-controller="UIController"]');
                            var ng_el = angular.element(dom_el);
                            var ng_el_scope = ng_el.scope();
                            ng_el_scope.requestWord(d.word);
                            ng_el_scope.display(d.word);
                            //console.log(d.word); //gives me the location
                            var tem = d.x_axis;
                            // console.log(x);
                            d3.selectAll("text", "circle").transition() //FUCK YEAH!
                                .duration(1500)
                                .delay(100) //wait a while before you move
                                // .attr("cx", function (d) { var x = d.x_axis; d.x_axis = d.x_axis + (x - middle); return d.x_axis; }) //this expands
                                .attr("x", function (d) { d.x_axis = (d.x_axis - (tem - middle)); return d.x_axis; });
                                // .attr("cx", shiftx(d))
                                //.transition()
                                //.attr("cy", function (d) { return d.y_axis + unit; })
                                //console.log(d.x_axis);
                            d3.selectAll("circle").transition()
                                .duration(1500)
                                .delay(100)
                                .attr("cx", function (d) { d.x_axis = d.x_axis - (tem - middle); return d.x_axis; });
                        });
node.append("text")
                  .attr("x", function (d) {return d.x_axis;})
                  .attr("y", function (d) {return d.y_axis + yunit;})
                  .text( function(d) { return d.word; })
                  //.text("test")
                  //console.log(this.text)
                  .attr("font-family", "sans-serif")
                  .attr("font-size", "30px")
                  .attr("fill", "white");


node.append("circle")
.attr("cx", function (d) { return d.x_axis; })
                        .attr("x", function (d) { return d.x_axis;}) 
                        .attr("cy", function (d) { return d.y_axis;})
                        .attr("r", function (d) { return d.radius; })
                        //.attr("w", function (d) { return d.word; })
                        //.text(function(d) { return d.word; })
                        // .attr("font-family", "sans-serif")
                        // .attr("font-size", "20px")
                        .style("fill", function(d) { return d.color; }); //a style to fill
                        //performing transitions
                        // .on('click', function(d){
                        //     //console.log(d.word); //gives me the location
                        //     var x = d.x_axis;
                        //     console.log(x);
                        //     d3.selectAll("circle").transition() //FUCK YEAH!
                        //         .duration(1500)
                        //         .delay(100) //wait a while before you move
                        //         // .attr("cx", function (d) { var x = d.x_axis; d.x_axis = d.x_axis + (x - middle); return d.x_axis; }) //this expands
                        //         .attr("cx", function (d) { d.x_axis = d.x_axis - (x - middle); return d.x_axis; })
                        //         // .attr("cx", shiftx(d))
                        //         //.transition()
                        //         //.attr("cy", function (d) { return d.y_axis + unit; })
                        //         //console.log(d.x_axis);
                        // });

//draw circles
// var circles = svgContainer.selectAll("circle")
//                         .data(jsonCircles) //sending json attributes. init d.
//                         .enter()
//                         .append("circle");
//                         //.append("word");

//var words = 


// function name (d) { return d.x_axis; };

//i want it to be set up to middle relative.
// var circleAttributes = circles
//                         .attr("cx", function (d) { return d.x_axis; })
//                         //.attr("cx", xaxis(d)) ; 
//                         .attr("cy", function (d, i, nodes) { return d.y_axis;})
//                         .attr("r", function (d) { return d.radius; })
//                         .attr("w", function (d) { return d.word; })
//                         .text(function(d) { return d.word; })
//                         // .attr("font-family", "sans-serif")
//                         // .attr("font-size", "20px")
//                         .style("fill", function(d) { return d.color; }) //a style to fill
//                         //performing transitions
//                         .on('click', function(d){
//                             console.log(d.word); //gives me the location
//                             var x = d.x_axis;
//                             console.log(x);
//                             d3.selectAll("circle").transition() //FUCK YEAH!
//                                 .duration(1500)
//                                 .delay(100) //wait a while before you move
//                                 // .attr("cx", function (d) { var x = d.x_axis; d.x_axis = d.x_axis + (x - middle); return d.x_axis; }) //this expands
//                                 .attr("cx", function (d) { d.x_axis = d.x_axis - (x - middle); return d.x_axis; })
//                                 // .attr("cx", shiftx(d))
//                                 //.transition()
//                                 //.attr("cy", function (d) { return d.y_axis + unit; })
//                                 //console.log(d.x_axis);
//                         });
                        // .transition()
                        // .duration(1500)
                        // .delay(1000) //wait a while before you move
                        // .attr("cx" , function (d) { return d.x_axis + 30; })
                        // .transition()
                        // .attr("cy", "130");
                        //.each("end", function() { d3.select(this).attr("fill", "blue"); }); //at end on transition
 
//draw all data: in frame and out of frame
//add to svgcontainer.
// var texts = svgContainer.selectAll("texts")
//                         .data(jsonCircles)
//                         .enter()
//                         .append("texts");

// var textLabels = texts
//                   .attr("x", 40)
//                   .attr("y", 60)
//                   .text( function(d) { return ((x + y) + ""); })
//                   //.text("test")
//                   //console.log(this.text)
//                   .attr("font-family", "sans-serif")
//                   .attr("font-size", "40px")
//                   .attr("fill", "red");
