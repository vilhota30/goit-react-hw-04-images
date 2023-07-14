import styled from "@emotion/styled";

export const Li = styled.li`
border-radius: 3px;
`;

export const Image = styled.img`
width: 100%;
height: 260px;
object-fit: cover;
border-radius: 4px;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

&&:hover{
    transform: scale(1.10);
    cursor: pointer;
    box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.6);
    border: 3px solid darkgreen;
}
`;