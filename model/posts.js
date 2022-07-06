module.exports = {
  posts: [
    {
      id: "sdasdasd",
      title: "Teste do Mural",
      description: "Descrição Teste",
    },
  ],

  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    this.posts.push({ id: generateID(), title, description });
  },

  deletPost(id) {},
};

function generateID() {
  return Math.random().toString(36).substring(2, 9);
}
