# Tìm hiểu về ReactJS
## I. ReactJS là gì?

ReactJS là một thư viện của javascript được sử dụng để tạo ra giao diện người dùng. Nó cho phép người dùng tạo ra các component có thể xử lý logic và hiển thị thay vì phải tạo ra thành các file riêng biết để xử lý logic và hiển thị.

## II. Các khái niệm cơ bản:
### 1. Tìm hiểu về JSX.
#### 1.1. Khái niệm về JSX 
+ JSX là phần mở rộng của các cú pháp Javascript, nó tạo ra các thành phần của React.
#### 1.2. Tại sao phải dùng JSX
+ Chúng ta có thể thực hiện các biểu thức logic ở bên trong cặp dấu ngoặc nhọn và sau đó kết quả của biểu thức logic ấy có thể được hiển thị ngay trên màn hình giống như là một thành phần trong giao diện
+ Chúng ta cũng có thể đưa kết quả của một hàm trong javascript vào trong một thành phần của HTML

#### 1.3. Cách thức làm việc với JSX
+ Sau khi biên dịch thì các biểu thức JSX sẽ trở thành các lời gọi hàm Javascript thông thường và được xem như là các đối tương Javascript, chính vì vậy nên chúng ta có thể sử dụng nó như là một biến, một biểu thức điều kiện, v.v
+ Chúng ta có thể sử dụng cặp dấu ngoặc nhọn để gán cho các giá trị thuộc tính của các thẻ trong Javascript
+ Khi thực hiện thì trình biên dịch sẽ biến đổi biểu thức JSX trở thành lời gọi hàm **React.createElement()**. Khi thực hiện lời gọi hàm trên thì biểu thức JSX sẽ trở thành một đối tượng có cấu trúc và sau đó React sẽ đọc biểu thức đó và xây dựng lên giao diện người dùng

