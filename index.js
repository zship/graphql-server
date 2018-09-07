const express = require('express')
const cors = require('cors')
const { buildSchema } = require('graphql')
const expressGraphql = require('express-graphql')

const data = [
  {
    id: 1,
    actor: 'Kristen Bell',
    role: 'Eleanor Shellstrop',
  },
  {
    id: 2,
    actor: 'Jameela Jamil',
    role: 'Tahani Al-Jamil',
  },
  {
    id: 3,
    actor: 'Manny Jacinto',
    role: 'Jason Mendoza',
  },
  {
    id: 4,
    actor: 'Ted Danson',
    role: 'Michael',
  },
  {
    id: 5,
    actor: 'William Jackson Harper',
    role: 'Chidi Anagonye',
  },
  {
    id: 6,
    actor: "D'Arcy Carden",
    role: 'Janet',
  },
]

const delay = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

const getCharacter = args => {
  return data.filter(item => {
    return item.id === args.id
  })[0]
}

const getCharacterList = async args => {
  await delay(1000)
  if (args.actor) {
    return data.filter(item => {
      return item.actor.indexOf(args.actor) !== -1
    })
  }
  return data
}

const schema = buildSchema(`
    type Query {
      character(id: Int!): Character
      characters(actor: String = ""): [Character]
    },
    type Character {
      id: Int
      role: String
      actor: String
    }
`)

const root = {
  character: getCharacter,
  characters: getCharacterList,
}

var app = express()
app.use(cors({ origin: true }))
app.use(
  '/',
  expressGraphql({
    schema,
    rootValue: root,
    graphiql: true,
  }),
)
app.listen(8080)
process.stdout.write('The GraphQL Server is running.\n')
