# **Tuần 8: Tìm hiểu về REACTJS**

## **JSX**

Cú pháp thẻ dưới đây không phải là một xâu (*string*) hay một thẻ HTML

        const element = <h1>Hello, world!</h1>;

- Nó được gọi là JSX, là một phần mở rộng cú pháp cho JavaScript. JSX được khuyên nên sử dụng với React để mô tả giao diện người dùng. JSX có thể nhắc bạn về một **template language**, nhưng nó đi kèm với toàn bộ sức mạnh của **JavaScript**.

- JSX sẽ tạo tạo các **React elements**, dùng để render trong DOM.

### *1. Why JSX?*

- React chấp nhận một thực tế là logic hiển thị (**rendering logic**) vốn đã đi đôi với logic giao diện người dùng (**UI logic**) khác: cách xử lý các sự kiện (**events handled**), trạng thái thay đổi như thế nào theo thời gian và cách dữ liệu được chuẩn bị để hiển thị

- Thay vì phân tách các công nghệ một cách giả tạo bằng cách đặt đánh dấu và logic vào các tệp riêng biệt, React phân tách các mối quan tâm bằng các đơn vị được kết hợp lỏng lẻo được gọi là “**component**” chứa cả hai.

- Việc sử dụng JSX trong React là không bắt buộc, nhưng hầu hết mọi người đều thấy nó hữu ích như một công cụ hỗ trợ trực quan khi làm việc với giao diện người dùng trong mã JavaScript. Nó cũng cho phép React hiển thị các thông báo lỗi và cảnh báo hữu ích hơn.

### *2. Embedding Expressions in JSX*

Trong ví dụ dưới đây, biến *name* được khai báo và sau đó được sử dụng bên trong JSX bằng cách đặt trong dấu ngoặc nhọn

        const name = 'Josh Perez';
        const element = <h1>Hello, {name}</h1>;

        ReactDOM.render(
        element,
        document.getElementById('root')
        );

Ví dụ dưới cho phép nhúng kết quả 1 hàm trong JavaScript

        function formatName(user) {
            return user.firstName + ' ' + user.lastName;
        }

        const user = {
            firstName: 'Harper',
            lastName: 'Perez'   
        };

        const element = (
            <h1>
                Hello, {formatName(user)}!
            </h1>
        );

        ReactDOM.render(
            element,
            document.getElementById('root')
        );

------------

## **Rendering Elements**

Không giống như các phần tử DOM của trình duyệt, các phần tử React là các đối tượng đơn giản. React DOM đảm nhận việc cập nhật DOM để phù hợp với các phần tử React.

### *1. Rendering an Element into the DOM*

Giả sử có 1 thẻ HTML như dưới

    <div id="root"></div>

Ta gọi đây là nút DOM “gốc” vì mọi thứ bên trong nó sẽ được quản lý bởi React DOM.

Các ứng dụng được xây dựng chỉ với React thường có một nút DOM gốc duy nhất. Còn nếu tích hợp React vào một ứng dụng hiện có, ta có thể có nhiều nút DOM gốc riêng biệt tùy thích


Để hiển thị một phần tử React vào một nút DOM gốc, ta chuyển cả hai vào ReactDOM.render ()

    const element = <h1>Hello, world</h1>;
    ReactDOM.render(element, document.getElementById('root'));


### *2. Updating the Rendered Element*

Các phần tử React là bất biến(**immutable**). Sau khi tạo một phần tử, bạn không thể thay đổi phần tử con hoặc thuộc tính của phần tử đó. Một phần tử giống như một khung hình duy nhất trong phim: nó đại diện cho giao diện người dùng tại một thời điểm nhất định.


Vì vậy, cách duy nhất để cập nhật giao diện người dùng là tạo một phần tử mới và chuyển nó đến ReactDOM.render ().

