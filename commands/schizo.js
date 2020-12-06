var chars = 'Á À Â Ā Ä Ã Å Æ É È Ê Ē Ë Í Ì Î Ī Ï ï ī î ì ë ē ê è é æ å ã ä ā â à á Ó Ò Ô Ō Ö Õ Ø Œ Ú Ù Û Ū Ü Ŵ Ý Ÿ Ŷ ŷ ÿ ý ŵ ü ū û ù ú œ ø õ ö ō ô ò ó Þ Ç Ð Ñ ẞ ß ñ ð ç þ « » “ „ ” ‘ ‚ ’ — – ¿ ¡ · … @ Q W E R T Y U I O P A S D F G H J K L Z X C V B N M q w e r t y u i o p a s d f g h j k l z x c v b n m , . / ; \' [ ] 1 2 3 4 5 6 7 8 9 0 - = + _ ) ( * & ^ % $ # ! { } | : " < > ? Q W E R T Y U I O P A S D F G H J K L Z X C V B N M q w e r t y u i o p a s d f g h j k l z x c v b n m 1 2 3 4 5 6 7 8 9 0';
chars = chars.split(' ');

module.exports = {
    name: 'schizo',
    description: 'omni moment',
    execute(message, args) {
		//delete message
		message.delete();
		//add random amount of space characters at the end of the chars array
		for (let i = 0; i < Math.random() * 5000; i++) {
			chars.push(' ');
		}
		//psuedo-random number gen
        function randomIndex(min, max) {
            return (Math.random() * (max - min) + min);
        }
        var output = new Array();
        //for a random amount of times
		for (var i = 0; i < (Math.random() * 10000); i++) {
			//index equals a random number
            var index = randomIndex(0, 1000);
			//if the number is larger than the amount of indexes in the chars array, idk do some math lol
            if (index > chars.length) {
                index = Math.abs(chars.length - index);
            }
			//add the character at the index to an array
            output.push(chars[(Math.floor(index))]);
        }
		//send the joined together array to the channel 
        message.channel.send(output.join('') + /*@omni lol*/'<@533850977166688258>');
    }
}