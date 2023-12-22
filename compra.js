

let cartItems = [];
let totalValue = 0;

function adicionarAoCarrinho(item, valor) {
  cartItems.push({ item, valor });
  totalValue += valor;
  atualizarCarrinho();
  alert(`"${item}" foi adicionado ao carrinho!`);
}



function comprar() {
  if (cartItems.length > 0) {
    const itemsString = cartItems.map(item => `${item.item} - $${item.valor}`).join(', ');
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${itemsString}&size=200x200`;
    window.open(qrCodeUrl, '_blank');
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const qrCode = new QRCode(qrCodeContainer, {
      text: qrCodeText,
      width: 180,
      height: 180
    });
  } else {
    alert("Seu carrinho está vazio. Adicione itens antes de comprar.");
  }
}

function atualizarCarrinho() {
  document.getElementById('cart').textContent = `Carrinho: ${cartItems.length} item(s)`;
}

//Certifique-se de passar o valor junto com o item ao chamar a função adicionarAoCarrinho. Por exemplo: adicionarAoCarrinho('Imagem 1', 10).

//Isso garantirá que o QR code contenha os itens, seus valores individuais e o valor total do carrinho para a compra.