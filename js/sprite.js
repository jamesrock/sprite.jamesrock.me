(function() {

	var
	pixelate = function(number) {

		var
		_return = number.toString();

		if(number<0) {
			_return += "px";
		};

		return _return;

	};

	window.makeAnimationSprite = function(frames, frameWidth, axis, id) {

		var
		frame = (frames + 1),
		result = [],
		axisVals = {
			X: 0,
			Y: 0
		};

		while(frame--) {
			axisVals[axis] = ((frameWidth*frame)*-1);
			result.unshift(id + "[data-frame=\"" + frame + "\"] {background-position: " + pixelate(axisVals["X"]) + " " + pixelate(axisVals["Y"]) + ";}");
		};

		return result.join("\n");

	};

	console.log(makeAnimationSprite(18, 210, "X", ".loader"));
	console.log(makeAnimationSprite(18, 210, "Y", ".loader"));

})();