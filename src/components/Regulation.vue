<template>
    <!-- Regulation Tab -->
    <div class="nav-group">
        <a
            href="#"
            :class="currentTag === 0 ? 'nav-selected' : ''"
            @click="onTagClicked($event, 0)"
            ><i class="bx bx-user-circle"></i> Cấp quyền tài khoản</a
        >
        <a
            href="#"
            :class="currentTag === 1 ? 'nav-selected' : ''"
            @click="onTagClicked($event, 1)"
            ><i class="bx bx-wrench"></i> Thay đổi quy định</a
        >
    </div>
    <!-- Cấp quyền tài khoản -->
    <div class="tag-content" v-if="currentTag === 0">
        <div class="user">
            <div class="select-user">
                <span>Cấp quyền</span>
                <select name="user">
                    <option value="teacher">Giáo viên</option>
                    <option value="manager">Giáo vụ</option>
                </select>
            </div>
            <div class="btn-group">
                <button id="remove">Huỷ bỏ cấp quyền</button>
                <button id="change">Xác nhận cấp quyền</button>
            </div>
        </div>
        <div class="info-table">
            <table class="info">
                <tr>
                    <td><label>Họ và tên</label></td>
                    <td><label>Nguyễn Văn A</label></td>
                    <td rowspan="4">
                        <div class="avatar">
                            <img
                                class="avatar-img"
                                src="/img/logo_small.png"
                                alt=""
                            />
                            <span>Ảnh đại diện</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><label>Email</label></td>
                    <td><label>abc@gmail.com</label></td>
                </tr>
                <tr>
                    <td><label>Số điện thoại</label></td>
                    <td><label>0123 456 789</label></td>
                </tr>
                <tr>
                    <td><label>Quyền hiện tại</label></td>
                    <td><label>Chưa cấp</label></td>
                </tr>
            </table>
        </div>
        <div class="search-email">
            <div class="search-email-title">
                <span>Danh sách</span>
                <div class="search-input">
                    <input
                        id="input-search"
                        type="text"
                        placeholder="Nhập email ..."
                    />
                    <label for="input-search"
                        ><button><i class="bx bx-search"></i></button
                    ></label>
                </div>
            </div>
            <div class="email-table">
                <table id="email-std">
                    <thead>
                        <th>User</th>
                        <th>Tên</th>
                        <th>Tài khoản</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ABC@abc.com.vn</td>
                            <td>Nguyễn Văn A</td>
                            <td>Chưa cấp</td>
                            <td>
                                <button id="change">Chọn</button>
                            </td>
                        </tr>
                        <tr>
                            <td>XYZ</td>
                            <td>Nguyễn Văn A</td>
                            <td>Chưa cấp</td>
                            <td>
                                <button id="change">Chọn</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- Thay đổi quy định -->
    <div class="tag-content" v-if="currentTag === 1">
        <div class="title-reg">
            <span>Quy định hiện hành</span>
            <div class="btn-group">
                <button id="remove">Xoá học sinh</button>
                <button id="change">Hoàn tất sửa đổi</button>
            </div>
        </div>
        <div class="notice">
            <p>
                ⚠ Lưu ý <br />
                Thay đổi quy định có thể làm ảnh hưởng trực tiếp đến dữ liệu của
                toàn bộ học sinh <br />
                Chỉ thay đổi quy định khi thực sự cần thiết và không nên thay
                đổi quy định quá thường xuyên <br />
            </p>
        </div>
        <div class="input-reg">
            <div class="input-group">
                <div class="group">
                    <label for="">Tuổi nhập học tối thiểu</label>
                    <input type="text" value="5" />
                </div>
                <div class="group">
                    <label for="">Tuổi nhập học tối đa</label>
                    <input type="text" value="5" />
                </div>
                <div class="group">
                    <label for="">Sĩ số tối đa trong lớp</label>
                    <input type="text" value="5" />
                </div>
                <div class="group">
                    <label for="">Điểm chuẩn đạt môn</label>
                    <input type="text" value="5" />
                </div>
                <div class="group">
                    <label class="title-btn" for=""
                        >Thay đổi số lượng và tên môn học</label
                    >
                    <button>Thay đổi</button>
                </div>
                <div class="group">
                    <label class="title-btn" for=""
                        >Thay đổi số lượng lớp và tên lớp</label
                    >
                    <button>Thay đổi</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegulationComponent',
    data() {
        return {
            currentTag: 0,
        };
    },
    methods: {
        onTagClicked(e, param1) {
            let tagNumber = parseInt(param1);
            if (tagNumber >= 0 && tagNumber <= 1) {
                this.currentTag = tagNumber;
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
    margin: 0 20px;
}
.nav-group a:hover {
    background-color: var(--primary-color);
    color: var(--text-color);
    border-radius: 10px;
    opacity: 1;
}
/* CSS for User permission tab */
.user {
    display: flex;
    justify-content: space-evenly;
    margin: 55px -150px 0 -150px;
}
.user span {
    font-size: 28px;
    color: var(--primary-color);
    font-weight: 900;
    padding: 0 10px;
}
.user select {
    width: 120px;
    height: 30px;
    font-size: 20px;
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
    border-spacing: 30px;
    border: 2px solid var(--text-color);
    border-radius: 25px;
    max-width: 1200px;
    width: 1000px;
}
.info-table table label {
    color: var(--text-color);
}
.info tr {
    padding: 20px;
    margin: 50px;
}
.info-table label {
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
.avatar img,
.avatar span {
    display: block;
    margin: 5px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 15rem;
    color: var(--text-color);
}
/* CSS title search email  */
.search-email-title {
    display: flex;
    justify-content: space-evenly;
    margin-top: 55px;
}
.search-email-title span {
    font-size: 28px;
    color: var(--primary-color);
    padding: 0 10px;
    font-weight: 900;
}
.search-email-title input {
    height: 30px;
    width: 350px;
    font-size: 20px;
    border-radius: 8px;
    padding: 10px;
    border: 0;
}
.search-email-title button {
    background-color: var(--primary-color);
    height: 30px;
    width: 50px;
    font-size: 20px;
    border-radius: 8px;
    border: 0;
    margin: 5px;
}
.email-table {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    height: 40vh;
    overflow-y: auto;
}
#email-std {
    border-spacing: 40px;
    border: 2px solid var(--text-color);
    border-radius: 25px;
}

#email-std th {
    font-size: 25px;
    font-weight: 900;
    padding: 5px 50px;
    color: var(--primary-color);
}

#email-std td {
    font-size: 20px;
    padding: 5px 40px;
    color: var(--text-color);
}

