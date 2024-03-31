var ques_answ = data; //source => file q_a.json
const testForm = document.querySelector("#testForm");

function createTag(tagName, attribute) {
    var tag = document.createElement(tagName);
    attribute.forEach((element) => tag.setAttribute(element.name, element.value));
    return (tag);
}

function generateTestForm() {
    ques_answ.forEach((items, index) => {
        var fieldset = createTag("fieldset", []);
        var legend = createTag("legend", []);
        var legendText = document.createTextNode(items.question);
        legend.appendChild(legendText);
        fieldset.appendChild(legend);

        genRadioButtonSet(fieldset, index);
        testForm.appendChild(fieldset);
    });

    var submit = createTag("button", [
        { "name": "class", "value": "butt1" },
        { "name": "name", "value": "submit" },
        { "name": "onclick", "value": "checkAnswers()" }
    ]);

    testForm.appendChild(submit);
    submit.innerHTML = ("Submit");
}

function genRadioButtonSet(fieldset, j) {
    ques_answ[j].a.forEach((items, index) => {
        var labelIndex = "button-" + j + index;
        var radioButtonIndex = "q" + j;
        var ansverIndex = "a" + index;

        var label = createTag("label", [
            { "name": "for", "value": labelIndex }
        ]);

        var labelText = document.createTextNode(items);
        label.appendChild(labelText);

        var radioButton = createTag("input", [
            { "name": "type", "value": "radio" },
            { "name": "value", "value": ansverIndex },
            { "name": "name", "value": radioButtonIndex },
            { "name": "id", "value": labelIndex },
        ]);

        fieldset.appendChild(label);
        fieldset.appendChild(radioButton);
    });
    var key = ques_answ[j].key;
    var keyIndex = "key" + j;

    var keyField = createTag("input", [
        { "name": "type", "value": "hidden" },
        { "name": "name", "value": keyIndex },
        { "name": "value", "value": key }]);

    fieldset.appendChild(keyField);
}

function checkAnswers() {
    var result = 0;
    var numberOfQuestion = ques_answ.length;
    var formData = new FormData(testForm);

    for (var i = 0; i < numberOfQuestion; i++) {
        var question = formData.get("q" + [i]);
        var ansver = formData.get("key" + [i]);
        if (question == ansver) result++;
    }

    alert("Your result: " + result + " from " + numberOfQuestion);
}
