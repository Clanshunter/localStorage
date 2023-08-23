
function Save() {
    //Get Input Value
    var txtFirstName=document.getElementById("firstName").value;
    var txtLastName=document.getElementById("lastName").value;

    //Get the CheckBoxValue
    var check=document.getElementById("chkLocalStorage").checked;

    // Check if checkbox has Checked
    
    if(check==true)
    {
        //Check if two Input names are filled
        if (txtFirstName && txtLastName !="") 
        {
        //Save the input names in Localstorage
        localStorage.setItem("fn",txtFirstName);
        localStorage.setItem("ln",txtLastName);
        alert("Data saved!");
        }
        else
        {
            alert("Not Saved! Names must be filled!")
        }
    }
    else
    {
        alert("Not Saved! CheckBox must be checked!")
    }
    
    
}

function loadData() {
    var fn=localStorage.getItem("fn");
    var ln=localStorage.getItem("ln");
    //alert("Firstname: "+fn+" & Lastname: "+ln);
    document.getElementById("firstName").value=fn;
    document.getElementById("lastName").value=ln;
}

document.addEventListener("DOMContentLoaded", () => {
    loadData();
      });

