const {MongoClient} = require('mongodb');
async function main(){

    const uri = "mongodb+srv://FRED:31877101@cluster0.x7yio.mongodb.net/employees?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    if(client){
        
 console.log('connected');
    }else{
    console.log('not connected');
    }
}

main().catch(console.error);