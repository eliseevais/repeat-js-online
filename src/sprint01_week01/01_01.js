export const value01_01 = "01_01"

console.log("hello 01_01")

const users = [
  {id: 1, name: "Bob", isStudent: true,},
  {id: 2, name: "Alex", isStudent: true,},
  {id: 3, name: "Ann", isStudent: true,},
  {id: 4, name: "Donald", isStudent: true,},
]

console.log("users", users)


// CREATE
const newUser = {
  id: 6,
  name: "Nikita",
  isStudent: false,
}

const copyUsers = [...users, newUser]

console.log("copyUsers", copyUsers)


// DELETE id=3
const copyUsers2 = copyUsers.filter(
  (user) => user.id !== 3)

console.log("copyUsers2", copyUsers2)

// UPDATE id=2 isStudent => false
const copyUsers3 = users.map((user,  key=user.id) => {
  return user.id === 2 ? {...user, isStudent: false} : user
})

console.log("copyUsers3", copyUsers3)

const copyUsers4 = users.map(u => ({...u})) // full deep copy

const superUser = {
  id: 10,
  name: "Clementina DuBuque",
  userName: "Moriah.Stanton",
  email: "Rey.Pad@gmail.com",
  address: {
    street: "Kattie str", // "Morgan str"
    suite: "Suite 198",
    city: "London",
    zipcode: "12345678",
    geo: {
      lat: "-38.2589", // -36.2589
      lng: "57.5678"
    }
  },
  phone: "024-0245-44-45",
  website: "ambrose.net",
  company: {
    name: "Hoeger LLC",
    catchPhrase: "Centralized empowering task-force",
    bs: "target end-to-end models", // front-end developer
  }
}

const copySuperUser = {
  ...superUser,
  company: {
    ...superUser.company,
    bs: "front-end developer"
  }
}

console.log("superUser", superUser)
console.log("copySuperUser", copySuperUser)

const copySuperUser1 = {
  ...superUser,
  address: {
    ...superUser.address,
    street: "Morgan str"
  }
}

console.log("copySuperUser1", copySuperUser1)

const copySuperUser2 = {
  ...superUser,
  address: {
    ...superUser.address,
    geo: {
      ...superUser.address.geo,
      lat: "-36.2589",
    }
  }
}

console.log("copySuperUser2", copySuperUser2)