#email-std td button {
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

#email-std td #change {
    border: 2px solid var(--change-btn);
    color: var(--change-btn);
}

#email-std td #change:hover {
    background-color: var(--change-btn);
    transition: var(--tran-03);
    color: var(--text-color);
}

/* CSS for change regulation tab */
.title-reg {
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

.title-reg span {
    font-size: 28px;
    color: var(--text-color);
    padding: 10px;
}
.notice {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}
.notice p {
    border: 2px solid var(--text-color);
    border-radius: 10px;
    padding: 10px;
    font-size: 23px;
    line-height: 30px;
    color: var(--primary-color);
}
.input-reg {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.input-group {
    display: flex;
    flex-direction: column;
    border: 2px solid var(--text-color);
    margin-top: 30px;
    border-radius: 10px;
    padding: 10px 30px;
    font-size: 23px;
    color: var(--text-color);
}

.input-group button {
    max-width: 200px;
    height: 40px;
    margin: 0 10px;
    border-radius: 15px;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
}
.input-group button:hover {
    background-color: var(--primary-color);
    color: var(--text-color);
}
.group {
    margin: 25px;
    font-weight: 700;
}
.input-group input {
    max-width: 120px;
    height: 30px;
    border-radius: 4px;
    font-size: 23px;
    text-align: center;
}
.input-group input,
.input-group button {
    float: right;
}
.input-group label {
    position: relative;
}
.input-group label, .input-group input, .input-group button {
    margin: 0 100px;
}
.input-group label::after {
    position: absolute;
    content: '';
    height: 3px;
    bottom: -10px;

    margin: -10px auto;
    left: 0;
    right: 0;
    width: 500px;
    background: var(--text-color);

    -o-transition: 0.5s;
    -ms-transition: 0.5s;
    -moz-transition: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s;
}
</style>
