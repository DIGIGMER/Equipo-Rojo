class Animal{
	constructor(name, action){
		this.name = name;
		this.action = action;
	}

	quieSoy = () => {
		return 'Hola sou un '+ this.name +' y ' + this.action;
	}
}

var perro = new Animal('Perro','ladro');
perro.quieSoy();