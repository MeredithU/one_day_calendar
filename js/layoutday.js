function layOutDay (events) {

	// Max width of calendar grid
	var maxWidth = 600;

	// Calendar grid padding 
	var leftPadding = 120;

	// Event border padding
	var borderPadding;

	// To hold all event conflicts
	var conflictingEvents = [];

	// An array of arrays to place events in columns to detemine their left position 
	var arrayOfColumns = [];


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


	// Loop through each event to set width and left position properties 
	// and render events onto the calendar
	events.forEach(function(entry, index) {
		var currentEvent = entry;
		var currentEventIndex = index;

		currentEvent.width;
		currentEvent.left;
		currentEvent.column;

		setEventProperties(currentEvent, currentEventIndex);
	});


	function setEventProperties (currentEvent, currentEventIndex) {
		var conflictingEventsList = findEventConflicts(events, currentEventIndex);
		var numberOfEventConflicts = conflictingEventsList.length;

		// If there are event conflicts, find their widths
		if (numberOfEventConflicts > 1) {
			findEventWidth(numberOfEventConflicts, currentEventIndex);
		} else {
			currentEvent.width = maxWidth;
		}

		assignColumnNumber(currentEventIndex);
	};


	// Find all events the currentEvent conflicts with 
	function findEventConflicts (allEvents, currentEventIndex) {
		for (var i = 0; i <= currentEventIndex; i++) {
			if (allEvents[currentEventIndex].start < allEvents[i].end) {
				conflictingEvents.push(allEvents[i]);
			}		
		}

		var conflictingEventsList = conflictingEvents;

		// Reset the array that holds conflicting events as we loop through each new event
		conflictingEvents = [];

		return conflictingEventsList;
	};


	// Find event widths
	function findEventWidth (numberOfEventConflicts, currentEventIndex) {
		for (var i = currentEventIndex; i > currentEventIndex - numberOfEventConflicts; i--) {
			events[i].width = (maxWidth / numberOfEventConflicts);
		}
	};


	function findLeftPosition (currentEventIndex) {
		events[currentEventIndex].left = ((events[currentEventIndex].width * events[currentEventIndex].column) + leftPadding);
	};


	// Determine column number (starting from 0) so conflicting events are side by side
	function assignColumnNumber (currentEventIndex) {
		// Save the first event
		if (currentEventIndex == 0) {
			arrayOfColumns[0] = [];
			arrayOfColumns[0].push(events[0]);
			events[0].column = 0;
		
		} else if (currentEventIndex > 0) {
			
			for (var i = 0; i < arrayOfColumns.length; i++) {
				var columnNumber = arrayOfColumns[i];

				// if the start time of the currentEvent is greater than the end of the last event in that column,
				// push to the bottom of that column array
				if (columnNumber[columnNumber.length - 1].end < events[currentEventIndex].start) {
					arrayOfColumns[i].push(events[currentEventIndex]);
					events[currentEventIndex].column = i;
					break;

				} else if (typeof arrayOfColumns[i + 1] != 'object') {
						arrayOfColumns[i + 1] = [];
						arrayOfColumns[i + 1].push(events[currentEventIndex]);
						events[currentEventIndex].column = i + 1;
						break;
				} 
			}
		}
	};

	console.log(events);
	console.log(events[0]);
	console.log(events[1]);
	console.log(events[2]);
	console.log(events[3]);
	renderEvents(events);

	// Map events onto the calendar
	function renderEvents (events) {
		for (var i = 0; i < events.length; i++) {
			findLeftPosition(i);
			
			var calendarGrid = document.getElementById("grid");
			var timeBlockDiv = document.createElement("div");

			timeBlockDiv.className = "timeBlock";
			timeBlockDiv.style.height = (events[i].end - events[i].start) + "px";
			timeBlockDiv.style.position = "absolute";
			timeBlockDiv.style.top = (events[i].start + 30) + "px";
			timeBlockDiv.style.width = events[i].width + "px";
			timeBlockDiv.style.left = events[i].left + "px";

			calendarGrid.appendChild(timeBlockDiv);
		}
			
	};

};