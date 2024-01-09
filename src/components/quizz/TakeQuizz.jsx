"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Nav from "../reusable/Nav";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const base = "https://the-trivia-api.com/v2/questions";
const axios = require("axios");

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function randomStart() {
  let x = Math.floor(Math.random() * 5 + 2);
  return [0, x, -x, 0];
}

const TakeQuizz = () => {
  const [questions, setQuestions] = useState();
  const [answers, setAnswers] = useState();
  const [highlight, setHighlight] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [status, setStatus] = useState(null);
  const [index, setIndex] = useState(-1);
  const [score, setScore] = useState(0);

  function next() {
    if (index + 1 == questions.length) {
      window.localStorage.setItem("Score", score);
      window.location.replace("/quizz/");
      return;
    }

    let ans = questions[index + 1].incorrectAnswers;
    ans.push(questions[index + 1].correctAnswer);
    shuffleArray(ans);
    setAnswers(ans);
    setIndex(index + 1);
  }

  function sleepThenProceed() {
    setHighlight(true);
    setTimeout(() => {
      setHighlight(false);
      next();
    }, 2000);
  }

  function onSelect(value) {
    let chosenAns = answers[value];
    if (chosenAns === questions[index].correctAnswer) {
      setScore(score + 1);
      toast.success("🥳🥳🥳 Wow. You are a genius!");
    } else {
      toast.error("😒😒😒 You wanna explain what happened there?");
    }

    sleepThenProceed();
  }

  useEffect(() => {
    if (!fetched) {
      setFetched(true);
    }
  }, []);

  if ((questions === undefined || questions === null) && !fetched) {
    setFetched(true);
    axios({
      method: "GET",
      url: base,
    })
      .then((resp) => {
        setQuestions(resp.data);
        let ans = resp.data[0].incorrectAnswers;
        ans.push(resp.data[0].correctAnswer);
        shuffleArray(ans);
        setAnswers(ans);
        setStatus(true);
        setIndex(0);
      })
      .catch((err) => {
        setQuestions([]);
        setAnswers([]);
        setStatus(false);
      });
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        rtl={false}
        theme="colored"
      />
      <div className="flex flex-col bg-mainCyan lg:h-[100vh] h-auto w-[100vw]">
        <Nav />
        {(status === null || !status) && (
          <div className="flex h-[90vh] w-[100vw] justify-center items-center">
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-deepGreen animate-spin fill-mainYellow"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {status && status && questions.length > 0 && (
          <div className="flex lg:h-[90vh] gap-10 lg:flex-row flex-col lg:justify-around items-center">
            <div className="bg-white mt-16 lg:mt-0 lg:w-[25vw] w-[50%] h-auto lg:h-[15vh] rounded-2xl shadow-xl flex flex-col items-center">
              <p className="text-slate-950 lg:text-4xl text-2xl font-medium lg:mt-10 mt-5 mb-5 lg:mb-0">
                Score: {score}
              </p>
            </div>

            <div className="bg-white lg:w-[50vw] mb-20 lg:mb-0 w-[90vw] lg:h-[75vh] h-auto rounded-2xl flex flex-col items-center shadow-xl lg:px-16 px-10">
              <p className="text-slate-700 lg:text-4xl text-2xl text-center font-medium mt-10">
                Question {index + 1} of {questions.length}
              </p>
              <p className="text-slate-400 mt-2 text-[16px] lg:text-[18px]">
                Difficulty:{" "}
                <span className="text-mainYellow">
                  {capitalize(questions[index].difficulty)}
                </span>
              </p>

              <p className="mt-10 text-slate-600 text-center">
                {questions[index].question.text}
              </p>

              <div className="flex flex-col mt-10 gap-5 w-full lg:mb-0 mb-10">
                {answers.map((ans, i) => {
                  return (
                    <motion.div
                      animate={{
                        x: randomStart(),
                        transition: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                      whileHover={{
                        scale: 1.05,
                      }}
                      onClick={() => onSelect(i)}
                      key={i}
                      className={`text-black ${
                        highlight
                          ? answers[i] === questions[index].correctAnswer
                            ? "bg-green-500"
                            : "bg-red-600"
                          : "hover:bg-mainYellow"
                      } text-[16px] py-2 rounded-lg px-5 cursor-pointer
                       shadow-lg text-center border border-slate-200`}
                    >
                      {ans}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TakeQuizz;
