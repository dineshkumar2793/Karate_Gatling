var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "502",
        "ok": "0",
        "ko": "502"
    },
    "minResponseTime": {
        "total": "4033",
        "ok": "-",
        "ko": "4033"
    },
    "maxResponseTime": {
        "total": "4227",
        "ok": "-",
        "ko": "4227"
    },
    "meanResponseTime": {
        "total": "4093",
        "ok": "-",
        "ko": "4093"
    },
    "standardDeviation": {
        "total": "29",
        "ok": "-",
        "ko": "29"
    },
    "percentiles1": {
        "total": "4090",
        "ok": "-",
        "ko": "4090"
    },
    "percentiles2": {
        "total": "4104",
        "ok": "-",
        "ko": "4104"
    },
    "percentiles3": {
        "total": "4128",
        "ok": "-",
        "ko": "4128"
    },
    "percentiles4": {
        "total": "4227",
        "ok": "-",
        "ko": "4227"
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
    "count": 502,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.869",
        "ok": "-",
        "ko": "2.869"
    }
},
contents: {
"req_get--karate-api-1ad96": {
        type: "REQUEST",
        name: "GET /karate-api/status",
path: "GET /karate-api/status",
pathFormatted: "req_get--karate-api-1ad96",
stats: {
    "name": "GET /karate-api/status",
    "numberOfRequests": {
        "total": "251",
        "ok": "0",
        "ko": "251"
    },
    "minResponseTime": {
        "total": "4033",
        "ok": "-",
        "ko": "4033"
    },
    "maxResponseTime": {
        "total": "4227",
        "ok": "-",
        "ko": "4227"
    },
    "meanResponseTime": {
        "total": "4093",
        "ok": "-",
        "ko": "4093"
    },
    "standardDeviation": {
        "total": "29",
        "ok": "-",
        "ko": "29"
    },
    "percentiles1": {
        "total": "4090",
        "ok": "-",
        "ko": "4090"
    },
    "percentiles2": {
        "total": "4105",
        "ok": "-",
        "ko": "4105"
    },
    "percentiles3": {
        "total": "4129",
        "ok": "-",
        "ko": "4129"
    },
    "percentiles4": {
        "total": "4227",
        "ok": "-",
        "ko": "4227"
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
        "total": "1.434",
        "ok": "-",
        "ko": "1.434"
    }
}
    },"req_get--karate-api-bf2ef": {
        type: "REQUEST",
        name: "GET /karate-api/users/swiss/todos/",
path: "GET /karate-api/users/swiss/todos/",
pathFormatted: "req_get--karate-api-bf2ef",
stats: {
    "name": "GET /karate-api/users/swiss/todos/",
    "numberOfRequests": {
        "total": "251",
        "ok": "0",
        "ko": "251"
    },
    "minResponseTime": {
        "total": "4036",
        "ok": "-",
        "ko": "4036"
    },
    "maxResponseTime": {
        "total": "4227",
        "ok": "-",
        "ko": "4227"
    },
    "meanResponseTime": {
        "total": "4093",
        "ok": "-",
        "ko": "4093"
    },
    "standardDeviation": {
        "total": "28",
        "ok": "-",
        "ko": "28"
    },
    "percentiles1": {
        "total": "4092",
        "ok": "-",
        "ko": "4092"
    },
    "percentiles2": {
        "total": "4103",
        "ok": "-",
        "ko": "4103"
    },
    "percentiles3": {
        "total": "4128",
        "ok": "-",
        "ko": "4128"
    },
    "percentiles4": {
        "total": "4227",
        "ok": "-",
        "ko": "4227"
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
        "total": "1.434",
        "ok": "-",
        "ko": "1.434"
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
