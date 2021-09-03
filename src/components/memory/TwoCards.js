import ManagerLogic from "./ManagerLogic";

class TwoCards extends ManagerLogic {
  process(twice, item, stateBoard, setStateBoard) {
    if (twice.length == 1) {
      twice.push(item);
      const [item1, item2] = twice;
      if (item1.key === item2.key) {
        this.next.process(twice, item, stateBoard, setStateBoard);
      } else {
        setTimeout(() => {
          const newStateBoard = stateBoard.map((item) => {
            if (item.done === false) {
              item.state = false;
              item.styleClass = "item";
            }
            return item;
          });
          setStateBoard(newStateBoard);
        }, 1000);
      }
    }
  }
}
export default TwoCards;
