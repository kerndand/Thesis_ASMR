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
    }
    function sendForms() {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
})(ASMR_Script || (ASMR_Script = {}));
//# sourceMappingURL=script2.js.map