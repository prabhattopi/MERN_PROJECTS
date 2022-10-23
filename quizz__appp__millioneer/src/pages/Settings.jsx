
import { Box, Typography,Button, CircularProgress} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SelectField from "../components/SelectField";
import TextFields from "../components/TextFields";
import useAxios from "../hooks/useAxios";

const Settings = () => {
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate("/questions")

    }
    const {response,error,loading}=useAxios({url:"/api_category.php"})
    if(loading){
        return (
            <Box mt={20}>
      <CircularProgress/>
            </Box>
        )
    }
    if(error){
        return (
            <Typography variant="h6" mt={20} color="red">
           SomeThing Went is Worng
            </Typography>
        )
    }

    const difficultyOptions=[
        {id:"easy",name:"Easy"},
        {id:"medium",name:"Medium"},
        {id:"hard",name:"Hard"}
    ]

    const typeOptions=[
        {id:"multiple",name:"Mulitiple Choice"},
        {id:"boolean",name:"True/False"},
     
    ]
  return (
    <>
        <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
       <form onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label="Category"/>       
        <SelectField options={difficultyOptions} label="Difficulty"/>       
        <SelectField options={typeOptions} label="Type"/>       
         <TextFields/>
        <Box mt={3} width="100%">
            <Button fullWidth variant="contained" type="submit">
                Get Started
            </Button>
        </Box>
        </form>
    </>
   
  )
}

export default Settings