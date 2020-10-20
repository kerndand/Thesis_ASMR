"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASMR_Script = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var ASMR_Script;
(function (ASMR_Script) {
    let database;
    let port = process.env.PORT;
    if (port == undefined) {
        port = 5001;
    }
    //let databaseURL: string = "mongodb://localhost:27017";
    let databaseURL = "mongodb+srv://user:<password>@asmrdatabase.4xbkn.mongodb.net/user?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseURL);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port: " + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    function connectToDatabase(_url) {
        return __awaiter(this, void 0, void 0, function* () {
            let options = { useNewUrlParser: true, useUnifiedTopology: true };
            let mongoClient = new Mongo.MongoClient(_url, options);
            yield mongoClient.connect();
            database = mongoClient.db("ASMRDatabase").collection("Answers");
            console.log("Database connection " + database != undefined);
        });
    }
    function handleRequest(_request, _response) {
        console.log("Ich bin da");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeAnswer(url.query);
        }
        _response.write("Vielen Dank für Ihre Teilnahme!");
        _response.end();
    }
    function storeAnswer(_answer) {
        database.insertOne(_answer);
    }
})(ASMR_Script = exports.ASMR_Script || (exports.ASMR_Script = {}));
//# sourceMappingURL=server.js.map