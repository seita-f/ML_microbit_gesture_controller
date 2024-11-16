const ACCELEROMETER_SERVICE_UUID = 'e95d0753-251d-470a-a062-fa1922dfa9a8';
const ACCELEROMETER_CHARACTERISTICS_UUID = 'e95dca4b-251d-470a-a062-fa1922dfa9a8';

let accelerometerData = [];  // X, Y, Zのデータを格納するリスト
let characteristic;          // BLEキャラクタリスティックへの参照
let isMeasuring = false;     // 計測中かどうかのフラグ

// ボタンのイベントリスナーを設定
document.getElementById('connect').addEventListener('click', connect);
document.getElementById('start').addEventListener('click', startMeasurement);
document.getElementById('stop').addEventListener('click', stopMeasurement);
document.getElementById('download').addEventListener('click', downloadCSV);

function connect() {
    console.log('Attempting to connect...');

    // BLEデバイスをスキャンする
    navigator.bluetooth.requestDevice({
        filters: [{
            namePrefix: 'BBC micro:bit'
        }],
        optionalServices: [ACCELEROMETER_SERVICE_UUID]
    })
    .then(device => {
        console.log('Device found:', device);
        return device.gatt.connect();
    })
    .then(server => {
        console.log('Connected to server');
        return server.getPrimaryService(ACCELEROMETER_SERVICE_UUID);
    })
    .then(service => {
        console.log('Service obtained');
        return service.getCharacteristic(ACCELEROMETER_CHARACTERISTICS_UUID);
    })
    .then(char => {
        console.log('Characteristic obtained');
        characteristic = char;
        
        // 常に加速度データを通知で取得し、画面に表示
        characteristic.startNotifications();
        characteristic.addEventListener('characteristicvaluechanged', handleAccelerationData);

        // 計測開始ボタンを有効化
        document.getElementById('start').disabled = false;
    })
    .catch(error => {
        console.error('Connection failed!', error);
    });
}

// 計測開始
function startMeasurement() {
    isMeasuring = true;
    
    // 測定を開始するたびにデータをリセット
    accelerometerData = [];

    // ボタンの状態を更新
    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
    document.getElementById('download').disabled = true;

    console.log('Measurement started');
}

// 計測終了
function stopMeasurement() {
    isMeasuring = false;

    // ボタンの状態を更新
    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
    document.getElementById('download').disabled = false;

    console.log('Measurement stopped');
}

// 加速度データが変化したときの処理
function handleAccelerationData(event) {
    const value = event.target.value;
    const x = value.getInt16(0, true);
    const y = value.getInt16(2, true);
    const z = value.getInt16(4, true);
    const timestamp = new Date().toISOString();

    // データ表示（常に更新）
    document.getElementById('x-value').textContent = x;
    document.getElementById('y-value').textContent = y;
    document.getElementById('z-value').textContent = z;

    // 計測中のみデータをリストに追加
    if (isMeasuring) {
        accelerometerData.push({ timestamp, x, y, z });
        console.log(`Data added: X=${x}, Y=${y}, Z=${z}`);
    }
}

// CSVファイルのダウンロード
function downloadCSV() {
    const filename = document.getElementById('filename').value || 'acceleration_data.csv';
    let csvContent = "data:text/csv;charset=utf-8,Time,X,Y,Z\n";

    accelerometerData.forEach(entry => {
        csvContent += `${entry.timestamp},${entry.x},${entry.y},${entry.z}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
}
