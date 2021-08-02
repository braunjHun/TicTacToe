class Player {

    constructor(name, sign) {
        this.name = name;
        this.sign = sign;
    }
    getName() {
      return this.name;
    }
    getSign() {
      return this.sign;
    }
   }
  
  module.exports = {
    Player,
  };
  