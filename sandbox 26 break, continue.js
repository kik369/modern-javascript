// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {

    // continue breaks out of the current loop and continues looping
    if (scores[i] === 0) {
        continue;
    }

    console.log('your score: ', scores[i]);

    // break breaks out of the loop and doesn't continue looping
    if (scores[i] === 100) {
        console.log('you have reached the top score');
        break;
    }
}