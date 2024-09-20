import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Title from "../components/Title";
import eligibleCSS from '../styles/Eligible.module.css';

const Eligible = () => {

    const navigate = useNavigate()

    const [count, setCount] = useState(0);
    const [answers, setAnswers] = useState({
        data: null,
        trends: null,
        skills: null,
        software: null,
        complex: null,
        detail: null,
        impact: null,
    });

    console.log(count);

    const handleAnswerChange = (question, value) => {
        // If the user is changing the answer to "true", increment count. Otherwise, decrement.
        if (answers[question] === null) {
        // No answer selected previously
        setCount((prev) => (value === "true" ? prev + 1 : prev));
        } else if (answers[question] === "false" && value === "true") {
        setCount((prev) => prev + 1);
        } else if (answers[question] === "true" && value === "false") {
        setCount((prev) => prev - 1);
        }

        // Update the answer state
        setAnswers((prev) => ({
        ...prev,
        [question]: value,
        }));
    };

    const checkEligibility = () => {
        if (count >= 5) {
            navigate("/pass")
        }
        else {
            navigate("/fail")
        }
    }

  return (
    <>
      <Title />

      <main className={eligibleCSS.eligible_main}>

        <h1>Check Your Eligibility</h1>

        <ol className={eligibleCSS.questions_list}>

          <li className={eligibleCSS.question}>

            <p>Do you like working with data?</p>

            <div className={eligibleCSS.true}>
              <input
                type="radio"
                name="data"
                id="data-true"
                onChange={() => handleAnswerChange("data", "true")}
                checked={answers.data === "true"}
              />
              <label htmlFor="data-true">Yes</label>
            </div>

            <div className={eligibleCSS.false}>
              <input
                type="radio"
                name="data"
                id="data-false"
                onChange={() => handleAnswerChange("data", "false")}
                checked={answers.data === "false"}
              />
              <label htmlFor="data-false">No</label>
            </div>
          </li>

          <li className={eligibleCSS.question}>
            <p>Are you interested in population trends?</p>

            <div className={eligibleCSS.true}>
              <input
                type="radio"
                name="trends"
                id="trends-true"
                onChange={() => handleAnswerChange("trends", "true")}
                checked={answers.trends === "true"}
              />
              <label htmlFor="trends-true">Yes</label>
            </div>

            <div className={eligibleCSS.false}>
              <input
                type="radio"
                name="trends"
                id="trends-false"
                onChange={() => handleAnswerChange("trends", "false")}
                checked={answers.trends === "false"}
              />
              <label htmlFor="trends-false">No</label>
            </div>
          </li>

          <li className={eligibleCSS.question}>
            <p>Do you have strong analytical skills?</p>

            <div className={eligibleCSS.true}>
              <input
                type="radio"
                name="skills"
                id="skills-true"
                onChange={() => handleAnswerChange("skills", "true")}
                checked={answers.skills === "true"}
              />
              <label htmlFor="skills-true">Yes</label>
            </div>

            <div className={eligibleCSS.false}>
              <input
                type="radio"
                name="skills"
                id="skills-false"
                onChange={() => handleAnswerChange("skills", "false")}
                checked={answers.skills === "false"}
              />
              <label htmlFor="skills-false">No</label>
            </div>
          </li>

          <li className={eligibleCSS.question}>
            <p>Are you comfortable using statistical software?</p>

            <div className={eligibleCSS.true}>
              <input
                type="radio"
                name="software"
                id="software-true"
                onChange={() => handleAnswerChange("software", "true")}
                checked={answers.software === "true"}
              />
              <label htmlFor="software-true">Yes</label>
            </div>

            <div className={eligibleCSS.false}>
              <input
                type="radio"
                name="software"
                id="software-false"
                onChange={() => handleAnswerChange("software", "false")}
                checked={answers.software === "false"}
              />
              <label htmlFor="software-false">No</label>
            </div>
          </li>

          <li className={eligibleCSS.question}>
            <p>Do you enjoy solving complex problems?</p>

            <div className={eligibleCSS.true}>
              <input
                type="radio"
                name="complex"
                id="complex-true"
                onChange={() => handleAnswerChange("complex", "true")}
                checked={answers.complex === "true"}
              />
              <label htmlFor="complex-true">Yes</label>
            </div>

            <div className={eligibleCSS.false}>
              <input
                type="radio"
                name="complex"
                id="complex-false"
                onChange={() => handleAnswerChange("complex", "false")}
                checked={answers.complex === "false"}
              />
              <label htmlFor="complex-false">No</label>
            </div>
          </li>

          <li className={eligibleCSS.question}>
            <p>Are you detail-oriented?</p>

            <div className={eligibleCSS.true}>
              <input
                type="radio"
                name="detail"
                id="detail-true"
                onChange={() => handleAnswerChange("detail", "true")}
                checked={answers.detail === "true"}
              />
              <label htmlFor="detail-true">Yes</label>
            </div>

            <div className={eligibleCSS.false}>
              <input
                type="radio"
                name="detail"
                id="detail-false"
                onChange={() => handleAnswerChange("detail", "false")}
                checked={answers.detail === "false"}
              />
              <label htmlFor="detail-false">No</label>
            </div>
          </li>

          <li className={eligibleCSS.question}>
            <p>Do you like working on projects with long-term impact?</p>

            <div className={eligibleCSS.true}>
              <input
                type="radio"
                name="impact"
                id="impact-true"
                onChange={() => handleAnswerChange("impact", "true")}
                checked={answers.impact === "true"}
              />
              <label htmlFor="impact-true">Yes</label>
            </div>

            <div className={eligibleCSS.false}>
              <input
                type="radio"
                name="impact"
                id="impact-false"
                onChange={() => handleAnswerChange("impact", "false")}
                checked={answers.impact === "false"}
              />
              <label htmlFor="impact-false">No</label>
            </div>
          </li>
        </ol>



        <button type="button" onClick={checkEligibility} className="custom_btn">Check Eligibility</button>
      </main>
    </>
  );
};

export default Eligible;
