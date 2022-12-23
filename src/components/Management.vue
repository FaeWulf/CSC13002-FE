<template>
    <div class="nav-group">
        <a
            href="#"
            :class="currentTag === 0 ? 'nav-selected' : ''"
            @click="onTagClicked($event, 0)"
            ><i class="bx bx-add-to-queue"></i
            ><span>Tiếp nhận học sinh</span></a
        >
        <a
            href="#"
            :class="currentTag === 1 ? 'nav-selected' : ''"
            @click="onTagClicked($event, 1)"
            ><i class="bx bx-user-pin"></i><span>Cập nhật học sinh</span></a
        >
        <a
            href="#"
            :class="currentTag === 2 ? 'nav-selected' : ''"
            @click="onTagClicked($event, 2)"
            ><i class="bx bx-notepad"></i><span>Lập danh sách lớp</span></a
        >
        <a
            href="#"
            :class="currentTag === 3 ? 'nav-selected' : ''"
            @click="onTagClicked($event, 3)"
            ><i class="bx bx-columns"></i><span>Nhập bảng điểm</span></a
        >
        <a
            href="#"
            :class="currentTag === 4 ? 'nav-selected' : ''"
            @click="onTagClicked($event, 4)"
            ><i class="bx bx-bar-chart-alt-2"></i><span>Lập báo cáo</span></a
        >
    </div>
    <!-- Tiếp nhận học sinh -->
    <div class="tag-content" v-if="currentTag === 0">
        <div class="title">
            <span>Thêm học sinh</span>
            <div class="btn-group">
                <button id="remove">
                    <i class="bx bx-x"></i><span class="btn-text">Hủy bỏ</span>
                </button>
                <button id="change">
                    <i class="bx bx-check"></i
                    ><span class="btn-text">Thêm học sinh</span>
                </button>
            </div>
        </div>
        <div class="info-table">
            <table>
                <tr>
                    <td><label>Họ và tên</label><input type="text" /></td>
                    <td><label>Email</label><input type="text" /></td>
                    <td><label>Giới tính</label><input type="text" /></td>
                </tr>
                <tr>
                    <td><label>Lớp</label><input type="text" /></td>
                    <td><label>Ngày sinh</label><input type="date" /></td>
                    <td><label>Số điện thoại</label><input type="text" /></td>
                </tr>
                <tr>
                    <td colspan="3">
                        <label>Địa chỉ</label
                        ><textarea id="address" type="text"></textarea>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <!-- Cập nhật học sinh -->
    <div class="tag-content" v-if="currentTag === 1">
        <div class="update-student" v-if="updateTable === 1">
            <div class="title">
                <span>Đã chọn</span>
                <div class="btn-group">
                    <button id="remove">
                        <i class="bx bx-x"></i
                        ><span class="btn-text">Xoá học sinh</span>
                    </button>
                    <button id="change">
                        <i class="bx bx-check"></i
                        ><span class="btn-text">Hoàn tất sửa đổi</span>
                    </button>
                </div>
            </div>
            <div class="info-table">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label>Họ và tên</label
                                ><input type="text" :value="std_details.name" />
                            </td>
                            <td>
                                <label>Email</label
                                ><input
                                    type="text"
                                    :value="std_details.email"
                                />
                            </td>
                            <td>
                                <label>Giới tính</label
                                ><input
                                    type="text"
                                    :value="std_details.gender"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Lớp</label
                                ><input
                                    type="text"
                                    :value="std_details.grade"
                                />
                            </td>
                            <td>
                                <label>Ngày sinh</label
                                ><input
                                    type="date"
                                    :value="std_details.birthdate"
                                />
                            </td>
                            <td>
                                <label>Số điện thoại</label
                                ><input
                                    type="text"
                                    :value="std_details.phone"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <label>Địa chỉ</label
                                ><textarea
                                    id="address"
                                    type="text"
                                    v-model="std_details.address"
                                ></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="search-insert">
            <div class="search-insert-title">
                <span>Tìm kiếm học sinh</span>
                <div class="search-input">
                    <input
                        id="input-search"
                        type="text"
                        placeholder="Nhập tên học sinh ..."
                    />
                    <label for="input-search"
                        ><button @click="printDetails">
                            <i class="bx bx-search"></i></button
                    ></label>
                </div>
            </div>
            <div class="update-table">
                <table>
                    <thead>
                        <th>Tên</th>
                        <th>Lớp</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th style="padding-right: 40px">Điện thoại</th>
                        <th hidden>Email</th>
                        <th hidden>Địa chỉ</th>
                    </thead>
                    <tbody>
                        <tr
                            @click="showDetails($event, 1)"
                            v-for="std in student"
                            :key="std.id"
                        >
                            <td>{{ std.name }}</td>
                            <td>{{ std.class }}</td>
                            <td>{{ std.gender }}</td>
                            <td>{{ std.birthday }}</td>
                            <td>{{ std.phonenumber }}</td>
                            <td hidden>{{ std.email }}</td>
                            <td hidden>{{ std.address }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- Lâp danh sách lớp -->
    <div class="tag-content" v-if="currentTag === 2">
        <div class="class-list">
            <div class="class-select">
                <span class="class-list-title">Danh sách lớp</span>
                <select name="class">
                    <option value="10A1">10A1</option>
                    <option value="11A2">11A2</option>
                    <option value="12A3">12A3</option>
                </select>
            </div>
            <div class="btn-group">
                <button id="remove">
                    <i class="bx bx-x"></i><span class="btn-text">Xoá lớp</span>
                </button>
                <button id="change">
                    <i class="bx bx-check"></i
                    ><span class="btn-text">Hoàn tất sửa đổi</span>
                </button>
            </div>
        </div>
        <div class="insert-table">
            <table id="table-std">
                <thead>
                    <th style="text-align: left">Tên</th>
                    <th>Lớp</th>
                    <th>Giới tính</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td>ABC</td>
                        <td>10A1</td>
                        <td>Nam</td>
                        <td><button id="remove">Xoá khỏi lớp</button></td>
                    </tr>
                    <tr>
                        <td>XYZ</td>
                        <td>11A1</td>
                        <td>Nữ</td>
                        <td><button id="remove">Xoá khỏi lớp</button></td>
                    </tr>
                    <tr>
                        <td>DEF</td>
                        <td>12A1</td>
                        <td>Nam</td>
                        <td><button id="remove">Xoá khỏi lớp</button></td>
                    </tr>
                    <tr>
                        <td>ABC</td>
                        <td>10A1</td>
                        <td>Nam</td>
                        <td><button id="remove">Xoá khỏi lớp</button></td>
                    </tr>
                    <tr>
                        <td>XYZ</td>
                        <td>11A1</td>
                        <td>Nữ</td>
                        <td><button id="remove">Xoá khỏi lớp</button></td>
                    </tr>
                    <tr>
                        <td>DEF</td>
                        <td>12A1</td>
                        <td>Nam</td>
                        <td><button id="remove">Xoá khỏi lớp</button></td>
                    </tr>
                    <tr>
                        <td>ABC</td>
                        <td>10A1</td>
                        <td>Nam</td>
                        <td><button id="remove">Xoá khỏi lớp</button></td>
                    </tr>
                    <tr>
                        <td>XYZ</td>
                        <td>11A1</td>
                        <td>Nữ</td>
                        <td><button id="remove">Xoá khỏi lớp</button></td>
                    </tr>
                    <tr>
                        <td>DEF</td>
                        <td>12A1</td>
                        <td>Nam</td>
                        <td><button id="remove">Xoá khỏi lớp</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="search-insert">
            <div class="search-insert-title">
                <span>Tìm kiếm học sinh</span>
                <div class="search-input">
                    <input
                        id="input-search"
                        type="text"
                        placeholder="Nhập tên học sinh ..."
                    />
                    <label for="input-search"
                        ><button><i class="bx bx-search"></i></button
                    ></label>
                </div>
            </div>
            <div class="insert-table">
                <table id="table-std">
                    <thead>
                        <th style="text-align: left">Tên</th>
                        <th>Lớp</th>
                        <th>Giới tính</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ABC</td>
                            <td>10A1</td>
                            <td>Nam</td>
                            <td>
                                <button id="change">Thêm vào lớp</button>
                            </td>
                        </tr>
                        <tr>
                            <td>XYZ</td>
                            <td>11A1</td>
                            <td>Nữ</td>
                            <td>
                                <button id="change">Thêm vào lớp</button>
                            </td>
                        </tr>
                        <tr>
                            <td>DEF</td>
                            <td>12A1</td>
                            <td>Nam</td>
                            <td>
                                <button id="change">Thêm vào lớp</button>
                            </td>
                        </tr>
                        <tr>
                            <td>ABC</td>
                            <td>10A1</td>
                            <td>Nam</td>
                            <td>
                                <button id="change">Thêm vào lớp</button>
                            </td>
                        </tr>
                        <tr>
                            <td>XYZ</td>
                            <td>11A1</td>
                            <td>Nữ</td>
                            <td>
                                <button id="change">Thêm vào lớp</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- Nhập bảng điểm -->
    <div class="tag-content" v-if="currentTag === 3">
        <div class="mark-title">
            <span>Lựa chọn</span>
        </div>
        <div class="mark-select">
            <div class="select-group">
                <label for="class">Lớp</label>
                <select name="class" id="class" v-model="lop">
                    <option
                        v-for="lop in lophoc"
                        :key="lop.malop"
                        :value="lop.tenlop"
                    >
                        {{ lop.tenlop }}
                    </option>
                </select>
            </div>
            <div class="select-group">
                <label for="term">Học kì</label>
                <select name="term2" id="term2" v-model="hk">
                    <option
                        v-for="hk in hocki"
                        :key="hk.mahk"
                        :value="hk.tenhk"
                    >
                        {{ hk.tenhk }}
                    </option>
                </select>
            </div>
            <div class="select-group">
                <label for="subject">Môn</label>
                <select name="subject" id="subject" v-model="mon">
                    <option
                        v-for="mon in monhoc"
                        :key="mon.mamh"
                        :value="mon.tenmh"
                    >
                        {{ mon.tenmh }}
                    </option>
                </select>
            </div>
        </div>
        <div class="mark-title-table">
            <span>{{ lop }} - {{ hk }} - {{ mon }}</span>
            <div class="btn-group-mark">
                <button @click="showSTD" id="remove">
                    <i class="bx bx-x"></i><i>Huỷ</i>
                </button>
                <button id="change">
                    <i class="bx bx-check"></i><i>Xong</i>
                </button>
            </div>
        </div>
        <div class="mark-table">
            <table>
                <thead>
                    <th style="text-align: left">Tên</th>
                    <th>Điểm 15'</th>
                    <th>Điểm 1 tiết</th>
                    <th>Điểm học kì</th>
                </thead>
                <tbody>
                    <tr v-for="(std, index) in student" :key="std.id">
                        <td>
                            <label for="">{{ std.name }}</label>
                        </td>
                        <td>
                            <input
                                v-model="mark_std[index].exam_1"
                                type="text"
                            />
                        </td>
                        <td>
                            <input
                                v-model="mark_std[index].exam_2"
                                type="text"
                            />
                        </td>
                        <td>
                            <input
                                v-model="mark_std[index].exam_3"
                                type="text"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- Lập báo cáo -->
    <div class="tag-content" v-if="currentTag === 4">
        <div class="report-title">
            <span>Lựa chọn</span>
        </div>
        <div class="report-select">
            <div class="select-group">
                <label for="term1">Học kì</label>
                <select name="term" id="term1" v-model="hk">
                    <option
                        v-for="hk in hocki"
                        :key="hk.mahk"
                        :value="hk.tenhk"
                    >
                        {{ hk.tenhk }}
                    </option>
                </select>
            </div>
            <div class="select-group">
                <label for="subject">Môn</label>
                <select name="subject" id="subject" v-model="mon">
                    <option
                        v-for="mon in monhoc"
                        :key="mon.mamh"
                        :value="mon.tenmh"
                    >
                        {{ mon.tenmh }}
                    </option>
                </select>
            </div>
        </div>
        <div class="report-title-table">
            <span>Báo cáo tổng kết {{ hk }} - {{ mon }}</span>
            <div class="btn-group-report">
                <button id="remove"><i class="bx bx-x"></i><i>Huỷ</i></button>
                <button id="change"><i class="bx bx-check"></i><i>Xong</i>
                </button>
            </div>
        </div>
        <div class="report-table">
            <table>
                <thead>
                    <th>Lớp</th>
                    <th>Sĩ số</th>
                    <th>Số lượng đạt</th>
                    <th>Tỉ lệ</th>
                </thead>
                <tbody>
                    <tr>
                        <td>10A1</td>
                        <td>35</td>
                        <td>35</td>
                        <td>100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import students from '../assets/data/students.json';

export default {
    name: 'ManagementComponent',
    data() {
        return {
            currentTag: 0,
            updateTable: 0,
            student: students,
            std_details: {},
            mark_std: [],
            monhoc: [],
            hocki: [],
            lophoc: [],
            mon: '',
            hk: '',
            lop: '',
        };
    },
    beforeMount() {
        for (let i = 0; i < this.student.length; i++) {
            let new_mark = {
                id: this.student[i].id,
                exam_1: null,
                exam_2: null,
                exam_3: null,
            };
            this.mark_std.push(new_mark);
        }
        fetch(this.base_url + '/monhoc/all')
            .then((res) => res.json())
            .then((data) => (this.monhoc = data.data.map((x) => x)));
        fetch(this.base_url + '/hocki/all')
            .then((res) => res.json())
            .then((data) => (this.hocki = data.data.map((x) => x)));
        fetch(this.base_url + '/auth')
            .then((res) => res.json())
            .then((data) => (this.lophoc = data.map((x) => x)));
    },
    methods: {
        onTagClicked(e, tagId) {
            let tagNumber = parseInt(tagId);
            if (tagNumber >= 0 && tagNumber <= 4) {
                this.updateTable = 0;
                this.currentTag = tagNumber;
            }
        },
        showDetails(e, param1) {
            this.std_details.name = e.path[1].childNodes[0].innerText;
            this.std_details.grade = e.path[1].childNodes[1].innerText;
            this.std_details.gender = e.path[1].childNodes[2].innerText;
            this.std_details.birthdate = e.path[1].childNodes[3].innerText;
            this.std_details.phone = e.path[1].childNodes[4].innerText;
            this.std_details.email = e.path[1].childNodes[5].innerText;
            this.std_details.address = e.path[1].childNodes[6].innerText;
            this.updateTable = param1;
        },
        showSTD() {
            for (let i = 0; i < this.mark_std.length; i++) {
                this.mark_std[i].exam_1 = parseFloat(this.mark_std[i].exam_1);
                this.mark_std[i].exam_2 = parseFloat(this.mark_std[i].exam_2);
                this.mark_std[i].exam_3 = parseFloat(this.mark_std[i].exam_3);

                if (
                    isNaN(this.mark_std[i].exam_1) ||
                    this.mark_std[i].exam_1 < 0.0
                )
                    this.mark_std[i].exam_1 = null;
                if (
                    isNaN(this.mark_std[i].exam_2) ||
                    this.mark_std[i].exam_2 < 0.0
                )
                    this.mark_std[i].exam_2 = null;
                if (
                    isNaN(this.mark_std[i].exam_3) ||
                    this.mark_std[i].exam_3 < 0.0
                )
                    this.mark_std[i].exam_3 = null;
            }
        },
    },
};
</script>
<style scoped>
/* CSS for tab */
.nav-group {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.nav-group .nav-selected {
    color: #fff;
    background-color: var(--primary-color);
    opacity: 1;
}

.nav-group a {
    display: flex;
    align-items: center;
    height: 50px;
    text-decoration: none;
    color: var(--text-color);
    font-size: 1.25rem;
    padding: 0 25px 0 20px;
    opacity: 0.75;
    border-radius: 6px;
    transition: var(--tran-03);
    margin: 0 10px;
}
.nav-group a:hover {
    background-color: var(--hover-color);
    color: var(--text-color);
    opacity: 1;
}
.nav-group .nav-selected:hover {
    background-color: var(--selected-hover-color);
    color: #fff;
    opacity: 1;
}

.nav-group i {
    padding-right: 10px;
}

/* CSS for Insert student tab */
.title {
    display: flex;
    justify-content: space-around;
    margin-top: 55px;
}
.title span {
    font-size: 28px;
    color: var(--text-color);
    padding: 10px;
}

.btn-group button {
    display: inline-flex;
    height: 40px;
    margin: 0 10px;
    border-radius: 20px;
    align-items: center;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    border: 0;
    color: var(--text-color);
}
.btn-group .btn-text {
    font-size: 20px;
    padding: 0px 15px 0px 0px;
}
.btn-group i {
    font-size: 20px;
    padding-left: 5px;
    padding-right: 5px;
}
.btn-group #remove {
    background-color: var(--remove-btn);
}
.btn-group #change {
    background-color: var(--change-btn);
}
.btn-group button:hover {
    opacity: 0.75;
}

