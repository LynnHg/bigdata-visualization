/**
 * @type Jannchie
 * @email jannchie@gmail.com
 * @create date 2018-05-02 13:17:10
 * @modify date 2019-03-20 15:17:24
 * @desc Visual core code
 */

// import * as d3 from 'd3';
// require("./stylesheet.css");

// $("#inputfile").change(function () {
// $("#inputfile").attr("hidden", true);
// var r = new FileReader();
// r.readAsText(this.files[0], config1.encoding);
window.onload = function() {
    //读取完成后，数据保存在对象的result属性中
    var data1 = [
        { "": "37", name: " Node.js", type: " ", value: "8461", date: "2016" },
        { "": "38", name: " C#", type: " ", value: "7999", date: "2016" },
        { "": "39", name: "C#", type: " ", value: "7284", date: "2016" },
        { "": "30", name: " JavaScript", type: " ", value: "22606", date: "2016" },
        { "": "31", name: " SQL", type: " ", value: "21664", date: "2016" },
        { "": "32", name: " Java", type: " ", value: "13657", date: "2016" },
        { "": "33", name: " PHP", type: " ", value: "12177", date: "2016" },
        { "": "35", name: " SQL Server", type: " ", value: "9250", date: "2016" },
        { "": "35", name: " SQL Server", type: " ", value: "9250", date: "2016" },
        { "": "36", name: "Android", type: " ", value: "8601", date: "2016" },
        { "": "34", name: " Python", type: " ", value: "11374", date: "2016" },
        { "": "21", name: " JavaScript", type: " ", value: "17159", date: "2017" },
        { "": "22", name: " Python", type: " ", value: "10719", date: "2017" },
        { "": "23", name: " PHP", type: " ", value: "9765", date: "2017" },
        { "": "24", name: " Java", type: " ", value: "8622", date: "2017" },
        { "": "25", name: "C#", type: " ", value: "8596", date: "2017" },
        { "": "20", name: " SQL", type: " ", value: "18466", date: "2017" },
        { "": "26", name: "Java", type: " ", value: "5902", date: "2017" },
        { "": "27", name: "JavaScript", type: " ", value: "5716", date: "2017" },
        { "": "28", name: "C", type: " ", value: "5563", date: "2017" },
        { "": "29", name: " C++", type: " ", value: "4628", date: "2017" },
        { "": "10", name: "JavaScript", type: " ", value: "54686", date: "2018" },
        { "": "11", name: "HTML", type: " ", value: "53628", date: "2018" },
        { "": "12", name: "CSS", type: " ", value: "50979", date: "2018" },
        { "": "13", name: "SQL", type: " ", value: "44670", date: "2018" },
        { "": "14", name: "Java", type: " ", value: "35521", date: "2018" },
        { "": "15", name: "Bash/Shell", type: " ", value: "31172", date: "2018" },
        { "": "16", name: "Python", type: " ", value: "30359", date: "2018" },
        { "": "19", name: "C++", type: " ", value: "19872", date: "2018" },
        { "": "17", name: "C#", type: " ", value: "26954", date: "2018" },
        { "": "18", name: "PHP", type: " ", value: "24071", date: "2018" },
        { "": "0", name: "JavaScript", type: " ", value: "59219", date: "2019" },
        { "": "1", name: "HTML/CSS", type: " ", value: "55466", date: "2019" },
        { "": "2", name: "SQL", type: " ", value: "47544", date: "2019" },
        { "": "3", name: "Python", type: " ", value: "36443", date: "2019" },
        { "": "4", name: "Java", type: " ", value: "35917", date: "2019" },
        { "": "5", name: "Bash/Shell/PowerShell", type: " ", value: "31991", date: "2019" },
        { "": "6", name: "C#", type: " ", value: "27097", date: "2019" },
        { "": "7", name: "PHP", type: " ", value: "23030", date: "2019" },
        { "": "8", name: "C++", type: " ", value: "20524", date: "2019" },
        { "": "9", name: "TypeScript", type: " ", value: "18523", date: "2019" }
    ]
    var data2 = [

        { "": "7", name: "Notepad++", type: " ", value: "14729", date: "2016" },
        { "": "8", name: "Sublime", type: " ", value: "9057", date: "2016" },
        { "": "1", name: " Eclipse", type: " ", value: "8865", date: "2016" },
        { "": "4", name: " Vim", type: " ", value: "7544", date: "2016" },
        { "": "2", name: " IntelliJ", type: " ", value: "6986", date: "2016" },
        { "": "6", name: "Atom", type: " ", value: "5825", date: "2016" },
        { "": "3", name: " Sublime", type: " ", value: "5377", date: "2016" },
        { "": "0", name: " Android Studio", type: " ", value: "4754", date: "2016" },
        { "": "9", name: "Vim", type: " ", value: "4636", date: "2016" },
        { "": "5", name: " Visual Studio", type: " ", value: "13869", date: "2016" },


        { "": "15", name: " Visual Studio", type: " ", value: "11179", date: "2017" },
        { "": "18", name: "Notepad++", type: " ", value: "10574", date: "2017" },

        { "": "11", name: " Eclipse", type: " ", value: "6759", date: "2017" },
        { "": "12", name: " IntelliJ", type: " ", value: "6547", date: "2017" },
        { "": "16", name: " Visual Studio Code", type: " ", value: "6547", date: "2017" },
        { "": "17", name: "Atom", type: " ", value: "6540", date: "2017" },
        { "": "14", name: " Vim", type: " ", value: "6079", date: "2017" },
        { "": "19", name: "Sublime Text", type: " ", value: "5674", date: "2017" },
        { "": "10", name: " Android Studio", type: " ", value: "4687", date: "2017" },
        { "": "13", name: " Sublime Text", type: " ", value: "4304", date: "2017" },


        { "": "29", name: "Visual Studio Code", type: " ", value: "26280", date: "2018" },
        { "": "28", name: "Visual Studio", type: " ", value: "25870", date: "2018" },
        { "": "24", name: "Notepad++", type: " ", value: "25755", date: "2018" },
        { "": "26", name: "Sublime Text", type: " ", value: "21810", date: "2018" },
        { "": "27", name: "Vim", type: " ", value: "19477", date: "2018" },
        { "": "23", name: "IntelliJ", type: " ", value: "18765", date: "2018" },
        { "": "20", name: "Android Studio", type: " ", value: "14558", date: "2018" },
        { "": "22", name: "Eclipse", type: " ", value: "14213", date: "2018" },
        { "": "21", name: "Atom", type: " ", value: "13576", date: "2018" },
        { "": "25", name: "PyCharm", type: " ", value: "9027", date: "2018" },


        { "": "39", name: "Visual Studio Code", type: " ", value: "44311", date: "2019" },
        { "": "38", name: "Visual Studio", type: " ", value: "27490", date: "2019" },
        { "": "34", name: "Notepad++", type: " ", value: "26621", date: "2019" },
        { "": "33", name: "IntelliJ", type: " ", value: "22166", date: "2019" },
        { "": "37", name: "Vim", type: " ", value: "22163", date: "2019" },
        { "": "36", name: "Sublime Text", type: " ", value: "20424", date: "2019" },
        { "": "30", name: "Android Studio", type: " ", value: "14787", date: "2019" },
        { "": "32", name: "Eclipse", type: " ", value: "12591", date: "2019" },
        { "": "35", name: "PyCharm", type: " ", value: "11724", date: "2019" },
        { "": "31", name: "Atom", type: " ", value: "11636", date: "2019" },


    ]

    var data3 = [

        { "": "9", name: "SQL Server", type: " ", value: "8847", date: "2016" },

        { "": "0", name: " MySQL", type: " ", value: "8712", date: "2016" },

        { "": "6", name: "MySQL", type: " ", value: "7663", date: "2016" },


        { "": "4", name: " SQLite", type: " ", value: "6806", date: "2016" },

        { "": "2", name: " PostgreSQL", type: " ", value: "5988", date: "2016" },

        { "": "5", name: "MongoDB", type: " ", value: "5840", date: "2016" },


        { "": "1", name: " Oracle", type: " ", value: "3878", date: "2016" },

        { "": "3", name: " SQL Server", type: " ", value: "2511", date: "2016" },

        { "": "8", name: "Redis", type: " ", value: "2341", date: "2016" },

        { "": "7", name: "PostgreSQL", type: " ", value: "1827", date: "2016" },


        { "": "19", name: "SQL Server", type: " ", value: "8847", date: "2017" },
        { "": "10", name: " MySQL", type: " ", value: "8712", date: "2017" },
        { "": "16", name: "MySQL", type: " ", value: "7663", date: "2017" },
        { "": "14", name: " SQLite", type: " ", value: "6806", date: "2017" },
        { "": "12", name: " PostgreSQL", type: " ", value: "5988", date: "2017" },
        { "": "15", name: "MongoDB", type: " ", value: "5840", date: "2017" },
        { "": "11", name: " Oracle", type: " ", value: "3878", date: "2017" },
        { "": "13", name: " SQL Server", type: " ", value: "2511", date: "2017" },
        { "": "18", name: "Redis", type: " ", value: "2341", date: "2017" },
        { "": "17", name: "PostgreSQL", type: " ", value: "1827", date: "2017" },

        { "": "24", name: "MySQL", type: " ", value: "38909", date: "2018" },
        { "": "28", name: "SQL Server", type: " ", value: "27293", date: "2018" },



        { "": "26", name: "PostgreSQL", type: " ", value: "21776", date: "2018" },

        { "": "23", name: "MongoDB", type: " ", value: "17183", date: "2018" },

        { "": "29", name: "SQLite", type: " ", value: "13036", date: "2018" },

        { "": "25", name: "Oracle", type: " ", value: "7376", date: "2018" },
        { "": "27", name: "Redis", type: " ", value: "11944", date: "2018" },
        { "": "22", name: "Microsoft Azure (Tables, CosmosDB, SQL, etc)", type: " ", value: "5203", date: "2018" },
        { "": "20", name: "Elasticsearch", type: " ", value: "9312", date: "2018" },
        { "": "21", name: "MariaDB", type: " ", value: "8853", date: "2018" },

        { "": "35", name: "MySQL", type: " ", value: "40537", date: "2019" },
        { "": "37", name: "PostgreSQL", type: " ", value: "25758", date: "2019" },
        { "": "33", name: "Microsoft SQL Server", type: " ", value: "24590", date: "2019" },
        { "": "39", name: "SQLite", type: " ", value: "23713", date: "2019" },
        { "": "34", name: "MongoDB", type: " ", value: "19100", date: "2019" },
        { "": "38", name: "Redis", type: " ", value: "13971", date: "2019" },
        { "": "32", name: "MariaDB", type: " ", value: "12401", date: "2019" },
        { "": "36", name: "Oracle", type: " ", value: "12353", date: "2019" },
        { "": "30", name: "Elasticsearch", type: " ", value: "10720", date: "2019" },
        { "": "31", name: "Firebase", type: " ", value: "9612", date: "2019" },

    ]

    var data4 = [
        { "": "7", name: "Android", type: " ", value: "8211", date: "2017" },
        { "": "9", name: "Windows Desktop", type: " ", value: "8002", date: "2017" },
        { "": "12", name: "Azure", type: " ", value: "7267", date: "2018" },
        { "": "0", name: " Amazon Web Services (AWS)", type: " ", value: "6263", date: "2017" },
        { "": "1", name: " Linux Desktop", type: " ", value: "5718", date: "2017" },
        { "": "2", name: " Mac OS", type: " ", value: "4258", date: "2017" },
        { "": "3", name: " Raspberry Pi", type: " ", value: "4109", date: "2017" },
        { "": "4", name: " Windows Desktop", type: " ", value: "3947", date: "2017" },
        { "": "8", name: "Linux Desktop", type: " ", value: "3875", date: "2017" },
        { "": "5", name: " WordPress", type: " ", value: "3466", date: "2017" },
        { "": "6", name: " iOS", type: " ", value: "2720", date: "2017" },

        { "": "14", name: "Linux", type: " ", value: "31859", date: "2018" },
        { "": "17", name: "Windows Desktop or Server", type: " ", value: "23393", date: "2018" },
        { "": "11", name: "Android", type: " ", value: "19157", date: "2018" },
        { "": "10", name: "AWS", type: " ", value: "15927", date: "2018" },
        { "": "15", name: "Mac OS", type: " ", value: "11822", date: "2018" },
        { "": "16", name: "Raspberry Pi", type: " ", value: "10509", date: "2018" },
        { "": "18", name: "WordPress", type: " ", value: "10486", date: "2018" },
        { "": "19", name: "iOS", type: " ", value: "10201", date: "2018" },
        { "": "13", name: "Firebase", type: " ", value: "9575", date: "2018" },

        { "": "23", name: "Linux", type: " ", value: "42753", date: "2019" },
        { "": "27", name: "Windows", type: " ", value: "40630", date: "2019" },

        { "": "22", name: "Docker", type: " ", value: "25212", date: "2019" },

        { "": "21", name: "Android", type: " ", value: "21639", date: "2019" },
        { "": "20", name: "AWS", type: " ", value: "21304", date: "2019" },

        { "": "24", name: "MacOS", type: " ", value: "17806", date: "2019" },
        { "": "26", name: "Slack", type: " ", value: "16723", date: "2019" },

        { "": "25", name: "Raspberry Pi", type: " ", value: "12183", date: "2019" },

        { "": "28", name: "WordPress", type: " ", value: "11595", date: "2019" },

        { "": "29", name: "iOS", type: " ", value: "10446", date: "2019" },



    ]

    try {
        draw1(data1);
        draw2(data2);
        draw3(data3);
        draw4(data4);

    } catch (error) {
        alert(error);
    }
};
// });

