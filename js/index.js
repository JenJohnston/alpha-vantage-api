window.addEventListener('load', function(e){

    
    const stockDataBtn = document.querySelector('#button');
    
    
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=demo';

    stockDataBtn.addEventListener('click', function(e){
        e.preventDefault();
        getStockData();
        stockData();
    })

    function stockData(){

        const symbol = document.querySelector('#stocksymbol').value;

        this.apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&outputsize=compact&apikey=F7VCYFDO89HO5ZRP';

        this.init = function () {
            const result = this.query('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&outputsize=compact&apikey=F7VCYFDO89HO5ZRP').then(res => res)
            
            console.log(result)
        }
    }

    function getStockData(){
        const symbol = document.querySelector('#stocksymbol').value;
        
    
        const stockData = fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&outputsize=full&apikey=F7VCYFDO89HO5ZRP')
        .then((res) => res.json())
        .then((data) => {
            dataObj = data;
    
            console.log(data['Time Series (Daily)'])
            console.log(data['Time Series (Daily)']['2021-01-29']);
            console.log(data['Meta Data']); 

        }); 

        

    }

    
})
