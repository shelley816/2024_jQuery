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
                    "name" : "3C 產品",
                    "description" : "電池要放隨身行李"
                },
                {
                    "name" : "衣物",
                    "description" : ""
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
                    "detail" : ""
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "護照影本",
                    "state" : false,
                    "detail" : "一張放隨身包、一張放行李箱"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "2寸大頭貼",
                    "state" : false,
                    "detail" : "2張"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "外幣",
                    "state" : false,
                    "detail" : "日幣換 xxx 元"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "信用卡",
                    "state" : false,
                    "detail" : "準備2~3張，備好信用卡遺失聯絡電話"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "信用卡2",
                    "state" : false,
                    "detail" : "一張存在 Apple pay 並放在家裡"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "提款卡",
                    "state" : false,
                    "detail" : "開啟跨國外幣提領功能"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "車票",
                    "state" : false,
                    "detail" : ""
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "景點票券",
                    "state" : false,
                    "detail" : ""
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "搭機小物",
                    "state" : false,
                    "detail" : "眼罩、耳塞、頸枕、毛毯、閱讀刊物"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "隨身小物",
                    "state" : false,
                    "detail" : "防盜腰包、密碼鎖、環保杯、環保餐具"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "行李秤",
                    "state" : false,
                    "detail" : ""
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "原子筆",
                    "state" : false,
                    "detail" : "2支(寫入境表用)"
                },
                {
                    "type" : "搭機必備物品",
                    "name" : "網卡",
                    "state" : false,
                    "detail" : "視個人需求(有買漫遊就不需要)"
                },
                {
                    "type" : "3C 產品",
                    "name" : "手機",
                    "state" : false,
                    "detail" : "充電線、充電頭、手機掛繩"
                },
                {
                    "type" : "3C 產品",
                    "name" : "相機、360 相機",
                    "state" : false,
                    "detail" : "記憶卡*2、電池*2、腳架、充電器"
                },
                {
                    "type" : "3C 產品",
                    "name" : "行動電源",
                    "state" : false,
                    "detail" : ""
                },
                {
                    "type" : "3C 產品",
                    "name" : "萬國插座變壓器",
                    "state" : false,
                    "detail" : ""
                },
                {
                    "type" : "衣物",
                    "name" : "衣、褲、裙",
                    "state" : false,
                    "detail" : "6件衣服、3件褲子or裙子"
                },
                {
                    "type" : "衣物",
                    "name" : "內衣褲",
                    "state" : false,
                    "detail" : "各5件"
                },
                {
                    "type" : "衣物",
                    "name" : "雪襪",
                    "state" : false,
                    "detail" : "4雙"
                },
                {
                    "type" : "衣物",
                    "name" : "鞋子、拖鞋",
                    "state" : false,
                    "detail" : "1雙休閒鞋、1雙拖鞋"
                },
                {
                    "type" : "衣物",
                    "name" : "外套",
                    "state" : false,
                    "detail" : "防曬薄外套、保暖厚外套"
                },
                {
                    "type" : "衣物",
                    "name" : "遮陽帽",
                    "state" : false,
                    "detail" : ""
                },
                {
                    "type" : "生活類",
                    "name" : "盥洗用品",
                    "state" : false,
                    "detail" : "牙刷、牙膏、牙線、牙籤、棉花棒、洗面乳"
                },
                {
                    "type" : "生活類",
                    "name" : "護理用品",
                    "state" : false,
                    "detail" : "消毒酒精、口罩、ok蹦、濕紙巾、衛生紙、防蚊液"
                },
                {
                    "type" : "生活類",
                    "name" : "防曬用品",
                    "state" : false,
                    "detail" : "太陽眼鏡、防曬乳"
                },
                {
                    "type" : "生活類",
                    "name" : "個人藥品",
                    "state" : false,
                    "detail" : "暈車藥、感冒藥、B群、維他命C"
                },
                {
                    "type" : "生活類",
                    "name" : "保養品",
                    "state" : false,
                    "detail" : "化妝水、保濕、精華液、乳液"
                },
                {
                    "type" : "生活類",
                    "name" : "卸妝",
                    "state" : false,
                    "detail" : "卸妝水、卸妝棉"
                },
                {
                    "type" : "生活類",
                    "name" : "化妝",
                    "state" : false,
                    "detail" : "底妝、眼線、眼影、粉餅、口紅、遮瑕"
                },
                {
                    "type" : "生活類",
                    "name" : "生理用品",
                    "state" : false,
                    "detail" : ""
                },
                {
                    "type" : "生活類",
                    "name" : "其他",
                    "state" : false,
                    "detail" : "環保餐盒、膠帶"
                }
            ]
        };
        let dataStr = JSON.stringify(data);
        localStorage.setItem('travelList', dataStr);
    }

    let dataArr = JSON.parse(localStorage.getItem('travelList'));
    const container = $("#showContent");

    // 獲取所有 types 並去重
    let getTypes = [...new Set(dataArr.items.map(item => item.type))];
    
    // 初始
    function init(){
        
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
                <label class="pst-r col-12-xs col-6-sm col-4-lg col-3-xl ${currentState ? 'bg-primary-light-8' : ''}" for="checkbox-nested-${i}">
                    <input data-num=${i} type="checkbox" name="checkbox-nested-${i}" id="checkbox-nested-${i}" ${currentState ? 'checked' : ''}>
                    <span class="ml-1">${item.name}</span>
                    <p class="text-gray mt-1">${item.detail}</p>
                    <a class="pst-a t-1 r-1" href="#"><img class="display-b" src="img/icon_travel_01.png" alt=""></a>
                </label>
            `;
            let typeIndex = getTypes.indexOf(item.type);
            if (typeIndex !== -1) {
                $(checkBox[typeIndex]).append(itemHTML);
            }
            
        });
    };
    init();
    
    // 監聽 checkbox 變化並更新狀態（使用事件委派）
    $(document).on("change", "input[type=checkbox]", function(e){
        const getNum = e.target.getAttribute("data-num");
        let currentState = e.target.checked;

        // 更新數據, UI
        dataArr.items[getNum].state = currentState;
        $(this).parent().addClass("bg-primary-light-8");
        if(!currentState){
            $(this).parent().removeClass("bg-primary-light-8");
        }

        // 儲存到 localStorage
        dataStr = JSON.stringify(dataArr);
        localStorage.setItem('travelList', dataStr);
    });

    // 新增物品
    const addBtn = $("#addButton");
    const cancelItemPopup = $("#cancelItemPopup");
    const itemPopup = $("#itemPopup");
    const typesWarp = $("#types");
    const itemNameId = $("#itemName");
    const itemDetailId = $("#itemDetail");
    const textRemindId = $("#textRemind");
    const addItemId = $("#addItem");

    // 顯示表格
    addBtn.on("click", function(e){
        e.preventDefault();

        // 建立內容並插入網頁
        let content = `<option value="">請選擇類型</option>` +  getTypes.map((type, index) => `<option>${dataArr.types[index].name}</option>`).join('');
        $(typesWarp).html(content);

        // 顯示 UI
        $(itemPopup).fadeIn();
    });

    // 關閉 Popup
    cancelItemPopup.on("click", function(e){
        e.preventDefault();
        $(itemPopup).fadeOut();
    });

    // 偵測 <option> 是否改變
    let hasChanged = false;  // 變量來追蹤是否發生了 change 事件
    $(typesWarp).on("change", function() {
        hasChanged = true;  // 當發生 change 時，標記為 true
    });

    //新增物品 + 更新資料
    addItemId.on("click", function(e){
        let typesVal = $(typesWarp).val();
        let itemNameVal = $(itemNameId).val();
        let itemDetailVal = $(itemDetailId).val();

        e.preventDefault();
        // 檢查是否已經選擇了類型（也就是是否有 change）
        if (!hasChanged) {
            $(textRemindId).html("*請選擇類型");
            return;
        };

        // console.log(typeof(itemNameValue));
        if (!itemNameId || itemNameVal.length === 0) {
            $(textRemindId).html("*請輸入物品名稱");
            return;
        }

        let record = {
            "type" : typesVal,
            "name" : itemNameVal,
            "state" : false,
            "detail" : itemDetailVal
        };
        dataArr.items.push(record);
        dataStr = JSON.stringify(dataArr);
        localStorage.setItem('travelList', dataStr);
        $(itemPopup).fadeOut();
        init();

        typesVal = "";
        itemNameVal = "";
        itemDetailVal = "";
    });

});