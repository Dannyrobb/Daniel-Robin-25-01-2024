import { setInputValue } from "../redux/Slices/inputSlice";
export const handleRedirectOnClick = (favorite, dispatch, navigate) => {
  dispatch(setInputValue(favorite));
  navigate("/");
};

export const handleExpandClick = (index, expandedCard, setExpandedCard) => {
  setExpandedCard(expandedCard === index ? null : index);
};
