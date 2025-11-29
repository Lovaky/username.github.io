# username.github.io
<!DOCTYPE html>
<html>
<head>
    <title>保研查询</title>
</head>
<body>
    <h2>保研资格查询</h2>
    
    <form action="mailto:您的邮箱?subject=保研查询" method="post" enctype="text/plain">
        <div>
            <label>学校名称：</label>
            <input type="text" name="school" required>
        </div>
        
        <div id="contactInfo">
            <label>您的姓名：</label>
            <input type="text" name="name">
            
            <label>手机号：</label>
            <input type="tel" name="phone">
            
            <label>微信：</label>
            <input type="text" name="wechat">
        </div>
        
        <button type="submit">提交查询</button>
    </form>

    <script>
        // 简单的学校检查（前端验证）
        const schoolInput = document.querySelector('input[name="school"]');
        schoolInput.addEventListener('blur', function() {
            const schoolList = ["北京大学", "清华大学"]; // 您的名单
            if(schoolList.includes(this.value)) {
                alert("该学校具备保研资格！");
            } else {
                alert("该学校暂不具备保研资格");
            }
        });
    </script>
</body>
</html>
