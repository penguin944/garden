// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    '@angular': '/assets/@angular',
    'rxjs': '/assets/rxjs',
    '@angular2-material': '/assets/@angular2-material',
    'ng2-material': '/assets/ng2-material',
};
/** User packages configuration. */
var packages = {
    // Angular specific barrels.
    '@angular/core': { main: 'index' },
    '@angular/common': { main: 'index' },
    '@angular/compiler': { main: 'index' },
    '@angular/forms': { main: 'index' },
    '@angular/http': { main: 'index' },
    '@angular/router': { main: 'index' },
    '@angular/platform-browser': { main: 'index' },
    '@angular/platform-browser-dynamic': { main: 'index' },
    // Thirdparty barrels.
    'rxjs': { main: 'index' },
    'ng2-material': { main: 'index' },
};
/** Material packages configuration. */
[
    'core', 'button', 'card', 'checkbox', 'core',
    'grid-list', 'icon', 'input', 'list', 'menu',
    'progress-circle', 'radio', 'sidenav', 'slide-toggle',
    'tabs', 'toolbar'
].forEach(function (packageName) {
    packages[("@angular2-material/" + packageName)] = {
        format: 'cjs',
        defaultExtension: 'js',
        main: packageName
    };
});
System.config({ defaultJSExtensions: true });
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=/system-config.js.map