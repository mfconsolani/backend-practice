export class Calculos {
    private _num1: number;
    private _num2: number;
    private _operation: string;

    constructor(num1: number, num2: number, operation: string){
        this._num1 = num1;
        this._num2 = num2;
        this._operation = operation;
    }

    get firstNumber(): number {
        return this._num1;
    }

    get secondNumber(): number {
        return this._num2;
    }

    get operationType(): string {
        return this._operation;
    }

    private sumOperation = (): number => {
        return this._num1 + this._num2
    };

    private substrOperation = (): number => {
        return this._num1 - this._num2
    };

    resultado = () => {
        return this._operation === 'suma' 
        ? this.sumOperation() 
        : this.substrOperation();
    }
}