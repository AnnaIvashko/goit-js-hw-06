import users from "./users.js"

console.log(users);

// Задание 1
// Получить массив имен всех пользователей (поле name).

const getUserNames = users.map(function(user){
    return user.name;
});

console.log(getUserNames);
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color)=> 
     users.filter(({ eyeColor }) => eyeColor === color);


console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// Задание 3
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, findGender) =>
    users.filter(({ gender }) => gender === findGender).map(({ name }) => name);


console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// Задание 4
// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users.filter(function (user) {
    return !user.isActive;
});

console.log(getInactiveUsers); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, findEmail) => 
    users.find(({email}) => email === findEmail);


console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) =>
    users
        .filter(({ age }) => age >= min && age <= max);
    

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]



// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users.reduce(function (acc, user){
    return acc + user.balance;
}, 0);
    


console.log(calculateTotalBalance); // 20916



// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) =>
    users.filter(({ friends }) => friends.includes(friendName)).map(({ name }) => name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]




// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

function getNumbersOfFriends({ friends }) {
  return friends.length;
}

const getNamesSortedByFriendsCount = users => {
    const first = [...users];

  return first
    .sort((a, b) => getNumbersOfFriends(a) - getNumbersOfFriends(b))
    .map(({ name }) => name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]



//  Задание 10
// Получить массив всех умений всех пользователей(поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

  const getSortedUniqueSkills = users => {
  return users
    .flatMap( ob => ob.skills )
    .filter( ( item, index, arr ) => arr.indexOf( item ) === index )
    .sort();
};

// const getSortedUniqueSkills = (users) => {
//   const userOfSkills = [...users].reduce(
//     (acc, { skills }) => acc.concat(skills),
//     []
//   );

//   return userOfSkills
//     .filter((element, index) => userOfSkills.indexOf(element) === index)
//     .sort();
// };

  

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 
// 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud',
// 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]