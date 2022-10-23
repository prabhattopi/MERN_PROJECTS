import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";


function getRandomInt(max){
  return Math.floor(Math.random()*Math.floor(max))

}
const Questions = () => {
  const {
  question_category,
  question_difficulty,
  amount_of_question,
  question_type
  }=useSelector(state=>state)

  let apiUrl=`/api.php?amount=${amount_of_question}`;
  if(question_category){
    apiUrl=apiUrl.concat(`&category=${question_category}`)
  }
  if(question_type){
    apiUrl=apiUrl.concat(`&type=${question_type}`)
  }
  const {response,error,loading}=useAxios({url:apiUrl})
  const [questionIndex,setQuesionIndex]=useState(0);
  const [options,setOptions]=useState([])
  useEffect(()=>{
    if(response?.results.length){
      const question=response.results[questionIndex]
      let answer=[...question.incorrect_answers]
      // answer.splice
    }
  },[response])

  if(loading){
    return (
      <Box mt={20}>
        <CircularProgress/>

      </Box>
    )
  }
 

  return (
    <Box>
      <Typography variant="h4">Questions {questionIndex+1}</Typography>
      <Typography mt={5}>{response.results[questionIndex].question}</Typography>
      <Box mt={2}>
        <Button variant="contained">Answer 1</Button>
      </Box>
      <Box mt={2}>
        <Button variant="contained">Answer 1</Button>
      </Box>
      <Box mt={5}>
        Score: 2/6
      </Box>
    </Box>
  );
};

export default Questions;
