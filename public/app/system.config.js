(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': 'app',
    '@angular': '/assets/@angular',
    '@angular2-material': '/assets/@angular2-material',
    'ng2-charts': '/assets/ng2-charts',

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
    'ng2-charts': { main: 'ng2-charts', defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },

    '@ngrx/core': { main: 'index', defaultExtension: 'js' },
    '@ngrx/store': { main: 'index', defaultExtension: 'js' },
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

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  angularPackageNames.forEach(setPackageConfig);

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

  materialPackageNames.forEach(function(pkg){
      packages['@angular2-material/' + pkg] = { main: pkg + '.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);
})(this);
