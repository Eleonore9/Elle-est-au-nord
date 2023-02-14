from flask_frozen import Freezer
from elleestaunord.site import app


freezer = Freezer(app)


if __name__ == '__main__':
    freezer.freeze()
    # Run frozen app locally:
    freezer.run(debug=True)
