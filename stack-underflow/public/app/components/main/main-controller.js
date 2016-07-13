angular.module('stackUnderflow')
	.controller('MainCtrl', MainCtrl)


function MainCtrl($scope, posts) {
	// Vars
	$scope.test = 'Hello world!'
	$scope.posts = posts.posts

	// Functions
	function addPost() {
		if (!$scope.title || !$scope.title === '') return
		posts.create({
			title: $scope.title,
			link: $scope.link
		})
		$scope.title = ''
		$scope.link = ''
	}

	function incrementUpvotes(post) {
		posts.upvote(post)
	}

	// Exports
	$scope.addPost = addPost
	$scope.incrementUpvotes = incrementUpvotes

}