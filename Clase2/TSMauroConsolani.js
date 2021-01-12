var Calculos = /** @class */ (function () {
    function Calculos(num1, num2, operation) {
        var _this = this;
        this.sumOperation = function () {
            return _this._num1 + _this._num2;
        };
        this.substrOperation = function () {
            return _this._num1 - _this._num2;
        };
        this.resultado = function () {
            return _this._operation === 'suma'
                ? _this.sumOperation()
                : _this.substrOperation();
        };
        this._num1 = num1;
        this._num2 = num2;
        this._operation = operation;
    }
    Object.defineProperty(Calculos.prototype, "firstNumber", {
        get: function () {
            return this._num1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculos.prototype, "secondNumber", {
        get: function () {
            return this._num2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculos.prototype, "operationType", {
        get: function () {
            return this._operation;
        },
        enumerable: false,
        configurable: true
    });
    return Calculos;
}());
export { Calculos };
