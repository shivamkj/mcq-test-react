import confetti from "canvas-confetti";

const confettiConfig = {
  particleCount: 100,
  spread: 60,
  origin: { y: 0.5 },
  ticks: 140,
};

const showConfetti = () => confetti(confettiConfig);

export default showConfetti;