> Ví dụ: **ReactDOM.render()** được gọi mỗi giây từ hàm **setInterval()** callback 

    function tick() {
        const element = (
            <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
        ReactDOM.render(element, document.getElementById('root'));
    }
    setInterval(tick, 1000);

### *3. React Only Updates What’s Necessary*

React DOM so sánh phần tử và phần tử con của nó với phần tử trước đó và chỉ áp dụng các bản cập nhật DOM cần thiết để đưa DOM về trạng thái mong muốn.

---------- 


## **Component and props**

1. ### *Định nghĩa*

- Components cho phép chia UI thành các phần độc lập, có thể tái sử dụng và có thể sử dụng chúng 1 cách độc lập. Trong bài viết này mình sẽ giới thiệu về components trong ReactJS.

- Components cũng giống như function JavaScript. Nó cho phép nhập vào các đầu vào tùy ý (props) và trả về những phần tử React mô tả những gì sẽ xuất hiện trên màn hình

  > Ví dụ 1 component (function component)

        function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
        }

  > Cũng có thể sử dung ES6 để định nghĩa 1 component (class component), phải kế thừa từ **React.Component**

        class Welcome extends React.Component {
                render() {
                return <h1>Hello, {this.props.name}</h1>;
            }
        }

2. ### *Rendering a Component*

Trước đây, chúng ta chỉ gặp các phần tử React đại diện cho các thẻ DOM. Ví dụ như:

    const element = <div />;

Tuy nhiên, các phần tử cũng có thể đại diện cho các component do người dùng tự định nghĩa

    const element = <Welcome name="Sara" />;

Khi React nhìn thấy một phần tử đại diện cho một component do người dùng định nghĩa, nó sẽ chuyển các thuộc tính JSX và các phần tử con cho component này như một đối tượng duy nhất. Những đối tượng này gọi là “**props**”.

> Ví dụ

    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }

    const element = <Welcome name="Sara" />;
    ReactDOM.render(
        element,
        document.getElementById('root')
    );


3. ### *Composing Components*

Các component đều có thể tham chiếu đến các component khác trong đầu ra của chúng. Việc này cho phép ta sử dụng cùng 1 abstract component cho bất kì mức độ chi tiết nào.

Button, form, dialog, screen: trong ứng dụng React, tất cả những thứ đó thường được biểu thị dưới dạng các component.

> Ví dụ: chúng ta tạo ra App component để render Welcome nhiều lần

    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }

    function App() {
        return (
            <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
            </div>
        );
    }

    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );

4. ### *Extracting Components*

Có thể chia 1 component ra làm nhiều component con

