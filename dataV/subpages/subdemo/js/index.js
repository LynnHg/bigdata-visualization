const g1 = echarts.init(document.getElementById("g1"));
//地图配置项

option = {
        title: {
            text: '程序员分布',
            x: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: {
            min: 0,
            max: 20949,
            calculable: true,
            inRange: {
                color: ['#B9EDF8', '#39BAE8', '#1F6ED4', '#0000A1']
            },
            text: ['high', 'low'],
            textStyle: {
                color: '#fff'
            }
        },
        color: ['#08ffc8', '#FE88A2'],
        legend: [{
            "data": [
                "各国程序员分布",
                "各国程序员第一行代码平均年龄",
            ],
            selectedMode: 'single',
            textStyle: {
                color: '#6de5ec',
                fontSize: 20
            },
            top: '5%'
        }],
        tooltip: {
            trigger: 'item',
            formatter: '{b}:<br/>{c}'
        },
        geo: {
            map: 'world',
            aspectScale: 0.75,
            layoutCenter: ['50%', '50%'],
            layoutSize: 600,
            left: 40,
            roam: false,
            silent: true,
            itemStyle: {
                normal: {
                    areaColor: '#101f32',
                    borderWidth: 1.1,
                    borderColor: '#43d0d6'
                },
                emphasis: {
                    areaColor: '#069'
                }
            },
        },
        series: [{
                name: "各国程序员分布",
                type: 'map',
                mapType: 'world',
                // zoom: 1.2,
                left: 40,
                layoutCenter: ['50%', '50%'],
                layoutSize: 600,
                mapLocation: {
                    y: 100
                },
                data: [{ 'name': 'United States', 'value': 20949 },
                    { 'name': 'India', 'value': 9061 },
                    { 'name': 'Germany', 'value': 5866 },
                    { 'name': 'United Kingdom', 'value': 5737 },
                    { 'name': 'Canada', 'value': 3395 },
                    { 'name': 'France', 'value': 2391 },
                    { 'name': 'Brazil', 'value': 1948 },
                    { 'name': 'Poland', 'value': 1922 },
                    { 'name': 'Australia', 'value': 1903 },
                    { 'name': 'Netherlands', 'value': 1852 },
                    { 'name': 'Russian Federation', 'value': 1694 },
                    { 'name': 'Spain', 'value': 1604 },
                    { 'name': 'Italy', 'value': 1576 },
                    { 'name': 'Sweden', 'value': 1274 },
                    { 'name': 'Switzerland', 'value': 978 },
                    { 'name': 'Israel', 'value': 952 },
                    { 'name': 'Turkey', 'value': 949 },
                    { 'name': 'Pakistan', 'value': 923 },
                    { 'name': 'Ukraine', 'value': 868 },
                    { 'name': 'Austria', 'value': 839 },
                    { 'name': 'Czech Republic', 'value': 764 },
                    { 'name': 'Romania', 'value': 760 },
                    { 'name': 'Iran', 'value': 738 },
                    { 'name': 'Belgium', 'value': 727 },
                    { 'name': 'China', 'value': 664 },
                    { 'name': 'Bulgaria', 'value': 659 },
                    { 'name': 'Mexico', 'value': 642 },
                    { 'name': 'South Africa', 'value': 627 },
                    { 'name': 'Denmark', 'value': 617 },
                    { 'name': 'Bangladesh', 'value': 605 },
                    { 'name': 'Norway', 'value': 574 },
                    { 'name': 'Greece', 'value': 556 },
                    { 'name': 'Argentina', 'value': 553 },
                    { 'name': 'Finland', 'value': 546 },
                    { 'name': 'Portugal', 'value': 525 },
                    { 'name': 'New Zealand', 'value': 524 },
                    { 'name': 'Nigeria', 'value': 522 },
                    { 'name': 'Hungary', 'value': 513 },
                    { 'name': 'Indonesia', 'value': 507 },
                    { 'name': 'Ireland', 'value': 501 },
                    { 'name': 'Serbia', 'value': 402 },
                    { 'name': 'Japan', 'value': 391 },
                    { 'name': 'Philippines', 'value': 381 },
                    { 'name': 'Sri Lanka', 'value': 372 },
                    { 'name': 'Egypt', 'value': 323 },
                    { 'name': 'Colombia', 'value': 313 },
                    { 'name': 'Singapore', 'value': 303 },
                    { 'name': 'Malaysia', 'value': 299 },
                    { 'name': 'Slovenia', 'value': 298 },
                    { 'name': 'Croatia', 'value': 260 },
                    { 'name': 'Slovakia', 'value': 260 },
                    { 'name': 'Kenya', 'value': 249 },
                    { 'name': 'Lithuania', 'value': 248 },
                    { 'name': 'Nepal', 'value': 237 },
                    { 'name': 'Viet Nam', 'value': 231 },
                    { 'name': 'Thailand', 'value': 214 },
                    { 'name': 'Chile', 'value': 206 },
                    { 'name': 'Belarus', 'value': 202 },
                    { 'name': 'Estonia', 'value': 195 },
                    { 'name': 'Hong Kong (S.A.R.)', 'value': 188 },
                    { 'name': 'Taiwan', 'value': 187 },
                    { 'name': 'South Korea', 'value': 160 },
                    { 'name': 'United Arab Emirates', 'value': 158 },
                    { 'name': 'Morocco', 'value': 155 },
                    { 'name': 'Latvia', 'value': 136 },
                    { 'name': 'Other Country (Not Listed Above)', 'value': 136 },
                    { 'name': 'Algeria', 'value': 134 },
                    { 'name': 'Peru', 'value': 130 },
                    { 'name': 'Tunisia', 'value': 130 },
                    { 'name': 'Lebanon', 'value': 120 },
                    { 'name': 'Uruguay', 'value': 111 },
                    { 'name': 'Bosnia and Herzegovina', 'value': 108 },
                    { 'name': 'Saudi Arabia', 'value': 98 },
                    { 'name': 'Dominican Republic', 'value': 97 },
                    { 'name': 'Venezuela, Bolivarian Republic of...', 'value': 88 },
                    { 'name': 'Armenia', 'value': 86 },
                    { 'name': 'Albania', 'value': 86 },
                    { 'name': 'Ghana', 'value': 84 },
                    { 'name': 'Costa Rica', 'value': 84 },
                    { 'name': 'Ecuador', 'value': 82 },
                    { 'name': 'Georgia', 'value': 80 },
                    { 'name': 'Uganda', 'value': 72 },
                    { 'name': 'Guatemala', 'value': 67 },
                    { 'name': 'El Salvador', 'value': 67 },
                    { 'name': 'Malta', 'value': 65 },
                    { 'name': 'Jordan', 'value': 65 },
                    { 'name': 'Kazakhstan', 'value': 64 },
                    { 'name': 'Cyprus', 'value': 64 },
                    { 'name': 'Luxembourg', 'value': 61 },
                    { 'name': 'The former Yugoslav Republic of Macedonia', 'value': 54 },
                    { 'name': 'Myanmar', 'value': 52 },
                    { 'name': 'Paraguay', 'value': 52 },
                    { 'name': 'Ethiopia', 'value': 52 },
                    { 'name': 'Cameroon', 'value': 51 },
                    { 'name': 'Azerbaijan', 'value': 49 },
                    { 'name': 'Iceland', 'value': 49 },
                    { 'name': 'Afghanistan', 'value': 44 },
                    { 'name': 'Republic of Moldova', 'value': 43 },
                    { 'name': 'Sudan', 'value': 42 },
                    { 'name': 'Zimbabwe', 'value': 39 },
                    { 'name': 'Iraq', 'value': 39 },
                    { 'name': 'Republic of Korea', 'value': 39 },
                    { 'name': 'Uzbekistan', 'value': 39 },
                    { 'name': 'Bolivia', 'value': 36 },
                    { 'name': "Côte d'Ivoire", 'value': 34 },
                    { 'name': 'Panama', 'value': 33 },
                    { 'name': 'United Republic of Tanzania', 'value': 32 },
                    { 'name': 'Cambodia', 'value': 30 },
                    { 'name': 'Nicaragua', 'value': 30 },
                    { 'name': 'Cuba', 'value': 30 },
                    { 'name': 'Syrian Arab Republic', 'value': 29 },
                    { 'name': 'Jamaica', 'value': 28 },
                    { 'name': 'Honduras', 'value': 27 },
                    { 'name': 'Mauritius', 'value': 26 },
                    { 'name': 'Senegal', 'value': 21 },
                    { 'name': 'Kuwait', 'value': 20 },
                    { 'name': 'Kyrgyzstan', 'value': 19 },
                    { 'name': 'Trinidad and Tobago', 'value': 19 },
                    { 'name': 'Yemen', 'value': 19 },
                    { 'name': 'Bahrain', 'value': 18 },
                    { 'name': 'Mongolia', 'value': 17 },
                    { 'name': 'Montenegro', 'value': 17 },
                    { 'name': 'Madagascar', 'value': 15 },
                    { 'name': 'Somalia', 'value': 13 },
                    { 'name': 'Maldives', 'value': 13 },
                    { 'name': 'Qatar', 'value': 13 },
                    { 'name': 'Rwanda', 'value': 12 },
                    { 'name': 'Zambia', 'value': 12 },
                    { 'name': 'Oman', 'value': 11 },
                    { 'name': 'Libyan Arab Jamahiriya', 'value': 10 },
                    { 'name': 'Antigua and Barbuda', 'value': 9 },
                    { 'name': 'Swaziland', 'value': 8 },
                    { 'name': 'Turkmenistan', 'value': 7 },
                    { 'name': 'Mauritania', 'value': 7 },
                    { 'name': 'Andorra', 'value': 7 },
                    { 'name': 'Congo, Republic of the...', 'value': 7 },
                    { 'name': 'Mozambique', 'value': 7 },
                    { 'name': 'Democratic Republic of the Congo', 'value': 7 },
                    { 'name': 'Tajikistan', 'value': 7 },
                    { 'name': 'Benin', 'value': 5 },
                    { 'name': 'Haiti', 'value': 5 },
                    { 'name': 'Angola', 'value': 5 },
                    { 'name': 'Fiji', 'value': 5 },
                    { 'name': 'Namibia', 'value': 5 },
                    { 'name': 'Botswana', 'value': 5 },
                    { 'name': 'Burkina Faso', 'value': 4 },
                    { 'name': 'Monaco', 'value': 4 },
                    { 'name': 'Togo', 'value': 4 },
                    { 'name': 'Bahamas', 'value': 3 },
                    { 'name': 'Lesotho', 'value': 3 },
                    { 'name': "Lao People's Democratic Republic", 'value': 3 },
                    { 'name': 'Belize', 'value': 3 },
                    { 'name': 'Guinea', 'value': 3 },
                    { 'name': 'Mali', 'value': 3 },
                    { 'name': 'Guyana', 'value': 3 },
                    { 'name': 'Cape Verde', 'value': 3 },
                    { 'name': "Democratic People's Republic of Korea", 'value': 3 },
                    { 'name': 'Burundi', 'value': 3 },
                    { 'name': 'Liechtenstein', 'value': 3 },
                    { 'name': 'Barbados', 'value': 3 },
                    { 'name': 'Seychelles', 'value': 2 },
                    { 'name': 'Sierra Leone', 'value': 2 },
                    { 'name': 'Bhutan', 'value': 2 },
                    { 'name': 'San Marino', 'value': 2 },
                    { 'name': 'Malawi', 'value': 2 },
                    { 'name': 'Liberia', 'value': 2 },
                    { 'name': 'Djibouti', 'value': 2 },
                    { 'name': 'Gabon', 'value': 2 },
                    { 'name': 'Brunei Darussalam', 'value': 1 },
                    { 'name': 'Dominica', 'value': 1 },
                    { 'name': 'Sao Tome and Principe', 'value': 1 },
                    { 'name': 'Papua New Guinea', 'value': 1 },
                    { 'name': 'North Korea', 'value': 1 },
                    { 'name': 'Timor-Leste', 'value': 1 },
                    { 'name': 'Tonga', 'value': 1 },
                    { 'name': 'Chad', 'value': 1 },
                    { 'name': 'Saint Vincent and the Grenadines', 'value': 1 },
                    { 'name': 'Niger', 'value': 1 },
                    { 'name': 'Saint Kitts and Nevis', 'value': 1 }
                ],
                symbolSize: 12,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                emphasis: {
                    itemStyle: {
                        areaColor: '#08ffc8'
                    },
                }

            },
            {
                name: "各国程序员第一行代码平均年龄",
                type: 'map',
                mapType: 'world',
                // zoom: 1.2,
                left: 40,
                layoutCenter: ['50%', '50%'],
                layoutSize: 600,
                mapLocation: {
                    y: 100
                },
                data: [{ "name": "Ireland", "value": 15 },
                    { "name": "India", "value": 16 },
                    { "name": "Other Country (Not Listed Above)", "value": 15 },
                    { "name": "Lao People's Democratic Republic", "value": 13 },
                    { "name": "Iran", "value": 15 },
                    { "name": "Tunisia", "value": 17 },
                    { "name": "Russian Federation", "value": 14 },
                    { "name": "Maldives", "value": 13 },
                    { "name": "Democratic People's Republic of Korea", "value": 4 },
                    { "name": "Mauritania", "value": 18 },
                    { "name": "Argentina", "value": 15 },
                    { "name": "New Zealand", "value": 14 },
                    { "name": "Bulgaria", "value": 15 },
                    { "name": "Portugal", "value": 15 },
                    { "name": "Sudan", "value": 18 },
                    { "name": "Rwanda", "value": 20 },
                    { "name": "Uzbekistan", "value": 16 },
                    { "name": "Iraq", "value": 15 },
                    { "name": "Iceland", "value": 15 },
                    { "name": "United Republic of Tanzania", "value": 18 },
                    { "name": "Jordan", "value": 15 },
                    { "name": "China", "value": 16 },
                    { "name": "Mauritius", "value": 16 },
                    { "name": "Slovakia", "value": 14 },
                    { "name": "Germany", "value": 14 },
                    { "name": "Chad", "value": 21 },
                    { "name": "Israel", "value": 14 },
                    { "name": "Brunei Darussalam", "value": 15 },
                    { "name": "Swaziland", "value": 18 },
                    { "name": "Republic of Moldova", "value": 15 },
                    { "name": "San Marino", "value": 17 },
                    { "name": "Uruguay", "value": 16 },
                    { "name": "Chile", "value": 16 },
                    { "name": "Denmark", "value": 14 },
                    { "name": "United Kingdom", "value": 14 },
                    { "name": "Monaco", "value": 15 },
                    { "name": "Georgia", "value": 16 },
                    { "name": "Liberia", "value": 14 },
                    { "name": "Panama", "value": 17 },
                    { "name": "Venezuela, Bolivarian Republic of...", "value": 16 },
                    { "name": "Azerbaijan", "value": 17 },
                    { "name": "Ghana", "value": 19 },
                    { "name": "Dominica", "value": 7 },
                    { "name": "United Arab Emirates", "value": 16 },
                    { "name": "Albania", "value": 16 },
                    { "name": "South Korea", "value": 17 },
                    { "name": "Kyrgyzstan", "value": 16 },
                    { "name": "Bolivia", "value": 16 },
                    { "name": "Belgium", "value": 15 },
                    { "name": "Egypt", "value": 16 },
                    { "name": "Bosnia and Herzegovina", "value": 16 },
                    { "name": "Liechtenstein", "value": 13 },
                    { "name": "Colombia", "value": 16 },
                    { "name": "Viet Nam", "value": 15 },
                    { "name": "Zimbabwe", "value": 19 },
                    { "name": "Singapore", "value": 15 },
                    { "name": "Spain", "value": 15 },
                    { "name": "Bahamas", "value": 11 },
                    { "name": "Cameroon", "value": 17 },
                    { "name": "Niger", "value": 20 },
                    { "name": "Turkey", "value": 16 },
                    { "name": "Estonia", "value": 14 },
                    { "name": "Latvia", "value": 15 },
                    { "name": "Ecuador", "value": 16 },
                    { "name": "Montenegro", "value": 14 },
                    { "name": "Pakistan", "value": 17 },
                    { "name": "Bhutan", "value": 19 },
                    { "name": "Saudi Arabia", "value": 19 },
                    { "name": "Malta", "value": 14 },
                    { "name": "Bahrain", "value": 16 },
                    { "name": "Malaysia", "value": 17 },
                    { "name": "Saint Vincent and the Grenadines", "value": 14 },
                    { "name": "Finland", "value": 14 },
                    { "name": "Australia", "value": 14 },
                    { "name": "Myanmar", "value": 16 },
                    { "name": "Andorra", "value": 10 },
                    { "name": "Ethiopia", "value": 16 },
                    { "name": "Lebanon", "value": 16 },
                    { "name": "Philippines", "value": 16 },
                    { "name": "Congo, Republic of the...", "value": 17 },
                    { "name": "Croatia", "value": 15 },
                    { "name": "Burkina Faso", "value": 18 },
                    { "name": "Guyana", "value": 11 },
                    { "name": "Belize", "value": 16 },
                    { "name": "Dominican Republic", "value": 16 },
                    { "name": "Serbia", "value": 16 },
                    { "name": "Algeria", "value": 17 },
                    { "name": "Bangladesh", "value": 18 },
                    { "name": "Seychelles", "value": 11 },
                    { "name": "Taiwan", "value": 16 },
                    { "name": "Turkmenistan", "value": 17 },
                    { "name": "Angola", "value": 18 },
                    { "name": "Qatar", "value": 16 },
                    { "name": "Romania", "value": 15 },
                    { "name": "South Africa", "value": 16 },
                    { "name": "Brazil", "value": 16 },
                    { "name": "Saint Kitts and Nevis", "value": 56 },
                    { "name": "Sri Lanka", "value": 16 },
                    { "name": "Nepal", "value": 16 },
                    { "name": "Nicaragua", "value": 17 },
                    { "name": "Norway", "value": 14 },
                    { "name": "Oman", "value": 15 },
                    { "name": "Kazakhstan", "value": 16 },
                    { "name": "Gabon", "value": 16 },
                    { "name": "Sao Tome and Principe", "value": 25 },
                    { "name": "Lesotho", "value": 20 },
                    { "name": "Tajikistan", "value": 13 },
                    { "name": "Sweden", "value": 14 },
                    { "name": "Benin", "value": 17 },
                    { "name": "Ukraine", "value": 15 },
                    { "name": "Greece", "value": 16 },
                    { "name": "Madagascar", "value": 20 },
                    { "name": "Hong Kong (S.A.R.)", "value": 13 },
                    { "name": "Peru", "value": 16 },
                    { "name": "Somalia", "value": 16 },
                    { "name": "Democratic Republic of the Congo", "value": 19 },
                    { "name": "Uganda", "value": 19 },
                    { "name": "Nigeria", "value": 19 },
                    { "name": "Thailand", "value": 15 },
                    { "name": "Mali", "value": 19 },
                    { "name": "Burundi", "value": 18 },
                    { "name": "Afghanistan", "value": 17 },
                    { "name": "Sierra Leone", "value": 22 },
                    { "name": "Armenia", "value": 16 },
                    { "name": "Botswana", "value": 17 },
                    { "name": "Kenya", "value": 18 },
                    { "name": "Republic of Korea", "value": 16 },
                    { "name": "Djibouti", "value": 16 },
                    { "name": "Cyprus", "value": 14 },
                    { "name": "El Salvador", "value": 16 },
                    { "name": "Austria", "value": 14 },
                    { "name": "Syrian Arab Republic", "value": 17 },
                    { "name": "North Korea", "value": 4 },
                    { "name": "Belarus", "value": 14 },
                    { "name": "Costa Rica", "value": 15 },
                    { "name": "Cuba", "value": 15 },
                    { "name": "Cape Verde", "value": 19 },
                    { "name": "Antigua and Barbuda", "value": 10 },
                    { "name": "Guinea", "value": 18 },
                    { "name": "Togo", "value": 18 },
                    { "name": "France", "value": 15 },
                    { "name": "Paraguay", "value": 15 },
                    { "name": "Fiji", "value": 23 },
                    { "name": "Switzerland", "value": 14 },
                    { "name": "Mongolia", "value": 14 },
                    { "name": "Mexico", "value": 16 },
                    { "name": "Canada", "value": 15 },
                    { "name": "Senegal", "value": 22 },
                    { "name": "Italy", "value": 14 },
                    { "name": "Morocco", "value": 17 },
                    { "name": "The former Yugoslav Republic of Macedonia", "value": 16 },
                    { "name": "Cambodia", "value": 18 },
                    { "name": "Honduras", "value": 18 },
                    { "name": "Luxembourg", "value": 15 },
                    { "name": "Poland", "value": 14 },
                    { "name": "Trinidad and Tobago", "value": 16 },
                    { "name": "Yemen", "value": 19 },
                    { "name": "Guatemala", "value": 14 },
                    { "name": "Netherlands", "value": 14 },
                    { "name": "Mozambique", "value": 15 },
                    { "name": "Namibia", "value": 16 },
                    { "name": "Haiti", "value": 16 },
                    { "name": "Libyan Arab Jamahiriya", "value": 17 },
                    { "name": "Japan", "value": 15 },
                    { "name": "United States", "value": 15 },
                    { "name": "Jamaica", "value": 15 },
                    { "name": "Côte d'Ivoire", "value": 19 },
                    { "name": "Papua New Guinea", "value": 18 },
                    { "name": "Zambia", "value": 21 },
                    { "name": "Lithuania", "value": 14 },
                    { "name": "Malawi", "value": 14 },
                    { "name": "Kuwait", "value": 18 },
                    { "name": "Czech Republic", "value": 13 },
                    { "name": "Slovenia", "value": 14 },
                    { "name": "Indonesia", "value": 16 },
                    { "name": "Barbados", "value": 15 },
                    { "name": "Timor-Leste", "value": 14 },
                    { "name": "Hungary", "value": 14 },
                ],

                symbolSize: 12,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                emphasis: {
                    itemStyle: {
                        areaColor: '#08ffc8'
                    },
                }

            }
        ],
    }
    //渲染报表
g1.setOption(option);