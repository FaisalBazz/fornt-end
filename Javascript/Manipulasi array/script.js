// Manipulasi array

// 1. Menambah isi array
// var arr = [];
//  arr[0] = "Faisal";
//  arr[1] = "Basri";
//  arr[2] = 2;
//  arr[4] = 1;

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Faisal", "Basri", "Adit"];
// arr[1] = undefined;

// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Faisal", "Basri", "Adit", "hari"];

// for( var i = 0; i < arr.length; i++) {
// 	console.log('Mahasiswa ke-' + (i+1) + ': ' +arr[i]);
// }

// 4. Method pada array'
var arr = ["Faisal", "Basri", "Adit", "Hari"];
// 4.1 Join
console.log(arr.join(', '));

// 4.2 Push & pop
arr.push('Fahri', 'Bass');
// arr.pop();
// arr.pop();
console.log(arr.join(', '));

// 4.3 unshift & shift
// arr.unshift('Fahri');
// arr.shift();
// console.log(arr.join(', '));

// 4.4 splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2)
// arr.splice(1, 2, "Hari", "Dwi");
// console.log(arr.join(', '));

// 4.5 slice
// slice(awal, akhir)
// var arr2 = arr.slice(0,2);
// console.log(arr.join(', '));
// console.log(arr2.join(', '));

// 4.6 foreach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ["Faisal", "Basri", "Adit", "Hari"];
// for( var i = 0; i < angka.length; i++) {
// 	console.log(angka[i]);
// }

// angka.forEach(function(e) {
// 	console.log(e);
// });

// nama.forEach(function(e, i){
// 	console.log('Mahasiswa ke-' + (i+1) +' adalah : ' + e);
// })

// var angka = [1,2,5,6,3,7,8,4];
// var angka2 = angka.map(function(e) {
// 	return e * 2;
// });
// console.log(angka2.join(', '));

// var angka = [1,2,5,6,10,3,7,20,8,4];
// console.log(angka.join(', '));
// angka.sort(function(a,b){
// 	return a-b;
// });
// console.log(angka.join(', '));

// 4.7 filter & find
var angka = [1,2,5,6,3,7,8,4];
var angka2 = angka.filter(function(x){
	return x > 5;
});
console.log(angka2.join(', '));

var angka2 = angka.find(function(x){
	return x > 5;
});
console.log(angka2);