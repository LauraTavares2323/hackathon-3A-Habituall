//  permissão para enviar notificação
if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

//  para iniciar o comando assim que a tela caregar
window.addEventListener('load', () => {
    // verificar no localSotrage a ultima vez que foi enviada uma notificação
    const ultimaNotificacao = localStorage.getItem('ultimaNotificacao');
    // pega o horario atual para dar o intervalo de tempo pedido
    const agora = new Date().getTime();
    // escolhe o intervalo d tempo entre uma notificação e a outra
    const intervalo = 5 * 60 * 1000;

    // if de verificação para enviar a notificação com o intervalo d tempo
    if (!ultimaNotificacao || agora - parseInt(ultimaNotificacao) > intervalo) {
        if (Notification.permission === "granted") {
            // notificaççoes
            const mensagens = [
                {
                    titulo: "Bem-vindo",
                    texto: "Não se esqueça de tomar água 💧",
                    icone: "./assents/logo.png"
                },
                {
                    titulo: "Hora de respirar",
                    texto: "Que tal uma pausa?",
                    icone: "./assents/logo.png"
                },
                {
                    titulo: "Não se esqueça das suas metas!",
                    texto: "Cumpra todas as metas diárias para uma evolução!",
                    icone: "./assents/logo.png"
                },
                {
                    titulo: "Você está quase lá!",
                    texto: "Falta pouco para alcançar seus objetivos",
                    icone: "./assents/logo.png"
                }
            ];
            
            // Escolhe uma notificação aleatória
            const mensages = mensagens[Math.floor(Math.random() * mensagens.length)];

            // Mostra a notificação
            new Notification(mensages.titulo, {
                body: mensages.texto,
                icon: mensages.icone
            });

            // salvar a utlima notificacao no localStorage para a proxima notificação
            localStorage.setItem('ultimaNotificacao', agora);
        }
    }
});
let currentWater = 0; // em litros
const maxWater = 2; // máximo de 2L

function updateProgress() {
  const progressBar = document.getElementById("progressBar");
  const waterAmount = document.getElementById("waterAmount");

  // Atualiza a barra de progresso
  const progress = (currentWater / maxWater) * 100;
  progressBar.style.width = progress + "%";
  
  // Atualiza o texto com a quantidade de água
  waterAmount.innerText = `${currentWater.toFixed(2)}L / ${maxWater}L`;
}

function markWater() {
  if (currentWater < maxWater) {
    currentWater += 0.25; // cada marcação aumenta 250ml (0.25L)
    if (currentWater > maxWater) {
      currentWater = maxWater; // não deixa ultrapassar 2L
    }
    updateProgress();
  } else {
    alert("Você já atingiu a quantidade máxima de 2L!");
  }
}


function calculateSleep() {
    const sleepTime = document.getElementById("sleepTime").value;
    const wakeTime = document.getElementById("wakeTime").value;
    
    if (!sleepTime || !wakeTime) {
      alert("Por favor, preencha tanto a hora de dormir quanto a hora de acordar.");
      return;
    }
  
    const sleepDate = new Date(`1970-01-01T${sleepTime}:00`);
    const wakeDate = new Date(`1970-01-01T${wakeTime}:00`);
  
    // Caso o horário de acordar seja no dia seguinte (exemplo: dormiu à noite e acordou de manhã)
    if (wakeDate <= sleepDate) {
      wakeDate.setDate(wakeDate.getDate() + 1);
    }
  
    const diffMilliseconds = wakeDate - sleepDate; // Diferença em milissegundos
    const hoursSlept = diffMilliseconds / (1000 * 60 * 60); // Convertendo para horas
  
    const maxSleep = 8; // Meta de 8 horas
    const progress = (hoursSlept / maxSleep) * 100;
  
    // Atualizando a barra de progresso
    const progressBar = document.getElementById("sleepProgressBar");
    const sleepAmount = document.getElementById("sleepAmount");
  
    progressBar.style.width = `${progress}%`;
    sleepAmount.innerText = `${hoursSlept.toFixed(2)}h / ${maxSleep}h`;
  
    // Verificando se a meta foi atingida
    if (hoursSlept >= maxSleep) {
      alert("Parabéns! Você atingiu a meta de 8 horas de sono.");
    }
  }

  // Função para marcar se o usuário se exercitou ou não
function markExercise(status) {
    const exerciseStatus = document.getElementById("exerciseStatus");
  
    if (status === 'sim') {
      exerciseStatus.innerText = "Parabéns, você se exercitou hoje!";
      exerciseStatus.style.color = "#4CAF50"; // Verde para "Sim"
    } else if (status === 'nao') {
      exerciseStatus.innerText = "Vamos tentar amanhã!";
      exerciseStatus.style.color = "#f44336"; // Vermelho para "Não"
    }
  }
  

  function markPages() {
    const pagesRead = document.getElementById("pagesRead").value;
    const readingStatus = document.getElementById("readingStatus");
  
    // Verifica se o valor está dentro do intervalo permitido
    if (pagesRead >= 1 && pagesRead <= 50) {
      readingStatus.innerText = `Você leu ${pagesRead} páginas hoje. Continue assim!`;
      readingStatus.style.color = "#4CAF50"; // Verde para feedback positivo
    } else {
      readingStatus.innerText = "Por favor, digite um número entre 1 e 50.";
      readingStatus.style.color = "#f44336"; // Vermelho para erro
    }
  }
  function markMood() {
    const mood = document.getElementById("moodSelect").value;
    const moodStatus = document.getElementById("moodStatus");
  
    switch(mood) {
      case 'muito-bem':
        moodStatus.innerText = "Que ótimo! Continue assim!";
        moodStatus.style.color = "#4CAF50";
        break;
      case 'bem':
        moodStatus.innerText = "Que bom! Continue se cuidando!";
        moodStatus.style.color = "#8BC34A";
        break;
      case 'mais-ou-menos':
        moodStatus.innerText = "Tente focar no lado positivo!";
        moodStatus.style.color = "#FFC107";
        break;
      case 'mal':
        moodStatus.innerText = "Lembre-se, amanhã é um novo dia!";
        moodStatus.style.color = "#FF5722";
        break;
      case 'muito-mal':
        moodStatus.innerText = "É normal ter dias difíceis. Se cuide!";
        moodStatus.style.color = "#F44336";
        break;
    }
  }

  function markOutdoor() {
    const outdoorTime = document.getElementById("outdoorTime").value;
    const outdoorStatus = document.getElementById("outdoorStatus");
  
    if (outdoorTime > 0) {
      outdoorStatus.innerText = `Você passou ${outdoorTime} minutos ao ar livre. Ótimo para a saúde!`;
      outdoorStatus.style.color = "#4CAF50";
    } else {
      outdoorStatus.innerText = "Lembre-se de sair ao ar livre amanhã!";
      outdoorStatus.style.color = "#FF5722";
    }
  }
  

  