const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=0787.HK&interval=1min&apikey=F7VCYFDO89HO5ZRP';

function getStockData(){
    const symbol = document.querySelector('#stocksymbol');

    const stockData = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=0787.HK&interval=1min&apikey=F7VCYFDO89HO5ZRP' + symbol;

    console.log(stockData);
}

export {getStockData}