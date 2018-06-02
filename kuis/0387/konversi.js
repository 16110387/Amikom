function konversiKurs()
{
    var nilai = document.getElementById("nilai").value;
    var idr = document.getElementById("idr");
    var usd = document.getElementById("usd");
    var hasilnya = document.getElementById("hasil");
    var data;
    if (usd.checked) {
        data=nilai/13500;
        hasilnya.innerHTML= 'Hasil Konversi mata uang Rp. '+ nilai +' adalah $' + data;
    }
    else{
        data= nilai*13500;
        hasilnya.innerHTML= 'Hasil Konversi mata uang $. '+ nilai +' adalah Rp.' + data;
    }

}
