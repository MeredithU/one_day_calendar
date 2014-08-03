function layOutDay (events) {

	var maxWidth = 600;
	var conflictingEvents = []; // Declaring an array which will hold all event conflicts


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


	// Cycle through each event
	events.forEach(function(entry, index) {
		var currentEvent = entry;
		var currentEventIndex = index;
		renderEvent(currentEvent, currentEventIndex);
	});


	// This function will map the events onto the calendar
	function renderEvent (currentEvent, currentEventIndex) {
		var calendarGrid = document.getElementById("grid");
		var timeBlockDiv = document.createElement("div");

		var conflictingEventsList = findEventConflicts(events, currentEvent, currentEventIndex);
		var numberOfEventConflicts = conflictingEventsList.length;

		timeBlockDiv.className = "timeBlock";
		timeBlockDiv.style.height = (currentEvent.end - currentEvent.start) + "px";
		timeBlockDiv.style.position = "absolute";
		timeBlockDiv.style.top = (currentEvent.start + 30) + "px";
		timeBlockDiv.style.width = (600/numberOfEventConflicts) + "px";
		timeBlockDiv.style.left = "120" + "px";

		calendarGrid.appendChild(timeBlockDiv);

		// Now that we know which events conflict with each other, update their widths
		if (numberOfEventConflicts > 1) {
			updateWidth(numberOfEventConflicts, currentEventIndex);
		}
	};


	// If there are event conflicts, update the widths accordingly
	function updateWidth (numberOfEventConflicts, currentEventIndex) {
		var parentElement = document.getElementById("grid");
	
			for (var i = currentEventIndex; i > currentEventIndex - numberOfEventConflicts; i--) {
				var eventchildren = parentElement.childNodes;
				eventWidthToChange = eventchildren[i];
				eventWidthToChange.style.width = (maxWidth / numberOfEventConflicts) + "px";
			}
	};


	// Find all events the currentEvent conflicts with 
	function findEventConflicts (allEvents, currentEvent, currentEventIndex) {
		for (var i = 0; i <= currentEventIndex; i++) {
			if (currentEvent.start < allEvents[i].end) {
				conflictingEvents.push(allEvents[i]);
			}		
		}

		var conflictingEventsList = conflictingEvents;

		// Reset the array that holds conflicting events as we loop through each new event
		conflictingEvents = [];

		return conflictingEventsList;
	};

};