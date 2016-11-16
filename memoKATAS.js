// Remplacer tout les O (tête que doit abbatre Chuck) par des espaces sur chaque entrée du tableau
// Utilisation de includes, replace, split et join

'[\'*****************************************\',\
' ** _O_ * _O_ * _O_ * _O_ ** \',\
' ** C(.) J * /(.)J  *  / (.) J * C(.) J ** \',\
' ** _ / | _ * _ | | _ * _() _ * _ / ) _ * \']'

function headSmash(array) {
    if (array[0] == "" || array.length == 0)
        return "Gym is empty"
    if (typeof array[0] != "string")
        return "This isn\'t the gym!!"

    for (var element in array) {
        if (array[element].includes("O")) {
            var ligne = array[element].split("")
            for (var i in ligne) {
                ligne[i] = ligne[i].replace("O", " ")
            }
            array[element] = ligne.join("")
        }
    }
    return array
}


// Faire la somme d'un tableau et utilisation de Math.round() pour arrondir la résultat de la moyenne
// Utilisation de reduce au lieu d'une boucle

test: scores = [49, 3, 5, 300, 7];
Test.assertEquals(average(scores), 73);

function average(scores) {
    var total = scores.reduce(function(a, b) {
        return a + b
    })
    return Math.round(total / scores.length)
}


function iqTest(numbers) {
    var list = numbers.split(" ")
    var even = 0
    for (var number in list) {
        if (Number(number) % 2 == 0)
            even++
    }
    if (even > 1) {
        for (var number in list) {
            if (Number(number) % 2 != 0)
                return indexOf(number)
        }
    } else {
        for (var number in list) {
            if (Number(number) % 2 == 0)
                return indexOf(number)
        }
    }
}



function likes(names) {

    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return names[person] + " likes this";
        case 2:
            return names[0] + " and " + names[1] + " like this";
        case 3:
            return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        default:
            return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this"
    }
}


function spinWords(sentence) {
    sentence = sentence.split(" ")
    for (var word in sentence) {
        if (sentence[word].length > 4) {
            var mot = sentence[word].split("")
            var n = mot.length
            console.log(mot);
            for (var i = 0; i >= (n / 2); i++) {
                let temp = mot[i]
                mot[i] = mot[n]
                mot[n] = temp
            }
            sentence[word] = mot.join("")
        }
    }
    return sentence
}


function isValidWalk(walk) {
    var ord = 0
    var abs = 0
    for (var n in walk) {
        switch (walk[n]) {
            case "n":
                abs--
                break;
            case "s":
                abs++
                break;
            case "e":
                ord--
                break;
            case "w":
                ord++
                break;
        }
    }
    if (ord == 0 && abs == 0 && walk.length == 10)
        return true
    else return false
}


Expected: '*********\n* olleH *\n* dlroW *\n*********',
    instead got: '*********\n* olleH *\n* dlroW *\n*********'

var moveZeros = function(arr) {
    for (var number in arr) {
        if (arr[number] == 0) {
            arr.splice(number, 1).push(0)
        }
    }
    return arr
}

function digital_root(n) {
    n = n.toString().split("")
    console.log(n)
    var sum = 0
    for (var x in n) {
        if (n.length == 1)
            return n[x]
        else {
            sum += Number(n[x])
            console.log(sum)
        }
    }
    console.log("long de " + sum.toString().split("").length)
    if (sum.toString().split("").length != 1)
        digital_root(sum.toString())
    else {
        console.log("somme merde :" + Number(sum))
        return sum
    }
}


function digital_root(n) {
    n = n.toString().split("")
    var sum = 0
    for (var x in n) {
        if (n.length == 1)
            return Number(n[x])
        else {
            sum += Number(n[x])
        }
    }
    if (sum.toString().split("").length != 1) {
        return (digital_root(sum))
    } else {
        return sum
    }
}

function songDecoder(song) {
    song = song.replace(/WUB/g, " ")
    song = song.split("")
    var i = 0
    while (i < song.length) {
        if (song[i] == " " & song[i - 1] == " ")
            song.splice(i, 1)
        else i++
    }
    if (song[0] == " ")
        song.splice(0, 1)
    if (song[song.length - 1] == " ")
        song.splice(song.length - 1, 1)
    return song.join("")
}
