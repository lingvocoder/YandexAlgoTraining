class Set {

    mySet;
    size;
    prevState;

    constructor(size) {
        this.size = size;
        this.mySet = new Array(size);
    }

    initSet = () => {
        for (let i = 0; i < this.size; i++) {
            this.mySet[i] = [];
        }
    }

    add = (num) => {
        const setLen = this.mySet.length;
        let isSetFilled = this.checkSetCapacity();
        if (isSetFilled) {
            this.updateSet();
        }
        if (this.mySet[num % setLen].indexOf(num) === -1) {
            this.mySet[num % setLen].push(num);
        }
    }

    findNum = (num) => {
        let currSubSet = this.mySet[num % this.mySet.length];

        for (let i = 0; i < currSubSet.length; i++) {
            for (const currSetElement of currSubSet) {
                if (currSetElement === num) {
                    return true
                }
            }
        }
        return false
    }

    deleteNum = (num) => {
        let currSubSet = this.mySet[num % this.mySet.length];
        for (let i = 0; i < currSubSet.length; i++) {
            if (currSubSet[i] === num) {
                currSubSet[i] = currSubSet[currSubSet.length - 1];
                currSubSet.pop();
                return;
            }
        }
    }

    checkSetCapacity = () => {
        const setLen = this.mySet.length;
        let isSetFilled = false;

        for (let i = 0; i < setLen; i++) {
            let currSubSetLen = this.mySet[i].length;
            if ((currSubSetLen / setLen) > 1) {
                isSetFilled = true;
                this.savePrevSet();
                this.createNewSet();
            }
        }
        return isSetFilled;
    }

    updateSet = () => {
        let prevSetValues = this.prevState;
        const setLen = this.mySet.length;
        prevSetValues.forEach(num => {
            if (this.mySet[num % setLen].indexOf(num) === -1) {
                this.mySet[num % setLen].push(num);
            }
        })
    }

    createNewSet = () => {
        let newSet;
        newSet = new Set(this.mySet.length * 2);
        newSet.initSet();
        this.mySet = newSet.mySet;
    }

    savePrevSet = () => {
        this.prevState = this.mySet
            .filter(elem => elem.length > 0)
            .reduce((acc, curr) => acc.concat(curr))
    }
}

let mySet = new Set(10);
mySet.initSet();
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(4)
mySet.add(5)
mySet.add(6)
mySet.add(77)
mySet.add(8)
mySet.add(9)
mySet.add(10)
mySet.add(11)
mySet.add(12)
mySet.add(13)
mySet.add(14)
mySet.add(15)
mySet.add(16)
mySet.add(17)
mySet.add(18)
mySet.add(19)
mySet.add(20)
mySet.add(21)
mySet.add(22)
mySet.add(23)
mySet.add(24)
mySet.deleteNum(13)
mySet.deleteNum(14)
mySet.add(25)
mySet.add(55)
mySet.add(25)
mySet.add(25)
mySet.add(60)
mySet.add(70)
mySet.add(80)
mySet.add(40)
mySet.add(90)
mySet.add(105)
mySet.deleteNum(0)
console.log(mySet.findNum(115));
console.log(mySet.findNum(135));
console.log(mySet.findNum(117));
console.log(mySet.findNum(157));
console.log(mySet.findNum(417));
console.log(mySet.mySet)