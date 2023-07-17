function createLabel(text, htmlFor) {
    const label =document.createElement('label')
    label.htmlFor =htmlFor
    label.innerText = text
    return label 
}

function createInput(id, value, name, type = 'text',placeholder = ''){
    const input = document.createElement('input')
    input.id= id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const addTech = document.getElementById('addTech')
const form = document.getElementById('formDev')
const developers = []
let inputRows = 0 


addTech.addEventListener('click', function(ev){
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++ 
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-'+ rowIndex, null,'techName')
    
    const expLabel = createLabel('Experiencia: ')
    const id1 = 'expRadio-' + rowIndex + '.1'
    const input1 = createInput(id1 ,'0-2 ANOS' , 'expTech-' + rowIndex , 'radio')
    const label1 = createLabel('0-2 ANOS', id1)
    const id2 = 'expRadio-' + rowIndex + '.2'
    const input2 = createInput(id2, '2-4 ANOS', 'expTech-' + rowIndex, 'radio')
    const label2 = createLabel('2-4 ANOS', id2)
    const id3 = 'expRadio-' + rowIndex + '.3'
    const input3 = createInput(id3, '5 + ANOS', 'expTech-' + rowIndex, 'radio')
    const label3 = createLabel('5 + ANOS', id3)

    const removeBtn = document.createElement('button')
    removeBtn.innerText = ' Remover '
    removeBtn.type = 'button'
    removeBtn.addEventListener('click', function(){
        stackInputs.removeChild(newRow)
    })

    newRow.append(
        techNameLabel, techNameInput,expLabel, input1, label1, input2, label2, input3, label3, removeBtn
    )

    stackInputs.appendChild(newRow)

})

form.addEventListener('submit', function(ev){
    ev.preventDefault()
    
    const devNameInput = document.getElementById('devName')
    const inputRows = document.querySelectorAll('.inputRow')

    let technologies = []
    inputRows.forEach(function (row) {
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value

        technologies.push({name: techName, exp: techExp})
    })

    const newDev = { devName: devNameInput.value , technologies: technologies}
    developers.push(newDev)
    alert('Dev cadastrado com sucesso!')

    devNameInput.value = ''
    inputRows.forEach(function (row) {
        row.remove()
    })

    console.log(developers)
})  
    
