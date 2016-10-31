var header = document.getElementById("header");

header.style = "background:#777; border: 1px solid #eaea10;";

var title = document.createElement("h1");

title.textContent = "Random Tip Generator";

header.appendChild(title);

var description = document.createElement("p");

description.innerHTML = "This is a description";

header.appendChild(description);
// ----------------------------------------------
var quoteArea=document.createElement("div");

quoteArea.setAttribute("id","quoteArea");
    
var dataTips=[{key:"value"},
    {tip:"This is one tip"},
    {tip:"This is another tip"},
    {tip:"3rd tip"},
    {tip:"4th tip"},
    {tip:"5th tip"}];

console.log(dataTips.length);

