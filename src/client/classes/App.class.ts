import * as Pz from 'pizzicato';
// A_FOUR * (a)**n to get a note

export class App {
  private TOP_KEYS: string[] = [
    'q',
    'w',
    '3',
    'e',
    '4',
    'r',
    't',
    '6',
    'y',
    '7',
    'u',
    '8',
    'i',
    'o',
    '0',
    'p',
    '-',
    '[',
    '+',
    ']',
    '\\'
  ];
  private sineWaves: { [key: string]: any } = {};
  constructor() {
    this.init();
    this.listen();
  }
  private init = () => {
    const addSound = (n: number) => {
      const a: number = 1.059463094359;
      const A_FOUR: number = 440;
      return new Pz.Sound({
        source: 'wave',
        options: {
          frequency: A_FOUR * a ** n
        }
      });
    };
    // create sounds
    const len: number = Math.floor(this.TOP_KEYS.length / 2);
    const A_idx = this.TOP_KEYS.indexOf('u'); //'u' is A on the keyboard
    let i: number = 0;
    while (i <= len) {
      let key: string = this.TOP_KEYS[A_idx + i];
      this.sineWaves[key] = addSound(i);
      key = this.TOP_KEYS[A_idx - i];
      this.sineWaves[key] = addSound(-i);
      i++;
    }
  };
  private listen = () => {
    // add keyboard event listeners
    // probably a better way to do this...
    document.addEventListener('keydown', e => {
      const target = e.key;
      switch (target) {
        case 'q':
          this.sineWaves[target].play();
          break;
        case 'w':
          this.sineWaves[target].play();
          break;
        case 'e':
          this.sineWaves[target].play();
          break;
        case 'r':
          this.sineWaves[target].play();
          break;
        case 't':
          this.sineWaves[target].play();
          break;
        case 'y':
          this.sineWaves[target].play();
          break;
        case 'u':
          this.sineWaves[target].play();
          break;
        case 'i':
          this.sineWaves[target].play();
          break;
        case 'o':
          this.sineWaves[target].play();
          break;
        case '3':
          this.sineWaves[target].play();
          break;
        case '4':
          this.sineWaves[target].play();
          break;
        case '6':
          this.sineWaves[target].play();
          break;
        case '7':
          this.sineWaves[target].play();
          break;
        case '8':
          this.sineWaves[target].play();
          break;
        case '0':
          this.sineWaves[target].play();
          break;
        case 'p':
          this.sineWaves[target].play();
          break;
        case '-':
          this.sineWaves[target].play();
          break;
        case '[':
          this.sineWaves[target].play();
          break;
        case '+':
          this.sineWaves[target].play();
          break;
        case ']':
          this.sineWaves[target].play();
          break;
        case '\\':
          this.sineWaves[target].play();
          break;
      }
    });
    document.addEventListener('keyup', e => {
      const target = e.key;
      switch (target) {
        case 'q':
          this.sineWaves[target].stop();
          break;
        case 'w':
          this.sineWaves[target].stop();
          break;
        case 'e':
          this.sineWaves[target].stop();
          break;
        case 'r':
          this.sineWaves[target].stop();
          break;
        case 't':
          this.sineWaves[target].stop();
          break;
        case 'y':
          this.sineWaves[target].stop();
          break;
        case 'u':
          this.sineWaves[target].stop();
          break;
        case 'i':
          this.sineWaves[target].stop();
          break;
        case 'o':
          this.sineWaves[target].stop();
          break;
        case '3':
          this.sineWaves[target].stop();
          break;
        case '4':
          this.sineWaves[target].stop();
          break;
        case '6':
          this.sineWaves[target].stop();
          break;
        case '7':
          this.sineWaves[target].stop();
          break;
        case '8':
          this.sineWaves[target].stop();
          break;
        case '0':
          this.sineWaves[target].stop();
          break;
        case 'p':
          this.sineWaves[target].stop();
          break;
        case '-':
          this.sineWaves[target].stop();
          break;
        case '[':
          this.sineWaves[target].stop();
          break;
        case '+':
          this.sineWaves[target].stop();
          break;
        case ']':
          this.sineWaves[target].stop();
          break;
        case '\\':
          this.sineWaves[target].stop();
          break;
      }
    });
  };
}
