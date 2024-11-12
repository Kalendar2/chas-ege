(function() {
	retryWhileError(function() {
		'use strict';
		let a = sl(2, 10, 2);
		let b = sl(2, 10);
		let cossin = ['cos', 'sin'].iz();
		NAtask.setMinimaxFunctionTask({
			expr: '1/(' + cossin + '(x)^2-' + a + cossin + '(x)' + ['-', '+'].iz() + b + ')',
			leftEnd: '-pi',
			rightEnd: 'pi',
			primaryStep: 0.1,
			authors: ['Алендарь Сергей'],
		});
	}, 10000);
})();

//77470

