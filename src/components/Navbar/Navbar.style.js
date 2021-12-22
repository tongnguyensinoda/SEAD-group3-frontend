import styled from "styled-components";

export const Head = styled.div`
    display: flex;
    width: 256px;
    align-items: center;
    padding-bottom: 8px;
    justify-content: space-between;
    /* background-color: black;
    color: white; */
    background-color: ${(props) => props.background};
    color: ${(props) => props.textColor};
    .ant-switch-handle::before {
        background-color: ${(props) => props.switchColor};
    }
    .ant-switch-checked {
        background-color: #022e57 !important;
    }
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 80px;
    }
    span {
        font-weight: bolder;
    }
`;
