# 20250519 前端網頁學習

## 相關資源

[https://kindping.notion.site/20f91b3800988000ac41d892c9e700f1](講義)

[https://obsidian.md/](線上markdown筆記)

## 其他筆記

### call by value

-- 變數宣告的記憶體不共用，變數的值改變不影響本來的變數
-- 適用於 number, string 等型態

### call by reference

-- 變數宣告的記憶體是共用的，變數的值改變會影響本來的變數
-- 主要發生在物件(因為物件的檔案通常較大，為了省記憶體所以這樣做)
-- 適用於物件(object)型態
-- 如果陣列也發生，代表陣列可能包含物件(資料型態太髒)
