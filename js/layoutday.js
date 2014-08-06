function layOutDay (events) {

	// Sort events by start time
	events.sort(function (a, b) {
		if (a.start > b.start) {
			return 1;
		}
		else if (a.start < b.start) {
			return -1;
		}
		return 0;
	});

	// Loop through each event to set the width and left position attributes
	events.forEach(function(entry, index) {
		var currentEvent = entry;
		var currentEventIndex = index;

		currentEvent.width;
		currentEvent.column;

		setEventAttributes(events, currentEvent, currentEventIndex);
	});

	// Assign a column number to each event which will be used to determine the left position
	assignColumnNumber(events);

	renderEvents(events);

	// Map events onto the calendar
	function renderEvents (events) {
		
		// Width of div container to display hours of the day
		var leftPadding = 130;

		// Border padding found on each event
		var borderPadding = 5;

		for (var i = 0; i < events.length; i++) {
			findLeftPosition(events, i, leftPadding, borderPadding);

			var calendarGrid = document.getElementById("grid");
			var timeBlockDiv = document.createElement("div");
			var sampleItemSpan = document.createElement("span");
			var sampleLocationSpan = document.createElement("span");

			timeBlockDiv.className = "time-block";
			timeBlockDiv.style.height = (events[i].end - events[i].start) + "px";
			timeBlockDiv.style.position = "absolute";
			timeBlockDiv.style.top = (events[i].start + 30) + "px";
			timeBlockDiv.style.width = (events[i].width - borderPadding) + "px";
			timeBlockDiv.style.left = events[i].left + "px";

			sampleItemSpan.className = "sample-item";
			sampleLocationSpan.className = "sample-location";
			var sampleItemText = document.createTextNode("Sample Item");
			var sampleLocationText = document.createTextNode("Sample Location"); 

			sampleItemSpan.appendChild(sampleItemText);
			sampleLocationSpan.appendChild(sampleLocationText);
			timeBlockDiv.appendChild(sampleItemSpan);
			timeBlockDiv.appendChild(sampleLocationSpan);
			calendarGrid.appendChild(timeBlockDiv);
		}		
	}
}