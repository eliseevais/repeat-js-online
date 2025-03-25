export const value01_04 = "01_04";

const todolistId_1 = crypto.randomUUID();
const todolistId_2 = crypto.randomUUID();


const todolists = [
  {
    id: todolistId_1,
    title: "What to learn",
  },
  {
    id: todolistId_2,
    title: "What to buy",
  },
]

const tasks = {
  [todolistId_1]: [
    {
      id: 1,
      title: "HTML",
      isDone: true,
    },
    {
      id: 2,
      title: "CSS",
      isDone: true,
    },
    {
      id: 3,
      title: "java script",
      isDone: true,
    },
  ],
  [todolistId_2]: [
    {
      id: 4,
      title: "Milk",
      isDone: true,
    },
    {
      id: 5,
      title: "Water",
      isDone: true,
    },
    {
      id: 6,
      title: "Meat",
      isDone: true,
    },
  ]
}

// tl1 id2 isDone=false

console.log(tasks[todolists[0].id])
console.log(tasks[todolists[1].id])

console.log({
  ...tasks,
  [todolistId_1]: tasks[todolistId_1].map(
    t => t.id === 2
      ? {...t, isDone: false}
      : t
  )
})

// tl id4 task delete

console.log({
  ...tasks,
  [todolistId_2]: tasks[todolistId_2].filter(t => t.id !== 4)
})

// 1 td => add task

const newTask = {
  id: 7,
  title: "Bread",
  isDone: true,
}

console.log({
  ...tasks,
  [todolistId_1]: [...tasks[todolistId_1], newTask ]
})

const map = new Map();

map.set({name: "Bob"}, {name: "Alex"});
map.set([1, 2, 3, 4, 5], () => {})

console.log("map: ", map);
