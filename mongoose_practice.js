const mongoose = require('mongoose');
const bluebird = require('bluebird');
mongoose.Promise = bluebird;

mongoose.connect('mongodb://localhost/local2');

// var inventorSchema = new mongoose.Schema([{
//   name: {type: String, required: true},
//   website: String
//
// }]);
// const Language = mongoose.model('Language', {
//   name: {type: String, required: true},
//   website: String,
//   dateFirstAppeared : {type: Date, required: true},
//   dateCurrentRelease : Date,
//   inventors: {type: inventorSchema, required: true},
//   paradigms: [String],
//   typingDiscipline: [String],
//   influecingLanguages: [String]
// });
//
// var javascript = new Language({
//   name : 'JavaScript',
//   website: 'www.javascript.com',
//   dateFirstAppeared : new Date('1995-01-01'),
//   dateCurrentRelease : new Date('2016-05-04'),
//   inventors: [{
//     name: 'Bob Watson',
//     website: 'www.bobwatson.com'
//   }],
//   paradigms: ['object-oriented', 'fools-gold', 'submissive', 'punch-card'],
//   typingDiscipline: ['duck', 'agressive', 'intuitive'],
//   influecingLanguages: ['C', 'Ruby']
// });
//
// javascript.save()
//   .then(function(){
//     console.log("Javascipt is saved");
//   })
//   .catch(function(err){
//     console.log("Didn't work" + err.stack);
//   });
//
// const Album = mongoose.model('Album', {
//   name: String,
//   artist: String,
//   released : Date,
//   duration : Number,
//   tracks: [{
//     name: String,
//     songWriters: [String],
//     duration: Number
//   }],
//   personnel: [
//     {
//     name: String,
//     instrument: String
//   }
//   ],
// });
//
// var bootscootnb = new Album({
//   name: 'Burningtrash',
//   artist: 'Brooks n Dunn',
//   released: new Date(1999-10-02),
//   // duration: 200,
//   tracks: [{
//     name: "Burn Quality",
//     songWriters: ["Burning Joe"],
//     duration: 200
//   }],
// });
// // //
// // bootscootnb.save()
// //   .then(function(){
// //     console.log("Bootscoot is saved");
// //   })
// //   .catch(function(err){
// //     console.log("Didn't work" + err.stack);
// //   });
//
//
//
//
// var python = new Language({
//   name : 'Python',
//   website: 'www.python.com',
//   dateFirstAppeared : new Date('1991-02-01'),
//   dateCurrentRelease : new Date('2016-03-04'),
//   inventors: [{
//     name: 'Fiddle Sticks',
//     website: 'www.fiddle.com'
//   }],
//   paradigms: ['object-oriented', 'fools-gold', 'submissive', 'punch-card'],
//   typingDiscipline: ['duck', 'aggressive', 'intuitive'],
//   influecingLanguages: ['JavaScript', 'Ruby']
// });
//
// var scala = new Language({
//   name : 'Scala',
//   website: 'www.scala.com',
//   dateFirstAppeared : new Date('2000-02-01'),
//   dateCurrentRelease : new Date('2016-011-04'),
//   inventors: [{
//     name: 'Smarty Pants',
//     website: 'www.pantsparty.com'
//   }],
//   paradigms: ['object-oriented', 'fools-gold', 'submissive', 'punch-card'],
//   typingDiscipline: ['duck', 'aggressive', 'intuitive'],
//   influecingLanguages: ['C', 'Ruby']
// });

// javascript.save()
//   .then(function(){
//     console.log("Javascipt is saved");
//   })
//   .catch(function(err){
//     console.log("Didn't work" + err.stack);
//   });

  // python.save()
  //   .then(function(){
  //     console.log("Python is saved");
  //   })
  //   .catch(function(err){
  //     console.log("Didn't work" + err.stack);
  //   });

    // scala.save()
    //   .then(function(){
    //     console.log("Scala is saved");
    //   })
    //   .catch(function(err){
    //     console.log("Didn't work" + err.stack);
    //   });
//
// Language.find({})
// .then(function(docs){
//   console.log('Programming languages: ', docs);
// })
// .catch(function(err){
//   console.log('Error', err.stack);
// });
//
// Language.find({name: 'Python'})
// .then(function(docs){
//   console.log('Programming languages: ', docs);
// })
// .catch(function(err){
//   console.log('Error', err.stack);
// });

// Language.update(
//   {name: 'Scala'},
//   {
//     $set: {
//       website: 'www.myOhmy.net'
//     }
//   }
//
// )
// .then(function(){
//   console.log('Success' );
// })
// .catch(function(err){
//   console.log(err.stack);
// });
//
// Language.findOne({name: 'Python'})
// .then(function(docs){
//   console.log('language id: ', docs._id);
// })
// .catch(function(err){
//   console.log('Error', err.stack);
// });
//
// Album.update(
//   {name: 'BootScoot'},
//   {
//     $inc: {
//       duration: 1
//     }
//   },
// {
//   upsert: true
// }
// )
// .then(function(){
//   console.log('Success' );
// })
// .catch(function(err){
//   console.log(err.stack);
// });
//




const Twitter = mongoose.model('Twitter', {
  users: [ {
    name : {type: String, unique: true},
    avatar : String,
    followers : [
      {follower_username : String}
    ],
    tweets: [
      {text : String,
      timestamp: Date}
    ],
  }
  ]
});



    var twitter = new Twitter({
      users: [ {
        name : "BuddyHolly",
        avatar : "www.buddy.com",
        tweets: [
          {text : "I look just like myself",
          timestamp: new Date()}
        ],
      }
      ]
    });


    var newUser = {
        name : "TomCriuse",
        avatar : "www.cruiser.com",
        tweets: [
          {text : "Man I am a human god",
          timestamp: new Date()},
          {text : "I just ate raw sewage",
          timestamp: new Date()}
        ],
        followers : [
              {follower_username : "BuddyHolly"}
            ]
      };

    twitters.users.push(newUser);
    twitters.save()
      .then(function(){
        console.log("Twitter is born");
      })
      .catch(function(err){
        console.log("Didn't work" + err.stack);
      });

      //
      // display user tweets
      // Twitter.findById(userId)
      //   .then(function(user){
      //     console.log(user[0].tweets);
      //   })
      //   .catch(function(err){
      //     console.log('Error', err);
      //   });
      //
      //   // display user tweets and follower tweets
      //   Twitter.findById(userId)
      //     .then(function(user){
      //       console.log(user[0].tweets);
      //     user.followers.forEach(function(id){
      //       Twitter.findById(id)
      //       .then(function(follower){
      //         console.log(follower.tweet);
      //       })
      //       .catch(function(err){
      //         console.log("Follower error", err.stack);
      //       });
      //     });
      //     })
      //     .catch(function(err){
      //       console.log('Error', err.stack);
      //     });