function draw1(data) {
    var date = [];
    data.forEach(element => {
        if (date.indexOf(element["date"]) == -1) {
            date.push(element["date"]);
        }
    });
    let rate = [];
    var auto_sort = config1.auto_sort;
    if (auto_sort) {
        var time = date.sort((x, y) => new Date(x) - new Date(y));
    } else {
        var time = date;
    }
    var use_semilogarithmic_coordinate = config1.use_semilogarithmic_coordinate;
    var big_value = config1.big_value;
    var divide_by = config1.divide_by;
    var divide_color_by = config1.divide_color_by;
    var name_list = [];
    var changeable_color = config1.changeable_color;
    var divide_changeable_color_by_type = config1.divide_changeable_color_by_type;
    data
        .sort((a, b) => Number(b.value) - Number(a.value))
        .forEach(e => {
            if (name_list.indexOf(e.name) == -1) {
                name_list.push(e.name);
            }
        });
    var baseTime = 6000;

    // 选择颜色
    function getColor(d) {
        var r = 0.0;
        if (changeable_color) {
            var colorRange = d3.interpolateCubehelix(config1.color_range[0], config1.color_range[1]);
            if (divide_changeable_color_by_type && d["type"] in config1.color_ranges) {
                var colorRange = d3.interpolateCubehelix(config1.color_ranges[d["type"]][0], config1.color_ranges[d["type"]][1]);
            }
            var v =
                Math.abs(rate[d.name] - rate["MIN_RATE"]) /
                (rate["MAX_RATE"] - rate["MIN_RATE"]);
            if (isNaN(v) || v == -1) {
                return colorRange(0.6);
            }
            return colorRange(v);
        }

        if (d[divide_color_by] in config1.color)
            return config1.color[d[divide_color_by]];
        else {
            return d3.schemeCategory10[
                Math.floor(d[divide_color_by].charCodeAt() % 10)
            ];
        }
    }

    var showMessage = config1.showMessage;
    var allow_up = config1.allow_up;
    var always_up = config1.always_up;
    var interval_time = config1.interval_time;
    var text_y = config1.text_y;
    var itemLabel = config1.itemLabel;
    var typeLabel = config1.typeLabel;
    // 长度小于display_barInfo的bar将不显示barInfo
    var display_barInfo = config1.display_barInfo;
    // 显示类型
    if (config1.use_type_info) {
        var use_type_info = config1.use_type_info;
    } else if (divide_by != "name") {
        var use_type_info = true;
    } else {
        var use_type_info = false;
    }
    // 使用计数器
    var use_counter = config1.use_counter;
    // 每个数据的间隔日期
    var step = config1.step;
    var long = config1.long;
    var format = config1.format;
    var left_margin = config1.left_margin;
    var right_margin = config1.right_margin;
    var top_margin = config1.top_margin;
    var bottom_margin = config1.bottom_margin;
    var timeFormat = config1.timeFormat;
    var item_x = config1.item_x;
    var max_number = config1.max_number;
    var reverse = config1.reverse;
    var text_x = config1.text_x;
    var offset = config1.offset;
    var animation = config1.animation;
    var deformat = config1.deformat;
    config1.imgs = Object.assign(config1.imgs, external_imgs);

    const margin = {
        left: left_margin,
        right: right_margin,
        top: top_margin,
        bottom: bottom_margin
    };
    var background_color = config1.background_color;

    d3.select("body").attr("style", "background:" + background_color);

    var enter_from_0 = config1.enter_from_0;
    interval_time /= 3;
    var lastData = [];
    var currentdate = time[0].toString();
    var currentData = [];
    var lastname;
    const svg = d3.select("svg");

    const width = svg.attr("width");
    const height = svg.attr("height");
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom - 32;
    //var dateLabel_y = height - margin.top - margin.bottom - 32;;
    const xValue = d => Number(d.value);
    const yValue = d => d.name;

    const g = svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    const xAxisG = g
        .append("g")
        .attr("transform", `translate(0, ${innerHeight})`);
    const yAxisG = g.append("g");

    xAxisG
        .append("text")
        .attr("class", "axis-label")
        .attr("x", innerWidth / 2)
        .attr("y", 100);

    var xScale = d3.scaleLinear();
    if (use_semilogarithmic_coordinate) {
        xScale = d3.scalePow().exponent(0.5);
    } else {
        xScale = d3.scaleLinear();
    }
    const yScale = d3
        .scaleBand()
        .paddingInner(0.3)
        .paddingOuter(0);

    const xTicks = 10;
    const xAxis = d3
        .axisBottom()
        .scale(xScale)
        .ticks(xTicks)
        .tickPadding(20)
        .tickFormat(d => {
            if (d <= 0) {
                return "";
            }
            return d;
        })
        .tickSize(-innerHeight);

    const yAxis = d3
        .axisLeft()
        .scale(yScale)
        .tickPadding(5)
        .tickSize(-innerWidth);

    var dateLabel_switch = config1.dateLabel_switch;
    var dateLabel_x = config1.dateLabel_x;
    var dateLabel_y = config1.dateLabel_y;
    //dateLabel位置
    if (dateLabel_x == null || dateLabel_y == null) {
        dateLabel_x = innerWidth; //默认
        dateLabel_y = innerHeight; //默认
    } //是否隐藏
    if (dateLabel_switch == false) {
        dateLabel_switch = "hidden";
    } else {
        dateLabel_switch = "visible";
    }

    var dateLabel = g
        .insert("text")
        .data(currentdate)
        .attr("class", "dateLabel")
        .attr("style:visibility", dateLabel_switch)
        .attr("x", dateLabel_x)
        .attr("y", dateLabel_y)
        .attr("text-anchor", function() {
            return "end";
        })
        .text(currentdate);

    var topLabel = g
        .insert("text")
        .attr("class", "topLabel")
        .attr("x", item_x)
        .attr("y", text_y);

    function dataSort() {
        if (reverse) {
            currentData.sort(function(a, b) {
                if (Number(a.value) == Number(b.value)) {
                    var r1 = 0;
                    var r2 = 0;
                    for (let index = 0; index < a.name.length; index++) {
                        r1 = r1 + a.name.charCodeAt(index);
                    }
                    for (let index = 0; index < b.name.length; index++) {
                        r2 = r2 + b.name.charCodeAt(index);
                    }
                    return r2 - r1;
                } else {
                    return Number(a.value) - Number(b.value);
                }
            });
        } else {
            currentData.sort(function(a, b) {
                if (Number(a.value) == Number(b.value)) {
                    var r1 = 0;
                    var r2 = 0;
                    for (let index = 0; index < a.name.length; index++) {
                        r1 = r1 + a.name.charCodeAt(index);
                    }
                    for (let index = 0; index < b.name.length; index++) {
                        r2 = r2 + b.name.charCodeAt(index);
                    }
                    return r2 - r1;
                } else {
                    return Number(b.value) - Number(a.value);
                }
            });
        }
    }

    function getCurrentData(date) {
        rate = [];
        currentData = [];
        indexList = [];

        data.forEach(element => {
            if (element["date"] == date && parseFloat(element["value"]) != 0) {
                if (element.name.length > config1.bar_name_max) {
                    tail = "...";
                } else {
                    tail = "";
                }
                element.name = element.name.slice(0, config1.bar_name_max - 1) + tail;
                currentData.push(element);
            }
        });

        rate["MAX_RATE"] = 0;
        rate["MIN_RATE"] = 1;
        currentData.forEach(e => {
            _cName = e.name;
            lastData.forEach(el => {
                if (el.name == e.name) {
                    rate[e.name] = Number(Number(e.value) - Number(el.value));
                }
            });
            if (rate[e.name] == undefined) {
                rate[e.name] = rate["MIN_RATE"];
            }
            if (rate[e.name] > rate["MAX_RATE"]) {
                rate["MAX_RATE"] = rate[e.name];
            } else if (rate[e.name] < rate["MIN_RATE"]) {
                rate["MIN_RATE"] = rate[e.name];
            }
        });
        currentData = currentData.slice(0, max_number);
        dataSort();

        d3.transition("2")
            .each(redraw)
            .each(change);
        lastData = currentData;
    }

    if (showMessage) {
        // 左1文字
        var topInfo = g
            .insert("text")
            .attr("class", "growth")
            .attr("x", 0)
            .attr("y", text_y)
            .text(itemLabel);

        // 右1文字
        g.insert("text")
            .attr("class", "growth")
            .attr("x", text_x)
            .attr("y", text_y)
            .text(typeLabel);

        // 榜首日期计数
        if (use_counter == true) {
            var days = g
                .insert("text")
                .attr("class", "days")
                .attr("x", text_x + offset)
                .attr("y", text_y);
        } else {
            // 显示榜首type
            if (use_type_info == true) {
                var top_type = g
                    .insert("text")
                    .attr("class", "days")
                    .attr("x", text_x + offset)
                    .attr("y", text_y);
            }
        }
    }

    var lastname;
    var counter = {
        value: 1
    };

    var avg = 0;
    var enter_from_now = true;

    function redraw() {
        if (currentData.length == 0) return;
        // yScale
        //     .domain(currentData.map(d => d.name).reverse())
        //     .range([innerHeight, 0]);
        // x轴范围
        // 如果所有数字很大导致拉不开差距

        if (big_value) {
            xScale
                .domain([
                    2 * d3.min(currentData, xValue) - d3.max(currentData, xValue),
                    d3.max(currentData, xValue) + 10
                ])
                .range([0, innerWidth]);
        } else {
            xScale
                .domain([0, d3.max(currentData, xValue) + 1])
                .range([0, innerWidth]);
        }
        if (auto_sort) {
            dateLabel
                .data(currentData)
                .transition()
                .duration(baseTime * interval_time)
                .ease(d3.easeLinear)
                .tween("text", function(d) {
                    var self = this;
                    var i = d3.interpolateDate(
                        new Date(self.textContent),
                        new Date(d.date)
                    );
                    // var prec = (new Date(d.date) + "").split(".");
                    // var round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;
                    return function(t) {
                        var dateformat = d3.timeFormat(timeFormat);
                        self.textContent = dateformat(i(t));
                    };
                });
        } else {
            dateLabel.text(currentdate);
        }

        xAxisG
            .transition()
            .duration(baseTime * interval_time)
            .ease(d3.easeLinear)
            .call(xAxis);
        yAxisG
            .transition()
            .duration(baseTime * interval_time)
            .ease(d3.easeLinear)
            .call(yAxis);

        yAxisG.selectAll(".tick").remove();
        if (!config1.show_x_tick) {
            xAxisG.selectAll(".tick").remove();
        }

        yScale
            .domain(currentData.map(d => d.name).reverse())
            .range([innerHeight, 0]);

        var bar = g.selectAll(".bar").data(currentData, function(d) {
            return d.name;
        });

        if (showMessage) {
            // 榜首文字
            topLabel.data(currentData).text(function(d) {
                if (lastname == d.name) {
                    counter.value = counter.value + step;
                } else {
                    counter.value = 1;
                }
                lastname = d.name;
                if (d.name.length > 24) return d.name.slice(0, 23) + "...";
                return d.name;
            });
            if (use_counter == true) {
                // 榜首持续时间更新
                days
                    .data(currentData)
                    .transition()
                    .duration(baseTime * interval_time)
                    .ease(d3.easeLinear)
                    .tween("text", function(d) {
                        var self = this;
                        var i = d3.interpolate(self.textContent, counter.value),
                            prec = (counter.value + "").split("."),
                            round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;

                        return function(t) {
                            self.textContent = d3.format(format)(
                                Math.round(i(t) * round) / round
                            );
                        };
                    });
            } else if (use_type_info == true) {
                // 榜首type更新
                top_type.data(currentData).text(function(d) {
                    return d["type"];
                });
            }
        }

        var barEnter = bar
            .enter()
            .insert("g", ".axis")
            .attr("class", "bar")
            .attr("transform", function(d) {
                return "translate(0," + yScale(yValue(d)) + ")";
            });

        if (config1.use_img) {
            barEnter
                .append("defs")
                .append("pattern")
                .attr("id", d => d.name)
                .attr("width", "100%")
                .attr("height", "100%")
                .append("image")
                .attr("x", "0")
                .attr("y", "0")
                .attr("width", "40")
                .attr("height", "40")
                .attr("href", d => config1.imgs[d.name]);

            barEnter
                .append("circle")
                .attr("fill-opacity", 0)
                .attr("cy", 63)
                .attr('fill', d => "url(#" + encodeURIComponent(d.name).replace("'", "%27").replace("(", "%28").replace(")", "%29") + ")")
                .attr("stroke-width", "0px")
                .transition("a")
                .delay(500 * interval_time)
                .duration(2490 * interval_time)
                .attr("stroke", d => getColor(d))
                .attr("stroke-width", "4px")
                .attr("x", -16)
                .attr("cx", -22)
                .attr("cy", 13)
                .attr("r", 40 / 2)
                .attr("fill-opacity", 1);
        }
        barEnter
            .append("rect")
            .attr("width", function(d) {
                if (enter_from_0) {
                    return 0;
                } else {
                    return xScale(currentData[currentData.length - 1].value);
                }
            })
            .attr("fill-opacity", 0)
            .attr("height", 26)
            .attr("y", 50)
            .style("fill", d => getColor(d))
            .transition("a")
            .delay(500 * interval_time)
            .duration(2490 * interval_time)
            .attr("y", 0)
            .attr("width", d => xScale(xValue(d)))
            .attr("fill-opacity", 1);

        if (config1.rounded_rectangle) {
            d3.selectAll("rect").attr("rx", 13);
        }
        if (config1.showLabel == true) {
            barEnter
                .append("text")
                .attr("y", 50)
                .attr("fill-opacity", 0)
                .style("fill", d => getColor(d))
                .transition("2")
                .delay(500 * interval_time)
                .duration(2490 * interval_time)
                .attr("fill-opacity", 1)
                .attr("y", 0)
                .attr("class", function(d) {
                    return "label ";
                })
                .attr("x", config1.labelx)
                .attr("y", 20)
                .attr("text-anchor", "end")
                .text(function(d) {
                    if (long) {
                        return "";
                    }
                    return d.name;
                });
        }

        // bar上文字
        var barInfo = barEnter
            .append("text")
            .attr("x", function(d) {
                if (long) return 10;
                if (enter_from_0) {
                    return 0;
                } else {
                    return xScale(currentData[currentData.length - 1].value);
                }
            })
            .attr("stroke", d => getColor(d))
            .attr("class", function() {
                return "barInfo";
            })
            .attr("y", 50)
            .attr("stroke-width", "0px")
            .attr("fill-opacity", 0)
            .transition()
            .delay(500 * interval_time)
            .duration(2490 * interval_time)
            .text(function(d) {
                if (use_type_info) {
                    return d[divide_by] + "-" + d.name;
                }
                return d.name;
            })
            .attr("x", d => {
                if (long) return 10;
                return xScale(xValue(d)) - 10;
            })
            .attr("fill-opacity", function(d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return 0;
                }
                return 1;
            })
            .attr("y", 2)
            .attr("dy", ".5em")
            .attr("text-anchor", function() {
                if (long) return "start";
                return "end";
            })
            .attr("stroke-width", function(d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return "0px";
                }
                return "1px";
            });
        if (long) {
            barInfo.tween("text", function(d) {
                var self = this;
                self.textContent = d.value;
                var i = d3.interpolate(self.textContent, Number(d.value)),
                    prec = (Number(d.value) + "").split("."),
                    round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                return function(t) {
                    self.textContent =
                        d[divide_by] +
                        "-" +
                        d.name +
                        "  数值:" +
                        d3.format(format)(Math.round(i(t) * round) / round);
                };
            });
        }
        if (!long) {
            barEnter
                .append("text")
                .attr("x", function() {
                    if (long) {
                        return 10;
                    }
                    if (enter_from_0) {
                        return 0;
                    } else {
                        return xScale(currentData[currentData.length - 1].value);
                    }
                })
                .attr("y", 50)
                .attr("fill-opacity", 0)
                .style("fill", d => getColor(d))
                .transition()
                .duration(2990 * interval_time)
                .tween("text", function(d) {
                    var self = this;
                    // 初始值为d.value的0.9倍
                    self.textContent = d.value * 0.9;
                    var i = d3.interpolate(self.textContent, Number(d.value)),
                        prec = (Number(d.value) + "").split("."),
                        round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                    // d.value = self.textContent
                    return function(t) {
                        self.textContent = d3.format(format)(
                            Math.round(i(t) * round) / round
                        ) + config1.postfix;
                        // d.value = self.textContent
                    };
                })
                .attr("fill-opacity", 1)
                .attr("y", 0)
                .attr("class", function(d) {
                    return "value";
                })
                .attr("x", d => {
                    return xScale(xValue(d)) + 10;
                })
                .attr("y", 22);
        }
        var barUpdate = bar
            .transition("2")
            .duration(2990 * interval_time)
            .ease(d3.easeLinear);

        barUpdate
            .select("rect")
            .style("fill", d => getColor(d))
            .attr("width", d => xScale(xValue(d)));
        if (config1.showLabel == true) {
            barUpdate
                .select(".label")
                .attr("class", function(d) {
                    return "label ";
                })
                .style("fill", d => getColor(d))
                .attr("width", d => xScale(xValue(d)));
        }
        if (!long) {
            barUpdate
                .select(".value")
                .attr("class", function(d) {
                    return "value";
                })
                .style("fill", d => getColor(d))
                .attr("width", d => xScale(xValue(d)));
        }
        barUpdate.select(".barInfo").attr("stroke", function(d) {
            return getColor(d);
        });

        if (config1.use_img) {
            barUpdate.select("circle").attr("stroke", function(d) {
                return getColor(d);
            });
        }

        var barInfo = barUpdate
            .select(".barInfo")
            .text(function(d) {
                if (use_type_info) {
                    return d[divide_by] + "-" + d.name;
                }
                return d.name;
            })
            .attr("x", d => {
                if (long) return 10;
                return xScale(xValue(d)) - 10;
            })
            .attr("fill-opacity", function(d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return 0;
                }
                return 1;
            })
            .attr("stroke-width", function(d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return "0px";
                }
                return "1px";
            });

        if (long) {
            barInfo.tween("text", function(d) {
                var self = this;
                var str = d[divide_by] + "-" + d.name + "  数值:";

                var i = d3.interpolate(
                        self.textContent.slice(str.length, 99),
                        Number(d.value)
                    ),
                    prec = (Number(d.value) + "").split("."),
                    round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                return function(t) {
                    self.textContent =
                        d[divide_by] +
                        "-" +
                        d.name +
                        "  数值:" +
                        d3.format(format)(Math.round(i(t) * round) / round);
                };
            });
        }
        if (!long) {
            barUpdate
                .select(".value")
                .tween("text", function(d) {
                    var self = this;

                    // if postfix is blank, do not slice.
                    if (config1.postfix == "") {
                        var i = d3.interpolate(self.textContent, Number(d.value));
                    } else {
                        var i = d3.interpolate(self.textContent.slice(0, -config1.postfix.length), Number(d.value));
                    }

                    var i = d3.interpolate(deformat(self.textContent, config1.postfix), Number(d.value))

                    var prec = (Number(d.value) + "").split("."),
                        round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                    // d.value = self.textContent
                    return function(t) {
                        self.textContent = d3.format(format)(
                            Math.round(i(t) * round) / round
                        ) + config1.postfix;
                        // d.value = self.textContent
                    };
                })
                .duration(2990 * interval_time)
                .attr("x", d => xScale(xValue(d)) + 10);
        }
        avg =
            (Number(currentData[0]["value"]) +
                Number(currentData[currentData.length - 1]["value"])) /
            2;

        var barExit = bar
            .exit()
            .attr("fill-opacity", 1)
            .transition()
            .duration(2500 * interval_time);
        barExit
            .attr("transform", function(d) {
                if (always_up) {
                    return "translate(0," + "-100" + ")";
                }
                if (Number(d.value) > avg && allow_up) {
                    return "translate(0," + "-100" + ")";
                }
                return "translate(0," + "1000" + ")";
            })
            .remove()
            .attr("fill-opacity", 0);
        barExit
            .select("rect")
            .attr("fill-opacity", 0)
            .attr("width", () => {
                if (always_up) return xScale(0);
                return xScale(currentData[currentData.length - 1]["value"])
            })
        if (!long) {
            barExit
                .select(".value")
                .attr("fill-opacity", 0)
                .attr("x", () => {
                    if (always_up) return xScale(0);
                    return xScale(currentData[currentData.length - 1]["value"]);
                });
        }
        barExit
            .select(".barInfo")
            .attr("fill-opacity", 0)
            .attr("stroke-width", function(d) {
                return "0px";
            })
            .attr("x", () => {
                if (long) return 10;
                if (always_up) return xScale(0);
                return xScale(currentData[currentData.length - 1]["value"]);
            });
        barExit.select(".label").attr("fill-opacity", 0);
        if (config1.use_img) {
            barExit.select("circle").attr("fill-opacity", 0)
        }
    }

    function change() {
        yScale
            .domain(currentData.map(d => d.name).reverse())
            .range([innerHeight, 0]);
        if (animation == "linear") {
            g.selectAll(".bar")
                .data(currentData, function(d) {
                    return d.name;
                })
                .transition("1")
                .ease(d3.easeLinear)
                .duration(baseTime * update_rate * interval_time)
                .attr("transform", function(d) {
                    return "translate(0," + yScale(yValue(d)) + ")";
                });
        } else {
            g.selectAll(".bar")
                .data(currentData, function(d) {
                    return d.name;
                })
                .transition("1")
                .duration(baseTime * update_rate * interval_time)
                .attr("transform", function(d) {
                    return "translate(0," + yScale(yValue(d)) + ")";
                });
        }
    }

    var i = 0;
    var p = config1.wait;
    var update_rate = config1.update_rate;
    var inter = setInterval(function next() {
        // 空过p回合
        while (p) {
            p -= 1;
            return;
        }
        currentdate = time[i];
        getCurrentData(time[i]);
        i++;

        if (i >= time.length) {
            window.clearInterval(inter);
        }
    }, baseTime * interval_time);
    // setInterval(() => {
    //     d3.transition()
    //         .each(change)
    // }, baseTime * update_rate * interval_time)
}

