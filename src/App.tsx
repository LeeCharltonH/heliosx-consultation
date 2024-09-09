import './App.css';
import { Form } from './Components/Form/Form';
import { Header } from './Components/Layout/Header';
import { Footer } from './Components/Layout/Header copy';
import { useIsFormComplete } from './stores/consultationStore';

const App = () => {
  const isFormComplete = useIsFormComplete();
  console.log({ isFormComplete });

  return (
    <div className="App">
      <Header />
      {!isFormComplete && <Form />}
      {isFormComplete && <h2>Complete</h2>}
      <Footer />
    </div>
  );
};

export default App;
