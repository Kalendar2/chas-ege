(function() {
	retryWhileError(function() {
		'use strict';
		let l = sl(-15, -4);
		let r = l + sl(1, 3);
		NAtask.setMinimaxFunctionTask({
			expr: '' + sl(1, 9) + 'x^5 - ' + sl(1, 30) + 'x^3 - ' + sl(1, 1000),
			leftEnd: '' + l,
			rightEnd: '' + r,
			authors: ['Алендарь Сергей'],
		});
	}, 1000);
})();
//315129

