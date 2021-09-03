import { useState } from "react";
import { LogicGame } from "../LogicGame";
import GoodCards from "./GoodCards";
import OneCard from "./OneCard";
import "./styles.css";
import TwoCards from "./TwoCards";
let twice = [];
const [createBoard] = LogicGame();
//logic game
let oneCard = new OneCard();
let twoCards = new TwoCards();
let goodCars = new GoodCards();
oneCard.setNext(twoCards);
twoCards.setNext(goodCars);
const GameComponent = () => {
  let board = createBoard(5, 5);
  const [stateBoard, setStateBoard] = useState(board);

  const handlerClick = (id) => {
    if (twice.length == 2) {
      twice = [];
    }
    const item = stateBoard.find((item) => item.id === id);
    oneCard.process(twice, item, stateBoard, setStateBoard);
    //logic(stateBoard, setStateBoard, id);
    // if (twice.length == 2) {
    //   twice = [];
    // }
    // const item = stateBoard.find((item) => item.id === id);
    // if (twice.length == 0) {
    //   twice = [...twice, item];
    // } else if (twice.length == 1) {
    //   console.log("ENter");
    //   twice = [...twice, item];
    //   const [item1] = twice;
    //   if (item1.key !== item.key) {
    //     twice = [];
    //     console.log("diferent");
    //     setTimeout(() => {
    //       const newStateBoard = stateBoard.map((item) => {
    //         if (item.done === false) {
    //           item.state = false;
    //           item.styleClass = "item";
    //         }
    //         return item;
    //       });
    //       setStateBoard(newStateBoard);
    //     }, 1000);
    //   } else {
    //     const [t1, t2] = twice;
    //     const newStateBoard = stateBoard.map((item) => {
    //       if (item.id === t1.id || item.id === t2.id) {
    //         item.done = true;
    //       }
    //       return item;
    //     });
    //     setStateBoard(newStateBoard);
    //   }
    // }
    // const newStateBoard = stateBoard.map((item) => {
    //   if (item.id === id) {
    //     item.state = true;
    //     item.styleClass = "itemColor";
    //   }
    //   return item;
    // });
    // setStateBoard(newStateBoard);
  };
  return (
    <>
      <h1>Memory</h1>
      <hr />
      <div className="container">
        {stateBoard.map((item) => {
          return (
            <div
              className={item.styleClass}
              onClick={() => {
                handlerClick(item.id);
              }}
              key={item.id}
            >
              {item.state === false ? (
                <div className="content">{item.front}</div>
              ) : (
                <div className="content">{item.behind}</div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default GameComponent;
