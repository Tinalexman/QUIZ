"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Nav from "../reusable/Nav";

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
  const [questions, setQuestions] = useState([]);

  const [answer, setAnswer] = useState("");
  const [change, setChange] = useState(false);
  const [status, setStatus] = useState(null);
  const [index, setIndex] = useState(-1);

  function next() {
    setIndex(index + 1);
    setAnswer(questions[index].correctAnswer);
    let ans = questions[index].incorrectAnswers;
    ans.push(questions[index].correctAnswer);
    shuffleArray(ans);
    questions[index].answers = ans;
    console.log(questions[index]);
  }

  useEffect(() => {
    if (questions.length === 0) {
      axios({
        method: "GET",
        url: base,
      })
        .then((resp) => {
          setQuestions(resp.data);
          setStatus(true);
          setIndex(0);
          setAnswer(resp.data[0].correctAnswer);
          let ans = resp.data[0].incorrectAnswers;
          ans.push(resp.data[0].correctAnswer);
          shuffleArray(ans);
          resp.data[0].answers = ans;
          console.log(resp.data[0]);
        })
        .catch((err) => {
          setQuestions([]);
          setStatus(false);
        });
    }
  }, []);

  return (
    <div className="flex flex-col bg-mainCyan lg:h-[100vh] h-full w-[100vw]">
      <Nav />
      {(status === null || !status) && (
        <div className="flex h-[90vh] w-[100vw] justify-center items-center">
          <p>Loading</p>
        </div>
      )}
      {status && status && (
        <div className="flex lg:h-[90vh] lg:flex-row flex-col lg:justify-around lg:items-center">
          <div className="bg-white w-[25vw] h-[70vh] rounded-2xl shadow-xl"></div>

          <div className="bg-white w-[50vw] h-[70vh] rounded-2xl flex flex-col items-center shadow-xl px-16">
            <p className="text-slate-700 text-4xl font-medium mt-10">
              Question {index + 1} of {questions.length}
            </p>
            <p className="text-slate-400 mt-2 text-[18px]">
              Difficulty:{" "}
              <span className="text-mainYellow">
                {capitalize(questions[index].difficulty)}
              </span>
            </p>

            <p className="mt-10 text-slate-600 text-center">
              {questions[index].question.text}
            </p>

            <div className="flex flex-col mt-10 gap-5 w-full">
              {questions[index].answers.map((ans, i) => {
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
                    key={i}
                    className="text-black text-[16px] py-2 rounded-lg px-5 cursor-pointer
                           hover:bg-mainYellow shadow-lg text-center border border-slate-200"
                  >
                    {ans}
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              animate={{
                y: ["0%", "10%", "0%"],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                },
              }}
              onClick={() => next()}
              className="bg-deepGreen px-3 py-2 shadow-xl mt-10  w-full lg:w-[200px] hover:bg-mainYellow hover:text-slate-950 font-medium"
            >
              Next
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TakeQuizz;
