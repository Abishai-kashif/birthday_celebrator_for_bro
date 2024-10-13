import confetti from "canvas-confetti";

const useConfetti = () => {
	const fireConfetti = () => {
		confetti({
			particleCount: 800, // Increase the number of particles
			spread: 220, // Increase the spread for a wider area
			origin: { y: 0.6 }, // Adjust the origin if needed
			decay: 0.9, // Lower decay for longer-lasting particles
			ticks: 200, // Increase the ticks for a longer duration
			// startVelocity: 40, // Increase the starting velocity for a longer duration
			gravity: 0.2, // Increase the gravity for a longer duration
		});
	};

	return { fireConfetti };
};

export default useConfetti;
