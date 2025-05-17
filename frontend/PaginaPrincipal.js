let agua = 0;
const maxAgua = 2;

function atualizarBarraAgua() {
  const barra = document.getElementById("barra-agua");
  const status = document.getElementById("status-agua");
  const porcentagem = (agua / maxAgua) * 100;
  barra.style.width = porcentagem + "%";
  status.innerText = `${agua.toFixed(2)}L / ${maxAgua}L`;
}

function marcarAgua() {
  if (agua < maxAgua) {
    agua += 0.25;
    if (agua > maxAgua) agua = maxAgua;
    atualizarBarraAgua();
  } else {
    alert("Você já tomou 2L de água hoje!");
  }
}

function calcularSono() {
  const dormir = document.getElementById("hora-dormir").value;
  const acordar = document.getElementById("hora-acordar").value;

  if (!dormir || !acordar) {
    alert("Preencha os horários.");
    return;
  }

  const horaDormir = new Date(`1970-01-01T${dormir}:00`);
  const horaAcordar = new Date(`1970-01-01T${acordar}:00`);
  if (horaAcordar <= horaDormir) horaAcordar.setDate(horaAcordar.getDate() + 1);

  const horas = (horaAcordar - horaDormir) / 3600000;
  const barra = document.getElementById("barra-sono");
  const status = document.getElementById("status-sono");
  const porcentagem = (horas / 8) * 100;

  barra.style.width = `${porcentagem}%`;
  status.innerText = `${horas.toFixed(2)}h / 8h`;

  if (horas >= 8) alert("Parabéns! Você dormiu bem!");
}

function exercicio(resp) {
  const status = document.getElementById("status-exercicio");
  if (resp === "sim") {
    status.innerText = "Parabéns, você se exercitou!";
    status.style.color = "green";
  } else {
    status.innerText = "Tente amanhã!";
    status.style.color = "red";
  }
}

function registrarLeitura() {
  const paginas = document.getElementById("input-leitura").value;
  const status = document.getElementById("status-leitura");

  if (paginas >= 1 && paginas <= 50) {
    status.innerText = `Você leu ${paginas} páginas hoje!`;
    status.style.color = "green";
  } else {
    status.innerText = "Digite entre 1 e 50 páginas.";
    status.style.color = "red";
  }
}

function registrarHumor() {
  const humor = document.getElementById("humor").value;
  const status = document.getElementById("status-humor");

  switch (humor) {
    case 'muito-bem':
      status.innerText = "Que ótimo!";
      break;
    case 'bem':
      status.innerText = "Bom saber!";
      break;
    case 'normal':
      status.innerText = "Tudo bem, dias assim acontecem!";
      break;
    case 'mal':
      status.innerText = "Melhoras!";
      break;
    case 'muito-mal':
      status.innerText = "Se cuide! Amanhã será melhor.";
      break;
  }
}

function registrarAr() {
  const tempo = document.getElementById("tempo-ar").value;
  const status = document.getElementById("status-ar");

  if (tempo > 0) {
    status.innerText = `Você ficou ${tempo} minutos ao ar livre!`;
    status.style.color = "green";
  } else {
    status.innerText = "Tente sair amanhã!";
    status.style.color = "orange";
  }
}


  
