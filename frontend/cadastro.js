// document.querySelector('.product-form form').addEventListener('submit', async (e) => {
//     e.preventDefault();
    
//     const name = document.getElementById('product-name').value;
//     const quantity = document.getElementById('product-quantity').value;
//     const price = document.getElementById('product-price').value;
  
//     await fetch('http://localhost:3030/products', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ name, quantity, price })
//     });
  
//     document.querySelector('.product-form form').reset();
//     loadProducts();
//   });

  const form = document.getElementById('cadastroForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      const response = await fetch('http://localhost:1500/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name, email, username, password })
      });

      const result = await response.json();

      if (result.success) {
        window.location.href = "PaginaInicial.html";
      } else {
        alert("Não foi possível realizar seu cadastro, tente novamente.");
      }
});