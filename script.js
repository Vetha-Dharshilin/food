function validate() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const genderselect = document.getElementById("gender-select").value;
    let food = "";
    let foodcount = 0;

    if(document.getElementById("food1").checked) {
        food += " " + document.getElementById("food1").value;
        foodcount++;
    }
    if(document.getElementById("food2").checked) {
        food += " " + document.getElementById("food2").value;
        foodcount++;
    }
    if(document.getElementById("food3").checked) {
        food += " " + document.getElementById("food3").value;
        foodcount++;
    }
    if(document.getElementById("food4").checked) {
        food += " " + document.getElementById("food4").value;
        foodcount++;
    }
    if(document.getElementById("food5").checked) {
        food += " " + document.getElementById("food5").value;
        foodcount++;
    }

    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    if(fname && lname && address && foodcount >= 2 && pincode && state && country && genderselect) {
        const table = document.getElementById('datastored');
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);
        const cell6 = row.insertCell(5);
        const cell7 = row.insertCell(6);
        const cell8 = row.insertCell(7);

        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = address;
        cell4.innerHTML = pincode;
        cell5.innerHTML = genderselect;
        cell6.innerHTML = food;
        cell7.innerHTML = state;
        cell8.innerHTML = country;
    } else if(foodcount < 2) {
        alert("Please select at least 2 food items.");
        return false;
    } else {
        alert("Please fill in all the details.");
        return false;
    }

    document.getElementById("forms").reset();
}