$(function() {
    var chart_fe25f1bc280146df8ac0d01382873794 = echarts.init(
        document.getElementById('fe25f1bc280146df8ac0d01382873794'), 'white', { renderer: 'canvas' });
    var option_fe25f1bc280146df8ac0d01382873794 = {
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,
        "color": [
            "#b2fcff",
            "#5edfff",
            "#3e64ff",
            "#ecfcff",
            "#8ac6d1",
            "#248ea9",
            "#59d4e8",
            "#b1e8ed",
            "#00b7a8",
            "#7b88ff"
        ],
        "series": [{
            "type": "pie",
            "clockwise": true,
            "data": [{
                    "name": "\u79ef\u6781",
                    "value": 58.67
                },
                {
                    "name": "\u6765\u8005\u4e0d\u62d2",
                    "value": 26.17
                },
                {
                    "name": "\u6ca1\u5174\u8da3",
                    "value": 15.16
                }
            ],
            "radius": [
                "40%",
                "75%"
            ],
            "center": [
                "50%",
                "50%"
            ],
            "label": {
                "show": true,
                "position": "top",
                "margin": 8,
                "formatter": "{b}: {c}%"
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }],
        "legend": [{
            "data": [
                "\u79ef\u6781",
                "\u6765\u8005\u4e0d\u62d2",
                "\u6ca1\u5174\u8da3"
            ],
            "selected": {},
            "show": false,
            "left": "2%",
            "top": "15%",
            "orient": "vertical",
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14,
            "textStyle": {
                "color": [
                    "#6ef6ff"
                ]
            }
        }],
        "tooltip": {
            "show": true,
            "trigger": "item",
            "triggerOn": "mousemove|click",
            "axisPointer": {
                "type": "line"
            },
            "textStyle": {
                "fontSize": 14
            },
            "borderWidth": 0
        },
        "title": [{
            "text": "\u6c42\u804c\u72b6\u6001",
            "textStyle": {
                "color": "#6ef6ff"
            }
        }]
    };
    chart_fe25f1bc280146df8ac0d01382873794.setOption(option_fe25f1bc280146df8ac0d01382873794);

    var chart_cb5f0dfce5f246ae87724b7271f62a72 = echarts.init(
        document.getElementById('cb5f0dfce5f246ae87724b7271f62a72'), 'walden', { renderer: 'canvas' });
    var option_cb5f0dfce5f246ae87724b7271f62a72 = {
        color: ['#00b7a8'],
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,
        "series": [{
            "type": "bar",
            "data": [
                53949,
                40621,
                26211,
                18687,
                16314,
                12966
            ],
            "barCategoryGap": "20%",
            "label": {
                "show": true,
                "position": "right",
                "margin": 8
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }],
        "legend": [{
            "data": [
                ""
            ],
            "selected": {
                "": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }],
        "tooltip": {
            "show": true,
            "trigger": "item",
            "triggerOn": "mousemove|click",
            "axisPointer": {
                "type": "line"
            },
            "textStyle": {
                "fontSize": 14
            },
            "borderWidth": 0
        },
        "xAxis": [{
            "show": false,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }],
        "yAxis": [{
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLine": {
                "show": true,
                "onZero": true,
                "onZeroAxisIndex": 0,
                "lineStyle": {
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid",
                    "color": "#6ef6ff"
                }
            },
            "axisLabel": {
                "show": true,
                "position": "top",
                "color": "#6ef6ff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "\u9ad8\u7ba1\u8c08\u8bdd",
                "\u6280\u672f\u5927\u725b\u9762\u8bd5",
                "\u73b0\u573a\u6572\u4ee3\u7801",
                "\u73b0\u573a\u624b\u5199\u4ee3\u7801",
                "\u5b8c\u6210\u4e00\u4e2a\u9879\u76ee",
                "\u8111\u7b4b\u6025\u8f6c\u5f2f"
            ]
        }],
        "title": [{
            "text": "\u9762\u8bd5\u7ecf\u5386",
            "textStyle": {
                "color": "#6ef6ff"
            }
        }]
    };
    chart_cb5f0dfce5f246ae87724b7271f62a72.setOption(option_cb5f0dfce5f246ae87724b7271f62a72);


    var chart_47eefded766e453fb62e57d537ef37ad = echarts.init(
        document.getElementById('47eefded766e453fb62e57d537ef37ad'), 'white', { renderer: 'canvas' });
    var option_47eefded766e453fb62e57d537ef37ad = {
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,
        "color": [
            "#c23531",
            "#2f4554",
            "#61a0a8",
            "#d48265",
            "#749f83",
            "#ca8622",
            "#bda29a",
            "#6e7074",
            "#546570",
            "#c4ccd3",
            "#f05b72",
            "#ef5b9c",
            "#f47920",
            "#905a3d",
            "#fab27b",
            "#2a5caa",
            "#444693",
            "#726930",
            "#b2d235",
            "#6d8346",
            "#ac6767",
            "#1d953f",
            "#6950a1",
            "#918597"
        ],
        "series": [{
            "type": "wordCloud",
            "shape": "star",
            "rotationRange": [
                0,
                0
            ],
            "rotationStep": 45,
            "girdSize": 20,
            "sizeRange": [
                12,
                60
            ],
            "data": [{
                    "name": "\u4f7f\u7528\u7684\u6280\u672f",
                    "value": 31555,
                    "textStyle": {
                        "normal": {
                            "color": '#b2fcff'
                        }
                    }
                },
                {
                    "name": "\u529e\u516c\u73af\u5883\u548c\u516c\u53f8\u6587\u5316",
                    "value": 27231,
                    "textStyle": {
                        "normal": {
                            "color": '#5edfff'
                        }
                    }
                },
                {
                    "name": "\u7075\u6d3b\u7684\u5de5\u4f5c\u65f6\u95f4",
                    "value": 26681,
                    "textStyle": {
                        "normal": {
                            "color": '#3e64ff'
                        }
                    }
                },
                {
                    "name": "\u53d1\u5c55\u673a\u4f1a",
                    "value": 26535,
                    "textStyle": {
                        "normal": {
                            "color": '#ecfcff'
                        }
                    }
                },
                {
                    "name": "\u8fdc\u7a0b\u5de5\u4f5c",
                    "value": 19362,
                    "textStyle": {
                        "normal": {
                            "color": '#8ac6d1'
                        }
                    }
                },
                {
                    "name": "\u5de5\u4f5c\u6210\u679c\u7684\u5f71\u54cd\u529b",
                    "value": 13693,
                    "textStyle": {
                        "normal": {
                            "color": '#248ea9'
                        }
                    }
                },
                {
                    "name": "\u884c\u4e1a\u9886\u57df",
                    "value": 8638,
                    "textStyle": {
                        "normal": {
                            "color": '#59d4e8'
                        }
                    }
                },
                {
                    "name": "\u516c\u53f8\u8d22\u52a1\u72b6\u51b5",
                    "value": 8508,
                    "textStyle": {
                        "normal": {
                            "color": '#b1e8ed'
                        }
                    }
                },
                {
                    "name": "\u56e2\u961f\u548c\u90e8\u95e8",
                    "value": 7090,
                    "textStyle": {
                        "normal": {
                            "color": "#7b88ff"
                        }
                    }
                },
                {
                    "name": "\u516c\u53f8\u7ed3\u6784\u591a\u6837\u6027",
                    "value": 3856,
                    "textStyle": {
                        "normal": {
                            "color": "rgb(133,65,104)"
                        }
                    }
                }
            ]
        }],
        "legend": [{
            "data": [],
            "selected": {},
            "show": true,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }],
        "tooltip": {
            "show": true,
            "trigger": "item",
            "triggerOn": "mousemove|click",
            "axisPointer": {
                "type": "line"
            },
            "textStyle": {
                "fontSize": 14
            },
            "borderWidth": 0
        },
        "title": [{
            "text": "\u6c42\u804c\u8981\u7d20",
            "textStyle": {
                "color": "#6ef6ff"
            }
        }]
    };
    chart_47eefded766e453fb62e57d537ef37ad.setOption(option_47eefded766e453fb62e57d537ef37ad);

    var chart_733b065e4f244c12b8c91f34697a0779 = echarts.init(
        document.getElementById('733b065e4f244c12b8c91f34697a0779'), 'walden', { renderer: 'canvas' });
    var option_733b065e4f244c12b8c91f34697a0779 = {
        color: ['#00b7a8'],
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,
        "series": [{
            "type": "bar",
            "data": [
                53949,
                40621,
                26211,
                18687,
                16314,
                12966
            ],
            "barCategoryGap": "20%",
            "label": {
                "show": true,
                "position": "right",
                "margin": 8
            },
            "rippleEffect": {
                "show": true,
                "brushType": "stroke",
                "scale": 2.5,
                "period": 4
            }
        }],
        "legend": [{
            "data": [
                ""
            ],
            "selected": {
                "": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }],
        "tooltip": {
            "show": true,
            "trigger": "item",
            "triggerOn": "mousemove|click",
            "axisPointer": {
                "type": "line"
            },
            "textStyle": {
                "fontSize": 14
            },
            "borderWidth": 0
        },
        "xAxis": [{
            "show": false,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            }
        }],
        "yAxis": [{
            "show": true,
            "scale": false,
            "nameLocation": "end",
            "nameGap": 15,
            "gridIndex": 0,
            "axisLine": {
                "show": true,
                "onZero": true,
                "onZeroAxisIndex": 0,
                "lineStyle": {
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid",
                    "color": "#6ef6ff"
                }
            },
            "axisLabel": {
                "show": true,
                "position": "top",
                "color": "#6ef6ff",
                "margin": 8
            },
            "inverse": false,
            "offset": 0,
            "splitNumber": 5,
            "minInterval": 0,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "width": 1,
                    "opacity": 1,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "data": [
                "\u9ad8\u7ba1\u8c08\u8bdd",
                "\u6280\u672f\u5927\u725b\u9762\u8bd5",
                "\u73b0\u573a\u6572\u4ee3\u7801",
                "\u73b0\u573a\u624b\u5199\u4ee3\u7801",
                "\u5b8c\u6210\u4e00\u4e2a\u9879\u76ee",
                "\u8111\u7b4b\u6025\u8f6c\u5f2f"
            ]
        }],
        "title": [{
            "text": "\u9762\u8bd5\u7ecf\u5386",
            "textStyle": {
                "color": "#6ef6ff"
            }
        }]
    };
    chart_733b065e4f244c12b8c91f34697a0779.setOption(option_733b065e4f244c12b8c91f34697a0779);

    var chart_66c154340190437bbcee8c1fe1740a3d = echarts.init(
        document.getElementById('66c154340190437bbcee8c1fe1740a3d'), 'shine', { renderer: 'canvas' });
    var option_66c154340190437bbcee8c1fe1740a3d = {
        "animation": true,
        "animationThreshold": 2000,
        "animationDuration": 1000,
        "animationEasing": "cubicOut",
        "animationDelay": 0,
        "animationDurationUpdate": 300,
        "animationEasingUpdate": "cubicOut",
        "animationDelayUpdate": 0,
        "series": [{
            "type": "funnel",
            "name": "\u5546\u54c1",
            "data": [{
                    "name": "\u975e\u5e38\u6ee1\u610f",
                    "value": 29173
                },
                {
                    "name": "\u6709\u70b9\u6ee1\u610f",
                    "value": 25018
                },
                {
                    "name": "\u6709\u70b9\u4e0d\u6ee1\u610f",
                    "value": 7670
                },
                {
                    "name": "\u4e2d\u7acb",
                    "value": 7252
                },
                {
                    "name": "\u975e\u5e38\u4e0d\u6ee1\u610f",
                    "value": 3734
                }
            ],
            "sort": "ascending",
            "gap": 0,
            "label": {
                "show": true,
                "position": "inside",
                "margin": 8
            }
        }],
        "legend": [{
            "data": [
                "\u6709\u70b9\u6ee1\u610f",
                "\u975e\u5e38\u6ee1\u610f",
                "\u4e2d\u7acb",
                "\u975e\u5e38\u4e0d\u6ee1\u610f",
                "\u6709\u70b9\u4e0d\u6ee1\u610f"
            ],
            "selected": {
                "\u975e\u5e38\u6ee1\u610f": true,
                "\u6709\u70b9\u6ee1\u610f": true,
                "\u6709\u70b9\u4e0d\u6ee1\u610f": true,
                "\u4e2d\u7acb": true,
                "\u975e\u5e38\u4e0d\u6ee1\u610f": true
            },
            "show": false,
            "padding": 5,
            "itemGap": 10,
            "itemWidth": 25,
            "itemHeight": 14
        }],
        "tooltip": {
            "show": true,
            "trigger": "item",
            "triggerOn": "mousemove|click",
            "axisPointer": {
                "type": "line"
            },
            "textStyle": {
                "fontSize": 14
            },
            "borderWidth": 0
        },
        "title": [{
            "text": "\u662f\u5426\u559c\u6b22\u8fd9\u4e2a\u804c\u4e1a",
            "textStyle": {
                "color": "#6ef6ff"
            }
        }]
    };
    chart_66c154340190437bbcee8c1fe1740a3d.setOption(option_66c154340190437bbcee8c1fe1740a3d);
});