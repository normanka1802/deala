// let stockCode = "BHP";

new TradingView.widget({
    "width": 800,
    "height": 500,    
    "symbol": `ASX:BHP`,    
    "interval": "D",    
    "timezone": "Etc/UTC",    
    "theme": "dark",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,    
    "container_id": "tradingview_64c63"
  });


function changeStock(stockCode){

    new TradingView.widget({
        "width": 800,
        "height": 500,    
        "symbol": `ASX:${stockCode}`,    
        "interval": "D",    
        "timezone": "Etc/UTC",    
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,    
        "container_id": "tradingview_64c63"
      });

}

// document.getElementById('code').addEventListener("click", function(event) {
  
//   const codeValue = document.getElementById('code').innerText;
  
//   console.log(codeValue);
  
//   stockCode = codeValue;
  

  
  
// });

// new TradingView.widget({
//   "width": 800,
//   "height": 500,    
//   "symbol": `ASX:${stockCode}`,    
//   "interval": "D",    
//   "timezone": "Etc/UTC",    
//   "theme": "dark",
//   "style": "1",
//   "locale": "en",
//   "toolbar_bg": "#f1f3f6",
//   "enable_publishing": false,
//   "allow_symbol_change": true,    
//   "container_id": "tradingview_64c63"
// });