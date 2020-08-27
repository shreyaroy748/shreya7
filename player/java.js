
var divlenght = document.querySelectorAll('.song').length;
// alert(divlenght);
console.log(divlenght);
for (var i = 0; i <divlenght; i++) {
  var demo =document.querySelectorAll('.song')[i].
  addEventListener('click',playsong);
}
var song1 = new Audio();
song1.src ="song/Bewajah.mp3";

var song2 = new Audio();
song2.src ="song/Do-Dil-Mil-Rahe-Hain.mp3";

var song3 = new Audio();
song3.src ="song/Humnava-Mere.mp3";

var song4 = new Audio();
song4.src ="song/Ishq-Di-Feeling.mp3";

var song5 = new Audio();
song5.src ="song/Nain-Tere.mp3";

var song6 = new Audio();
song6.src ="song/Tera-Chehra.mp3";

var song7 = new Audio();
song7.src ="song/Tera-Hua.mp3";

var song8 = new Audio();
song8.src ="song/Thaam-Lo.mp3";

var song9 = new Audio();
song9.src ="song/Zaroorat.mp3";


function playsong(){
  var songId = this.innerHTML;
  console.log(songId);

  switch (songId) {
    case "a":
      song1.play();
      break;

      case "b":
        song2.play();
        break;

        case "c":
          song3.play();
          break;

          case "d":
            song4.play();
            break;

            case "e":
              song5.play();
              break;

              case "f":
                song6.play();
                break;

                case "g":
                  song7.play();
                  break;

                  case "h":
                    song8.play();
                    break;
                    case "i":
                      song9.play();
                      break;

    default:
    console.log("wrong input");
break;
  }

}
