/*===============================================================
  map
===============================================================*/
var countryData = {

    "India": [
        "VWIPL S/4 HANA Migration",
        "VWIPL AMS",
        "ET2000 NSC",
        "One-SAP Implementation"
    ],
    "China": [
        "VCIC S/4 HANA Migration",
        "VGC S/4 HANA Migration",
        "ET2000 VGIC",
        "Anhui S/4HANA Implementation"
    ],
    "Saudi Arabia": [
        "SAP HCM  Development, VDMS",
        "Rollout",
        "VGME S/4HANA Implementation"
    ],
    "Russia": [
        "K-SRM Rollout, MAN Power"
    ],
    "Australia": [
        "AIMS S/4HANA Implementation"
    ],
    "Sweden": [
        "SPC AMS , SCANIA AMS",
        "Scania S/4HANA Implementation"
    ],
    "Spain": [
        "SAP K-SRM rollout",
        "SAPHCM",
        "SCANIA AMS"
    ],
    "United Kingdom": [
        "Bentley Motors"
    ],
    "Belgium": [
        "SCANIA AMS"
    ],
    "Germany": [
        "GPS AMS",
        "GPS Projects",
        "K-SRM Projects",
        "K-SRM AMS",
        "MAN Power",
        "MAN Sales and Aftersales",
        "MAN FIEB for Oracle and BI",
        "Parts 4.0",
        "TRATON cloud Implementation",
        "PowerCo SE",
        "VW Financial Services",
        "MAN S/4HANA Conversion",
        "CARIAD AMS"
    ],
    "United States": [
        "SAP K-SRM Rollout",
        "SCOUT S/4 Implementation"
    ],
    "Mexico": [
        "Audi Mexico – App Integration"
    ],
    "Brazil": [
        "SAP K-SRM Rollout"
    ],
    "South Africa": []
}

document.addEventListener("DOMContentLoaded", function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

function showModal(country) {
    let proj = countryData[country];
    /* Append Title of country */
    document.getElementById('countryModalLabel').innerText = country;

    /* Insert Projects */
    var ul = document.createElement("ul");
    for (var i = 0; i < proj.length; i++) {
        /* i > 6 ? projectsContainer.style.overflowY = 'Scroll' : projectsContainer.style.overflowY = 'none'; */
        var li = document.createElement("li");
        li.innerHTML = i+1 + "- " +proj[i];
        ul.appendChild(li);
    }

    let detailContainer = document.getElementById('countryDetails');
    detailContainer.innerHTML = "";
    detailContainer.appendChild(ul);
    new bootstrap.Modal(document.getElementById('countryModal')).show();
}


