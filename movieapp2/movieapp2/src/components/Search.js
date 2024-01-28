// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import { Autocomplete } from "@mui/material";
// import autocomplete from "../api/autocomplete";
// import { ToastContainer, toast } from "react-toastify";

// const Search = ({ setInput, input }) => {
//   const [options, setOptions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleApi = async (e) => {
//     const inputValue = e.target.value;
//     console.log(input);
//     try {
//       if (inputValue.length < 3) {
//         setOptions([]);
//         return;
//       }
//       setLoading(true);
//       const newOptions = await autocomplete(inputValue);
//       setOptions(newOptions.Search || []);
//     } catch (error) {
//       toast("An error occurred while searching. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOptionSelected = (option) => {
//     setInput(option ? option : "");
//   };

//   return (
//     <Box
//       component="form"
//       sx={{
//         "& > :not(style)": { m: 1, width: "25ch" },
//       }}
//       noValidate
//       autoComplete="on"
//     >
//       <Autocomplete
//         disablePortal
//         id="combo-box-demo"
//         options={options}
//         noOptionsText={input.length > 2 ? "No movies found..." : "Enter at least 3 characters"}
//         getOptionLabel={(option) => `${option.Title} - ${option.Year}  ` || ""}
//         sx={{ width: 300 }}
//         renderInput={(params) => <TextField {...params} onInput={handleApi} label="Movie" />}
//         onInputChange={(event, newInputValue) => {
//           setInput(newInputValue);
//         }}
//         onChange={(event, newValue) => {
//           handleOptionSelected(newValue);
//         }}
//       />

//       <ToastContainer />
//     </Box>
//   );
// };

// export default Search;

// >
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Autocomplete } from "@mui/material";
import autocomplete from "../api/autocomplete";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setInputValue } from "../redux/Slices/inputSlice";
const Search = () => {
  const dispatch = useDispatch();

  const [options, setOptions] = useState([]);

  const handleApi = async (e) => {
    const inputVal = e.target.value;
    console.log(options);
    try {
      // if (inputVal.length < 3) {
      //   setOptions([]);
      //   return;
      // }
      const newOptions = await autocomplete(inputVal);
      console.log(newOptions);
      setOptions(newOptions.Search || []);
    } catch (error) {
      toast("An error occurred while searching. Please try again.");
    }
  };

  const handleOptionSelected = (option) => {
    console.log(option);
    dispatch(setInputValue(option));
  };
  console.log();
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="on"
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        noOptionsText={options.length == 0 ? "Keep Searching.." : "no movies found"}
        getOptionLabel={(option) => `${option.Title} - ${option.Year}  ` || ""}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} onInput={handleApi} label="Movie" />}
        disableClearable={true}
        onChange={(event, newValue) => {
          handleOptionSelected(newValue);
        }}
      />

      <ToastContainer />
    </Box>
  );
};

export default Search;
