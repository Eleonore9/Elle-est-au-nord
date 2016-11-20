#!/env/bin/python
# -*- coding=UTF-8 -*-
import pytest_flask
import pytest
from flask import url_for
from elleestaunord.site import app as my_app


@pytest.fixture
def app():
    return my_app

@pytest.mark.app(debug=False)
def test_my_app(app):
    assert not app.debug, 'Ensure the app not in debug mode'

@pytest.mark.usefixtures('client')
def test_route(client):
    assert client.get(url_for('index')).status_code == 200
    assert client.get(url_for('aboutme')).status_code == 200
    assert client.get(url_for('projects')).status_code == 200
    assert client.get('/foo').status_code == 404
