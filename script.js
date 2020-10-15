var ASMR_Script;
(function (ASMR_Script) {
    window.addEventListener("load", handleLoad);
    let demographics;
    function handleLoad(_event) {
        demographics = document.querySelector("form");
        let button = document.querySelector("button");
        demographics.addEventListener("change", handleChange);
        button.addEventListener("click", handleClick);
    }
    function handleChange(_event) {
        let formData = new FormData(demographics);
        for (let entry of formData) {
            console.log(entry);
        }
    }
    function handleClick(_event) {
        demographics.style.visibility = "hidden";
    }
})(ASMR_Script || (ASMR_Script = {}));
//# sourceMappingURL=script.js.map