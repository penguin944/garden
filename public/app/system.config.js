(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': 'app',
    '@angular': '/assets/@angular',
    '@angular2-material': '/assets/@angular2-material',

    'angular2-in-memory-web-api': '/assets/angular2-in-memory-web-api',
    'rxjs': 'assets/rxjs',

    /* ngrx/router begin */
    '@ngrx': '/assets/@ngrx',
    'path-to-regexp': '/assets/path-to-regexp',
    'isarray': '/assets/isarray',
    'query-string': '/assets/query-string',
    'strict-uri-encode': '/assets/strict-uri-encode',
    'object-assign': '/assets/object-assign'
    /* ngrx/router end */
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'boot.js', defaultExtension: 'js' },
    'rxjs': { main: 'Rx.js', defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },

    /* ngrx/router begin */
    '@ngrx/core': { main: 'index' },
    '@ngrx/router': { main: 'index' },
    'path-to-regexp': { main: 'index' },
    'isarray': { main: 'index' },
    'query-string': { main: 'index' },
    'strict-uri-encode': { main: 'index' },
    'object-assign': { main: 'index' }
    /* ngrx/router end */
  };

  var angularPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
  ];

  var materialPackageNames = [
    'core',
    'icon',
    'button',
    'card',
    'toolbar',
    'tabs',
    'list',
    'grid-list',
    'sidenav',
    'input',
  ];

  // if called with a package name, add it to the packages obj
  // if called only with a prefix return curried version

  function packIndex(packagePrefix, packageName) {
    if(packageName === undefined) {
      return function(packageName) {
        return packIndex(packagePrefix, packageName);
      }

    } else {
      packages[ packagePrefix + '/' + packageName ] = { main: 'index.js', defaultExtension: 'js' };
    }
  }

  function packUmd(packagePrefix, packageName) {
    if(packageName === undefined) {
      return function(packageName) {
        return packUmd(packagePrefix, packageName);
      }

    } else {
      packages[ packagePrefix + '/' + packageName ] = { main: 'bundles/' + packageName + '.umd.js', defaultExtension: 'js' };
    }
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  angularPackageNames.forEach(setPackageConfig('@angular'));
  materialPackageNames.forEach(packIndex('@angular-material'));

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);
})(this);
