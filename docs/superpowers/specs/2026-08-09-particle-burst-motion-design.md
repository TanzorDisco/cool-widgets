# Particle Burst Motion Design

## Goal

Turn the showcase card interaction into an authored GSAP focal moment: a particle burst with an always-on liquid background, clear click feedback, and an intentional reduced-motion alternative.

## Motion thesis

- **Focal moment:** clicking the Material button compresses the card, releases particles and shockwaves, intensifies the liquid background, and settles through a controlled 3D recoil.
- **Continuity:** the stage maintains a slow ambient breathing motion so the burst feels like stored energy being released rather than a disconnected effect.
- **Feedback:** the button and card react immediately; repeated clicks restart the burst cleanly without accumulating timelines or DOM nodes.
- **Budget:** animate transform, opacity, bounded filter, gradient position, and shadow only. Keep particles pre-rendered and reusable.

## Interaction sequence

1. The stage starts with a slow looping liquid blob and two counter-rotating orbit timelines.
2. On click, the card compresses for immediate acknowledgment and the spark brightens.
3. The card recoils with a small 3D tilt while two shockwaves expand and 12 particles travel along predefined radial vectors.
4. The liquid blob scales, changes shape, and briefly shifts toward a violet-coral highlight.
5. Card content receives a short staggered impulse, then every burst element returns to its reusable resting state.
6. The full burst completes in approximately 1.2 seconds; ambient motion continues underneath.

## Lifecycle and accessibility

- Keep separate ambient and burst GSAP timelines inside a component-scoped `gsap.context()`.
- Kill and recreate the burst timeline on every click; never create particles dynamically.
- Pause ambient timelines when `document.hidden` is true and resume when the tab becomes visible.
- Revert the GSAP context and remove the visibility listener when the component is destroyed.
- Under `prefers-reduced-motion: reduce`, disable looping spatial motion, orbit rotation, particles, and 3D recoil. Preserve click feedback through a brief color and shadow pulse.
- Keep all content visible in its default state if JavaScript fails.

## Structure

- Add one liquid background element, two shockwave elements, and 12 decorative particle elements to the existing stage.
- Keep the current card content and public library API unchanged.
- Define visual resting states, particle vectors, GPU isolation, and reduced-motion rules in the showcase component stylesheet.
- Keep all animation logic local to the showcase root component; do not export a motion API from `cool-widgets` yet.

## Verification

- Unit tests cover burst restart behavior, particle availability, reduced-motion branching, and visibility pause/resume.
- Production build and the complete workspace test suite pass.
- Browser checks confirm ambient motion, click restart, no console errors, desktop/mobile layout integrity, and the reduced-motion path.
