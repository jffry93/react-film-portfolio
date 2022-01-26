//PAGE ANIMATION
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';
import styled from 'styled-components';

//COMPONENTS
import ContactForm from '../components/ContactForm';

const ContactUs = () => {
  return (
    <StyledContactStyle
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#fff' }}
    >
      <StyledContactContainer>
        <ContactForm />
        <div>contact info</div>
      </StyledContactContainer>
      <div>map</div>
      {/* <StyledTitle>
        <StyledHide>
          <motion.h2 variants={titleAnimation}> Get in Touch</motion.h2>
        </StyledHide>
      </StyledTitle>
      <div>
        <StyledHide>
          <StyledSocial variants={titleAnimation}>
            <StyledCircle></StyledCircle>
            <h2>Send us a message</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={titleAnimation}>
            <StyledCircle></StyledCircle>
            <h2>Send us an email</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={titleAnimation}>
            <StyledCircle></StyledCircle>
            <h2>Social Media</h2>
          </StyledSocial>
        </StyledHide>
      </div> */}
    </StyledContactStyle>
  );
};

// const StyledTitle = styled.div`
//   margin-bottom: 4rem;
//   color: black;
//   @media (max-width: 1300px) {
//     margin-top: 5rem;
//   }
// `;

// const StyledHide = styled.div`
//   overflow: hidden;
// `;

// const StyledCircle = styled.div`
//   border-radius: 50%;
//   width: 3rem;
//   height: 3rem;
//   background: #353535;
// `;

// const StyledSocial = styled(motion.div)`
//   display: flex;
//   align-items: center;
//   h2 {
//     margin: 2rem;
//   }
// `;

export default ContactUs;

const StyledContactStyle = styled(motion.div)`
  border: 3px solid yellow;
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  /* justify-content: center; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const StyledContactContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid green;
`;
