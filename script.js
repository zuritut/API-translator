document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.querySelector('#input');
    const translateBtn = document.querySelector('#translateBtn');
    const outputElement = document.querySelector('#output');

    async function translateText() {
        const textToTranslate = inputElement.value.trim();
        
        if (!textToTranslate) {
            outputElement.textContent = 'Будь ласка, введіть текст для перекладу.';
            return;
        }

        const safeText = encodeURIComponent(textToTranslate);
        
        const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            outputElement.textContent = data.responseData.translatedText;
        } catch (error) {
            console.error('Помилка при перекладі:', error);
            outputElement.textContent = 'Сталася помилка при підключенні до сервера.';
        }
    }

    translateBtn.addEventListener('click', translateText);
});