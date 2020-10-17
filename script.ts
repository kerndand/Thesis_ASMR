namespace ASMR_Script{
    window.addEventListener("load", handleLoad);
    let demographics: HTMLDivElement;  

    let random: number;
    let numberArray: number[] = [0,1,2,3,4,5,6,7,8,9];

    // Multidimensionale Arrays mit Daten für die Radio-Buttons
    let adjArrays = [
        ["adj1.1", "adj1.2", "adj1.3", "adj1.4", "adj1.5", "adj1.6", "adj1.7", "adj1.8", "adj1.9", "adj1.10"],
        ["adj2.1", "adj2.2", "adj2.3", "adj2.4", "adj2.5", "adj2.6", "adj2.7", "adj2.8", "adj2.9", "adj2.10"],
        ["adj3.1", "adj3.2", "adj3.3", "adj3.4", "adj3.5", "adj3.6", "adj3.7", "adj3.8", "adj3.9", "adj3.10"]
    ];

    let verbArrays = [
        ["verb1.1", "verb1.2", "verb1.3", "verb1.4", "verb1.5", "verb1.6", "verb1.7", "verb1.8", "verb1.9", "verb1.10"],
        ["verb2.1", "verb2.2", "verb2.3", "verb2.4", "verb2.5", "verb2.6", "verb2.7", "verb2.8", "verb2.9", "verb2.10"],
        ["verb3.1", "verb3.2", "verb3.3", "verb3.4", "verb3.5", "verb3.6", "verb3.7", "verb3.8", "verb3.9", "verb3.10"]
    ];

    let nounArrays = [
        ["noun1.1", "noun1.2", "noun1.3", "noun1.4", "noun1.5", "noun1.6", "noun1.7", "noun1.8", "noun1.9", "noun1.10"],
        ["noun2.1", "noun2.2", "noun2.3", "noun2.4", "noun2.5", "noun2.6", "noun2.7", "noun2.8", "noun2.9", "noun2.10"],
        ["noun3.1", "noun3.2", "noun3.3", "noun3.4", "noun3.5", "noun3.6", "noun3.7", "noun3.8", "noun3.9", "noun3.10"]
    ];

    // Load-Funktion
    function handleLoad(_event: Event): void {
        

        demographics = <HTMLDivElement>document.querySelector("div#demographics");        
        let button = <HTMLButtonElement>document.querySelector("button");

        demographics.addEventListener("change", handleChange);
        button.addEventListener("click", handleClick);

    // Generiere Content 3 Mal
        for (let i: number = 0; i<3;i++){

        // Generiere random Nummer, welche sich nicht doppelt
            let randomNumber: number = Math.floor(Math.random()*numberArray.length);
            random = numberArray[randomNumber];
            numberArray.splice(randomNumber, 1);
            
            let div: HTMLDivElement = document.createElement("div");
                div.setAttribute("id", "div"+JSON.stringify(random));
                document.getElementById("form").appendChild(div);
            
            let audio: HTMLAudioElement = document.createElement("audio");
                audio.controls = true;
            let source: HTMLSourceElement = document.createElement("source");
                source.setAttribute("src", "audio/file"+JSON.stringify(random)+".mp3");
                source.setAttribute("type", "audio/mpeg");
                audio.appendChild(source);
                document.getElementById("div"+JSON.stringify(random)).appendChild(audio);
                



            // Generiere Adjektiv-Box     
                let fieldsetAdj: HTMLFieldSetElement = document.createElement("fieldset");
                div.appendChild(fieldsetAdj);
                
                let legendAdj = document.createElement("legend");
                fieldsetAdj.appendChild(legendAdj);
                legendAdj.innerHTML="Wie haben Sie sich beim Hören gefühlt? (Adjektiv)"
                
                for (let i: number = 0; i<3; i++){
                    let input: HTMLInputElement = document.createElement("input");
                        input.setAttribute("type", "radio");
                        input.setAttribute("name", "adjective");
                        input.setAttribute("value", adjArrays[i][random]);
                        input.setAttribute("id", adjArrays[i][random]);
                    let label: HTMLLabelElement = document.createElement("label");
                        label.setAttribute("for", adjArrays[i][random]);
                        label.innerHTML=adjArrays[i][random];
                    let br: HTMLBRElement = document.createElement("br");
                        label.appendChild(br);
                        fieldsetAdj.appendChild(input);
                        fieldsetAdj.appendChild(label);
                };    

                let inputAdj: HTMLInputElement = document.createElement("input");
                    inputAdj.setAttribute("type", "radio");
                    inputAdj.setAttribute("name", "adjective");
                    inputAdj.setAttribute("id", "otheradj");
            
                let labelAdj: HTMLLabelElement = document.createElement("label");
                    labelAdj.setAttribute("for", "otheradj"); 
                
                let textAdj: HTMLInputElement = document.createElement("input");
                    textAdj.setAttribute("type", "text");
                    textAdj.setAttribute("id", "textadj");
                    textAdj.setAttribute("placeholder", "Anderes Adjektiv");
                    textAdj.onclick = checkRadioAdj;
                    textAdj.onchange = radioValueAdj;
                
                    fieldsetAdj.appendChild(inputAdj);
                    fieldsetAdj.appendChild(labelAdj);
                    labelAdj.appendChild(textAdj);

            // Generiere Verb-Box     
                let fieldsetVerb: HTMLFieldSetElement = document.createElement("fieldset");
                div.appendChild(fieldsetVerb);
                
                let legendVerb = document.createElement("legend");
                fieldsetVerb.appendChild(legendVerb);
                legendVerb.innerHTML="Was ist passiert? (Verb)"
                
                for (let i: number = 0; i<3; i++){
                    let input: HTMLInputElement = document.createElement("input");
                        input.setAttribute("type", "radio");
                        input.setAttribute("name", "verb");
                        input.setAttribute("value", verbArrays[i][random]);
                        input.setAttribute("id", verbArrays[i][random]);
                    let label: HTMLLabelElement = document.createElement("label");
                        label.setAttribute("for", verbArrays[i][random]);
                        label.innerHTML= verbArrays[i][random];
                    let br: HTMLBRElement = document.createElement("br");
                        label.appendChild(br);
                        fieldsetVerb.appendChild(input);
                        fieldsetVerb.appendChild(label);
                };    

                let inputVerb: HTMLInputElement = document.createElement("input");
                    inputVerb.setAttribute("type", "radio");
                    inputVerb.setAttribute("name", "verb");
                    inputVerb.setAttribute("id", "otherverb");
            
                let labelVerb: HTMLLabelElement = document.createElement("label");
                    labelVerb.setAttribute("for", "otherverb"); 
                
                let textVerb: HTMLInputElement = document.createElement("input");
                    textVerb.setAttribute("type", "text");
                    textVerb.setAttribute("id", "textverb");
                    textVerb.setAttribute("placeholder", "Anderes Verb");
                    textVerb.onclick = checkRadioVerb;
                    textVerb.onchange = radioValueVerb;
                
                    fieldsetVerb.appendChild(inputVerb);
                    fieldsetVerb.appendChild(labelVerb);
                    labelVerb.appendChild(textVerb);


            // Generiere Nomen-Box     
                let fieldsetNoun: HTMLFieldSetElement = document.createElement("fieldset");
                div.appendChild(fieldsetNoun);
                
                let legendNoun = document.createElement("legend");
                fieldsetNoun.appendChild(legendNoun);
                legendNoun.innerHTML="Woher kam das Geräusch? (Nomen)"
                
                for (let i: number = 0; i<3; i++){
                    let input: HTMLInputElement = document.createElement("input");
                        input.setAttribute("type", "radio");
                        input.setAttribute("name", "noun");
                        input.setAttribute("value", nounArrays[i][random]);
                        input.setAttribute("id", nounArrays[i][random]);
                    let label: HTMLLabelElement = document.createElement("label");
                        label.setAttribute("for", nounArrays[i][random]);
                        label.innerHTML= nounArrays[i][random];
                    let br: HTMLBRElement = document.createElement("br");
                        label.appendChild(br);
                        fieldsetNoun.appendChild(input);
                        fieldsetNoun.appendChild(label);
                };    

                let inputNoun: HTMLInputElement = document.createElement("input");
                    inputNoun.setAttribute("type", "radio");
                    inputNoun.setAttribute("name", "noun");
                    inputNoun.setAttribute("id", "othernoun");
            
                let labelNoun: HTMLLabelElement = document.createElement("label");
                    labelNoun.setAttribute("for", "othernoun"); 
                
                let textNoun: HTMLInputElement = document.createElement("input");
                    textNoun.setAttribute("type", "text");
                    textNoun.setAttribute("id", "textnoun");
                    textNoun.setAttribute("placeholder", "Anderes Nomen");
                    textNoun.onclick = checkRadioNoun;
                    textNoun.onchange = radioValueNoun;
                
                    fieldsetNoun.appendChild(inputNoun);
                    fieldsetNoun.appendChild(labelNoun);
                    labelNoun.appendChild(textNoun);
        };
    };

    // Change-Funktion 
    function handleChange(_event: Event): void { 
        let formData: FormData = new FormData(document.forms[0]);     
        for (let entry of formData) {
            console.log(entry);
        };
    };


    // Check Radio-Button bei Klick auf Textfeld (Adjektiv)
    function checkRadioAdj(): void {
        let inputAdj: HTMLInputElement = <HTMLInputElement>document.getElementById("otheradj");
        inputAdj.checked = true;
    };

    // Setze den Wert des Textfeldes als Wert des Radio-Buttons (Adjektiv)
    function radioValueAdj(): void {
        let inputAdj: HTMLInputElement = <HTMLInputElement>document.getElementById("otheradj");
        let textAdj: HTMLInputElement = <HTMLInputElement>document.getElementById("textadj");
        
        if (inputAdj.checked == true){
            inputAdj.value = textAdj.value;
        };
    };

     // Check Radio-Button bei Klick auf Textfeld (Verb)
     function checkRadioVerb(): void {
        let inputVerb: HTMLInputElement = <HTMLInputElement>document.getElementById("otherverb");
        inputVerb.checked = true;
    };

    // Setze den Wert des Textfeldes als Wert des Radio-Buttons (Verb)
    function radioValueVerb(): void {
        let inputVerb: HTMLInputElement = <HTMLInputElement>document.getElementById("otherverb");
        let textVerb: HTMLInputElement = <HTMLInputElement>document.getElementById("textverb");

        if (inputVerb.checked == true){
            inputVerb.value = textVerb.value;
        };
    };

    // Check Radio-Button bei Klick auf Textfeld (Nomen)
    function checkRadioNoun(): void {
        let inputNoun: HTMLInputElement = <HTMLInputElement>document.getElementById("othernoun");
        inputNoun.checked = true;
    };

    // Setze den Wert des Textfeldes als Wert des Radio-Buttons (Nomen)
    function radioValueNoun(): void {
        let inputNoun: HTMLInputElement = <HTMLInputElement>document.getElementById("othernoun");
        let textNoun: HTMLInputElement = <HTMLInputElement>document.getElementById("textnoun");

        if (inputNoun.checked == true){
            inputNoun.value = textNoun.value;
        };
    };

    // Next-Button Click-Funktion
    function handleClick(_event: Event): void {};

};