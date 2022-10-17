const TRANSLITERATIONS_CONFIG = {
  А: 'A',
  а: 'a',
  Б: 'B',
  б: 'b',
  В: 'V',
  в: 'v',
  Г: 'H',
  г: 'h',
  Ґ: 'G',
  ґ: 'g',
  Д: 'D',
  д: 'd',
  Е: 'E',
  е: 'e',
  Є: 'Ye',
  є: 'ie',
  Ж: 'Zh',
  ж: 'zh',
  З: 'Z',
  з: 'z',
  И: 'Y',
  и: 'y',
  І: 'I',
  і: 'i',
  Ї: 'Yi',
  ї: 'i',
  Й: 'Y',
  й: 'i',
  К: 'K',
  к: 'k',
  Л: 'L',
  л: 'l',
  М: 'M',
  м: 'm',
  Н: 'N',
  н: 'n',
  О: 'O',
  о: 'o',
  П: 'P',
  п: 'p',
  Р: 'R',
  р: 'r',
  С: 'S',
  с: 's',
  Т: 'T',
  т: 't',
  У: 'U',
  у: 'u',
  Ф: 'F',
  ф: 'f',
  Х: 'Kh',
  х: 'kh',
  Ц: 'Ts',
  ц: 'ts',
  Ч: 'Ch',
  ч: 'ch',
  Ш: 'Sh',
  ш: 'sh',
  Щ: 'Shch',
  щ: 'shch',
  Ю: 'Yu',
  ю: 'iu',
  Я: 'Ya',
  я: 'ia',
  ь: '',
};

const INPUT = document.querySelector('#js-original-text');

const OUTPUT = document.querySelector('#js-trans-text');

const NOTIFICATION = document.querySelector('#js-notification');

function transliterateText() {
  const originalText = INPUT.value;
  if (!originalText) {
    return;
  }
  const transliteratedText = originalText
    .split('')
    .map((item) => TRANSLITERATIONS_CONFIG[item] ?? item)
    .join('');
  OUTPUT.value = transliteratedText;
}

function copyResults() {
  OUTPUT.select();
  OUTPUT.setSelectionRange(0, 9999);
  document.execCommand('copy');
  NOTIFICATION.classList.toggle('visible');
  setTimeout(() => NOTIFICATION.classList.toggle('visible'), 1000);
}
