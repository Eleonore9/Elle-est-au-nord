#!/home/eleonore/Documents/Elleestaunord/env/bin/python
# -*- coding=UTF-8 -*-
import os, sys
from flask import Flask, flash, render_template, redirect, request 
from flask import url_for, session, send_from_directory

#port = int(os.environ.get('PORT', 33507))
#heroku config:add PORT=33507

app = Flask(__name__)
app.secret_key = 'this_is_my_not_so_secret_key'
app.config.update(
	DEBUG = True,
)

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/aboutme")
def aboutme():
	return render_template("aboutme.html")

@app.route("/projects")
def projects():
	return render_template("projects.html")

if __name__ == "__main__":
	port = int(os.environ.get("PORT", 5000))
	app.run(host='0.0.0.0', port=port)