.info-table {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.info-table table {
    border-spacing: 40px;
    border: 2px solid var(--text-color);
    border-radius: 25px;
}

.info-table table label {
    color: var(--text-color);
    font-size: 23px;
}

.info-table table input {
    height: 30px;
    max-width: 300px;
    width: 100%;
    font-size: 20px;
    border-radius: 8px;
    padding: 10px;
    border: 0;
}

.info-table table #address {
    width: 600px;
    margin-bottom: -25px;
    margin-left: 5px;
    font-size: 20px;
    height: 50px;
    border-radius: 8px;
    padding: 10px;
    border: 0;
}

/* CSS for update students tab  */
.update-table {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    max-height: 50vh;
    overflow-y: auto;
}

.update-table table {
    border: 2px solid var(--text-color);
    border-radius: 25px;
    padding: 10px 0;
    max-width: 1060px;
}

.update-table td:first-child,
.update-table th:first-child {
    padding-left: 40px;
    text-align: left;
    width: 340px;
}

.update-table td:nth-child(2) {
    text-align: center;
    width: 150px;
}

.update-table td:nth-child(3) {
    text-align: center;
    width: 150px;
}
.update-table td:nth-child(4) {
    text-align: center;
    width: 200px;
}

.update-table td:nth-child(5) {
    width: 200px;
    text-align: center;
    padding-right: 40px;
}
.update-table table th {
    font-size: 25px;
    font-weight: 900;
    height: 60px;
    color: var(--primary-color);
}
.update-table table tr {
    height: 60px;
}
.update-table table tr:hover {
    background: var(--hover-color);
}

