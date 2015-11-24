<SCRIPT LANGUAGE="JavaScript">
function SrchSubmit() 
{
	var valu= document.getElementById("valu").value;
	var pattern = valu.toLowerCase();
   	var match = 0;
	var table = document.getElementById("tests");
	for (var i = 0, row; row = table.rows[i]; i++) {
   		//iterate through rows
   		//rows would be accessed using the "row" variable assigned in the for loop
   		for (var j = 0, col; col = row.cells[j]; j++) {
     			//iterate through columns
     			//columns would be accessed using the "col" variable assigned in the for loop
			var index = col.innerHTML.toLowerCase().indexOf(pattern);			
			if (index != -1) {
				col.style.backgroundColor = "#FFFF99";
				col.style.color = "red";
				if(match == 0){
					col.scrollIntoView();
					match++;
				}
     			}else{
				if (i%2 == 0){
					col.style.backgroundColor = "#AFEEEE";
				}else{
					col.style.backgroundColor = "#eaebec";
				}
				col.style.color = "black";
			}

   		}  
	}
}
</SCRIPT>
