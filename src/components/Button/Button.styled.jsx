import styled from "@emotion/styled";

 export const LoadMore = styled.button`
 display: inline-block;
 padding: 4px 16px;
 background-color: green;
 transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
 text-align: center;
 color: lawngreen;
 border: 3px solid darkgreen;
 text-decoration: none;
 cursor: pointer;
 font-size: 18px;
 font-weight: 800;
 min-width: 200px;
 height: 60px;
 box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.4);
 &&:hover {
 background-color: lawngreen;
 color: green; 
 }
 && svg {
    margin-top: 3px;
    margin-right: 12px;
 }
 `;

