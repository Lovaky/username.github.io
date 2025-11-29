function searchSchool() {
    const keyword = document.getElementById("inputSchool").value.trim().toLowerCase();
    const box = document.getElementById("result");

    if (!keyword) {
        box.innerHTML = "";
        return;
    }

    // 搜索学校（模糊匹配，例如“北大”也能查出来）
    const school = universityData.find(item =>
        item.school.toLowerCase().includes(keyword)
    );

    if (!school) {
        box.innerHTML = `
            <div class="card">未找到相关学校，请检查输入。</div>
        `;
        return;
    }

    const r = school.rates;

    box.innerHTML = `
        <div class="card">
            <h2>${school.school}</h2>
            <div class="rate-item"><span class="year">2020：</span> ${r.y2020}</div>
            <div class="rate-item"><span class="year">2021：</span> ${r.y2021}</div>
            <div class="rate-item"><span class="year">2022：</span> ${r.y2022}</div>
            <div class="rate-item"><span class="year">2023：</span> ${r.y2023}</div>
            <div class="rate-item"><span class="year">2024：</span> ${r.y2024}</div>
        </div>
    `;
}
