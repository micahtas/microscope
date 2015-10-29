/**
 * Created by Micah on 10/29/2015.
 */

var postsData = [
    {
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    }
];
Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});