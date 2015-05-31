'use strict';

function loadUsers(userIds, load, done) {
  var users = [];
  userIds.map(function(userId, index) {
    load(userId, function(user) {
      users[index] = user;
      if (users.length === userIds.length) {
        return done(users);
      }
    });
  });
}

module.exports = loadUsers;
