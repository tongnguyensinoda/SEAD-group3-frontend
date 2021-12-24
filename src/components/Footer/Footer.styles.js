import styled from "styled-components";

export const Wrapper = styled.div`
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    height: 200px;
    color: white;
    padding: 1.5rem 0;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1366px;
    margin: 0 auto;
`;
export const LeftContent = styled.div`
    h5 {
        font-size: 16px;
        color: white !important;
    }
    h6 {
        font-size: 13px;
        color: white !important;

        span {
            color: red;
        }
    }
    img {
        width: 100%auto;
    }
`;
export const RightContent = styled.div`
    h5 {
        font-size: 16px;
        color: white !important;
    }
    img {
        width: 40px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        margin: 0 15px;
    }
`;
