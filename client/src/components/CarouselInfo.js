import { observer } from 'mobx-react-lite';
import Carousel from 'react-bootstrap/Carousel';
import iwcf from '../assets/iwcf.jpg'
import safety from '../assets/safety.jpg'
import levelup from '../assets/levelup.jpg'

const CarouselInfo = observer(() => {
  return (
    <Carousel variant='dark'>
      <Carousel.Item interval={1000}>
        <img
          height={500}
          className="d-block w-100"
          src={iwcf}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Сертификаты IWCF</h3>
          <p>Являются общепринятым мировым свидетельством профессионального уровня специалистов.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          height={500}
          className="d-block w-100"
          src={levelup}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Безопасность технологических процессов и производств</h3>
          <p>Срок обучения: 72 часа  /  Формы обучения: Очная, заочная, очно-заочная</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={500}
          className="d-block w-100"
          src={safety}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Бурение нефтяных и газовых скважин</h3>
          <p>
            Подготовка к бурению, ремонт нефтяных и газовых скважин.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
});

export default CarouselInfo;