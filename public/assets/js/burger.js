// Make sure we wait to attach our handlers until the DOM is fully loaded.

let newBurger = {
	burger_name: "",
	devoured: false,
};
let newlyDevoured = { devoured: false };
let id;

$(function () {
	$(".burger-queue").on("submit", function (event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();

		newBurger = {
			burger_name: $("#burger-name").val().trim(),
			devoured: false,
		};
		console.log("Hello");
		// Send the POST request for new burgers.
		$.ajax("/api/burgers/", {
			type: "POST",
			data: newBurger,
		}).then(function () {
			console.log("Burger ready to be devoured");
			// Reload the page to get the updated list
			location.reload();
		});
	});
});

// Tracking devoured burgers.

$(".devour-btn").on("click", function (event) {
	id = $(this).attr("data-id");
	console.log("this is:", this);
	newlyDevoured = { devoured: true };

	// Send the PUT request for devoured burgers.

	$.ajax("/api/burgers/" + id, {
		type: "PUT",
		data: newlyDevoured,
	}).then(function () {
		console.log("changed devour to", newlyDevoured);
		// Reload the page to get the updated list
		location.reload();
	});
});

// Tracking the deletion of a burger.

$(".delete-btn").on("click", function (event) {
	const id = $(this).attr("data-id");
	// Send the DELETE request.
	$.ajax("/api/burgers/" + id, {
		type: "DELETE",
	}).then(function () {
		console.log("deleted burger", id);
		// Reload the page to get the updated list
		location.reload();
	});
});
