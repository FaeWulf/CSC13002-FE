<template>
    <div class="nav-group">
        <a href="#" :class="currentTag === 0 ? 'nav-selected' : ''" @click="onTagClicked($event, 0)"><i class="bx bx-user-circle"></i> Tiếp nhận học sinh</a>
        <a href="#" :class="currentTag === 1 ? 'nav-selected' : ''" @click="onTagClicked($event, 1)"><i class="bx bx-layer"></i> Lập danh sách lớp</a>
        <a href="#" :class="currentTag === 2 ? 'nav-selected' : ''" @click="onTagClicked($event, 2)"><i class="bx bxs-keyboard"></i> Nhập bảng điểm</a>
        <a href="#" :class="currentTag === 3 ? 'nav-selected' : ''" @click="onTagClicked($event, 3)"><i class="bx bxs-file-doc"></i>Lập báo cáo</a>
    </div>
<!-- Tiếp nhận học sinh -->
<div class="tag-content" v-if="currentTag === 0">
    <div class="title">
        <span>Đã chọn</span>
        <div class="btn-group">
            <button id="remove">Xoá học sinh</button>
            <button id="change">Hoàn tất sửa đổi</button>
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
                <td>
                    <label>Số điện thoại</label><input type="text" />
                </td>
            </tr>
            <tr>
                <td colspan="3">
                    <label>Địa chỉ</label><textarea id="address" type="text"></textarea>
                </td>
            </tr>
        </table>
    </div>
</div>
<!-- Lâp danh sách lớp -->
<div class="tag-content" v-if="currentTag === 1">
    <div class="class-list">
        <div class="class-select">
            <span>Danh sách lớp</span>
            <select name="class">
                <option value="10A1">10A1</option>
                <option value="11A2">11A2</option>
                <option value="12A3">12A3</option>
            </select>
        </div>
        <div class="btn-group">
            <button id="remove">Xoá lớp</button>
            <button id="change">Hoàn tất sửa đổi</button>
        </div>
    </div>
    <div class="insert-table">
        <table id="table-std">
            <thead>
                <th>Tên</th>
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
                <input id="input-search" type="text" placeholder="Nhập tên học sinh ..." />
                <label for="input-search"><button><i class="bx bx-search"></i></button></label>
            </div>
        </div>
        <div class="insert-table">
            <table id="table-std">
                <thead>
                    <th>Tên</th>
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
                    <tr>
                        <td>DEF</td>
                        <td>12A1</td>
                        <td>Nam</td>
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
<div class="tag-content" v-if="currentTag === 2">
    <div class="mark-title">
        <span>Lựa chọn</span>
    </div>
    <div class="mark-select">
        <div class="select-group">
            <label for="class">Lớp</label>
            <select name="class" id="class">
                <option value="10A1">10A1</option>
                <option value="10A1">10A1</option>
                <option value="10A1">10A1</option>
            </select>
        </div>
        <div class="select-group">
            <label for="term">Học kì</label>
            <select name="term" id="term">
                <option value="HK1">HK1</option>
                <option value="HK2">HK2</option>
            </select>
        </div>
        <div class="select-group">
            <label for="subject">Môn</label>
            <select name="subject" id="subject">
                <option value="Math">Toán</option>
                <option value="English">Tiếng Anh</option>
                <option value="English">GDCD</option>
            </select>
        </div>
    </div>
    <div class="mark-title-table">
        <span>10A1 - HK1 - Toán</span>
        <div class="btn-group">
            <button id="remove">Huỷ</button>
            <button id="change">Xong</button>
        </div>
    </div>
    <div class="mark-table">
        <table>
            <thead>
                <th>Tên</th>
                <th>Điểm 15'</th>
                <th>Điểm 1 tiết</th>
                <th>Điểm học kì</th>
            </thead>
            <tbody>
                <tr>
                    <td><label for="">ABC</label></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label for="">ABC</label></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label for="">ABC</label></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label for="">ABC</label></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label for="">ABC</label></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label for="">ABC</label></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label for="">ABC</label></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label for="">ABC</label></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label for="">ABC</label></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                    <td><input type="text" /></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<!-- Lập báo cáo -->
