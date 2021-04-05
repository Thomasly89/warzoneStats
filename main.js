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
var input;
$.ajax(settings).done(function (response) {
	console.log(response);
input = select('#warzoneId');
console.log(input.value());
//$.ajax(settings).done(function(data){
	//console.log(data);
//})
});
