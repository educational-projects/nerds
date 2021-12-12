const slider = document.querySelector('.slider')
const SliderControls = slider.querySelector('.slider-controls')
const sliders = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.slider-controls button');

const getSlider = () => {
  SliderControls.addEventListener('click', (evt) => {
    evt.preventDefault();
    //* переключение кнопок
    if (evt.target.type === 'button') {
      [...SliderControls.children].forEach((button) => {
        button.classList.remove('current');
      })
      evt.target.classList.add('current');
      const buttonCurent = [...buttons].indexOf(evt.target);

      //переключение слайда
      [...sliders].forEach((slider) => {
        slider.classList.contains('slide-current')
        slider.classList.remove('slide-current');
      })

      sliders[buttonCurent].classList.add('slide-current');
    }
  })
};

getSlider();



