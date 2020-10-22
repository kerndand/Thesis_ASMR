import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace ASMR_Script {
    interface Answer {
        [type: string]: string | string[];
    }

    let database: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined) {
        port = 5001;
    }

    //let databaseURL: string = "mongodb://localhost:27017";
    let databaseURL: string = "mongodb+srv://user:test123@asmrdatabase.4xbkn.mongodb.net/user?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseURL);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();

        console.log("Server starting on port: " + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        database = mongoClient.db("ASMRDatabase").collection("Answers");
        console.log("Database connection " + database != undefined);
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Ich bin da");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            /* for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br>");
            }

            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString); */

            storeAnswer(url.query);
        }


        _response.write("Antwort empfangen");
        _response.end();
    }

    function storeAnswer(_answer: Answer): void{
        database.insertOne(_answer); 
    }

}

