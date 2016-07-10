$(document).ready(function () {
	$(".ajax-test").on("click", function () {
		$.ajax({
			url: "/api/search",
			type: "GET",
			dataType: "json",
			success: function (data) {
				console.log({
					data: data
				});

			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				console.log({
					errorThrown: errorThrown,
					XMLHttpRequest: XMLHttpRequest,
					textStatus: textStatus
				});

			}

		})
	});
});