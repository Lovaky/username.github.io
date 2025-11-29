document.getElementById("search").addEventListener("input", function () {
    const keyword = this.value.trim().toLowerCase();
    const box = document.getElementById("result");

    if (!keyword) {
        box.innerHTML = "";
        return;
    }

    const school = data.find(item =>
        item.school.toLowerCase().includes(keyword)
    );

    if (!school) {
        box.innerHTML = `
            <div class="card">未找到相关学校，请检查输入是否正确。</div>
        `;
        return;
    }

    let ratesHTML = "";
    for (const year in school.rates) {
        ratesHTML += `
            <div class="rate-item">
                <span class="year">${year} 年：</span> ${school.rates[year]}%
            </div>
        `;
    }

    box.innerHTML = `
        <div class="card">
            <h2>${school.school}</h2>
            ${ratesHTML}
        </div>
    `;
});