### 2. Tìm hiểu về cách xây dựng nên một thành phần của React 
#### 2.1. Elements trong một khối ứng dụng react là gì?
+ Element là một khối nhỏ nhất trong React app, nó mô tả thứ mà chúng ta muốn nhìn thấy ở trên màn hình.
+ React element nó là các đối tượng, chính vì vậy nên nó có thể dễ dàng để tạo ra nó.
#### 2.2. Cách render một thành phần tới DOM
+ Chúng ta cần tạo ra một nút gốc để hiển thị các thành phần của React
+ Để render một React element tới DOM thì chúng ta cho nút gốc và element đó vào trong hàm: **ReactDOM.render()**
+ React element là các thành phần bất biến và chúng ta không thể thay đổi thuộc tính của nó, để update giao diện để tạo ra các thành phần mới thì chúng ta phải render nó ra bằng câu lệnh **ReactDOM.render()**
+ React DOM so sánh các trạng thái của các thành phần hiện tại với các trạng thái trước đó của nó. Nếu như các thành phần nào có sự thay đổi thì nó sẽ được render còn không thì các thành phần đó sẽ giữ nguyên
### 3. Tìm hiểu về Components và Props
#### 3.1. Components và Props là gì?
+ Component là một thành phần của React app, nó giúp cho chúng ta phân chia giao diện trở thành các phần độc lập, dễ tái sử dụng, nó tương tự như là một hàm trong Javascript. 
+ Các component chấp nhận các đầu vào bất kì, các đầu vào đó được là props, khi nhận đầu vào và thực thi thì nó sẽ trả về các react element 
#### 3.2. Cách sử dụng Component và props
+ Chúng ta có thể định nghĩa một component đơn giản tương tự như một hàm Javascript. Hàm này nó sẽ nhận đầu vào là một đối tượng props và chúng ta có thể truy cập các thuộc tính ở bên trong props
+ Chúng ta có thể sử dụng ES6 class để định nghĩa ra một component
+ Chúng ta có thể sử dụng element để biểu diễn các component mà người dùng tự định nghĩa
+ Khi React nhận thấy component do người dùng định nghĩa thì chúng sẽ thêm các thuộc tính JSX tới component như là một tham số cho hàm Javascript.
+ Một component có thể tham chiếu tới các component khác ở đầu ra của chúng. 
+ Thông thường thì một React app sẽ có một **App** component là một component đứng đầu trong cây phân cấp của React app
+ Chúng ta có thể phân tách các component thành một tập hợp của các component, điều này giúp cho code của chúng ta dễ dàng tái sử dụng và dễ bảo trì
+ Các props là chỉ đọc, chúng ta không thể thay đổi props
### 4. Tìm hiểu về State và Lifecycle
#### 4.1. State là gì?
- State là một khái niệm tương tự với props, tuy nhiên state thì nó là một tài sản riêng và nó được kiểm soát hoàn toàn bởi component và chúng có thể thay đổi được trong toàn bộ vòng đời của chúng
- Lifecycle và vòng đời sử dụng của một component.
- Lifecycle bao gồm 4 trạng thái chính:
  + Initialization:  Thời điểm khởi tạo một component, nó nằm trong hàm constructor component. Tại đây, component có thể nhận các props truyền vào và thiết lập các giá trị cho State.
  + Mouting: Ngay sau khi component được khởi tạo, hàm **componentWillMount()** được chạy và tại đây chúng ta có thể thực hiện những thao tác trước khi component được render(). Khi đã render được DOM rồi, chúng ta có thể thực hiện các thao tác update, kết nối với DB,... trong hàm **componentDidMount()**.
  + Updation:
    - states: Hàm **shouldComponentUpdate()** kiểm tra xem states có được chúng ta thay đổi hay không, nếu có thay đổi nó sẽ chạy tiếp đến hàm **componentWillUpdate()**. Hàm **componentWillUpdate()** được chạy ngay trước khi render và sau khi render xong rồi sẽ tiếp tục chạy đến hàm **componentDidUpdate()**. 
    -  props: Tương tự cách hoạt động với states, khi nhận được sự thay đổi props truyền vào từ component cha, hàm **componentWillReceiveProps()** được thực hiện. Tại đây, component con được cập nhật lại giá trị cho từng props. Sau đó, trình tự thực hiện các hàm cho việc update props được thực hiện hoàn toàn tương tự với update states.
  + Unmouting:  Chúng ta chỉ có thể xóa một component mà không có ràng buộc với một component cha nào khác, tức là nó phải là component lớn nhất bao bọc các component con.  Dùng hàm ReactDOM.unmountComponentAtNode để unmount một component và nó sẽ biến mất trên giao diện trang web.

### 5. Handling events
#### 5.1. Event
- Về cơ bản thì event trong react cũng tương tự với event trong DOM. Tuy nhiên có một số khác biệt như:
   + Tên của các sự kiện trong React sử dụng kiểu camelCase, trong khi DOM sử dụng lowercase.
   + Với JSX thì bạn sẽ truyền vào một function để xử lý các sự kiện đó
#### 5.2. Handling events trong ReactJS
- Chúng ta sử dụng các event listener để lắng nghe các lời gọi hàm sẽ thực thi khi có một sự kiện xảy ra
- Chúng ta sử dụng **e.preventDefault()** để tránh việc bị restart lại khi thực thi một sự kiện
- e đại diện cho toàn bộ các sự kiện 
- Khi một callback được truyền như một props từ hàm cha thì nó sẽ được render lại nhiều lần

### 6. Conditional rendering
- Chúng ta có thể sử dụng lệnh **if else** để thực hiện render ra các element trong reactJS
- Chúng ta có thể sử dụng ternary operation để làm ngắn gọn code:
  + Syntax: **condition ? trueExpression : falseExpression**
- Sử dụng logical && operator
  + Được sử dụng khi chúng ta muốn render ra một component hoặc trả về một giá trị null
  + Syntax: **expression01 && expression02**
- Chúng ta có thể sử dụng Switch case để kiểm tra điều kiện của nhiều trường hợp khác nhau thay vì sử dụng nhiều câu lệnh if else 





