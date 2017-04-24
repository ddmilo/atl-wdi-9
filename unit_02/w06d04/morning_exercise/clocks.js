var calculate = function(hourhand, minutehand) {
	// var minutesPerHour = 60;
	// var hoursOnClock = 12;
	var minuteAngle = (hourhand * 60 + minutehand) * 6;
	var hourAngle = (hourhand * 60 + minutehand) * 0.5;
	return hourAngle - 360

};



//Calculate the two hands of a clock into degrees
//A full rotation is 360 degrees
//There are 12 hours on a clock
//Hour hand drifts
//60 minutes each hour
//60 seconds to a minute
//minute hand moves 360 degree in 60 minutes(6 degree in one minute)
//hour hand moves 360 in 12 hours(.5 degree in one minute)


// DO NOT EDIT BELOW THIS LINE //
module.exports = {
  calculate: calculate
};
w