# Tìm hiểu cơ bản về ReactJS

## JSX (Javascript Syntax Extension)

JSX là 1 phần mở rộng cú pháp giống như XML cho JavaScript.

Ví dụ:

```jsx
const element = <h1>Hello everyone!</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Không sử dụng JSX:

```jsx
ReactDOM.render(
  React.createElement('h1', null, 'Hello everyone'),
  document.getElementById('root')
);
```

## State và Props

Props và state là 2 kiểu dữ liệu trong React. State chỉ được thay đổi bên trong bản thân component. Props không bị kiểm soát bởi bản thân component.

### Props

Props viết tắt của properties. Props là các giá trị đơn hoặc các đối tượng có chứa tập hợp các giá trị được chuyển đến Component. Nó sử dụng quy ước đặt tên tương tự như các thuộc tính của thẻ HTML.

- Props là phương tiện để các component giao tiếp với nhau.

- Props được truyền từ component cha.

- Props chỉ để đọc, vì vậy chúng ta không thể sửa đổi props.
  
Ví dụ:

```jsx
let formText = 'Example App';

class Form extends React.Component {
    render () {
        return (
            <div>
                <h3>
                    { this.props.text }
                </h3>
            </div>
        );
    }
}

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>
                    Hello everyone!
                </h1>
                <Form text={ this.props.text } />
            </div>
        );
    }
}
  
  ReactDOM.render(
      <App text={ formText } />,
      document.getElementById('root')
  );
  ```

- Props được truyền vào trong App trong phương thức React.render()

- App component truy xuất biến `formText` thông qua lời gọi `this.props.text`

- Form component hiển thị dữ liệu vào thẻ `<h3>`

### State

Khác với props là bất biến thì state có thể thay đổi. State được quản lý chỉ bởi duy nhất 1 component, nó cũng không thể truyền xuống cho component con.

Ví dụ:

```jsx

class Counter extends React.Component {
  incrementCount: function(){
    this.setState({
      count: this.state.count + 1
    });
  },
  getInitialState: function(){
     return {
       count: 0
     }
  },
  render: function(){
    return (
      <div class="my-component">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter/>, document.getElementById('counter'));
```

## Vòng đời của component

- **componentWillMount** sẽ được thực thi trước trước khi khởi chạy, ở cả 2 phía server(máy chủ) và client(phía người dùng).

- **componentDidMount**: Phương thức componentDidMount được thực thi sau khi render đầu tiên được sinh ra ở phía client. Thông thường những request dạng AJAX, DOM hoặc cập nhật state chúng ta để trong phương thức này.

- **componentWillReceiveProps**: được gọi khi giá trị trong props được cập nhật trước khi giao diện được render ra.

- **shouldComponentUpdate:** trả về giá trị *true* hoặc *false*. Phương thức này giúp chúng ta nhận biết component sẽ được cập nhật hay không được cập nhật. Giá trị mặt định là true. Nếu mình chắc chắn rằng component không cần phải render sau khi state hoặc props được cập nhật thì chúng ta có thể trả về kết quả false.

- **componentWillUpdate**: được gọi trước khi component được rendering (vẽ ra giao diện trên web)  .

- **componentDidUpdate**: được gọi sau khi component được rendering (vẽ ra giao diện trên web).

- **componentWillUnmount** được gọi sau khi component được unmount khỏi DOM.

## Cách xử lý các sự kiện

React là một thư viện dựa trên Javascript, về cơ bản không có nhiều khác biệt trong cách xử lý sự kiện giữa ReactJS và Javascript. Với Javascript, khi sự kiện xảy ra một hàm sẽ được gọi để thực thi. Nhưng với React, khi sự kiện xảy ra, sẽ có một phương thức của Component được gọi.

File **onClick-example.html**

```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <title>ReactJS Event</title>
      <script src="https://unpkg.com/react@16.4.2/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom@16.4.2/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"></script>
      <style>
         #currenttime1 {
         border:1px solid blue;
         padding: 5px;
         margin-top: 20px;
         }
      </style>
   </head>
   <body>
      <h3>ReactJS Event: onClick</h3>
 
      <div id="currenttime1"></div>
 
      <script src="onClick-example.jsx" type="text/babel"></script>
 
   </body>
</html>
```

File **onClick-example.jsx**

```jsx
class CurrentTime extends React.Component {
  constructor(props) {
    super(props);
 
    var now = new Date();
    this.state = {
      currentTime: now.toString()
    };
  }
 
  // A method of CurrentTime component
  refreshCurrentTime(event) {
    var now = new Date();
    this.setState({ currentTime: now.toString() });
  }
  render() {
    return (
      <div>
        <h4>Current Time:</h4>
        <p>{this.state.currentTime}</p>
        <button onClick={(event) => this.refreshCurrentTime()}>
          Refresh Current Time
        </button>
      </div>
    );
  }
}
 
// Render
ReactDOM.render(<CurrentTime />, document.getElementById("currenttime1"));
```

Ngoài cách gọi phương thức <mark>refreshCurrentTime </mark> như trên còn có 2 cách gọi khác:

```jsx
// A method of this Component.
refreshCurrentTime(event) {
  var now = new Date();
  this.setState({ currentTime: now.toString() });
}
 
render() {
  return (
    <div>
      <h4>Current Time:</h4>
      <p>{this.state.currentTime}</p>
      <button onClick={this.refreshCurrentTime.bind(this,event)}>
         Refresh Current Time
      </button>
    </div>
  );
}
```

```jsx
class CurrentTime extends React.Component {
  constructor(props) {
    super(props);
 
    var now = new Date();
    this.state = {
      currentTime: now.toString()
    };
 
    // (***)
    this.refreshCurrentTime = this.refreshCurrentTime.bind(this);
  }
 
  // A method of this Component
  refreshCurrentTime( ) {
    var now = new Date();
    this.setState({ currentTime: now.toString() });
  }
  render() {
    return (
      <div>
        <h4>Current Time:</h4>
        <p>{this.state.currentTime}</p>
        <button onClick={this.refreshCurrentTime}>
          Refresh Current Time
        </button>
      </div>
    );
  }
}
 
// Render
ReactDOM.render(<CurrentTime />, document.getElementById("currenttime1"));
```