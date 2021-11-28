# Tìm hiểu các khái niệm cơ bản về ReactJS #
 
 ## 1. Giới thiệu JSX ##

\- Nhúng biểu thức trong JSX: đặt vào cặp dấu ngoặc nhọn { }

    const name = "Josh Perez";
    const element = <h1>Hello, {name}</h1>;

Có thể nhúng hàm hay bất kỳ biểu thức JS hợp lệ nào vào bên trong dấu ngoặc nhọn JSX.

\- JSX cũng là một biểu thức

\- Chỉ định các thuộc tính với JSX: Sử dụng dấu ngoặc kép (đối với giá trị chuỗi) hoặc dấu ngoặc nhọn (đối với biểu thức)

\- JSX đại diện cho các đối tượng

Babel biên dịch JSX thành các lời gọi `React.createElement()`.

    const element = (
      <h1 className="greeting">
        Hello, world!
      </h1>
    );

tương đương với 

    const element = React.createElement(
      'h1',
      {className: 'greeting'},
      'Hello, world!'
    );

## 2. Các phần tử Rendering ##

\- Hiển thị một phần tử vào DOM

Trong file HTML:

    <div id="root"></div>

Trong file JS:

    const element = <h1>Hello, world</h1>;
    ReactDOM.render(element, document.getElementById('root'));

\- Cập nhật phần tử được kết xuất

Cách duy nhất để cập nhật giao diện người dùng là tạo một phần tử mới và chuyển nó cho `ReactDOM.render()`.

## 3. Components (thành phần) ##

Về mặt khái niệm, các Components giống như các hàm JavaScript. Chúng chấp nhận các đầu vào tùy ý (gọi là “props”) và trả về các phần tử React mô tả những gì sẽ xuất hiện trên màn hình.

\- Function và Class Components

Function Component:

    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

Class Component:

    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }

\- Hiển thị một Component

Các phần tử có thể được đại diện bởi các component do người dùng định nghĩa. Khi đó nó sẽ chuyển các thuộc tính JSX và các phần tử con cho component này như một đối tượng duy nhất.

\- Sáng tác các Components

Các components có thể tham chiếu đến các components khác trong đầu ra của chúng

\- Giải nén các Components

Chia nhỏ component thành các components nhỏ hơn

## 4. Props (thuộc tính) và State (trạng thái) ##

\- Props: Các components React phải hoạt động giống như các hàm thuần túy đối với các thuộc tính của chúng.

    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

\- State  tương tự như props, nhưng nó private và được kiểm soát hoàn toàn bởi component.

\- Chuyển đổi một hàm thành một lớp 

\+ Tạo 1 lớp ES6, cùng tên, là extends của `React.Component`

\+ Thêm phương thức trống duy nhất `render()`

\+ Đưa thân hàm vào trong phương thức `render()`

\+ Thay thế `props` bằng `this.props`

\+ Xóa phần khai báo hàm còn lại

\- Thêm trạng thái cục bộ vào lớp

\+ Thay thế `this.props.date` bằng `this.state.date` trong phương thức `render()`

\+ Thêm phương thức khởi tạo cho giá trị ban đầu `this.state`

\- Sử dụng State

\+ Không sửa đổi state trực tiếp

\+ Cập nhật state có thể không đồng bộ

\+ Cập nhật state được hợp nhất

**5. Vòng đời của 1 component**

![Lifecycle of Component](https://user-images.githubusercontent.com/93386621/143260923-1cb678cd-9e3d-42f7-b0eb-6a263515fff5.png)

\- Giai đoạn Mounted

\+ constructor(props): phương thức khởi tạo của một Component thông thường phương thức này luôn nhận vào một props hoặc các tham số khác.

\+ componentWillMount(): phương thức này xảy ra một lần sau constructor và ở phương thức này sẽ không render giao diện cho Component.

\+ render(): hoạt động sau componentWillMount, phương thức này dùng để render các phần tử của React tạo ra giao diện cho người dùng. Tất cả những gì trong phương thức này đều hiển thị màn hình.

\+ componentDidMount(): phương thức này chỉ được gọi một lần sau khi render xảy ra, lúc này các phần tử đã đươc hiển thị trên màn hình và có thể được truy cập bằng this.refs. Thông thường để viết các đoạn code liên quan tới delay hoặc đồng bộ API.

\- Giai đoạn UnMounted:

\+ componentWillReceiveProps(object nextProps): Cha của component này sẽ được truyền vào một props mới và phương thức này sẽ khởi tạo lại giao diện. Chúng ta có thể cập nhật lại state nội bộ thông qua phương thức this.setState() trước khi phương thức render được gọi.

\+ shouldComponentUpdate(object nextProps, object nextState): Phương thức này nhằm đảm bảo component sẽ được render nếu như trả về true.

\+ componentDidUpdate(object prevProps, object prevState): Phương thức này chỉ được thực hiện khi render() xảy ra. Lúc này giao diện đã được cập nhật.

\- Giai đoạn Update:

\+ componentWillUnmount(): Phương thức này chỉ xảy ra khi ứng dụng bị đóng hoàn toàn.

## 6. Xử lý sự kiện ##

\- Xử lý sự kiện với các phần tử React rất giống với việc xử lý sự kiện trên các phần tử DOM. Có một số khác biệt về cú pháp:

\+ Các sự kiện React được đặt tên bằng cách sử dụng camelCase, thay vì chữ thường

\+ Với JSX, sử dụng hàm thay vì chuỗi

## 7. Kết xuất có điều kiện ##

\- Inline If với toán tử logic &&: `condition && expression`

\- Inline If-Else với toán tử có điều kiện: `condition ? true : false`

## 8. Lists và Keys ##

    function NumberList(props) {
      const numbers = props.numbers;
      const listItems = numbers.map((number) =>
        <li key={number.toString()}>
          {number}
        </li>
      );
      return (
        <ul>{listItems}</ul>
      );
    }
