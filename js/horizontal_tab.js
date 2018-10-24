/*function checkContent(evt, info){
			var i, navcontent, navlink, tablinks;
			navcontent = document.getElementsByClassName("navcontent");
			for (i=0; i < navcontent.length; i++){
				navcontent[i].style.display = "none";
			}
			tablinks = document.getElementsByClassName("tablinks");
			for(i=0; i < tablinks.length; i++){
				tablinks[i].className = tablinks[i].className.replace("active","");
				
			}
			document.getElementById(info).style.display = "block";
			console.log(info,"navlink");
			evt.currentTarget.className += "active";
			
		}*/

$('#myTabs a').click(function (e) {
	e.preventDefault()
		  $(this).tab('show')
		})