> Ví dụ: Comment component

    function Comment(props) {
    return (
            <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                src={props.author.avatarUrl}
                alt={props.author.name}
                />
                <div className="UserInfo-name">
                {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
            </div>
        );
    }

**Extracting components** thoạt đầu có vẻ giống như một công việc khó khăn, nhưng việc có một bảng các thành phần có thể tái sử dụng sẽ mang lại hiệu quả trong các ứng dụng lớn hơn. Một nguyên tắc chung là nếu một phần của giao diện người dùng của bạn được sử dụng nhiều lần **(Button, Panel, Avatar)** hoặc tự nó đủ phức tạp **(App, FeedStory, Comment)**, thì nó là một ứng cử viên tốt để được trích xuất vào một thành phần riêng biệt.

5. ### *Props are Read-Only*

Cho dù bạn khai báo một thành phần là một hàm hay một lớp, nó không bao giờ được sửa đổi **props** của chính nó. 
> Hãy xem xét hàm Tổng

    function sum(a, b) {
        return a + b;
    }

Các hàm như vậy được gọi là “pure” bởi vì chúng không cố gắng thay đổi các đầu vào của mình và luôn trả về cùng một kết quả cho các đầu vào giống nhau.

> Ngược lại, hàm này **impure** vì nó thay đổi đầu vào của chính nó:

    function withdraw(account, amount) {
        account.total -= amount;
    }

React khá linh hoạt nhưng nó có một quy tắc nghiêm ngặt duy nhất

> **Tất cả các thành phần React phải hoạt động giống như các hàm pure đối với các props của chúng.**

---------

## **State and Lifecycle**

Hãy xem xét ví dụ về đồng hồ tích tắc từ một trong các phần trước. Trong **Rendering Elements**, chúng ta chỉ học được một cách để cập nhật giao diện người dùng. Ta gọi **ReactDOM.render()** để thay đổi đầu ra được hiển thị:

    function tick() {
        const element = (
            <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
        ReactDOM.render(
            element,
            document.getElementById('root')
        );
    }

    setInterval(tick, 1000);

Trong phần này, chúng ta sẽ tìm hiểu cách làm cho thành phần của Clock thực sự có thể tái sử dụng và đóng gói. Nó sẽ tự thiết lập bộ đếm thời gian và tự cập nhật mỗi giây.

Chúng ta có thể bắt đầu bằng cách **encapsulate** giao diện của đồng hồ:

    function Clock(props) {
        return (
            <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

    function tick() {
        ReactDOM.render(
            <Clock date={new Date()} />,
            document.getElementById('root')
        );
    }

    setInterval(tick, 1000);

Tuy nhiên, nó bỏ lỡ một yêu cầu quan trọng: việc Đồng hồ thiết lập bộ đếm thời gian và cập nhật giao diện người dùng mỗi giây phải là một chi tiết triển khai của Đồng hồ.

Lý tưởng nhất là chúng tôi muốn viết điều này một lần và tự cập nhật Đồng hồ:

    ReactDOM.render(
        <Clock />,
        document.getElementById('root')
    );

Để thực hiện điều này, chúng ta cần thêm “**State**” vào thành phần Đồng hồ.
**State** tương tự như **props**, nhưng nó là *private* và được kiểm soát hoàn toàn bởi thành phần (component).

-------------

1. ### *Adding Local State to a Class*

Ta sẽ chuyển *date* từ **props** sang **state** qua 3 bước

- Thay thế this.props.date bằng this.state.date trong phương thức render ():

        class Clock extends React.Component {
        render() {
            return (
                <div>
                    <h1>Hello, world!</h1>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                </div>
            );
            }
        }

- Thêm một phương thức khởi tạo (constructor) lớp chỉ định ban đầu this.state:

        class Clock extends React.Component {
            constructor(props) {
                super(props);
                this.state = {date: new Date()};
            }

            render() {
                return (
                    <div>
                        <h1>Hello, world!</h1>
                        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                    </div>
                );
            }
        }

*Lưu ý cách truyền **props** cho **base constructor**:*

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

> Các Class component luôn phải gọi base constructor với props

- Xoá date khỏi <Clock /> 

        ReactDOM.render(
            <Clock />,
            document.getElementById('root')
        );


2. ### *Vòng đời* (life cycle)

Mỗi component đều có một số **lifecycle methods** mà bạn có thể ghi đè **(override)** để thực thi tại những thời điểm cụ thể.

- Mounting: Các phương thức dưới đây được gọi theo thứ tự sau khi một phiên bản của một component đang được tạo và chèn vào DOM

    - **constructor()**
    - static getDerivedStateFromProps()
    - **render()**
    - **componentDidMount()**

- Updating: Cập nhật có thể tạo ra thay đổi đối với *props* hoặc *state*. Các phương thức dưới đây sẽ được gọi theo thứ tự khi một *component* được *render* lại

    - static getDerivedStateFromProps()
    - shouldComponentUpdate()
    - **render()**
    - getSnapshotBeforeUpdate()
    - **componentDidUpdate()**

- Unmounting: Phương thức dưới đây được gọi khi 1 component bị xoá khỏi DOM

    - **componentWillUnmount()**

- Error Handling: Các phương thức dưới đây được gọi khi có lỗi trong quá trình render, trong *lifecycle method* hoặc trong phương thức khởi tạo của bất kỳ *child component* nào

    - static getDerivedStateFromError()
    - componentDidCatch()
    ------------

3. ### *Using State Correctly*

3 điều cần nhớ về **setState()**

- **Do Not Modify State Directly**

> Ví dụ: việc này sẽ không hiển thị lại 1 component

    // Wrong
    this.state.comment = 'Hello';

> Thay vào đó, hãy dùng **setState**

    // Correct
    this.setState({comment: 'Hello'});
        
- **State Updates May Be Asynchronous**

    - React có thể gộp nhiều lệnh gọi setState () vào một bản cập nhật duy nhất để tăng hiệu suất.

    - Vì this.props và this.state có thể được cập nhật không đồng bộ, bạn không nên dựa vào giá trị của chúng để tính toán trạng thái tiếp theo.

    > Ví dụ này là sai

        // Wrong
        this.setState({
            counter: this.state.counter + this.props.increment,
        });

    > Để khắc phục, hãy sử dụng dạng setState() thứ hai chấp nhận một hàm chứ không phải một đối tượng. Hàm đó sẽ nhận trạng thái trước đó làm đối số đầu tiên và các đạo cụ tại thời điểm cập nhật được áp dụng làm đối số thứ hai:

        // Correct
        this.setState((state, props) => ({
            counter: state.counter + props.increment
        }));

- **State Updates are Merged**

    - Khi bạn gọi setState (), React sẽ hợp nhất đối tượng bạn cung cấp vào trạng thái hiện tại.

    > Ví dụ: trạng thái của bạn có thể chứa một số biến độc lập:

        constructor(props) {
            super(props);
            this.state = {
                posts: [],
                comments: []
            };
        }
    
    > Sau đó, bạn có thể cập nhật chúng một cách độc lập với các lệnh gọi setState () riêng biệt:

        componentDidMount() {
            fetchPosts().then(response => {
                this.setState({
                    posts: response.posts
                }); 
            });

            fetchComments().then(response => {
                this.setState({
                    comments: response.comments
                });
            });
        }

---------

## **Handling Events**

*Việc xử lý các sự kiện với các phần tử React rất giống với việc xử lý các sự kiện trên các phần tử DOM. Có một số khác biệt về cú pháp:*

- Các sự kiện React được đặt tên bằng cách sử dụng camelCase, thay vì chữ thường.
- Với JSX, bạn chuyển một hàm làm trình xử lý sự kiện, thay vì một chuỗi.

> Ví dụ: ở HTML

    <button onclick="activateLasers()">
        Activate Lasers
    </button>

> khác biệt đôi chút ở React

    <button onClick={activateLasers}>
        Activate Lasers
    </button>

Một điểm khác biệt nữa là bạn không thể trả về false để ngăn hành vi mặc định trong React. Bạn phải gọi PreventDefault một cách rõ ràng. 

> Ví dụ: với HTML thuần túy, để ngăn hành vi gửi biểu mẫu mặc định, bạn có thể viết:

    <form onsubmit="console.log('You clicked submit.');  return false">
        <button type="submit">Submit</button>
    </form>

> Với React

    function Form() {
        function handleSubmit(e) {
            e.preventDefault();
            console.log('You clicked submit.');
        }

        return (
            <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
            </form>
        );
    }

Ở đây, *e* là một sự kiện tổng hợp. React xác định các sự kiện tổng hợp này theo thông số W3C, vì vậy bạn không cần phải lo lắng về khả năng tương thích giữa các trình duyệt. Các sự kiện React không hoạt động hoàn toàn giống như các sự kiện gốc.

Khi sử dụng React, bạn thường không cần gọi **addEventListener** để thêm trình nghe vào phần tử DOM sau khi nó được tạo. Thay vào đó, chỉ cung cấp trình lắng nghe khi phần tử được hiển thị ban đầu.

Khi bạn xác định một thành phần bằng cách sử dụng lớp ES6, một mẫu phổ biến dành cho trình xử lý sự kiện là một phương thức trên lớp. 

> Ví dụ: *Toggle component* này hiển thị một nút cho phép người dùng chuyển đổi giữa trạng thái “BẬT” và “TẮT”:

    class Toggle extends React.Component {
        constructor(props) {
            super(props);
            this.state = {isToggleOn: true};

            // This binding is necessary to make `this` work in the callback
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
            }));
        }

        render() {
            return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            );
        }
    }

    ReactDOM.render(
        <Toggle />,
        document.getElementById('root')
    );

### **Passing Arguments to Event Handlers**

Bên trong một vòng lặp, thông thường muốn truyền một tham số bổ sung cho một trình xử lý sự kiện. 
> Ví dụ: nếu id là ID hàng, thì một trong hai cách sau sẽ hoạt động:

    <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
    <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

Hai dòng trên là tương đương và sử dụng các *arrow function* và Function.prototype.bind tương ứng.

Trong cả hai trường hợp, đối số *e* đại diện cho sự kiện React sẽ được chuyển làm đối số thứ hai sau ID. Với một hàm *arrow function*, chúng ta phải truyền nó một cách rõ ràng, nhưng với ràng buộc, bất kỳ đối số nào khác sẽ được tự động chuyển tiếp.
