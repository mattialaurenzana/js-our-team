const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  function createOutputHtml (container,object){
    container.innerHTML += `  
    <div class="team-card">
      <div class="card-image">
        <img
          src="img/${object.image}"
          alt="${object.name}"
        />
      </div>
      <div class="card-text">
        <h3>${object.name}</h3>
        <p>${object.role}</p>
      </div>
  </div>` 
  }
  
const teamContainer = document.querySelector('.team-container');
  for(let i=0; i < team.length; i++){
    const member = team[i];  //salvo in una variabile il membro attuale
    
  //richiamo la funzione per aggiungere l'oggetto all'html
  createOutputHtml(teamContainer,member);
  };


  /***************************************************************************/
  //BONUS

  /*Utilizziamo gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team:
  cliccando sul pulsante “add” viene creato un nuovo oggetto, il quale viene inserito nell’array iniziale,
   e viene stampata una nuova card con tutte le informazioni inserite dall’utente.*/
  const button = document.getElementById('addMemberButton');

  button.addEventListener('click',function(){

    //salvo in variabili i valori inseriti dall'utente come input
    const name_ = document.getElementById('name').value;
    const image = document.getElementById('image').value;
    const role = document.getElementById('role').value;

    const newMember = {  //viene creato un nuovo oggetto a partire dalle informazioni inserite dall'utente
      name : name_,
      role : role,
      image : image
    }
  
    team.push(newMember); //inserisco il nuovo oggetto creato all'interno dell'array contenente tutti i membri del team

    createOutputHtml(teamContainer,newMember);
    

    
  });
