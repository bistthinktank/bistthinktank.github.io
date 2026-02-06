import { useContext } from "react";
import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";
import { termContext } from "../Terminal";

const Welcome: React.FC = () => {
  const { executeCommand } = useContext(termContext);

  const handleHelpClick = () => {
    if (executeCommand) {
      executeCommand("help");
    }
  };

  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`

 /$$$$$$$$ /$$       /$$           /$$    /$$$$$$$$                  /$$      
|__  $$__/| $$      |__/          | $$   |__  $$__/                 | $$      
   | $$   | $$$$$$$  /$$ /$$$$$$$ | $$   /$$| $$  /$$$$$$  /$$$$$$$ | $$   /$$
   | $$   | $$__  $$| $$| $$__  $$| $$  /$$/| $$ |____  $$| $$__  $$| $$  /$$/
   | $$   | $$  \ $$| $$| $$  \ $$| $$$$$$/ | $$  /$$$$$$$| $$  \ $$| $$$$$$/ 
   | $$   | $$  | $$| $$| $$  | $$| $$_  $$ | $$ /$$__  $$| $$  | $$| $$_  $$ 
   | $$   | $$  | $$| $$| $$  | $$| $$ \  $$| $$|  $$$$$$$| $$  | $$| $$ \  $$
   |__/   |__/  |__/|__/|__/  |__/|__/  \__/|__/ \_______/|__/  |__/|__/  \__/
                                                                              
                                                                              

          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`


 /$$$$$$$$ /$$       /$$           /$$    /$$$$$$$$                  /$$      
|__  $$__/| $$      |__/          | $$   |__  $$__/                 | $$      
   | $$   | $$$$$$$  /$$ /$$$$$$$ | $$   /$$| $$  /$$$$$$  /$$$$$$$ | $$   /$$
   | $$   | $$__  $$| $$| $$__  $$| $$  /$$/| $$ |____  $$| $$__  $$| $$  /$$/
   | $$   | $$  \ $$| $$| $$  \ $$| $$$$$$/ | $$  /$$$$$$$| $$  \ $$| $$$$$$/ 
   | $$   | $$  | $$| $$| $$  | $$| $$_  $$ | $$ /$$__  $$| $$  | $$| $$_  $$ 
   | $$   | $$  | $$| $$| $$  | $$| $$ \  $$| $$|  $$$$$$$| $$  | $$| $$ \  $$
   |__/   |__/  |__/|__/|__/  |__/|__/  \__/|__/ \_______/|__/  |__/|__/  \__/
                                                                              
                                                                              
                                                                              
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>
          For a list of available commands, type `
          <Cmd onClick={handleHelpClick} style={{ cursor: "pointer" }}>
            help
          </Cmd>
          `
        </div>
        <br />
      </div>
    </HeroContainer>
  );
};

export default Welcome;
