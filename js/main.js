// The calendar will be rendered onto the page once it is loaded
function calendarLayoutInit() {

	var calendarSection = document.createElement("section");
	calendarSection.id = "calendar";	

	var timeOfDayDiv = document.createElement("div");
	timeOfDayDiv.className = "time-of-day";

	var timeOfDayUl = document.createElement("ul");

	// Loop from 9 through 22 to output a 12 hour clock
	for (var i = 9; i < 22; i++) {
		if (i < 13) {
			topOfHour(i);
			halfHour (i);
		}
		else if (i >= 13) {
			var twelveHourClock = i - 12;

			if (twelveHourClock == 9) {
				topOfHour(i);
			}
			else {
				topOfHour(i);
				halfHour(i);
			}
		}
	}

	// Display a 12 hour clock
	function topOfHour (hourOfDay) {
		var topOfHourList = document.createElement("li");
		topOfHourList.className = "top-of-hour";

		var timeSpan = document.createElement("span");

		if (hourOfDay >= 13) {
			var twelveHourClock = i - 12;
			var hourText = document.createTextNode(twelveHourClock + ":00");
		} else {
			var hourText = document.createTextNode(hourOfDay + ":00");
		}

		var spanElement = document.createElement("span");
		spanElement.className = "half-hour";
		
		var amOrPm = amOrPmDesignator(hourOfDay);

		spanElement.appendChild(amOrPm);
		timeSpan.appendChild(hourText);
		timeSpan.appendChild(spanElement);
		topOfHourList.appendChild(timeSpan);
		timeOfDayUl.appendChild(topOfHourList);
	}

	// Display every half hour
	function halfHour (hourOfDay) {
		var halfHourList = document.createElement("li");
		halfHourList.className = "half-hour";

		var timeSpan = document.createElement("span");

		if (hourOfDay >= 13) {
			var twelveHourClock = i - 12;
			var halfHourText = document.createTextNode(twelveHourClock + ":30");
		} else {
			var halfHourText = document.createTextNode(hourOfDay + ":30");
		}

		timeSpan.appendChild(halfHourText);
		halfHourList.appendChild(timeSpan);
		timeOfDayUl.appendChild(halfHourList);
	}

	// Determine whether it is AM or PM
	function amOrPmDesignator (hourOfDay) {
		if (hourOfDay < 12) {
			var amOrPm = document.createTextNode("AM");
			return amOrPm;
		} else {
			var amOrPm = document.createTextNode("PM");
			return amOrPm;
		}
	}

	var calendarGridDiv = document.createElement("div");
	calendarGridDiv.id = "grid";
	calendarGridDiv.className = "container";

	timeOfDayDiv.appendChild(timeOfDayUl);
	calendarSection.appendChild(timeOfDayDiv);
	calendarSection.appendChild(calendarGridDiv);
	document.body.appendChild(calendarSection);
}


