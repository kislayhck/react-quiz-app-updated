import Question from "../components/Question";
import { questions } from "./Data";
import { useLocation } from 'react-router-dom'

const Questions = () => {
  const location = useLocation();

  const allData = location.state;

  return (
    <div className="container-fluid">
      <Question questions={questions} allData={allData} />
    </div>
  );
};

export default Questions;
