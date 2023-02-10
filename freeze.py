import os
from flask_frozen import Freezer
from elleestaunord.site import app


freezer = Freezer(app)
# port = int(os.environ.get('PORT', 33507))


if __name__ == '__main__':
    freezer.freeze()
    # freezer.run(port=port, debug=False)
