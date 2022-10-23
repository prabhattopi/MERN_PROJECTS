
import { Box, Typography,Button} from "@mui/material";
import SelectField from "../components/SelectField";
import TextFields from "../components/TextFields";
import useAxios from "../hooks/useAxios";
const Settings = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()

    }
    const {response,error,loading}=useAxios({url:"/api_category"})
  return (
    <>
        <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
       <form onSubmit={handleSubmit}>
        <SelectField label="Category"/>       
        <SelectField label="Difficulty"/>       
        <SelectField label="Type"/>       
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