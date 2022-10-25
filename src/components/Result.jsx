export function Result({ correct, questions }) {
	return (
	  <div className="result">
		 <img src="https://cdn-icons-png.flaticon.com/512/5511/5511415.png" alt="congrats"/>
		 <h2>Количество верных ответов: {correct} из {questions.length}</h2>
		 <a href="/"><button>Попробовать снова</button></a>
	  </div>
	);
 }