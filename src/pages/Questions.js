import Question from "../components/Question";
import { questions } from "./Data";

const Questions = () => {
  return (
    <div className="container-fluid">
      <Question questions={questions} />
    </div>
  );
};

export default Questions;
