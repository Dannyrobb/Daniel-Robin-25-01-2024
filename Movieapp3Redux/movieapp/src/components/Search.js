// src/components/Search.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete } from "@mui/material";
import { setInput } from "../redux/actions";
import autocomplete from "../api/autocomplete";
import { ToastContainer, toast } from "react-toastify";
import { TextField } from "@mui/material";
const Search = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input);

  const handleApi = async (e) => {
    const inputValue = e.target.value;
    try {
      if (inputValue.length < 3) {
        dispatch(setInput(""));
        return;
      }
      const newData = await autocomplete(inputValue);
      dispatch(setInput(newData.Search || []));
    } catch (error) {
      toast("An error occurred while searching. Please try again.");
    }
  };

  const handleOptionSelected = (option) => {
    dispatch(setInput(option ? option : ""));
  };

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={input}
        noOptionsText={input.length > 2 ? "No movies found..." : "Enter at least 3 characters"}
        getOptionLabel={(option) => `${option.Title} - ${option.Year}  ` || ""}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} onInput={handleApi} label="Movie" />}
        onInputChange={(event, newInputValue) => {
          dispatch(setInput(newInputValue));
        }}
        onChange={(event, newValue) => {
          handleOptionSelected(newValue);
        }}
      />
      <ToastContainer />
    </div>
  );
};

export default Search;
