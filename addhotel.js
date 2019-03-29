//	$(document).on("pagecreate", function () {
//		$("#addbtn").click(function () {});
//	});
//
//	
//			$("#nostorage").text("The browser does not support local storage");
//		}
//	});
//
//
//	function getTitle() {
//		var title = $("#hoteltitle").text();
//		return title;
//	}
//
//	function getUrl() {
//		var title = $("#hoteltitle").text();
//		var url = title.replace(/\s+/g, '-').toLowerCase();
//		return url;
//	}
//
//	function setDetails(title, url) {
//		var hotel = {
//			name: title,
//			hotelurl: url
//		};
//		//localStorage.setItem("hotels", JSON.stringify(hotel));
//	}
//
$(document).on("pagecontainerbeforeshow", function (e, ui) {
	var page = $.mobile.pageContainer.pagecontainer('getActivePage').attr('id');
	if (page === "favourites") {
		if (typeof (Storage) != "undefined") {
			storeData();
			displayDetails(getData());
		} else {
			$("#nostorage").text("The browser does not support storage");
		}
	}
});




function storeData() {
	var userDetails = {
		Street: 'Edward State',
		Number: '12 Acre Avenue',
		Price: 950,
		PostCode: 'WI4 4TH'
	};
	localStorage.setItem("userDetails", JSON.stringify(userDetails));
}

function getData() {
	var userDetails = JSON.parse(localStorage.getItem('userDetails'));
	return userDetails;
}

function displayDetails(details) {
	var text = '';
	for (var i in details) {
		text += i + ': ' + details[i] + '<br>';
	}
	$("#hotel").html(text);
}

$("#p").popup("open");
setTimeout(function () {
	$("#p").popup("close");
}, 5000);
