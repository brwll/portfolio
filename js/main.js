
var Main = (function ($) {
	return {
		myFunction: function () {
      // Do the stuff here
		},
		initMain: function () {
			$(document).ready(function () {
				Main.myFunction();
			})
		}
	};
// Pass in jQuery.
})(jQuery);

Main.initMain();