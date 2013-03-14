App.Views.Question = Backbone.View.extend({
	tagName: 'li',
	className: 'question',
	template: _.template($("#question-template").html()),

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});