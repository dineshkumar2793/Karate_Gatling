var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "502",
        "ok": "251",
        "ko": "251"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "6",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "414",
        "ok": "414",
        "ko": "313"
    },
    "meanResponseTime": {
        "total": "18",
        "ok": "21",
        "ko": "15"
    },
    "standardDeviation": {
        "total": "48",
        "ok": "53",
        "ko": "42"
    },
    "percentiles1": {
        "total": "8",
        "ok": "10",
        "ko": "6"
    },
    "percentiles2": {
        "total": "12",
        "ok": "13",
        "ko": "10"
    },
    "percentiles3": {
        "total": "35",
        "ok": "40",
        "ko": "29"
    },
    "percentiles4": {
        "total": "313",
        "ok": "313",
        "ko": "309"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 251,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 251,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "41.833",
        "ok": "20.917",
        "ko": "20.917"
    }
},
contents: {
"req_get--user-get-6-26c71": {
        type: "REQUEST",
        name: "GET /user/get/62faae60194d7a50e482b5c7",
path: "GET /user/get/62faae60194d7a50e482b5c7",
pathFormatted: "req_get--user-get-6-26c71",
stats: {
    "name": "GET /user/get/62faae60194d7a50e482b5c7",
    "numberOfRequests": {
        "total": "251",
        "ok": "251",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "6",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "414",
        "ok": "414",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "21",
        "ok": "21",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "percentiles1": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "percentiles2": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "percentiles3": {
        "total": "40",
        "ok": "40",
        "ko": "-"
    },
    "percentiles4": {
        "total": "313",
        "ok": "313",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 251,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20.917",
        "ok": "20.917",
        "ko": "-"
    }
}
    },"req_get--user-users-60f7b": {
        type: "REQUEST",
        name: "GET /user/users/swiss/todos/",
path: "GET /user/users/swiss/todos/",
pathFormatted: "req_get--user-users-60f7b",
stats: {
    "name": "GET /user/users/swiss/todos/",
    "numberOfRequests": {
        "total": "251",
        "ok": "0",
        "ko": "251"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "-",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "313",
        "ok": "-",
        "ko": "313"
    },
    "meanResponseTime": {
        "total": "15",
        "ok": "-",
        "ko": "15"
    },
    "standardDeviation": {
        "total": "42",
        "ok": "-",
        "ko": "42"
    },
    "percentiles1": {
        "total": "6",
        "ok": "-",
        "ko": "6"
    },
    "percentiles2": {
        "total": "10",
        "ok": "-",
        "ko": "10"
    },
    "percentiles3": {
        "total": "29",
        "ok": "-",
        "ko": "29"
    },
    "percentiles4": {
        "total": "309",
        "ok": "-",
        "ko": "309"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 251,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20.917",
        "ok": "-",
        "ko": "20.917"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
