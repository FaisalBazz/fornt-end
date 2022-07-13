// DOM Selection
// document.getElementById() -> Element
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'grey';
// judul.innerHTML = 'Faisal Basri';

// document.getElementsByTagName() -> HTMLColections
// const p = document.getElementsByTagName('p');

// for(let i = 0; i < p.length; i++){
// 	p[i].style.backgroundColor = 'lightblue';
// 	//p[i].innerHTML = 'tes paragraf';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// // document.getElementsByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'Ini diubah oleh javascript';

// document.queryselector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// document.querySelectorAll()
const p = document.querySelectorAll('p');
for(let i = 0; i < p.length; i++){
	p[i].innerHTML = 'Parag ke-' + (i+1);
	p[i].style.backgroundColor = 'lightblue';
}

const tombol = document.querySelector('#tombol');
tombol.addEventListener('click', function() {
	Swal.fire(
  'The Internet?',
  'That thing is still around?',
  'warning'
)
});