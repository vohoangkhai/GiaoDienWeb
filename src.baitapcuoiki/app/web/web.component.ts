import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
  laptrinh:any;
  pageTitle='';
  pid;
  /*phân trang */
  currentPage=1;
    itemsPerPage=1;
    totalPage:number;
  //   OrderName="Name";
  /*menu */
  /*phân trang menu */
current=1;
itemsPer=10;
totalPage1:number;
/*tới */
next1(){
    this.totalPage1=Math.ceil(this.Subjects.length/this.itemsPer);
    if(this.current < this.totalPage1)
      this.current++
  }
  /*luôi */
  Previous1(){
    if( this.totalPage1*this.current)
      this.current--
  }
  Subjects=[
    {
        "Id": "ADAV",
        "Name": "Lập trình Android nâng cao",
        "Logo": "ADAV.jpg"
    },
    {
        "Id": "WEBU",
        "Name": "Xây dựng trang web",
        "Logo": "WEBU.jpg"
    },
    {
        "Id": "DBBS",
        "Name": "Cơ sở dữ liệu",
        "Logo": "DBBS.png"
    },
    {
        "Id": "DBAV",
        "Name": "SQL Server",
        "Logo": "DBAV.png"
    },
   
    {
        "Id": "ADBS",
        "Name": "Lập trình Android cơ bản",
        "Logo": "ADBS.jpg"
    },
    {
        "Id": "CLCO",
        "Name": "Điện toán đám mây",
        "Logo": "CLCO.jpg"
    },
    
  
    {
        "Id": "ASNE",
        "Name": "Lập trình ASP.NET",
        "Logo": "ASNE.png"
    },
   
    
    {
        "Id": "GAME",
        "Name": "Lập trình game 2D",
        "Logo": "GAME.png"
    },
    {
        "Id": "HTCS",
        "Name": "HTML5 và CSS3",
        "Logo": "HTCS.jpg"
    },
    {
        "Id": "INMA",
        "Name": "Internet Marketing",
        "Logo": "INMA.jpg"
    },
    
    {
        "Id": "JABS",
        "Name": "Lập trình hướng đối tượng với Java",
        "Logo": "JABS.png"
    },
    {
        "Id": "JSPR",
        "Name": "Lập trình JavaScript",
        "Logo": "JSPR.png"
    },
    {
        "Id": "ADUI",
        "Name": "Thiết kế giao diện trên Android",
        "Logo": "ADUI.jpg"
    },
    {
        "Id": "LAYO",
        "Name": "Thiết kế layout",
        "Logo": "LAYO.jpg"
    },
    {
        "Id": "MOWE",
        "Name": "Thiết kế web cho điện thoại di động",
        "Logo": "MOWE.png"
    },
    {
        "Id": "PHPP",
        "Name": "Lập trình PHP",
        "Logo": "PHPP.png"
    },
    {
        "Id": "PMAG",
        "Name": "Quản lý dự án với Agile",
        "Logo": "PMAG.jpg"
    },
    {
        "Id": "VBPR",
        "Name": "Lập trình VB.NET",
        "Logo": "VBPR.png"
    },
    {
        "Id": "ADTE",
        "Name": "Kiểm thử và ứng dụng Android",
        "Logo": "ADTE.jpg"
    },
    {
        "Id": "JAAV",
        "Name": "Lập trình Java nâng cao",
        "Logo": "JAAV.png"
    },
]

