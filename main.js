var link = "https://call-of-duty-modern-warfare.p.rapidapi.com/";
var gamemode;
var userID;
var wzplatform

function setup(){
	var button = select("#submit");
	button.mousePressed(getInfo);
	console.log(link);
}

const settings = {
	"async": true,
	"crossDomain": true,
	//"url": "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/"+ warzoneBrukernavn + "/" + spillPlatform,

	"url": "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/thmsly%232117/battle",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2748402081msh01214fcbf7b5444p18591ejsnc6dcacba51ce",
		"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com"
	}
};

function getSelectedValue(){
	var e = document.getElementById("platform");
	var strUser = e.options[e.selectedIndex].value;

}

//var input = select("#warzoneId");
function getInfo(){
	$.ajax(settings).done(function (response) {
		console.log(response);
		//console.log(getSelectedValue(strUser));
		console.log(input.value());
		//$.ajax(settings).done(function(data){
		//console.log(data);
		//})
});
}
