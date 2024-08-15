function classificarIdades(){
    const idades = [
        parseInt(document.getElementById('idade1').value),
        parseInt(document.getElementById('idade2').value),
        parseInt(document.getElementById('idade3').value),
        parseInt(document.getElementById('idade4').value),
        parseInt(document.getElementById('idade5').value)
    ];    
    const categorias = {
        'Até 15 anos': 0,
        '16 a 40 anos': 0,
        'Acima de 40 anos': 0
    };
    const maiorIdade = Math.max(...idades);   
    idades.forEach(idade => {
        if (idade <= 15) {
            categorias['Até 15 anos']++;
        } else if (idade >= 16 && idade <= 40) {
            categorias['16 a 40 anos']++;
        } else {
            categorias['Acima de 40 anos']++;
        }
    });
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        Até 15 anos: ${categorias['Até 15 anos']}<br>
        16 até 40 anos: ${categorias['16 a 40 anos']}<br>
        Acima de 40 anos: ${categorias['Acima de 40 anos']}
    `;    
    const maiorIdadeElement = document.getElementById('maiorIdade');
    maiorIdadeElement.innerHTML = `A maior idade  é: ${maiorIdade}`;
}