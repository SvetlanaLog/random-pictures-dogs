const DogsUrl = 'https://dog.ceo/api/breeds/image/random';
const picturesВogs= document.querySelector('.img-dogs');
const changePictureDog = async function (){
    let response = await fetch(DogsUrl);

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      const json = await response.json();
      const message = json.message;
      picturesВogs.src = message
    } else {
      alert("Ошибка HTTP: " + response.status);
    }

};
const elem = document.getElementById('button-1');
elem.addEventListener('click', changePictureDog)