.update-table table td {
    font-size: 20px;
    color: var(--text-color);
}

.update-table table td #remove {
    border: 2px solid var(--remove-btn);
    color: var(--remove-btn);
}

.update-table table td #remove:hover {
    background-color: var(--remove-btn);
    transition: var(--tran-03);
    color: var(--text-color);
}

.update-table table td #change {
    border: 2px solid var(--change-btn);
    color: var(--change-btn);
}

.update-table table td #change:hover {
    background-color: var(--change-btn);
    transition: var(--tran-03);
    color: var(--text-color);
}

/* CSS for Create classes tab */
.class-list {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 55px 0;
}
.class-list .class-list-title {
    font-size: 28px;
    color: var(--primary-color);
    font-weight: 900;
    padding: 0 10px;
    line-height: 15px;
}

select {
    height: 40px;
    font-size: 20px;
    background: var(--body-color);
    color: var(--text-color);
    margin-left: 10px;
    padding: 10px;
    border: 1px solid var(--text-color);
    border-radius: 5px;
}

.insert-table {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    max-height: 50vh;
    overflow-y: auto;
}

#table-std {
    border: 2px solid var(--text-color);
    border-radius: 25px;
    padding: 10px 0;
    max-width: 960px;
}

#table-std td:first-child,
#table-std th:first-child {
    width: 360px;
    padding-left: 60px;
}

