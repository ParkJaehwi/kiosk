let choice_0 = [
  {
    koName: "푸른 용 헤이즐넛 라떼",
    enName: "Blue Dragon Hazelnut Latte",
    content:
      "2024년 새해 기운을 가득 담은 음료! 전통 소재인 치자를 활용하여 푸른 용의 색을 담아낸 얼 그레이 폼과 진한 에스프레소, 달콤한 헤이즐넛의 환상 조합",
    price: 6300,
  },
  {
    koName: "핑크 폼 딸기라떼",
    enName: "Pink Foam Strawberry Milk",
    content:
      "새콤달콤한 스타벅스 딸기 라떼 위에 폭신한 딸기 맛 핑크 폼이 더해져 더욱 부드럽고 달콤하게 즐길 수 있는 음료",
    price: 6800,
  },
  {
    koName: "푸른 용 클래식 밀크티",
    enName: "Blue Dragon Classic Milk Tea",
    content:
      "2024년 새해 기운을 가득 담은 음료! 전통 소재인 치자를 활용하여 푸른 용의 색을 담아낸 얼 그레이 폼과 클래식 밀크 티의 부드러운 조합",
    price: 6200,
  },
];
let choice_1 = [
  {
    koName: "에스프레소",
    enName: "Espresso",
    content:
      "스타벅스 에스프레소는 향기로운 크레마 층과 바디 층, 하트 층으로 이루어져 있으며, 입안 가득히 커피와 달콤한 카라멜 향이 느껴지는 커피 음료",
    price: 4000,
  },
  {
    koName: "카페 아메리카노",
    enName: "Caffe Americano",
    content:
      "진한 에스프레소와 뜨거운 물을 섞어 스타벅스의 깔끔하고 강렬한 에스프레소를 가장 부드럽게 잘 느낄 수 있는 커피",
    price: 4500,
  },
  {
    koName: "카페 라떼",
    enName: "Caffe Latte",
    content:
      "풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 커피 라떼",
    price: 5000,
  },
  {
    koName: "카라멜 마키아또",
    enName: "Caramel Macchiato",
    content:
      "향긋한 바닐라 시럽과 따뜻한 스팀 밀크 위에 풍성한 우유 거품을 얹고 점을 찍듯이 에스프레소를 부은 후 벌집 모양으로 카라멜 드리즐을 올린 달콤한 커피 음료",
    price: 5900,
  },
  {
    koName: "바닐라 스타벅스 더블 샷",
    enName: "Coffe Starbucks Double Shot",
    content: "신선하게 제조된 더블 샷 믹스에 바닐라 시럽을 넣고 에스프레소 샷, 얼음이 어우러져 핸드 쉐이킹한 음료",
    price: 5100,
  },
];
let choice_2 = [
  {
    id: "menu_1",
    koName: "자바 칩 프라푸치노",
    enName: "Java Chip Frappuccino",
    content: "커피, 모카 소스, 진한 초콜릿 칩이 입안 가득 느껴지는 스타벅스에서만 맛볼 수 있는 프라푸치노",
    price: 6300,
  },
  {
    id: "menu_1",

    koName: "제주 말차 크림 프라푸치노",
    enName: "Malcha Cream Frappuccino from Jeju Organic Farm",
    content: "깊고 진한 말차 본연의 맛과 향을 시원하고 부드럽게 즐길 수 있는 프라푸치노",
    price: 6300,
  },
  {
    koName: "화이트 초콜릿 모카 프라푸치노",
    enName: "White Chocolate Mocha Frappuccino",
    content: "화이트 초콜릿, 커피와 우유가 조화로운 프라푸치노",
    price: 6000,
  },
  {
    koName: "카라멜 프라푸치노",
    enName: "Caramel Frappuccino",
    content: "카라멜과 커피가 어우러진 프라푸치노",
    price: 5900,
  },
  {
    koName: "에스프레소 프라푸치노",
    enName: "Espresso Frappuccino",
    content: "에스프레소 샷의 강렬함과 약간의 단맛이 어우러진 프라푸치노",
    price: 5500,
  },
];
let choice_3 = [
  {
    koName: "제주 유기농 말차로 만든 라떼",
    enName: "Malcha Latte from Jeju Organic Farm",
    content:
      "차광재배한 어린 녹찻잎을 곱게 갈아 깊고 진한 말차 본연의 맛과 향을 부드럽게 즐길 수 있는 제주 유기농 말차로 만든 라떼",
    price: 6100,
  },
  {
    koName: "유자 민트 티",
    enName: "Yuka Mint Tea",
    content: "달콤한 국내산 고흥 유자와 알싸하고 은은한 진저, 우릴 수록 상쾌한 민트 티가 조화로운 유자 민트 티",
    price: 5900,
  },
  {
    koName: "자몽 허니 블랙 티",
    enName: "Grapefruit Honey Black Tea",
    content: "새콤한 자몽과 달콤한 꿀이 깊고 그윽한 풍미의 스타벅스 티바나 블랙 티의 조화",
    price: 5700,
  },
  {
    koName: "얼 그레이 티",
    enName: "Earl Grey Brewed Tea",
    content: "꽃향 가득한 라벤더와 베르가못 향이 진한 홍차와 블렌딩된 향긋한 블랙 티",
    price: 4500,
  },
  {
    koName: "캐모마일 블렌드 티",
    enName: "Chamomile blend Brewed Tea",
    content: "캐모마일과 레몬 그라스, 레몬밤, 히비스커스 등 블렌딩되어 은은하고 차분한 향이 기분을 좋게하는 허브 티",
    price: 4500,
  },
];
let choice_4 = [
  {
    koName: "딸기 딜라이트 요거트 블렌디드",
    enName: "Strawberry Delight Yogurt Blended",
    content: "유산균이 살아있는 리얼 요거트와 풍성한 딸기 과육이 더욱 상큼하게 어우러진 과일 요거트 블렌디드",
    price: 6300,
  },
  {
    koName: "망고 바나나 블렌디드",
    enName: "Mango Banana Blended",
    content: "달콤한 망고 패션 프루트 주스에 바나나 1개가 통째로 들어간 신선한 블렌디드",
    price: 6300,
  },
  {
    koName: "피치 요거트 블렌디드",
    enName: "Peach Yogurt Blended",
    content: "달콤한 복숭아에 구름같은 요거트가 더해져 가볍고 상큼하게 즐길 수 있는 과일 블렌디드",
    price: 6100,
  },
  {
    koName: "망고 패션 티 블렌디드",
    enName: "Mango Passion Tea Blended",
    content: "망고 패션 프루트 주스와 패션 탱고 티가 상큼하게 어우러진 과일 블렌디드",
    price: 5400,
  },
];
let choice_5 = [
  {
    koName: "바스크 치즈 케이크",
    enName: "Basque Cheese Cake",
    content:
      "고온에서 짧게 구워 겉면은 스모키하고 속은 크리미한 것이 특징인 스페인 바스크 지방에서 유래된 바스크 치즈 케이크입니다.",
    price: 7900,
  },
  {
    koName: "부드러운 생크림 카스텔라",
    enName: "Fresh Cream Castella",
    content: "부드러운 생크림이 듬뿍 들어있는 촉촉한 카스텔라입니다.",
    price: 4500,
  },
  {
    koName: "마스카포네 티라미수 케이크",
    enName: "Mascarpone Tiramisu Cake",
    content: "고소한 마스카포네 치즈 크림에 촉촉한 커피 시트가 입안을 감싸는 기분 좋은 느낌의 떠먹는 티라미수입니다.",
    price: 5900,
  },
  {
    koName: "탕종 파마산 치즈 베이글",
    enName: "Parmesan cheese Bagel",
    content:
      "파마산 치즈와 탕종법으로 반죽한 후 고온에서 데치고, 짧게 구워 내 쫄깃하고 촉촉한 식감이 특징인 파마산 치즈 베이글입니다.",
    price: 3500,
  },
  {
    koName: "치킨 클래식 샌드위치",
    enName: "Chicken Classic Sandwich",
    content: "닭가슴살, 베이컨, 계란, 토마토를 넣어 든든하게 즐길 수 있는 클래식한 샌드위치입니다.",
    price: 6900,
  },
  {
    koName: "베이컨 치즈 토스트",
    enName: "Bacon Cheese Toast",
    content: "계란과 우유를 적신 빵에 베이컨과 치즈, 에그 스프레드를 넣어 구운 프렌치 토스트 타입 샌드위치입니다.",
    price: 4900,
  },
  {
    koName: "더블에그 샐러드 밀 박스",
    enName: "Double Egg Salad Meal Box",
    content:
      "스마트 팜에서 재배한 프릴아이스 채소로 신선함과 아삭함을 더하였으며 반숙란 두개와 부드러운 닭가슴살 그리고 반건조 토마토를 넣어 영양 가득한 한끼를 책임지는 샐러드입니다.",
    price: 6500,
  },
];
let sales = [];
let 결제내역수 = parseInt(localStorage.getItem("결제내역수")) || 0;

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menubtn_0").click();
});

