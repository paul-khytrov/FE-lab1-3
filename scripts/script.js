function menuOpen() {
    var hamburger = document.getElementById("hamburger");
    var modalMenu = document.getElementById("modalMenu");
    hamburger.classList.toggle("open");
    modalMenu.classList.toggle("show");
}


var form = document.querySelector("#form-2");

form.addEventListener(
    "submit",
    function (event) {
        var formData = new FormData(form);
        var id = formData.get("user_email");
        var dataSet = [];

        for (var i of formData.entries()) {

            dataSet.push('"' + i[0] + '":' + '"' + i[1] + '"');
        }
        var dataString = dataSet.toString();

        localStorage.setItem(id, "{" + dataString + "}");


        console.log(JSON.parse(localStorage.getItem(id)));
        console.log(allStorage())
        //console.log(JSON.parse("{" + dataString + "}"));
        /*     var id = formData.get("user_email");
               var user_password = formData.get("user_password");
               var user_name = formData.get("user_name");
               var user_tel = formData.get("user_tel");
               var user_time = formData.get("user_time");
               var user_dateOfBirth = formData.get("user_dateOfBirth");
               var user_gender = formData.get("user_gender");
               var user_countries = formData.get("user_countries");
               var user_transport = formData.getAll("user_transport");
       
               var dataSet = [
                   '{user_password: "' + user_password + '", ' +
                   'user_name: "' + user_name + '", ' +
                   'user_tel: "' + user_tel + '", ' +
                   'user_time: "' + user_time + '", ' +
                   'user_dateOfBirth: "' + user_dateOfBirth + '", ' +
                   'user_gender: "' + user_gender + '", ' +
                   'user_countries: "' + user_countries + '", ' +
                   'user_transport: [' + user_transport + ']} '
               ];
       
               localStorage.setItem(id, dataSet);
               console.log(id + ': ' + localStorage.getItem(id));*/

        event.preventDefault();
    },
    false
);

function allStorage() {

    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push(JSON.parse(localStorage.getItem(key)));
    }

    return archive;
}
function filterByGender(gender) {
    var data = allStorage()
    data.forEach(func => {
        if (func.user_gender === gender) {
            alert(JSON.stringify(func))
        }
    })
}
