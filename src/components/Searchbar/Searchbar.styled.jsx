import styled from "@emotion/styled";

export const Header = styled.header`
display: flex;
justify-content: center;
align-items: center;
padding: 12px 24px;
color: green;
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
background-color: whitesmoke;
border-radius: 3px;
border-color: black;
&&:hover {
    border-color: white;
    box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.4);
}
`;

export const Button = styled.button`
display: inline-block;
width: 60px;
height: 40px;
background-color: white;
color: darkgreen;
border: 3px solid black; 
cursor: pointer;
outline: none;
&&:hover {
background-color: darkgreen;
color: white;
}
`;

export const Input = styled.input`
display: inline-block;
width; 100%;
height: 30px;
font-size: 24px;
border: 3px solid darkgreen;
padding: 12px 14px;
&&:hover {
border: 3px solid white;
}
`;