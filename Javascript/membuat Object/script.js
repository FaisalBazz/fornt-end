// membuat object
// object literal
var mhs = {
	nama: "Faisal Basri",
	nrp: '210100018',
	ips: [3.20, 2.50, 3.50],
	alamat: {
		jalan: "Jl.abc No.123",
		kota: "Bekasi",
		provinsi: "Jawa Barat",
	},

};

// var mhs = {
// 	nama : 'Faisal Basri',
// 	nrp : '210100018',
// 	email : 'faisal.basr@Test.com',
// 	jurusan : 'Teknik Informatika'
// }

//function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
	var mhs = {};
	mhs.nama = nama;
	mhs.nrp = nrp;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
}

var mhs2 = buatObjectMahasiswa('Aditya', '210100018', 'adtya@gmail.com',
	'Teknik Lingkungan')

// constructor
function Mahasiswa(nama, nrp, email, jurusan) {
	this.nama = nama;
	this.nrp = nrp;
	this.email = email;
	this.jurusan = jurusan;
}

var mhs3 = new Mahasiswa('Basri', '201000082', 'Basri@yahoo.com', 'Manajemen');