#table-std td:nth-child(2) {
    text-align: center;
    width: 150px;
}

#table-std td:nth-child(3) {
    text-align: center;
    width: 150px;
}

#table-std td:nth-child(4) {
    width: 280px;
    text-align: center;
}

#table-std th {
    font-size: 25px;
    font-weight: 900;
    height: 70px;
    color: var(--primary-color);
}

#table-std td {
    font-size: 20px;
    padding: 0;
    height: 70px;
    color: var(--text-color);
}

.search-insert-title {
    display: flex;
    justify-content: space-evenly;
    margin-top: 55px;
}
.search-insert-title span {
    font-size: 28px;
    color: var(--primary-color);
    padding: 0 10px;
    font-weight: 900;
}
.search-insert-title .search-input {
    display: flex;
    align-items: center;
}

.search-insert-title input {
    height: 30px;
    width: 350px;
    font-size: 20px;
    border-radius: 8px;
    padding: 10px;
    border: 0;
}
.search-insert-title button {
    background-color: var(--primary-color);
    height: 30px;
    width: 50px;
    font-size: 20px;
    border-radius: 8px;
    border: 0;
    margin-left: 5px;
}
.search-insert-title button:hover {
    opacity: 0.5;
}

.search-insert-title i {
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
}

#table-std td button {
    max-width: 200px;
    height: 40px;
    margin: 0 10px;
    border-radius: 20px;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    background: var(--body-color);
    padding: 0 15px;
}

