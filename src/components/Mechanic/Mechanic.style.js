import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1366px;
    margin: 35px auto;
    padding: 5px;
    border: 1px solid rgba(38, 56, 150, 0.1411764705882353);
    box-shadow: 0 4px 12px 0 rgb(34 41 47 / 12%);
    border-radius: 10px;
    .ant-modal-content {
        border-radius: 10px;
    }
    height: auto;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    .right {
        display: flex;
        gap: 10px;
    }
`;
