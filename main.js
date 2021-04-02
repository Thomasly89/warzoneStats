const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/"+ warzoneBrukernavn + "/" + spillPlatform
,
	//"url": "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/Amartin743/psn
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2748402081msh01214fcbf7b5444p18591ejsnc6dcacba51ce",
		"x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
