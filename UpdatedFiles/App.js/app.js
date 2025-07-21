(function() {
    const appName = "Meshery";
    const version = "v1.0";
    const releaseDate = "2023-07-21";
    
    function logAppDetails() {
        console.log(`Application: ${appName}`);
        console.log(`Version: ${version}`);
        console.log(`Release Date: ${releaseDate}`);
    }

    function addNumbers(a, b) {
        return a + b;
    }

    function checkVersion(currentVersion) {
        if (currentVersion === version) {
            console.log("App is up-to-date.");
        } else {
            console.log("App version is outdated, update required.");
        }
    }

    function handleUserInput(input) {
        if (input === "start") {
            console.log("Application starting...");
            logAppDetails();
        } else if (input === "stop") {
            console.log("Application stopping...");
        } else {
            console.log("Invalid input!");
        }
    }

    const userInput = "start";
    handleUserInput(userInput);

    const result = addNumbers(5, 10);
    console.log(`The result of the addition is: ${result}`);

    checkVersion("v1.0");

})();
