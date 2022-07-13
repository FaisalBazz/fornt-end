// membuat object angkot

function Angkot(sopir, trayek, penumpang, kas){
	this.sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function (namaPenumpang) {
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}

	this.penumpangTurun = function (namaPenumpang, bayar) {
		if(this.penumpang.length === 0){
			alert('Angkot masih kosong!');
			return false;
		}

		for(var i = 0; 0 < this.penumpang.length; i++){
			if(this.penumpang[i] === namaPenumpang){
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
			}else if( i == this.penumpang.length - 1){
				console.log(namaPenumpang + ' tidak ada di dalam!');
				return this.penumpang;
			}
		}
	}
}

var angkot1 = new Angkot('Faisal Basri', ['Tambun', 'Bekasi'], [], 0);
var angkot2 = new Angkot('Jim', ['MGT', 'Terminal'], [], 0);