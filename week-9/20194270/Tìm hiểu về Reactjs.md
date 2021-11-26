# Tài liệu Tìm hiểu về ReactJS Tuần 8
# Sinh viên thực hiện : Trần Đức Hải - MSSV : 20194270

## 1.   Khái quát về Reactjs
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ReactJs là thư viện JavaScript được sử dụng cho việc xây dựng các thành phần UI có khả năng tái xử dụng. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Có thể sử dụng ReactJs nhiều hoặc ít là tùy ý. Ta có thể sử dụng React bằng cách thêm các thành phần React vào trang web rồi mở rộng dần hoặc ta có thể tạo một ứng dụng React với các công cụ như Create React App, Next.js hoặc các công cụ khác.

## 2. JSX

### a. Khái niệm
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JSX là 1 phần mở rộng cú pháp của JS. Nó được khuyến khích dùng trong React. Ta có thể định nghĩa đơn giản JSX là như sau : <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JSX = Javascript + XML <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Các ưu điểm mà JSX mang lại: <br>

* Nhanh hơn nhờ việc thực hiện tối ưu hóa trong khi biên dịch mã thành Javascript.
* An toàn và hầu hết các lỗi có thể bị bắt trong quá trình biên dịch.
* Giúp bạn viết template dễ dàng và nhanh hơn.

