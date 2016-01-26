Music = new Mongo.Collection("music");

if (Meteor.isServer) {
	Meteor.startup(function () {
		var musicObjects = [
			{
				description : "Roll down your windows while driving your pickup",
				id : 0,
				name : "Country",
				votes : 4
			},
			{
				description : "",
				id : 0,
				name : "K-Pop",
				votes : 0
			},
			{
				description : "",
				id : 0,
				name : "Disney",
				votes : 5
			},
			{
				description: "",
				id : 4,
				name : "Techno",
				votes : 0
			},
			{
				description: "",
				id : 4,
				name : "Metal",
				votes : 2
			},
			{
				description: "",
				id : 4,
				name : "Filmscores",
				votes : 0
			}
		];

		if (Music.length == 0) {
			for (var i = 0; i < musicObjects.length; i++) {
				Music.insert(musicObjects[i])
			}
		}
	});
}


if (Meteor.isClient) {
	Template.bodyTemplate.helpers({
		score: function () {
				return Music.find({}, {sort: { votes: -1 }});
			}
	});



	Template.bodyTemplate.events({
		'change #genreList' : function(evt) {
			console.log("changed!");

			var selected = $("input[name=genre]:checked").val();

			CurrentSelection.update(old);
			console.log(selected);
		}
	});
}