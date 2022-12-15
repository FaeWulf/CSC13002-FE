<template>
    <!-- About Tab -->
    <div class="info">
        <div class="text">
            <h1>Nhóm 14</h1>
            <ul>
                <li>19120268 Ngô Đặng Gia Lâm - Leader</li>
                <li>20120177 Trần Thái San - Back-end Dev</li>
                <li>20120298 Phạm Bảo Huy - Front-end Dev</li>
                <li>20120326 Phan Phong Lưu - Front-end Dev</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutComponent',
};
</script>
<style scoped>
.info {
    position: relative;
    height: 100vh;

}

.text {
    margin: 0;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
}


ul {
    list-style-type: none;
    width: 100%;
    font-size: 40px;
    line-height: 75px;
}
h1, li {
    color: var(--primary-color);
}
</style>
