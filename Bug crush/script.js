		// Create the canvas
		var canvas = document.getElementById("gameCanvas");
		var ctx = canvas.getContext("2d");
		canvas.width = 512;
		canvas.height = 480;

		// Load images
		var bugReady = false;
		var bugImage = new Image();
		bugImage.onload = function() {
			bugReady = true;
		};
		bugImage.src = "bug.png";

		// Game objects
		var bug = {
			x: 0,
			y: 0,
			speed: 256,
			hopInterval: 1000,
			hopTimeoutId: null
		};

		var score = 0;

		function resetScore() {
			score = 0;
		}

		function resetSpeed() {
			clearTimeout(bug.hopTimeoutId);
			bug.hopInterval = 1000;
			startBugHopping();
		}

		// Handle bug click
		canvas.addEventListener('click', function(event) {
			var mouseX = event.clientX - canvas.offsetLeft;
			var mouseY = event.clientY - canvas.offsetTop;
			if (mouseX > bug.x && mouseX < bug.x + 64 && mouseY > bug.y && mouseY < bug.y + 64) {
				score++;
				clearTimeout(bug.hopTimeoutId);
				bug.hopInterval -= 10;
				startBugHopping();
			}
		});

		// Update bug position
		function updateBugPosition() {
			bug.x = Math.floor(Math.random() * (canvas.width - 64));
			bug.y = Math.floor(Math.random() * (canvas.height - 64));
		}

		// Start bug hopping
		function startBugHopping() {
			bug.hopTimeoutId = setTimeout(function() {
				updateBugPosition();
				startBugHopping();
			}, bug.hopInterval);
		}


		// Draw everything
		function render() {
			if (bugReady) {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.drawImage(bugImage, bug.x, bug.y, 64, 64);
				ctx.fillStyle = "rgb(255, 0, 0)";
				ctx.font = "24px Helvetica";
				ctx.textAlign = "left";
				ctx.textBaseline = "top";
				ctx.fillText("Score: " + score, 32, 32);
				
				
				
			}
		}

		function main() {
			render();
			requestAnimationFrame(main);
		}

		// Let's play this game!
		updateBugPosition();
		startBugHopping();
		main();