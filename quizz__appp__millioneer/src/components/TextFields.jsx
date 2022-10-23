
import {Box,FormControl,TextField} from "@mui/material"

const TextFields = () => {
    const handleChange=()=>{

    }
  return (
   <Box mt={3} width="100%">
    <FormControl fullWidth size="small">
        <TextField onChange={handleChange} variant="outlined" label="Amount of Question"
        type="number"
        size="small"
        />
    </FormControl>
   </Box>
  )
}

export default TextFields