import styled from "@emotion/styled";

 export const LoadMore = styled.button`
 display: inline-block;
 padding: 8px 12px;
 background-color: green;
 transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
 text-align: center;
 color: white;
 border: 3px solid black;
 text-decoration: none;
 cursor: pointer;
 font-size: 18px;
 font-weight: 500;
 min-width: 200px;
 box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.4);
 &&:hover {
 background-color: white;
 color: green; 
 }
 `;

