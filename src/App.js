import Banner from "./componentes/banner.js";
import Input from "./componentes/input.js";
import Footer from "./componentes/Footer.js";
import Form from "./componentes/form.js";
import { useState } from "react";
import Group from "./componentes/group.js";
import { v4 as uuidv4 } from 'uuid';

function App() {

    //array de colaboradores
    const [collaborators, setCollaborators] = useState([
      {
        name: 'UX / UI',
        class: 'ux-ui'
      },
      {
        name: 'Front-End',
        class: 'front-end'
      },
      {
        name: 'Back-End',
        class: 'back-end'
      },
      {
        name: 'Data Science',
        class: 'data-science'
      }
    ])

    const addCollaborator = (collaborator) => {
      if(collaborator.group == ""){
        collaborator.group= 'UX / UI'
      } 
      console.log(collaborator)
      //adiciona o novo colaborador ao array
      setCollaborators([...collaborators, collaborator])
    }

    function mudarCorDoGrupo(corOriginal, corComOpacidade, nome, group){
      setCollaborators(collaborators.map(time => {
        console.log(corOriginal)
        if(group.class == nome){
          //salvando as cores na classe group
          Group.setCorCard = corComOpacidade;
          Group.setCorBack = corOriginal;

          //mudando as cores no html
          document.querySelector(`.${nome}`).style.background = corOriginal;
          document.querySelectorAll(`.card-${nome}-div`).forEach(div =>
            div.style.background = corComOpacidade
          )
        }
        return time;
      }))
    }

    return (
      <div className="App">
        <Banner/>

        <Form registeredCollaborator={collaborator => addCollaborator(collaborator)}/>

        <Group name="UX / UI" class="ux-ui" collaborators={collaborators} mudarCor={mudarCorDoGrupo}/>
        <Group name="Front-End" class="front-end" collaborators={collaborators} mudarCor={mudarCorDoGrupo}/>
        <Group name="Back-End" class="back-end" collaborators={collaborators} mudarCor={mudarCorDoGrupo}/>
        <Group name="Data Science" class="data-science" collaborators={collaborators} mudarCor={mudarCorDoGrupo}/>

        <Footer/>
        
      </div>
    );
}

export default App;
