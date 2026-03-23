window.DATA = {
    // 這裡記錄「整趟旅程」的大時間軸
    events: [
        {
            date: "旅程起始日期<br>結束日期", 
            text: "旅程名稱（例如：日本賞櫻之旅）", 
            countryCandidates: ["國家代碼，如 jp"], 
            home: ["起始點ID"], 
            markerIds: ["標點ID1", "標點ID2"], // 這裡放下面出現過的所有標點 ID
            eventMarkers: [
                { 
                    id: "起始點ID", 
                    date: "YYYY-MM-DD", 
                    city: "城市名稱", 
                    type: "start", // 起點
                    link: "", 
                    labelOffset: { x: 2, y: 0 }, 
                    desc: "這趟旅程的開端...", 
                    notes: [
                        { photo: "照片路徑/photo1.jpg", text: "在這裡發生的第一個小故事" }
                    ]
                },
                { 
                    id: "標點ID2", 
                    city: "下一個城市", 
                    date: "YYYY-MM-DD", 
                    type: "waypoint", // 途經點
                    link: "", 
                    labelOffset: { x: 0, y: 1.5 }, 
                    desc: "在這個城市玩了什麼...", 
                    notes: [
                        { title: "景點名稱", photo: "照片路徑/photo2.jpg", text: "這個景點的有趣回憶" }
                    ]
                }
            ]
        }
    ],

    // 這裡決定地圖上哪些國家要亮起來
    activeCountries: [
        { name: "國家名稱", center: [緯度數字, 經度數字], link: "" }
    ],

    // 這裡存放地圖上「點」的詳細座標資訊
    markers: {
        home: [
            { 
                id: "起始點ID", 
                x: 0, y: 0, // 這是你的地圖底圖座標，小龍蝦會幫你計算
                city: "城市名稱", 
                center: [緯度, 經度], 
                img: "封面照片路徑", 
                desc: "對這個地點的總結描述", 
                pins: [
                    {
                        loc: [緯度, 經度], 
                        date: "YYYY-MM-DD", 
                        t: "具體地點名稱", 
                        cat: "類別（如 square, church）", 
                        photo1: "照片路徑", 
                        text1: "故事內容"
                    }
                ]
            }
        ]
        // 這裡可以根據需要增加國家代碼，例如 jp: [], fr: []
    }
};
