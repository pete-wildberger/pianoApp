import * as Pz from 'pizzicato';

export class Piano {
	private TOP_KEYS: string[] = ['q', 'w', '3', 'e', '4', 'r', 't', '6', 'y', '7', 'u', '8', 'i', 'o', '0', 'p', '-', '[', '+', ']', '\\'];
	private sineWaves: { [key: string]: any } = {};
	constructor() {
		this.init();
		this.listen();
	}
	private init = () => {
		const a: number = 1.059463094359;
		const A_FOUR: number = 440;
		const addSound = (n: number) => {
			return new Pz.Sound({
				source: 'wave',
				options: {
					type: 'sine',
					frequency: A_FOUR * a ** n // A_FOUR * (a)**n to get a note
				}
			});
		};
		// create sounds
		const len: number = Math.floor(this.TOP_KEYS.length / 2);
		const A_idx: number = this.TOP_KEYS.indexOf('u'); //'u' is A on the keyboard
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
		const letters = [].slice.call(document.getElementsByClassName('letter'));
		const duals = [].slice.call(document.getElementsByClassName('dual'));
		const keys = letters.concat(duals);
		console.log(keys);
		document.addEventListener('keydown', e => {
			const target: string = e.key;
			for (let key of keys) {
				if (key.textContent.includes(target.toUpperCase())) {
					key.style.backgroundColor = 'red';
					break;
				}
			}
			if (this.TOP_KEYS.includes(target)) {
				this.sineWaves[target].play();
			}
		});
		document.addEventListener('keyup', e => {
			const target: string = e.key;
			for (let key of keys) {
				if (key.textContent.includes(target.toUpperCase())) {
					key.style.backgroundColor = '#333';
					break;
				}
			}
			if (this.TOP_KEYS.includes(target)) {
				this.sineWaves[target].stop();
			}
		});
	};
}
