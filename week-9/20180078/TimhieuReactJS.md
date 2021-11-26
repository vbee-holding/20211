//Copy from react.org+Viblo...
//E xin ve su so sai cua bai tim hieu.

	Tìm hiểu REACTJS

## 1. React là gì?.
	React là 1 thư viện JavaScript xây dựng giao diện 1 cách hiệu quả và linh hoạt từ những đoạn code nhỏ và độc lập được gọi là components.
React có một vài loại components, tuy nhiên chúng ta sẽ bắt đầu với React.Component
	Chúng ta sử dụng components để nói cho React biết ta muốn hiển thị gì trên màn hình. Khi dữ liệu thay đổi, React sẽ cập nhật và render lại các component một cách hiệu quả.
	Phương thức render trả về mô tả của những gì bạn muốn nhìn thấy trên màn hình. React nhận mô tả và hiển thị ra kết quả. Cụ thể, phương thức render trả về một React element, một bản mô tả gọn nhẹ của những gì được render. Hầu hết lập trình viên React sử dụng một cú pháp đặc biệt được gọi là “JSX” để viết những cấu trúc này dễ dàng hơn. 

*Truyền dữ liệu thông qua Props!*

<img width="264" alt="Screen Shot 2021-11-26 at 22 21 18" src="https://user-images.githubusercontent.com/93435029/143602131-e0b7c603-1265-41e0-b362-05db0a48e1be.png">

*Tạo ra một component có thể tương tác được!*

<img width="463" alt="Screen Shot 2021-11-26 at 22 22 29" src="https://user-images.githubusercontent.com/93435029/143602282-e57d960d-f336-4260-92e5-01ec840fc1f9.png">


Ở bước tiếp theo, chúng ta muốn Square component “ghi nhớ” rằng nó đã được bấm, và hiện giá trị “X” trên nó. Ðể “ghi nhớ” mọi thứ, các component sử dụng state.

Các React component có thể có state bằng cách thiết lập this.state trong hàm khởi tạo của nó. this.sate nên được cân nhắc là riêng tư đối với mỗi React component mà nó được định nghĩa. Bây giờ, hãy lưu giá trị hiện tại của Square trong this.state và thay đổi nó khi Square được bấm.

Ðầu tiên, hãy thêm hàm khởi tạo để khởi tạo giá trị của state

<img width="433" alt="Screen Shot 2021-11-26 at 22 25 32" src="https://user-images.githubusercontent.com/93435029/143602641-cadc7371-161b-43f2-8e5e-185e64ca3a2b.png">

Thay đổi phương thức render của component Square để hiện thị giá trị state khi nó được bấm:
<img width="340" alt="Screen Shot 2021-11-26 at 22 26 32" src="https://user-images.githubusercontent.com/93435029/143602735-80015678-2eab-4be6-be81-28597aeeb81f.png">

Bằng việc gọi hàm this.setState từ hàm xử lý onClick trong phương thức render của Square component, chúng ta đã thông báo cho React render lại Square component khi thẻ <button> được bấm. Sau khi cập nhật, giá trị của this.state.value trong Square component sẽ là 'X' , vì vậy, ta sẽ nhìn thấy X trên bàn cờ. Khi bạn bấm vào bất kỳ một ô Square nào, giá trị X sẽ được hiển thị trên nó.

Khi bạn gọi hàm setState trong một component, React sẽ tự động cập nhật chính component đó và các component con của nó.


## 2.Hoàn thành trò chơi
	
	Hiện tại, chúng ta đã có khối cơ bản để có thể tạo nên trò tic-tac-toe. Ðể có một trò chơi hoàn chỉnh, ta cần đặt xen kẽ “X” và “O” trên bàn cờ và xác định xem ai là người chiến thắng.
Ðể thu thập dữ liệu từ nhiều component con hay để hai component con giao tiếp được với nhau, bạn cần khai báo state chung trong component cha của các component đó. Component cha có thể truyền state xuống các component con thông qua props; việc này giúp các component con đồng bộ với nhau và đồng bộ với component cha của nó.

Tách state lên component cha là khá phổ biến trong React khi các component được tái cấu trúc (refactor) — Hãy áp dụng trong trường hợp này nào.

Thêm vào Board component hàm khởi tạo constructor và khởi tạo giá trị state là một mảng 9 phần tử null tương ứng với 9 ô vuông:

