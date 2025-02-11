// import { Component } from "react";

// class TaskList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [],
//       newTask: "",
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ newTask: event.target.value });
//   };

//   handleKeyPress = (event) => {
//     if (event.key === "Enter" && this.state.newTask.trim() !== "") {
//       this.setState((prevState) => ({
//         tasks: [...prevState.tasks, prevState.newTask],
//         newTask: "",
//       }));
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h2>Liste de tâches</h2>
//         <input
//           type="text"
//           placeholder="Ajouter une tâche"
//           value={this.state.newTask}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <ul>
//           {this.state.tasks.map((task, index) => (
//             <li key={index}>{task}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default TaskList;


// code Julien

// import { Component } from 'react'

// export default class InputListComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             inputsList: []
//         };
//     }

//     changeState = (event) => {
//         if (event.key !== 'Enter') {
//             return;
//         }
//         this.setState({
//             inputsList: [...this.state.inputsList, event.target.value],
//         });
//         event.target.value = '';
//     }

//     deleteOneAt = (index) => {
//         this.state.inputsList.splice(index, 1);
//         this.setState({
//             inputsList: this.state.inputsList,
//         });
//     }

//     deleteAll = () => {
//         this.setState({
//             inputsList: [],
//         });
//     }

//     render() {
//         return (
//             <div>
//             <input type='text' onKeyDown={this.changeState}/>
//             <ul>
//             {this.state.inputsList.map((value, index) => (
//                     <li key={index}>{value}  <button onClick={() => this.deleteOneAt(index)}>X</button></li>
//             ))}
//             </ul>
//             <button onClick={this.deleteAll}>Delete All</button>
//             </div>
//         )
//     }
// }


//Saloum 

// import React from "react";

// class TodoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: [],
//       currentTask: "",
//     };
//   }

//   // Gère les changements dans le champ de saisie
//   handleChange = (event) => {
//     this.setState({ currentTask: event.target.value });
//   };

//   // Ajoute la tâche actuelle à la liste des tâches lors de la soumission du formulaire
//   handleSubmit = (event) => {
//     event.preventDefault();
//     if (this.state.currentTask.trim()) {
//       // Pour éviter d'ajouter des tâches vides
//       this.setState((prevState) => ({
//         tasks: [...prevState.tasks, prevState.currentTask],
//         currentTask: "",
//       }));
//     }
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.currentTask}
//             onChange={this.handleChange}
//             placeholder="Ajoutez une tâche"
//           />
//           <button type="submit">Ajouter</button>
//         </form>
//         <ul>
//           {this.state.tasks.map((task, index) => (
//             <li key={index}>{task}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default TodoList;




// import  { useState } from "react";

// const TaskInput = () => {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const addTask = () => {
//     if (task.trim() !== "") {
//       setTasks([...tasks, task]);
//       setTask("");
//     }
//   };

// //   const removeTask = (index) => {
// //     setTasks(tasks.filter((_, i) => i !== index));
// //   };

// //   const clearTasks = () => {
// //     setTasks([]);
// //   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Saisissez une tâche"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />
//       <button onClick={addTask}>Ajouter</button>
//       {/* <button onClick={clearTasks}>Tout supprimer</button> */}
//       {/* <ul>
//         {tasks.map((t, index) => (
//           <li key={index}>
//             {t} <button onClick={() => removeTask(index)}>Supprimer</button>
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// };

// export default TaskInput;



import  { useState } from "react";

const SaisieTache = () => {
  const [etat, setEtat] = useState({ tache: "", taches: [] });

  const ajouterTache = (e) => {
    e.preventDefault();
    if (etat.tache.trim() !== "") {
      setEtat({ ...etat, taches: [...etat.taches, etat.tache], tache: "" });
    }
  };

  return (
    <>
      <form onSubmit={ajouterTache}>
        <input
          type="text"
          placeholder="Saisissez une tâche"
          value={etat.tache}
          onChange={(e) => setEtat({ ...etat, tache: e.target.value })}
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {etat.taches.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </>
  );
};

export default SaisieTache;