#table-std td #remove {
    border: 2px solid var(--remove-btn);
    color: var(--remove-btn);
}

#table-std td #remove:hover {
    background-color: var(--remove-btn);
    transition: var(--tran-03);
    color: var(--text-color);
}

#table-std td #change {
    border: 2px solid var(--change-btn);
    color: var(--change-btn);
}

#table-std td #change:hover {
    background-color: var(--change-btn);
    transition: var(--tran-03);
    color: var(--text-color);
}

/* CSS for mark insert tab */

.mark-title {
    display: flex;
    justify-content: space-around;
    margin-top: 55px;
}

.mark-title span {
    font-size: 33px;
    color: var(--primary-color);
    font-weight: 900;
    line-height: 15px;
}

.mark-select {
    display: flex;
    justify-content: center;
    margin: 30px;
}

.select-group {
    padding: 40px;
    border-bottom: 3px solid var(--text-color);
}

.select-group label {
    font-size: 28px;
    color: var(--text-color);
    font-weight: 900;
    padding: 20px;
}

.select-group #subject {
    width: 100px;
}

.mark-title-table {
    display: flex;
    justify-content: space-around;
    margin-top: 55px;
}

.mark-title-table span {
    position: absolute;
    left: 300px;
    font-size: 28px;
    color: var(--text-color);
    padding: 10px;
}

