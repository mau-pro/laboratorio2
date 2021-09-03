import ManagerLogic from "./ManagerLogic";

class GoodCards extends ManagerLogic {
  process(twice, item, stateBoard, setStateBoard) {
    const [t1, t2] = twice;
    const newStateBoard = stateBoard.map((item) => {
      if (item.id === t1.id || item.id === t2.id) {
        item.done = true;
      }
      return item;
    });
    setStateBoard(newStateBoard);
  }
}
export default GoodCards;
