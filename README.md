# react-disqus-thread

React Disqus thread component

## Installing

```bash
$ npm install react-disqus-thread
# or
$ bower install react-disqus-thread
```

## Demo

http://mzabriskie.github.io/react-disqus-thread/example

## Example

```js
var React = require('react');
var ReactDisqusThread = require('react-disqus-thread');

var App = createClass({
	render: function () {
		return (
			<ReactDisqusThread
				shortname="example"
				identifier="something-unique-12345"
				title="Example Thread"
				url="http://www.example.com/example-thread"
				categoryId="123456"/>
		);
	}
});

React.render(<App/>, document.getElementById('container'));
```

## License

MIT
