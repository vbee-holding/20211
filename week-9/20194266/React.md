# Tìm hiểu về React
## 1. state
### State là một object có thể được sử dụng để chứa dữ liệu hoặc thông tin về components. Nó chủ yếu được sử dụng để cập nhật component khi người dùng thực hiện một số hành động như nhấp vào nút, nhập một số văn bản, nhấn một số phím, v.v. 
### Bất cứ khi nào một lớp kế thừa lớp React.Component, Constructor của nó sẽ tự động gán thuộc tính state cho lớp với giá trị ban đầu được gán bằng null. Chúng ta có thể thay đổi nó bằng cách ghi đè Constructor. Trong nhiều trường hợp chúng ta cần cập nhật state. Để làm điều đó, chúng ta phải sử dụng phương thức setState
### Khi state đã được thay đổi, react sẽ render lại component với những thay đổi đó. Bất cứ khi nào state được cập nhật trong component, tất cả các component con của nó cũng sẽ render/show lại với những thay đổi mới nhất.
## 2. Props
### Props là một object được truyền vào trong một components, mỗi components sẽ nhận vào props và trả về react element. Mọi component được coi là một hàm javascript thuần khiết (Pure Function).
### Props là không thể thay đổi được. Vì trong các hàm thuần khiết, chúng ta không thể thay đổi dữ liệu của các tham số. Vì vậy, cũng không thể thay đổi dữ liệu của prop trong ReactJS.
### Chúng ta không cần sử dụng this cho các hàm component cơ bản để truy cập props nhưng chúng ta phải sử dụng this để truy cập props this.props.<prop_name>.
## 3. Vòng đời của một component
### a. Mounting
#### **constructor(props)**
#### - Được gọi khi một thể hiện của component được tạo ra.
#### - Có thể dùng để khởi tạo state cho component.
#### - Cũng có thể dùng để "bind" các hàm của component.
#### - Nếu phải cài đặt hàm này thì phải khai báo 1 tham số props cho nó và phải gọi super(props) đầu tiên.
#### - Nếu không làm gì thì không phải cài đặt hàm này.
#### **componentWillMount()**
#### - Được gọi trước khi render().
#### - Dùng để đăng ký các sự kiện toàn cục.
#### - Dựa vào các props để tính toán và set lại state
#### **render()**
#### - Hàm này bắt buộc phải có trong component().
#### - Trả về 1 đối tượng JSX (có thể lồng các đối tượng với nhau nhưng phải có 1 đối tượng gói tất cả các đối tượng lại) để hiển thị hoặc null / false nếu không muốn hiển thị gì.
#### -Không được gọi setState() trong hàm này (cũng như trong các hàm mà hàm này gọi đến), bởi khi gọi setState() thì hàm render sẽ được gọi => gây ra lặp vô hạn.
#### **componentDidMount()**
#### - Ngay sau khi hàm render được gọi đến lần đầu tiên chạy xong thì hàm này sẽ được chạy.
#### - Thường dùng để fetch dữ liệu từ server và sau đó setState để render dữ liệu ra.
#### - Đến đây thì các phần tử đã được sinh ra rồi, và có thể tương tác với DOM bằng JS trong hàm này.
### b. Updating
#### **componentWillReceiveProps(nextProps)**
#### - Hàm này được chạy khi mà props của component đã được sinh ra có sự thay đổi.
#### - Phải gọi setState() nếu muốn render lại.
#### **shouldComponentUpdate(nextProps, nextState)**
#### - Được gọi trước render.
#### - Trả về true / false. Nếu false thì sẽ không render lại. Mặc định là true.
#### **componentWillUpdate(nextProps, nextState)**
#### - Được gọi ngay sau shouldComponentUpdate() nếu hàm này trả về true.
#### - Không gọi setState() trong hàm này bởi hàm này là để chuẩn bị update cho đối tượng chứ không phải tạo ra 1 update mới, sẽ tạo ra lặp vô hạn.
#### - Hàm render sẽ được gọi ngay sau hàm này.
#### **ComponentDidUpdate(prevProps, prevState)**
#### - Được gọi ngay sau render() từ lần render thứ 2 trở đi.
#### - Đây cũng là 1 cơ hội để thao tác với các phần tử DOM bằng JS.
### c. Unmounting
#### **componentWillUnmount()**
#### - Được gọi khi 1 component được loại bỏ khỏi DOM.
#### - Thực hiện các thao tác dọn dẹp như huỷ các timer, loại bỏ các phần tử thừa, ..
## 3. Xử lý sự kiện
#### React là một thư viện dựa trên Javascript, về cơ bản không có nhiều khác biệt trong cách xử lý sự kiện giữa ReactJS và Javascript. Với Javascript, khi sự kiện xẩy ra một hàm sẽ được gọi để thực thi. Nhưng với React, khi sự kiện xẩy ra, sẽ có một phương thức của Component được gọi.
#### Các sự kiện React được đặt tên bằng cách sử dụng camelCase, thay vì chữ thường
#### Với JSX, sử dụng hàm thay vì chuỗi
## 4. JSX
#### JSX hay có thể hiểu là Javascript Extension là dạng cú pháp cú pháp mở rộng cho javascript để hỗ trợ việc định nghĩa cấu trúc giao diện. Việc sử dụng JSX cho phép ta không những định nghĩa các thẻ giống như HTML mà còn cho phép ta truyền vào đó những đoạn code logic cần thiết để xử lý các sự kiện trên component của mình. Đồng thời cho phép ta gán nó vào một biến sau đó kết hợp với code javascript thông thường để thực hiện việc hiển thị giao diện
