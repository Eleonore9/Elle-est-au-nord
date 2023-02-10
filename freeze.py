#!/env/bin/python3.8
from flask_frozen import Freezer
from elleestaunord.site import app


freezer = Freezer(app)


if __name__ == '__main__':
    freezer.freeze()
