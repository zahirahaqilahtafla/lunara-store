let keranjang = [];
let total = 0;

function addCart(nama, harga) {
  keranjang.push({nama, harga});
  total += harga;
  renderCart();
}

function renderCart() {
  const cart = document.getElementById("cart");

  cart.innerHTML = keranjang.map((item, index) => `
    <p>
      ${item.nama} - Rp${item.harga.toLocaleString("id-ID")}
      <button onclick="hapus(${index})">Hapus</button>
    </p>
  `).join("");

  document.getElementById("total").innerText =
    "Total: Rp" + total.toLocaleString("id-ID");
}

function hapus(index) {
  total -= keranjang[index].harga;
  keranjang.splice(index, 1);
  renderCart();
}

function checkout() {
  if (keranjang.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  let pesan = "Halo, saya ingin membeli:\n";

  keranjang.forEach(item => {
    pesan += ${item.nama} - Rp${item.harga}\n;
  });

  pesan += \nTotal: Rp${total};

  let nomor = "87762411534";

  window.open(
    "https://wa.me/" + nomor +
    "?text=" + encodeURIComponent(pesan)
  );
}
