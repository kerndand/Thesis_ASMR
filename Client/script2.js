var ASMR_Script;
(function (ASMR_Script) {
    window.addEventListener("load", handleLoad);
    //let form: HTMLFormElement;
    // Load-Funktion
    function handleLoad(_event) {
        ASMR_Script.generateContent();
        /*  form = <HTMLFormElement>document.querySelector("form");
         let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
 
         submit.addEventListener("click", sendForms);  */
    }
    /*   async function sendForms(): Promise<void>{
          let formData: FormData = new FormData(form);
          let query: URLSearchParams = new URLSearchParams(<any>formData);
          await fetch("main.html?" + query.toString());
          alert("Data send!");
      }  */
})(ASMR_Script || (ASMR_Script = {}));
//# sourceMappingURL=script2.js.map