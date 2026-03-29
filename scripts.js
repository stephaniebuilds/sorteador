function generateNumber(){
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)

    const resultField = document.querySelector('.result-value')

    if(min >= max) 
        {
        alert("O valor minimo precisa ser MENOR que o máximo")}
        else {
            const result = Math.floor(Math.random() * (max - min + 1)) + min;

            resultField.innerHTML = result
            
            }
        }
