export default function AnswersItem({
  answerItem: { name, rate, spendTime, feedback }
}) {
  return (
    <li>
      <article className="answer">
        <h3>{name || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{rate}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <span className="answer__line">{spendTime}</span>
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{feedback}</span>
        </p>
      </article>
    </li>
  );
}
