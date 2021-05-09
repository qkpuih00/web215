const express = required("Express");
const app = express();

app.get("/", function(res, req){
    res.send("WORKING!!!");

})

app.listen(process.enc.PORT || 5000);