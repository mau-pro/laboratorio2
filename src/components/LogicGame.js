export const LogicGame = () => {
  const createBoard = (longw, longh) => {
    let list = [];
    let simbol = 1;
    for (let i = 0; i < (longw * longh) / 2; i++) {
      let stringdata = String.fromCharCode(simbol + 60);
      simbol++;
      const card = {
        key: `card_${i}`,
        front: "??",
        behind: stringdata,
        styleClass: "item",
        state: false,
        done: false,
      };
      list = [...list, card, card];
    }
    for (let i = 0; i < list.length; i++) {
      let randomIndex = Math.ceil(Math.random() * list.length) - 1;
      let obj = list[randomIndex];
      list[randomIndex] = list[i];
      list[i] = obj;
    }
    list = list.map((item, i) => {
      return { id: i, ...item };
    });
    return list;
  };
  return [createBoard];
};
