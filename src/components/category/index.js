import { useState, useEffect } from "react";
import { Main, Card } from "./style";
import { getTriviaByCategoryId } from "../../api";
import * as Icon from "react-feather";

export function Category(props) {
  const [quizzes, setQuizzes] = useState([]);
  const [answered, setAnswered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    generateTrivia();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      setLoading(false);
      return clearTimeout(timeout);
    }, 1000);
  }, [loading]);

  const generateTrivia = async () => {
    setLoading(true);
    setAnswered(false);
    await getTriviaByCategoryId(props.categoryId).then((response) => {
      setQuizzes(response.results);
      response.results.map((result) => {
        result.incorrect_answers.push(result.correct_answer);
        setAnswers(result.incorrect_answers.sort());
      });
    });
  };

  useEffect(() => {
    quizzes.map((quiz) => setCategoryName(quiz.category));
  }, [quizzes]);

  return (
    <Main>
      {loading ? (
        <img
          src={
            "https://static.wixstatic.com/media/90541a_0f30cc38e553438b9602c278cd37c7ea~mv2.gif"
          }
          alt="Loading"
        />
      ) : (
        <>
          <button onClick={generateTrivia}>
            <Icon.Repeat size={30} />
            Generate new {categoryName} trivia
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
              <div className="card-text">
                <Icon.HelpCircle size={20} />
                <b>Question:</b>
              </div>
              <p>{obj.question}</p>
              <div className="card-text">
                <Icon.AlignCenter size={20} />
                <b>Options:</b>
              </div>
              <div className="card-options">
                {answers.map((answer) => (
                  <>
                    <button
                      onClick={() => setAnswered(true)}
                      style={{
                        backgroundColor:
                          answered && answer === obj.correct_answer
                            ? "green"
                            : "#fe654f",
                      }}
                    >
                      {answer}
                    </button>
                  </>
                ))}
              </div>
            </Card>
          ))}
        </>
      )}
    </Main>
  );
}
