console.log (this);

var j = {
		
	h: 9,
	f: function () {
		console.log (this);

		function asdf() {
			console.log (this);
		}
		asdf ();
	}
}

j.f();