var total_val = 0;
let cart = [];
let cart_x = [];
let cart_y = [];
let count = 0;
let choice; // 전역 변수로 선언

for (let i = 0; i < 6; i++) {
  let menu_btn = document.getElementById(`menubtn_${i}`);
  menu_btn.addEventListener("click", () => {
    let kiosk_center = document.getElementById("kiosk_center");
    let kiosk_right = document.getElementById("kiosk_right");

    kiosk_center.innerHTML = null;

    switch (i) {
      case 0:
        choice = choice_0;
        break;
      case 1:
        choice = choice_1;
        break;
      case 2:
        choice = choice_2;
        break;
      case 3:
        choice = choice_3;
        break;
      case 4:
        choice = choice_4;
        break;
      case 5:
        choice = choice_5;
        break;
    }

    choice.forEach((menu, j) => {
      const menuId = `menu_${i}_${j}`; // 각 메뉴의 고유 ID 생성
      const menu_show = `<div id="${menuId}" class="menu_show"><img class="round menu_image" src="./menu_image/${i}_${
        j + 1
      }.jpg"><p>${menu.koName}</p><p>${menu.price.toLocaleString()}원</p></div>`;
      kiosk_center.innerHTML += menu_show;
    });

    choice.forEach((menu, j) => {
      const menuId = `menu_${i}_${j}`;

      document.getElementById(menuId).addEventListener("click", () => {
        const existingCartItem = cart.find((item) => item.id === menuId);

        if (existingCartItem) {
          existingCartItem.quantity++;
          document.getElementById(`cart${i}_${j}`).innerText = existingCartItem.quantity;
        } else {
          count++;
          cart.push({ id: menuId, quantity: 1 });
          console.log(i, j);
          cart_x.push(i);
          cart_y.push(j);
          console.log(cart_x, cart_y);
          document.getElementById("right_center").innerHTML += `<div class="order_container">
        <span class="order_name"><span id="order_name${i}_${j}" >${
            menu.koName
          }</span>&nbsp;&nbsp;&nbsp;*<span class="order_name" id="cart${i}_${j}">1</span></span><span id="order_price${i}_${j}" class="order">${menu.price.toLocaleString()}</span></div>`;
          console.log(document.getElementById(`order_name${i}_${j}`).innerText);
        }
        total_val += parseInt(menu.price);
        document.getElementById("total").innerHTML = total_val.toLocaleString();
      });
    });
  });

  menu_btn.addEventListener("click", function () {
    for (let j = 0; j < 6; j++) {
      if (i === j) {
        menu_btn.classList.add("choice");
      } else {
        let otherMenuBtn = document.getElementById(`menubtn_${j}`);
        otherMenuBtn.classList.remove("choice");
      }
    }
  });
}