function draw2(data) {
    var date = [];
    data.forEach(element => {
        if (date.indexOf(element["date"]) == -1) {
            date.push(element["date"]);
        }
    });
    let rate = [];
    var auto_sort = config2.auto_sort;
    if (auto_sort) {
        var time = date.sort((x, y) => new Date(x) - new Date(y));
    } else {
        var time = date;
    }
    var use_semilogarithmic_coordinate = config2.use_semilogarithmic_coordinate;
    var big_value = config2.big_value;
    var divide_by = config2.divide_by;
    var divide_color_by = config2.divide_color_by;
    var name_list = [];
    var changeable_color = config2.changeable_color;
    var divide_changeable_color_by_type = config2.divide_changeable_color_by_type;
    data
        .sort((a, b) => Number(b.value) - Number(a.value))
        .forEach(e => {
            if (name_list.indexOf(e.name) == -1) {
                name_list.push(e.name);
            }
        });
    var baseTime = 6000;

    // 选择颜色
    function getColor(d) {
        var r = 0.0;
        if (changeable_color) {
            var colorRange = d3.interpolateCubehelix(config2.color_range[0], config2.color_range[1]);
            if (divide_changeable_color_by_type && d["type"] in config2.color_ranges) {
                var colorRange = d3.interpolateCubehelix(config2.color_ranges[d["type"]][0], config2.color_ranges[d["type"]][1]);
            }
            var v =
                Math.abs(rate[d.name] - rate["MIN_RATE"]) /
                (rate["MAX_RATE"] - rate["MIN_RATE"]);
            if (isNaN(v) || v == -1) {
                return colorRange(0.6);
            }
            return colorRange(v);
        }

        if (d[divide_color_by] in config2.color)
            return config2.color[d[divide_color_by]];
        else {
            return d3.schemeCategory10[
                Math.floor(d[divide_color_by].charCodeAt() % 10)
            ];
        }
    }

    var showMessage = config2.showMessage;
    var allow_up = config2.allow_up;
    var always_up = config2.always_up;
    var interval_time = config2.interval_time;
    var text_y = config2.text_y;
    var itemLabel = config2.itemLabel;
    var typeLabel = config2.typeLabel;
    // 长度小于display_barInfo的bar将不显示barInfo
    var display_barInfo = config2.display_barInfo;
    // 显示类型
    if (config2.use_type_info) {
        var use_type_info = config2.use_type_info;
    } else if (divide_by != "name") {
        var use_type_info = true;
    } else {
        var use_type_info = false;
    }
    // 使用计数器
    var use_counter = config2.use_counter;
    // 每个数据的间隔日期
    var step = config2.step;
    var long = config2.long;
    var format = config2.format;
    var left_margin = config2.left_margin;
    var right_margin = config2.right_margin;
    var top_margin = config2.top_margin;
    var bottom_margin = config2.bottom_margin;
    var timeFormat = config2.timeFormat;
    var item_x = config2.item_x;
    var max_number = config2.max_number;
    var reverse = config2.reverse;
    var text_x = config2.text_x;
    var offset = config2.offset;
    var animation = config2.animation;
    var deformat = config2.deformat;
    config2.imgs = Object.assign(config2.imgs, external_imgs);

    const margin = {
        left: left_margin,
        right: right_margin,
        top: top_margin,
        bottom: bottom_margin
    };
    var background_color = config2.background_color;

    d3.select("body").attr("style", "background:" + background_color);

    var enter_from_0 = config2.enter_from_0;
    interval_time /= 3;
    var lastData = [];
    var currentdate = time[0].toString();
    var currentData = [];
    var lastname;
    const svg2 = d3.select("#svg2");

    const width = svg2.attr("width");
    const height = svg2.attr("height");
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom - 32;
    //var dateLabel_y = height - margin.top - margin.bottom - 32;;
    const xValue = d => Number(d.value);
    const yValue = d => d.name;

    const g = svg2
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    const xAxisG = g
        .append("g")
        .attr("transform", `translate(0, ${innerHeight})`);
    const yAxisG = g.append("g");

    xAxisG
        .append("text")
        .attr("class", "axis-label")
        .attr("x", innerWidth / 2)
        .attr("y", 100);

    var xScale = d3.scaleLinear();
    if (use_semilogarithmic_coordinate) {
        xScale = d3.scalePow().exponent(0.5);
    } else {
        xScale = d3.scaleLinear();
    }
    const yScale = d3
        .scaleBand()
        .paddingInner(0.3)
        .paddingOuter(0);

    const xTicks = 10;
    const xAxis = d3
        .axisBottom()
        .scale(xScale)
        .ticks(xTicks)
        .tickPadding(20)
        .tickFormat(d => {
            if (d <= 0) {
                return "";
            }
            return d;
        })
        .tickSize(-innerHeight);

    const yAxis = d3
        .axisLeft()
        .scale(yScale)
        .tickPadding(5)
        .tickSize(-innerWidth);

    var dateLabel_switch = config2.dateLabel_switch;
    var dateLabel_x = config2.dateLabel_x;
    var dateLabel_y = config2.dateLabel_y;
    //dateLabel位置
    if (dateLabel_x == null || dateLabel_y == null) {
        dateLabel_x = innerWidth; //默认
        dateLabel_y = innerHeight; //默认
    } //是否隐藏
    if (dateLabel_switch == false) {
        dateLabel_switch = "hidden";
    } else {
        dateLabel_switch = "visible";
    }

    var dateLabel = g
        .insert("text")
        .data(currentdate)
        .attr("class", "dateLabel")
        .attr("style:visibility", dateLabel_switch)
        .attr("x", dateLabel_x)
        .attr("y", dateLabel_y)
        .attr("text-anchor", function() {
            return "end";
        })
        .text(currentdate);

    var topLabel = g
        .insert("text")
        .attr("class", "topLabel")
        .attr("x", item_x)
        .attr("y", text_y);

    function dataSort() {
        if (reverse) {
            currentData.sort(function(a, b) {
                if (Number(a.value) == Number(b.value)) {
                    var r1 = 0;
                    var r2 = 0;
                    for (let index = 0; index < a.name.length; index++) {
                        r1 = r1 + a.name.charCodeAt(index);
                    }
                    for (let index = 0; index < b.name.length; index++) {
                        r2 = r2 + b.name.charCodeAt(index);
                    }
                    return r2 - r1;
                } else {
                    return Number(a.value) - Number(b.value);
                }
            });
        } else {
            currentData.sort(function(a, b) {
                if (Number(a.value) == Number(b.value)) {
                    var r1 = 0;
                    var r2 = 0;
                    for (let index = 0; index < a.name.length; index++) {
                        r1 = r1 + a.name.charCodeAt(index);
                    }
                    for (let index = 0; index < b.name.length; index++) {
                        r2 = r2 + b.name.charCodeAt(index);
                    }
                    return r2 - r1;
                } else {
                    return Number(b.value) - Number(a.value);
                }
            });
        }
    }

    function getCurrentData(date) {
        rate = [];
        currentData = [];
        indexList = [];

        data.forEach(element => {
            if (element["date"] == date && parseFloat(element["value"]) != 0) {
                if (element.name.length > config2.bar_name_max) {
                    tail = "...";
                } else {
                    tail = "";
                }
                element.name = element.name.slice(0, config2.bar_name_max - 1) + tail;
                currentData.push(element);
            }
        });

        rate["MAX_RATE"] = 0;
        rate["MIN_RATE"] = 1;
        currentData.forEach(e => {
            _cName = e.name;
            lastData.forEach(el => {
                if (el.name == e.name) {
                    rate[e.name] = Number(Number(e.value) - Number(el.value));
                }
            });
            if (rate[e.name] == undefined) {
                rate[e.name] = rate["MIN_RATE"];
            }
            if (rate[e.name] > rate["MAX_RATE"]) {
                rate["MAX_RATE"] = rate[e.name];
            } else if (rate[e.name] < rate["MIN_RATE"]) {
                rate["MIN_RATE"] = rate[e.name];
            }
        });
        currentData = currentData.slice(0, max_number);
        dataSort();

        d3.transition("2")
            .each(redraw)
            .each(change);
        lastData = currentData;
    }

    if (showMessage) {
        // 左1文字
        var topInfo = g
            .insert("text")
            .attr("class", "growth")
            .attr("x", 0)
            .attr("y", text_y)
            .text(itemLabel);

        // 右1文字
        g.insert("text")
            .attr("class", "growth")
            .attr("x", text_x)
            .attr("y", text_y)
            .text(typeLabel);

        // 榜首日期计数
        if (use_counter == true) {
            var days = g
                .insert("text")
                .attr("class", "days")
                .attr("x", text_x + offset)
                .attr("y", text_y);
        } else {
            // 显示榜首type
            if (use_type_info == true) {
                var top_type = g
                    .insert("text")
                    .attr("class", "days")
                    .attr("x", text_x + offset)
                    .attr("y", text_y);
            }
        }
    }

    var lastname;
    var counter = {
        value: 1
    };

    var avg = 0;
    var enter_from_now = true;

    function redraw() {
        if (currentData.length == 0) return;
        // yScale
        //     .domain(currentData.map(d => d.name).reverse())
        //     .range([innerHeight, 0]);
        // x轴范围
        // 如果所有数字很大导致拉不开差距

        if (big_value) {
            xScale
                .domain([
                    2 * d3.min(currentData, xValue) - d3.max(currentData, xValue),
                    d3.max(currentData, xValue) + 10
                ])
                .range([0, innerWidth]);
        } else {
            xScale
                .domain([0, d3.max(currentData, xValue) + 1])
                .range([0, innerWidth]);
        }
        if (auto_sort) {
            dateLabel
                .data(currentData)
                .transition()
                .duration(baseTime * interval_time)
                .ease(d3.easeLinear)
                .tween("text", function(d) {
                    var self = this;
                    var i = d3.interpolateDate(
                        new Date(self.textContent),
                        new Date(d.date)
                    );
                    // var prec = (new Date(d.date) + "").split(".");
                    // var round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;
                    return function(t) {
                        var dateformat = d3.timeFormat(timeFormat);
                        self.textContent = dateformat(i(t));
                    };
                });
        } else {
            dateLabel.text(currentdate);
        }

        xAxisG
            .transition()
            .duration(baseTime * interval_time)
            .ease(d3.easeLinear)
            .call(xAxis);
        yAxisG
            .transition()
            .duration(baseTime * interval_time)
            .ease(d3.easeLinear)
            .call(yAxis);

        yAxisG.selectAll(".tick").remove();
        if (!config2.show_x_tick) {
            xAxisG.selectAll(".tick").remove();
        }

        yScale
            .domain(currentData.map(d => d.name).reverse())
            .range([innerHeight, 0]);

        var bar = g.selectAll(".bar").data(currentData, function(d) {
            return d.name;
        });

        if (showMessage) {
            // 榜首文字
            topLabel.data(currentData).text(function(d) {
                if (lastname == d.name) {
                    counter.value = counter.value + step;
                } else {
                    counter.value = 1;
                }
                lastname = d.name;
                if (d.name.length > 24) return d.name.slice(0, 23) + "...";
                return d.name;
            });
            if (use_counter == true) {
                // 榜首持续时间更新
                days
                    .data(currentData)
                    .transition()
                    .duration(baseTime * interval_time)
                    .ease(d3.easeLinear)
                    .tween("text", function(d) {
                        var self = this;
                        var i = d3.interpolate(self.textContent, counter.value),
                            prec = (counter.value + "").split("."),
                            round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;

                        return function(t) {
                            self.textContent = d3.format(format)(
                                Math.round(i(t) * round) / round
                            );
                        };
                    });
            } else if (use_type_info == true) {
                // 榜首type更新
                top_type.data(currentData).text(function(d) {
                    return d["type"];
                });
            }
        }

        var barEnter = bar
            .enter()
            .insert("g", ".axis")
            .attr("class", "bar")
            .attr("transform", function(d) {
                return "translate(0," + yScale(yValue(d)) + ")";
            });

        if (config2.use_img) {
            barEnter
                .append("defs")
                .append("pattern")
                .attr("id", d => d.name)
                .attr("width", "100%")
                .attr("height", "100%")
                .append("image")
                .attr("x", "0")
                .attr("y", "0")
                .attr("width", "40")
                .attr("height", "40")
                .attr("href", d => config2.imgs[d.name]);

            barEnter
                .append("circle")
                .attr("fill-opacity", 0)
                .attr("cy", 63)
                .attr('fill', d => "url(#" + encodeURIComponent(d.name).replace("'", "%27").replace("(", "%28").replace(")", "%29") + ")")
                .attr("stroke-width", "0px")
                .transition("a")
                .delay(500 * interval_time)
                .duration(2490 * interval_time)
                .attr("stroke", d => getColor(d))
                .attr("stroke-width", "4px")
                .attr("x", -16)
                .attr("cx", -22)
                .attr("cy", 13)
                .attr("r", 40 / 2)
                .attr("fill-opacity", 1);
        }
        barEnter
            .append("rect")
            .attr("width", function(d) {
                if (enter_from_0) {
                    return 0;
                } else {
                    return xScale(currentData[currentData.length - 1].value);
                }
            })
            .attr("fill-opacity", 0)
            .attr("height", 26)
            .attr("y", 50)
            .style("fill", d => getColor(d))
            .transition("a")
            .delay(500 * interval_time)
            .duration(2490 * interval_time)
            .attr("y", 0)
            .attr("width", d => xScale(xValue(d)))
            .attr("fill-opacity", 1);

        if (config2.rounded_rectangle) {
            d3.selectAll("rect").attr("rx", 13);
        }
        if (config2.showLabel == true) {
            barEnter
                .append("text")
                .attr("y", 50)
                .attr("fill-opacity", 0)
                .style("fill", d => getColor(d))
                .transition("2")
                .delay(500 * interval_time)
                .duration(2490 * interval_time)
                .attr("fill-opacity", 1)
                .attr("y", 0)
                .attr("class", function(d) {
                    return "label ";
                })
                .attr("x", config2.labelx)
                .attr("y", 20)
                .attr("text-anchor", "end")
                .text(function(d) {
                    if (long) {
                        return "";
                    }
                    return d.name;
                });
        }

        // bar上文字
        var barInfo = barEnter
            .append("text")
            .attr("x", function(d) {
                if (long) return 10;
                if (enter_from_0) {
                    return 0;
                } else {
                    return xScale(currentData[currentData.length - 1].value);
                }
            })
            .attr("stroke", d => getColor(d))
            .attr("class", function() {
                return "barInfo";
            })
            .attr("y", 50)
            .attr("stroke-width", "0px")
            .attr("fill-opacity", 0)
            .transition()
            .delay(500 * interval_time)
            .duration(2490 * interval_time)
            .text(function(d) {
                if (use_type_info) {
                    return d[divide_by] + "-" + d.name;
                }
                return d.name;
            })
            .attr("x", d => {
                if (long) return 10;
                return xScale(xValue(d)) - 10;
            })
            .attr("fill-opacity", function(d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return 0;
                }
                return 1;
            })
            .attr("y", 2)
            .attr("dy", ".5em")
            .attr("text-anchor", function() {
                if (long) return "start";
                return "end";
            })
            .attr("stroke-width", function(d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return "0px";
                }
                return "1px";
            });
        if (long) {
            barInfo.tween("text", function(d) {
                var self = this;
                self.textContent = d.value;
                var i = d3.interpolate(self.textContent, Number(d.value)),
                    prec = (Number(d.value) + "").split("."),
                    round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                return function(t) {
                    self.textContent =
                        d[divide_by] +
                        "-" +
                        d.name +
                        "  数值:" +
                        d3.format(format)(Math.round(i(t) * round) / round);
                };
            });
        }
        if (!long) {
            barEnter
                .append("text")
                .attr("x", function() {
                    if (long) {
                        return 10;
                    }
                    if (enter_from_0) {
                        return 0;
                    } else {
                        return xScale(currentData[currentData.length - 1].value);
                    }
                })
                .attr("y", 50)
                .attr("fill-opacity", 0)
                .style("fill", d => getColor(d))
                .transition()
                .duration(2990 * interval_time)
                .tween("text", function(d) {
                    var self = this;
                    // 初始值为d.value的0.9倍
                    self.textContent = d.value * 0.9;
                    var i = d3.interpolate(self.textContent, Number(d.value)),
                        prec = (Number(d.value) + "").split("."),
                        round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                    // d.value = self.textContent
                    return function(t) {
                        self.textContent = d3.format(format)(
                            Math.round(i(t) * round) / round
                        ) + config2.postfix;
                        // d.value = self.textContent
                    };
                })
                .attr("fill-opacity", 1)
                .attr("y", 0)
                .attr("class", function(d) {
                    return "value";
                })
                .attr("x", d => {
                    return xScale(xValue(d)) + 10;
                })
                .attr("y", 22);
        }
        var barUpdate = bar
            .transition("2")
            .duration(2990 * interval_time)
            .ease(d3.easeLinear);

        barUpdate
            .select("rect")
            .style("fill", d => getColor(d))
            .attr("width", d => xScale(xValue(d)));
        if (config2.showLabel == true) {
            barUpdate
                .select(".label")
                .attr("class", function(d) {
                    return "label ";
                })
                .style("fill", d => getColor(d))
                .attr("width", d => xScale(xValue(d)));
        }
        if (!long) {
            barUpdate
                .select(".value")
                .attr("class", function(d) {
                    return "value";
                })
                .style("fill", d => getColor(d))
                .attr("width", d => xScale(xValue(d)));
        }
        barUpdate.select(".barInfo").attr("stroke", function(d) {
            return getColor(d);
        });

        if (config2.use_img) {
            barUpdate.select("circle").attr("stroke", function(d) {
                return getColor(d);
            });
        }

        var barInfo = barUpdate
            .select(".barInfo")
            .text(function(d) {
                if (use_type_info) {
                    return d[divide_by] + "-" + d.name;
                }
                return d.name;
            })
            .attr("x", d => {
                if (long) return 10;
                return xScale(xValue(d)) - 10;
            })
            .attr("fill-opacity", function(d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return 0;
                }
                return 1;
            })
            .attr("stroke-width", function(d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return "0px";
                }
                return "1px";
            });

        if (long) {
            barInfo.tween("text", function(d) {
                var self = this;
                var str = d[divide_by] + "-" + d.name + "  数值:";

                var i = d3.interpolate(
                        self.textContent.slice(str.length, 99),
                        Number(d.value)
                    ),
                    prec = (Number(d.value) + "").split("."),
                    round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                return function(t) {
                    self.textContent =
                        d[divide_by] +
                        "-" +
                        d.name +
                        "  数值:" +
                        d3.format(format)(Math.round(i(t) * round) / round);
                };
            });
        }
        if (!long) {
            barUpdate
                .select(".value")
                .tween("text", function(d) {
                    var self = this;

                    // if postfix is blank, do not slice.
                    if (config2.postfix == "") {
                        var i = d3.interpolate(self.textContent, Number(d.value));
                    } else {
                        var i = d3.interpolate(self.textContent.slice(0, -config2.postfix.length), Number(d.value));
                    }

                    var i = d3.interpolate(deformat(self.textContent, config2.postfix), Number(d.value))

                    var prec = (Number(d.value) + "").split("."),
                        round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                    // d.value = self.textContent
                    return function(t) {
                        self.textContent = d3.format(format)(
                            Math.round(i(t) * round) / round
                        ) + config2.postfix;
                        // d.value = self.textContent
                    };
                })
                .duration(2990 * interval_time)
                .attr("x", d => xScale(xValue(d)) + 10);
        }
        avg =
            (Number(currentData[0]["value"]) +
                Number(currentData[currentData.length - 1]["value"])) /
            2;

        var barExit = bar
            .exit()
            .attr("fill-opacity", 1)
            .transition()
            .duration(2500 * interval_time);
        barExit
            .attr("transform", function(d) {
                if (always_up) {
                    return "translate(0," + "-100" + ")";
                }
                if (Number(d.value) > avg && allow_up) {
                    return "translate(0," + "-100" + ")";
                }
                return "translate(0," + "1000" + ")";
            })
            .remove()
            .attr("fill-opacity", 0);
        barExit
            .select("rect")
            .attr("fill-opacity", 0)
            .attr("width", () => {
                if (always_up) return xScale(0);
                return xScale(currentData[currentData.length - 1]["value"])
            })
        if (!long) {
            barExit
                .select(".value")
                .attr("fill-opacity", 0)
                .attr("x", () => {
                    if (always_up) return xScale(0);
                    return xScale(currentData[currentData.length - 1]["value"]);
                });
        }
        barExit
            .select(".barInfo")
            .attr("fill-opacity", 0)
            .attr("stroke-width", function(d) {
                return "0px";
            })
            .attr("x", () => {
                if (long) return 10;
                if (always_up) return xScale(0);
                return xScale(currentData[currentData.length - 1]["value"]);
            });
        barExit.select(".label").attr("fill-opacity", 0);
        if (config2.use_img) {
            barExit.select("circle").attr("fill-opacity", 0)
        }
    }

    function change() {
        yScale
            .domain(currentData.map(d => d.name).reverse())
            .range([innerHeight, 0]);
        if (animation == "linear") {
            g.selectAll(".bar")
                .data(currentData, function(d) {
                    return d.name;
                })
                .transition("1")
                .ease(d3.easeLinear)
                .duration(baseTime * update_rate * interval_time)
                .attr("transform", function(d) {
                    return "translate(0," + yScale(yValue(d)) + ")";
                });
        } else {
            g.selectAll(".bar")
                .data(currentData, function(d) {
                    return d.name;
                })
                .transition("1")
                .duration(baseTime * update_rate * interval_time)
                .attr("transform", function(d) {
                    return "translate(0," + yScale(yValue(d)) + ")";
                });
        }
    }

    var i = 0;
    var p = config2.wait;
    var update_rate = config2.update_rate;
    var inter = setInterval(function next() {
        // 空过p回合
        while (p) {
            p -= 1;
            return;
        }
        currentdate = time[i];
        getCurrentData(time[i]);
        i++;

        if (i >= time.length) {
            window.clearInterval(inter);
        }
    }, baseTime * interval_time);
    // setInterval(() => {
    //     d3.transition()
    //         .each(change)
    // }, baseTime * update_rate * interval_time)
}

