// -- Manipulai Element --
// 1. element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Faisal Basri</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>Paragraf 1</p></div>';

// 2. element.style.<propertyCSS>
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// 3. element.setAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'Faisal');

// const a = document.querySelector('section#a a');

// 4. element.classList
const p2 = document.querySelector('.p2');

// ========================================================================================

// -- Manipulasi Node --

// 1. document.createElement (buat elemen baru)
const pBaru = document.createElement('p');
// 2. document.createTextNode 
const teksPBaru = document.createTextNode('Paragraf Baru');

// 3. node.appenChild (simpan tulisan ke dalam paragraf)
pBaru.appendChild(teksPBaru);

// simpan pBaru di section a
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru);

// 4. node.insertBefore()
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// 5. parentNode.removeChild()
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// 6. parentNode.replaceChild()
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';