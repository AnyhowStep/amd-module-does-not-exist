declare module "foo/bar/bar" {
    export type MyBar = {
        bar: {
            bar: "bar";
        };
    };
    export function makeBar(): MyBar;
}
declare module "foo/bar/index" {
    export * from "foo/bar/bar";
}
declare module "foo/index" {
    export * from "foo/bar/index";
}
declare module "use-bar" {
    export const bar: import("foo").MyBar;
}
//# sourceMappingURL=amd.d.ts.map