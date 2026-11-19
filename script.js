document.getElementById('form-Agendamento').addEventListener('submit', function(event){
    event.preventDefault(); // impede o envio do formulário, para poder simular a ação

 //Obetém os valores dos campos data e hora
    const dataSelecionada= document.getElementById('data').value ;
    const horaSelecionada= document.getElementById('hora').value ;

    if(dataSelecionada && horaSelecionada) {
      // Mostra a mensagem de sucesso
     document.getElementById('mensagem-sucesso').style.display ='block';

      console.log(`agendamento confirmado para ${dataSelecionada} às ${horaSelecionada}`);
    }

    
    
});
