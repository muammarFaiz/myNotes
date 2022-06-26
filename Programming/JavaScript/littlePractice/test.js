/* global alert */
/* global prompt */
/* global confirm */

let player1answer
let player2answer
let player1score = 0
let player2score = 0

function roundValidation (round, randomNumber) {
  let sameAnswer = true
  // ====================== prompt para pemain ==========================
  while (sameAnswer) {
    player1answer = prompt(`Ronde: ${round}
Pemain 1:`)
    player2answer = prompt(`Ronde: ${round}
Pemain 2:`)
    if (player1answer === player2answer) {
      sameAnswer = confirm(`Jawaban tidak boleh sama
Ulangi?`)
    } else if (player1answer > 3 || player1answer < 1) {
      sameAnswer = confirm(`Jawaban tidak boleh lebih dari 3 atau kurang dari 1,
Ulangi?`)
    } else if (player2answer > 3 || player2answer < 1) {
      sameAnswer = confirm(`Jawaban tidak boleh lebih dari 3 atau kurang dari 1,
Ulangi?`)
    } else {
      sameAnswer = false
    }
  }

  // ===================== alert pemenang ronde ==========================
  if (Number(player1answer) === randomNumber) {
    player1score += 1
    alert(`Pemain 1 benar
Jawaban: ${randomNumber}
Poin:
Pemain 1: ${player1score}
Pemain 2: ${player2score}`)
  } else if (Number(player2answer) === randomNumber) {
    player2score += 1
    alert(`Pemain 2 menang
Jawaban: ${randomNumber}
Poin:
Pemain 1: ${player1score}
Pemain 2: ${player2score}`)
  } else {
    alert(`Tidak ada yang benar
Jawaban: ${randomNumber}
Poin:
Pemain 1: ${player1score}
Pemain 2: ${player2score}`)
  }
}

// ======================== loop 5 ronde ===========================
for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor((Math.random() * 3) + 1)
  roundValidation(i + 1, randomNumber)
  if (i === 4) {
    if (player1score === player2score) {
      alert(`seri
Poin akhir:
Pemain 1: ${player1score}
Pemain 2: ${player2score}
Selesai`)
    } else if (player1score > player2score) {
      alert(`Pemain 1 menang
Poin akhir:
Pemain 1: ${player1score}
Pemain 2: ${player2score}
Selesai`)
    } else {
      alert(`Pemain 2 menang
Poin akhir:
Pemain 1: ${player1score}
Pemain 2: ${player2score}
Selesai`)
    }
  }
}

// the lesson we can get from this is:
// 1. let variable is a block scope which is cannot be accessed outside its {}
// 1. codesandbox show error even though it is not really an Error
// 2. value reecived from prompt is a string
// 3. font from codesandbox is easy to read
// 4. remember to save the file in codesandbox before sharing it to the mentor
// 4. the second line of the back tick string must have zero indentation if you
//  want it to show with zero indentation
