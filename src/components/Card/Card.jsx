import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardContainer = styled.div({
  width: '18rem',
  marginBottom: '20px',
  border: '1px solid black',
})

const CardBody = styled.div`
  padding: 10px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  width: 60%;
  padding: 10px;
  border-style: none;
  border-radius: 4px;
  background-color: #9ce606;
  cursor: pointer;
`

function Card(props) {
  return (
    <CardContainer className="Card">
      {props.img && <img className="card-image" src={props.img} alt="card" />}
      <CardBody>
        <h1 className="card-title">{props.title}</h1>
        {props.children}
        <ButtonWrapper>
          <Button className="card-button">Click {props.clickCnt}</Button>
        </ButtonWrapper>
      </CardBody>
    </CardContainer>
  )
}

Card.propTypes = {
  children: PropTypes.any,
}

export default Card
