class Circe{
    constructor(r){ // this is using for private this is like  closure
        this.getR = () => {
            return r;
        }
    
        this.setR = (value) => {
            r = value;
        };

        this.getDiameter = () => {
            return r * 2;
        };

        this.setDiameter = () => {
            this.setR(value / 2);
        }
    };
    
    get area(){
        return this.getR() ** 2 * 2 * Math.PI;
    }
}

const myCircle = new Circe(3);

console.log(myCircle.getR());
console.log(myCircle.r)