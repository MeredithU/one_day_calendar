function layOutDay(events) {
	events.forEach(function(entry) {
		var calendarGrid = document.getElementById("grid");
		var currentEvent = entry;
		var startTime = entry.start;
		var endTime = entry.end;

		currentEvent.height = endTime - startTime;

		console.log("Box height:" + currentEvent.height);

		var timeBlockDiv = document.createElement("div");
		timeBlockDiv.className = "timeBlock";
		timeBlockDiv.style.height = (endTime - startTime) + "px";
		timeBlockDiv.style.width = "600px";
		timeBlockDiv.style.position = "absolute";
		timeBlockDiv.style.top = (startTime + 30) + "px";
		timeBlockDiv.style.left = "120" + "px";

		calendarGrid.appendChild(timeBlockDiv);
	});
};