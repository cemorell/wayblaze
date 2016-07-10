$(document).ready(function () {
	$(".ajax-test").on("click", function () {
		$.ajax({
			url: "/api/search",
			method: "GET",
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

  $('.snowboarding-button').on('click', function(e){
    e.preventDefault();
    window.location.replace('/form');
  })
});