function draw3(data) {
    var date = [];
    data.forEach(element => {
        if (date.indexOf(element["date"]) == -1) {
            date.push(element["date"]);
        }
    });
    let rate = [];
    var auto_sort = config3.auto_sort;
    if (auto_sort) {
        var time = date.sort((x, y) => new Date(x) - new Date(y));
    } else {
        var time = date;
    }
    var use_semilogarithmic_coordinate = config3.use_semilogarithmic_coordinate;
    var big_value = config3.big_value;
    var divide_by = config3.divide_by;
    var divide_color_by = config3.divide_color_by;
    var name_list = [];
    var changeable_color = config3.changeable_color;
    var divide_changeable_color_by_type = config3.divide_changeable_color_by_type;
    data
        .sort((a, b) => Number(b.value) - Number(a.value))
        .forEach(e => {
            if (name_list.indexOf(e.name) == -1) {
                name_list.push(e.name);
            }
        });
    var baseTime = 6000;

    // 选择颜色
    function getColor(d) {
        var r = 0.0;
        if (changeable_color) {
            var colorRange = d3.interpolateCubehelix(config3.color_range[0], config3.color_range[1]);
            if (divide_changeable_color_by_type && d["type"] in config3.color_ranges) {
                var colorRange = d3.interpolateCubehelix(config3.color_ranges[d["type"]][0], config3.color_ranges[d["type"]][1]);
            }
            var v =
                Math.abs(rate[d.name] - rate["MIN_RATE"]) /
                (rate["MAX_RATE"] - rate["MIN_RATE"]);
            if (isNaN(v) || v == -1) {
                return colorRange(0.6);
            }
            return colorRange(v);
        }

        if (d[divide_color_by] in config3.color)
            return config3.color[d[divide_color_by]];
        else {
            return d3.schemeCategory10[
                Math.floor(d[divide_color_by].charCodeAt() % 10)
            ];
        }
    }

    var showMessage = config3.showMessage;
    var allow_up = config3.allow_up;
    var always_up = config3.always_up;
    var interval_time = config3.interval_time;
    var text_y = config3.text_y;
    var itemLabel = config3.itemLabel;
    var typeLabel = config3.typeLabel;
    // 长度小于display_barInfo的bar将不显示barInfo
    var display_barInfo = config3.display_barInfo;
    // 显示类型
    if (config3.use_type_info) {
        var use_type_info = config3.use_type_info;
    } else if (divide_by != "name") {
        var use_type_info = true;
    } else {
        var use_type_info = false;
    }
    // 使用计数器
    var use_counter = config3.use_counter;
    // 每个数据的间隔日期
    var step = config3.step;
    var long = config3.long;
    var format = config3.format;
    var left_margin = config3.left_margin;
    var right_margin = config3.right_margin;
    var top_margin = config3.top_margin;
    var bottom_margin = config3.bottom_margin;
    var timeFormat = config3.timeFormat;
    var item_x = config3.item_x;
    var max_number = config3.max_number;
    var reverse = config3.reverse;
    var text_x = config3.text_x;
    var offset = config3.offset;
    var animation = config3.animation;
    var deformat = config3.deformat;
    config3.imgs = Object.assign(config3.imgs, external_imgs);

    const margin = {
        left: left_margin,
        right: right_margin,
        top: top_margin,
        bottom: bottom_margin
    };
    var background_color = config3.background_color;

    d3.select("body").attr("style", "background:" + background_color);

    var enter_from_0 = config3.enter_from_0;
    interval_time /= 3;
    var lastData = [];
    var currentdate = time[0].toString();
    var currentData = [];
    var lastname;
    const svg3 = d3.select("#svg3");

    const width = svg3.attr("width");
    const height = svg3.attr("height");
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom - 32;
    //var dateLabel_y = height - margin.top - margin.bottom - 32;;
    const xValue = d => Number(d.value);
    const yValue = d => d.name;

    const g = svg3
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    const xAxisG = g
        .append("g")
        .attr("transform", `translate(0, ${innerHeight})`);
    const yAxisG = g.append("g");

    xAxisG
        .append("text")
        .attr("class", "axis-label")
        .attr("x", innerWidth / 2)
        .attr("y", 100);

    var xScale = d3.scaleLinear();
    if (use_semilogarithmic_coordinate) {
        xScale = d3.scalePow().exponent(0.5);
    } else {
        xScale = d3.scaleLinear();
    }
    const yScale = d3
        .scaleBand()
        .paddingInner(0.3)
        .paddingOuter(0);

    const xTicks = 10;
    const xAxis = d3
        .axisBottom()
        .scale(xScale)
        .ticks(xTicks)
        .tickPadding(20)
        .tickFormat(d => {
            if (d <= 0) {
                return "";
            }
            return d;
        })
        .tickSize(-innerHeight);

    const yAxis = d3
        .axisLeft()
        .scale(yScale)
        .tickPadding(5)
        .tickSize(-innerWidth);

    var dateLabel_switch = config3.dateLabel_switch;
    var dateLabel_x = config3.dateLabel_x;
    var dateLabel_y = config3.dateLabel_y;
    //dateLabel位置
    if (dateLabel_x == null || dateLabel_y == null) {
        dateLabel_x = innerWidth; //默认
        dateLabel_y = innerHeight; //默认
    } //是否隐藏
    if (dateLabel_switch == false) {
        dateLabel_switch = "hidden";
    } else {
        dateLabel_switch = "visible";
    }

    var dateLabel = g
        .insert("text")
        .data(currentdate)
        .attr("class", "dateLabel")
        .attr("style:visibility", dateLabel_switch)
        .attr("x", dateLabel_x)
        .attr("y", dateLabel_y)
        .attr("text-anchor", function() {
            return "end";
        })
        .text(currentdate);

    var topLabel = g
        .insert("text")
        .attr("class", "topLabel")
        .attr("x", item_x)
        .attr("y", text_y);

    function dataSort() {
        if (reverse) {
            currentData.sort(function(a, b) {
                if (Number(a.value) == Number(b.value)) {
                    var r1 = 0;
                    var r2 = 0;
                    for (let index = 0; index < a.name.length; index++) {
                        r1 = r1 + a.name.charCodeAt(index);
                    }
                    for (let index = 0; index < b.name.length; index++) {
                        r2 = r2 + b.name.charCodeAt(index);
                    }
                    return r2 - r1;
                } else {
                    return Number(a.value) - Number(b.value);
                }
            });
        } else {
            currentData.sort(function(a, b) {
                if (Number(a.value) == Number(b.value)) {
                    var r1 = 0;
                    var r2 = 0;
                    for (let index = 0; index < a.name.length; index++) {
                        r1 = r1 + a.name.charCodeAt(index);
                    }
                    for (let index = 0; index < b.name.length; index++) {
                        r2 = r2 + b.name.charCodeAt(index);
                    }
                    return r2 - r1;
                } else {
                    return Number(b.value) - Number(a.value);
                }
            });
        }
    }

    function getCurrentData(date) {
        rate = [];
        currentData = [];
        indexList = [];

        data.forEach(element => {
            if (element["date"] == date && parseFloat(element["value"]) != 0) {
                if (element.name.length > config3.bar_name_max) {
                    tail = "...";
                } else {
                    tail = "";
                }
                element.name = element.name.slice(0, config3.bar_name_max - 1) + tail;
                currentData.push(element);
            }
        });

        rate["MAX_RATE"] = 0;
        rate["MIN_RATE"] = 1;
        currentData.forEach(e => {
            _cName = e.name;
            lastData.forEach(el => {
                if (el.name == e.name) {
                    rate[e.name] = Number(Number(e.value) - Number(el.value));
                }
            });
            if (rate[e.name] == undefined) {
                rate[e.name] = rate["MIN_RATE"];
            }
            if (rate[e.name] > rate["MAX_RATE"]) {
                rate["MAX_RATE"] = rate[e.name];
            } else if (rate[e.name] < rate["MIN_RATE"]) {
                rate["MIN_RATE"] = rate[e.name];
            }
        });
        currentData = currentData.slice(0, max_number);
        dataSort();

        d3.transition("2")
            .each(redraw)
            .each(change);
        lastData = currentData;
    }

    if (showMessage) {
        // 左1文字
        var topInfo = g
            .insert("text")
            .attr("class", "growth")
            .attr("x", 0)
            .attr("y", text_y)
            .text(itemLabel);

        // 右1文字
        g.insert("text")
            .attr("class", "growth")
            .attr("x", text_x)
            .attr("y", text_y)
            .text(typeLabel);

        // 榜首日期计数
        if (use_counter == true) {
            var days = g
                .insert("text")
                .attr("class", "days")
                .attr("x", text_x + offset)
                .attr("y", text_y);
        } else {
            // 显示榜首type
            if (use_type_info == true) {
                var top_type = g
                    .insert("text")
                    .attr("class", "days")
                    .attr("x", text_x + offset)
                    .attr("y", text_y);
            }
        }
    }

    var lastname;
    var counter = {
        value: 1
    };

    var avg = 0;
    var enter_from_now = true;

    function redraw() {
        if (currentData.length == 0) return;
        // yScale
        //     .domain(currentData.map(d => d.name).reverse())
        //     .range([innerHeight, 0]);
        // x轴范围
        // 如果所有数字很大导致拉不开差距

        if (big_value) {
            xScale
                .domain([
                    2 * d3.min(currentData, xValue) - d3.max(currentData, xValue),
                    d3.max(currentData, xValue) + 10
                ])
                .range([0, innerWidth]);
        } else {
            xScale
                .domain([0, d3.max(currentData, xValue) + 1])
                .range([0, innerWidth]);
        }
        if (auto_sort) {
            dateLabel
                .data(currentData)
                .transition()
                .duration(baseTime * interval_time)
                .ease(d3.easeLinear)
                .tween("text", function(d) {
                    var self = this;
                    var i = d3.interpolateDate(
                        new Date(self.textContent),
                        new Date(d.date)
                    );
                    // var prec = (new Date(d.date) + "").split(".");
                    // var round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;
                    return function(t) {
                        var dateformat = d3.timeFormat(timeFormat);
                        self.textContent = dateformat(i(t));
                    };
                });
        } else {
            dateLabel.text(currentdate);
        }

        xAxisG
            .transition()
            .duration(baseTime * interval_time)
            .ease(d3.easeLinear)
            .call(xAxis);
        yAxisG
            .transition()
            .duration(baseTime * interval_time)
            .ease(d3.easeLinear)
            .call(yAxis);

        yAxisG.selectAll(".tick").remove();
        if (!config3.show_x_tick) {
            xAxisG.selectAll(".tick").remove();
        }

        yScale
            .domain(currentData.map(d => d.name).reverse())
            .range([innerHeight, 0]);

        var bar = g.selectAll(".bar").data(currentData, function(d) {
            return d.name;
        });

        if (showMessage) {
            // 榜首文字
            topLabel.data(currentData).text(function(d) {
                if (lastname == d.name) {
                    counter.value = counter.value + step;
                } else {
                    counter.value = 1;
                }
                lastname = d.name;
                if (d.name.length > 24) return d.name.slice(0, 23) + "...";
                return d.name;
            });
            if (use_counter == true) {
                // 榜首持续时间更新
                days
                    .data(currentData)
                    .transition()
                    .duration(baseTime * interval_time)
                    .ease(d3.easeLinear)
                    .tween("text", function(d) {
                        var self = this;
                        var i = d3.interpolate(self.textContent, counter.value),
                            prec = (counter.value + "").split("."),
                            round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;

                        return function(t) {
                            self.textContent = d3.format(format)(
                                Math.round(i(t) * round) / round
                            );
                        };
                    });
            } else if (use_type_info == true) {
                // 榜首type更新
                top_type.data(currentData).text(function(d) {
                    return d["type"];
                });
            }
        }

        var barEnter = bar
            .enter()
            .insert("g", ".axis")
            .attr("class", "bar")
            .attr("transform", function(d) {
                return "translate(0," + yScale(yValue(d)) + ")";
            });

        if (config3.use_img) {
            barEnter
                .append("defs")
                .append("pattern")
                .attr("id", d => d.name)
                .attr("width", "100%")
                .attr("height", "100%")
                .append("image")
                .attr("x", "0")
                .attr("y", "0")
                .attr("width", "40")
                .attr("height", "40")
                .attr("href", d => config3.imgs[d.name]);

            barEnter
                .append("circle")
                .attr("fill-opacity", 0)
                .attr("cy", 63)
                .attr('fill', d => "url(#" + encodeURIComponent(d.name).replace("'", "%27").replace("(", "%28").replace(")", "%29") + ")")
                .attr("stroke-width", "0px")
                .transition("a")
                .delay(500 * interval_time)
                .duration(2490 * interval_time)
                .attr("stroke", d => getColor(d))
                .attr("stroke-width", "4px")
                .attr("x", -16)
                .attr("cx", -22)
                .attr("cy", 13)
                .attr("r", 40 / 2)
                .attr("fill-opacity", 1);
        }
        barEnter
            .append("rect")
            .attr("width", function(d) {
                if (enter_from_0) {
                    return 0;
                } else {
                    return xScale(currentData[currentData.length - 1].value);
                }
            })
            .attr("fill-opacity", 0)
            .attr("height", 26)
            .attr("y", 50)
            .style("fill", d => getColor(d))
            .transition("a")
            .delay(500 * interval_time)
            .duration(2490 * interval_time)
            .attr("y", 0)
            .attr("width", d => xScale(xValue(d)))
            .attr("fill-opacity", 1);

        if (config3.rounded_rectangle) {
            d3.selectAll("rect").attr("rx", 13);
        }
        if (config3.showLabel == true) {
            barEnter
                .append("text")
                .attr("y", 50)
                .attr("fill-opacity", 0)
                .style("fill", d => getColor(d))
                .transition("2")
                .delay(500 * interval_time)
                .duration(2490 * interval_time)
                .attr("fill-opacity", 1)
                .attr("y", 0)
                .attr("class", function(d) {
                    return "label ";
                })
                .attr("x", config3.labelx)
                .attr("y", 20)
                .attr("text-anchor", "end")
                .text(function(d) {
                    if (long) {
                        return "";
                    }
                    return d.name;
                });
        }

        // bar上文字
        var barInfo = barEnter
            .append("text")
            .attr("x", function(d) {
                if (long) return 10;
                if (enter_from_0) {
                    return 0;
                } else {
                    return xScale(currentData[currentData.length - 1].value);
                }
            })
            .attr("stroke", d => getColor(d))
            .attr("class", function() {
                return "barInfo";
            })
            .attr("y", 50)
            .attr("stroke-width", "0px")
            .attr("fill-opacity", 0)
            .transition()
            .delay(500 * interval_time)
            .duration(2490 * interval_time)
            .text(function(d) {
                if (use_type_info) {
                    return d[divide_by] + "-" + d.name;
                }
                return d.name;
            })
            .attr("x", d => {
                if (long) return 10;
                return xScale(xValue(d)) - 10;
            })
            .attr("fill-opacity", function(d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return 0;
                }
                return 1;
            })
            .attr("y", 2)
            .attr("dy", ".5em")
            .attr("text-anchor", function() {
                if (long) return "start";
                return "end";
            })
            .attr("stroke-width", function(d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return "0px";
                }
                return "1px";
            });
        if (long) {
            barInfo.tween("text", function(d) {
                var self = this;
                self.textContent = d.value;
                var i = d3.interpolate(self.textContent, Number(d.value)),
                    prec = (Number(d.value) + "").split("."),
                    round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                return function(t) {
                    self.textContent =
                        d[divide_by] +
                        "-" +
                        d.name +
                        "  数值:" +
                        d3.format(format)(Math.round(i(t) * round) / round);
                };
            });
        }
        if (!long) {
            barEnter
                .append("text")
                .attr("x", function() {
                    if (long) {
                        return 10;
                    }
                    if (enter_from_0) {
                        return 0;
                    } else {
                        return xScale(currentData[currentData.length - 1].value);
                    }
                })
                .attr("y", 50)
                .attr("fill-opacity", 0)
                .style("fill", d => getColor(d))
                .transition()
                .duration(2990 * interval_time)
                .tween("text", function(d) {
                    var self = this;
                    // 初始值为d.value的0.9倍
                    self.textContent = d.value * 0.9;
                    var i = d3.interpolate(self.textContent, Number(d.value)),
                        prec = (Number(d.value) + "").split("."),
                        round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                    // d.value = self.textContent
                    return function(t) {
                        self.textContent = d3.format(format)(
                            Math.round(i(t) * round) / round
                        ) + config3.postfix;
                        // d.value = self.textContent
                    };
                })
                .attr("fill-opacity", 1)
                .attr("y", 0)
                .attr("class", function(d) {
                    return "value";
                })
                .attr("x", d => {
                    return xScale(xValue(d)) + 10;
                })
                .attr("y", 22);
        }
        var barUpdate = bar
            .transition("2")
            .duration(2990 * interval_time)
            .ease(d3.easeLinear);

        barUpdate
            .select("rect")
            .style("fill", d => getColor(d))
            .attr("width", d => xScale(xValue(d)));
        if (config3.showLabel == true) {
            barUpdate
                .select(".label")
                .attr("class", function(d) {
                    return "label ";
                })
                .style("fill", d => getColor(d))
                .attr("width", d => xScale(xValue(d)));
        }
        if (!long) {
            barUpdate
                .select(".value")
                .attr("class", function(d) {
                    return "value";
                })
                .style("fill", d => getColor(d))
                .attr("width", d => xScale(xValue(d)));
        }
        barUpdate.select(".barInfo").attr("stroke", function(d) {
            return getColor(d);
        });

        if (config3.use_img) {
            barUpdate.select("circle").attr("stroke", function(d) {
                return getColor(d);
            });
        }

        var barInfo = barUpdate
            .select(".barInfo")
            .text(function(d) {
                if (use_type_info) {
                    return d[divide_by] + "-" + d.name;
                }
                return d.name;
            })
            .attr("x", d => {
                if (long) return 10;
                return xScale(xValue(d)) - 10;
            })
            .attr("fill-opacity", function(d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return 0;
                }
                return 1;
            })
            .attr("stroke-width", function(d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return "0px";
                }
                return "1px";
            });

        if (long) {
            barInfo.tween("text", function(d) {
                var self = this;
                var str = d[divide_by] + "-" + d.name + "  数值:";

                var i = d3.interpolate(
                        self.textContent.slice(str.length, 99),
                        Number(d.value)
                    ),
                    prec = (Number(d.value) + "").split("."),
                    round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                return function(t) {
                    self.textContent =
                        d[divide_by] +
                        "-" +
                        d.name +
                        "  数值:" +
                        d3.format(format)(Math.round(i(t) * round) / round);
                };
            });
        }
        if (!long) {
            barUpdate
                .select(".value")
                .tween("text", function(d) {
                    var self = this;

                    // if postfix is blank, do not slice.
                    if (config3.postfix == "") {
                        var i = d3.interpolate(self.textContent, Number(d.value));
                    } else {
                        var i = d3.interpolate(self.textContent.slice(0, -config3.postfix.length), Number(d.value));
                    }

                    var i = d3.interpolate(deformat(self.textContent, config3.postfix), Number(d.value))

                    var prec = (Number(d.value) + "").split("."),
                        round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                    // d.value = self.textContent
                    return function(t) {
                        self.textContent = d3.format(format)(
                            Math.round(i(t) * round) / round
                        ) + config3.postfix;
                        // d.value = self.textContent
                    };
                })
                .duration(2990 * interval_time)
                .attr("x", d => xScale(xValue(d)) + 10);
        }
        avg =
            (Number(currentData[0]["value"]) +
                Number(currentData[currentData.length - 1]["value"])) /
            2;

        var barExit = bar
            .exit()
            .attr("fill-opacity", 1)
            .transition()
            .duration(2500 * interval_time);
        barExit
            .attr("transform", function(d) {
                if (always_up) {
                    return "translate(0," + "-100" + ")";
                }
                if (Number(d.value) > avg && allow_up) {
                    return "translate(0," + "-100" + ")";
                }
                return "translate(0," + "1000" + ")";
            })
            .remove()
            .attr("fill-opacity", 0);
        barExit
            .select("rect")
            .attr("fill-opacity", 0)
            .attr("width", () => {
                if (always_up) return xScale(0);
                return xScale(currentData[currentData.length - 1]["value"])
            })
        if (!long) {
            barExit
                .select(".value")
                .attr("fill-opacity", 0)
                .attr("x", () => {
                    if (always_up) return xScale(0);
                    return xScale(currentData[currentData.length - 1]["value"]);
                });
        }
        barExit
            .select(".barInfo")
            .attr("fill-opacity", 0)
            .attr("stroke-width", function(d) {
                return "0px";
            })
            .attr("x", () => {
                if (long) return 10;
                if (always_up) return xScale(0);
                return xScale(currentData[currentData.length - 1]["value"]);
            });
        barExit.select(".label").attr("fill-opacity", 0);
        if (config3.use_img) {
            barExit.select("circle").attr("fill-opacity", 0)
        }
    }

    function change() {
        yScale
            .domain(currentData.map(d => d.name).reverse())
            .range([innerHeight, 0]);
        if (animation == "linear") {
            g.selectAll(".bar")
                .data(currentData, function(d) {
                    return d.name;
                })
                .transition("1")
                .ease(d3.easeLinear)
                .duration(baseTime * update_rate * interval_time)
                .attr("transform", function(d) {
                    return "translate(0," + yScale(yValue(d)) + ")";
                });
        } else {
            g.selectAll(".bar")
                .data(currentData, function(d) {
                    return d.name;
                })
                .transition("1")
                .duration(baseTime * update_rate * interval_time)
                .attr("transform", function(d) {
                    return "translate(0," + yScale(yValue(d)) + ")";
                });
        }
    }

    var i = 0;
    var p = config3.wait;
    var update_rate = config3.update_rate;
    var inter = setInterval(function next() {
        // 空过p回合
        while (p) {
            p -= 1;
            return;
        }
        currentdate = time[i];
        getCurrentData(time[i]);
        i++;

        if (i >= time.length) {
            window.clearInterval(inter);
        }
    }, baseTime * interval_time);
    // setInterval(() => {
    //     d3.transition()
    //         .each(change)
    // }, baseTime * update_rate * interval_time)
}

