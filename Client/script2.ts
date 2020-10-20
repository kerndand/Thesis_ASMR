namespace ASMR_Script {
    window.addEventListener("load", handleLoad);
    /* let form: HTMLFormElement;
    let url: string = "http://localhost:5001";
 */
    // Load-Funktion
    function handleLoad(_event: Event): void {

        generateContent();

        /* form = <HTMLFormElement>document.querySelector("form");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");

        submit.addEventListener("click", sendForms); */
    }

    /*  async function sendForms(): Promise<void> {
         let formData: FormData = new FormData(form);
         let query: URLSearchParams = new URLSearchParams(<any>formData);
         let response: Response = await fetch(url + "?" + query.toString());
         let responseText: string = await response.text();
         alert(responseText);
     } */
}