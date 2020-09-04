# flujos-db-engine-template

This is just a boilerplate to get started creating a database engine for Flujos.

# Getting started

You have an initial project structure with the basic files you'll need, but, if you want, you can add folders and/or files to your engine.

<ol>
<li>Start by clone this repository, and renaming the project:</li>
<p>
<pre>
<code>
  $ git clone https://github.com/kenliten/flujos-db-engine-template.git <br>
  $ mv flujos-db-engine-template &lt;YOUR_PROJECT_NAME&gt;
</code>
</pre>
</p>

<li>Install all dependencies you'll need.</li>
<p>
You need you keep in your database engine all packages needed to successfull use.
</p>

<li>Add content to each function if possible.</li>
<p>
If any feature is not available with the database you are working with, just leave it as the default.
<br>
The initialization of the database may live in the init method.
<br>
The first argument you'll receive is the db itself, so all operations you do inside a method must be on the db you get as an argument.
</p>
