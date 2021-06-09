// NPM

/*
  NPM, acronym for Node Package Manager, is, like it's name says, the manager of
  packages used by node. A package is a third-party module that you want in your
  project. NPM gives you the ability to install it. Let's use express for this
  example.


  npm install/i express

  This install the package called express at it's latest version. To install a
  specific one, run npm i express@x.x.x/express@x.x.

  To uninstall it, just run npm uninstall <package-name>.

  Updating packages is simple as running npm update. This will check for the
  latest minor and patch releases of the current major version of the package.
  This is the default behavior if none argument is passed when installing. The ^
  before the package version indicates to update the minor and patch versions.
  If desired, a ~ could be used to update only the patch version. Or, none of
  them could be used.

  To install the packages listed at the package.json file, run npm install, and
  the node_modules folder will be created.

  To see the dependecy graph of the project, run npm ls/npm ls --depth=x, being
  x the depth of subfolders to show.
*/