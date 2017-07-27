
	function toggleCP() {
		var cp = document.getElementById('cp');
		cp.style.height = window.innerHeight - 380+"px";
		if(cp.style.left == "0px"){
				cp.style.left = "-200px";
		} else{
			cp.style.left = "0px";	
		}
	}