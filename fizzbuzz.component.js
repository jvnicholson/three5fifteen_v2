(function () {
	'use strict';

	angular.module('fizzbuzz', [])
		.component('fizzBuzz', {
			controller: FizzBuzz,
			templateUrl: 'fizzbuzz.component.html'
		});

	function FizzBuzz() {
		var ctrl = this;

		// Properties
		ctrl.items = [];

		// Methods


		init();

		function init() {
			for(var i=1; i<=100; i++) {
				ctrl.items.push({ index: i, label: "--" });
			}

			for(var i=3; i<=100; i+=3) {
				ctrl.items[i-1].label = "fizz";
			}

			for(var i=5; i<=100; i+=5) {
				ctrl.items[i-1].label = "buzz";
			}

			for(var i=15; i<=100; i+= 15) {
				ctrl.items[i-1].label = "fzbz";
			}
		}
	}
})();
