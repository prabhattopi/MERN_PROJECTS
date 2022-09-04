import React,{useState,useEffect} from 'react'
import {Box,Flex,Center,chakra} from "@chakra-ui/react"
import {Search2Icon} from "@chakra-ui/icons"
import axios from "axios"
import SearchResults from './SearchResults'

const Search = () => {
    const [queryText,setQueryText]=useState("")
    const [searchResult,setSearchResult]=useState([])

    const handleChange=(e)=>setQueryText(e.target.value)
    
    
    const getData=async(text)=>{
        let res= await axios.get(`http://localhost:4000/search?title=${text}`)
        setSearchResult(res.data)
    }
    useEffect(()=>{
        if(!queryText){
            setSearchResult([])
            return
           
      
          
        }
        getData(queryText)
        console.log(searchResult)

    },[queryText])


  return (
    <>
    <Box  sx={{
        rounded:"lg",
        overflow:"hidden",
        bg:"transparent",
        shadow:"lg",
        maxWidth:"600px",
        width:"90%",
        mt:"1rem",
        mx:"auto"

    }}>
        <Flex
        pos="relative" align="strech"
        >
            <chakra.input type="text" 
            autoComplete="off"
            autoCorrect="off"
            spellCheck='false'
            maxLength={64}   
            sx={
            {
                w:"100%",
                h:"68px",
                pl:"68px",
                fontWeight:"medium",
                outline:0
,            }
            }
                 placeholder="Enter your movie name"
                 value={queryText}
                 onChange={handleChange}
                 
                 />
            <Center pos="absolute" left={7} h="68px">
                <Search2Icon color="teal.500" boxSize="20px"/>
            </Center>

        </Flex>
        {queryText && (
<Box maxH='70vh' p='0' overflowY='auto'>
<Box px={4}>
<Box borderTopWidth='1px' pt={2} pb={4}>
<SearchResults searchResult={searchResult} />
</Box>
</Box>
</Box>
)} 

    </Box>
</>
  )
}

export default Search