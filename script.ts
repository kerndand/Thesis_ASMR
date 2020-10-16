namespace ASMR_Script{
    window.addEventListener("load", handleLoad);
    let demographics: HTMLDivElement;  

   function handleLoad(_event: Event): void {
        

        demographics = <HTMLDivElement>document.querySelector("div#demographics");        
        let button = <HTMLButtonElement>document.querySelector("button");

        demographics.addEventListener("change", handleChange);
        button.addEventListener("click", handleClick);
    }

    function handleChange(_event: Event): void { 
        let formData: FormData = new FormData(document.querySelector("form"));     
        for (let entry of formData) {
            console.log(entry);
        }
    }

    function handleClick(_event: Event): void {
       demographics.style.display = "none";

       let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
       demographics.appendChild(fieldset);
       let legend = document.createElement("legend");
       fieldset.appendChild(legend);
       legend.innerHTML="Wie haben Sie sich beim Hören gefühlt? (Adjektiv)"
    }

}