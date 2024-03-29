import os, sys
from flask import Flask, render_template


port = int(os.environ.get('PORT', 33507))

app = Flask(__name__)
app.config.update(
    DEBUG = False,
)

# Simple site: just 3 routes for the Home page and 2 pages
@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")


@app.route("/aboutme/", methods=["GET"])
def aboutme():
    return render_template("aboutme.html")


@app.route("/projects/", methods=["GET"])
def projects():
    return render_template("projects.html")


if __name__ == "__main__":
    # port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
