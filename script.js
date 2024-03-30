window.onload = function() {
    const listaPagamentos = document.getElementById('lista-pagamentos');

    // Lê o arquivo log.txt
    fetch('log.txt')
        .then(response => response.text())
        .then(data => {
            const linhas = data.split('\n');
            linhas.forEach(linha => {
                const dataPagamento = linha.trim();
                const textoLink = dataPagamento.replace(/\s*\(.*?\)\s*/g, ''); // Remove texto entre parênteses
                const pagamento = document.createElement('li');
                const link = document.createElement('a');
                link.textContent = dataPagamento;
                link.href = `${textoLink.replace(/\//g, '-')}.pdf`; // Usar textoLink para criar o link
                link.setAttribute('download', ''); // Adiciona o atributo download
                link.setAttribute('type', 'application/pdf'); // Força o tipo de arquivo
                pagamento.appendChild(link);
                listaPagamentos.appendChild(pagamento);
            });
        })
        .catch(error => console.error('Erro ao ler o arquivo:', error));
};
