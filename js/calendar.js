function layOutDay (events) {
	// Declaring an array which will hold all event conflicts
	var conflictingEvents = [];

	// Sort events by their start time
	events.sort(function (a, b) {
		if (a.start > b.start) {
			return 1;
		}
		else if (a.start < b.start) {
			return -1;
		}
		return 0;
	});

	// Cycled through each event
	events.forEach(function(entry) {
		var currentEvent = entry;
		renderEvent(currentEvent);
	});

	// This function will map the events onto the calendar
	function renderEvent (currentEvent) {
		var calendarGrid = document.getElementById("grid");
		var timeBlockDiv = document.createElement("div");

		timeBlockDiv.className = "timeBlock";
		timeBlockDiv.style.height = (currentEvent.end - currentEvent.start) + "px";
		timeBlockDiv.style.position = "absolute";
		timeBlockDiv.style.top = (currentEvent.start + 30) + "px";

		findEventConflicts(events, currentEvent);

		timeBlockDiv.style.width = "600px"; // dynamic value
		timeBlockDiv.style.left = "120" + "px"; // dynamic value

		calendarGrid.appendChild(timeBlockDiv);
	};


	function findEventConflicts (allEvents, currentEvent) {
		// Find all events the currentEvent conflicts with
		for (var i = 0; i < allEvents.length; i++) {
			/*if (currentEvent.start < allEvents[i].end) {
				conflictingEvents.push(allEvents[i]);
			}*/
			console.log("i:" + i + "allEvents:" + allEvents[i].end + "currentEvent: " + currentEvent.start);
		}
	};

};