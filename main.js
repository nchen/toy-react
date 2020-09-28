import { createElement, Component, render } from "./toy-react";

class MyComponent extends Component {
  constructor(){
    super();
    this.state = {
      a: 1,
      b: 2
    }
  }
  render() {
    return (
      <div>
        <h1>This is my component</h1>
        <span>{this.state.a.toString()}</span>
        {this.children}
      </div>
    );
  }
}

render(
  <MyComponent>
    <div id="a" class="c">
      <div></div>
      <div></div>
      <div>你好</div>
    </div>
  </MyComponent>,
  document.body
);
