import { Route, Routes } from "react-router-dom";
import FinalScore from "./pages/FinalScore";
import Questions from "./pages/Questions";
import Settings from "./pages/Settings";

import { Container, Box } from "@mui/material";
function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Box text Align="center" mt={5}>
          <Routes>
            <Route path="" element={<Settings />} />

            <Route path="/questions" element={<Questions />} />
            <Route path="/score" element={<FinalScore />} />
          </Routes>
        </Box>
      </Container>
    </>
  );
}

export default App;
