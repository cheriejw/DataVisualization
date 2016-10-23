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
//  console.log(words[word]);
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



var node = svg.selectAll(".node")
    .data(jsonCircles)
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("circle")
      
      .attr("r", function(d) { return d.radius; })
      .style("fill", function(d) { return color(d.package); });

  node.append("text")
      .selectAll("tspan")
      .data(function(d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
      .enter().append("tspan")
        .attr("x", function (d) { return d.x_axis;}) 
        .attr("y", function (d) { return d.y_axis;})
        .text(function(d) { return d; });

  node.append("title")
      .text(function(d) { return d.id + "\n" + format(d.value); });