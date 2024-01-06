// arrayが配列
const array = [1, 2, 3];

function func() {
  console.time("func");
  for (let i = 1; i <= 10000; i++) {
    // 配列にデータを追加する
    array.splice(3, 0, 100); // 添字3の位置に100というデータを入れる（それ以降は1つずらす）
    console.log(array); //=> [1, 2, 3, 100]

    // 配列からデータを削除する
    array.splice(0, 1); // 添字0の位置から要素を1つ削除する
    console.log(array); //=> [2, 3, 100]
  }

  console.timeEnd("func"); // 計測終了
}

func();
