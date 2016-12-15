const Twitter = mongoose.model('Twitter', {
  users: [ {
    name : String,
    avatar : String,
    followers : [
      {user_id : String}
    ],
    tweets: [
      {text : String,
      timestamp: Date}
    ],
  }
  ]
});

// display user tweets
Twitter.findById(userId)
  .then(function(user){
    console.log(user[0].tweets);
  })
  .catch(function(err){
    console.log('Error', err);
  });

  // display user tweets and follower tweets
  Twitter.findById(userId)
    .then(function(user){
      console.log(user[0].tweets);
    user.followers.forEach(function(id){
      Twitter.findById(id)
      .then(function(follower){
        console.log(follower.tweet);
      })
      .catch(function(err){
        console.log("Follower error", err.stack);
      });
    });
    })
    .catch(function(err){
      console.log('Error', err.stack);
    });


    var twitter = new Twitter({
      users: [ {
        name : "Buddy Holly",
        avatar : "www.buddy.com",
        tweets: [
          {text : "I look just like myself",
          timestamp: new Date(2016-12-13)}
        ],
      }
      ]
    });
