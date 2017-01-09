

var aws = require('aws-sdk');
var polly = new aws.Polly({region: "us-east-1"});
var streamifier = require('streamifier');
var config = require('./config.json');
var fs = require('fs');
var voiceid=config.voiceChannelId;



var blah = require('discord.io');
var discord3 = new blah.Client({
	token: config['appsecret'],
	autorun: true
});

discord3.on('ready', function() {
	console.log('ready');

	discord3.joinVoiceChannel(voiceid, function(err, events) {
		discord3.on('message', function(author, id, id2, message) {
			console.log("Trying to do a thing with message: ", message);
			var params = {
				OutputFormat: 'mp3',
				Text: message, 
				 // | Ivy | Joanna | Joey | Justin | Kendra | Kimberly | Salli | Conchita | Enrique | Miguel | Penelope | Chantal | Celine | Mathieu | Dora | Karl | Carla | Giorgio | Mizuki | Liv | Lotte | Ruben | Ewa | Jacek | Jan | Maja | Ricardo | Vitoria | Cristiano | Ines | Carmen | Maxim | Tatyana | Astrid | Filiz', /* required */
				 VoiceId: config.Voice,

				 SampleRate: '8000',
				 TextType: 'text'
			};
			polly.synthesizeSpeech(params, function(err, data) {
				discord3.getAudioContext(voiceid, function(err, stream) {

				  if (err) console.log(err, err.stack); // an error occurred
				  else     {
				  	console.log("Streaming message: ", message);
				  	stream.write(data.AudioStream);
				  	
				  }
				});

			})
		})
	});
})

