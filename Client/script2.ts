namespace ASMR_Script {
    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement;
    let submit: HTMLButtonElement;
    //let url: string = "http://localhost:5001";
    let url: string = "https://asmr-umfrage.herokuapp.com/";

    // Load-Funktion
    function handleLoad(_event: Event): void {

        generateContent();

        form = <HTMLFormElement>document.querySelector("form");
        submit = <HTMLButtonElement>document.querySelector("button[type=button]");

        submit.addEventListener("click", sendForms); 
    }

    async function sendForms(): Promise<void> {
         let formData: FormData = new FormData(form);
         let query: URLSearchParams = new URLSearchParams(<any>formData);
         let response: Response = await fetch(url + "?" + query.toString());
         let responseText: string = await response.text();
         console.log(responseText);

         form.style.display = "none";
         submit.style.display = "none";   
         let thx: HTMLHeadingElement = document.createElement("h2");
         thx.innerHTML = "Vielen Dank für Ihre Teilnahme. Sie können den Browser nun schließen.";
         thx.style.textAlign = "center";
         document.querySelector("body").appendChild(thx);
     } 
}