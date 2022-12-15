<template>
    <!-- Home Tab -->
    <section id="hometab" class="home">
        <div class="left-panel">
            <div class="title">
                <h1 class="text-center">Xin chào,</h1>
                <p>Các chức năng bạn có thể thực hiện</p>
            </div>
            <div class="card">
                <div class="card-body" style="font-size: 20px">
                    <h1 class="card-title">
                        Tra cứu thông tin học sinh
                    </h1>
                    <p class="card-text text-muted">
                        Tra cứu điểm TB học kì 1 và học kì 2 của học
                        sinh
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="card-body" style="font-size: 20px">
                    <h1 class="card-title">Tiếp nhận học sinh</h1>
                    <p class="card-text text-muted">
                        Tiếp nhận học sinh mới theo quy định của nhà
                        trường
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="card-body" style="font-size: 20px">
                    <h1 class="card-title">Lập danh sách lớp</h1>
                    <p class="card-text text-muted">
                        Lập danh sách lớp phù hợp với quy định của nhà
                        trường
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="card-body" style="font-size: 20px">
                    <h1 class="card-title">Nhập bảng điểm môn học</h1>
                    <p class="card-text text-muted">
                        Nhập điểm 15', 1 tiết và cuối HK của học sinh
                        theo lớp, môn học và học kì
                    </p>
                </div>
            </div>
            <div class="card">
                <div class="card-body" style="font-size: 20px">
                    <h1 class="card-title">Lập báo cáo tổng kết</h1>
                    <p class="card-text text-muted">
                        Lập báo cáo tổng kết theo môn học, học kì
                    </p>
                </div>
            </div>
        </div>
        <div class="right-panel">
            <div class="avatar">
                <h1>Thông tin tài khoản</h1>
                <h3>Giáo vụ</h3>
                <div class="avt-img">
                    <img src="img/logo_small.png" alt="Avatar" />
                </div>
                <div class="img-btn">
                    <label for="myFile" id="change"><i class='bx bx-check'></i><span>Sửa</span></label>
                    <input type="file" id="myFile" name="Sửa" hidden/>
                    <label for="myRemove" id="remove"><i class='bx bx-x'></i><span>Xoá</span></label>
                    <input type="button" id="myRemove" value="Gỡ" hidden>
                </div>
                <div class="input-container">
                    <div class="input-group">
                        <label for="email">Email</label>
                        <input id="email" name="email" type="email" disabled />

                        <label for="name">Tên</label>
                        <input id="name" type="text" />

                        <label for="phone">Số điện thoại</label>
                        <input id="phone" type="text" />
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    name: 'HomeComponent',
    methods: {
        onSearch() {
            this.$tabName = 'Search';
            console.log(this.$tabName);
        },
    },
};
</script>

<style scoped>
.home {
    float: left;
    width: calc(100%);
    padding: 10px;
    margin-top: 20px;
    color: var(--text-color);
}


.left-panel {
    float: left;
    width: 50%;
    max-width: 50%;
}

.right-panel {
    float: left;
    width: 50%;
    /* max-width: 40%; */
}

.home:after {
    content: "";
    display: table;
    clear: both;
}

.left-panel .title {
    text-align: center;
    margin-bottom: 30px;
}

.card {
    text-align: left;
    background-color: var(--body-color);
    transition: var(--tran-05);
    padding: 30px;
    margin: 20px 0px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid var(--text-color);
    border-radius: 25px;
    height: 150px;
    max-width: 65%;
}

.avatar h1,
h3 {
    text-align: center;
}

.input-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.input-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px 10px;
}

.input-group input {
    height: 40px;
    width: 300px;
    margin: 5px 0px 30px;
    font-size: 25px;
    padding-left: 10px;
    color: var(--text-color);
    background-color: var(--body-color);
    border: 2px solid var(--text-color);
    border-radius: 6px;
}

.img-btn {
    display: flex;
    justify-content: center;
}

#remove {
    margin-left: 30px;
    padding: 0 15px 0 10px;
    height: 40px;
    background-color: var(--remove-btn);
    color: #fff;
    border-radius: 20px 20px;
    border-width: 0;
    display: flex;
    align-items: center;
    font-size: 20px;
}

#remove i{
    padding-right: 5px;
    font-size: 20px;
}

#change {
    padding: 0 15px 0 10px;
    height: 40px;
    background-color: var(--change-btn);
    color: #fff;
    border-radius: 20px 20px;
    border-width: 0;
    display: flex;
    align-items: center;
    font-size: 20px;
}

#change i {
    padding-right: 5px;
    font-size: 20px;
}

#myFile {
    width: 5px;
}

.avt-img {
    text-align: center;
    margin: 10px;
}

#email {
    pointer-events: none;
}

.avatar img {
    width: 15rem;
    height: inherit;
    margin: auto;
    border-radius: 50%;
}

.input-group label {
    font-size: 20px;
}

.avatar input {
    font-size: 20px;
}
</style> 