'use strict';

function getDependencies(tree) {
  if (!tree.hasOwnProperty('dependencies')) {
    return [];
  }

  var allDeps = {};
  var pkgDeps = function(deps, depth) {
    Object.keys(deps).map(function(pkg) {
      if (deps[pkg].hasOwnProperty('dependencies')) {
        pkgDeps(deps[pkg].dependencies, depth + 1);
      }

      allDeps[pkg + '@' + deps[pkg].version] = depth;
    });
  };
  pkgDeps(tree.dependencies, 0);

  return Object.keys(allDeps).sort();
}

module.exports = getDependencies;
