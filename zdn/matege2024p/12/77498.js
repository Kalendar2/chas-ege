(function() {
	retryWhileError(function() {
		'use strict';
		let a1 = sl(1, 50).pm();
		let a2 = sl(1, 19);
		let b1 = sl(1, 50);
		let b2 = sl(1, 19);
		let c = sl(1, 19);
		let d = sl(1, 99);
		let plusminus = ['+', '-'];
		let sincos = ['sin', 'cos'];
		NAtask.setMinimaxFunctionTask({
			expr: [a1, a1 + 'sqrt(' + a2 + ')'].iz() + sincos.iz() + '(x)' + plusminus.iz() + [c, b1 + 'sqrt(' + c + ')'].iz() +
				'x' + plusminus.iz() + [c + 'pi/' + b2, 'sqrt(' + c + ')' + 'pi'].iz() + plusminus.iz() + d,
			leftEnd: '0',
			rightEnd: 'pi/2',
			primaryStep: 0.1,
			secondaryStep: 0.0001,
			authors: ['Алендарь Сергей'],
		});
	}, 1000);
})();
//77498

