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

const totalMeta = 2000; // ml
let progressoAtual = 0;

function marcar() {
  if (progressoAtual < totalMeta) {
    progressoAtual += 500;
    if (progressoAtual > totalMeta) progressoAtual = totalMeta;
    atualizarBarra();
  }
}

function atualizarBarra() {
  const porcentagem = (progressoAtual / totalMeta) * 100;
  document.getElementById("barra").style.width = `${porcentagem}%`;
  document.getElementById("progressoTexto").innerText = `Você já bebeu ${progressoAtual}ml`;
}

