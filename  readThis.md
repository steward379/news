
本作業延續 hw1 與 hw2 之新聞頁面 
使用 git 繳交本次作業

#- Firebase Hosting 連結：
https://prac-01-e75f6.firebaseapp.com/

#- GitHub 連結：
https://github.com/steward379/news

##git 學習筆記

- git init 先在根目錄底下初始化 
- git add xxx... 接著加入檔案(檔名)，成功者會有底線
- git status 檢查狀態 
- git commit -m "標註的文字" 上傳版本並標註 
- git remote add origin "github_url"  標註 github 連結為預設慣例名 origin
- git push origin master 上傳到 github 主幹
- git remote -v 查看推播紀錄 

## Features

- 所有功能 (Hosting, Storage & Authentication) 皆有應用

- 圖片媒體使用 firebase 的右邊三張廣告因爲有超連結，欲檢查請【 右鍵 ＞ 以新標籤打開影像 】查看網域

- 作者名稱為 Google 認證後取回資訊的 displayName 欄位值

- 檔名資料結構為 「secret-message- + 使用者名稱 + 使用者留言的前十個字」.txt

- js 邏輯可至 /answer.html 查看






