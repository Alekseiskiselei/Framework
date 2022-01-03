class Machine {
  constructor() {
    this.vmClass = 'regular';
    this.vmType = 'n1-standard-8';
    this.region = 'Frankfurt';
    this.localSSD = '2x375 GiB';
    this.commitmentTerm = '1 Year';
  }
}

module.exports = Machine;