.btn-group-mark button {
    display: inline-flex;
    position: relative;
    right: -350px;
    height: 40px;
    margin: 0 10px;
    border-radius: 20px;
    align-items: center;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    border: 0;
    color: var(--text-color);
}
.btn-group-mark .btn-text {
    font-size: 20px;
    padding: 0px 15px 0px 0px;
}
.btn-group-mark i {
    font-size: 20px;
    padding-right: 5px;
    font-style: normal;
}
.btn-group-mark #remove {
    background-color: var(--remove-btn);
}
.btn-group-mark #change {
    background-color: var(--change-btn);
}
.btn-group-mark button:hover {
    opacity: 0.75;
}

.mark-table {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    max-height: 50vh;
    overflow-y: auto;
}

.mark-table table {
    border: 2px solid var(--text-color);
    border-radius: 25px;
    padding: 10px 0;
    max-width: 960px;
}

.mark-table td:first-child,
.mark-table th:first-child {
    width: 340px;
    padding-left: 40px;
}

.mark-table td:nth-child(2),
.mark-table th:nth-child(2) {
    width: 200px;
    text-align: center;
}
.mark-table td:nth-child(3),
.mark-table th:nth-child(3) {
    width: 200px;
    text-align: center;
}
.mark-table td:nth-child(4),
.mark-table th:nth-child(4) {
    width: 200px;
    text-align: center;
}

