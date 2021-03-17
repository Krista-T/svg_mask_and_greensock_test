gsap
  .timeline({ repeat: -1, repeatDelay: 0, yoyo: true })
  .to(
    ".m",
    {
      duration: 3,
      y: -166,
      ease: "steps(10)",
      stagger: -0.3,
      scale: 2.0,
    },
    0
  )
  .to(
    ".fox",
    {
      duration: 2,
      scale: 1.1,
      transformOrigin: "50% 50%",
      ease: "power2",
    },
    0
  );

gsap
  .timeline({ repeat: -1, repeatDelay: 0, yoyo: true })
  .to(
    ".m1",
    {
      duration: 3,
      y: 10,
      ease: "steps(6)",
      stagger: -0.3,
      scale: 1.2,
    },
    0
  )

  .to(
    ".fox2",
    {
      duration: 2,
      scale: 1.1,
      transformOrigin: "50% 50%",
      ease: "power2",
    },
    0
  );
