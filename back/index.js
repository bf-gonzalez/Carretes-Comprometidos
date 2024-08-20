const server = require("./src/server");
const dbConnection = require("./src/db")

const PORT = 3000;


dbConnection().then(()=>{

 server.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
    
    });

}).catch((error)=>{
    console-error("Database connection error:", error);
});

