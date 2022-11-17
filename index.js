const {MongoClient} = require("mongodb")

const client = new MongoClient("mongodb+srv://veronika:veron0512@cluster0.uxt5sya.mongodb.net/mongo?retryWrites=true&w=majority")

const start = async() => {
    try{
        await client.connect()
        console.log("Connection exists")
        //await client.db().createCollection("names")
        const users = client.db().collection("names")
        await users.insertOne({name:"Nina", age: 21})
        const user = await users.findOne({name: "Nina"})
        console.log(user)
    } catch (e) {
        console.log(e)
    }
}

start()