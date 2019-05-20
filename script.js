"use strict";

window.addEventListener("DOMContentLoaded", function()
{
	const hosts = ["localhost", "127.0.0.1", ""];
	if (hosts.includes(location.hostname))
	{
		document.body.classList.add("localhost");
	}
});