function validat() {
	let nme = document.getElementById("cstname").value;
	let nmex = /^[a-z A-Z]{2,15}$/;
	let ml = document.getElementById("cstmail").value;
	let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let nump = document.getElementById("numofp").value;
	let dt = document.getElementById("dt").value;
	let ddl = document.getElementById("pkg");
	let ds = document.getElementById("dst").value;
	let dlText = ddl.options[ddl.selectedIndex].text;
	if (nme == "") {
		document.getElementById("name_span").innerHTML =
			"Oh no......!Name Field is empty";
		return false;
	} else if (!nmex.test(nme)) {
		("Please enter valid Name");
		return false;
	} else if (ml == "") {
		document.getElementById("mail_span").innerHTML =
			"Please enter a mail id";
		return false;
	} else if (!mail.test(ml)) {
		document.getElementById("mail_span").innerHTML = "Enter valid mail id";
		return false;
	} else if (nump == "") {
		document.getElementById("num_span").innerHTML =
			"Please enter number of person";
		return false;
	} else if (isNaN(nump)) {
		document.getElementById("num_span").innerHTML =
			"Only numbers are allowed in this field";
		return false;
	} else if (dlText == "select") {
		document.getElementById("dplist_span").innerHTML =
			"Please choose package";
		return false;
	} else if (dt == "") {
		document.getElementById("date_span").innerHTML = "Please choose date";
		return false;
	} else if (
		document.getElementById("check1").checked == false &&
		document.getElementById("check2").checked == false &&
		document.getElementById("check3").checked == false
	) {
		document.getElementById("check_span").innerHTML = "Select the checkbox";
		return false;
	} else if (ds == "") {
		document.getElementById("ds_span").innerHTML = "Enter the Discount";
		return false;
	} else if (isNaN(ds)) {
		document.getElementById("ds_span").innerHTML =
			"Only numbers are allowed in this field";
		return false;
	} else if (
		document.getElementById("agree").checked == false &&
		document.getElementById("notagree").checked == false
	) {
		document.getElementById("agre_span").innerHTML = "Choose Agree";
		return false;
	} else {
		document.getElementById("alrt").innerHTML = "All set ";
		alert("Successfully Reserved");
		return true;
	}
}
