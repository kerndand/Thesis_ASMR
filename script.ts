namespace ASMR_Script{
    window.addEventListener("load", handleLoad);
    let demographics: HTMLFormElement;  

   function handleLoad(_event: Event): void {
        

        demographics = <HTMLFormElement>document.querySelector("form");        
        let button = <HTMLButtonElement>document.querySelector("button");

        demographics.addEventListener("change", handleChange);
        button.addEventListener("click", handleClick);
    }

    function handleChange(_event: Event): void { 
        let formData: FormData = new FormData(demographics);     
        for (let entry of formData) {
            console.log(entry);
        }
    }

    function handleClick(_event: Event): void {
       demographics.style.visibility = "hidden";
    }

}