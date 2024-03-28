
function menuOpen() {
    var hamburger = document.getElementById("hamburger");
    var modalMenu = document.getElementById("modalMenu");
    hamburger.classList.toggle("open");
    modalMenu.classList.toggle("show");
}

function writeData() {
    var formData = new FormData(surveyForm);
    var id = formData.get("user_email");
    var str = JSON.stringify(
        {
            user_email: formData.get("user_email"),
            user_password: formData.get("user_password"),
            user_name: formData.get("user_name"),
            user_tel: formData.get("user_tel"),
            user_time: formData.get("user_time"),
            user_dateOfBirth: formData.get("user_dateOfBirth"),
            user_gender: formData.get("user_gender"),
            user_countries: formData.get("user_countries"),
            user_transport: formData.getAll("user_transport"),
        }
    )

    localStorage.setItem(id, str);
}

function allStorage() {
    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push(JSON.parse(localStorage.getItem(key)));
    }
    return archive;
}

function generateTableHeaders() {
    var tbl = document.querySelector("#filter-table");
    const row = document.createElement("tr");
    const tblHeaders = ["eMail", "Password", "Name", "tel", "Time", "Data", "Gender", "Country", "Transport"];
    tblHeaders.forEach((element) => {
        var cell = document.createElement("th");
        var cellText = document.createTextNode(element);
        cell.appendChild(cellText);
        row.appendChild(cell);
    })
    tbl.appendChild(row);
}

var a = [];

function generateTableRow(str) {

    var filterResult = document.querySelector("#filter-table");
    const row = document.createElement("tr");

    let i = 0
    for (var key in str) {
        a[i] = document.createElement("td");
        var cellText = document.createTextNode(str[key]);
        a[i].appendChild(cellText);
        row.appendChild(a[i]);
        i = i + 1;
    }

    filterResult.appendChild(row);
}

function clearTbl() {
    console.log("here")
    const oldTable = document.querySelector("#filter-table");
    var tblBody = oldTable.childNodes;
    console.log();
    for (var i = 0; i < tblBody.length; i++) {
        //console.log(element);
        tblBody[i].remove();
        i--
    }

}

function filterByGender() {
    clearTbl();
    var gender = prompt("input gender", ["male"]);
    generateTableHeaders();
    var data = allStorage()
    data.forEach(element => {
        if (element.user_gender == gender) {
            generateTableRow(element)
        }
    })
}

function filterByCountry() {
    clearTbl();
    var country = prompt("input Country", ["USA"]);
    generateTableHeaders();
    var data = allStorage()
    data.forEach(element => {
        if (element.user_countries == country) {
            generateTableRow(element)
        }
    })
}

function filterByTransport() {
    clearTbl();
    var transport = prompt("input transport");
    generateTableHeaders();
    var data = allStorage()
    data.forEach(element => {
        if (element.user_transport.includes(transport)) {
            generateTableRow(element)
        }
    })
}

var ques_answ = data;

function generateTestForm() {
    const testForm = document.querySelector("#testForm");

    for (var i = 0; i < 2; i++) {
        var fieldset = document.createElement("fieldset");
        var legend = document.createElement("legend");
        var legendText = document.createTextNode(ques_answ[i].question);
        legend.appendChild(legendText);
        fieldset.appendChild(legend);

        genRadioButtonSet(fieldset, i);
        testForm.appendChild(fieldset);
    }
    var submit = document.createElement("button");
    submit.setAttribute("class", "butt1");
    submit.setAttribute("name", "submit");
    testForm.appendChild(submit);
    submit.innerHTML = ("Submit");
}

function genRadioButtonSet(fieldset, j) {
    for (var i = 0; i < 3; i++) {
        //var labelIndex = "a" + j + i;
        var radioButtonIndex = "a" + j;
        var ansverIndex = "a" + i;
        var label = document.createElement("label");
        //label.setAttribute("for", labelIndex);
        var labelText = document.createTextNode(ques_answ[j].a[i]);
        label.appendChild(labelText);

        var radioButton = document.createElement("input");
        radioButton.setAttribute("type", "radio");
        radioButton.setAttribute("value", ansverIndex);
        radioButton.setAttribute("name", radioButtonIndex);

        fieldset.appendChild(label);
        fieldset.appendChild(radioButton);
    }
}

function checkAnswers() {
    console.log(ques_answ[1]);
}


