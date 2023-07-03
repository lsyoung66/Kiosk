// 결제 배열
// payArr = [사진파일, 결제안내멘트]
var payArr = '[{"img":"image/pay/cash.png","name":"현금을 선택하셨습니다.<br>현금을 투입해 주세요."},{"img": "image/pay/card.png","name": "카드를 선택하셨습니다.<br>카드를 투입해 주세요."}, {"img": "image/pay/sam.png","name": "삼성페이를 선택하셨습니다.<br>단말기를 터치해 주세요."},{   "img": "image/pay/kakao.png","name": "카카오페이를 선택하셨습니다.<br>바코드를 인식시켜 주세요."}]';


// 메뉴 목록 지정 
var arrTabList = ['hamburger', 'set_menu', 'side', 'beverage'];

var itemList =
    [
        '[{"index" : "1", "src" : "image/menu/hamburger/1.jpg", "name" : "상하이 어니언 버거", "price" : "5,200원"},{"index" : "2","src" : "image/menu/hamburger/2.jpg", "name" : "슈니언 버거", "price" : "4,900원"},{"index" : "3","src" : "image/menu/hamburger/3.jpg", "name" : "베이컨 토마토 디럭스", "price" : "5,500원"},{"index" : "4","src" : "image/menu/hamburger/4.jpg", "name" : "빅맥", "price" : "4,600원"},{"index" : "5","src" : "image/menu/hamburger/5.jpg", "name" : "맥스파이시 상하이 버거", "price" : "4,600원"},{"index" : "6","src" : "image/menu/hamburger/6.jpg", "name" : "1955 버거", "price" : "5,700원"}]'
    ,          
        '[{"index" : "1","src" : "image/menu/set_menu/1.jpg", "name" : "상하이 어니언 버거 세트", "price" : "6,500원"},{"index" : "2","src" : "image/menu/set_menu/2.jpg", "name" : "슈니언 버거 세트", "price" : "6,300원"},{"index" : "3","src" : "image/menu/set_menu/3.jpg", "name" : "베이컨 토마토 세트", "price" : "7,500원"},{"index" : "4","src" : "image/menu/set_menu/4.jpg", "name" : "빅맥 세트", "price" : "5,900원"},{"index" : "5","src" : "image/menu/set_menu/5.jpg", "name" : "맥스파이시 버거 세트", "price" : "5,900원"},{"index" : "6","src" : "image/menu/set_menu/6.jpg", "name" : "1955 버거 세트", "price" : "7,200원"}]'
    ,
        '[{"index" : "1","src" : "image/menu/side/1.jpg", "name" : "맥윙 1인팩", "price" : "5,500원"},{"index" : "2","src" : "image/menu/side/2.jpg", "name" : "맥윙 2인팩", "price" : "9,900원"},{"index" : "3","src" : "image/menu/side/3.jpg", "name" : "웨지 후라이", "price" : "2,200원"},{"index" : "4","src" : "image/menu/side/4.jpg", "name" : "상하이 치킨 스낵랩", "price" : "2,200원"},{"index" : "5","src" : "image/menu/side/5.jpg", "name" : "맥너겟", "price" : "3,000원"},{"index" : "6","src" : "image/menu/side/6.jpg", "name" : "해쉬 브라운", "price" : "1,000원"}]'
    ,
        '[{"index" : "1","src" : "image/menu/beverage/1.jpg", "name" : "제주 한라봉 칠러", "price" : "2,700원"},{"index" : "2","src" : "image/menu/beverage/2.jpg", "name" : "배 칠러", "price" : "2,500원"},{"index" : "3","src" : "image/menu/beverage/3.jpg", "name" : "아이스 카페라떼", "price" : "2,700원"},{"index" : "4","src" : "image/menu/beverage/4.jpg", "name" : "카페라떼", "price" : "2,700원"},{"index" : "5","src" : "image/menu/beverage/5.jpg", "name" : "아메리카노", "price" : "2,200원"},{"index" : "6","src" : "image/menu/beverage/6.jpg", "name" : "아이스 드립 커피", "price" : "1,500원"}]'
    ,
        '[{"index":"1","src":null,"name":"딸기 칠러","price" : "2,000원"},{"index":"2","src":null,"name":"핫초코","price" : "2,000원"},{"index":"3","src":null,"name":"콘 스프","price" : "1,500원"},{"index":"4","src":null,"name":"애플 파이","price" : "1,000원"},{"index":"5","src":null,"name":"라즈베리 파이","price" : "2,000원"},{"index":"6","src":null,"name":"치킨 스낵랩","price" : "2,000원"}]'
    ];