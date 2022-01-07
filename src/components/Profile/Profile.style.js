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
    svg {
        vertical-align: unset;
    }
`;
export const Content = styled.div`
    display: flex;
    max-width: 1366px;
    margin: 0 auto;
    box-shadow: 0 10px 30px 0 rgb(38 57 52 / 15%);
    justify-content: space-between;
`;
export const Item = styled.div`
    background-color: #f8f9fa !important;
    align-items: center;
    flex-grow: 1;
    padding: 5px 15px;
    border-right: 1px solid #dee2e6;
    color: rgba(0, 0, 0, 0.5) !important;
    h2 {
        color: rgba(0, 0, 0, 0.5) !important;
    }
    p {
        margin-bottom: 3px;
    }
    h5 {
        font-weight: bolder;
    }
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
