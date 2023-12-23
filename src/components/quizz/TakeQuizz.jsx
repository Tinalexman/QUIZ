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

  const [fetched, setFetched] = useState(false);
  const [status, setStatus] = useState(null);
  const [index, setIndex] = useState(-1);
  const [score, setScore] = useState(0);

  function next() {
    let ans = questions[index + 1].incorrectAnswers;
    ans.push(questions[index + 1].correctAnswer);
    shuffleArray(ans);
    setAnswers(ans);
    setIndex(index + 1);  
  }

  function onSelect(value) {
    let chosenAns = answers[value];
    if (chosenAns === questions[index].correctAnswer) {
      setScore(score + 1);
      toast.success("🥳🥳🥳 Wow. You are a genius!");
    } else {
      toast.error("😒😒😒 You wanna explain what happened there?");
    }
    next();
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
            <p>Loading</p>
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
                      className="text-black text-[16px] py-2 rounded-lg px-5 cursor-pointer
                           hover:bg-mainYellow shadow-lg text-center border border-slate-200"
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
