function TeoremaPitagoras(a, b, c){
	this.a = a;
	this.b = b;
	this.c = c;

	this.calcularCatetoA = function(){
		var catetoA = Math.sqrt(Math.pow(this.c, 2) - Math.pow(this.b, 2));
		return catetoA;
	};

	this.CalcularCatetoB = function(){
		var catetoB = Math.sqrt(Math.pow(this.c, 2) - Math.pow(this.a, 2));
		return catetoB;
	};

	this.CalcularHipotenusa = function(){
		var hipotenusa = Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2));
		return hipotenusa;
	};
	
	return this;
}

module.exports.TeoremaPitagoras = TeoremaPitagoras;
