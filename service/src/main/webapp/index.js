var queryApp = new Vue({
    el: "#query-app",
    data: {
        packageName: "",
        deviceId: "",
        logList: []
    },
    methods: {
        query: function() {
            axios.get("/api/log/" + this.deviceId)
                .then(payload => this.logList = payload.data)
                .catch(error => console.log(error));
        }
    }
});


var app = new Vue({
    el: "#app",
    data: {
        deviceIdList: []
    },
    methods: {
        queryDeviceList: function() {
            axios.get("/api/devices")
                .then(payload => this.deviceIdList = payload.data)
                .catch(error => console.log(error));
        },
        query: function(deviceId) {
            queryApp.deviceId = deviceId;
            queryApp.query();
        }
    }
});

app.queryDeviceList();

