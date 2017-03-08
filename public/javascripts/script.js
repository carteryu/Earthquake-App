document.addEventListener("DOMContentLoaded", main);

function main(){
	var submit = document.getElementsByClassName('seemore');
	for (var i = 0; i < submit.length; i++){
		submit[i].addEventListener('click', function(evt){
			var button = this;
			var buttonID = (button.id).slice(-1);
			evt.preventDefault();
			var d = document.getElementById("earthquake" + buttonID);
			var req = new XMLHttpRequest();
			var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";
			req.open("GET",url,true);
			req.addEventListener('load', function(){
				var obj = JSON.parse(req.responseText);
				var place = obj['features'][buttonID]['properties']['place'];
				console.log(place);
				button.style.visibility = "hidden";
				var newDiv = document.createElement('div');
				newDiv.textContent = "Location: " + place;
				d.appendChild(newDiv);
			})
			req.send();

		});
	};
};
