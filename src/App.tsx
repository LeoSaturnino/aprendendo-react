import React, { FormEvent, useState } from 'react';
import { Header } from './components/Header';
import { List } from './components/List';
import { TextField } from './components/TextField';
import './index.css';

interface Task {
  name: string;
  description: string;
}

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, { name, description }]);
    setName('');
    setDescription('');
  }

  return (
    <div>
      <Header />
      <div className="Lateral">
        <form onSubmit={onSubmit}>
          <TextField
            id="name"
            label="Nome"
            onChange={(value) => setName(value)}
          />
          <TextField
            id="description"
            label="Descrição"
            onChange={(value) => setDescription(value)}
          />
          <button type="submit">Adicionar</button>
        </form>
      </div>
      <div className="Lateral">
        <List tasks={tasks} />
      </div>
    </div>

  );
}

export default App;
