const { MongoClient, ServerApiVersion } = require('mongodb');


// adminuser
// p4FMNdyLPgU7QjdG
// mongodb+srv://adminuser:p4FMNdyLPgU7QjdG@cluster0.pukzncm.mongodb.net/?retryWrites=true&w=majority

const uri = `mongodb+srv://vittomedl:d9g2ZpBVtS4fYUR7@cluster0.khubqfx.mongodb.net/?retryWrites=true&w=majority`


// const uri = "mongodb+srv://adminuser:<password>@cluster0.pukzncm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
 client.connect((err:any) => {
    if (client?.isConnected()) {
        console.log('MongoDB client is connected');
      }
    if (err) {
        //   const collection = client.db("Ecom").collection("Users");
        //   console.log('collection: ', collection);
        // perform actions on the collection object
        console.error('Failed to connect to MongoDB', err);
        client.close();
    };
});

export default client