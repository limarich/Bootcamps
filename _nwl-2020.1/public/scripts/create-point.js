/*document.querySelector("form Input")--> realiza uma busca de seletores*/ 
/*json --> object javascript notation, notacao de um objeto javascript*/
/*fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(function(res) {return res.json()}).then(function(data) {console.log(data)})*/

function populateUfs() {
    const ufSelect =document.querySelector("select[name=uf]")
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => {return res.json()})
    .then(states => {

        for(const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}<\option>`
        }

        
    })
}
populateUfs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufvalue = event.target.value

    //transformando o valor do estano no nome do estado
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState]

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`

    citySelect.innerHTML = "<option value >Selecione a cidade</option>"
    citySelect.disabled = true
    
    fetch(url)
    .then(res => res.json())
    .then(cities => {
        
        for (city of cities) {
            citySelect.innerHTML += `<option values="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change",getCities)

// da pra criar uma funcao que faz as buscas
//target onde foi executado
/*document
    .querySelector("select[name=uf]")
    .addEventListener("change", () => {
        console.log("mudei")
    })*/
    //cath qnado nao da certo
    //res => res.json()
// itens de coleta
const itemsToColect = document.querySelectorAll([".items-grid li"])




for(const item of itemsToColect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []
function handleSelectedItem(event) {
    const itemLi = event.target
    // console.log(event.target.dataset.id)
    //adiciona uma classe se nao existir e retira se ja existir
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    const alreadySelected = selectedItems.findIndex(item =>  item === itemId)
    
    if(alreadySelected >= 0) {
        const filterdeItems = selectedItems.filter(item => item !== itemId)
        selectedItems = filterdeItems
    } else {

        selectedItems.push(itemId)

    }
    // console.log(selectedItems)
    collectedItems.value = selectedItems
}



