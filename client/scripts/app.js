// YOUR CODE HERE:
var app = {
	init: function () {
		$(document).ready(function() {
		    console.log( "ready!" );
		});
	},

	server: function (url) {
		url='https://api.parse.com/1/classes/chatterbox'
		return url;
	},

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
		  // data: ,
		  success: function(data){
		  	console.log('data: ',data.results[0]);
		  	for(var i = 0;i < data.results.length; i++) {
		  		console.log(data.results[i]);
		  		// console.log('datakey:', data[key]);
		  		$('#main').append('<div>'+ encodeURI(data.results[i].username)+ '\n' + encodeURI(data.results[i].text) + '</div>' );
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

	}

};

app.fetch();
