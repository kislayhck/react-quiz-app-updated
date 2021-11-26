import Question from "../components/Question";
import { questions } from "./Data";

const Questions = () => {
  return (
    <div className="">
      <Question questions={questions} />
    </div>
  );
};

export default Questions;