WEBU=[
  
      { "Id": 25581, "Text": "Để xem và thay đổi định dạng hiện tại của một đối tượng (text/image), bạn nên sử dụng", "Marks": 1, "AnswerId": 105944, 
      "Answers": [{ "Id": 105942, "Text": "Property Inspector" },
       { "Id": 105943, "Text": "Insert bar" }, 
       { "Id": 105944, "Text": "Tag Inspector" },
        { "Id": 105945, "Text": "File panel" }] },
         { "Id": 25582, "Text": "Chức năng nào sau đây không phải là một trong những chức năng chính của các công cụ hỗ trợ thiết kế web", 
         "Marks": 1, "AnswerId": 105946, 
         "Answers": [{ "Id": 105946, "Text": "Hỗ trợ chỉnh sửa ảnh" }, { "Id": 105947, "Text": "Hỗ trợ quản lý site và FTP" },
         { "Id": 25580, "Text": "Trong Dreamweaver CS4 muốn  liên kết bên ngoài website, người dùng sử dụng loại liên kết      nào?",
         "Marks": 1, 
         "AnswerId": 105940,
          "Answers": [{ "Id": 105939, "Text": "Liên kết tương đối" },
                    { "Id": 105940, "Text": "Liên kết tuyệt đối" },
                    { "Id": 105941, "Text": "Liên kết tới Email" }]
        },
         { "Id": 105948, "Text": "Cung cấp môi trường soạn thảo và code" }, { "Id": 105949, "Text": "Cung cấp tính năng thiết kế giao diện và định dạng trang web" }] }, { "Id": 25583, "Text": "Chương trình hoạt động bằng cách dịch mã HTML thành trang Web là", "Marks": 1, "AnswerId": 105950, "Answers": [{ "Id": 105950, "Text": "Trình duyệt" }, { "Id": 105951, "Text": "Hệ điều hành" }, { "Id": 105952, "Text": "Protocol" }, { "Id": 105953, "Text": "Phần mềm tiện ích" }] }, { "Id": 25584, "Text": "Để thêm các ký tự đặc biệt vào trang web, trên menu/thanh Insert, bạn cần chọn mục nào", "Marks": 1, "AnswerId": 105955, "Answers": [{ "Id": 105954, "Text": "Conment" }, { "Id": 105955, "Text": "HTML/Special characters" }, { "Id": 105956, "Text": "HTML/Text Object" }, { "Id": 105957, "Text": "Image" }] }, { "Id": 25585, "Text": "Bước nào sau đây không phải là một bước chính trong quá trình thiết kế web", "Marks": 1, "AnswerId": 105958, "Answers": [{ "Id": 105958, "Text": "Thiết kế" }, { "Id": 105959, "Text": "Tìm template" }, { "Id": 105960, "Text": "Bảo trì" }, { "Id": 105961, "Text": "Kiểm thử" }] }, { "Id": 25586, "Text": "WYSIWYG là viết tắt của", "Marks": 1, "AnswerId": 105965, "Answers": [{ "Id": 105962, "Text": "Không gì cả" }, { "Id": 105963, "Text": "Tên của một chương trình" }, { "Id": 105964, "Text": "ways you see into Web yellow green" }, { "Id": 105965, "Text": "what you see is what you get" }] }, { "Id": 25587, "Text": "Mã mầu trong các trang HTML gồm 6 kí tự và đứng trước là dấu thăng (#) sử dụng hệ cơ số nào?", "Marks": 1, "AnswerId": 105967, "Answers": [{ "Id": 105966, "Text": "Hệ nhị phân" }, { "Id": 105967, "Text": "Hệ thập lục phân (Hecxa)" }, { "Id": 105968, "Text": "Hệ thập phân" }, { "Id": 105969, "Text": "Hệ BCD nén" }] }, { "Id": 25588, "Text": "Giao thức nào là giao thức truyền tải siêu văn bản được dùng giữa Web client và Web server", "Marks": 1, "AnswerId": 105972, "Answers": [{ "Id": 105970, "Text": "TCP/IP" }, { "Id": 105971, "Text": "WWW" }, { "Id": 105972, "Text": "HTTP" }, { "Id": 105973, "Text": "FTP" }] }, { "Id": 25589, "Text": "Thông thường tiêu chuẩn Internet cho việc đặt tên trang chủ, hay trang đầu tiên mà người dùng truy  cập vào website sẽ là", "Marks": 1, "AnswerId": 105975, "Answers": [{ "Id": 105974, "Text": "Bất kì tên nào" }, { "Id": 105975, "Text": "index.html" }, { "Id": 105976, "Text": "home.html" }, { "Id": 105977, "Text": "default.html" }] }, { "Id": 25590, "Text": "Cách đặt Css nào mà chỉ áp dụng được cho một thẻ một lần và không thể tái sử dụng  lại", "Marks": 1, "AnswerId": 105980, "Answers": [{ "Id": 105978, "Text": "internal style (style nội bộ trong file HTML)" }, { "Id": 105979, "Text": "external style (style lưu ở một file riêng)" }, { "Id": 105980, "Text": "inline style (Style nội tuyến trong thẻ HTML)" }] }, { "Id": 25591, "Text": "Để mở cửa sổ Code Navigator người dung sử dụng phím tắt nào", "Marks": 1, "AnswerId": 105982, "Answers": [{ "Id": 105981, "Text": "Ctrl+Click" }, { "Id": 105982, "Text": "Alt + Click" }, { "Id": 105983, "Text": "Shift + Click" }, { "Id": 105984, "Text": "Alt+Shift + Click" }] }, { "Id": 25592, "Text": "Vì HTML không hỗ trợ các thẻ để định dạng về mặt hình thức cho trang web nên người ta mới phải sử dụng CSS ?", "Marks": 1, "AnswerId": 105986, "Answers": [{ "Id": 105985, "Text": "Đúng" }, { "Id": 105986, "Text": "Sai" }] }, { "Id": 25593, "Text": "HTM L bao gồm mấy nhóm thẻ:", "Marks": 1, "AnswerId": 105988, "Answers": [{ "Id": 105987, "Text": "5" }, { "Id": 105988, "Text": "4" }, { "Id": 105989, "Text": "6" }, { "Id": 105990, "Text": "3" }] }, { "Id": 25594, "Text": "CSS có thể đặt ở vị trí nào để kết hợp với HTML tạo định dạng cho nội dung  trên trang web", "Marks": 1, "AnswerId": 105992, "Answers": [{ "Id": 105991, "Text": "Ngay trong mục \u003chead\u003e của trang HTML" }, { "Id": 105992, "Text": "Cả 3 cách trên" }, { "Id": 105993, "Text": "Đặt trong 1 file riêng" }, { "Id": 105994, "Text": "Ngay trong các thẻ của HTML" }] }, { "Id": 25595, "Text": "Để khi liên kết, mở ra cho người dung một Tab/ Cửa sổ làm việc mới thì trong thẻ \u003ca\u003e thuộc tính target người dung lựa chọn giá trị:", "Marks": 1, "AnswerId": 105997, "Answers": [{ "Id": 105995, "Text": "_self" }, { "Id": 105996, "Text": "_top" }, { "Id": 105997, "Text": "_blank" }, { "Id": 105998, "Text": "_parent" }] }, { "Id": 25596, "Text": "Thẻ HTML cho tiêu đề lớn nhất là:", "Marks": 1, "AnswerId": 106002, "Answers": [{ "Id": 105999, "Text": "heading" }, { "Id": 106000, "Text": "h4" }, { "Id": 106001, "Text": "h6" }, { "Id": 106002, "Text": "h1" }] }, { "Id": 25597, "Text": "Thẻ \u003cfont\u003e và Css đều có khả năng áp dụng style nhất quán lên các thành phần trên một hoặc toàn bộ các trang web của một website", "Marks": 1, "AnswerId": 106003, "Answers": [{ "Id": 106003, "Text": "Sai" }, { "Id": 106004, "Text": "Đúng" }] }, { "Id": 25598, "Text": "Khi muốn tạo CSS được dùng chung cho nhiều trang web trong website thì nên đặt CSS đó ở", "Marks": 1, "AnswerId": 106007, "Answers": [{ "Id": 106005, "Text": "Trong trang chủ" }, { "Id": 106006, "Text": "Trong phần của mỗi trang web" }, { "Id": 106007, "Text": "Một file riêng" }, { "Id": 106008, "Text": "Đi kèm với từng thẻ" }] }, { "Id": 25599, "Text": "Thẻ nào được sử dụng để liên kết tệp css được định nghĩa từ file rời vào trang web", "Marks": 1, "AnswerId": 106012, "Answers": [{ "Id": 106009, "Text": "\u003ca\u003e" }, { "Id": 106010, "Text": "\u003ccss\u003e" }, { "Id": 106011, "Text": "\u003cstyle\u003e" }, { "Id": 106012, "Text": "\u003clink\u003e" }] }, { "Id": 25600, "Text": "Người dùng không thể sử dụng đối tượng (thẻ) nào để tạo layout cho một trang Web", "Marks": 1, "AnswerId": 106015, "Answers": [{ "Id": 106013, "Text": "Table" }, { "Id": 106014, "Text": "Draw AP Div" }, { "Id": 106015, "Text": "Form" }, { "Id": 106016, "Text": "Insert Div Tag" }] }, { "Id": 25601, "Text": "Yếu tố nào sau đây không phải là một trong những yếu tố thuộc mô hình hộp của CSS", "Marks": 1, "AnswerId": 106020, "Answers": [{ "Id": 106017, "Text": "Đường biên" }, { "Id": 106018, "Text": "Độ rộng của phần nhìn thấy" }, { "Id": 106019, "Text": "Lề" }, { "Id": 106020, "Text": "Độ dài của nội dung" }] }, { "Id": 25602, "Text": "Thẻ HTML nào thể hiện một dòng trong bảng", "Marks": 1, "AnswerId": 106021, "Answers": [{ "Id": 106021, "Text": "TR" }, { "Id": 106022, "Text": "ROW" }, { "Id": 106023, "Text": "TD" }, { "Id": 106024, "Text": "TABULAR" }] }, { "Id": 25603, "Text": "Phác thảo Web nằm trong pha nào của thiết kế Web", "Marks": 1, "AnswerId": 106026, "Answers": [{ "Id": 106025, "Text": "Thực thi" }, { "Id": 106026, "Text": "Thiết kế" }, { "Id": 106027, "Text": "Kiểm thử" }, { "Id": 106028, "Text": "Xác định và phân tích yêu cầu" }] }, { "Id": 25604, "Text": "Điểm khác biệt giữa bảng có chiều dài cố định và bảng có kích thước theo tỷ lệ phần trăm (%) là", "Marks": 1, "AnswerId": 106030, "Answers": [{ "Id": 106029, "Text": "Không có khác biệt gì" }, { "Id": 106030, "Text": "Bảng có kích thước theo tỉ lệ % có thể co giãn phù hợp với mọi trình duyệt, còn kích thước cố định thì không." }, { "Id": 106031, "Text": "Bảng có kích thước theo tỉ lệ % không tương thích với mọi trình duyệt" }, { "Id": 106032, "Text": "Bảng có kích thước cố định có thể co giãn phù hợp với mọi trình duyệt, còn kích thước theo tỉ lệ % thì không." }] }, { "Id": 25605, "Text": "Thao tác nào không được làm trong giai đoạn phác thảo khi thiết kế Website", "Marks": 1, "AnswerId": 106036, "Answers": [{ "Id": 106033, "Text": "Tạo liên kết giữa các trang" }, { "Id": 106034, "Text": "Tạo layout" }, { "Id": 106035, "Text": "Sơ đồ Website" }, { "Id": 106036, "Text": "Tạo các file CSS" }] }, { "Id": 25606, "Text": "Danh sách có thứ tự trong Dreamweaver chỉ có thể bắt đầu từ số 1 ?", "Marks": 1, "AnswerId": 106037, "Answers": [{ "Id": 106037, "Text": "Sai" }, { "Id": 106038, "Text": "Đúng" }] }, { "Id": 25607, "Text": "Muốn bảng tự động giãn ra trên cửa sổ màn hình to và thu lại trên cửa sổ màn hình nhỏ thì phải chọn loại bảng", "Marks": 1, "AnswerId": 106039, "Answers": [{ "Id": 106039, "Text": "Bảng có kích cỡ dựa trên phần trăm" }, { "Id": 106040, "Text": "Bảng được thiết kế bởi CSS" }, { "Id": 106041, "Text": "Bảng được căn chỉnh giữa" }, { "Id": 106042, "Text": "Bảng có kích cỡ cố định" }] }, { "Id": 25608, "Text": "Trong CSS, các hộp (box) có thể lồng nhau", "Marks": 1, "AnswerId": 106044, "Answers": [{ "Id": 106043, "Text": "Sai" }, { "Id": 106044, "Text": "Đúng" }] }, { "Id": 25609, "Text": "Trong kỹ thuật chỉnh nâng cao có những kỹ thuật nào ?", "Marks": 1, "AnswerId": 106045, "Answers": [{ "Id": 106045, "Text": "Đối xúng" }, { "Id": 106046, "Text": "Bẻ văn bản" }, { "Id": 106047, "Text": "Khối văn bản" }, { "Id": 106048, "Text": "Không đối xứng" }] }, { "Id": 25610, "Text": "Định dạng nào sau đây không phải là định dạng của tệp tin chứa hình động ?", "Marks": 1, "AnswerId": 106050, "Answers": [{ "Id": 106049, "Text": "FLV" }, { "Id": 106050, "Text": "MP3" }, { "Id": 106051, "Text": "AVI" }, { "Id": 106052, "Text": "Mp4" }] }, { "Id": 25611, "Text": "Định dạng nào sau đây không phải là định dạng của tệp tin chứa âm thanh ?", "Marks": 1, "AnswerId": 106055, "Answers": [{ "Id": 106053, "Text": "MP3" }, { "Id": 106054, "Text": "WAV" }, { "Id": 106055, "Text": "GIF" }, { "Id": 106056, "Text": "RM" }] }, { "Id": 25612, "Text": "Để xem một file .flv, người sử dụng trình duyệt cần cài đặt Plug-in Flash Player trong máy tính.", "Marks": 1, "AnswerId": 106058, "Answers": [{ "Id": 106057, "Text": "Sai" }, { "Id": 106058, "Text": "Đúng" }] }, { "Id": 25613, "Text": "Định dạng ảnh nào cho kích thước file nhỏ nhất?", "Marks": 1, "AnswerId": 106060, "Answers": [{ "Id": 106059, "Text": "GIF" }, { "Id": 106060, "Text": "PNG" }, { "Id": 106061, "Text": "JPEG" }] }, { "Id": 25614, "Text": "Để thêm các chức năng thường hay sử dụng nhiều hơn các chức năng khác, người sử dụng dùng nhóm thẻ nào?", "Marks": 1, "AnswerId": 106062, "Answers": [{ "Id": 106062, "Text": "Favorites" }, { "Id": 106063, "Text": "Layout" }, { "Id": 106064, "Text": "Form" }, { "Id": 106065, "Text": "Common" }] }, { "Id": 25615, "Text": "Các công cụ nào sau đây không giúp việc thiết kế giao diện website được chính xác hơn", "Marks": 1, "AnswerId": 106066, "Answers": [{ "Id": 106066, "Text": "Zoom" }, { "Id": 106067, "Text": "Thước kẻ" }, { "Id": 106068, "Text": "Favorite tab" }, { "Id": 106069, "Text": "Grid" }] }, { "Id": 25616, "Text": "Người dùng có thể lưu các thành phần mình thường xuyên sử dụng vào đâu để tiện tìm kiếm ?", "Marks": 1, "AnswerId": 106070, "Answers": [{ "Id": 106070, "Text": "Favorite tab" }, { "Id": 106071, "Text": "Insert panel" }, { "Id": 106072, "Text": "AP Elements" }, { "Id": 106073, "Text": "Files panel" }] }, { "Id": 25617, "Text": "Tên nào sau đây KHÔNG phải là tên của một plug-in đa phương tiện", "Marks": 1, "AnswerId": 106075, "Answers": [{ "Id": 106074, "Text": "Window Media Player" }, { "Id": 106075, "Text": "FTP" }, { "Id": 106076, "Text": "Shockware Flash" }, { "Id": 106077, "Text": "Quicktime player" }] }, { "Id": 25618, "Text": "Để lựa chọn chất lượng Flash khi chèn vào trang Web, người sử dụng lựa chọn thuộc tính nào trong Properties Inspector.", "Marks": 1, "AnswerId": 106080, "Answers": [{ "Id": 106078, "Text": "Align" }, { "Id": 106079, "Text": "Scale" }, { "Id": 106080, "Text": "Qualily" }, { "Id": 106081, "Text": "Wmode" }] }, { "Id": 25619, "Text": "Không thể di chuyển được vị trí của Insert Panel trong Dreamweaver", "Marks": 1, "AnswerId": 106083, "Answers": [{ "Id": 106082, "Text": "Đúng" }, { "Id": 106083, "Text": "Sai" }] }, { "Id": 25620, "Text": "Dreamweaver KHÔNG thể kiểm tra tính hợp lệ của loại code nào sau đây", "Marks": 1, "AnswerId": 106087, "Answers": [{ "Id": 106084, "Text": "CSS" }, { "Id": 106085, "Text": "HTML" }, { "Id": 106086, "Text": "XML" }, { "Id": 106087, "Text": "ActionScript" }] }, { "Id": 25621, "Text": "Thành phần nào sau đây không phải là một loại module được hỗ trợ bởi Dreamweaver", "Marks": 1, "AnswerId": 106090, "Answers": [{ "Id": 106088, "Text": "Template" }, { "Id": 106089, "Text": "Library item" }, { "Id": 106090, "Text": "Image" }, { "Id": 106091, "Text": "Snippet" }] }, { "Id": 25622, "Text": "Để thay đổi kích cỡ chữ của đoạn chữ nằm trong thẻ \u003cfont\u003e ở cửa sổ code view, người thiết kế phải thay đổi giá trị của thuộc tính nào ?", "Marks": 1, "AnswerId": 106093, "Answers": [{ "Id": 106092, "Text": "Font family" }, { "Id": 106093, "Text": "Font size" }, { "Id": 106094, "Text": "Head" }, { "Id": 106095, "Text": "body" }] }, { "Id": 25623, "Text": "Trong template, các vùng có nội dung lặp lại ở các trang cụ thể áp dụng template này là các vùng có thể sửa đổi được?", "Marks": 1, "AnswerId": 106096, "Answers": [{ "Id": 106096, "Text": "Sai" }, { "Id": 106097, "Text": "Đúng" }] }, { "Id": 25624, "Text": "Để hiển thị thứ tự dòng trong cửa sổ code view phải đảm bảo mục nào sau đây được chọn trong View Options", "Marks": 1, "AnswerId": 106100, "Answers": [{ "Id": 106098, "Text": "Rulers" }, { "Id": 106099, "Text": "Auto indent" }, { "Id": 106100, "Text": "Line number" }, { "Id": 106101, "Text": "Word wrap" }] }, { "Id": 25625, "Text": "Trên cửa sổ code view, chọn File -\u003e Validate -\u003e Markup, chuyện gì sẽ xảy ra", "Marks": 1, "AnswerId": 106104, "Answers": [{ "Id": 106102, "Text": "Một danh sách các dòng code hợp lệ sẽ được hiển thị" }, { "Id": 106103, "Text": "Một danh sách các dòng chú thích sẽ được hiển thị" }, { "Id": 106104, "Text": "Một danh sách các dòng code bị sai cú pháp sẽ được hiển thị" }, { "Id": 106105, "Text": "Không có chuyện gì xảy ra" }] }, { "Id": 25626, "Text": "Trong template, vùng có thể được sửa đổi từ bất cứ trang web nào dùng template đó được gọi là:", "Marks": 1, "AnswerId": 106109, "Answers": [{ "Id": 106106, "Text": "Product Category" }, { "Id": 106107, "Text": "Template Object" }, { "Id": 106108, "Text": "Library item" }, { "Id": 106109, "Text": "Editable Region" }] }, { "Id": 25627, "Text": "Panel nào được dùng để quản lý các thành phần thư viện và mẫu", "Marks": 1, "AnswerId": 106112, "Answers": [{ "Id": 106110, "Text": "AP Elements" }, { "Id": 106111, "Text": "Insert" }, { "Id": 106112, "Text": "Assets" }, { "Id": 106113, "Text": "Snippet" }] }, { "Id": 25628, "Text": "Mã nguồn của trang Web KHÔNG chứa loại code nào ?", "Marks": 1, "AnswerId": 106115, "Answers": [{ "Id": 106114, "Text": "HTML" }, { "Id": 106115, "Text": "C#" }, { "Id": 106116, "Text": "JavaScript" }, { "Id": 106117, "Text": "CSS" }] }, { "Id": 25629, "Text": "Khi chỉnh sửa snippet, tất cả các trang web sử dụng snippet đấy cũng được cập nhật theo", "Marks": 1, "AnswerId": 106118, "Answers": [{ "Id": 106118, "Text": "Sai" }, { "Id": 106119, "Text": "Đúng" }] }, { "Id": 25630, "Text": "Độ dài của thông tin gửi lên server sẽ bị giới hạn nếu sử dụng phương pháp submit GET", "Marks": 1, "AnswerId": 106121, "Answers": [{ "Id": 106120, "Text": "Sai" }, { "Id": 106121, "Text": "Đúng" }] }, { "Id": 25631, "Text": "Thành phần nào sau đây là một trong những thành phần cơ bản nhất của Spry", "Marks": 1, "AnswerId": 106122, "Answers": [{ "Id": 106122, "Text": "Widgets" }, { "Id": 106123, "Text": "Template" }, { "Id": 106124, "Text": "Snippet" }, { "Id": 106125, "Text": "Library item" }] }, { "Id": 25632, "Text": "Panel nào sau đây hỗ trợ công việc validation trong Dreamweaver", "Marks": 1, "AnswerId": 106127, "Answers": [{ "Id": 106126, "Text": "CSS style" }, { "Id": 106127, "Text": "Behavior" }, { "Id": 106128, "Text": "AP Elements" }, { "Id": 106129, "Text": "Insert" }] }, { "Id": 25633, "Text": "Loại widget nào của spry cho phép bạn tạo một panel có thể đóng/mở được", "Marks": 1, "AnswerId": 106133, "Answers": [{ "Id": 106130, "Text": "Accordion Panel" }, { "Id": 106131, "Text": "Tabbed Panel" }, { "Id": 106132, "Text": "Menu bar" }, { "Id": 106133, "Text": "Collapsible Panel" }] }, { "Id": 25634, "Text": "Tên nào sau đây không phải là tên của một ngôn ngữ lập trình ?", "Marks": 1, "AnswerId": 106137, "Answers": [{ "Id": 106134, "Text": "Visual Basic" }, { "Id": 106135, "Text": "Pascal" }, { "Id": 106136, "Text": "C++" }, { "Id": 106137, "Text": "AJAX" }] }, { "Id": 25635, "Text": "Việc kiểm tra cú pháp của tên tài khoản trong các form đăng ký THƯỜNG được thực hiện ở phía", "Marks": 1, "AnswerId": 106138, "Answers": [{ "Id": 106138, "Text": "Client" }, { "Id": 106139, "Text": "Server" }] }, { "Id": 25636, "Text": "Thành phần giao diện nào trên form cho phép người dùng chọn duy nhất một lựa chọn từ một danh sách cho trước", "Marks": 1, "AnswerId": 106141, "Answers": [{ "Id": 106140, "Text": "Textbox" }, { "Id": 106141, "Text": "Radio button" }, { "Id": 106142, "Text": "Button" }, { "Id": 106143, "Text": "Checkbox" }] }, { "Id": 25637, "Text": "Giá trị  nào sau đây không phải là giá trị của thuộc tính Type của thẻ Button trong HTML", "Marks": 1, "AnswerId": 106144, "Answers": [{ "Id": 106144, "Text": "OK" }, { "Id": 106145, "Text": "Button" }, { "Id": 106146, "Text": "Reset" }, { "Id": 106147, "Text": "Submit" }] }, { "Id": 25638, "Text": "Để thay đổi màu chữ được nhập trong ô textbox trên form bằng CSS, người thiết kế phải thay đổi giá trị thuộc lớp nào ?", "Marks": 1, "AnswerId": 106150, "Answers": [{ "Id": 106148, "Text": "label" }, { "Id": 106149, "Text": "font-color" }, { "Id": 106150, "Text": "color" }, { "Id": 106151, "Text": "text-color" }] }, { "Id": 25639, "Text": "Khi sử dụng Spry data widget, loại dữ liệu nào sau đây sẽ KHÔNG được chấp nhận", "Marks": 1, "AnswerId": 106155, "Answers": [{ "Id": 106152, "Text": "HTML dataset" }, { "Id": 106153, "Text": "JSON" }, { "Id": 106154, "Text": "XML" }, { "Id": 106155, "Text": "Excel data" }] }, { "Id": 25640, "Text": "FTP là viết tắt của", "Marks": 1, "AnswerId": 106158, "Answers": [{ "Id": 106156, "Text": "File to Program" }, { "Id": 106157, "Text": "File translate protocol" }, { "Id": 106158, "Text": "File transfer protocol" }, { "Id": 106159, "Text": "Fast transfer protocol" }] }, { "Id": 25641, "Text": "Tên nào sau đây không phải là tên của một free host", "Marks": 1, "AnswerId": 106161, "Answers": [{ "Id": 106160, "Text": "000Webhost" }, { "Id": 106161, "Text": "microsoft" }, { "Id": 106162, "Text": "Byethost" }, { "Id": 106163, "Text": "110MB" }] }, { "Id": 25642, "Text": "Thông tin trên BUSINESS CARD bao gồm những thông tin nào ?", "Marks": 1, "AnswerId": 106165, "Answers": [{ "Id": 106164, "Text": "Dịa chỉ" }, { "Id": 106165, "Text": "Số Điện thoại" }, { "Id": 106166, "Text": "Tên người thân" }, { "Id": 106167, "Text": "Tên công ty, logo" }] }, { "Id": 25643, "Text": "Bước nào sau đây KHÔNG phải là một bước xuất bản website", "Marks": 1, "AnswerId": 106168, "Answers": [{ "Id": 106168, "Text": "Tạo layout" }, { "Id": 106169, "Text": "Lựa chọn tên miền" }, { "Id": 106170, "Text": "Lựa chọn web server" }, { "Id": 106171, "Text": "Quảng bá" }] }, { "Id": 25644, "Text": "Website sau khi đã upload lên web server rồi thì không sửa đổi được nữa", "Marks": 1, "AnswerId": 106172, "Answers": [{ "Id": 106172, "Text": "Sai" }, { "Id": 106173, "Text": "Đúng" }] }, { "Id": 25645, "Text": "Kỹ thuật tạo dòng chảy từ ngữ khi thiết kế sản phẩm. Những kỹ thuật nào cần nên tránh?", "Marks": 1, "AnswerId": 106176, "Answers": [{ "Id": 106174, "Text": "Chọn tiêu đè" }, { "Id": 106175, "Text": "Giữ văn bản phù hợp" }, { "Id": 106176, "Text": "Nhiều kiểu chữ" }, { "Id": 106177, "Text": "Kiểu chữ dễ đọc" }] }, { "Id": 25646, "Text": "Để cung cấp danh sách các từ khóa tương ứng với website, người ta thường sử dụng thẻ", "Marks": 1, "AnswerId": 106181, "Answers": [{ "Id": 106178, "Text": "Thẻ object" }, { "Id": 106179, "Text": "Thẻ h1" }, { "Id": 106180, "Text": "Thẻ table" }, { "Id": 106181, "Text": "Thẻ meta" }] }, { "Id": 25647, "Text": "Để kiểm tra tính tương thích với trình duyệt của website, phải sử dụng công cụ nào:", "Marks": 1, "AnswerId": 106185, "Answers": [{ "Id": 106182, "Text": "Check in" }, { "Id": 106183, "Text": "Check link" }, { "Id": 106184, "Text": "Site report" }, { "Id": 106185, "Text": "Browser Compatibility Check" }] }, { "Id": 25648, "Text": "Khi muốn kiểm tra xem các kết nối trong website đã chính xác hay chưa, phải sử dụng công cụ nào sau đây:", "Marks": 1, "AnswerId": 106187, "Answers": [{ "Id": 106186, "Text": "Check out" }, { "Id": 106187, "Text": "Check link" }, { "Id": 106188, "Text": "Design note" }, { "Id": 106189, "Text": "Check in" }] }, { "Id": 25649, "Text": "Giao thức thường được sử dụng để upload website lên web server là giao thức nào  ?", "Marks": 1, "AnswerId": 106192, "Answers": [{ "Id": 106190, "Text": "HTTP" }, { "Id": 106191, "Text": "DNS" }, { "Id": 106192, "Text": "FTP" }, { "Id": 106193, "Text": "FPT" }] }, { "Id": 25650, "Text": "Trong Dreamweaver, muốn kiểm tra tình trạng của link cần thiết phải sử dụng lệnh nào sau đây?", "Marks": 1, "AnswerId": 106196, "Answers": [{ "Id": 106194, "Text": "Check url" }, { "Id": 106195, "Text": "Check check" }, { "Id": 106196, "Text": "Check link" }, { "Id": 106197, "Text": "Check show" }] }, { "Id": 25651, "Text": "Thẻ \u003cmeta\u003e cho phép điều gì xảy ra?", "Marks": 1, "AnswerId": 106201, "Answers": [{ "Id": 106198, "Text": "Tất cả các ý kiến trên đều sai" }, { "Id": 106199, "Text": "Sắp xếp nội dung" }, { "Id": 106200, "Text": "Sắp xếp thông tin" }, { "Id": 106201, "Text": "Liên kết các trang với một danh sách các chuỗi tìm kiếm khác nhau" }] }, { "Id": 25652, "Text": "Đâu là một trong những công việc cần làm cho việc đăng tải site?", "Marks": 1, "AnswerId": 106204, "Answers": [{ "Id": 106202, "Text": "Kiểm tra toàn bộ liên kết trên web" }, { "Id": 106203, "Text": "Tạo và kiểm tra kết nối FTP" }, { "Id": 106204, "Text": "Tất cả các ý kiến trên đều đúng" }, { "Id": 106205, "Text": "Thực hiện báo cáo site" }] }, { "Id": 25653, "Text": "Báo cáo site có thể được lưu dưới dạng nào sau đây?", "Marks": 1, "AnswerId": 106209, "Answers": [{ "Id": 106206, "Text": "AJAX" }, { "Id": 106207, "Text": "XHTML" }, { "Id": 106208, "Text": "HTML" }, { "Id": 106209, "Text": "XML" }] }, { "Id": 25654, "Text": "Để tải file ên server, cần thiết phải biết được thành phần nào sau đây?", "Marks": 1, "AnswerId": 106210, "Answers": [{ "Id": 106210, "Text": "Tất cả các ý kiến trên đều đúng" }, { "Id": 106211, "Text": "Tên đăng nhập và mật khẩu để truy cập server" }, { "Id": 106212, "Text": "Địa chỉ FTP của web server và thư mục cụ thể" }, { "Id": 106213, "Text": "Thư mục cụ thể, nơi các file sẽ được tải lên" }] }, { "Id": 25655, "Text": "Thành công của website bắt nguồn từ khả năng hiện diện trên máy tìm kiếm. ĐÚng hay sai?", "Marks": 1, "AnswerId": 106215, "Answers": [{ "Id": 106214, "Text": "Sai" }, { "Id": 106215, "Text": "Đúng" }] }, { "Id": 25656, "Text": "Bảng Files đáp ứng tất cả các tinh năng của một dứng dụng trueyefn tải và đồng bộ hoá file. ĐÚng hay sai?", "Marks": 1, "AnswerId": 106217, "Answers": [{ "Id": 106216, "Text": "Sai" }, { "Id": 106217, "Text": "Đúng" }] }, { "Id": 25657, "Text": "Theo mặc định, Dreamweaver sẽ tự động chèn thẻ nào sau đây?", "Marks": 1, "AnswerId": 106220, "Answers": [{ "Id": 106218, "Text": "\u003clayer\u003e\u003c/layer\u003e" }, { "Id": 106219, "Text": "\u003cshow\u003e\u003c/show\u003e" }, { "Id": 106220, "Text": "\u003ctitle\u003e\u003c/title\u003e" }, { "Id": 106221, "Text": "Tất cả các ý kiến trên đều đúng" }] }, { "Id": 25658, "Text": "Việc chạy Link CHecker trên toàn bộ site có tác dụng gì?", "Marks": 1, "AnswerId": 106224, "Answers": [{ "Id": 106222, "Text": "Kiểm tra các link" }, { "Id": 106223, "Text": "Kiểm tra văn bản" }, { "Id": 106224, "Text": "Kiểm tra các liên kết gãy giữa các trang hoặc liên kết sai tới hình ảnh" }, { "Id": 106225, "Text": "Kiểm tra hình ảnh" }] }, { "Id": 25659, "Text": "Design Notes có tác dụng gì?", "Marks": 1, "AnswerId": 106229, "Answers": [{ "Id": 106226, "Text": "Lưu trữ hình ảnh" }, { "Id": 106227, "Text": "Các phương án đều đúng" }, { "Id": 106228, "Text": "Lưu trữ nội dung chữ" }, { "Id": 106229, "Text": "Lưu trữ những thông tin bổ sung về file hay đối tượng đa phương tiện trong web" }] }]
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.totalPage=Math.ceil(this.WEBU.length/this.itemsPerPage);
      /*xét id=id load dử liệu*/
    this.route.paramMap.subscribe(para=>{
        this.pid=+para.get('Id');
      });
      this.laptrinh=this.WEBU.find(p=>p.Id===this.pid);
      
      // this.pageTitle=this.sinhvien.productName;
    
  }
  /*tới */
  next(){
    if(this.currentPage < this.totalPage)
    
      this.currentPage++
    
  }
  /*luôi */
  Previous(){

    if( this.totalPage*this.currentPage)
      this.currentPage--
  }
  /*cuối trang */
  LastPege(){
    this.currentPage=this.totalPage
  }
  /*đầu trang */
  top(){
    this.currentPage=1
  }

}
