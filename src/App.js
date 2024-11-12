import Banner from "./componentes/banner.js";
import Input from "./componentes/input.js";
import Form from "./componentes/form.js";
import { useState } from "react";
import Group from "./componentes/group.js";

function App() {

    //array de colaboradores
    const [collaborators, setCollaborators] = useState([])

    const addCollaborator = (collaborator) => {
      console.log(collaborator)
      //adiciona o novo colaborador ao array
      setCollaborators([...collaborators, collaborator])
    }

    return (
      <div className="App">
        <Banner/>
        <Form registeredCollaborator={collaborator => addCollaborator(collaborator)}/>
        <Group name="UX / UI" class="ux-ui"/>
        <Group name="Front-End" class="front-end"/>
        <Group name="Back-End" class="back-end"/>
        <Group name="Data Science" class="data-science"/>

      </div>
    );
}

export default App;
