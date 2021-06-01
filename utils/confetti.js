import confetti from "canvas-confetti";

const confettiConfig = {
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 },
  ticks: 150,
};

const showConfetti = () => confetti(confettiConfig);

export default showConfetti;
