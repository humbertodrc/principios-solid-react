import {Title} from "./components/Title";
import { TitleWithButton } from './components/TitleWithButton';

function App() {
	const onCLick = () => {
		console.log("withButton");
	};

	return (
		<div className="App">
			<TitleWithButton title="Hola Camada 1 🙂❤" buttonText='button' onClick={ onCLick} />
		</div>
	);
}

export default App;
