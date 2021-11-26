# Tìm hiểu React cơ bản
## 1. Giới thiệu JSX
### Nhúng biểu thức JavaScript vào bên trong JSX bằng cặp dấu {} miễn là biểu thức hợp lệ
``` 
E.g: 
  const element= <h1> Hello, I'm {name} <h1>;
 //Trong đó name là tên biến đã được khai báo
```	
### JSX cũng là một biểu thức
Sau khi biên dịch thì JSX đc xem như là các đối tượng JavaScript=> có thể gán cho biến, đối số hay giá trị trả về cho hàm
### Xác định thuộc tính thẻ  với JSX
Dùng cặp dấu {} để nhúng biểu thức JavaScript cho thuộc tính
```
E.g: const element = <img src={user.img}></img>
```
// Trong đó user.img là biến đã được gán path của ảnh, khi biên dịch sẽ thay thế path vào user.img
=> giúp bảo vệ dữ liệu người dùng, tránh những sự thay đổi từ bên ngoài
### JSX là một đối tượng
Bởi JSX là một đối tượng nên cũng có thể khởi tạo bằng hàm bằng lời gọi React.createElement()
```
E.g: const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
    );
```
=> Đối tượng element là những mô tả muốn thấy trên màn hình. React đọc những đối tượng này và dùng chúng để xây dựng
DOM và cập nhật nó
## 2. Render
Để render một React element vào bên trong một root node thì truyền vào ReactDOM.render();
```
E.g: ReactDOM.render(element, document.getElementById('root'));
```
Lưu ý: React DOM so sánh element mới với cũ và chỉ cập nhật những thứ cần thiết để render ra trạng thái mong muốn
## 3. Components and Props
Components (tương tự function) cho phép chia UI thành các phần độc lập, có thể tái sử dụng và nhận đầu vào(gọi là props) và trả về các React elements (những thứ mong muốn xuất hiện trên màn hình)

### Function Components
Function Components là các hàm JavaScript, các react components này nhận đầu vào là một object "props" làm đối số và trả về một react element
Trong mỗi React App đều có thể chứa rất nhiều components, mỗi components trong đó thường nhận về các props và trả về React elements từ đó hiển thị ra cho UI. Components trong React thường được viết theo 2 loại chính đó là functional component và class components
```
E.g: 
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
Ưu điểm:functional component gọn nhẹ và không quá nhiều dòng code dài dòng.
Nhược điểm: không có các khái niệm như state, life cycles, events,... nên phải sử dụng thêm React Hooks	
### Class Components
```
E.g:
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
### Rendering Component
Biểu diễn Component tự định nghĩa
```
const element = <Welcome name="Huan" />;
```
Khi React thấy một element biểu  diễn component do người dùng định nghĩa, nó sẽ truyền các thuộc tính JSX và các phần tử con vào component này như là một object (props)
### State
State cho phép chúng ta lưu trữ dữ liệu trong component
State có thể được thay đổi bất cứ khi nào mong muốn và  state chỉ tồn tại trong phạm vi của components chứa nó, mỗi khi state thay đổi thì components đó sẽ được render lại.
### Props
Props là một object được truyền vào trong một components, mỗi components sẽ nhận vào props và trả về react element.
Props cho phép chúng ta giao tiếp giữa các components với nhau bằng cách truyền tham số qua lại giữa các components.
### Lifecycle
- Lifecycle và vòng đời sử dụng của một component.
- Lifecycle bao gồm 4 trạng thái chính:
  + Initialization:  Thời điểm khởi tạo một component, nó nằm trong hàm constructor component. Tại đây, component có thể nhận các props truyền vào và thiết lập các giá trị cho State.
  + Mouting: Ngay sau khi component được khởi tạo, hàm **componentWillMount()** được chạy và tại đây chúng ta có thể thực hiện những thao tác trước khi component được render(). Khi đã render được DOM rồi, chúng ta có thể thực hiện các thao tác update, kết nối với DB,... trong hàm **componentDidMount()**.
  + Updation:
    - states: Hàm **shouldComponentUpdate()** kiểm tra xem states có được chúng ta thay đổi hay không, nếu có thay đổi nó sẽ chạy tiếp đến hàm **componentWillUpdate()**. Hàm **componentWillUpdate()** được chạy ngay trước khi render và sau khi render xong rồi sẽ tiếp tục chạy đến hàm **componentDidUpdate()**. 
    -  props: Tương tự cách hoạt động với states, khi nhận được sự thay đổi props truyền vào từ component cha, hàm **componentWillReceiveProps()** được thực hiện. Tại đây, component con được cập nhật lại giá trị cho từng props. Sau đó, trình tự thực hiện các hàm cho việc update props được thực hiện hoàn toàn tương tự với update states.
  + Unmouting:  Chúng ta chỉ có thể xóa một component mà không có ràng buộc với một component cha nào khác, tức là nó phải là component lớn nhất bao bọc các component con.  Dùng hàm ReactDOM.unmountComponentAtNode để unmount một component và nó sẽ biến mất trên giao diện trang web.
## 4. Handling Events
Xử lý các sự kiện trong React rất giống với xử lý các sự kiện trên các phần tử DOM. Có một số khác biệt về cú pháp:
 + Các sự kiện React được đặt tên bằng camelCase, thay vì chữ thường. Ví dụ: onclick -> onClick, onchange -> onChange
 + Với JSX, bạn truyền một hàm để bắt sự kiện, thay vì một chuỗi như HTML thông thường.
 + Chúng ta sử dụng các event listener để lắng nghe các lời gọi hàm sẽ thực thi khi có một sự kiện xảy ra