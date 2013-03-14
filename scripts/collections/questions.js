App.Collections.Questions = Backbone.Collection.extend({
	model: App.Models.Question,
	localStorage: new Backbone.LocalStorage("cyOverflow:questions")
});