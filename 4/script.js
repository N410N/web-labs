let user;

function Task1() {
    user = {
        ID: 1,
        login: "n410",
        password: "qwerty",
    };
    console.log("Завдання 1:", user);
}

let admin = {
    type: "admin",
    users: [],
    addUser: function (user) {
        this.users.push(user);
        console.log("Додавання користувача:", user);
    },
    deleteUser: function (userID) {
        this.users = this.users.filter((user) => user.ID !== userID);
        console.log("Видалення користувача з ІД:", userID);
    },
    editUser: function (userID, newData) {
        this.users = this.users.map((user) => (user.ID === userID ? { ...user, ...newData } : user));
        console.log("Зміна даних користувача з ІД:", userID, "Нові дані:", newData);
    },
};

function Task2() {
    console.log("Завдання 2:", admin);
}

function Task3() {
    const adminUser = Object.assign({}, user, admin);
    console.log("Завдання 3:", adminUser);
    adminUser.addUser({ ID: 2, login: "Levi", password: "asdfghg" });
    adminUser.deleteUser(1);
    adminUser.editUser(2, { login: "Eren", password: "zxcvbnm" });
}

function Task4() {
    console.log("Завдання 4:");

    user.__proto__.showData = function () {
        console.log("Дані користувача (прототип):", this.ID, this.login, this.password);
    };
}


function Task5() {
    const user2 = Object.create(user);
    user2.isAdmin = true;

    user2.__proto__.showData = function () {
        console.log("Дані користувача (вдосконалено з прототипу):", this.ID, this.login, this.password, "Адміністратор:", this.isAdmin);
    };

    console.log("Завдання 5:");
    user2.showData();
}


function Task6() {
    class UserClass {
        constructor(ID, login, password) {
            this._ID = ID;
            this._login = login;
            this._password = password;
        }

        get ID() {
            return this._ID;
        }

        get login() {
            return this._login;
        }

        set login(value) {
            this._login = value;
        }

        get password() {
            return this._password;
        }

        set password(value) {
            this._password = value;
        }

        showData() {
            console.log("Дані користувача (клас):", this._ID, this._login, this._password);
        }
    }

    class AdminClass extends UserClass {
        constructor(ID, login, password) {
            super(ID, login, password);
            this._type = "admin";
            this._users = [];
        }

        get users() {
            return this._users;
        }

        addUser(user) {
            this._users.push(user);
            console.log("Додавання користувача (клас):", user);
        }

        deleteUser(userID) {
            this._users = this._users.filter((user) => user.ID !== userID);
            console.log("Видалення користувача (клас) з ІД:", userID);
        }

        editUser(userID, newData) {
            this._users = this._users.map((user) => (user.ID === userID ? { ...user, ...newData } : user));
            console.log("Зміна даних користувача (клас) з ІД:", userID, "Нові дані:", newData);
        }
    }
    console.log("Завдання 6:");
    const userClass = new UserClass(1, "n410", "qwerty");
    const adminClass = new AdminClass(1, "admin123", "adminPassword");
    adminClass.addUser({ ID: 2, login: "Levi", password: "asdfghg" });
    adminClass.deleteUser(1);
    adminClass.editUser(2, { login: "Eren", password: "zxcvbnm" });
    userClass.showData();
    adminClass.showData();
}