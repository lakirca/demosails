module.exports = {
  attributes: {
    title:{
      type: 'string'
    },
    body:{
      type:'string'
    }, 
    users: {
      collection: 'users',
      via: 'posts'
    }
  }
};


