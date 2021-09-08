const button = document.getElementById('countButton')
const result_letras = document.getElementById('letras')
const result_palavras = document.getElementById('palavras')

let contador = 0

let arrayLetras = []
let arrayPalavras = []

button.addEventListener('click', function () {
    typedText = document.getElementById('instext').value
    typedText = typedText.toLowerCase()
    
    result_letras.innerHTML = ''
    result_palavras.innerHTML = ''
    result_letras.style.display = 'flex'
    result_palavras.style.display = 'flex'
    letras()
    palavras()
})


function letras() {

    let letrasemesp = typedText.replace(/[^a-z']+/g, "")

    for (let l = 0; l < letrasemesp.length; l++) {
        if (!arrayLetras.includes(letrasemesp[l])) {
            arrayLetras.push(letrasemesp[l])
        }
    }

    for (var c = 0; c < arrayLetras.length; c++) {
        contador = 0

        for (var l = 0; l < letrasemesp.length; l++) {
            if (arrayLetras[c] == letrasemesp[l]) {
                contador++
            }
        }

        result_letras.append(arrayLetras[c] + ": " + contador + '; ')



    }
}


function palavras() {

    let palavraseparadas = typedText.split(/\s/)

    for (let p = 0; p < palavraseparadas.length; p++) {

        if (!arrayPalavras.includes(palavraseparadas[p])) {
            arrayPalavras.push(palavraseparadas[p])
        }
    }

    for (let p = 0; p < arrayPalavras.length; p++) {
        contador = 0
        for (let ps = 0; ps < palavraseparadas.length; ps++) {
            if (arrayPalavras[p] == palavraseparadas[ps]) {
                contador++
            }
        }
        result_palavras.append(arrayPalavras[p] + ": " + contador + '; ')
    
        
    }

    

}





