const users = [
  { id: 1, name: "Damon", isActive: true },
  { id: 2, name: "Sarah", isActive: false },
  { id: 3, name: "Mike", isActive: true }
];

// Your function here
function getActiveUserNames(users) {
    return users
        .filter((user) => user.isActive)
        .map((user) => user.name);
}
