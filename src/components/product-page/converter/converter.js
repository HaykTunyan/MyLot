import React, { Component } from 'react';
import '../product-page.scss';

class Converter extends Component {

    state = {
        currencies: ["USD", "RUB", "EUR", "GBP"],
        base: "USD",
        amount: "",
        convertTo: "EUR",
        result: "",
        date: ""
      };
    
      handleSelect = e => {
        this.setState(
          {
            [e.target.name]: e.target.value,
            result: null
          },
          this.calculate
        );
      };
    
      handleInput = e => {
        this.setState(
          {
            amount: e.target.value,
            result: null,
            date: null
          },
          this.calculate
        );
      };

    calculate = () => {
        const amount = this.state.amount;
        if (amount === isNaN) {
          return;
        } else {
          fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
            .then(res => res.json())
            .then(data => {
              const date = data.date;
              const result = (data.rates[this.state.convertTo] * amount).toFixed(4);
              this.setState({
                result,
                date
              });
            });
        }
    };

    handleSwap = e => {
        const base = this.state.base;
        const convertTo = this.state.convertTo;
        e.preventDefault();
        this.setState(
          {
            convertTo: base,
            base: convertTo,
            result: null
          },
          this.calculate
        );
      };

    render () {

        const { currencies, base, amount, convertTo, result, date } = this.state;


        return (
            <div className="card mt-5">
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <span className="font-14 Sans_Bold">
                            {amount} {base} համարժեք է
                        </span>
                        <span className="font-14 Sans_Bold">
                            {amount === ""
                                ? "0"
                                : result === null
                                    ? "Calculating..."
                                    : result
                            }
                            {" "}
                            {convertTo}
                        </span>
                    </div>
                    
                    <p className="font-12 Sans_Bold">
                        {
                            amount === "" ? "/ / /" : date === null ? "" : date
                        }
                        Օրվա դրությամբ
                    </p>
                </div>
                <div className="card-body">
                    <form className=" mb-4">
                        <div class="form-row row">
                            <div class="form-group col-12 col-sm-6">
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={this.handleInput}
                                    className="form-control"
                                />
                            </div>
                            <div class="form-group col-12 col-sm-3">
                                <select
                                    name="base"
                                    value={base}
                                    onChange={this.handleSelect}
                                    className="form-control "
                                >
                                    {currencies.map(currency => (
                                        <option key={currency} value={currency}>
                                            {currency}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </form>
                    <form className=" mb-4">
                        <div className="form-row row">
                            <div className="form-group col-12 col-sm-6">
                                <input
                                    disabled={true}
                                    value={
                                        amount === ""
                                            ? "0"
                                            : result === null
                                                ? "Calculating..."
                                                : result
                                    }
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group col-12 col-sm-3">
                                <select
                                    name="convertTo"
                                    value={convertTo}
                                    onChange={this.handleSelect}
                                    className="form-control "
                                >
                                    {currencies.map(currency => (
                                        <option key={currency} value={currency}>
                                            {currency}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>
                        
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default Converter