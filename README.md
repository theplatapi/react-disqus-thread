# react-disqus-comments

## Installing

```bash
$ npm install react-disqus-comments
```

## Example

```js
import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

class App extends React.Component {
  handleNewComment(comment) {
    console.log(comment.text);
  }

  render() {
    return (
      <ReactDisqusComments
        shortname="example"
        identifier="something-unique-12345"
        title="Example Thread"
        url="http://www.example.com/example-thread"
        category_id="123456"
        onNewComment={this.handleNewComment}/>
    );
  }
}

React.render(<App/>, document.getElementById('container'));
```

## License

MIT

## Thanks
Thanks to mzabriskie for the original package. This package fixes annoying warnings.
