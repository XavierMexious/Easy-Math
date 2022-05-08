//Catatan :
// Untuk mencari sisi miring memakai Math.sqrt() dan untuk mengubah string menjadi integer menggunakan parseInt()

function hitungPersegiPanjang(){
    panjang = document.getElementById("txt-pp-panjang").value;
    lebar = document.getElementById("txt-pp-lebar" ).value;
    Luas = panjang * lebar;
    Keliling = 2 * panjang + 2 * lebar
    document.getElementById("txt-pp-luas").value = Luas;
    document.getElementById("txt-pp-keliling").value = Keliling;
}
function hitungPersegi(){
    sisi = document.getElementById("txt-p-sisi").value;
    Luas = sisi * sisi;
    Keliling = 4 * sisi
    document.getElementById("txt-p-luas").value = Luas;
    document.getElementById("txt-p-keliling").value = Keliling;
}
function hitungSegitiga(){
    alas = document.getElementById("txt-s-alas").value;
    tinggi = document.getElementById("txt-s-tinggi").value;
    jumsisimiring =  Math.sqrt((alas/2*alas/2)+(tinggi*tinggi))
    Luas = alas * tinggi /2;
    Keliling = 2*jumsisimiring+parseInt(alas)
    document.getElementById("txt-s-luas").value = Luas;
    document.getElementById("txt-s-keliling").value = Keliling;
}
function hitungLingkaran(){
    pi = 22/7;
    r = document.getElementById("txt-l-r").value;
    Luas = pi * r * r;
    Keliling = pi * 2 *r
    document.getElementById("txt-l-luas").value = Luas;
    document.getElementById("txt-l-keliling").value = Keliling;
}
function hitungTrapesium(){
    sisi1 = document.getElementById("txt-t-sisi1").value;
    sisi2 = document.getElementById("txt-t-sisi2").value;
    tinggi = document.getElementById("txt-t-tinggi").value;
    sisimiring = Math.sqrt(((sisi1-sisi2)/2)*((sisi1-sisi2)/2)+tinggi*tinggi)
    Luas =  ((parseInt(sisi1)+parseInt(sisi2))*tinggi)/2 ;
    Keliling = ((2*sisimiring) + parseInt(sisi1)+ parseInt(sisi2))
    document.getElementById("txt-t-luas").value = Luas;
    document.getElementById("txt-t-keliling").value = Keliling;
    console.log(document.getElementById("txt-t-sisi1").value,document.getElementById("txt-t-sisi2").value,document.getElementById("txt-t-tinggi").value)
}
function hitungJajarGenjang(){
    alas = document.getElementById("txt-jg-alas").value;
    tinggi = document.getElementById("txt-jg-tinggi").value;
    smiring = document.getElementById("txt-jg-smiring").value;
    Luas = alas * tinggi;
    Keliling = ((2*smiring)+parseInt(2*alas));
    document.getElementById("txt-jg-luas").value = Luas;
    document.getElementById("txt-jg-keliling").value = Keliling;
}
function hitungBelahKetupat(){
    diagonal1 = document.getElementById("txt-bk-diagonal1").value;
    diagonal2 = document.getElementById("txt-bk-diagonal2").value;
    jumsisimiring =  Math.sqrt((diagonal1/2)*(diagonal1/2)+parseInt(diagonal2/2)*(diagonal2/2));
    Luas = (diagonal1 * diagonal2) /2;
    Keliling = 4*jumsisimiring;
    document.getElementById("txt-bk-luas").value = Luas;
    document.getElementById("txt-bk-keliling").value = Keliling;
}
function hitungLayangLayang(){
    diagonal1 = document.getElementById("txt-ll-diagonal1").value;
    diagonal2 = document.getElementById("txt-ll-diagonal2").value;
    ab = document.getElementById("txt-ll-ab").value;
    cd = document.getElementById("txt-ll-cd").value;
    Luas = (diagonal1 * diagonal2) /2;
    Keliling = (2*ab + parseInt(2*cd));
    document.getElementById("txt-ll-luas").value = Luas;
    document.getElementById("txt-ll-keliling").value = Keliling;
}
