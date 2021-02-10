export class CalcProvider {
    public lastResult: number = 0;
    Add = (a: number, b: number) => {
        console.log(this);
        return this.lastResult = a + b
    };
    Substract = (a: number, b: number) => {
        return this.lastResult = a - b;
    };
    Multiply = (a: number, b: number) => {
        return this.lastResult = a * b;
    };
    Deviding = (a: number, b: number) => {
        return this.lastResult = a / b;
    };
}