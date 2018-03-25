
// init project
const express = require('express');
const app = express();


app.use(express.static('public'));

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/index.html');
});


app.get("/:date", (req, res, next) => {

  var natural_Date;
  var unix;
  if (/^\d{1,}$/.test(req.params.date)){
    natural_Date = new Date(req.params.date * 1000).toUTCString();
    unix = req.params.date;    
  } else {
    natural_Date = new Date(req.params.date);
    unix = Math.floor(new Date(natural_Date)/1000);    
  }
  
 
  if (natural_Date) {
    
    res.json({
      unix: unix,
      natural: new Date(natural_Date).toDateString()
    });
    
  } else {
    
    res.json({
      unix: null,
      natural: null
    })
    
  }
  
});


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
