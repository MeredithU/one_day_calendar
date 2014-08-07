function layOutDay(events) {

	// Throw an exception if array is empty
	if (events.length === 0) {
		throw "Please enter start and end times.";
	}

	// Sort events by start time
	events.sort(function (a, b) {
		if (a.start > b.start) {
			return 1;
		} else if (a.start < b.start) {
			return -1;
		}
		return 0;
	});

	// Loop through each event to set its width
	events.forEach(function(entry, index) {
		var currentEvent = entry,
				currentEventIndex = index;

		setEventAttributes(events, currentEvent, currentEventIndex);
	});

	// Assign a column number to each event which will be used to determine the left position
	assignColumnNumber(events);

	// Map events onto the calendar
	function renderEvents (events) {
		
		var leftPadding = 130, // Width of div container to display hours of the day
				borderPadding = 5, // Border padding found on each event
				calendarGrid,
				timeBlockDiv,
				sampleItemSpan,
				sampleLocationSpan,
				sampleItemText,
				sampleLocationText;

		for (var i = 0; i < events.length; i++) {
			// Find the left position for each event
			findLeftPosition(events, i, leftPadding);

			calendarGrid = document.getElementById("grid");
			timeBlockDiv = document.createElement("div");
			sampleItemSpan = document.createElement("span");
			sampleLocationSpan = document.createElement("span");

			timeBlockDiv.className = "time-block";
			timeBlockDiv.style.height = (events[i].end - events[i].start) + "px";
			timeBlockDiv.style.position = "absolute";
			timeBlockDiv.style.top = (events[i].start + 30) + "px";
			timeBlockDiv.style.width = (events[i].width - borderPadding) + "px";
			timeBlockDiv.style.left = events[i].left + "px";

			sampleItemSpan.className = "sample-item";
			sampleLocationSpan.className = "sample-location";
			sampleItemText = document.createTextNode("Sample Item");
			sampleLocationText = document.createTextNode("Sample Location"); 

			sampleItemSpan.appendChild(sampleItemText);
			sampleLocationSpan.appendChild(sampleLocationText);
			timeBlockDiv.appendChild(sampleItemSpan);
			timeBlockDiv.appendChild(sampleLocationSpan);
			calendarGrid.appendChild(timeBlockDiv);
		}		
	}

	renderEvents(events);
}