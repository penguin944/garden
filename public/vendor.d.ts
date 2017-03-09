/// <reference path="typings/index.d.ts" />

export declare var module: { id: string };

// *********************
// polyfills
// *********************

// polyfills
import 'core-js'; // with reflect
import 'zone.js/lib/browser/zone-microtask';
import 'zone.js/lib/browser/long-stack-trace-zone';

// (these modules are what is in 'angular2/bundles/angular2-polyfills' so don't use that here)
import 'es7-reflect-metadata/dist/browser';
import 'zone.js/lib/browser/zone-microtask';

// in Production you may want to remove this
import 'zone.js/lib/browser/long-stack-trace-zone';

