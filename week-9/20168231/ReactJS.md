# Tìm hiểu về ReactJS
## I. ReactJS là gì?

- ReactJS là một thư viện của javascript được sử dụng để tạo ra giao diện người dùng. Nó cho phép người dùng tạo ra các component có thể xử lý logic và hiển thị thay vì phải tạo ra thành các file riêng biết để xử lý logic và hiển thị.
## 2. Trọng tâm
### A. State và Props

#### 1. Props
- Là 1 từ viết ngắn gọn của properties, nhưng lại là 1 khái niệm trong ReactJS. props là 1 đối tượng, nó lưu trữ các giá trị của các attribute (thuộc tính) của một thẻ (Tag). Là cách mà component có thể nhận được các giá trị của thuộc tính truyền vào từ bên ngoài vào, và là cách mà các component có thể nói chuyện với nhau
- Props: Các components React phải hoạt động giống như các hàm thuần túy đối với các thuộc tính của chúng.
- Chúng ta không nên thay đổi props
#### 2. State
- State là một khái niệm tương tự với props, tuy nhiên state thì nó là một tài sản riêng và nó được kiểm soát hoàn toàn bởi component và chúng có thể thay đổi được trong toàn bộ vòng đời của chúng
- State chỉ có thể được sử dụng ở trong một component sinh ra nó.
- Không sửa đổi state trực tiếp
### B. Vòng đời của 1 component
- Lifecycle bao gồm 4 trạng thái chính: Initialization, Mouting, Updation, Unmouting
+ Mounted:

 constructor(props): phương thức khởi tạo của một Component thông thường phương thức này luôn nhận vào một props hoặc các tham số khác.

 componentWillMount(): phương thức này xảy ra một lần sau constructor và ở phương thức này sẽ không render giao diện cho Component.

 render(): hoạt động sau componentWillMount, phương thức này dùng để render các phần tử của React tạo ra giao diện cho người dùng. Tất cả những gì trong phương thức này đều hiển thị màn hình.

 componentDidMount(): phương thức này chỉ được gọi một lần sau khi render xảy ra, lúc này các phần tử đã đươc hiển thị trên màn hình và có thể được truy cập bằng this.refs. Thông thường để viết các đoạn code liên quan tới delay hoặc đồng bộ API
+ UnMounted:
componentWillReceiveProps(object nextProps): Cha của component này sẽ được truyền vào một props mới và phương thức này sẽ khởi tạo lại giao diện. Chúng ta có thể cập nhật lại state nội bộ thông qua phương thức this.setState() trước khi phương thức render được gọi.

shouldComponentUpdate(object nextProps, object nextState): Phương thức này nhằm đảm bảo component sẽ được render nếu như trả về true.

componentDidUpdate(object prevProps, object prevState): Phương thức này chỉ được thực hiện khi render() xảy ra. Lúc này giao diện đã được cập nhật.
+ Initialization:  Thời điểm khởi tạo một component, nó nằm trong hàm constructor component. Tại đây, component có thể nhận các props truyền vào và thiết lập các giá trị cho State.
+  Updatation:
 componentWillUnmount(): Phương thức này chỉ xảy ra khi ứng dụng bị đóng hoàn toàn
### C. Cách xử lý các sự kiện

#### ReactJS Events
React là một thư viện dựa trên Javascript, về cơ bản không có nhiều khác biệt trong cách xử lý sự kiện giữa ReactJS và Javascript. Với Javascript, khi sự kiện xảy ra một hàm sẽ được gọi để thực thi. Nhưng với React, khi sự kiện xẩy ra, sẽ có một phương thức của Component được gọi
+  Các sự kiện React được đặt tên bằng cách sử dụng camelCase, thay vì chữ thường
### D. JSX 
- JSX là phần mở rộng của các cú pháp Javascript, nó tạo ra các thành phần của React.
- Các ưu điểm mà JSX mang lại:
+ Nhanh hơn nhờ việc thực hiện tối ưu hóa trong khi biên dịch mã thành Javascript.
+ An toàn hơn
+ Viết teamplate nhanh chóng và dễ dàng
- Sử dụng JSX:
+ Sau khi biên dịch thì các biểu thức JSX sẽ trở thành các lời gọi hàm Javascript thông thường và được xem như là các đối tương Javascript, chính vì vậy nên chúng ta có thể sử dụng nó như là một biến, một biểu thức điều kiện
+ Chúng ta có thể sử dụng cặp dấu ngoặc nhọn để gán cho các giá trị thuộc tính của các thẻ trong Javascript












