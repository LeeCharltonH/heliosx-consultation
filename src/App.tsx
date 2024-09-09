import { Suspense, useState } from 'react';
import './App.scss';
// import { Form } from './Components/Form/Form';
import { Footer } from './Components/Layout/Footer';
import { Header } from './Components/Layout/Header';

import { useIsFormComplete } from './stores/consultationStore';
import { Button } from './Components/Button/Button';
import { lazy } from 'react';

const Form = lazy(() => import('./Components/Form/Form'));

const App = () => {
  const [hasStartedConsultation, setHasStartedConsultation] = useState(false);
  const isFormComplete = useIsFormComplete();

  return (
    <div className="App">
      <Header />
      <main>
        {!hasStartedConsultation && (
          <div>
            <h1>Begin Consulatatoin</h1>
            <Button value={'Click to start'} onClick={() => setHasStartedConsultation(true)} />
          </div>
        )}
        {!isFormComplete && hasStartedConsultation && (
          <Suspense fallback={<div>Loading</div>}>
            <Form />
          </Suspense>
        )}
        {isFormComplete && hasStartedConsultation && <h2>Thank you for completing the form</h2>}
      </main>
      <Footer />
    </div>
  );
};

export default App;