<img width="258" alt="Screen Shot 2021-11-26 at 22 30 27" src="https://user-images.githubusercontent.com/93435029/143603193-98086d26-7a31-48fb-89de-9812b5ea5472.png">

	Khi chúng ta tương tác (bấm vào các Square) trên bàn cờ, mảng this.state.squares có thể giống như thế này ![image](https://user-images.githubusercontent.com/93435029/143603216-51b4df86-fb09-4a0e-9212-0190036595c3.png)

	
<img width="139" alt="Screen Shot 2021-11-26 at 22 31 09" src="https://user-images.githubusercontent.com/93435029/143603278-da3149d7-8034-488a-8899-218a4dad596b.png">

	
Ở trên, chúng ta đã truyền prop value từ Board component để hiển thị các giá trị từ 0 đến 8 ở mỗi Square component. Ở một bước khác, chúng ta đã thay thế các số này bằng giá trị “X” để xác định state của Square component. Ðây là lý do tại sao Square component hiện tại không sử dụng đến prop value được truyền từ Board component xuống.!

	
	
## 3. Tại sao tính bất biến là quan trọng

Trong phần code ví dụ trước, ta đã sử dụng hàm .slice() để tạo ra bản sao của mảng squares thay vì sửa trực tiếp nó. Giờ ta sẽ thảo luận về tính bất biến và vì sao tính bất biến lại quan trọng.

Thông thường, ta có 2 hướng tiếp cận đối với việc thay đổi dữ liệu. Hướng tiếp cận đầu tiên đó là thay đổi (mutate) trực tiếp giá trị của dữ liệu. Hướng tiếp cận thứ hai đó là thay dữ liệu hiện có bằng một bản sao của nó và sửa đổi trên bản sao đó.

	
* Sửa đổi dữ liệu trực tiếp
›<img width="268" alt="Screen Shot 2021-11-26 at 22 31 56" src="https://user-images.githubusercontent.com/93435029/143603383-8b571d85-cd29-42db-9836-62e928f92a75.png">

	
* Sửa đổi dữ liệu gián tiếp!*

<img width="407" alt="Screen Shot 2021-11-26 at 22 33 23" src="https://user-images.githubusercontent.com/93435029/143603553-09d7edb1-e756-4186-aad5-e8dfb01d72b7.png">
	
Kết quả cuối cùng mà ta thu được là như nhau, tuy nhiên với việc thay đổi dữ liệu gián tiếp, ta sẽ thu được một vài lợi ích như sau.![image](https://user-images.githubusercontent.com/93435029/143603570-60ffcbb2-3de6-4258-8d2e-d423b83ea7b4.png)
	
	
*Ðơn giản hóa các tính năng phức tạp*

Tính bất biến giúp các tính năng phức tập dễ để triển khai hơn. Ở cuối bài hướng dẫn này, chúng ta sẽ triển khai tính năng “quay về bước trước đó (time travel)” cho phép nhìn lại toàn bộ những bước đi trong khi chơi tic-tac-toe và “nhảy về” một bước bất kỳ trước đó. Tính năng này không chỉ có trong trò chơi này mà undo/redo còn là yêu cầu cơ bản và xuất hiện ở rất nhiều ứng dụng. Việc trách sửa đổi trực tiếp dữ liệu cho phép chúng ta lưu lại được giá trị trước đó của nó và có thể tái sử dụng chúng khi cần thiết.

*Phát hiện thay đổi* 

Việc phát hiện thay đổi trên mutable object là rất khó vì nó đã được sửa đổi trực tiếp. Việc phát hiện này đòi hỏi so sánh mutable object với bản copy của nó trước khi được sửa đổi trong khi ta không hề lưu trữ nó.

Việc phát hiện thay đổi trên immutable object là dễ dàng hơn khá nhiều. Nếu tham chiếu của immutable object hoàn toàn khác với chính nó trước đó thì nó này đã được thay đổi.

*Xác định khi nào component render lại trong React*

Lợi ích chính của tính bất biến là giúp chúng ta xây dựng các pure component trong React. Những dữ liệu bất biến có thể dễ dàng xác định khi nào nó thay đổi, từ đó giúp ta xác định được khi nào một component cần phải render lại.

## Chọn một khóa (key)
Khi render một danh sách, React lưu lại một vài thông tin về mỗi phần tử được render. Khi cập nhật lại danh sách, React cần xác định xem thay đổi là gì, nó có thể là thêm, xóa, sắp xếp lại hoặc sửa lại danh sách các phần tử.

Ngoài cập nhật về số lượng task, một người đọc những thay đổi trên sẽ có thể phát biểu rằng thứ tự của Alexa và Ben được đổi chỗ cho nhau và Claudia được thêm vào giữa Alexa và Ben. Tuy nhiên, React là một chương trình máy tính và nó sẽ không thể hiểu được ý của chúng ta. Vì React không thể biết ý định của chúng là gì, nên ta cần phải chỉ định một khóa (key) cho từng phần tử để phân biệt nó với các phần tử còn lại. Nếu ta hiển thị dữ liệu từ cơ sở dữ liệu thì ID của Alexa, Ben và Claudia có thể được sử dụng để làm khóa

	
<img width="385" alt="Screen Shot 2021-11-26 at 22 35 47" src="https://user-images.githubusercontent.com/93435029/143603824-559a2771-afb8-4766-a37f-44c23fcdd1f6.png">
	
Khi một danh sách được render lại, React sẽ lấy mỗi khóa của phần tử , tìm kiếm trong danh sách các phần từ trước đó. Nếu danh sách hiện tại có chứa một khóa không thuộc danh sách trước đó, React sẽ tạo thêm một component. Nếu danh sách hiện tại không chứa khóa tồn tại trong danh sách trước đó, React sẽ xóa component đó. Nếu khóa tồn tại trong cả hai danh sách, React sẽ cập nhật lại component đó. Các Khóa giúp React định danh được mỗi component và từ đó duy trì được state và props giữa các lần render. Nếu khóa của component thay đổi, component sẽ được xóa đi và tạo lại với giá trị state mới.

Chúng tôi đặc biệt khuyến khích bạn thêm props key khi xây dựng các danh sách động. Nếu bạn không có khóa phù hợp, hãy cân nhắc việc tái cấu trúc dữ liệu của bạn.


## 4. Vòng đời của một React Component!
	
	<img width="590" alt="Screen Shot 2021-11-26 at 22 36 07" src="https://user-images.githubusercontent.com/93435029/143603869-d3933502-98c2-4eb9-abd2-40411aedeb2b.png">

	
constructor(props)
	
	
* Được gọi khi một thể hiện của component được tạo ra.
* Có thể dùng để khởi tạo state cho component.
* Cũng có thể dùng để "bind" các hàm của component.
* Nếu phải cài đặt hàm này thì phải khai báo 1 tham số props cho nó và phải gọi super(props) đầu tiên.
* Nếu không làm gì thì không phải cài đặt hàm này.

**componentWillMount()**

* Được gọi trước khi render().
* Dùng để đăng ký các sự kiện toàn cục.
* Dựa vào các props để tính toán và set lại state
	

**componentDidMount()**
	
* Ngay sau khi hàm render được gọi đến lần đầu tiên chạy xong thì hàm này sẽ được chạy.
* Thường dùng để fetch dữ liệu từ server và sau đó setState để render dữ liệu ra.
* Đến đây thì các phần tử đã được sinh ra rồi, và có thể tương tác với DOM bằng JS trong hàm này.

**componentWillReceiveProps(nextProps)**
	
* Hàm này được chạy khi mà props của component đã được sinh ra có sự thay đổi.
* Phải gọi setState() nếu muốn render lại.
	
**shouldComponentUpdate(nextProps, nextState)**
	
* Được gọi trước render.
* Trả về true / false. Nếu false thì sẽ không render lại. Mặc định là true.
	
**componentWillUpdate(nextProps, nextState)**
	
* Được gọi ngay sau shouldComponentUpdate() nếu hàm này trả về true.
* Không gọi setState() trong hàm này bởi hàm này là để chuẩn bị update cho đối tượng chứ không phải tạo ra 1 update mới, sẽ tạo ra lặp vô hạn.
* Hàm render sẽ được gọi ngay sau hàm này.
	
**componentDidUpdate(prevProps, prevState)**
	
* Được gọi ngay sau render() từ lần render thứ 2 trở đi.
* Đây cũng là 1 cơ hội để thao tác với các phần tử DOM bằng JS.
	
**componentWillUnmount()**
	
* Được gọi khi 1 component được loại bỏ khỏi DOM.
* Thực hiện các thao tác dọn dẹp như huỷ các timer, loại bỏ các phần tử thừa, ...


## 5. Xử lý sự kiện (Event) trong ReactJS
	
1.Trong Javascript bạn sẽ xử lý sự kiện trong một hàm, còn trong React bạn sẽ xử lý sự kiện trong một phương thức của Component.

**onClick, onChange,..**
	
onClick phải gọi đến một hàm Javascript, nó không thể gọi trực tiếp đến một phương thức của Component. Vì vậy onClick nên gọi đến một hàm nặc danh (anonymous), và bên trong hàm nặc danh này bạn có thể gọi đến phương thức của Component:


## 6. JSX

JSX là một phần quan trọng trong ReactJS. JSX giống như một syntax extension giúp code trở lên dễ mượt và dễ đọc hơn.
	
JSX = Javascript + XML. Nó transform cú pháp dạng gần như XML về thành Javascript. Giúp người lập trình có thể code ReactJS bằng cú pháp của XML thay vì sử dụng Javascript. Các XML elements, attributes và children được chuyển đổi thành các đối số truyền vào React.createElement.

	
	
<img width="306" alt="Screen Shot 2021-11-26 at 22 43 09" src="https://user-images.githubusercontent.com/93435029/143604714-ac334ce6-973e-43a4-a323-a39c98e1f252.png">

**Sử dụng Dot notation for JSX type.** 
 
**Props in JSX**
Bạn có thể truyền vào bất kì một cú pháp JS như là một prop bằng việc đặt chúng trong cặp dấu {} trong JSX:![image](https://user-images.githubusercontent.com/93435029/143604806-54c767d9-0dc7-4a70-be50-86a8e3c203d7.png)

	
<img width="331" alt="Screen Shot 2021-11-26 at 22 44 21" src="https://user-images.githubusercontent.com/93435029/143604840-a2e8ca45-b6d5-44ac-9dae-b73db2f3fcc0.png">

	
Children in JSX 
	
<img width="306" alt="Screen Shot 2021-11-26 at 22 44 41" src="https://user-images.githubusercontent.com/93435029/143604879-8873ae5f-71cb-44b5-8224-b4a7a9514806.png">

	
	
