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
background-color: (0, 0, 0, 0.6);
z-index: 1250;
`;

export const ModalWindow = styled.div`
// position: relative;
// width: 600px;
// height: 600px;
// margin-left: 30px;

position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  margin-left: 20px;
`;

export const CloseButton = styled.div`
position: absolute;
display: flex;
padding: 4px;
margin: 4px;
border: 3px solid green;
svg {
    width: 30px;
    height: 30px;
    color: green;
    &&:hover {
        color: white;
    }
}
`;