// Make sure we wait to attach our handlers until the DOM is fully loaded.

var newBurger = {
	name,
	devoured: false,
};
var newlyDevoured;
var id;

$(function () {
	$(".create-form").on("submit", function (event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();
		//	var id = $(this).data("id");
		newBurger = {
			name: $("#burger-update").val().trim(),
			devoured: false,
		};
	});

	// Tracking devoured burgers.

	$(".change-devoured").on("click", function (event) {
		id = $(this).attr("data-id");
		console.log("this is:", this);
		var newlyDevoured = true;
	});

	// Send the POST request for new burgers.
	$.ajax("/api/burgers/", {
		type: "POST",
		data: newBurger,
	}).then(function () {
		console.log("Burger ready to be devoured");
		// Reload the page to get the updated list
		location.reload();
	});

	// Send the PUT request for devoured burgers.

	$.ajax("/api/burgers/" + id, {
		type: "PUT",
		data: newlyDevoured,
	}).then(function () {
		console.log("changed devour to", newlyDevoured);
		// Reload the page to get the updated list
		location.reload();
	});

	// Tracking the deletion of a burger.

	$(".delete-burger").on("click", function (event) {
		var id = $(this).attr("data-id");
		// Send the DELETE request.
		$.ajax("/api/burgers/" + id, {
			type: "DELETE",
		}).then(function () {
			console.log("deleted burger", id);
			// Reload the page to get the updated list
			location.reload();
		});
	});
});
