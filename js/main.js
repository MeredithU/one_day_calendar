// Create calendar layout
function calendarLayoutInit() {
	
	var calendarSection = document.createElement("section");
	calendarSection.id = "calendar";	

	var timeOfDayDiv = document.createElement("div");
	timeOfDayDiv.className = "timeOfDay";

	var unorderedList = document.createElement("ul");

	// Look at creating a function to reduce this code!
	for (var i = 9; i < 22; i++) {
		if (i < 13) {
			var topOfHourList = document.createElement("li");
			topOfHourList.className = "topOfHour";
			var timeSpan = document.createElement("span");
			var hourText = document.createTextNode(i + ":00");
			var spanElement = document.createElement("span");
			spanElement.className = "halfHour";
			var amOrPm = document.createTextNode("AM");
			spanElement.appendChild(amOrPm);
			timeSpan.appendChild(hourText);
			timeSpan.appendChild(spanElement);
			topOfHourList.appendChild(timeSpan);
			unorderedList.appendChild(topOfHourList);

			var halfHourList = document.createElement("li");
			halfHourList.className = "halfHour";
			var timeSpan = document.createElement("span");
			var halfHourText = document.createTextNode(i + ":30");
			timeSpan.appendChild(halfHourText);
			halfHourList.appendChild(timeSpan);
			unorderedList.appendChild(halfHourList);
		}
		else if (i >= 13) {
			var twelveHourClock = i - 12;

			if (twelveHourClock == 9) {
				var topOfHourList = document.createElement("li");
				topOfHourList.className = "topOfHour";
				var timeSpan = document.createElement("span");
				var hourText = document.createTextNode(twelveHourClock + ":00");
				var spanElement = document.createElement("span");
				spanElement.className = "halfHour";
				var amOrPm = document.createTextNode("PM");
				spanElement.appendChild(amOrPm);
				timeSpan.appendChild(hourText);
				timeSpan.appendChild(spanElement);
				topOfHourList.appendChild(timeSpan);
				unorderedList.appendChild(topOfHourList);
			}
			else {
				var topOfHourList = document.createElement("li");
				topOfHourList.className = "topOfHour";
				var timeSpan = document.createElement("span");
				var hourText = document.createTextNode(twelveHourClock + ":00");
				var spanElement = document.createElement("span");
				spanElement.className = "halfHour";
				var amOrPm = document.createTextNode("PM");
				spanElement.appendChild(amOrPm);
				timeSpan.appendChild(hourText);
				timeSpan.appendChild(spanElement);
				topOfHourList.appendChild(timeSpan);
				unorderedList.appendChild(topOfHourList);

				var halfHourList = document.createElement("li");
				halfHourList.className = "halfHour";
				var timeSpan = document.createElement("span");
				var halfHourText = document.createTextNode(twelveHourClock + ":30");
				timeSpan.appendChild(halfHourText);
				halfHourList.appendChild(timeSpan);
				unorderedList.appendChild(halfHourList);
			}
		}
	}

	var calendarGridDiv = document.createElement("div");
	calendarGridDiv.id = "grid";
	calendarGridDiv.className = "container";

	timeOfDayDiv.appendChild(unorderedList);
	calendarSection.appendChild(timeOfDayDiv);
	calendarSection.appendChild(calendarGridDiv);
	document.body.appendChild(calendarSection);
};


