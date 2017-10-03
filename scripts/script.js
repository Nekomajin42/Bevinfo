window.addEventListener("DOMContentLoaded", function()
{
	var m = ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"];
	var d = new Date(document.lastModified);
	document.querySelector("footer").innerHTML += d.getFullYear() + ". " + m[d.getMonth()] + " " + d.getDate() + ".";
});