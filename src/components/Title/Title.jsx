import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h2 className="title">{title}</h2>
      <p className="subtitle">{subtitle}</p>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  .title {
    text-transform: capitalize;
    text-align: center;
    font-size: 4rem;
    font-family: "Nunito";
    font-weight: bold;
    color: var(--primaryColor);

    @media screen and (max-width: 500px) {
      font-size: 2.6rem;
      margin: 0 1.3rem 3rem;
    }
  }
  .subtitle {
    text-align: center;
    font-size: 1.7rem;
    font-family: "Nunito";
    margin-bottom: 4.5rem;

    @media screen and (max-width: 500px) {
      font-size: 1.6rem;
      margin: -1rem 1rem 3rem;
    }
  }
`

export default Title
