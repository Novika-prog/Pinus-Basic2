//IMPLEMENTASI PENJUMLAHAN
function hitungLuas(panjang, lebar){
	let luas = panjang * lebar; //langkah 1: Hitung Luas
	console.log("Luas Persegi Panjang adalah ..."+luas); //langkah 2: tampilkan hasil
}
hitungLuas(5,2); //output: Luas persegi panjang: 10


//IMPLEMENTASI PERCABANGAN
function cekBilangan (bilangan){
	if(bilangan % 2 === 0) { //jika sisa bagi bilangan adalah 0
		console.log (bilangan + "adalah bilangan genap");
	}
		else{ //selain itu
			console.log(bilangan + "adalah bilangan ganjil");
	}
}
cekBilangan(3); //output: 3 bilangan ganjil
cekBilangan(2); //output: 2 bilangan genap


//IMPLEMENTASI PERULANGAN
function hitungJumlah(n) {
	let total = 0; //inisialisasi total
	for (let i=1; i<= n; i++) { //mulai perulangan dari 1 hingga n
		total += i; // tambahkan i ke total
    }
		console.log("jumlah dari 1 hingga " + n + "adalah " + total);
}
hitungJumlah(5); //output:  jumlah dari 1 hingga 5 adalah: 15 


//PERULANGAN dengan WHILE
function cetakAngka(n) {
	let i = 1; //inisialisasi
	while (i <= n) { //periksa kondisi
		console.log(i); //cetak angka
		i++ //increment i
	}
}
cetakAngka(5); //output: 1, 2, 3, 4, 5


//buatkan diagram alur/flowchart algoritma sehari-hari & cara implementasinya.
//contoh
function cekHujan (){
	return true
}
function cekPayung(){
	return true
}
function bawaPayung(){
	console.log("Payung diambil dan dibawa.");
}

function main(){
	if(cekHujan()){
		bawaPayung();
	} else {
		console.log("Payung tidak tersedia.");
	}
	console.log("Selesai");
}
