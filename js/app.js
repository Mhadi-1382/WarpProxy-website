
/*!
    WarpProxy Template
    Created on date: 1/23/2024
    Built on date: 
*/

// ========== SERVICE WORKER/MANIFEST
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('service-worker.js');
//     });
// }


// ========== PROCESSORING
// CPU
function cpuProcessoring() {
    var arrayNumber = [5, 8, 14, 18, 24, 20, 33, 40, 10, 30, 36, 50, 78, 90, 60, 70, 65, 45, 80, 83, 85, 99];
    var arrayNumberRandom = Math.floor(Math.random() * arrayNumber.length);
    var cpuId = document.getElementById("cpuId");
    var cpuProcessoring = document.querySelector(".chart-radial-bar-60");

    cpuId.innerHTML = arrayNumber[arrayNumberRandom] + "%";
    cpuProcessoring.style.width = arrayNumber[arrayNumberRandom] + "%";
}
setInterval(() => {
    cpuProcessoring()
}, 3000);
// RAM
function ramProcessoring() {
    var arrayNumber = [40, 55, 67, 71, 84, 92];
    var arrayNumberRandom = Math.floor(Math.random() * arrayNumber.length);
    var cpuId = document.getElementById("ramId");
    var cpuProcessoring = document.querySelector(".chart-radial-bar-40");

    cpuId.innerHTML = arrayNumber[arrayNumberRandom] + "%";
    cpuProcessoring.style.width = arrayNumber[arrayNumberRandom] + "%";
}
setInterval(() => {
    ramProcessoring()
}, 6000);
// HDD
function hddProcessoring() {
    var arrayNumber = [5, 8, 14, 18, 24, 20, 33, 40, 10, 30, 36, 50, 78, 90, 60, 70, 65, 45, 80, 83, 85, 99];
    var arrayNumberRandom = Math.floor(Math.random() * arrayNumber.length);
    var hddId = document.getElementById("hddId");
    var hddProcessoring = document.querySelector(".chart-radial-bar-10");

    hddId.innerHTML = arrayNumber[arrayNumberRandom] + "%";
    hddProcessoring.style.width = arrayNumber[arrayNumberRandom] + "%";
}
setInterval(() => {
    hddProcessoring()
}, 2000);

var processoringRunning = document.getElementById("processoringRunning");
var processoringRunning2 = document.getElementById("processoringRunning2");
var processoringRunning3 = document.getElementById("processoringRunning3");
setInterval(() => {
    processoringRunning.innerHTML = "Running";
    processoringRunning2.innerHTML = "Running";
    processoringRunning3.innerHTML = "Running";
}, 3000);


// ========== LOADER
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector(".loader-warpper").classList.toggle("loader-warpper-hide");
        document.querySelector(".signin img").classList.toggle("signin-animation-logo");
        document.querySelector(".indicator-warpper").classList.toggle("indicator-animation");
    }, 3000);
});


// ========== SIDEBAR/NAVBAR
function navbarMobile() {
    document.getElementById("navbarMobile").classList.toggle("navbar-mobile-style");
    document.querySelector(".fa-bars").classList.toggle("fa-bars-style");
    document.querySelector(".fa-close").classList.toggle("fa-close-style");
}
function avatarUserDropdown() {
    document.getElementById("avatarUserDropdown").classList.toggle("avatar-user-dropdown-style");
}


// ========== SWITCH LIGHT/DARK MODE
function switchLightMode() {
    document.body.classList.remove("switch-dark-mode-style");
    document.querySelector(".logo-dark").classList.remove("logo-dark-style");
    document.querySelector(".logo-dark-navbar").classList.remove("logo-dark-navbar-style");

    localStorage.setItem("Mode", "light");
}
function switchDarkMode() {
    document.body.classList.add("switch-dark-mode-style");
    document.querySelector(".logo-dark").classList.add("logo-dark-style");
    document.querySelector(".logo-dark-navbar").classList.add("logo-dark-navbar-style");

    localStorage.setItem("Mode", "dark");
}
if (localStorage.getItem("Mode") == "dark") {
    document.body.classList.add("switch-dark-mode-style");
    document.querySelector(".logo-dark").classList.add("logo-dark-style");
    document.querySelector(".logo-dark-navbar").classList.add("logo-dark-navbar-style");
} else if (localStorage.getItem("Mode") == "light") {
    document.body.classList.remove("switch-dark-mode-style");
}


// ========== ALERT
var inputText = document.getElementById("inputText");
var inputPassword = document.getElementById("inputPassword");
var inputSubmit = document.getElementById("inputSubmit");
var alertSuccessful = document.getElementById("alertSuccessful");
var alertUnsuccessful = document.getElementById("alertUnsuccessful");
var alertSuccessfulPanel = document.getElementById("alertSuccessfulPanel");
var alertSuccessfulCopy = document.getElementById("alertSuccessfulCopy");
var addInboundsCreates = document.getElementById("addInboundsCreates");

