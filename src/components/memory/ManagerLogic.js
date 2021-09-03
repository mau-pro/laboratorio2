class ManagerLogic {
  constructor() {}
  setNext(next) {
    this.next = next;
  }
  setNext2(next) {
    this.next2 = next;
  }
  getNext() {
    return this.next;
  }
  process() {
    throw new Error("Can't be call this function it's abstract");
  }
}
export default ManagerLogic;
