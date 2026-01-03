import styled from "styled-components";
import { Form } from "react-router-dom";

const StyledSearchForm = styled(Form)`
  border: 1px solid black;
  margin: 40px auto;
  padding: 20px;
  width: 500px;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  input {
    font-size: 20px;
    width: 400px;
    padding: 10px;
    margin: 5px;
  }

  button {
    background-color: green;
    color: white;
    width: 400px;
    padding: 10px;
    margin: 5px;
    border: none;
    cursor: pointer;
  }

  button:disabled {
    background-color: #9ccc9c;
    cursor: not-allowed;
  }
`;
export default StyledSearchForm;