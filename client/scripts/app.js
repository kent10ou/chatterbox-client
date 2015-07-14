// YOUR CODE HERE:
var app = {
	init: function () {
		$(document).ready(function () {
			app.fetch();
			app.addFriend();
			app.friendsList = {};
		});
	},

	server: 'https://api.parse.com/1/classes/chatterbox',

	send: function (message) {
		$.ajax({
		  // This is the url you should use to communicate with the parse API server.
		  url: this.server,
		  type: 'POST',
		  data: JSON.stringify(message),
		  contentType: 'application/json',
		  success: function (data) {
		    console.log('chatterbox: Message sent');
		  },
		  error: function (data) {
		    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
		    console.error('chatterbox: Failed to send message');
		  }
		});
	},

	fetch: function () {
		$.ajax({
		  url: this.server,
		  type:'GET',
		  success: function(data){
		  	console.log('data: ',data.results[0]);
		  	for(var i = 0;i < data.results.length; i++) {
		  		console.log(data.results[i]);
		  		// console.log('datakey:', data[key]);
		  		var usern = encodeURI(data.results[i].username);
		  		var textU = encodeURI(data.results[i].text);
		  		$('#main').append('<div id="displayMessages"> '+ decodeURI(usern)+ '<br/>' + decodeURI(textU) + '</div>' + '<br/>' );

		  	}
		  }
		});
	},
	clearMessages: function () {
		$('#chats').html('');
	},

	addMessage: function (message) {
		$('#chats').append('<div>' + message + '</div');
	},

	addRoom: function (room) {
		$('#roomSelect').append('<div>' + room + '</div>');
	},

	addFriend: function () {
		// app.friendsList[this] = true;
	}

};
app.init();
// app.send('WAT?!')
// app.fetch();