function draw4(data) {
    var date = [];
    data.forEach(element => {
        if (date.indexOf(element["date"]) == -1) {
            date.push(element["date"]);
        }
    });
    let rate = [];
    var auto_sort = config4.auto_sort;
    if (auto_sort) {
        var time = date.sort((x, y) => new Date(x) - new Date(y));
    } else {
        var time = date;
    }
    var use_semilogarithmic_coordinate = config4.use_semilogarithmic_coordinate;
    var big_value = config4.big_value;
    var divide_by = config4.divide_by;
    var divide_color_by = config4.divide_color_by;
    var name_list = [];
    var changeable_color = config4.changeable_color;
    var divide_changeable_color_by_type = config4.divide_changeable_color_by_type;
    data
        .sort((a, b) => Number(b.value) - Number(a.value))
        .forEach(e => {
            if (name_list.indexOf(e.name) == -1) {
                name_list.push(e.name);
            }
        });
    var baseTime = 6000;

    // 选择颜色
    function getColor(d) {
        var r = 0.0;
        if (changeable_color) {
            var colorRange = d3.interpolateCubehelix(config4.color_range[0], config4.color_range[1]);
            if (divide_changeable_color_by_type && d["type"] in config4.color_ranges) {
                var colorRange = d3.interpolateCubehelix(config4.color_ranges[d["type"]][0], config4.color_ranges[d["type"]][1]);
            }
            var v =
                Math.abs(rate[d.name] - rate["MIN_RATE"]) /
                (rate["MAX_RATE"] - rate["MIN_RATE"]);
            if (isNaN(v) || v == -1) {
                return colorRange(0.6);
            }
            return colorRange(v);
        }

        if (d[divide_color_by] in config4.color)
            return config4.color[d[divide_color_by]];
        else {
            return d3.schemeCategory10[
                Math.floor(d[divide_color_by].charCodeAt() % 10)
            ];
        }
    }

    var showMessage = config4.showMessage;
    var allow_up = config4.allow_up;
    var always_up = config4.always_up;
    var interval_time = config4.interval_time;
    var text_y = config4.text_y;
    var itemLabel = config4.itemLabel;
    var typeLabel = config4.typeLabel;
    // 长度小于display_barInfo的bar将不显示barInfo
    var display_barInfo = config4.display_barInfo;
    // 显示类型
    if (config4.use_type_info) {
        var use_type_info = config4.use_type_info;
    } else if (divide_by != "name") {
        var use_type_info = true;
    } else {
        var use_type_info = false;
    }
    // 使用计数器
    var use_counter = config4.use_counter;
    // 每个数据的间隔日期
    var step = config4.step;
    var long = config4.long;
    var format = config4.format;
    var left_margin = config4.left_margin;
    var right_margin = config4.right_margin;
    var top_margin = config4.top_margin;
    var bottom_margin = config4.bottom_margin;
    var timeFormat = config4.timeFormat;
    var item_x = config4.item_x;
    var max_number = config4.max_number;
    var reverse = config4.reverse;
    var text_x = config4.text_x;
    var offset = config4.offset;
    var animation = config4.animation;
    var deformat = config4.deformat;
    config4.imgs = Object.assign(config4.imgs, external_imgs);

    const margin = {
        left: left_margin,
        right: right_margin,
        top: top_margin,
        bottom: bottom_margin
    };
    var background_color = config4.background_color;

    d3.select("body").attr("style", "background:" + background_color);

    var enter_from_0 = config4.enter_from_0;
    interval_time /= 3;
    var lastData = [];
    var currentdate = time[0].toString();
    var currentData = [];
    var lastname;
    const svg4 = d3.select("#svg4");

    const width = svg4.attr("width");
    const height = svg4.attr("height");
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom - 32;
    //var dateLabel_y = height - margin.top - margin.bottom - 32;;
    const xValue = d => Number(d.value);
    const yValue = d => d.name;

    const g = svg4
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    const xAxisG = g
        .append("g")
        .attr("transform", `translate(0, ${innerHeight})`);
    const yAxisG = g.append("g");

    xAxisG
        .append("text")
        .attr("class", "axis-label")
        .attr("x", innerWidth / 2)
        .attr("y", 100);

    var xScale = d3.scaleLinear();
    if (use_semilogarithmic_coordinate) {
        xScale = d3.scalePow().exponent(0.5);
    } else {
        xScale = d3.scaleLinear();
    }
    const yScale = d3
        .scaleBand()
        .paddingInner(0.3)
        .paddingOuter(0);

    const xTicks = 10;
    const xAxis = d3
        .axisBottom()
        .scale(xScale)
        .ticks(xTicks)
        .tickPadding(20)
        .tickFormat(d => {
            if (d <= 0) {
                return "";
            }
            return d;
        })
        .tickSize(-innerHeight);

    const yAxis = d3
        .axisLeft()
        .scale(yScale)
        .tickPadding(5)
        .tickSize(-innerWidth);

    var dateLabel_switch = config4.dateLabel_switch;
    var dateLabel_x = config4.dateLabel_x;
    var dateLabel_y = config4.dateLabel_y;
    //dateLabel位置
    if (dateLabel_x == null || dateLabel_y == null) {
        dateLabel_x = innerWidth; //默认
        dateLabel_y = innerHeight; //默认
    } //是否隐藏
    if (dateLabel_switch == false) {
        dateLabel_switch = "hidden";
    } else {
        dateLabel_switch = "visible";
    }

    var dateLabel = g
        .insert("text")
        .data(currentdate)
        .attr("class", "dateLabel")
        .attr("style:visibility", dateLabel_switch)
        .attr("x", dateLabel_x)
        .attr("y", dateLabel_y)
        .attr("text-anchor", function() {
            return "end";
        })
        .text(currentdate);

    var topLabel = g
        .insert("text")
        .attr("class", "topLabel")
        .attr("x", item_x)
        .attr("y", text_y);

    function dataSort() {
        if (reverse) {
            currentData.sort(function(a, b) {
                if (Number(a.value) == Number(b.value)) {
                    var r1 = 0;
                    var r2 = 0;
                    for (let index = 0; index < a.name.length; index++) {
                        r1 = r1 + a.name.charCodeAt(index);
                    }
                    for (let index = 0; index < b.name.length; index++) {
                        r2 = r2 + b.name.charCodeAt(index);
                    }
                    return r2 - r1;
                } else {
                    return Number(a.value) - Number(b.value);
                }
            });
        } else {
            currentData.sort(function(a, b) {
                if (Number(a.value) == Number(b.value)) {
                    var r1 = 0;
                    var r2 = 0;
                    for (let index = 0; index < a.name.length; index++) {
                        r1 = r1 + a.name.charCodeAt(index);
                    }
                    for (let index = 0; index < b.name.length; index++) {
                        r2 = r2 + b.name.charCodeAt(index);
                    }
                    return r2 - r1;
                } else {
                    return Number(b.value) - Number(a.value);
                }
            });
        }
    }

    function getCurrentData(date) {
        rate = [];
        currentData = [];
        indexList = [];

        data.forEach(element => {
            if (element["date"] == date && parseFloat(element["value"]) != 0) {
                if (element.name.length > config4.bar_name_max) {
                    tail = "...";
                } else {
                    tail = "";
                }
                element.name = element.name.slice(0, config4.bar_name_max - 1) + tail;
                currentData.push(element);
            }
        });

        rate["MAX_RATE"] = 0;
        rate["MIN_RATE"] = 1;
        currentData.forEach(e => {
            _cName = e.name;
            lastData.forEach(el => {
                if (el.name == e.name) {
                    rate[e.name] = Number(Number(e.value) - Number(el.value));
                }
            });
            if (rate[e.name] == undefined) {
                rate[e.name] = rate["MIN_RATE"];
            }
            if (rate[e.name] > rate["MAX_RATE"]) {
                rate["MAX_RATE"] = rate[e.name];
            } else if (rate[e.name] < rate["MIN_RATE"]) {
                rate["MIN_RATE"] = rate[e.name];
            }
        });
        currentData = currentData.slice(0, max_number);
        dataSort();

        d3.transition("2")
            .each(redraw)
            .each(change);
        lastData = currentData;
    }

    if (showMessage) {
        // 左1文字
        var topInfo = g
            .insert("text")
            .attr("class", "growth")
            .attr("x", 0)
            .attr("y", text_y)
            .text(itemLabel);

        // 右1文字
        g.insert("text")
            .attr("class", "growth")
            .attr("x", text_x)
            .attr("y", text_y)
            .text(typeLabel);

        // 榜首日期计数
        if (use_counter == true) {
            var days = g
                .insert("text")
                .attr("class", "days")
                .attr("x", text_x + offset)
                .attr("y", text_y);
        } else {
            // 显示榜首type
            if (use_type_info == true) {
                var top_type = g
                    .insert("text")
                    .attr("class", "days")
                    .attr("x", text_x + offset)
                    .attr("y", text_y);
            }
        }
    }

    var lastname;
    var counter = {
        value: 1
    };

    var avg = 0;
    var enter_from_now = true;

    function redraw() {
        if (currentData.length == 0) return;
        // yScale
        //     .domain(currentData.map(d => d.name).reverse())
        //     .range([innerHeight, 0]);
        // x轴范围
        // 如果所有数字很大导致拉不开差距

        if (big_value) {
            xScale
                .domain([
                    2 * d3.min(currentData, xValue) - d3.max(currentData, xValue),
                    d3.max(currentData, xValue) + 10
                ])
                .range([0, innerWidth]);
        } else {
            xScale
                .domain([0, d3.max(currentData, xValue) + 1])
                .range([0, innerWidth]);
        }
        if (auto_sort) {
            dateLabel
                .data(currentData)
                .transition()
                .duration(baseTime * interval_time)
                .ease(d3.easeLinear)
                .tween("text", function(d) {
                    var self = this;
                    var i = d3.interpolateDate(
                        new Date(self.textContent),
                        new Date(d.date)
                    );
                    // var prec = (new Date(d.date) + "").split(".");
                    // var round = (prec.length > 1) ? Math.pow(10, prec[1].length) : 1;
                    return function(t) {
                        var dateformat = d3.timeFormat(timeFormat);
                        self.textContent = dateformat(i(t));
                    };
                });
        } else {
            dateLabel.text(currentdate);
        }

        xAxisG
            .transition()
            .duration(baseTime * interval_time)
            .ease(d3.easeLinear)
            .call(xAxis);
        yAxisG
            .transition()
            .duration(baseTime * interval_time)
            .ease(d3.easeLinear)
            .call(yAxis);

        yAxisG.selectAll(".tick").remove();
        if (!config4.show_x_tick) {
            xAxisG.selectAll(".tick").remove();
        }

        yScale
            .domain(currentData.map(d => d.name).reverse())
            .range([innerHeight, 0]);

        var bar = g.selectAll(".bar").data(currentData, function(d) {
            return d.name;
        });

        if (showMessage) {
            // 榜首文字
            topLabel.data(currentData).text(function(d) {
                if (lastname == d.name) {
                    counter.value = counter.value + step;
                } else {
                    counter.value = 1;
                }
                lastname = d.name;
                if (d.name.length > 24) return d.name.slice(0, 23) + "...";
                return d.name;
            });
            if (use_counter == true) {
                // 榜首持续时间更新
                days
                    .data(currentData)
                    .transition()
                    .duration(baseTime * interval_time)
                    .ease(d3.easeLinear)
                    .tween("text", function(d) {
                        var self = this;
                        var i = d3.interpolate(self.textContent, counter.value),
                            prec = (counter.value + "").split("."),
                            round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;

                        return function(t) {
                            self.textContent = d3.format(format)(
                                Math.round(i(t) * round) / round
                            );
                        };
                    });
            } else if (use_type_info == true) {
                // 榜首type更新
                top_type.data(currentData).text(function(d) {
                    return d["type"];
                });
            }
        }

        var barEnter = bar
            .enter()
            .insert("g", ".axis")
            .attr("class", "bar")
            .attr("transform", function(d) {
                return "translate(0," + yScale(yValue(d)) + ")";
            });

        if (config4.use_img) {
            barEnter
                .append("defs")
                .append("pattern")
                .attr("id", d => d.name)
                .attr("width", "100%")
                .attr("height", "100%")
                .append("image")
                .attr("x", "0")
                .attr("y", "0")
                .attr("width", "40")
                .attr("height", "40")
                .attr("href", d => config4.imgs[d.name]);

            barEnter
                .append("circle")
                .attr("fill-opacity", 0)
                .attr("cy", 63)
                .attr('fill', d => "url(#" + encodeURIComponent(d.name).replace("'", "%27").replace("(", "%28").replace(")", "%29") + ")")
                .attr("stroke-width", "0px")
                .transition("a")
                .delay(500 * interval_time)
                .duration(2490 * interval_time)
                .attr("stroke", d => getColor(d))
                .attr("stroke-width", "4px")
                .attr("x", -16)
                .attr("cx", -22)
                .attr("cy", 13)
                .attr("r", 40 / 2)
                .attr("fill-opacity", 1);
        }
        barEnter
            .append("rect")
            .attr("width", function(d) {
                if (enter_from_0) {
                    return 0;
                } else {
                    return xScale(currentData[currentData.length - 1].value);
                }
            })
            .attr("fill-opacity", 0)
            .attr("height", 26)
            .attr("y", 50)
            .style("fill", d => getColor(d))
            .transition("a")
            .delay(500 * interval_time)
            .duration(2490 * interval_time)
            .attr("y", 0)
            .attr("width", d => xScale(xValue(d)))
            .attr("fill-opacity", 1);

        if (config4.rounded_rectangle) {
            d3.selectAll("rect").attr("rx", 13);
        }
        if (config4.showLabel == true) {
            barEnter
                .append("text")
                .attr("y", 50)
                .attr("fill-opacity", 0)
                .style("fill", d => getColor(d))
                .transition("2")
                .delay(500 * interval_time)
                .duration(2490 * interval_time)
                .attr("fill-opacity", 1)
                .attr("y", 0)
                .attr("class", function(d) {
                    return "label ";
                })
                .attr("x", config4.labelx)
                .attr("y", 20)
                .attr("text-anchor", "end")
                .text(function(d) {
                    if (long) {
                        return "";
                    }
                    return d.name;
                });
        }

        // bar上文字
        var barInfo = barEnter
            .append("text")
            .attr("x", function(d) {
                if (long) return 10;
                if (enter_from_0) {
                    return 0;
                } else {
                    return xScale(currentData[currentData.length - 1].value);
                }
            })
            .attr("stroke", d => getColor(d))
            .attr("class", function() {
                return "barInfo";
            })
            .attr("y", 50)
            .attr("stroke-width", "0px")
            .attr("fill-opacity", 0)
            .transition()
            .delay(500 * interval_time)
            .duration(2490 * interval_time)
            .text(function(d) {
                if (use_type_info) {
                    return d[divide_by] + "-" + d.name;
                }
                return d.name;
            })
            .attr("x", d => {
                if (long) return 10;
                return xScale(xValue(d)) - 10;
            })
            .attr("fill-opacity", function(d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return 0;
                }
                return 1;
            })
            .attr("y", 2)
            .attr("dy", ".5em")
            .attr("text-anchor", function() {
                if (long) return "start";
                return "end";
            })
            .attr("stroke-width", function(d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return "0px";
                }
                return "1px";
            });
        if (long) {
            barInfo.tween("text", function(d) {
                var self = this;
                self.textContent = d.value;
                var i = d3.interpolate(self.textContent, Number(d.value)),
                    prec = (Number(d.value) + "").split("."),
                    round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                return function(t) {
                    self.textContent =
                        d[divide_by] +
                        "-" +
                        d.name +
                        "  数值:" +
                        d3.format(format)(Math.round(i(t) * round) / round);
                };
            });
        }
        if (!long) {
            barEnter
                .append("text")
                .attr("x", function() {
                    if (long) {
                        return 10;
                    }
                    if (enter_from_0) {
                        return 0;
                    } else {
                        return xScale(currentData[currentData.length - 1].value);
                    }
                })
                .attr("y", 50)
                .attr("fill-opacity", 0)
                .style("fill", d => getColor(d))
                .transition()
                .duration(2990 * interval_time)
                .tween("text", function(d) {
                    var self = this;
                    // 初始值为d.value的0.9倍
                    self.textContent = d.value * 0.9;
                    var i = d3.interpolate(self.textContent, Number(d.value)),
                        prec = (Number(d.value) + "").split("."),
                        round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                    // d.value = self.textContent
                    return function(t) {
                        self.textContent = d3.format(format)(
                            Math.round(i(t) * round) / round
                        ) + config4.postfix;
                        // d.value = self.textContent
                    };
                })
                .attr("fill-opacity", 1)
                .attr("y", 0)
                .attr("class", function(d) {
                    return "value";
                })
                .attr("x", d => {
                    return xScale(xValue(d)) + 10;
                })
                .attr("y", 22);
        }
        var barUpdate = bar
            .transition("2")
            .duration(2990 * interval_time)
            .ease(d3.easeLinear);

        barUpdate
            .select("rect")
            .style("fill", d => getColor(d))
            .attr("width", d => xScale(xValue(d)));
        if (config4.showLabel == true) {
            barUpdate
                .select(".label")
                .attr("class", function(d) {
                    return "label ";
                })
                .style("fill", d => getColor(d))
                .attr("width", d => xScale(xValue(d)));
        }
        if (!long) {
            barUpdate
                .select(".value")
                .attr("class", function(d) {
                    return "value";
                })
                .style("fill", d => getColor(d))
                .attr("width", d => xScale(xValue(d)));
        }
        barUpdate.select(".barInfo").attr("stroke", function(d) {
            return getColor(d);
        });

        if (config4.use_img) {
            barUpdate.select("circle").attr("stroke", function(d) {
                return getColor(d);
            });
        }

        var barInfo = barUpdate
            .select(".barInfo")
            .text(function(d) {
                if (use_type_info) {
                    return d[divide_by] + "-" + d.name;
                }
                return d.name;
            })
            .attr("x", d => {
                if (long) return 10;
                return xScale(xValue(d)) - 10;
            })
            .attr("fill-opacity", function(d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return 0;
                }
                return 1;
            })
            .attr("stroke-width", function(d) {
                if (xScale(xValue(d)) - 10 < display_barInfo) {
                    return "0px";
                }
                return "1px";
            });

        if (long) {
            barInfo.tween("text", function(d) {
                var self = this;
                var str = d[divide_by] + "-" + d.name + "  数值:";

                var i = d3.interpolate(
                        self.textContent.slice(str.length, 99),
                        Number(d.value)
                    ),
                    prec = (Number(d.value) + "").split("."),
                    round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                return function(t) {
                    self.textContent =
                        d[divide_by] +
                        "-" +
                        d.name +
                        "  数值:" +
                        d3.format(format)(Math.round(i(t) * round) / round);
                };
            });
        }
        if (!long) {
            barUpdate
                .select(".value")
                .tween("text", function(d) {
                    var self = this;

                    // if postfix is blank, do not slice.
                    if (config4.postfix == "") {
                        var i = d3.interpolate(self.textContent, Number(d.value));
                    } else {
                        var i = d3.interpolate(self.textContent.slice(0, -config4.postfix.length), Number(d.value));
                    }

                    var i = d3.interpolate(deformat(self.textContent, config4.postfix), Number(d.value))

                    var prec = (Number(d.value) + "").split("."),
                        round = prec.length > 1 ? Math.pow(10, prec[1].length) : 1;
                    // d.value = self.textContent
                    return function(t) {
                        self.textContent = d3.format(format)(
                            Math.round(i(t) * round) / round
                        ) + config4.postfix;
                        // d.value = self.textContent
                    };
                })
                .duration(2990 * interval_time)
                .attr("x", d => xScale(xValue(d)) + 10);
        }
        avg =
            (Number(currentData[0]["value"]) +
                Number(currentData[currentData.length - 1]["value"])) /
            2;

        var barExit = bar
            .exit()
            .attr("fill-opacity", 1)
            .transition()
            .duration(2500 * interval_time);
        barExit
            .attr("transform", function(d) {
                if (always_up) {
                    return "translate(0," + "-100" + ")";
                }
                if (Number(d.value) > avg && allow_up) {
                    return "translate(0," + "-100" + ")";
                }
                return "translate(0," + "1000" + ")";
            })
            .remove()
            .attr("fill-opacity", 0);
        barExit
            .select("rect")
            .attr("fill-opacity", 0)
            .attr("width", () => {
                if (always_up) return xScale(0);
                return xScale(currentData[currentData.length - 1]["value"])
            })
        if (!long) {
            barExit
                .select(".value")
                .attr("fill-opacity", 0)
                .attr("x", () => {
                    if (always_up) return xScale(0);
                    return xScale(currentData[currentData.length - 1]["value"]);
                });
        }
        barExit
            .select(".barInfo")
            .attr("fill-opacity", 0)
            .attr("stroke-width", function(d) {
                return "0px";
            })
            .attr("x", () => {
                if (long) return 10;
                if (always_up) return xScale(0);
                return xScale(currentData[currentData.length - 1]["value"]);
            });
        barExit.select(".label").attr("fill-opacity", 0);
        if (config4.use_img) {
            barExit.select("circle").attr("fill-opacity", 0)
        }
    }

    function change() {
        yScale
            .domain(currentData.map(d => d.name).reverse())
            .range([innerHeight, 0]);
        if (animation == "linear") {
            g.selectAll(".bar")
                .data(currentData, function(d) {
                    return d.name;
                })
                .transition("1")
                .ease(d3.easeLinear)
                .duration(baseTime * update_rate * interval_time)
                .attr("transform", function(d) {
                    return "translate(0," + yScale(yValue(d)) + ")";
                });
        } else {
            g.selectAll(".bar")
                .data(currentData, function(d) {
                    return d.name;
                })
                .transition("1")
                .duration(baseTime * update_rate * interval_time)
                .attr("transform", function(d) {
                    return "translate(0," + yScale(yValue(d)) + ")";
                });
        }
    }

    var i = 0;
    var p = config4.wait;
    var update_rate = config4.update_rate;
    var inter = setInterval(function next() {
        // 空过p回合
        while (p) {
            p -= 1;
            return;
        }
        currentdate = time[i];
        getCurrentData(time[i]);
        i++;

        if (i >= time.length) {
            window.clearInterval(inter);
        }
    }, baseTime * interval_time);
    // setInterval(() => {
    //     d3.transition()
    //         .each(change)
    // }, baseTime * update_rate * interval_time)
}