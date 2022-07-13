// this

//console.log(window === this);

// mambuat object
// cara 1 - function declaration
// function halo(){
// 	console.log('halo');
// }

// this.halo();
// this mengembalikan object global

// cara 2 - object literal
// var obj = {a: 10, nama: 'Faisal'};
// obj.halo = function (){
// 	console.log(this);
// 	console.log('halo faisal');
// }

// obj.halo();
// this mengembalikan object yang bersangkutan

// cara 3 - constructor
function halo(){
	console.log(this);
	console.log('Hello Faisal');
}

var obj1 = new halo();
var obj2 = new halo();
// this mengembalikan object yang baru dibuat