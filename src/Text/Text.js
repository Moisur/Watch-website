import React from 'react';

const Text = () => {
    return (
        <div style={{padding:'60px'}}>
            <h1>How does React work?</h1>
            <h3>React works in declarative code.<br/>
            The react  is a javascript  library is (not a frame-work). imagine the coming here-after code  expressed as an app.that makes come into existence user 5 interfaces  uis in a certain to take place. react  lets you to effectively re-construct your DOM in javascript  and push only those changes to the DOM which have actually took place.</h3>
            <br /><br />
            <h1>State Vs Props</h1>
            <h2>State</h2>
            <p>1.Props are read-only.</p>
            <p>2.Props are immutable.</p>
            <p>3.Stateless component can have Props.</p>
            <p>4.Props are used to communicate between components.</p>
            <h2>Props</h2>
            <p>1.State changes can be asynchronous.</p>
            <p>2.State is mutable.</p>
            <p>3.	Stateless components cannot have State.</p>
            <p>4.States can be used for rendering dynamic changes with the component.</p>
           
        </div>
    );
};

export default Text;