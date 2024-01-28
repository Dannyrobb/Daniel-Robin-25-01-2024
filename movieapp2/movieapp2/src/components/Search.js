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
    try {
      const newOptions = await autocomplete(inputVal);
      setOptions(newOptions);
    } catch (error) {
      toast("An error occurred while searching. Please try again.");
    }
  };

  const handleOptionSelected = (option) => {
    dispatch(setInputValue(option));
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        mt: 3,
      }}
      noValidate
      autoComplete="on"
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options.Search || []}
        noOptionsText={options && options.Error == "Movie not found!" ? "no movies found" : "Search...."}
        getOptionLabel={(option) => `${option.Title} - ${option.Year}  ` || ""}
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
