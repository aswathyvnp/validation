function validat() {
	let nme = document.getElementById("cstname").value;
	let nmex = /^[a-zA-Z]{2,15}$/;
	let ml = document.getElementById("cstmail").value;
	let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let nump = document.getElementById("numofp").value;
	let dt = document.getElementById("dt").value;
	let ddl = document.getElementById("pkg");
	let dsnt = document.getElementById("numofp").value;

	let dlText = ddl.options[ddl.selectedIndex].text;
	if (nme == "") {
		document.getElementById("alrt").innerHTML =
			"Oh no......!Name Field is empty";
		return false;
	} else if (!nmex.test(nme)) {
		document.getElementById("alrt").innerHTML = "Please enter valid Name";
		return false;
	} else if (ml == "") {
		document.getElementById("alrt").innerHTML = "Please enter a mail id";
		return false;
	} else if (!mail.test(ml)) {
		document.getElementById("alrt").innerHTML = "Enter valide mail id";
		return false;
	} else if (isNaN(nump)) {
		document.getElementById("alrt").innerHTML =
			"Only numbers are allowed in this field";
		return false;
	} else if (nump == "") {
		document.getElementById("alrt").innerHTML =
			"Please enter number of person";
		return false;
	} else if (dlText == "select") {
		document.getElementById("alrt").innerHTML = "Please choose package";
		return false;
	} else if (dt == "") {
		document.getElementById("alrt").innerHTML = "Please choose date";
		return false;
	} else if (
		document.getElementById("check1").checked == false &&
		document.getElementById("check2").checked == false &&
		document.getElementById("check3").checked == false
	) {
		document.getElementById("alrt").innerHTML = "Select the checkbox";
		return false;
	} else if (dsnt == "") {
		document.getElementById("alrt").innerHTML = "Enter the Discount";
		return false;
	} else if (
		document.getElementById("agree").checked == false ||
		document.getElementById("notagree").checked == false
	) {
		document.getElementById("alrt").innerHTML = "Choose Agree";
		return false;
	} else {
		document.getElementById("alrt").innerHTML = "All set ";
		return true;
	}
}

function alrt() {
	alert("Successfully Reserved");
}
