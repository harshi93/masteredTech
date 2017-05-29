/**
 * Created by Harshit on 5/25/2017.
 */
'use strict';

var React = require('react');

var About = React.createClass({
    statics:{
        willTransitionTo: function(transition, params, query, callbacks){
            if(!confirm('Are you sure you want to read a page this boring?')){
                transition.about();
            } else{
                callbacks();
            }
        },
        willTransitionFrom: function(transition, component){
            if(!confirm('Are you sure you want to leave a page that is this exciting?')){
                transition.about();
            }
        }
    },
    render: function(){
        return(
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports =  About;