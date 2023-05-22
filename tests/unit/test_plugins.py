import fullstackopen.plugins
from fullstackopen.core import discover_plugins


def test_plugins():
    plugins = discover_plugins(fullstackopen.plugins)

    assert len(plugins) == 1
