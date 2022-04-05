import styled from 'styled-components';
import { Link } from 'react-router-dom';
//ALL IMAGES
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//PAGE ANIMATION
import { motion } from 'framer-motion';
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  sliderAnimation,
  sliderContainer,
} from '../animation';
import { useScroll } from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';

const OurWork = () => {
  document.body.style.overflow = 'auto';

  const [element, controls] = useScroll();
  const [element2, control2] = useScroll();

  return (
    <StyledWork
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#121212' }}
    >
      <ScrollTop />
      <motion.div variants={sliderContainer}>
        <StyledFrame1 variants={sliderAnimation}></StyledFrame1>
        <StyledFrame2 variants={sliderAnimation}></StyledFrame2>
        <StyledFrame3 variants={sliderAnimation}></StyledFrame3>
        <StyledFrame4 variants={sliderAnimation}></StyledFrame4>
      </motion.div>
      <motion.div variants={fade}>
        <StyledMovie
        // ref={element}
        // variants={fade}
        // animate={controls}
        // initials='hidden'
        >
          <Link to='/work/the-athlete' style={{ textDecoration: 'none' }}>
            <motion.div variants={fade} className='work-card'>
              <div className='card-details'>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div
                  variants={lineAnimation}
                  className='line'
                ></motion.div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, voluptas. Numquam at impedit reiciendis
                  consectetur distinctio ab quis vitae eos.
                </p>
                <div>
                  <button>View Github</button>
                </div>
              </div>
              <StyledHide className='work-image'>
                <motion.img
                  variants={photoAnimation}
                  src={athlete}
                  alt='athlete'
                />
              </StyledHide>
            </motion.div>
          </Link>
        </StyledMovie>

        <StyledMovie
          ref={element}
          variants={fade}
          animate={controls}
          initials='hidden'
        >
          <Link to='/work/the-racer' style={{ textDecoration: 'none' }}>
            <motion.div variants={fade} className='work-card'>
              <div className='card-details'>
                <h2 variants={fade}>The Racer</h2>
                <motion.div
                  variants={lineAnimation}
                  className='line'
                ></motion.div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, voluptas. Numquam at impedit reiciendis
                  consectetur distinctio ab quis vitae eos.
                </p>
                <div>
                  <button>View Github</button>
                </div>
              </div>
              <StyledHide className='work-image'>
                <img src={theracer} alt='the racer' />
              </StyledHide>
            </motion.div>
          </Link>
        </StyledMovie>

        <StyledMovie
          ref={element2}
          variants={fade}
          animate={control2}
          initials='hidden'
        >
          <Link to='/work/good-times' style={{ textDecoration: 'none' }}>
            <motion.div variants={fade} className='work-card'>
              <div className='card-details'>
                <motion.h2 variants={fade}>The GoodTimes</motion.h2>
                <motion.div
                  variants={lineAnimation}
                  className='line'
                ></motion.div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, voluptas. Numquam at impedit reiciendis
                  consectetur distinctio ab quis vitae eos.
                </p>
                <div>
                  <button>View Github</button>
                </div>
              </div>
              <StyledHide className='work-image'>
                <img src={goodtimes} alt='the goodtimes' />
              </StyledHide>
            </motion.div>
          </Link>
        </StyledMovie>
      </motion.div>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  position: relative;
  overflow: hidden;
`;

const StyledMovie = styled(motion.div)`
  max-width: var(--max-width);
  margin: auto;

  height: var(--container-height);
  min-height: 500px;
  max-height: 800px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  .work-card {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    align-items: center;
    background-color: #1b1b1b;
    margin: 0 var(--layout-secondary-padding);

    height: 60vh;
    min-height: 400px;
    max-height: 500px;

    position: relative;
    .card-details {
      flex: 1;

      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 2rem;
      @media (max-width: 750px) {
        position: absolute;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
      p {
        margin: 0 0 2rem;
      }
    }
    .work-image {
      flex: 1.5;

      display: flex;
      height: 100%;
    }
  }
  h2 {
    padding: 1rem 0rem;
  }
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 2rem;
  }
  img {
    flex: 2;
    width: 100%;

    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const StyledFrame2 = styled(StyledFrame1)`
  background: #ff8efb;
`;

const StyledFrame3 = styled(StyledFrame1)`
  background: #8ed2ff;
`;

const StyledFrame4 = styled(StyledFrame1)`
  background: #8effa0;
`;

export default OurWork;
