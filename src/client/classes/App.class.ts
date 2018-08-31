import * as Pz from 'pizzicato';

export class App {
	private CFOUR_FREQ_MAP: { [key: string]: number } = { w: 261.63, e: 293.66, r: 329.63, t: 349.23, y: 392, u: 440, i: 493.88, o: 523.25 };
	private CF_BLACK_KEYS_MAP: { [key: string]: number } = { '3': 277.18, '4': 311.13, '6': 369.99, '7': 415.3, '8': 466.16 };
	private sineWaves: { [key: string]: any } = {};
	constructor() {
		this.init();
		this.listen();
	}
	private init = () => {
		// create sounds
		for (let key in this.CFOUR_FREQ_MAP) {
			this.sineWaves[key] = new Pz.Sound({
				source: 'wave',
				options: {
					frequency: this.CFOUR_FREQ_MAP[key]
				}
			});
		}
		for (let key in this.CF_BLACK_KEYS_MAP) {
			this.sineWaves[key] = new Pz.Sound({
				source: 'wave',
				options: {
					frequency: this.CF_BLACK_KEYS_MAP[key]
				}
			});
		}
	};
	private listen = () => {
		// add keyboard event listeners
		document.addEventListener('keydown', e => {
			const target = e.key;
			switch (target) {
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
			}
		});
		document.addEventListener('keyup', e => {
			const target = e.key;
			switch (target) {
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
			}
		});
	};
}
