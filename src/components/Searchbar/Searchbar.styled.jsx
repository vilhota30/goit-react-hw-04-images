import styled from "@emotion/styled";

export const Header = styled.header`
display: flex;
justify-content: center;
align-items: center;
padding: 12px 24px;
background-color: green;
box-shadow: 2px 6px 10px 2px rgba(0, 0, 0, 0.4);
top: 0;
left: 0;
position: sticky;
z-index: 1100;
`;

export const Form = styled.form`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
max-width: 800px;
background-color: mediumseagreen;
border-radius: 3px;
border-color: black;
box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.4);
&&:hover {
    border-color: white;
    
}
`;

export const Button = styled.button`
display: inline-block;
width: 80px;
height: 60px;
background-color: lawngreen;
color: darkgreen;
border: 3px solid green; 
cursor: pointer;
outline: none;
&&:hover {
background-color: darkgreen;
color: lawngreen;
}
`;

export const Label = styled.span`
  font-weight: 700;
`;

export const Input = styled.input`
display: inline-block;
width; 100%;
height: 30px;
font-size: 24px;
outline: none;
color: lawngreen;
border: 3px solid darkgreen;
background-color: mediumseagreen;
padding: 12px 14px;
&&:hover {
  background-color: darkgreen;
  border: 3px solid lawngreen;
}
`;