<template>
    <!-- Search Tab -->
        <section id="searchtab" class="search">
            <div class="text">
                <h1>Tra cứu thông tin học sinh</h1>
                <h3>
                    Nhập vào tên học sinh hoặc mã số học sinh. Bạn có thể chọn
                    lớp ở nút phía dưới
                </h3>
            </div>
            <!-- <form action="" method=""> -->
                <div class="search-container">
                    <div class="input-box">
                        <input
                            type="text"
                            placeholder="Tên học sinh..."
                        />
                        <span class="icon">
                            <i class="bx bx-search search-icon"></i>
                        </span>
                    </div>
                    <button id="btn-search">Tìm kiếm</button>
                </div>
            <!-- </form> -->

            <div class="table-content">
                <table id="table-std">
                    <thead>
                        <th class="text">STT</th>
                        <th class="text">Tên</th>
                        <th class="text">Lớp</th>
                        <th class="text">Học kì 1</th>
                        <th class="text">Học kì 2</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text">1</td>
                            <td class="text">ABC</td>
                            <td class="text">10A1</td>
                            <td class="text">5.5</td>
                            <td class="text">7.5</td>
                        </tr>
                        <tr>
                            <td class="text">1</td>
                            <td class="text">ABC</td>
                            <td class="text">10A1</td>
                            <td class="text">5.5</td>
                            <td class="text">7.5</td>
                        </tr>
                        <tr>
                            <td class="text">1</td>
                            <td class="text">ABC</td>
                            <td class="text">10A1</td>
                            <td class="text">5.5</td>
                            <td class="text">7.5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
</template>

<script>
export default {
    name: 'SearchComponent',
};
</script>
<style scoped>
body.dark .main-content .text {
    color: var(--text-color);
}

/* search */
.search .text {
    margin-top: 20px;
    font-size: 30px;
    font-weight: 500;
    color: var(--text-color);
    padding: 12px 60px;
    text-align: center;
}

h3 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: 200;
}

.search .input-box {
    position: relative;
    height: 65px;
    max-width: 50%;
    width: 100%;
    margin: 0 5px;
    border: 1px solid var(--text-color);
    border-radius: 10px;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    padding: 0 15px 0 65px;
}

#btn-search {
    margin-left: 20px;
    display: block;
    float: right;
    width: 150px;
    font-size: 1.5rem;
    border-radius: 10px;
    border-width: 0;
    color: #fff;
    background: var(--primary-color);
}

#btn-search:hover {
    background: var(--selected-hover-color);
}

.search input {
    position: relative;
    outline: none;
    border: none;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    font-size: 24px;
    font-weight: 400;
    color: var(--text-color);
    background-color: var(--body-color);
}

.search .icon {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    width: 60px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    background-color: var(--body-color);
}

.search-container {
    margin-top: 50px;
    display: flex;
    justify-content: center;
}

.search .search-icon {
    position: absolute;
    top: 50%;
    font-size: 30px;
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.search .search-icon {
    color: var(--primary-color);
    transform: translateY(-50%) rotate(90deg);
}

.search .input-box .search-icon {
    transform: translateY(-50%) rotate(0);
}

.search .btn-group {
    margin-left: 100px;
}

table,
td,
th {
    border: 2px solid var(--text-color);
}

table {
    margin-top: 20px;
    border-collapse: collapse;
    width: 100%;
    max-width: 80%;
    border-radius: 1em;
}
.table-content {
    margin-top: 50px;
    display: flex;
    justify-content: center;
}
table {
    border-collapse: collapse;
    border-radius: 15px;
    border-style: hidden; /* hide standard table (collapsed) border */
    box-shadow: 0 0 0 2px var(--text-color); /* this draws the table border  */
}
td, th {
    border: 1px solid var(--text-color);
}

#table-std th {
    color: var(--primary-color);
}
</style>
