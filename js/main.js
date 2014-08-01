/**************************************************
	Create calendar layout
***************************************************/

function calendarLayoutInit() {
	/* Creating calendar layout */
	var calendarSection = document.createElement("section");
	calendarSection.id = "calendar";	

	var timeOfDayDiv = document.createElement("div");
	timeOfDayDiv.className = "timeOfDay";

	var unorderedList = document.createElement("ul");

	/**************************************************
		Look at creating a function to reduce this code!
	**************************************************/
	for (var i = 9; i < 22; i++) {
		if (i < 13) {
			var topOfHourList = document.createElement("li");
			topOfHourList.className = "topOfHour";
			var pElement = document.createElement("p");
			var hourText = document.createTextNode(i + ":00");
			var spanElement = document.createElement("span");
			spanElement.className = "halfHour";
			var amOrPm = document.createTextNode("AM");
			spanElement.appendChild(amOrPm);
			pElement.appendChild(hourText);
			pElement.appendChild(spanElement);
			topOfHourList.appendChild(pElement);
			unorderedList.appendChild(topOfHourList);

			var halfHourList = document.createElement("li");
			halfHourList.className = "halfHour";
			var pElement = document.createElement("p");
			var halfHourText = document.createTextNode(i + ":30");
			pElement.appendChild(halfHourText);
			halfHourList.appendChild(pElement);
			unorderedList.appendChild(halfHourList);
		}
		else if (i >= 13) {
			var twelveHourClock = i - 12;

			if (twelveHourClock == 9) {
				var topOfHourList = document.createElement("li");
				topOfHourList.className = "topOfHour";
				var pElement = document.createElement("p");
				var hourText = document.createTextNode(twelveHourClock + ":00");
				var spanElement = document.createElement("span");
				spanElement.className = "halfHour";
				var amOrPm = document.createTextNode("PM");
				spanElement.appendChild(amOrPm);
				pElement.appendChild(hourText);
				pElement.appendChild(spanElement);
				topOfHourList.appendChild(pElement);
				unorderedList.appendChild(topOfHourList);
			}
			else {
				var topOfHourList = document.createElement("li");
				topOfHourList.className = "topOfHour";
				var pElement = document.createElement("p");
				var hourText = document.createTextNode(twelveHourClock + ":00");
				var spanElement = document.createElement("span");
				spanElement.className = "halfHour";
				var amOrPm = document.createTextNode("PM");
				spanElement.appendChild(amOrPm);
				pElement.appendChild(hourText);
				pElement.appendChild(spanElement);
				topOfHourList.appendChild(pElement);
				unorderedList.appendChild(topOfHourList);

				var halfHourList = document.createElement("li");
				halfHourList.className = "halfHour";
				var pElement = document.createElement("p");
				var halfHourText = document.createTextNode(twelveHourClock + ":30");
				pElement.appendChild(halfHourText);
				halfHourList.appendChild(pElement);
				unorderedList.appendChild(halfHourList);
			}
		}
	}

	var calendarGridDiv = document.createElement("div");
	calendarGridDiv.className = "container";

	timeOfDayDiv.appendChild(unorderedList);
	calendarSection.appendChild(timeOfDayDiv);
	calendarSection.appendChild(calendarGridDiv);
	document.body.appendChild(calendarSection);
};


