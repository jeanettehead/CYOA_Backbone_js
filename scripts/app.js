$(function() {
	App.currentUser = new App.Models.User();
	var loginView = new App.Views.Login({el: $('#loginView'), model: App.currentUser});
	var newQuestionView = new App.Views.NewQuestion({el:$('#newQuestionView')});
});