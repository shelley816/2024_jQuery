$(document).ready(function(){
    // 初始資料寫入 localStorage（如果尚未儲存過）
    if (!localStorage.getItem('travelList')) {
        let data = {
            "types": [
                {
                    "name" : "搭機必備物品",
                    "description" : ""
                },
                {
                    "name" : "衣物",
                    "description" : ""
                },
                {
                    "name" : "3C 產品",
                    "description" : "電池要放隨身行李"
                },
                {
                    "name" : "生活類",
                    "description" : ""
                }
            ],
            "items": [
                {
                    "type" : "搭機必備物品",
                    "name" : "護照正本",
                    "state" : false,
                    "description" : ""
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "護照影本",
                    "state" : false,
                    "description" : "一張放隨身包、一張放行李箱"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "2寸大頭貼",
                    "state" : false,
                    "description" : "2張"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "外幣",
                    "state" : false,
                    "description" : "日幣換 xxx 元"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "信用卡",
                    "state" : false,
                    "description" : "準備2~3張，備好信用卡遺失聯絡電話"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "信用卡2",
                    "state" : false,
                    "description" : "一張存在 Apple pay 並放在家裡"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "提款卡",
                    "state" : false,
                    "description" : "開啟跨國外幣提領功能"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "車票",
                    "state" : false,
                    "description" : ""
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "景點票券",
                    "state" : false,
                    "description" : ""
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "搭機小物",
                    "state" : false,
                    "description" : "眼罩、耳塞、頸枕、毛毯、閱讀刊物"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "隨身小物",
                    "state" : false,
                    "description" : "防盜腰包、密碼鎖、環保杯、環保餐具"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "行李秤",
                    "state" : false,
                    "description" : ""
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "原子筆",
                    "state" : false,
                    "description" : "2支(寫入境表用)"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "網卡",
                    "state" : false,
                    "description" : "視個人需求(有買漫遊就不需要)"
                },
                {
                    "type" : "衣物",
                    "name" : "衣、褲、裙",
                    "state" : false,
                    "description" : "6件衣服、3件褲子or裙子"
                },
                {
                    "type" : "衣物",
                    "name" : "內衣褲",
                    "state" : false,
                    "description" : "各5件"
                },
                {
                    "type" : "衣物",
                    "name" : "雪襪",
                    "state" : false,
                    "description" : "4雙"
                },
                {
                    "type" : "衣物",
                    "name" : "鞋子、拖鞋",
                    "state" : false,
                    "description" : "1雙休閒鞋、1雙拖鞋"
                },
                {
                    "type" : "3C 產品",
                    "name" : "手機",
                    "state" : false,
                    "description" : "充電線、充電頭、手機掛繩"
                },
                {
                    "type" : "3C 產品",
                    "name" : "相機、360 相機",
                    "state" : false,
                    "description" : "記憶卡*2、電池*2、腳架、充電器"
                },
                {
                    "type" : "3C 產品",
                    "name" : "行動電源",
                    "state" : false,
                    "description" : ""
                },
                {
                    "type" : "3C 產品",
                    "name" : "萬國插座變壓器",
                    "state" : false,
                    "description" : ""
                },
                {
                    "type" : "生活類",
                    "name" : "盥洗用品",
                    "state" : false,
                    "description" : "牙刷、牙膏、牙線、牙籤、棉花棒、洗面乳"
                }
            ]
        };
        let dataStr = JSON.stringify(data);
        localStorage.setItem('travelList', dataStr);
    }

    let dataArr = JSON.parse(localStorage.getItem('travelList'));
    const container = $("#showContent");
    
    // 初始
    function init(){
        // 獲取所有 types 並去重
        let getTypes = [...new Set(dataArr.items.map(item => item.type))];
        
        // 建立內容並插入網頁
        let content = getTypes.map((type, index) => `
            <div class="pst-r mb-2">
                <h2 class="font-lg mb-0">${dataArr.types[index].name}</h2>
                <p class="font-md">${dataArr.types[index].description}</p>
                <div class="checkBox row gap-2 justify-flex-start"></div>
            </div>
            <hr class="mt-2 mb-2">
        `).join('');
        $(container).html(content);
        
        // 插入 items 到相應的 checkBox
        let checkBox = $(".checkBox");
        dataArr.items.forEach((item, i) => {
            let currentState =  dataArr.items[i].state;
            let itemHTML = `
                <label class="pst-r col-12-xs col-6-sm col-4-lg col-3-xl" for="checkbox-nested-${i}">
                    <input data-num=${i} type="checkbox" name="checkbox-nested-${i}" id="checkbox-nested-${i}" ${currentState ? 'checked' : ''}>
                    <span class="ml-1">${item.name}</span>
                    <p class="text-gray">${item.description}</p>
                    <a class="pst-a t-2 r-2" href="#"><img class="display-b" src="https://fakeimg.pl/21" alt=""></a>
                </label>
            `;
            let typeIndex = getTypes.indexOf(item.type);
            if (typeIndex !== -1) {
                $(checkBox[typeIndex]).append(itemHTML);
            }
            
        });
    };
    init();

    // 監聽 checkbox 變化並更新狀態
    const inputOj = $("input");
    inputOj.on("change", function(e){
        const getNum = e.target.getAttribute("data-num");
        let currentState = e.target.checked;
        
        // 更新數據
        dataArr.items[getNum].state = currentState;
        
        // 儲存到 localStorage
        dataStr = JSON.stringify(dataArr);
        localStorage.setItem('travelList', dataStr);
    });

});