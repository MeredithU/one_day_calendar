// The calendar grid will be rendered onto the page once it is loaded
function calendarLayoutInit() {

	var calendarSection,
			timeOfDayDiv,
			timeOfDayUl,
			twelveHourClock,
			calendarGridDiv;

	calendarSection = document.createElement("section");
	calendarSection.id = "calendar";	

	timeOfDayDiv = document.createElement("div");
	timeOfDayDiv.className = "time-of-day";

	timeOfDayUl = document.createElement("ul");

	// Determine whether it is AM or PM
	function amOrPmDesignator (hourOfDay) {
		var amOrPm = (hourOfDay < 12) ? "AM" : "PM";
		return document.createTextNode(amOrPm);
	}

	// Display a 12 hour clock
	function topOfHour (hourOfDay) {
		var topOfHourList,
				timeSpan,
				hourText,
				spanElement,
				amOrPm;

		topOfHourList = document.createElement("li");
		topOfHourList.className = "top-of-hour";

		timeSpan = document.createElement("span");

		if (hourOfDay >= 13) {
			hourText = document.createTextNode(twelveHourClock + ":00");
		} else {
			hourText = document.createTextNode(hourOfDay + ":00");
		}

		spanElement = document.createElement("span");
		spanElement.className = "half-hour";
		
		amOrPm = amOrPmDesignator(hourOfDay);

		spanElement.appendChild(amOrPm);
		timeSpan.appendChild(hourText);
		timeSpan.appendChild(spanElement);
		topOfHourList.appendChild(timeSpan);
		timeOfDayUl.appendChild(topOfHourList);
	}

	// Display every half hour
	function halfHour (hourOfDay) {
		var halfHourList,
				timeSpan,
				halfHourText;

		halfHourList = document.createElement("li");
		halfHourList.className = "half-hour";

		timeSpan = document.createElement("span");

		if (hourOfDay >= 13) {
			halfHourText = document.createTextNode(twelveHourClock + ":30");
		} else {
			halfHourText = document.createTextNode(hourOfDay + ":30");
		}

		timeSpan.appendChild(halfHourText);
		halfHourList.appendChild(timeSpan);
		timeOfDayUl.appendChild(halfHourList);
	}

	// Loop from 9 through 22 to output a 12 hour clock
	for (var i = 9; i < 22; i++) {
		if (i < 13) {
			topOfHour(i);
			halfHour (i);
		}
		else if (i >= 13) {
			twelveHourClock = i - 12;

			if (twelveHourClock === 9) {
				topOfHour(i);
			}
			else {
				topOfHour(i);
				halfHour(i);
			}
		}
	}

	calendarGridDiv = document.createElement("div");
	calendarGridDiv.id = "grid";
	calendarGridDiv.className = "container";

	timeOfDayDiv.appendChild(timeOfDayUl);
	calendarSection.appendChild(timeOfDayDiv);
	calendarSection.appendChild(calendarGridDiv);
	document.body.appendChild(calendarSection);
}

