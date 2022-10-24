import { Box, Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handleAmountChange, handleScoreChange } from "../redux/action"


const FinalScore = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleClickBack=()=>{
  dispatch(handleScoreChange(0))
  dispatch(handleAmountChange(50))
  navigate("/")
  }
  const {score}=useSelector(state=>state)
  return (
  <Box mt={30}>
 <Typography variant="h3" fontWeight="bold" mb={3}>Final Score: {score}</Typography>
 <Button variant="outlined" onClick={handleClickBack}>Go Back</Button>
  </Box>
  )
}

export default FinalScore