# Tìm hiểu về ReactJS
---
## 1. Các khái niệm chung
ReactJS là thư viện JavaScript sử dụng để xây dựng giao diện người dùng, là một dự án mã nguồn mở được phát triển bởi đội ngũ kĩ sư facebook.

## 2. Trọng tâm
### A. State và Props

#### 1. Props

<p>Là 1 từ viết ngắn gọn của properties, nhưng lại là 1 khái niệm trong ReactJS. props là 1 đối tượng, nó lưu trữ các giá trị của các attribute (thuộc tính) của một thẻ (Tag). Là cách mà component có thể nhận được các giá trị của thuộc tính truyền vào từ bên ngoài vào, và là cách mà các component có thể nói chuyện với nhau.</p>

    * Chúng ta sử dụng props để truyền gửi dữ liệu đến các component
    * Không nên thay đổi props

#### 2. State

<p>Cũng giống như props , state cũng lưu trữ thông tin về component, nhưng là lưu trữ dữ liệu động của một component. State là dữ liệu động , nó cho phép một component theo dõi thông tin thay đổi giữa các kết xuất (render) và làm cho nó có thể tương tác.</p>

    * State chỉ có thể được sử dụng ở trong một component sinh ra nó.
    * Nếu dự đoán được một component cần quản lý state, thì nó nên được tạo ở trong một class component chứ không phải là một function component.

### B. Vòng đời của 1 component
1. Mounting.
* constructor(): Khởi tại state.
* getDerivedStateFromProps(): hàm này được gọi trước khi render bao gồm cả lúc khởi thái. Nó trả về một đối tượng nếu cập nhật trạng thái hoặc null khi không cập nhật.
* render(): render ra view của một component. Hàm này sẽ không được gọi lại nếu hàm shouldComponentUpdate() return false.
* componentDidMount(): được gọi ngay sau khi component được mount. 
2. Updating
* getDerivedStateFromProps(): 
* shouldComponentUpdate: để React biết liệu đầu ra của component có bị ảnh hưởng bởi sự thay đổi của state hoặc pros hay không.
* render()
* getSnapshotBeforeUpdate(): cho phép component nắm bắt một số thông tin từ DOM.
* componentDidUpdate(): hàm được gọi ngay khi update xảy ra. Ở hàm này, có thể lấy được props và state trước đó để so sánh với props và state hiện tại. 
3. Unmounting
* componentWillUnmount: Hàm này được gọi trước khi component destroy. Thực hiện bất kì việc dọn dẹp trước khi component destroy: hủy đăng kí sự kiện, cancel request, cancel time,...

### C. Cách xử lý các sự kiện

#### ReactJS Events
<p>React là một thư viện dựa trên Javascript, về cơ bản không có nhiều khác biệt trong cách xử lý sự kiện giữa ReactJS và Javascript. Với Javascript, khi sự kiện xảy ra một hàm sẽ được gọi để thực thi. Nhưng với React, khi sự kiện xẩy ra, sẽ có một phương thức của Component được gọi.</p>

### D. JSX - JavaScript XML 
<p>XML được đặc trưng bằng cú pháp thẻ mở và thẻ đóng. HTML là một cú pháp mở rộng của XML. JSX hỗ trợ các cú pháp XML trong các thẻ srcipt. Cú pháp XML gần giống như HTML vậy nên rất thân thuộc với lập trình viên.</p>
<p>Kết hợp với thư viện Babel chuyển đổi, phân tích cú pháp giúp chuyển đổi ES6 trở lên hoặc JSX -> ES5 giúp chạy dự án trên nhiều trình duyệt.</p>