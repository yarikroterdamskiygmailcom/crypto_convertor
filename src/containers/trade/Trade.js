import React, { Component } from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { TradeChart } from "./index";

export default () => {
  return (
    <TradeChart>
      <TradingViewWidget
        symbol="COINBASE:BTCUSD"
        theme={Themes.DARK}
        autosize
      />
    </TradeChart>
  );
};
