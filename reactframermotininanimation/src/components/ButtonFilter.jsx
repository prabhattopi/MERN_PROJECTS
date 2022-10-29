import { useContext } from "react";
import { useState } from "react";
import { MovieContext } from "../App";
import { generes } from "../utils";

const ButtonFilter = () => {
  const [tabActive, setTabActive] = useState(0);
  const { popularMovie, setFiltered } = useContext(MovieContext);

  const handleClick = (id) => {
  
    setTabActive(id);
    const filterdMovie=popularMovie.filter(movie=>movie.genre_ids.includes(id))
    console.log(filterdMovie)
    if(id==0){
      setFiltered(popularMovie)
    }
    else{
      setFiltered(filterdMovie)
    }

  };
  return (
    <div className="button-wrapper">
      {generes.map((item) => (
        <button
          className={tabActive == item.id ? "active" : undefined}
          onClick={() => handleClick(item.id)}
          key={item.id}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default ButtonFilter;
