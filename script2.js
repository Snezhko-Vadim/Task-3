function dividingArray(array, numOfDividingElements) {
    let answer = [];
    let counter = 0;
    if (array.length % numOfDividingElements === 0) {
        for (let i = 0; i < array.length / numOfDividingElements; i++) {
            answer[i] = [];
            for (let j = 0; j < numOfDividingElements; j++) {
                answer[i][j] = array[counter];
                counter++;
            }
        }
        return answer;
    } else {
        alert('Error! Not dividing size of array');
        return false;
    }
}
//dividingArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],3);
console.log(dividingArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

/* 
    question
    как лучше реализовать li
    лучше действия со всемы данными записывать в зэн или выносить в отдельный массив и работать с ним вне зэн
    кэширование данных, как лучше хранить , в браузере или в отдельной переменной ?
    */