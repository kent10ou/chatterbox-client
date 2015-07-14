// YOUR CODE HERE:
var app = {
	init: function () {
		$(document).ready(function () {
			// app.message = $POST['message'];
			setInterval(app.fetch(), 5000);
			app.addFriend();
			app.friendsList = {};
			app.handleSubmit();
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
		  	for(var i = 0; i < data.results.length; i++) {
		  		console.log(data.results[i]);
		  		// console.log('datakey:', data[key]);
		  		var usern = _.escape(data.results[i].username);
		  		var textU = _.escape(data.results[i].text);
		  		$('#main').append("<div class='displayMessages'>" + usern  + '</div>' + '<br/>' + '<div>'+ (textU) + '</div>' + '<br/>');
		  		$(".displayMessages").click(function(){ alert("hello"); });
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
	},

	handleSubmit: function (message) {
		this.send(message);
		// })
	}

};


app.init();
// app.send('WAT?!')
// app.fetch();
