setInterval(fetch, 10); //memastikan bahwa fungsi "fetch" bakal berjalan setiap detik (10 miliseconds)
function fetch() {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; //array untuk merubah data yang diambil dari var date yang merupakan integer menjadi string nama hari sesuai dengan nomer nya
    var date = new Date(); //pengambilan date secara lengkap + mencari data2 individual dari date lengkap tersebut, seperti jam, menit, detik, dst
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let year = date.getFullYear();
    let date2 = date.getDate();
    let day2 = days[date.getDay()]; //mengubah integer hari ke-berapa menjadi nama hari tersebut menggunakan sebuah array, misalnya hari ini adalah hari kedua (selasa) dari minggu ini, maka pada data "date" ia akan menganggap hari ini sebagai hari kedua, tetapi karena peraturan array yang bermulai dari 0, maka hari minggu merupakan hari pertama, dan selasa adalah hari ketiga (dianggap sebagai data nomer ke-2 dalam array)
    let month = date.toLocaleString('default', { month: 'long' });
    //agar detik, menit dan jam selalu dua digit. Sehingga jika detik lebih kecil daripada 10, maka akan ditambah string 0, sehingga jika detik 8, maka di display akan menjadi 08 dst..
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (hours < 10) {
        hours = "0" + hours
    }
    if (day = 1) {
        day = "monday"
    }
    document.getElementById("sclock").innerHTML = hours + ":" + minutes + ":" + seconds; //format untuk display waktu html
    document.getElementById("dates").innerHTML = day2 + ", " + date2 + " " + month; //format untuk display tanggal
    document.getElementById("years").innerHTML = year; //format untuk tahun
}
function renew(x) {
    if (x == 1) {
        location.replace("digitalwatch.html");
    }
    if (x == 2) {
        location.replace("stopwatch.html");
    }
    if (x == 3) {
        location.replace("timer.html");
      }
}
