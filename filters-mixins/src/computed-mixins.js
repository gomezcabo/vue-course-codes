export const computedMixins = {
    computed: {
        reversedText() {
            return this.text.split('').reverse().join('');
        },
        withCounterText() {
            return this.text + ' (' + this.text.length + ')';
        }
    }
}
