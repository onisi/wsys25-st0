// Phase 0-3: JavaScript基礎確認課題

// 課題1: 変数と関数
function task1() {
    // TODO: 以下の変数を作成してください
    let name = "山田太郎"; // あなたの名前を入力
    let age = 25;   // あなたの年齢を入力
    let favoriteColor = "青"; // 好きな色を入力
    
    // TODO: 趣味の配列を作成してください
    let hobbies = ["プログラミング", "読書", "映画鑑賞"]; // 例: ["プログラミング", "読書", "映画鑑賞"]
    
    // 結果を表示
    const output = document.getElementById('task1-output');
    if (name && age && favoriteColor && hobbies.length > 0) {
        output.innerHTML = `
            <strong>✅ 課題1完了！</strong><br>
            名前: ${name}<br>
            年齢: ${age}歳<br>
            好きな色: ${favoriteColor}<br>
            趣味: ${hobbies.join(', ')}
        `;
    } else {
        output.innerHTML = `⚠️ 変数が正しく設定されていません。script.jsを確認してください。`;
    }
}

// 課題2: 計算機能
function calculate() {
    try {
        // TODO: 計算処理を実装してください
        const num1 = parseFloat(document.getElementById('num1').value);
        const operator = document.getElementById('operator').value;
        const num2 = parseFloat(document.getElementById('num2').value);
        
        // 入力値の検証
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('数値を正しく入力してください');
        }
        
        let result;
        // TODO: switch文またはif文を使って計算を実装
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    throw new Error('0で割ることはできません');
                }
                result = num1 / num2;
                break;
            default:
                throw new Error('無効な演算子です');
        }
        
        document.getElementById('calculation-result').innerHTML = `結果: ${num1} ${operator} ${num2} = ${result}`;
    } catch (error) {
        document.getElementById('calculation-result').innerHTML = `エラー: ${error.message}`;
    }
}

// 課題3: DOM操作
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
let currentColorIndex = 0;

function changeColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    const colorBox = document.getElementById('color-box');
    colorBox.style.backgroundColor = colors[currentColorIndex];
}

function resetColor() {
    currentColorIndex = 0;
    const colorBox = document.getElementById('color-box');
    colorBox.style.backgroundColor = colors[0];
}

// 課題4: イベント処理と配列操作
let items = [];

function addItem() {
    const input = document.getElementById('item-input');
    const itemText = input.value.trim();
    
    if (itemText === '') {
        alert('アイテム名を入力してください');
        return;
    }
    
    items.push(itemText);
    input.value = '';
    updateItemList();
}

function removeItem(index) {
    items.splice(index, 1);
    updateItemList();
}

function clearItems() {
    items = [];
    updateItemList();
}

function updateItemList() {
    const itemList = document.getElementById('item-list');
    if (items.length === 0) {
        itemList.innerHTML = '<p>アイテムがありません</p>';
    } else {
        itemList.innerHTML = `
            <h4>アイテム一覧（${items.length}個）:</h4>
            <ul>
                ${items.map((item, index) => 
                    `<li>${item} <button onclick="removeItem(${index})">削除</button></li>`
                ).join('')}
            </ul>
        `;
    }
}

// 初期表示
updateItemList();
