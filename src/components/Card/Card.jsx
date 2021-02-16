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
`

function Card(props) {
  const onSubmit = (event) => {
    props.onSubmit(event)
  }

  return (
    <CardContainer className="Card">
      {props.children.filter((child) => child.type === 'img')}
      <CardBody>
        {props.children.filter((child) => child.type !== 'img')}
        {props.onSubmit && (
          <ButtonWrapper>
            <Button className="card-button" onClick={onSubmit}>
              Click {props.clickCnt}
            </Button>
          </ButtonWrapper>
        )}
      </CardBody>
    </CardContainer>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  handleButton: PropTypes.func,
}

export default Card
