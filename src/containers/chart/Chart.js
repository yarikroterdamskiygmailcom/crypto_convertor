import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../actions/index";
import { ContainerChat, List } from "./index";

class Chart extends Component {
  state = {
    value: "rub"
  };

  componentDidMount() {
    this.props.fetchData();
  }

  dark(e) {
    if (this.state.value === "rub") {
      return String(e * 60).slice(0, 8);
    } else if (this.state.value === "eur") {
      return String(e * 0.8).slice(0, 8);
    } else {
      return e;
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    const { store } = this.props;
    const { value } = this.state;

    return (
      <ContainerChat>
        <select onChange={e => this.handleChange(e)}>
          <option value="rub">Rub</option>
          <option value="usd">Usd</option>
          <option value="eur">Eur</option>
        </select>

        <List>
          {store.map((e, i) => {
            return (
              <div key={i}>
                <p>{e.name}</p>
                <p>{this.dark(e.price_usd)}</p>
              </div>
            );
          })}
        </List>
      </ContainerChat>
    );
  }
}

const mapStateToProps = state => ({
  store: state.cryptoList
});

const mapDispatchToProps = {
  fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
