import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .rrd-link{
        color: #26a3cc;
        font-size: 13px;
        text-align: center;
    }
    .input-field{
        /* width: 100%; */
  padding: 10px;
   border: 1px solid #ccc;
  border-radius: 5px;
    }
`;

export const Form = styled.form`
  height: max-content;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 100px auto 0px;
  padding: 30px 50px 50px;
  /* background-color: #f7f7f7; */
  border-radius: 10px;
  box-shadow: 2px 2px 10px lightgray;

  @media (max-width: 400px) {
    box-shadow: none;
  }
`;

export const Input = styled.input`
  /* width: 100%; */
  padding: 10px;
  /* margin: 10px 0; */
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Heading = styled.h2`
  color: lightgreen;
`;
