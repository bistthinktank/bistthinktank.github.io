import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, our team's name is <HighlightSpan>ThinkTank</HighlightSpan>.
      </p>
      <p>
        We are <HighlightAlt>Junior Software Engineers</HighlightAlt> based in
        Turkey.
      </p>
      <p>We are passionate about penetration testing and coding.</p>
    </AboutWrapper>
  );
};

export default About;
