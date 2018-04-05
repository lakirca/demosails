module.exports = {
  attributes: {
    name:{
      type: 'string'
    },
    posts: {
      collection: 'posts',
      via: 'users'
    }
  },
  connection:'mongodb'
};