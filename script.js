var ASMR_Script;
(function (ASMR_Script) {
    window.addEventListener("load", handleLoad);
    let demographics;
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
    function handleLoad(_event) {
        demographics = document.querySelector("div#demographics");
        let button = document.querySelector("button");
        demographics.addEventListener("change", handleChange);
        button.addEventListener("click", handleClick);
    }
    ;
    // Change-Funktion 
    function handleChange(_event) {
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            console.log(entry);
        }
        ;
    }
    ;
    // Next-Button Click-Funktion
    function handleClick(_event) {
        let gender = document.getElementById("gender");
        let age = document.getElementById("age");
        // Wenn die Felder ausgefüllt wurden und der User auf den Next-Button klickt wird die Frage generiert
        if (gender.value && parseInt(age.value) > 0 && parseInt(age.value) < 120) {
            demographics.style.display = "none";
            let random = Math.floor(Math.random() * 9);
            // Generiere Adjektiv-Box     
            let fieldsetAdj = document.createElement("fieldset");
            document.getElementById("form").appendChild(fieldsetAdj);
            let legendAdj = document.createElement("legend");
            fieldsetAdj.appendChild(legendAdj);
            legendAdj.innerHTML = "Wie haben Sie sich beim Hören gefühlt? (Adjektiv)";
            for (let i = 0; i < 3; i++) {
                let input = document.createElement("input");
                input.setAttribute("type", "radio");
                input.setAttribute("name", "adjective");
                input.setAttribute("value", adjArrays[i][random]);
                input.setAttribute("id", adjArrays[i][random]);
                let label = document.createElement("label");
                label.setAttribute("for", adjArrays[i][random]);
                label.innerHTML = adjArrays[i][random];
                let br = document.createElement("br");
                label.appendChild(br);
                fieldsetAdj.appendChild(input);
                fieldsetAdj.appendChild(label);
            }
            ;
            let inputAdj = document.createElement("input");
            inputAdj.setAttribute("type", "radio");
            inputAdj.setAttribute("name", "adjective");
            inputAdj.setAttribute("id", "otheradj");
            let labelAdj = document.createElement("label");
            labelAdj.setAttribute("for", "otheradj");
            let textAdj = document.createElement("input");
            textAdj.setAttribute("type", "text");
            textAdj.setAttribute("id", "text");
            textAdj.setAttribute("placeholder", "Anderes Adjektiv");
            textAdj.onclick = checkRadio;
            textAdj.onchange = radioValue;
            fieldsetAdj.appendChild(inputAdj);
            fieldsetAdj.appendChild(labelAdj);
            labelAdj.appendChild(textAdj);
            // Generiere Verb-Box     
            let fieldsetVerb = document.createElement("fieldset");
            document.getElementById("form").appendChild(fieldsetVerb);
            let legendVerb = document.createElement("legend");
            fieldsetVerb.appendChild(legendVerb);
            legendVerb.innerHTML = "Was ist passiert? (Verb)";
            for (let i = 0; i < 3; i++) {
                let input = document.createElement("input");
                input.setAttribute("type", "radio");
                input.setAttribute("name", "verb");
                input.setAttribute("value", verbArrays[i][random]);
                input.setAttribute("id", verbArrays[i][random]);
                let label = document.createElement("label");
                label.setAttribute("for", verbArrays[i][random]);
                label.innerHTML = verbArrays[i][random];
                let br = document.createElement("br");
                label.appendChild(br);
                fieldsetVerb.appendChild(input);
                fieldsetVerb.appendChild(label);
            }
            ;
            let inputVerb = document.createElement("input");
            inputVerb.setAttribute("type", "radio");
            inputVerb.setAttribute("name", "verb");
            inputVerb.setAttribute("id", "otheradj");
            let labelVerb = document.createElement("label");
            labelVerb.setAttribute("for", "otheradj");
            let textVerb = document.createElement("input");
            textVerb.setAttribute("type", "text");
            textVerb.setAttribute("id", "text");
            textVerb.setAttribute("placeholder", "Anderes Verb");
            textVerb.onclick = checkRadio;
            textVerb.onchange = radioValue;
            fieldsetVerb.appendChild(inputVerb);
            fieldsetVerb.appendChild(labelVerb);
            labelVerb.appendChild(textVerb);
            // Generiere Nomen-Box     
            let fieldsetNoun = document.createElement("fieldset");
            document.getElementById("form").appendChild(fieldsetNoun);
            let legendNoun = document.createElement("legend");
            fieldsetNoun.appendChild(legendNoun);
            legendNoun.innerHTML = "Woher kam das Geräusch? (Nomen)";
            for (let i = 0; i < 3; i++) {
                let input = document.createElement("input");
                input.setAttribute("type", "radio");
                input.setAttribute("name", "noun");
                input.setAttribute("value", nounArrays[i][random]);
                input.setAttribute("id", nounArrays[i][random]);
                let label = document.createElement("label");
                label.setAttribute("for", nounArrays[i][random]);
                label.innerHTML = nounArrays[i][random];
                let br = document.createElement("br");
                label.appendChild(br);
                fieldsetNoun.appendChild(input);
                fieldsetNoun.appendChild(label);
            }
            ;
            let inputNoun = document.createElement("input");
            inputNoun.setAttribute("type", "radio");
            inputNoun.setAttribute("name", "noun");
            inputNoun.setAttribute("id", "otheradj");
            let labelNoun = document.createElement("label");
            labelNoun.setAttribute("for", "otheradj");
            let textNoun = document.createElement("input");
            textNoun.setAttribute("type", "text");
            textNoun.setAttribute("id", "text");
            textNoun.setAttribute("placeholder", "Anderes Nomen");
            textNoun.onclick = checkRadio;
            textNoun.onchange = radioValue;
            fieldsetNoun.appendChild(inputNoun);
            fieldsetNoun.appendChild(labelNoun);
            labelNoun.appendChild(textNoun);
        }
        else {
            alert("Bitte geben Sie ihr Geschlecht und Alter an!");
        }
        ;
    }
    ;
    // Bei Klick auf das Textfeld wird der Radio-Button gecheckt
    function checkRadio() {
        let input = document.getElementById("otheradj");
        input.checked = true;
    }
    ;
    //Wenn der Radio-Button gecheckt ist wird der Value des Textfeldes für den Radio-Button übernommen
    function radioValue() {
        let input = document.getElementById("otheradj");
        let text = document.getElementById("text");
        if (input.checked == true) {
            input.value = text.value;
        }
        ;
    }
    ;
})(ASMR_Script || (ASMR_Script = {}));
;
//# sourceMappingURL=script.js.map