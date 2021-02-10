
/*
* 객체 (Object)
* - 값들을 그룹으로 묶은 데이터 모음
* */

var family = {
    'address': 'Seoul',
    members: {},
    addFamily: function (age, name, role) {
        this.members[role] = {
            age: age,
            name: name
        };
    },
    getHeadcount: function () {
        return Object.keys(this.members).length;
    }
}

/* ES6 */
var address = 'Seoul'
var members = {};
var addFamily = function (age, name, role) {
    this.members[role] = {age, name};
};

var getHeadcount = function () {
    return Object.keys(this.members).length;
}

var family2 = {address, members, addFamily, getHeadcount};