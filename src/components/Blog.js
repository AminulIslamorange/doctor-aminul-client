import React from 'react';

const Blog = () => {
    return (
        <div>
           <div className='m-4 p-4 bg-slate-300'>
           <p className='text-3xl mb-2 '>What is the Difference between SQL and NoSQL Database?</p>


Answer:

<p>SQL:
****RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
****These databases are not suited for hierarchical data storage.
***These databases are best suited for complex queries.</p>

NoSql:
<p >***Non-relational or distributed database system.
****These databases are best suited for hierarchical data storage.
****These databases are not so good for complex queries....</p>
           </div>



<div className='m-4 p-4 bg-slate-300'>
<p className='text-3xl mb-2 '>What is JWT? and how does it work?</p>

Ans:
  ***JWT  or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.
JWT's differ   from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

</div>

<div className='m-4 p-4 bg-slate-300'>
<p className='text-3xl mb-2 '>What is the difference between javascript and NodeJS?</p>

Ans:JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.

JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.

JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.

JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development

JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.

</div>



<div className='m-4 p-4 bg-slate-300'>
<p className='text-3xl mb-2 '>How does NodeJS handle multiple requests at the same time?</p>

Ans:NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module
</div>


        </div>
    );
};

export default Blog;