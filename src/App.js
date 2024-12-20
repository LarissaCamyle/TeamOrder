import Banner from "./componentes/banner.js";
import Input from "./componentes/input.js";
import Form from "./componentes/form.js";
import { useState } from "react";
import Group from "./componentes/group.js";

function App() {

    //array de colaboradores
    const [collaborators, setCollaborators] = useState([])

    const addCollaborator = (collaborator) => {
      if(collaborator.group == ""){
        collaborator.group= 'UX / UI'
      } 
      console.log(collaborator)
      //adiciona o novo colaborador ao array
      setCollaborators([...collaborators, collaborator])
    }

    return (
      <div className="App">
        <Banner/>

        <Form registeredCollaborator={collaborator => addCollaborator(collaborator)}/>

        <Group name="UX / UI" class="ux-ui" collaborators={collaborators} />
        <Group name="Front-End" class="front-end" collaborators={collaborators} />
        <Group name="Back-End" class="back-end" collaborators={collaborators} />
        <Group name="Data Science" class="data-science" collaborators={collaborators} />
        
      </div>
    );
}

export default App;
