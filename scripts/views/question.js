App.Views.Question = Backbone.View.extend({
	tagName: 'li',
	className: 'question',
	template: _.template($("#question-template").html()),

	events: {
		"click .voteup" : "upVote",
		"click .votedown" : "downVote"
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	upVote: function() {
		this.setVote("up");
	},

	downVote: function() {
		this.setVote("down");
	},

	setVote: function(voteType){
		this.model.vote(App.currentUser.get('userName'), voteType);
	}

});