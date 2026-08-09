# Cool Widgets

Angular workspace for experimenting with expressive, animated UI components.

## Projects

- `showcase` — standalone Angular application and visual playground.
- `cool-widgets` — publishable Angular library. Its public API currently contains only the generated starter component.

The showcase uses Angular Material for its UI foundation and GSAP for motion experiments. Experimental animation code stays in the showcase until a stable library API is designed.

## Development

Install dependencies:

```powershell
npm.cmd install
```

Start the showcase at `http://localhost:4224`:

```powershell
npm.cmd start
```

Run the project test suites:

```powershell
npm.cmd run test:showcase
npm.cmd run test:library
```

Build both the showcase and library in production mode:

```powershell
npm.cmd run build
```

Individual production builds are also available through `npm.cmd run build:showcase` and `npm.cmd run build:library`.

## Styling and motion

The custom Angular Material theme and workspace-level design tokens live in `projects/showcase/src/styles.scss`. The initial GSAP smoke animation is deliberately local to the showcase root component and cleans up its `gsap.context()` when the component is destroyed.
