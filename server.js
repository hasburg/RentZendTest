const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const { promisify } = require('util');

const writeFileAsync = promisify(fs.writeFile);

const PORT = 8000;

const typeDefs = gql`
  input FormData {
    name: String!
    email: String!
    phone: String!
    address: String!
    zipCode: String!
    photo: Upload!
  }

  type Response {
    ok: Boolean!
  }

  type Query {
    _ : Boolean
  }

  type Mutation {
    sendForm(formData: FormData): Response!
  }
`;

const resolvers = {
  Mutation: {
    async sendForm(_, { formData }) {
      if (formData && formData.photo) {
        console.log(formData);
        try {
          const file = await formData.photo;
          await writeFileAsync(`./uploadedFiles/${file.filename}`, file);
          return { ok: true };
        } catch (e) {
          return { ok: false };
        }
      } else {
        return { ok: false };
      }
    }
  },
};


const server = new ApolloServer({ typeDefs, resolvers });

(async function start() {
  await server.listen(PORT);
  console.log(`Server ready at port ${PORT}`);
})();