let elPersen = document.getElementById("persen");
let elTahun = document.getElementById("tahun");
let elTabungan = document.getElementById("tabungan");
let elHasil = document.getElementById("hasil");

var hasil = 0,
  perTahun = 0;
function counter() {
  let persen = parseInt(elPersen.value);
  let tahun = parseInt(elTahun.value);
  let tabungan = parseInt(elTabungan.value);

  hasil = tabungan;
  for (let index = 0; index < tahun; index++) {
    perTahun = hasil * (persen / 100);
    hasil = hasil + perTahun;
  }

  elHasil.value = hasil;
}
