import React, { useState } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [entradaTarefa, setEntradaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (entradaTarefa.trim()) {
      setTarefas([...tarefas, { texto: entradaTarefa, concluida: false }]);
      setEntradaTarefa('');
    }
  };

  const alternarConclusaoTarefa = (indice) => {
    const novasTarefas = [...tarefas];
    novasTarefas[indice].concluida = !novasTarefas[indice].concluida;
    setTarefas(novasTarefas);
  };

  const removerTarefa = (indice) => {
    const novasTarefas = tarefas.filter((_, i) => i !== indice);
    setTarefas(novasTarefas);
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={entradaTarefa}
        onChange={(e) => setEntradaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa..."
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <ul>
        {tarefas.map((tarefa, indice) => (
          <li key={indice} className={tarefa.concluida ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => alternarConclusaoTarefa(indice)}
            />
            {tarefa.texto}
            <button onClick={() => removerTarefa(indice)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
