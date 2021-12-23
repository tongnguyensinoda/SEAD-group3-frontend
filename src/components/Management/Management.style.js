import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${(props) => props.background};
    color: white;
    gap: 10px;
    height: 100vh;
    .ant-pagination-item-link {
        color: ${(props) => props.textPage};
        background-color: ${(props) => props.backgroundPage};
    }
    .ant-pagination-item {
        color: ${(props) => props.textPage};
        background-color: ${(props) => props.backgroundPage};
    }
    .ant-pagination-item-active {
        background-color: ${(props) => props.activePage};
        border: ${(props) => props.borderPage};
    }
    .ant-pagination-prev:focus-visible .ant-pagination-item-link,
    .ant-pagination-next:focus-visible .ant-pagination-item-link,
    .ant-pagination-prev:hover .ant-pagination-item-link,
    .ant-pagination-next:hover .ant-pagination-item-link {
        color: ${(props) => props.textPage};
        /* border-color: rgb(158, 129, 245); */
    }
`;
