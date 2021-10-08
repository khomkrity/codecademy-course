const STRAND_SIZE = 15;
const SURVIVAL_BASES = ['C', 'G'];

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < STRAND_SIZE; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// simulate a p.aequor instance for further investigation
const pAequorFactory = (specimenNumber, dnaBase) => {
  return {
    _specimenNumber: specimenNumber,
    _dna: dnaBase,
    get dna() {
      return this._dna;
    },
    get specimenNumber() {
      return this._specimenNumber;
    },
    complementStrand() {
      let complement = this._dna.map(base => {
        if (base === 'A') return 'T';
        if (base === 'T') return 'A';
        if (base === 'C') return 'G';
        if (base === 'G') return 'C';
      });
      return complement;
    },
    mutate() {
      let base = Math.floor(Math.random() * this._dna.length);
      let currentDnaBase = this._dna[base];
      let randomDnaBase = returnRandBase();
      while (currentDnaBase == randomDnaBase) {
        randomDnaBase = returnRandBase();
      }
      this._dna[base] = randomDnaBase;
      return this._dna;
    },
    compareDNA(pAequor) {
      let percentage = 0;
      let countCommon = 0;
      let currentStrand = this._dna;
      let targetStrand = pAequor.dna;
      let currentSpecimenNumber = this._specimenNumber;
      let targetSpecimenNumber = pAequor.specimenNumber;
      if (currentSpecimenNumber === targetSpecimenNumber) {
        console.log('comparing the same specimen instance');
        return;
      }
      currentStrand.forEach((dnaBase, index) => {
        if (dnaBase === targetStrand[index]) {
          countCommon++;
        }
      });
      percentage = (countCommon / STRAND_SIZE) * 100;
      console.log(
        `specimen #${currentSpecimenNumber} and specimen #${targetSpecimenNumber} have ${percentage.toFixed(
          2
        )}% DNA in common`
      );
    },
    willLikelySurvive() {
      let percentage = 0;
      let countSurvivalBase = 0;
      this._dna.forEach(dnaBase => {
        if (SURVIVAL_BASES.includes(dnaBase)) {
          countSurvivalBase++;
        }
      });
      percentage = (countSurvivalBase / STRAND_SIZE) * 100;
      return percentage >= 60;
    },
  };
};

// simulate x amount of p.aequor instances with a high chance of survival
const initialize = instanceNumber => {
  let samples = [];
  let specimenNumber = 1;
  let countCurrentInstance = 0;
  while (countCurrentInstance !== instanceNumber) {
    let pAequorInstance = pAequorFactory(specimenNumber, mockUpStrand());
    if (pAequorInstance.willLikelySurvive()) {
      samples.push(pAequorInstance);
      specimenNumber++;
      countCurrentInstance++;
    }
  }
  return samples;
};

const report = instances => {
  const totalInstances = instances.length;
  const currentInstance = instances[Math.floor(Math.random() * totalInstances)];
  const targetInstance = instances[Math.floor(Math.random() * totalInstances)];
  console.log('simulating', totalInstances, 'p.aequor instances');
  instances.forEach(instance => {
    console.log('specimen number:', instance.specimenNumber);
    console.log('dna bases:', instance.dna);
    console.log('complementary dna bases:', instance.complementStrand());
    console.log('mutated dna bases:', instance.mutate());
    console.log('will likely survive:', instance.willLikelySurvive());
  });
  console.log('random comparison:');
  currentInstance.compareDNA(targetInstance);
};

// create instances of p.aequor
let instances = initialize(10);
report(instances);
