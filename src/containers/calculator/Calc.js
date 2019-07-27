import React, { Component } from "react";
import { connect } from "react-redux";
import { dataConvert } from "./selectors";

import {
  CalcContainer,
  Title,
  ConvertCont,
  CryptoChoose,
  ButtonConvert,
  CryptoValue,
  Button
} from "./index";

class Calc extends Component {
  state = {
    value: 0,
    sel: "bitcoin",
    val: "RUB",
    convert: 0
  };

  handleNumber(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSelect(e) {
    this.setState({
      sel: e.target.value
    });
  }

  handleVal(e) {
    this.setState({
      val: e.target.value
    });
  }

  con() {
    const { store } = this.props;
    const { sel, val, value, convert } = this.state;
    const priceUsd = Number(
      store.filter(e => e.id === sel).map(e => e.price_usd)
    );
    const data = dataConvert(priceUsd, sel, val, value);
    this.setState({
      convert: data
    });
  }

  render() {
    const { value, sel, val, convert } = this.state;
    return (
      <CalcContainer>
        <Title>
          <p>Cryptocurrency Converter Calculator</p>
        </Title>
        <ConvertCont>
          <CryptoChoose>
            <input
              value={value}
              type="number"
              onChange={e => this.handleNumber(e)}
              name="inp"
            />
            <select onChange={e => this.handleSelect(e)}>
              <option value="bitcoin">Bitcoin</option>
              <option value="ethereum">Ethereum</option>
              <option value="ripple">Ripple</option>
              <option value="bitcoin-cash">Bitcoin Cash</option>
              <option value="litecoin">Litecoin</option>
            </select>
            <p>
              {value} {sel}
            </p>
          </CryptoChoose>
          <ButtonConvert>
            <Button onClick={e => this.con(e)}>go</Button>
          </ButtonConvert>
          <CryptoValue>
            <select onChange={e => this.handleVal(e)}>
              <option value="RUB">RUB</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
            <p>
              {String(convert).slice(0, 6)} {val}
            </p>
          </CryptoValue>
        </ConvertCont>
      </CalcContainer>
    );
  }
}

const mapStateToProps = state => ({
  store: state.cryptoList
});

export default connect(mapStateToProps, null)(Calc);

// switch (true) {
//     case sel === "bitcoin" && val === "RUB":
//       return value * (e * 60);
//     case sel === "bitcoin" && val === "USD":
//       return value * e;
//     case sel === "bitcoin" && val === "EUR":
//       return value * (e * 0.8);
//     case sel === "bitcoin" && val === "EUR":
//       return value * (e * 0.8);

//   }
