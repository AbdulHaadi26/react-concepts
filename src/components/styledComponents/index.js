import React, { useState } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: ${props => props.bg === "white" ? "gray" : "white"};
  width: 100%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeading = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const StyledInput = styled.input`
  font-size: 12px;
  width: 40%;
  &:hover {
      border: 1px solid black;
  }

  @media (max-width: 768px) {
    &:hover {
        border: 1px solid red;
    }
  }
`;

const StyledComponents = () => {
    const [form, setForm] = useState({
        name: '', password: '', email: ''
    });

    const handleInput = e => {
        setForm({
            ...form, [e.target.name]: e.target.value
        });
    }

    return <StyledWrapper bg="gray">
        <StyledHeading>Styled Components</StyledHeading>
        <StyledInput value={form.name} placeholder="Name" type="text" onChange={e => handleInput(e)}></StyledInput>
    </StyledWrapper>
};

export default StyledComponents;


