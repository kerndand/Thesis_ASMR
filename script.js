var ASMR_Script;
(function (ASMR_Script) {
    window.addEventListener("load", handleLoad);
    let demographics;
    let adjective = ["adj1", "adj2", "adj3"];
    function handleLoad(_event) {
        demographics = document.querySelector("div#demographics");
        let button = document.querySelector("button");
        demographics.addEventListener("change", handleChange);
        button.addEventListener("click", handleClick);
    }
    function handleChange(_event) {
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            console.log(entry);
        }
    }
    function handleClick(_event) {
        let gender = document.getElementById("gender");
        let age = document.getElementById("age");
        // Wenn die Felder ausgefüllt wurden und der User auf den Next-Button klickt wird die Frage generiert
        if (gender.value && parseInt(age.value) > 0 && parseInt(age.value) < 120) {
            demographics.style.display = "none";
            let fieldset = document.createElement("fieldset");
            document.getElementById("form").appendChild(fieldset);
            let legend = document.createElement("legend");
            fieldset.appendChild(legend);
            legend.innerHTML = "Wie haben Sie sich beim Hören gefühlt? (Adjektiv)";
            for (let i = 0; i < 3; i++) {
                let input = document.createElement("input");
                input.setAttribute("type", "radio");
                input.setAttribute("name", "adjective");
                input.setAttribute("value", adjective[i]);
                input.setAttribute("id", adjective[i]);
                let label = document.createElement("label");
                label.setAttribute("for", adjective[i]);
                label.innerHTML = adjective[i];
                let br = document.createElement("br");
                label.appendChild(br);
                fieldset.appendChild(input);
                fieldset.appendChild(label);
            }
            let input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "adjective");
            input.setAttribute("id", "otheradj");
            let label = document.createElement("label");
            label.setAttribute("for", "otheradj");
            let text = document.createElement("input");
            text.setAttribute("type", "text");
            text.setAttribute("id", "text");
            text.setAttribute("placeholder", "Anderes Adjektiv");
            text.onclick = checkRadio;
            text.onchange = radioValue;
            fieldset.appendChild(input);
            fieldset.appendChild(label);
            label.appendChild(text);
        }
        else {
            alert("Bitte geben Sie ihr Geschlecht und Alter an!");
        }
    }
    // Bei Klick auf das Textfeld wird der Radio-Button gecheckt
    function checkRadio() {
        let input = document.getElementById("otheradj");
        input.checked = true;
    }
    //Wenn der Radio-Button gecheckt ist wird der Value des Textfeldes für den Radio-Button übernommen
    function radioValue() {
        let input = document.getElementById("otheradj");
        let text = document.getElementById("text");
        if (input.checked == true) {
            input.value = text.value;
        }
    }
})(ASMR_Script || (ASMR_Script = {}));
//# sourceMappingURL=script.js.map