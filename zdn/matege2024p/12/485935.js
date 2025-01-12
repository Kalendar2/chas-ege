(function() {
	retryWhileUndefined(function() {
		'use strict';

		math.expandProdSums = function(expr) {
			return math.simplify(expr, [{
				r: 'n1*n3 + n2*n3',
				l: '(n1+n2)*n3'
			}, {
				r: 'n1*n3 - n2*n3',
				l: '(n1-n2)*n3'
			}]);
		};

		var l1 = sl1();
		var l = sl(0, 4)
		var chislo = [-1, -0.5, 0, 0.5, 1];
		var abroad = sl(2, 5).pm();
		var sc = ['sin', 'cos'];


		var otvetsin = ['\\frac{\\pi}{2}', '\\frac{\\pi}{6}', '\\pi', '\\frac{5 \\pi}{6}', '\\frac{3\\pi}{2}'];
		var otvetcos = ['', '\\frac{\\pi}{3}', '\\frac{\\pi}{2}', '\\frac{2 \\pi}{3}', '\\pi'];
		var otvet = l1 ? otvetcos : otvetsin;

		var mult1 = math.parse(sc[l1] + '(x) +' + chislo[l]);
		var mult2 = math.parse(sc[l1] + '(x) + ' + abroad);

		var a = String(sl(2, 9));

		var prod = new math.OperatorNode('*', 'multiply', [mult1, mult2]);
		var e2 = math.expandProdSums(prod);
		var e3 = math.simplify(e2);
		var e4 = new math.OperatorNode('*', 'multiply', [math.parse(a), e3]);
		var e5 = math.expandProdSums(e4);
		var e6 = math.simplify(e5);
		var e7 = math.expandProdSums(e6);


		chas2.task.setTask({
			text: 'Решите уравнение: ' + "$$" + e7.toTex() + '=0' + "$$",
			analys: '$$' + e7.toTex() + '=0' + '$$' +
				'$$' + e6.toTex() + '=0' + '$$' +
				'$$' + e5.toTex() + '=0' + '$$' +
				'$$' + e4.toTex() + '=0' + '$$' +
				'$$' + e2.toTex() + '=0' + '$$' +
				'$$\\quad \\' + sc[l1] + ' x +' + chislo[l] + '=0 \\quad \\' +
				sc[l1] + ' x +' + abroad + '=0 $$' +
				'$$x= \\pm' + otvet[l] + '+2 \\pi k,\\quad k \\in \\mathbb {Z}' + '$$',
			answers: sc[l1] + ' + ' + chislo[l] + '=0 ' + sc[l1] + ' + ' + abroad + '=0',
		});

		return true;
	});
})();
//485935


