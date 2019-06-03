
// LOOP & ARRAY 

var food, text, length, i;
var art, text, length, i;

food = ["Eat Beignets", "Try Dat Dog", "Devour District Donuts"];
art = ["See Becky Fos Artistry", "Explore Julia Street", "Stroll Down Royal Street"]
length = food.length;
length = art.length
text = "";
for (i = 0; i < length; i++) {
    text += "<br>" + food[i] + "<br>";
    text += "<br>" + art[i] + "<br>";
}

text += "";
document.getElementById("list").innerHTML = text;