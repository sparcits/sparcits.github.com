/*===============================================================
  map
===============================================================*/
var projects = {
    "ind": [
        "India",
        "VWIPL S/4 HANA Migration",
        "VWIPL AMS",
        "ET2000 NSC",
        "One-SAP Implementation"
    ],
    "chn": [
        "China",
        "VCIC S/4 HANA Migration",
        "VGC S/4 HANA Migration",
        "ET2000 VGIC",
        "Anhui S/4HANA Implementation"
    ],
    "sau": [
        "Saudi Arabia",
        "SAP HCM  Development, VDMS",
        "Rollout",
        "VGME S/4HANA Implementation"
    ],
    "rus": [
        "Russia",
        "K-SRM Rollout, MAN Power"
    ],
    "aus": [
        "Australia",
        "AIMS S/4HANA Implementation"
    ],
    "swe": [
        "Sweden",
        "SPC AMS , SCANIA AMS",
        "Scania S/4HANA Implementation"
    ],
    "esp": [
        "Spain",
        "SAP K-SRM rollout",
        "SAPHCM",
        "SCANIA AMS"
    ],
    "gbr": [
        "United Kingdom",
        "Bentley Motors"
    ],
    "bel": [
        "Belgium",
        "SCANIA AMS"
    ],
    "deu": [
        "Germany",
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
    "usa": [
        "United States",
        "SAP K-SRM Rollout",
        "SCOUT S/4 Implementation"
    ],
    "mex": [
        "Mexico",
        "Audi Mexico – App Integration"
    ],
    "bra": [
        "Brazil",
        "SAP K-SRM Rollout"
    ]
}
function displayProjects(country) {
    let overFlow = false;
    var proj = projects[country];
    /* Clear all elements in projects-box */
    var projectsContainer = document.getElementById("country-list");
    projectsContainer.innerHTML = "";
    /* insert title in container */
    var h3 = document.createElement("h3");
    h3.innerText = proj[0];
    projectsContainer.appendChild(h3);
    /* Insert Projects */
    var ul = document.createElement("ul");
    for (var i = 1; i < proj.length; i++) {
        i>6 ? projectsContainer.style.overflowY = 'Scroll' : projectsContainer.style.overflowY = 'none' ;
        var li = document.createElement("li");
        li.innerHTML = proj[i];
        ul.appendChild(li);
    }
    projectsContainer.appendChild(ul);

    /* Set height of container */
    let height = document.getElementById("map-box").clientHeight;
    projectsContainer.style.height = height + 'px';
    
    
}


