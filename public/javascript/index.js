const charactersAPI = new APIHandler('https://minions-api.herokuapp.com');

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {
   

  charactersAPI
      .getFullList()
      .then(response => {
        let container = document.querySelector(".characters-container")
        let newData = ""

        response.data.forEach(character => {
          newData += 
          `<div class="character-info">
          <div class="id">ID: ${character.id}</div>
          <div class="name">NAME: ${character.name}</div>
          <div class="occupation">OCCUPATION: ${character.occupation}</div>
          <div class="cartoon">CARTOON: ${character.cartoon}</div>
          <div class="weapon">WEAPON: ${character.weapon}</div>
          </div>`
        })
        container.innerHTML = newData
      })
      .catch(err => console.log(err))

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    let id = document.getElementsByName("character-id")[0].value

    charactersAPI
    .getOneRegister(id)
    .then(res => {
      console.log(res);
      let container = document.querySelector(".character-info")

      const character = res.data

      container.innerHTML=

      `<div class="name"> ${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">${character.cartoon}</div>
          <div class="weapon">${character.weapon}</div>`

    
    })

    .catch(err => console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    let id = document.getElementsByName("character-id")[0].value

    charactersAPI
    .deleteOneRegister(id)
    .then(res => {
      console.log(res);
      let container = document.querySelector(".character-info")

      const character = res.data

      container.innerHTML=

      `<div class="name"> ${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">${character.cartoon}</div>
          <div class="weapon">${character.weapon}</div>`

    
    })

    .catch(err => console.log(err))
     
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    let editCharacterInputs = document.querySelectorAll("#edit-character-form input");

    let name = editCharacterInputs[1].value;
    let occupation = editCharacterInputs[2].value;
    let weapon = editCharacterInputs[3].value;
    let cartoon = editCharacterInputs[4].checked;
    let id = editCharacterInputs[0].value;
    let info = { name, occupation, weapon, cartoon }

    charactersAPI
      .updateOneRegister(id, info)
      
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    let createCharacter = document.querySelectorAll("#new-character-form input");

    let name = createCharacter[0].value;
    let occupation = createCharacter[1].value;
    let weapon = createCharacter[2].value;
    let cartoon = createCharacter[3].checked;
    let info = {name,occupation,weapon,cartoon}

    charactersAPI.createOneRegister(info)





  });
});
