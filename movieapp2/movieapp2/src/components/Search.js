import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Autocomplete } from "@mui/material";
import autocomplete from "../api/autocomplete";
import { ToastContainer, toast } from "react-toastify";

const Search = ({ setInput, input }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleApi = async (e) => {
    const inputValue = e.target.value;
    try {
      if (inputValue.length < 3) {
        setData([]);
        return;
      }
      setLoading(true);
      const newData = await autocomplete(inputValue);
      setData(newData.Search || []);
    } catch (error) {
      toast("An error occurred while searching. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOptionSelected = (option) => {
    setInput(option ? option : "");
  };

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
        options={data}
        getOptionLabel={(option) => `${option.Title} - ${option.Year}  ` || ""}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} onInput={handleApi} label="Movie" />}
        onInputChange={(event, newInputValue) => {
          setInput(newInputValue);
        }}
        onChange={(event, newValue) => {
          handleOptionSelected(newValue);
        }}
      />

      <ToastContainer />
    </Box>
  );
};

export default Search;
