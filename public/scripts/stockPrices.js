// StockPrices class representing stock prices
class StockPrices {
  constructor(timestamp, openPrice, highPrice, lowPrice, closePrice, volume) {
    this.timestamp = timestamp;
    this.openPrice = openPrice;
    this.highPrice = highPrice;
    this.lowPrice = lowPrice;
    this.closePrice = closePrice;
    this.volume = volume;
  }
}

  export default StockPrices;