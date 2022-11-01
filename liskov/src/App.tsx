import "./App.css";
import { Button } from './components/Button';
import { ButtonSize } from './components/ButtonSize';

function App() {
	return (
		<div className="App">
      <h1>Principio de sustitución de Liskov (LSP) 👀</h1>
      <Button color="secondary" size="medium">Button</Button>
      <ButtonSize isBig={false}>Button</ButtonSize>
		</div>
	);
}

export default App;