.mark-table th {
    height: 60px;
    font-size: 27px;
    color: var(--primary-color);
}

.mark-table td {
    height: 60px;
}

.mark-table table label {
    color: var(--text-color);
    font-size: 23px;
}

.mark-table table input {
    height: 30px;
    max-width: 120px;
    width: 100%;
    font-size: 20px;
    border-radius: 8px;
    padding: 10px;
    border: 0;
    text-align: center;
}

/* CSS for report tab */

.report-title {
    display: flex;
    justify-content: space-around;
    margin-top: 55px;
}

.report-title span {
    font-size: 33px;
    color: var(--primary-color);
    font-weight: 900;
    line-height: 15px;
}

.report-select {
    display: flex;
    justify-content: center;
    margin: 30px;
}

.select-group {
    padding: 40px;
    border-bottom: 3px solid var(--text-color);
}

.select-group label {
    font-size: 28px;
    color: var(--text-color);
    font-weight: 900;
    padding: 20px;
}

.select-group #subject {
    width: 100px;
}

.report-title-table {
    display: flex;
    justify-content: space-evenly;
    margin-top: 55px;
}

.report-title-table span {
    position: absolute;
    left: 300px;
    font-size: 28px;
    color: var(--text-color);
    padding: 10px;
}

.btn-group-report button {
    display: inline-flex;
    position: relative;
    right: -300px;
    height: 40px;
    margin: 0 10px;
    border-radius: 20px;
    align-items: center;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    border: 0;
    color: var(--text-color);
}
.btn-group-report .btn-text {
    font-size: 20px;
    padding: 0px 15px 0px 0px;
}
.btn-group-report i {
    font-size: 20px;
    padding-right: 5px;
    font-style: normal;
}
.btn-group-report #remove {
    background-color: var(--remove-btn);
}
.btn-group-report #change {
    background-color: var(--change-btn);
}
.btn-group-report button:hover {
    opacity: 0.75;
}

.report-table {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    height: 50vh;
    overflow-y: auto;
}

.report-table table {
    border-spacing: 40px;
    border: 2px solid var(--text-color);
    border-radius: 25px;
}

.report-table table label {
    color: var(--text-color);
    font-size: 23px;
}

.report-table th {
    font-size: 27px;
    color: var(--primary-color);
}

.report-table table input {
    height: 30px;
    max-width: 250px;
    width: 100%;
    font-size: 20px;
    border-radius: 8px;
    padding: 10px;
    border: 0;
    text-align: center;
}

.report-table td {
    font-size: 20px;
    padding: 5px 50px;
    color: var(--text-color);
}
</style>
