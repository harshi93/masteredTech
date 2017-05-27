/**
 * Created by Harshit on 5/27/2017.
 */
'use strict';

var React = require('react');
var Router = require('react-router');
var authorForm = require('./authorForm');
var authorApi =  require('../../api/authorApi');
var toastr = require('toastr');

var manageAuthor = React.createClass({
    mixin:[
        Router.Navigation()
    ],
    statics:{
        willTransitionFrom: function(transition, component){
            if(component.state.dirty && !confirm('leave without saving?')){
                transition.abort();
            }
        }
    },

    getInitialState: function(){
        return{
            author:{id: '', firstName: '', lastName: ''},
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function(){
        var authorId = this.props.params.id;

        if(author.id){
            this.setState({author: AuthorApi.getAuthorById(authorId)});
        }
    },

    setAuthorState: function(event){
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },

    authorFormIsValid: function(){
        var formIsValid= true;
        this.state.errors={};

        if(this.state.author.firstName.length < 3){
            this.state.author.firstName = 'First name must be at least 3 characters';
            formIsValid = false;
        }

        if(this.state.author.lastName.length <3){
            this.state.author.lastName = 'Last Name must be at least 3 characters';
            formIsValid = flase
        }
        this.setState({errors: this.state.errors});
    },

    saveAuthor: function(event){
    event.preventDefault();
    if(!this.authorFormIsValid()){
        return;
    }
    authorApi.saveAuthor(this.state.author);
    this.setState({dirty: false});
    toastr.success('Author saved');
    this.transitionTo('authors');
    },

    render: function(){
        return(
            <authorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor()}
                errors={this.state.errors}/>
        );
    }
});

module.exports = manageAuthor;