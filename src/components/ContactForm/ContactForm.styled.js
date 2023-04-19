import styled from 'styled-components';

export const ContactFormBody = styled.form`
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 4%;
    align-items: center;

    flex-wrap: wrap;
  }
`;

export const ContactField = styled.div`
  width: 46%;
`;

export const ContactFormLabel = styled.label`
  display: block;
  font-weight: 700;
  font-size: 20px;
  max-width: fit-content;
`;

export const ContactFormInput = styled.input`
  box-sizing: border-box;
  border-radius: 7px;
  border-style: unset;
  display: block;
  height: 35px;
  font-size: 18px;
  margin-bottom: 15px;
  min-width: 250px;
  width: 100%;
`;
export const ContactFormBtn = styled.button`
  display: block;
  border: 2px solid black;
  border-radius: 5px;
  line-height: 1;
  padding: 8px;
  color: black;
  font-weight: 700;
  background-color: white;
  :hover {
    background-color: black;
    color: white;
  }
  :active {
    color: green;
    border: 2px solid green;
  }
`;
