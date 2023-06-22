function addPlayer(){
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value
    
    const confirmation = confirm('Deseja confirma os dados ?' + name + " como " + position)
    
    if(confirmation){

        const playerlist = document.getElementById('team-list')
        const liplayer = document.createElement('li')
        liplayer.id = 'player-' + number
        liplayer.innerText = position +" "+ name +" "+ "("+ number +")"
        playerlist.appendChild(liplayer)

        document.getElementById('position').value =''
        document.getElementById('name').value =''
        document.getElementById('number').value =''
    }
}
function removePlayer(){
    const number = document.getElementById("remove").value
    const playerRemove = document.getElementById('player-' + number)

    const confirmation = confirm('Remover o jogardor'+ playerRemove.innerText+ '?')

    if(confirmation){
        document.getElementById('team-list').removeChild(playerRemove)
        document.getElementById('remove').value = ''
    }
}