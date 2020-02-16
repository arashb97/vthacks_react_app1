import flask

myapp = flask.Flask("__main__")

@myapp.route("/hello")
def hello():
    return "Hello world!"

@myapp.route("/")
def index():
    return flask.render_template("index.html")

myapp.run(debug=True)
