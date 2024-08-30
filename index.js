const possibleMessages = [
    "The movements of celestial bodies are largely random and unpredictable."  ,
    "Planets, stars, and other celestial objects are governed by the laws of physics and astronomy",
    "The gravitational pull of celestial bodies influences the orbits of other objects, but it has no direct impact on human behavior or events.",
    "Astrological claims are not testable using the scientific method",
    "Correlations between astrological events and human affairs do not imply causation",
    "Belief in a treatment or prediction can influence outcomes, even if the treatment or prediction has no real effect",
    "People tend to seek out information that confirms their existing beliefs and ignore evidence that contradicts them",
    "Cosmology: The study of the origin, evolution, and fate of the universe.",
    "Big Bang Theory: The prevailing theory that the universe began as a singularity and expanded rapidly.",
    "Dark Matter and Dark Energy: These mysterious substances make up most of the universe's mass and energy.",
    "Galaxies: Massive collections of stars, gas, dust, and dark matter.",
    "Stars: Luminous spheres of plasma held together by gravity.",
    "Planets: Celestial bodies that orbit a star and do not produce their own light.",
    "Exoplanets: Planets outside our solar system.",
    "Black Holes: Regions of spacetime with such a strong gravitational pull that nothing, not even light, can escape.",
    "Stellar Life Cycles: Stars evolve through different stages based on their mass.",  
    "Main Sequence: The longest phase of a star's life, where it fuses hydrogen into helium.",  
    "Red Giants: Stars that expand and cool after exhausting their hydrogen.",  
    "White Dwarfs: Dense remnants of low-mass stars.",  
    "Neutron Stars: Extremely dense objects formed from the collapse of massive stars.",    
    "Supernovae: Explosive events that mark the end of massive stars.", 
    "Galaxy Types: Spiral, elliptical, and irregular galaxies.",
    "Galaxy Clusters: Groups of galaxies bound together by gravity.",
    "Galaxy Superclusters: Large-scale structures composed of galaxy clusters.",
    "Galactic Cannibalism: The process where galaxies merge with each other.",
    "Nebulae: Clouds of gas and dust where stars are born.",
    "Quasars: Extremely luminous objects powered by supermassive black holes.",
    "Pulsars: Rapidly rotating neutron stars that emit electromagnetic radiation.",
    "Gamma-Ray Bursts: The most powerful explosions in the universe.",
    "Spectroscopy: The study of the properties of light emitted or absorbed by celestial objects.",
    "Astrophysics Satellites: Space-based telescopes that can observe the universe without the interference of Earth's atmosphere.",
    "Radio Astronomy: The study of celestial objects using radio waves.",
    "X-ray Astronomy: The study of celestial objects using X-rays.",
    "Exoplanet Habitability: The study of planets that could potentially support life.",
    "Search for Extraterrestrial Intelligence (SETI): Efforts to detect signs of intelligent life in the universe.",
    "Drake Equation: A mathematical equation used to estimate the number of civilizations in the galaxy.",
]

const getRandomMessage = ()=>{
    const index = Math.floor(Math.random()*possibleMessages.length)
    return possibleMessages[index]
}

console.log(getRandomMessage())