import AnswersItem from "./AnswersItem";

export default function AnswersList({ values }) {
  console.log("Inside AnswersList: ", values);

  return (
    <ul>
      {values.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}
