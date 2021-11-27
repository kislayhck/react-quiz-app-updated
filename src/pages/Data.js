import steve from "../assets/steve.jpg";
import elon from "../assets/elon.jpeg";
import richard from "../assets/richard.jpg";
import robert from "../assets/robert.jpeg";
import successPeop from "../assets/book4.webp";
import overnightsuccess from "../assets/book2.webp";
import miracle from "../assets/book2 (1).webp";
import club from "../assets/book3.webp";
import goodvibes from "../assets/book6.webp";
import selfdiscipline from "../assets/book5.webp";
import powerofnow from "../assets/book7.webp";
import nevereat from "../assets/book8.webp";
import growrich from "../assets/book9.webp";
import masteryourmotivation from "../assets/book10.webp";
import richestman from "../assets/book11.webp";
import big from "../assets/book12.webp";

export const questions = [
  {
    questionText: "Select your gender",
    answerOptions: [
      // { card: false },
      { answerText: "Male", isCorrect: true, AnsImoji: "👨" },
      { answerText: "Female", isCorrect: true, AnsImoji: "👩" },
    ],
  },
  {
    questionText: "Set up the goal you want to achieve!",
    answerOptions: [
      // { card: false },
      {
        answerText: "To become better in a short time",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "Work through your strengths and weaknesses",
        isCorrect: true,
        AnsImoji: "🕘",
      },
    ],
  },
  {
    questionText: "What is your age?",
    answerOptions: [
      // { card: false },
      {
        answerText: " 18-29 years ",
        isCorrect: true,
        AnsImoji: "🌙",
      },
      {
        answerText: " 30-39 years ",
        isCorrect: true,
        AnsImoji: "🌔",
      },

      {
        answerText: " 40-49 years ",
        isCorrect: true,
        AnsImoji: "🌗",
      },
      {
        answerText: " 50+ years ",
        isCorrect: true,
        AnsImoji: "🌒",
      },
    ],
  },

  {
    questionText: "Set your goal on timing",
    answerOptions: [
      // { card: false },
      {
        answerText: " Easy ",
        isCorrect: true,
        AnsImoji: "🐤",
      },
      {
        answerText: " Common ",
        isCorrect: true,
        AnsImoji: "🎯",
      },

      {
        answerText: " Serious ",
        isCorrect: true,
        AnsImoji: "💪",
      },
      {
        answerText: " Intensive ",
        isCorrect: true,
        AnsImoji: "🚀",
      },
    ],
  },
  {
    questionText:
      "Do you agree with the statement below ? I am strongly convinced that learning and personal growth are important, but it is hard to stay motivated without a clear plan.",
    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },
  {
    questionText:
      "Do you agree with the statement below ? Usually, I don’t have time to read an entire book. It's hard for me to finish long reads.",
    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },
  {
    questionText:
      "Do you agree with the statement below ? It is difficult for me to keep the focus on the same task for a long time.",

    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },
  {
    questionText: "Does this book seem interesting to you?",
    questionCard: true,
    questionImg: successPeop,
    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },
  {
    questionText: "Which of these people inspires you the most?",
    questionCard: false,
    answerOptions: [
      {
        answerText: " Jeff Bezos",
        img: steve,
        isCorrect: true,
      },
      { answerText: " Elon Musk", img: elon, isCorrect: true },
      {
        answerText: " Bill Gates",
        img: richard,
        isCorrect: true,
      },
      { answerText: "Tony Stark", img: robert, isCorrect: true },
    ],
  },
  {
    questionText: "It is difficult for me to make decisions quickly.",
    answerOptions: [
      // { card: false },
      {
        answerText: " Not True",
        isCorrect: true,
        AnsImoji: "😃",
      },
      {
        answerText: " Partially True",
        isCorrect: true,
        AnsImoji: "🙄",
      },
      {
        answerText: " Completely True",
        isCorrect: true,
        AnsImoji: "😒",
      },
    ],
  },
  {
    questionText:
      "I feel like I could have done better by improving my time management.",
    answerOptions: [
      // { card: false },
      {
        answerText: " I definitely have to improve it",
        isCorrect: true,
        AnsImoji: "😛",
      },
      {
        answerText: " Not sure it is my case",
        isCorrect: true,
        AnsImoji: "🤔",
      },
      {
        answerText: " It's okay",
        isCorrect: true,
        AnsImoji: "😃",
      },
    ],
  },
  {
    questionText:
      "I feel unconfident and doubt my skills and abilities because of my past mistakes.",
    answerOptions: [
      // { card: false },
      {
        answerText: " Not True",
        isCorrect: true,
        AnsImoji: "😃",
      },
      {
        answerText: " Partially True",
        isCorrect: true,
        AnsImoji: "🙄",
      },
      {
        answerText: " Completely True",
        isCorrect: true,
        AnsImoji: "😒",
      },
    ],
  },
  {
    questionText: "Does this book seem interesting to you?",
    questionCard: true,
    questionImg: overnightsuccess,
    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },
  {
    questionText: "What about this one?",
    questionCard: true,
    questionImg: miracle,
    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },
  {
    questionText: "Would you love to read this book?",
    questionCard: true,
    questionImg: club,
    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },

  {
    questionText:
      "Do you often go so deep into your thoughts that you ignore everything and everyone around you?",
    questionCard: false,
    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },
  {
    questionText:
      "I need to achieve a better mutual understanding in my current and further relationships.",
    answerOptions: [
      // { card: false },
      {
        answerText: " I don't want it",
        isCorrect: true,
        AnsImoji: "👎",
      },
      {
        answerText: " It sounds pretty relevant",
        isCorrect: true,
        AnsImoji: "👌",
      },
      {
        answerText: " It's what I aim for",
        isCorrect: true,
        AnsImoji: "👍",
      },
    ],
  },

  {
    questionText: "I tend to lose my boundaries in a relationship.",
    answerOptions: [
      // { card: false },
      {
        answerText: " Disagree",
        isCorrect: true,
        AnsImoji: "😃",
      },
      {
        answerText: " Somewhere agree",
        isCorrect: true,
        AnsImoji: "🙄",
      },
      {
        answerText: " Strongly agree",
        isCorrect: true,
        AnsImoji: "😒",
      },
    ],
  },

  {
    questionText: "And what about this one?",
    questionCard: true,
    questionImg: selfdiscipline,
    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },

  {
    questionText: "Does this book seem interesting to you?",
    questionCard: true,
    questionImg: goodvibes,
    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },

  {
    questionText: "I often feel that I can achieve greater results.",
    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },

  {
    questionText: "I would love to achieve a stable work-life balance.",
    answerOptions: [
      // { card: false },
      {
        answerText: "No,I'm okay",
        isCorrect: true,
        AnsImoji: "🍀",
      },
      {
        answerText: "Hard to say",
        isCorrect: true,
        AnsImoji: "😥",
      },
      {
        answerText: "Yes,It's entirely true",
        isCorrect: true,
        AnsImoji: "🤕",
      },
    ],
  },

  {
    questionText: "I believe I deserve more and I am capable of it.",
    answerOptions: [
      // { card: false },
      {
        answerText: "Disagree",
        isCorrect: true,
        AnsImoji: "😒",
      },
      {
        answerText: "Somewhere agree",
        isCorrect: true,
        AnsImoji: "🙄",
      },
      {
        answerText: "Strongly agree",
        isCorrect: true,
        AnsImoji: "😃",
      },
    ],
  },

  {
    questionText: "Does this book seem interesting to you?",
    questionCard: true,
    questionImg: powerofnow,
    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },

  {
    questionText: "And what about this one?",
    questionCard: true,
    questionImg: nevereat,
    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },

  {
    questionText: "Would you love to learn more about this book?",
    questionCard: true,
    questionImg: growrich,
    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },

  {
    questionText: "Happiness is my usual state of mind.",
    answerOptions: [
      // { card: false },
      {
        answerText: "Disagree",
        isCorrect: true,
        AnsImoji: "😒",
      },
      {
        answerText: "Somewhere agree",
        isCorrect: true,
        AnsImoji: "🙄",
      },
      {
        answerText: "Strongly agree",
        isCorrect: true,
        AnsImoji: "😃",
      },
    ],
  },

  {
    questionText:
      "I’m convinced I will achieve much better results with positive thinking.",
    answerOptions: [
      // { card: false },
      {
        answerText: "Disagree",
        isCorrect: true,
        AnsImoji: "🤡",
      },
      {
        answerText: "Somewhere agree",
        isCorrect: true,
        AnsImoji: "😼",
      },
      {
        answerText: "Strongly agree",
        isCorrect: true,
        AnsImoji: "😡",
      },
    ],
  },

  {
    questionText: "Sometimes, I can't force myself to do anything.",
    answerOptions: [
      // { card: false },
      {
        answerText: "Disagree",
        isCorrect: true,
        AnsImoji: "💪",
      },
      {
        answerText: "Somewhere agree",
        isCorrect: true,
        AnsImoji: "😅",
      },
      {
        answerText: "Strongly agree",
        isCorrect: true,
        AnsImoji: "😖",
      },
    ],
  },

  {
    questionText: "Does this book seem interesting to you?",
    questionCard: true,
    questionImg: masteryourmotivation,
    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },

  {
    questionText: "And what about this one?",
    questionCard: true,
    questionImg: richestman,
    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },

  {
    questionText: "Would you love to read this book?",
    questionCard: true,
    questionImg: big,
    answerOptions: [
      // { card: false },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👍",
      },
      {
        answerText: "",
        isCorrect: true,
        AnsImoji: "👎",
      },
    ],
  },
];
