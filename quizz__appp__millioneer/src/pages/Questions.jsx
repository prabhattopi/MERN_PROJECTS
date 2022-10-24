import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";
import { decode } from "html-entities";
import { useNavigate } from "react-router-dom";
import { handleScoreChange } from "../redux/action";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Questions = () => {
  const {
    question_category,
    question_difficulty,
    amount_of_question,
    question_type,
    score,
  } = useSelector((state) => state);
  const navigate=useNavigate()
  const dispatch=useDispatch()

  let apiUrl = `/api.php?amount=${amount_of_question}`;
  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }
  const { response,error, loading } = useAxios({ url: apiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);
  // console.log(options);
  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answer = [...question.incorrect_answers];
      answer.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answer);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }
  
  
  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if(e.target.textContent===question.correct_answer){
      dispatch(handleScoreChange(score+1))

    }
    if (questionIndex + 1 < response.results.length) {
      setQuestionIndex(questionIndex + 1);
    }
    else {
      navigate("/score")

    }
  };

  return (
    <Box>
      <Typography variant="h4">Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>
    
        {decode(response?.results[questionIndex].question)}
      </Typography>

      {options?.map((data, id) => (
        <Box mt={2} key={id}>
          <Button onClick={handleClickAnswer} variant="contained">
            {decode(data)}
          </Button>
        </Box>
      ))}
      <Box mt={5}>
        Score:{score}/{response.results.length}
      </Box>
    </Box>
  );
};

export default Questions;
