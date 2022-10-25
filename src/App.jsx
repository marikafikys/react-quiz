import React from 'react';
import './index.scss';
import { questions } from './data/questions';
import { Game } from './components/Game';
import { Result } from './components/Result';

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} questions={questions} question={question} onClickVariant={onClickVariant}/>
      ) : (
        <Result correct={correct} questions={questions}/>
      )}
    </div>
  );
}

export default App;