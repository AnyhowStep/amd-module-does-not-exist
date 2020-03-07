1. Clone this repo
1. npm install
1. npm run build-amd
1. Open `dist/amd.d.ts`
1. See, "Cannot find module 'foo'.ts(2307)"
1. Notice module `"foo"` really does not exist

Minimal repro created for https://github.com/microsoft/TypeScript/issues/37267