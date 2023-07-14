import styled from "@emotion/styled";

export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0.2, 0.4, 0.5, 0.6);
z-index: 1200;
`;

export const ModalWindow = styled.div`

position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  margin-left: 20px;
`;

export const CloseButton = styled.button`
position: absolute;
display: flex;
padding: 0px;
margin: 5px;
 border-radius: 4px;
 border: 4px solid green;
svg {
     fill: darkgreen;
}
`;