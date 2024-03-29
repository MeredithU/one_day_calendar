// Call a function to return the array of colliding events and calculate the number of collisions
// If events collide, find their widths else set to default width
function setEventAttributes (events, currentEvent, currentEventIndex) {

	var maxWidth = 600, // Max width of calendar
			listOfCollidingEvents = findCollidingEvents(events, currentEventIndex),
			numberOfCollidingEvents = listOfCollidingEvents.length;

	if (numberOfCollidingEvents > 1) {
		findEventWidth(events, numberOfCollidingEvents, currentEventIndex, maxWidth);
	} else {
		currentEvent.width = maxWidth;
	}
}

// Loop through the events array and return an array of colliding events with the current event
function findCollidingEvents (events, currentEventIndex) {
	
	// Will contain colliding events
	var collidingEvents = [],
			listOfCollidingEvents = collidingEvents;

	for (var i = 0; i <= currentEventIndex; i++) {
		if (events[currentEventIndex].start < events[i].end) {
			collidingEvents.push(events[i]);
		}		
	}
	return listOfCollidingEvents;
}

// Find the widths of the colliding events determined by the number of collisions
function findEventWidth (events, numberOfCollidingEvents, currentEventIndex, maxWidth) {
	var currentWidth;

	for (var i = currentEventIndex; i > currentEventIndex - numberOfCollidingEvents; i--) {
		currentWidth = events[i].width;
		events[i].width = (maxWidth / numberOfCollidingEvents);

		if (events[i].width > currentWidth) {
			events[i].width = currentWidth;
		}
	}
	return events;
}

// Find the left position value by mutiplying the column of each event with the event's width
function findLeftPosition (events, currentIndex, leftPadding) {
	events[currentIndex].left = ((events[currentIndex].width * events[currentIndex].column) + leftPadding);
	return events[currentIndex].left;
}

// Determine column number (starts at 0) so colliding events are displayed side by side
function assignColumnNumber (events) {

	// As events collide with one another, need to display them side by side
	// This array will hold nested arrays, each representing columns which will
	// determine the event's left position
	var eventColumns = [],
			columnNumber;

	for (var i = 0; i < events.length; i++) {

		// If this is the first event of the events array, create a nested array to store the first object
		if (i === 0) {
			eventColumns[0] = [];
			eventColumns[0].push(events[0]);
			events[0].column = 0;

			// If your events array index is greater than 0, then loop through each nested array to determine
			// which column to place it in. If it collides with an event and there is no existing nested array,
			// create a new one.
		} else if (i > 0) {

			for (var j = 0; j < eventColumns.length; j++) {				
				columnNumber = eventColumns[j];

				// If the start time of the current event is greater than the end of the last event in that column,
				// push the event to the bottom of that nested array
				if (columnNumber[columnNumber.length - 1].end < events[i].start) {
					eventColumns[j].push(events[i]);
					events[i].column = j;
					break;

					// If the next column does not contain a nested array, create one and place the object there
				} else if (typeof eventColumns[j + 1] !== 'object') {
						eventColumns[j + 1] = [];
						eventColumns[j + 1].push(events[i]);
						events[i].column = j + 1;
						break;
				} 
			}
		}
	}
	return events;
}