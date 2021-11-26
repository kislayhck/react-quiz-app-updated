import steve from "../assets/steve.jpg";
import elon from "../assets/elon.jpeg";
import richard from "../assets/richard.jpg";
import robert from "../assets/robert.jpeg";

export const questions = [
  {
    questionText: "What is the capital of France?",
    questionCard: false,
    answerOptions: [
      // { card: false },
      { answerText: "New York", isCorrect: false, AnsImoji: "😅" },
      { answerText: "London", isCorrect: false, AnsImoji: "😄" },
      { answerText: "Paris", isCorrect: true, AnsImoji: "😏" },
      { answerText: "Dublin", isCorrect: false, AnsImoji: "😭" },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    questionCard: false,
    answerOptions: [
      {
        answerText: "Jeff Bezos",
        img: steve,
        isCorrect: false,
      },
      { answerText: "Elon Musk", img: robert, isCorrect: true },
      {
        answerText: "Bill Gates",
        img: richard,
        isCorrect: false,
      },
      { answerText: "Tony Stark", img: elon, isCorrect: false },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    questionCard: false,
    answerOptions: [
      // { card: false },
      { answerText: "Apple", isCorrect: true, AnsImoji: "😄" },
      { answerText: "Intel", isCorrect: false, AnsImoji: "😄" },
      { answerText: "Amazon", isCorrect: false, AnsImoji: "😄" },
      { answerText: "Microsoft", isCorrect: false, AnsImoji: "😄" },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      // { card: false },
      { answerText: "1", isCorrect: false, AnsImoji: "🛩️" },
      { answerText: "4", isCorrect: false, AnsImoji: "💁‍♀️" },
      { answerText: "6", isCorrect: false, AnsImoji: "🏵️" },
      { answerText: "7", isCorrect: true, AnsImoji: "🚀" },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    questionCard: true,
    questionImg: steve,
    answerOptions: [
      { answerText: "👍", isCorrect: true },
      { answerText: "👎", isCorrect: false },
    ],
  },
];
