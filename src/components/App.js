import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import GridItem from './GridItem';
import '../css/App.css';

function App() {
  const defaultProgressArray = ['', '', '', '', '', '', '', '', ''];
  const type = {
    EMPTY: '',
    X: 'x',
    O: 'o'
  };

  const [progressArray, setProgressArray] = React.useState(defaultProgressArray);
  const [currentType, setCurrentType] = React.useState(type.X);

  // console.log(progressArray);
  // console.log("Current type: ", currentType);

  const clickGridItem = (index) => {
    const updatedProgressArray = [...progressArray];
    updatedProgressArray[index] = currentType;
    setProgressArray([...updatedProgressArray]);
    
    // console.log(updatedProgressArray, progressArray);

    if (checkWinner(updatedProgressArray, currentType)) {
      return resetGame();
    }

    if (currentType === type.X) {
      // console.log("Current type X: ", currentType);
      setCurrentType(type.O);
    } else {
      // console.log("Current type O: ", currentType);
      setCurrentType(type.X);
    }

    // console.log('Now current type is: ', currentType);
  }

  const checkWinner = (updatedProgressArray, winnerType) => {
    const winnerPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    winnerPositions.forEach(possibleWinner => {
      // console.log(possibleWinner);
      // console.log(winnerType);
      // console.log(progressArray[possibleWinner[0]]);
      // console.log(progressArray[possibleWinner[1]]);
      // console.log(progressArray[possibleWinner[2]]);
      if (
        updatedProgressArray[possibleWinner[0]] === winnerType
        &&
        updatedProgressArray[possibleWinner[1]] === winnerType
        &&
        updatedProgressArray[possibleWinner[2]] === winnerType
      ) {
        alert(`Winner is ${winnerType}`);
        setProgressArray(defaultProgressArray);
        setCurrentType(type.X);
      }
    }
    )
  }

  const handleClick = event => {
    resetGame();
  }

  const resetGame = () => {
    setProgressArray(defaultProgressArray);
    setCurrentType(type.X);
  }

  return (
    <div className='tic-tac-toe-grid'>
      <Container>
        <Row>
          <Col>
            <GridItem
              clickGridItem={() => clickGridItem(0)}
              displayValue={progressArray[0]}
              isEditable={progressArray[0] === type.EMPTY}
            >
            </GridItem>
          </Col>
          <Col>
            <GridItem
              clickGridItem={() => clickGridItem(1)}
              displayValue={progressArray[1]}
              isEditable={progressArray[1] === type.EMPTY}
            >
            </GridItem>
          </Col>
          <Col>
            <GridItem
              clickGridItem={() => clickGridItem(2)}
              displayValue={progressArray[2]}
              isEditable={progressArray[2] === type.EMPTY}
            >
            </GridItem>
          </Col>
        </Row>
        <Row>
          <Col>
            <GridItem
              clickGridItem={() => clickGridItem(3)}
              displayValue={progressArray[3]}
              isEditable={progressArray[3] === type.EMPTY}
            >
            </GridItem>
          </Col>
          <Col>
            <GridItem
              clickGridItem={() => clickGridItem(4)}
              displayValue={progressArray[4]}
              isEditable={progressArray[4] === type.EMPTY}
            >
            </GridItem>
          </Col>
          <Col>
            <GridItem
              clickGridItem={() => clickGridItem(5)}
              displayValue={progressArray[5]}
              isEditable={progressArray[5] === type.EMPTY}
            >
            </GridItem>
          </Col>
        </Row>
        <Row>
          <Col>
            <GridItem
              clickGridItem={() => clickGridItem(6)}
              displayValue={progressArray[6]}
              isEditable={progressArray[6] === type.EMPTY}
            >
            </GridItem>
          </Col>
          <Col>
            <GridItem
              clickGridItem={() => clickGridItem(7)}
              displayValue={progressArray[7]}
              isEditable={progressArray[7] === type.EMPTY}
            >
            </GridItem>
          </Col>
          <Col>
            <GridItem
              clickGridItem={() => clickGridItem(8)}
              displayValue={progressArray[8]}
              isEditable={progressArray[8] === type.EMPTY}
            >
            </GridItem>
          </Col>
        </Row>
      </Container>
      <button className='reset-button' onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
