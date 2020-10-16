namespace ASMR_Script{
    window.addEventListener("load", handleLoad);
    let demographics: HTMLDivElement;  

    let adjective: string[] = ["adj1", "adj2", "adj3"];

   function handleLoad(_event: Event): void {
        

        demographics = <HTMLDivElement>document.querySelector("div#demographics");        
        let button = <HTMLButtonElement>document.querySelector("button");

        demographics.addEventListener("change", handleChange);
        button.addEventListener("click", handleClick);
    }

    function handleChange(_event: Event): void { 
        let formData: FormData = new FormData(document.forms[0]);     
        for (let entry of formData) {
            console.log(entry);
        }
    }

    function handleClick(_event: Event): void {
        let gender: HTMLSelectElement = <HTMLSelectElement>document.getElementById("gender");
        let age: HTMLInputElement = <HTMLInputElement>document.getElementById("age");
       
        // Wenn die Felder ausgefüllt wurden und der User auf den Next-Button klickt wird die Frage generiert
        if (gender.value && parseInt(age.value) > 0 && parseInt(age.value) < 120){
            demographics.style.display = "none";

            let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
            document.getElementById("form").appendChild(fieldset);
            
            let legend = document.createElement("legend");
            fieldset.appendChild(legend);
            legend.innerHTML="Wie haben Sie sich beim Hören gefühlt? (Adjektiv)"
            
            for (let i: number = 0; i<3; i++){
                let input: HTMLInputElement = document.createElement("input");
                    input.setAttribute("type", "radio");
                    input.setAttribute("name", "adjective");
                    input.setAttribute("value", adjective[i]);
                    input.setAttribute("id", adjective[i]);
                let label: HTMLLabelElement = document.createElement("label");
                    label.setAttribute("for", adjective[i]);
                    label.innerHTML=adjective[i];
                let br: HTMLBRElement = document.createElement("br");
                    label.appendChild(br);
                    fieldset.appendChild(input);
                    fieldset.appendChild(label);
            }    

            let input: HTMLInputElement = document.createElement("input");
                input.setAttribute("type", "radio");
                input.setAttribute("name", "adjective");
                input.setAttribute("id", "otheradj");
           
            let label: HTMLLabelElement = document.createElement("label");
                label.setAttribute("for", "otheradj"); 
            
            let text: HTMLInputElement = document.createElement("input");
                text.setAttribute("type", "text");
                text.setAttribute("id", "text");
                text.setAttribute("placeholder", "Anderes Adjektiv");
                text.onclick = checkRadio;
                text.onchange = radioValue;
               
                fieldset.appendChild(input);
                fieldset.appendChild(label);
                label.appendChild(text);
                
        } else {
            alert("Bitte geben Sie ihr Geschlecht und Alter an!");
        }
    }
    // Bei Klick auf das Textfeld wird der Radio-Button gecheckt
    function checkRadio(): void {
        let input: HTMLInputElement = <HTMLInputElement>document.getElementById("otheradj");
        input.checked = true;
    } 

    //Wenn der Radio-Button gecheckt ist wird der Value des Textfeldes für den Radio-Button übernommen
    function radioValue(): void {
        let input: HTMLInputElement = <HTMLInputElement>document.getElementById("otheradj");
        let text: HTMLInputElement = <HTMLInputElement>document.getElementById("text");

        if (input.checked == true){
            input.value = text.value;
        }
    }

}