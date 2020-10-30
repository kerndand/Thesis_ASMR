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

        // Stop audio when other starts
        document.addEventListener('play', function (e) { stopAudio(e) }, true);

    }

    async function sendForms(): Promise<void> {
        let gender = document.forms[0].gender.value;
        let age = document.forms[0].age.value;
        let expertise = document.forms[0].expertise.value;
        let asmr = document.forms[0].asmr.value;
        let hearingdamage= document.forms[0].hearingdamage.value;
        let adjective1 = document.forms[0].adjective1.value;
        let verb1 = document.forms[0].verb1.value;
        let noun1 = document.forms[0].noun1.value;
        let adjective2 = document.forms[0].adjective2.value;
        let verb2 = document.forms[0].verb2.value;
        let noun2 = document.forms[0].noun2.value;
        let adjective3 = document.forms[0].adjective3.value;
        let verb3 = document.forms[0].verb3.value;
        let noun3 = document.forms[0].noun3.value;
        let finish = document.forms[0].feeling.value;

        if (gender && age > 0 && age < 120 && expertise && asmr && hearingdamage
            && adjective1 && adjective1 != "on" && verb1 && verb1 != "on" && noun1 && noun1 != "on"
            && adjective2 && adjective2 != "on" && verb2 && verb2 != "on" && noun2 && noun2 != "on"
            && adjective3 && adjective3 != "on" && verb3 && verb3 != "on" && noun3 && noun3 != "on"
            && finish && finish != "on") {
            
            submit.innerHTML = "Bitte Warten";
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
        } else if (!gender) {

            alert("Bitte geben Sie Ihr Geschlecht an!");

        } else if (age == "" || age < 0 || age > 120) {

            alert("Bitte geben Sie ein Alter zwischen 1 und 120 an!");

        } else if (adjective1 == "on" || verb1 == "on" || noun1 == "on"
            || adjective2 == "on" || verb2 == "on" || noun2 == "on"
            || adjective3 == "on" || verb3 == "on" || noun3 == "on"
            || finish == "on") {

            alert("Bitte stellen Sie sicher, dass das alle von Ihnen angewählten Textfelder ausgefüllt sind!");

        } else {

            alert("Bitte füllen Sie alle Felder aus!")

        }
    }

    // Stop audio when other starts
    function stopAudio(_e: Event) {
        var audios = document.getElementsByTagName('audio');
        for (var i = 0, len = audios.length; i < len; i++) {
            if (audios[i] != _e.target) {
                audios[i].pause();
            }
        }
    }
}