// Channel: EASY FRONTEND - Hậu Nguyễn
// Youtube channel: https://www.youtube.com/channel/UCG2ovypNCpVOTFeY1YCocmQ
// THAM TRỊ vs THAM CHIẾU trong Javascript

// CHIA SẺ
// 1. Tham trị vs tham chiếu là gì?
// 2. Các khái niệm:
//     - stored by value
//     - stored by reference
//     - pass by value
//     - pass by reference
// 3. Cách khắc phục lỗi liên quan tới reference
// 4. Có liên quan gì tới ReactJS, Redux hk?
// Hôm nay học tới đây đủ rồi⁉️ 🤣




// -----------------
// THAM TRỊ - VALUE TYPE
// - Ví dụ cái box sau đây là đại diện cho biến trong JS.

// |                  |
// | number           |
// | string           |  => lưu luôn giá trị
// | boolean          |     vd số 1000, string 'Easy Frontend'
// | null, undefined  |
// |__________________|

// const a = 1000;
// |                  |
// | 1000             |
// | 'Easy Frontend'  |  
// | true, false      |     
// | null, undefined  |
// |__________________|




// -----------------
// THAM CHIẾU - REFERENCE TYPE

// |                         |    ===>    | KHO CHỨA 1E2F  |        
// | object, array           |    ===>    |                |        
// |                         |    ===>    | {name: 'Hau'}  |     
// | const a = {name: 'Hau'} |    ===>    |                |
// | thực chất a = 1E2F      |    ===>    |                |
// |_________________________|    ===>    |________________|
// => chỉ lưu địa chỉ nơi giữ giá trị 
// => phép gán với object === copy địa chỉ
// const b = a; --> b cũng trỏ về địa chỉ 1E2F




// tham trị - stored as value type
let a = 5;
let b = a;
a = 10;
console.log(b);


// tham chiếu - stored as reference type
const a = { name: 'Hau' }; // 1E2F
const b = a; // 1E2F
a.name = 'Po';
console.log(b.name);





// truyền tham số dạng tham trị - pass by value
function doMagic1(number) {
  number = 10;
}
const a = 5;
doMagic1(a);
console.log(a); // 5 or 10



// truyền tham số dạng tham chiếu - pass by reference
function doMagic2(a1) {
  a1.name = 'Po';
}
const a = { name: 'Hau' };
// const a1 = a; // 1e2f
doMagic2(a);
console.log(a.name); // Hau or Po???








// Làm sao để không bị dính tham chiếu
// --> Clone object
// --> Clone array
// ES6: spread operator (...)
const a = { name: 'Hau' }; // 1E2F
const b = { ...a }; // 1E2G
a.name = 'Po';
console.log(b.name);


const a = [1, 2, 3];
const b = [...a];
a.push(4);
console.log(b);






// Tham trị vs cả tham chiếu
// Cái này liên quan gì tới ReactJS, Redux?
// Có đó nha! :P
// Thỉnh thoảng component hk re-render
// mặc dù bạn nói đã thay đổi giá trị props rồi.
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      numberList: [],
    };
  }

  componentDidMount() {
    const { numberList } = this.state;
    const newNumberList = [...numberList];
    newNumberList.push(1);
    // will it re-render?
    // shallow comparison
    this.setState({ numberList: newNumberList });
  }

  render() {
    // 0 or 1 --> 1
    const { numberList } = this.state;
    return <p>{numberList.length}</p>;
  }
}


// NHỚ NÈ
// - Tham trị chứa giá trị (mấy kiểu dữ liệu đơn giản)
// - Tham chiếu chứa địa chi (kiểu dữ liệu phức tạp như object, array)
// - Nhớ clone ra object mới khi thay đổi props/state trong ReactJS / Redux.
// 💻 HAPPY CODING! ❤️

// Nhớ like, share và subscribe để ủng hộ mình nhen.
// Còn nếu muốn ủng hộ 💰 thì tìm trong phần mô tả video nhé!





// BÀI TẬP GIẢI TRÍ
// Câu 1: 
function doSomethingCool(number, obj) {
  number = 1500;
  obj.value = 2500;
};
const a = 1000;
const b = { value: 2000 };
doSomethingCool(a, b);
console.log(a + b.value); // in ra bao nhiêu?


// Câu 2:
function doSomethingGreat(obj, arr) {
  obj.value = 3500;
  arr.push(obj.value);
}
const a = { value: 1500 };
const b = [1000];
b.push(a.value);
doSomethingGreat(a, b);
console.log(b); // in ra cái gì?

// Giải và comment đáp án của bạn bên dưới nhé 😅

