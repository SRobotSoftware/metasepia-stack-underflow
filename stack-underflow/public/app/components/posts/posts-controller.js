angular.module('stackUnderflow')
	.controller('PostsCtrl', PostsCtrl)


function PostsCtrl($scope, posts, post) {

	// Vars
	$scope.post = post

	// Functions
	function addComment() {
		if ($scope.body === '') return
		posts.addComment(post._id, {
			body: $scope.body,
			author: 'user'
		}).success(function (comment) {
			$scope.post.comments.push(comment)
		})
		$scope.body = ''
	}

	function incrementUpvotes(comment) {
		posts.upvoteComment(post, comment)
	}

	// Exports
	$scope.addComment = addComment
	$scope.incrementUpvotes = incrementUpvotes
}