### b. Sử dụng JSX
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cú pháp của JSX cơ bản là giống với HTML cùng với khả năng nhúng bất kì biểu thức JS hợp lệ nào bên trong bằng cách gói nó trong một cặp dấu ngoặc nhọn.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ta có thể xem xét với ví dụ sau : <br>
```javascript
const name = 'Hai';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Đoạn mã trên khai báo một biến name và sử dụng nó trong JS bằng cách kẹp nó trong cặp ngoặc nhọn. Và điều này cũng hoạt động nếu muốn nhúng một biểu thức JS làm giá trị cho một thuộc tính. <br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bên cạnh đó thì chính JSX cũng là 1 biểu thức tức là JSX cũng có thể sử dụng trong các lệnh if, for hay chấp nhận nó dưới dạng đối số hoặc được trả về từ các hàm. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trong ví dụ dưới đây thể hiện việc trả về đối tượng JSX : <br>
```javascript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;  	
  }
  return <h1>Hello, Stranger.</h1>;
}
```



## 3. Component
### a. Khái niệm
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Theo định nghĩa được trích từ trang chủ thì Component được định nghĩa  là các thành phần giống như các hàm JavaScript. Nó chấp nhận các đầu vào tùy ý (được gọi là “properties”) và trả về các phần tử React mô tả những gì sẽ xuất hiện trên màn hình. Component là công cụ cho phép chia giao diện ra thành từng phần độc lập giúp ta tập trung phát triển vào từng thành phần cụ thể cũng như tạo ra các thành phần có thể dễ dàng tái sử dụng.
### b. Cách sử dụng
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Các Componet có thể được tạo ra bởi nhiều cách nhưng đơn giản nhất là tạo ra một hàm JavaScript nhận đối số "props" (viết tắt của properties) và trả về một phần tử React (React element). Ví dụ như :
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ví dụ trên tao ra một component tên Welcome hoàn toàn chính xác với định nghĩa, nhận đối số props và trả về một phần tử React (React element). <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bên cạnh đó component cũng có thể được tạo ra bởi class của ES6 bằng việc tạo một lớp  là extends của React.Component : <br>
```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hai ví dụ trên có kết quả là tương tự nhau.
### c. props
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Về mặt khái niệm props hay this.props chứa các thuộc tính (properties) được định nghĩa khi component được khai báo. Trong số đó có this.props.children là một thuộc tính đặc biệt chứa thông tin về các thẻ con được đặt bên trong khi component chứa nó được gọi.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Đặc biệt lưu ý đến việc "Props are Read-Only" hay tất cả các react component đều phải hành xử như một hàm thuần túy (pure fuctions) tức là các  React component sẽ không bao giờ cố gắng thay đổi đầu vào của mình (this.props).<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Ví dụ : <br>
```javascript
const element = 
    <Welcome name="Sara"> 
        <h1>a</h1>
        <h1>b</h1>
        <h1>c</h1>
    </Welcome>;
/>;
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Giả sử như thành phần Welcome đã được định nghĩa thì bây giờ props sẽ bao gồm thuộc tính name và giá trị của nó cùng với việc giá trị của this.props.children sẽ là 3 thẻ h1 a, b, c. <br>

### d. state
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Như đã nói thì props sẽ không được phép thay đổi trong vòng đời của component vậy nên để các component có thể thay đổi và phải hồi các tác động từ người dùng hay hệ thống thì chúng ta sẽ dùng 1 thành phần khác là state thay thế. <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; State sẽ là một JavaScript object chứa các dữ liệu của component mà có thể được thay đổi theo thời gian và là một thành phần do người dùng định nghĩa.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Một chú ý khi sử dụng State là State là một thành phần bất biến (immutable), tức là khi thay đổi giá trị của State ta không bao giờ gọi this.state mà luôn sử dụng setState(). Và việc cập nhật bằng setState() là thao tác gộp đối tượng được cung cấp với đối tượng hiện tại vì vậy nên chỉ cần đề cập tới thuộc tính được sửa đổi khi gọi setState(). <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Một chú ý khác là các hàm cập nhật state hay props có thể được sử lí không đồng bộ gây ra các kết quả không mong muốn trong việc cập nhật giá trị các trạng thái. Vì vậy giải pháp được đưa ra là sử dụng setState() với tham số đầu vào là một hàm nhận 2 tham số là props và state hiện tại thay vì là một object như bình thường. Ví dụ : <br>
```javascript
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
``` 
### e. Vòng đời của 1 component
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Một component có một số phương thức vòng đời cho phép người sử dụng ghi đè mã và mã đó sẽ được chạy vào các thời điểm khác nhau trong vòng đời của 1 phần mềm<br>
#### * Mounting
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Các phương thức thuộc mục này sẽ được chạy lần lượt khi một component được tạo và chèn vào Dom : 
* constructor() 
* static getDerivedStateFromProps() 
* render() : 
* componentDidMount() : được gọi ngay sau khi component được kết xuất và trả vào DOM

#### * Updating
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Các component cập nhật khi xuất hiện các thay đổi đối với props hoặc state. Các phương thức này được gọi theo thứ tự sau khi một thành phần được cập nhật:<br>

* static getDerivedStateFromProps()
* shouldComponentUpdate()
* render()
* getSnapshotBeforeUpdate()
* componentDidUpdate()

#### * Unmounting 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Phương thức ```javascript componentWillUnmount() ``` sẽ được gọi khi component được gỡ ra khỏi DOM.<br>

##### * Hình ảnh trực quan hơn về vòng đời của một component được tham khảo từ trang chủ của React : 
![Capture](https://user-images.githubusercontent.com/82724036/143282298-71e14707-9da6-4485-9ef2-42e273427bc8.PNG)

## 4. Xử lý sự kiện (Handling Events)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Việc xử lý các sự kiện với các phần tử React rất giống với việc xử lý các sự kiện trên các phần tử DOM. Tuy nhiên vẫn có một số khác biệt về cú pháp:<br>

* Các sự kiện React được đặt tên bằng cách sử dụng camelCase, thay vì chữ thường.
* Với JSX, người sử dụng chuyển một hàm làm trình xử lý sự kiện, thay vì một chuỗi.
Ví dụ : 
```javascript
class LoggingButton extends React.Component {

  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Như ví dụ trên khai báo một component chứa 1 button có hàm xử lí là handleClick() sẽ thực hiện viện log mỗi khi button được nhấn<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Hàm xử lý sự kiện có thể nhận một đối số "e" cho trường hợp người dùng muốn ngăn hành vi mặc định. Người dùng sử dụng ```javascript    e.preventDefault(); ``` bên trong hàm xử lý sự kiện để ngăn hành vi mặc định của thành phần React<br>

## 6.  List và Key
### a. List
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Với React ta có thể xây dựng danh sách các phần tử (React elements) và đưa chúng vào JSX bằng cách gói chúng trong dấu ngoặc nhọn <br>
```javascript
class NumberList{
    render () {
        const numbers = this.props.numbers;
        const listItems = this.props.numbers.map((number) =>
            <li key={number.toString()}>
            {number}
            </li>
        );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')

);

```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Trong ví dụ trên ta tạo một mảng các React elements bằng hàm map() với đầu vào rồi bọc nó trong thẻ ul và xuất ra một danh sách để hiển thị.
### b. Key
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Với các phần tử thuộc dạng danh sách như ví dụ ở mục a thì ta cần cấp cho các phần tử dánh sách một cách định danh ổn định để xác định phần tử khi có sự thay đổi, cập nhật. Chính vì vậy ta thêm các thuộc tính khóa (keys) vào phần tử danh sách.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Một chú ý nhỏ về khóa rằng nó phải là độc nhất giữa các thẻ cùng cấp và không nhất thiết là độc nhất trên phạm vi global

## 7. Mô hình thành phần (Composition) React
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Với việc được tạo ra các thẻ do người dùng định nghĩa và thêm các thẻ này với tư cách là thẻ con trong các thành phần tự định nghĩa khác cho phép tạo ra mô hình thành phần (composition model) khiến cho việc tái sử dụng component React trở nên dễ dàng hơn so với việc sử dụng các thao tác kết thừa (extends).<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Ví dụ  :
```javascript

class Profile {
    render () {
        return (
            <div >
                <image src  = {this.props.imageSrc}> </image>
                <p>this.props.name </p>
             </div>
        );
    }
}

class ProfileDetail {
    render () {
        return (
            <Profile imageSrc = {this.props.imageSrc} name = {this.props.name}>
            <h1>this.props.description </h1>
            <h1>this.props.class </h1>
            <h1>this.props.MSSV </h1>
            <h1>this.props.university</h1>
        );
    }        
}
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Trong ví dụ trên thể hiện một thành phần Profile gồm ảnh và tên của đối tượng được truyền vào và phương thức ProfileDetail là mở rộng của Profile với việc thêm vào các thẻ h1 thể hiện các thuộc tính chi tiết khác.<br>

## 8. Kết luận
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Với các tính chất cơ bản được tìm hiểu có thể thấy được ReactJs là thư viện JavaScript mạnh mẽ được sử dụng cho việc xây dựng các thành phần UI một cách linh hoạt cũng như có tính tái sử dụng cao.






