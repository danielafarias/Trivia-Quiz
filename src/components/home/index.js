import { useState, useEffect } from "react";
import { Main, Card } from "./style";
import * as Icon from "react-feather";
import { getRandomTrivia } from "../../api";

export function Home() {
  const [quizzes, setQuizzes] = useState([]);

  const generateRandom = async () => {
    await getRandomTrivia().then((response) => {
      setQuizzes(response.results);
    });
  };
console.log(quizzes)
// category: "General Knowledge"
// correct_answer: "Hairy"
// difficulty: "medium"
// incorrect_answers: (3) ['Rude', 'Funny', 'Tall']
// question: "What is the defining characteristic of someone who is described as hirsute?"
// type: "multiple"
  return (
    <Main>
      <button onClick={generateRandom}>
        <Icon.Repeat size={30} />
        Generate random trivia
      </button>
      {quizzes.map((obj, i) => (
        <Card key={i}>
          <header>
            <div className="card-info">
              <Icon.Tag size={20} />
              <p>{obj.category}</p>
            </div>
            <div className="card-info">
              <Icon.Star size={20} />
              <p>{obj.difficulty}</p>
            </div>
          </header>
          <Icon.HelpCircle size={20} />
          <b>Question:</b>
          <p>{obj.question}</p>
          <Icon.AlignCenter size={20} />
          <b>Options:</b>
          {
            obj.incorrect_answers.map(answers => 
              <>
              <p>{answers}</p>
              </>
            )
          }
          <p>{obj.correct_answer}</p>
        </Card>
      ))}
    </Main>
  );
}