<div class="tag-content" v-if="currentTag === 3">
    <div class="report-title">
        <span>Lựa chọn</span>
    </div>
    <div class="report-select">
        <div class="select-group">
            <label for="term">Học kì</label>
            <select name="term" id="term">
                <option value="HK1">HK1_21-22</option>
                <option value="HK2">HK2_21-22</option>
            </select>
        </div>
        <div class="select-group">
            <label for="subject">Môn</label>
            <select name="subject" id="subject">
                <option value="Math">Toán</option>
                <option value="English">Tiếng Anh</option>
                <option value="English">GDCD</option>
            </select>
        </div>
    </div>
    <div class="report-title-table">
        <span>Báo cáo tổng kết HK1_21-22 - Toán</span>
        <div class="btn-group">
            <button id="remove">Huỷ</button>
            <button id="change">Xong</button>
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
                <tr>
                    <td>11A1</td>
                    <td>35</td>
                    <td>35</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>12A1</td>
                    <td>35</td>
                    <td>35</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>12A1</td>
                    <td>35</td>
                    <td>35</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>12A1</td>
                    <td>35</td>
                    <td>35</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>12A1</td>
                    <td>35</td>
                    <td>35</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>12A1</td>
                    <td>35</td>
                    <td>35</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>10A1</td>
                    <td>35</td>
                    <td>35</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>11A1</td>
                    <td>35</td>
                    <td>35</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>12A1</td>
                    <td>35</td>
                    <td>35</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>12A1</td>
                    <td>35</td>
                    <td>35</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>12A1</td>
                    <td>35</td>
                    <td>35</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>12A1</td>
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
export default {
    name: 'ManagementComponent',
    data () {
        return {
            currentTag: 0,
        }
    },
    methods: {
        onTagClicked(e, param1) {
            let tagNumber = parseInt(param1);
            if (tagNumber >= 0 && tagNumber <= 3) {
                this.currentTag = tagNumber;
            }
        }
    }
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
    background-color: var(--primary-color);
    opacity: 1;
}

.nav-group a {
    text-decoration: none;
    color: var(--text-color);
    font-size: 25px;
    padding: 10px;
    opacity: 0.75;
    border-radius: 10px;
    transition: var(--tran-03);
    margin: 0 10px;
}
.nav-group a:hover {
    background-color: var(--primary-color);
    color: var(--text-color);
    border-radius: 10px;
    opacity: 1;
}

/* CSS for Insert student tab */
.title {
    display: flex;
    justify-content: space-around;
    margin-top: 55px;
}

.btn-group button {
    max-width: 200px;
    height: 40px;
    margin: 0 10px;
    border-radius: 15px;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    border: 0;
    color: var(--text-color);
}

.title span {
    font-size: 28px;
    color: var(--text-color);
    padding: 10px;
}

.btn-group #remove {
    background-color: var(--remove-btn);
}
.btn-group #change {
    background-color: var(--change-btn);
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

/* CSS for Create classes tab */
.class-list {
    display: flex;
    justify-content: space-evenly;
    margin: 55px -150px 0 -150px;
}
.class-list span {
    font-size: 28px;
    color: var(--primary-color);
    font-weight: 900;
    padding: 0 10px;
    line-height: 15px;
}

.class-list select {
    width: 70px;
    height: 30px;
    font-size: 20px;
}

.insert-table {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    height: 50vh;
    overflow-y: auto;
}

#table-std {
    border-spacing: 40px;
    border: 2px solid var(--text-color);
    border-radius: 25px;
}

#table-std th {
    font-size: 25px;
    font-weight: 900;
    padding: 5px 50px;
    color: var(--primary-color);
}

#table-std td {
    font-size: 20px;
    padding: 5px 50px;
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
    margin: 5px;
}

#table-std td button {
    max-width: 200px;
    height: 40px;
    margin: 0 10px;
    border-radius: 15px;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    border: 0;
    color: var(--text-color);
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

.select-group select {
    width: 70px;
    height: 30px;
    font-size: 20px;
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
    font-size: 28px;
    color: var(--text-color);
    padding: 10px;
}
.mark-table {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    height: 50vh;
    overflow-y: auto;
}

.mark-table table {
    border-spacing: 40px;
    border: 2px solid var(--text-color);
    border-radius: 25px;
}

.mark-table table label {
    color: var(--text-color);
    font-size: 23px;
}

.mark-table th {
    font-size: 27px;
    color: var(--primary-color);
}

.mark-table table input {
    height: 30px;
    max-width: 250px;
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

.select-group select {
    width: 70px;
    height: 30px;
    font-size: 20px;
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
    font-size: 28px;
    color: var(--text-color);
    padding: 10px;
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
