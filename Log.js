function AJAX(method,address,flag,callBacks,data) {	
	var xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (method == 'GET') {
		xhr.open('GET',address,flag);
		xhr.send();		
	}else if (method == 'POST') {
		xhr.open('POST',address,flag);
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
		xhr.send(data);			
	}

	xhr.onreadystatechange = function() {
		if ( xhr.readyState == 4 ) {
			if ( xhr.status == 200 ) {
				callBacks(xhr.responseText);
			} else {
				alert('出错了,Err：' + xhr.status);
			}
		}
			
	}	
}

 	var a = document.getElementById('tj');
	function b(data) {
		console.log(data);
	}	
	a.onclick = function () {
		AJAX('POST','Log.php',true,b,data);
	}
	