document.getElementById("return_btn").addEventListener("click", () => {
  Swal.fire({
    title: "첫 화면으로 돌아가시겠습니까?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "처음으로",
    cancelButtonText: "취소",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "index.html";
    }
  });
});
document.getElementById("reset_btn").addEventListener("click", () => {
  document.getElementById("right_center").innerHTML = null;
  document.getElementById("total").innerHTML = 0;
  total_val = 0;
  cart = [];
  Swal.fire({
    icon: "success",
    title: "장바구니를 비웠습니다",
    showConfirmButton: false,
    timer: 1500,
  });
});
document.getElementById("pay_cash").addEventListener("click", () => {
  Swal.fire({
    title: "Cash",
    text: "현금을 투입구에 올바른 방향으로 넣어주세요",
    imageUrl: "./menu_image/pay_cash.png",
    imageWidth: 300,
    imageHeight: 300,
    imageAlt: "Custom image",
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      receipt();
      Swal.fire({
        icon: "success",
        title: "결제가 완료되었습니다.",
        text: "스타벅스를 이용해 주셔서 감사합니다.",
        showConfirmButton: false,
        timer: 2100,
      });
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2100);
    } else {
      Swal.fire({
        icon: "error",
        title: "결제가 취소되었습니다.",
        text: "결제를 처음부터 다시 진행해주세요.",
        showConfirmButton: false,
        timer: 2100,
      });
    }
  });
});
document.getElementById("pay_card").addEventListener("click", () => {
  Swal.fire({
    title: "Card",
    text: "카드를 투입구에 올바른 방향으로 넣어주세요",
    imageUrl: "./menu_image/pay_card.png",
    imageWidth: 300,
    imageHeight: 300,
    imageAlt: "Custom image",
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      receipt();
      Swal.fire({
        icon: "success",
        title: "결제가 완료되었습니다.",
        text: "스타벅스를 이용해 주셔서 감사합니다.",

        showConfirmButton: false,
        timer: 2100,
      });
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2100);
    } else {
      Swal.fire({
        icon: "error",
        title: "결제가 취소되었습니다.",
        text: "결제를 처음부터 다시 진행해주세요.",
        showConfirmButton: false,
        timer: 2100,
      });
    }
  });
});

function receipt() {
  let receipt = [];
  for (let i = 0; i < count; i++) {
    let 제품명 = document.getElementById(`order_name${cart_x[i]}_${cart_y[i]}`).innerText;
    let 수량 = document.getElementById(`cart${cart_x[i]}_${cart_y[i]}`).innerText;
    let 단가 = document.getElementById(`order_price${cart_x[i]}_${cart_y[i]}`).innerText;
    // let 합계 = total_val;
    let 결제내역 = { 제품명: 제품명, 수량: 수량, 단가: 단가 };
    결제내역수++;

    receipt.push(결제내역);
  }
  receipt.push({ 합계: total_val });
  localStorage.setItem(`결제내역_${결제내역수}`, JSON.stringify(receipt));
}

function show_receipt() {
  document.getElementById("kiosk_center").innerHTML = null;
  document.getElementById("right_center").innerHTML = null;
  document.getElementById("total").innerHTML = 0;

  let receipt = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    receipt.push({ key, value });
  }
  receipt.forEach((item) => {
    document.getElementById("kiosk_center").innerText += `${item.value[3]}`;
  });
}

document.getElementById("receipt").addEventListener("click", show_receipt);
