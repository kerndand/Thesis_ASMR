var ASMR_Script;
(function (ASMR_Script) {
    let random;
    let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numberQuestions = [];
    // Multidimensionale Arrays mit Daten für die Radio-Buttons
    let adjArrays = [
        ["schrill", "hart", "stechend", "metallisch", "rhytmisch", "hart", "gleichmäßig", "pulsierend", "kühl", "unruhig"],
        ["gleichmäßig", "rau", "ruhig", "schrill", "dumpf", "regelmäßig", "kräftig", "ruhig", "schwankend", "rhytmisch"],
        ["stechend", "aufdringlich", "gleichmäßig", "ruhig", "erdrückend", "langsam", "erdrückend", "körperhaft", "hoch", "rau"]
    ];
    let verbArrays = [
        ["essen", "eincremen", "knistern", "rauschen", "laufen", "laufen", "rauschen", "fließen", "tröpfeln", "streicheln"],
        ["schmatzen", "reiben", "wühlen", "rascheln", "rieseln", "knistern", "atmen", "tauchen", "regnen", "kratzen"],
        ["lecken", "putzen", "aufräumen", "regnen", "klettern", "quetschen", "segeln", "schütteln", "plätschern", "fegen"]
    ];
    let nounArrays = [
        ["Mensch", "Massage", "Müllsack", "Wald", "Kies", "Mensch", "Wind", "Lavalampe", "Teich", "Haare"],
        ["Speichel", "Mensch", "Laub", "Wind", "Schritte", "Schotter", "Wetter", "Flasche", "Regenrinne", "Besen"],
        ["Mund", "Haut", "Plastik", "Blätter", "Mensch", "Schnee", "Ventilator", "Flüssigkeit", "Wasser", "Badezimmer"]
    ];
    function generateContent() {
        let audio = document.querySelectorAll("audio");
        // Generiere Content 3 Mal
        for (let i = 0; i < 3; i++) {
            // Generiere random Nummer, welche sich nicht doppelt
            let randomNumber = Math.floor(Math.random() * numberArray.length);
            random = numberArray[randomNumber];
            numberQuestions.push(random);
            numberArray.splice(randomNumber, 1);
            let source = document.createElement("source");
            source.setAttribute("src", "../audio/file" + JSON.stringify(random + 1) + ".wav");
            source.setAttribute("type", "audio/wav");
            source.setAttribute("name", "file" + JSON.stringify(random + 1));
            audio[i].appendChild(source);
            let file = document.getElementsByClassName("file");
            file[i].setAttribute("name", "file" + JSON.stringify(i + 1));
            //file[i].setAttribute("value", "file" + JSON.stringify(random + 1));
            switch (random + 1) {
                case 1:
                    file[i].setAttribute("value", "Schmatzen");
                    break;
                case 2:
                    file[i].setAttribute("value", "Haut");
                    break;
                case 3:
                    file[i].setAttribute("value", "Plastiktüte");
                    break;
                case 4:
                    file[i].setAttribute("value", "Filmband");
                    break;
                case 5:
                    file[i].setAttribute("value", "Steinchen");
                    break;
                case 6:
                    file[i].setAttribute("value", "Mehlsack");
                    break;
                case 7:
                    file[i].setAttribute("value", "Pusten");
                    break;
                case 8:
                    file[i].setAttribute("value", "Sirup");
                    break;
                case 9:
                    file[i].setAttribute("value", "Wasser");
                    break;
                case 10:
                    file[i].setAttribute("value", "Haarbürste");
                    break;
            }
        }
        // Adjective 1                
        for (let i = 0; i < 3; i++) {
            let input = document.getElementsByName("adjective1");
            input[i].setAttribute("value", adjArrays[i][numberQuestions[0]]);
            input[i].setAttribute("id", adjArrays[i][numberQuestions[0]] + "1");
            let label = document.getElementsByClassName("labeladj1");
            label[i].setAttribute("for", adjArrays[i][numberQuestions[0]] + "1");
            label[i].innerHTML = adjArrays[i][numberQuestions[0]];
        }
        ;
        document.getElementById("textadj1").onclick = checkRadioAdj1;
        document.getElementById("textadj1").onchange = radioValueAdj1;
        function checkRadioAdj1() {
            let inputAdj1 = document.getElementById("otheradj1");
            inputAdj1.checked = true;
        }
        function radioValueAdj1() {
            let inputAdj1 = document.getElementById("otheradj1");
            let textAdj1 = document.getElementById("textadj1");
            if (inputAdj1.checked == true) {
                inputAdj1.value = textAdj1.value;
            }
            ;
        }
        ;
        // Verb 1               
        for (let i = 0; i < 3; i++) {
            let input = document.getElementsByName("verb1");
            input[i].setAttribute("value", verbArrays[i][numberQuestions[0]]);
            input[i].setAttribute("id", verbArrays[i][numberQuestions[0]] + "1");
            let label = document.getElementsByClassName("labelverb1");
            label[i].setAttribute("for", verbArrays[i][numberQuestions[0]] + "1");
            label[i].innerHTML = verbArrays[i][numberQuestions[0]];
        }
        ;
        document.getElementById("textverb1").onclick = checkRadioVerb1;
        document.getElementById("textverb1").onchange = radioValueVerb1;
        function checkRadioVerb1() {
            let inputVerb1 = document.getElementById("otherverb1");
            inputVerb1.checked = true;
        }
        function radioValueVerb1() {
            let inputVerb1 = document.getElementById("otherverb1");
            let textVerb1 = document.getElementById("textverb1");
            if (inputVerb1.checked == true) {
                inputVerb1.value = textVerb1.value;
            }
            ;
        }
        ;
        // Nomen 1               
        for (let i = 0; i < 3; i++) {
            let input = document.getElementsByName("noun1");
            input[i].setAttribute("value", nounArrays[i][numberQuestions[0]]);
            input[i].setAttribute("id", nounArrays[i][numberQuestions[0]] + "1");
            let label = document.getElementsByClassName("labelnoun1");
            label[i].setAttribute("for", nounArrays[i][numberQuestions[0]] + "1");
            label[i].innerHTML = nounArrays[i][numberQuestions[0]];
        }
        ;
        document.getElementById("textnoun1").onclick = checkRadioNoun1;
        document.getElementById("textnoun1").onchange = radioValueNoun1;
        function checkRadioNoun1() {
            let inputNoun1 = document.getElementById("othernoun1");
            inputNoun1.checked = true;
        }
        function radioValueNoun1() {
            let inputNoun1 = document.getElementById("othernoun1");
            let textNoun1 = document.getElementById("textnoun1");
            if (inputNoun1.checked == true) {
                inputNoun1.value = textNoun1.value;
            }
            ;
        }
        ;
        // Adjective 2               
        for (let i = 0; i < 3; i++) {
            let input = document.getElementsByName("adjective2");
            input[i].setAttribute("value", adjArrays[i][numberQuestions[1]]);
            input[i].setAttribute("id", adjArrays[i][numberQuestions[1]] + "2");
            let label = document.getElementsByClassName("labeladj2");
            label[i].setAttribute("for", adjArrays[i][numberQuestions[1]] + "2");
            label[i].innerHTML = adjArrays[i][numberQuestions[1]];
        }
        ;
        document.getElementById("textadj2").onclick = checkRadioAdj2;
        document.getElementById("textadj2").onchange = radioValueAdj2;
        function checkRadioAdj2() {
            let inputAdj2 = document.getElementById("otheradj2");
            inputAdj2.checked = true;
        }
        function radioValueAdj2() {
            let inputAdj2 = document.getElementById("otheradj2");
            let textAdj2 = document.getElementById("textadj2");
            if (inputAdj2.checked == true) {
                inputAdj2.value = textAdj2.value;
            }
            ;
        }
        ;
        // Verb 2              
        for (let i = 0; i < 3; i++) {
            let input = document.getElementsByName("verb2");
            input[i].setAttribute("value", verbArrays[i][numberQuestions[1]]);
            input[i].setAttribute("id", verbArrays[i][numberQuestions[1]] + "2");
            let label = document.getElementsByClassName("labelverb2");
            label[i].setAttribute("for", verbArrays[i][numberQuestions[1]] + "2");
            label[i].innerHTML = verbArrays[i][numberQuestions[1]];
        }
        ;
        document.getElementById("textverb2").onclick = checkRadioVerb2;
        document.getElementById("textverb2").onchange = radioValueVerb2;
        function checkRadioVerb2() {
            let inputVerb2 = document.getElementById("otherverb2");
            inputVerb2.checked = true;
        }
        function radioValueVerb2() {
            let inputVerb2 = document.getElementById("otherverb2");
            let textVerb2 = document.getElementById("textverb2");
            if (inputVerb2.checked == true) {
                inputVerb2.value = textVerb2.value;
            }
            ;
        }
        ;
        // Nomen 2               
        for (let i = 0; i < 3; i++) {
            let input = document.getElementsByName("noun2");
            input[i].setAttribute("value", nounArrays[i][numberQuestions[1]]);
            input[i].setAttribute("id", nounArrays[i][numberQuestions[1]] + "2");
            let label = document.getElementsByClassName("labelnoun2");
            label[i].setAttribute("for", nounArrays[i][numberQuestions[1]] + "2");
            label[i].innerHTML = nounArrays[i][numberQuestions[1]];
        }
        ;
        document.getElementById("textnoun2").onclick = checkRadioNoun2;
        document.getElementById("textnoun2").onchange = radioValueNoun2;
        function checkRadioNoun2() {
            let inputNoun2 = document.getElementById("othernoun2");
            inputNoun2.checked = true;
        }
        function radioValueNoun2() {
            let inputNoun2 = document.getElementById("othernoun2");
            let textNoun2 = document.getElementById("textnoun2");
            if (inputNoun2.checked == true) {
                inputNoun2.value = textNoun2.value;
            }
            ;
        }
        ;
        // Adjective 3              
        for (let i = 0; i < 3; i++) {
            let input = document.getElementsByName("adjective3");
            input[i].setAttribute("value", adjArrays[i][numberQuestions[2]]);
            input[i].setAttribute("id", adjArrays[i][numberQuestions[2]] + "3");
            let label = document.getElementsByClassName("labeladj3");
            label[i].setAttribute("for", adjArrays[i][numberQuestions[2]] + "3");
            label[i].innerHTML = adjArrays[i][numberQuestions[2]];
        }
        ;
        document.getElementById("textadj3").onclick = checkRadioAdj3;
        document.getElementById("textadj3").onchange = radioValueAdj3;
        function checkRadioAdj3() {
            let inputAdj3 = document.getElementById("otheradj3");
            inputAdj3.checked = true;
        }
        function radioValueAdj3() {
            let inputAdj3 = document.getElementById("otheradj3");
            let textAdj3 = document.getElementById("textadj3");
            if (inputAdj3.checked == true) {
                inputAdj3.value = textAdj3.value;
            }
            ;
        }
        ;
        // Verb 3             
        for (let i = 0; i < 3; i++) {
            let input = document.getElementsByName("verb3");
            input[i].setAttribute("value", verbArrays[i][numberQuestions[2]]);
            input[i].setAttribute("id", verbArrays[i][numberQuestions[2]] + "3");
            let label = document.getElementsByClassName("labelverb3");
            label[i].setAttribute("for", verbArrays[i][numberQuestions[2]] + "3");
            label[i].innerHTML = verbArrays[i][numberQuestions[2]];
        }
        ;
        document.getElementById("textverb3").onclick = checkRadioVerb3;
        document.getElementById("textverb3").onchange = radioValueVerb3;
        function checkRadioVerb3() {
            let inputVerb3 = document.getElementById("otherverb3");
            inputVerb3.checked = true;
        }
        function radioValueVerb3() {
            let inputVerb3 = document.getElementById("otherverb3");
            let textVerb3 = document.getElementById("textverb3");
            if (inputVerb3.checked == true) {
                inputVerb3.value = textVerb3.value;
            }
            ;
        }
        ;
        // Nomen 3               
        for (let i = 0; i < 3; i++) {
            let input = document.getElementsByName("noun3");
            input[i].setAttribute("value", nounArrays[i][numberQuestions[2]]);
            input[i].setAttribute("id", nounArrays[i][numberQuestions[2]] + "3");
            let label = document.getElementsByClassName("labelnoun3");
            label[i].setAttribute("for", nounArrays[i][numberQuestions[2]] + "3");
            label[i].innerHTML = nounArrays[i][numberQuestions[2]];
        }
        ;
        document.getElementById("textnoun3").onclick = checkRadioNoun3;
        document.getElementById("textnoun3").onchange = radioValueNoun3;
        function checkRadioNoun3() {
            let inputNoun3 = document.getElementById("othernoun3");
            inputNoun3.checked = true;
        }
        function radioValueNoun3() {
            let inputNoun3 = document.getElementById("othernoun3");
            let textNoun3 = document.getElementById("textnoun3");
            if (inputNoun3.checked == true) {
                inputNoun3.value = textNoun3.value;
            }
            ;
        }
        ;
    }
    ASMR_Script.generateContent = generateContent;
})(ASMR_Script || (ASMR_Script = {}));
//# sourceMappingURL=GenerateContent.js.map