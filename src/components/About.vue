<template>
    <!-- About Tab -->
        <section id="infotab" class="info">
            <div class="text">
                <h1>Nhóm 14</h1>
                <div class="box">
                    <ul>
                        <li>19120268 Ngô Đặng Gia Lâm - Leader</li>
                        <li>20120177 Trần Thái San - Back-end Dev</li>
                        <li>20120298 Phạm Bảo Huy - Front-end Dev</li>
                        <li>20120326 Phan Phong Lưu - Front-end Dev</li>
                    </ul>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name: 'AboutComponent',
};
</script>
<style scoped>

h1 {
    position: absolute;
    margin: 250px 550px;
    font-size: 60px;
}

ul {
    list-style-type: none;
    margin: 350px 300px;
    display: block;
    width: 900px;
    font-size: 40px;
    line-height: 50px;
}

.main-content.close {
    left: 78px;
    height: 100vh;
    width: calc(100% - 78px);
}

.main-content .text {
    color: var(--text-color);
}
</style>
