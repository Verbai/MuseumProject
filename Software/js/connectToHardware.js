console.log("connectToJs.js Ready");





let i = 0;
    function ON() {
        console.log("OK")

        if (i == 0) {
            document.getElementById("serverFrame").src = "http://192.168.4.1/RELAY1/ON";
            console.log("ON");
            i = 1;
        } else {
            document.getElementById("serverFrame").src = "http://192.168.4.1/RELAY1/OFF";
            console.log("OFF");
            i = 0;
        }
        console.log(i);
    }