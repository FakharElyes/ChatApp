import { ChatEngine } from 'react-chat-engine';



import './App.css';

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="{projectID}"
      userName="{localStorage.getItem('username')}"
      userSecret="{localStorage.getItem('password')}"
      />
  );
}

export default App;
