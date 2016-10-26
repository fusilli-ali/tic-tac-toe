$(document).ready( function() {
	$('div.grid').dblclick(function() {
		$(this).html('<span class="x">X</span>');
	})
	$('div.grid').click(function() {
		$(this).html('<span class="o">O</span>');
	})
});