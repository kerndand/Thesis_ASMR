var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ASMR_Script;
(function (ASMR_Script) {
    window.addEventListener("load", handleLoad);
    let form;
    let submit;
    //let url: string = "http://localhost:5001";
    let url = "https://asmr-umfrage.herokuapp.com/";
    // Load-Funktion
    function handleLoad(_event) {
        ASMR_Script.generateContent();
        form = document.querySelector("form");
        submit = document.querySelector("button[type=button]");
        submit.addEventListener("click", sendForms);
        // Stop audio when other starts
        document.addEventListener('play', function (e) { stopAudio(e); }, true);
    }
    function sendForms() {
        return __awaiter(this, void 0, void 0, function* () {
            let gender = document.forms[0].gender.value;
            let age = document.forms[0].age.value;
            let expertise = document.forms[0].expertise.value;
            let asmr = document.forms[0].asmr.value;
            let feeling1 = document.forms[0].feeling1.value;
            let adjective1 = document.forms[0].adjective1.value;
            let verb1 = document.forms[0].verb1.value;
            let noun1 = document.forms[0].noun1.value;
            let feeling2 = document.forms[0].feeling2.value;
            let adjective2 = document.forms[0].adjective2.value;
            let verb2 = document.forms[0].verb2.value;
            let noun2 = document.forms[0].noun2.value;
            let feeling3 = document.forms[0].feeling3.value;
            let adjective3 = document.forms[0].adjective3.value;
            let verb3 = document.forms[0].verb3.value;
            let noun3 = document.forms[0].noun3.value;
            let generalFeeling = document.forms[0].generalFeeling.value;
            if (gender && age > 0 && age < 120 && expertise && asmr
                && feeling1 && adjective1 && adjective1 != "on" && verb1 && verb1 != "on" && noun1 && noun1 != "on"
                && feeling2 && adjective2 && adjective2 != "on" && verb2 && verb2 != "on" && noun2 && noun2 != "on"
                && feeling3 && adjective3 && adjective3 != "on" && verb3 && verb3 != "on" && noun3 && noun3 != "on"
                && generalFeeling) {
                submit.disabled = true;
                submit.innerHTML = "Bitte warten!";
                let formData = new FormData(form);
                let query = new URLSearchParams(formData);
                let response = yield fetch(url + "?" + query.toString());
                let responseText = yield response.text();
                console.log(responseText);
                form.style.display = "none";
                submit.style.display = "none";
                let thx = document.createElement("h2");
                thx.innerHTML = "Vielen Dank für Ihre Teilnahme. Sie können den Browser nun schließen.";
                thx.style.textAlign = "center";
                document.querySelector("body").appendChild(thx);
            }
            else {
                alert("Bitte füllen Sie alle Felder aus! Fehlende Felder sind rot markiert.");
            }
            if (!gender) {
                document.getElementById("gender").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("gender").style.backgroundColor = "white";
            }
            if (!age || age < 0 || age > 120) {
                document.getElementById("age").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("age").style.backgroundColor = "white";
            }
            if (!expertise) {
                document.getElementById("expertise").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("expertise").style.backgroundColor = "white";
            }
            if (!asmr) {
                document.getElementById("asmr").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("asmr").style.backgroundColor = "white";
            }
            if (!feeling1) {
                document.getElementById("feeling1").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("feeling1").style.backgroundColor = "white";
            }
            if (!feeling2) {
                document.getElementById("feeling2").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("feeling2").style.backgroundColor = "white";
            }
            if (!feeling3) {
                document.getElementById("feeling3").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("feeling3").style.backgroundColor = "white";
            }
            if (!generalFeeling) {
                document.getElementById("generalFeeling").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("generalFeeling").style.backgroundColor = "white";
            }
            if (!adjective1) {
                document.getElementById("markAdj1").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("markAdj1").style.backgroundColor = "white";
            }
            if (adjective1 == "on") {
                document.getElementById("textadj1").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("textadj1").style.backgroundColor = "white";
            }
            if (!adjective2) {
                document.getElementById("markAdj2").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("markAdj2").style.backgroundColor = "white";
            }
            if (adjective2 == "on") {
                document.getElementById("textadj2").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("textadj2").style.backgroundColor = "white";
            }
            if (!adjective3) {
                document.getElementById("markAdj3").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("markAdj3").style.backgroundColor = "white";
            }
            if (adjective3 == "on") {
                document.getElementById("textadj3").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("textadj3").style.backgroundColor = "white";
            }
            if (!verb1) {
                document.getElementById("markVerb1").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("markVerb1").style.backgroundColor = "white";
            }
            if (verb1 == "on") {
                document.getElementById("textverb1").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("textverb1").style.backgroundColor = "white";
            }
            if (!verb2) {
                document.getElementById("markVerb2").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("markVerb2").style.backgroundColor = "white";
            }
            if (verb2 == "on") {
                document.getElementById("textverb2").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("textverb2").style.backgroundColor = "white";
            }
            if (!verb3) {
                document.getElementById("markVerb3").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("markVerb3").style.backgroundColor = "white";
            }
            if (verb3 == "on") {
                document.getElementById("textverb3").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("textverb3").style.backgroundColor = "white";
            }
            if (!noun1) {
                document.getElementById("markNoun1").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("markNoun1").style.backgroundColor = "white";
            }
            if (noun1 == "on") {
                document.getElementById("textnoun1").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("textnoun1").style.backgroundColor = "white";
            }
            if (!noun2) {
                document.getElementById("markNoun2").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("markNoun2").style.backgroundColor = "white";
            }
            if (noun2 == "on") {
                document.getElementById("textnoun2").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("textnoun2").style.backgroundColor = "white";
            }
            if (!noun3) {
                document.getElementById("markNoun3").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("markNoun3").style.backgroundColor = "white";
            }
            if (noun3 == "on") {
                document.getElementById("textnoun3").style.backgroundColor = "rgb(255, 0, 0, 0.25)";
            }
            else {
                document.getElementById("textnoun3").style.backgroundColor = "white";
            }
        });
    }
    // Stop audio when other starts
    function stopAudio(_e) {
        var audios = document.getElementsByTagName('audio');
        for (var i = 0, len = audios.length; i < len; i++) {
            if (audios[i] != _e.target) {
                audios[i].pause();
            }
        }
    }
})(ASMR_Script || (ASMR_Script = {}));
//# sourceMappingURL=script.js.map