// SIGNIN SYSTEM
inputSubmit.addEventListener("click", validation)
function validation() {
    inputSubmit.value = "Processoring...";
    inputSubmit.classList.add("loader-processor-button");

    if (inputPassword.value == "root" & inputText.value == "root") {
        setTimeout(() => {
            alertSuccessful.classList.add("alert-style");

            setTimeout(() => {
                location.href = "panel.html";
            }, 1000);
            setTimeout(() => {
                alertSuccessful.classList.remove("alert-style");
            }, 5000);
        }, 3000);
    } else {
        setTimeout(() => {
            inputSubmit.value = "Sign in";
            inputSubmit.classList.remove("loader-processor-button");
            alertUnsuccessful.classList.add("alert-style");

            setTimeout(() => {
                alertUnsuccessful.classList.remove("alert-style");
            }, 5000);
        }, 3000);
    }
}
function alertClose() {
    alertSuccessful.classList.remove("alert-style");
    alertUnsuccessful.classList.remove("alert-style");
}

// RESTART PANEL
function restartPanel() {
    setTimeout(() => {
        alertSuccessfulPanel.classList.add("alert-style");
        setTimeout(() => {
            alertSuccessfulPanel.classList.remove("alert-style");
        }, 5000);
    }, 1000);

    setTimeout(() => {
        location.reload();
    }, 3000);
}
function alertClosePanel() {
    alertSuccessfulPanel.classList.remove("alert-style");
}

// COPY IPV4/6
function ipIPv4() {
    var ipIPv4 = document.querySelector("#ipIPv4");
    navigator.clipboard.writeText(ipIPv4.innerHTML);

    setTimeout(() => {
        alertSuccessfulCopy.classList.add("alert-style");
        setTimeout(() => {
            alertSuccessfulCopy.classList.remove("alert-style");
        }, 5000);
    }, 1000);
}
function ipIPv6() {
    var ipIPv6 = document.querySelector("#ipIPv6");
    navigator.clipboard.writeText(ipIPv6.innerHTML);

    setTimeout(() => {
        alertSuccessfulCopy.classList.add("alert-style");
        setTimeout(() => {
            alertSuccessfulCopy.classList.remove("alert-style");
        }, 5000);
    }, 1000);
}


// ========== CARD
function networkTrafficCard() {
    document.getElementById("networkTrafficCard").classList.toggle("card-style");
}
function cpuCard() {
    document.getElementById("cpuCard").classList.toggle("card-style");
}
function ramCard() {
    document.getElementById("ramCard").classList.toggle("card-style");
}
function hddCard() {
    document.getElementById("hddCard").classList.toggle("card-style");
}
function systemInfoCard() {
    document.getElementById("systemInfoCard").classList.toggle("card-style");
}
function systemLogsCard() {
    document.getElementById("systemLogsCard").classList.toggle("card-style");
}


// ========== INBOUNDS
// DELETE INBOUNDS
function deleteInboundsID1() {
    document.getElementById("inboundsTableRowID1").remove();
}
function deleteInboundsID2() {
    document.getElementById("inboundsTableRowID2").remove();
}
function deleteInboundsID3() {
    document.getElementById("inboundsTableRowID3").remove();
}
function deleteInboundsID4() {
    document.getElementById("inboundsTableRowID4").remove();
}
function deleteInboundsID5() {
    document.getElementById("inboundsTableRowID5").remove();
}
function deleteInboundsID6() {
    document.getElementById("inboundsTableRowID6").remove();
}
function deleteInboundsID7() {
    document.getElementById("inboundsTableRowID7").remove();
}
function deleteInboundsID8() {
    document.getElementById("inboundsTableRowID8").remove();
}
// OPTIONS DROPDOWN INBOUNDS
function optionsDropdownInboundsID1() {
    document.getElementById("optionsDropdownInboundsID1").classList.toggle("options-dropdown-inbounds-style")
}
function optionsDropdownInboundsID2() {
    document.getElementById("optionsDropdownInboundsID2").classList.toggle("options-dropdown-inbounds-style")
}
function optionsDropdownInboundsID3() {
    document.getElementById("optionsDropdownInboundsID3").classList.toggle("options-dropdown-inbounds-style");
}
function optionsDropdownInboundsID4() {
    document.getElementById("optionsDropdownInboundsID4").classList.toggle("options-dropdown-inbounds-style");
}
function optionsDropdownInboundsID5() {
    document.getElementById("optionsDropdownInboundsID5").classList.toggle("options-dropdown-inbounds-style");
}
function optionsDropdownInboundsID6() {
    document.getElementById("optionsDropdownInboundsID6").classList.toggle("options-dropdown-inbounds-style");
}
function optionsDropdownInboundsID7() {
    document.getElementById("optionsDropdownInboundsID7").classList.toggle("options-dropdown-inbounds-style");
}
function optionsDropdownInboundsID8() {
    document.getElementById("optionsDropdownInboundsID8").classList.toggle("options-dropdown-inbounds-style");
}
// OPTIONS DROPDOWN INBOUNDS
function actionsDropdownInbounds() {
    document.getElementById("actionsDropdownInbounds").classList.toggle("actions-dropdown-inbounds-style");
}
// ADD INBOUNDS
function addInbounds() {
    document.getElementById("addInboundsOverlay").classList.toggle("add-inbounds-style");
}
// ADD INBOUNDS CREATE
function addInboundsCreate() {
    document.getElementById("addInboundsOverlay").classList.toggle("add-inbounds-style");

    setTimeout(() => {
        addInboundsCreates.classList.add("alert-style");
        setTimeout(() => {
            addInboundsCreates.classList.remove("alert-style");
        }, 5000);
    }, 1000);
}
