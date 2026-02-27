import React from 'react';
import { Deck, Slide, Heading, Text, FlexBox, DefaultTemplate, Image, Box, UnorderedList, Appear, ListItem } from 'spectacle';
import SlideRow from './components/SlideRow';
import VarITLogo from './assets/VarIT-Logo.png'
import Møterom from './assets/Møterom.jpg'
import Case from './assets/Låne-pc.jpg'
import Oppdrag from './assets/case-mandag.jpg'
import ServerRom from './assets/ServerRom_VarIT.jpg'
import ServerSkap1 from './assets/serverskap1.jpg'
import ServerSkap2 from './assets/serverskap2.jpg'
import Chatbot from './assets/Chatbot.jpg'

function App() {
  return (
    <Deck template={<DefaultTemplate />}>
      
      {/* Slide 1: Tittel */}
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Image src={VarITLogo} alt="Værnesregionen Logo" width="300px"/>
          <Heading>Værnesregionen IT Uke 6/7</Heading>
          <Text>Laget med Spectacle og React</Text>
        </FlexBox>
      </Slide>

      {/* Slide 2: Hva jeg gjorde */}
      <Slide>
        <Heading>Hva jeg gjorde</Heading>
        
        <Box height="80%" position="relative">
          <SlideRow
            text="Møter" 
            imageSrc={Møterom} 
            imageAlt="møterom" 
          />
          
          <SlideRow 
            text="Case oppgave" 
            imageSrc={Oppdrag} 
            imageAlt="case oppgave" 
            hiddenItems={['Møter']}
          />
          
          <SlideRow 
            text="Oppdrag" 
            imageSrc={Case} 
            imageAlt="oppdrag" 
            hiddenItems={['Møter', 'Case oppgave']}
          />

          <SlideRow 
            text="Chatbot" 
            imageSrc={Chatbot} 
            imageAlt="chatbot" 
            hiddenItems={['Møter', 'Case oppgave','Oppdrag']}
          />

          
          <SlideRow 
            text="ServerRom" 
            imageSrc={ServerRom} 
            imageAlt="serverrom" 
            hiddenItems={['Møter', 'Case oppgave', 'Oppdrag', 'Chatbot']}
          />
          
          <SlideRow 
            text="ServerRom" 
            imageSrc={ServerSkap1} 
            imageAlt="serverskap 1" 
            hiddenItems={['Møter', 'Case oppgave', 'Oppdrag', 'Chatbot', 'ServerRom']}
            showText={false}
          />
          
          <SlideRow 
            text="ServerRom" 
            imageSrc={ServerSkap2} 
            imageAlt="serverskap 2" 
            hiddenItems={['Møter', 'Case oppgave', 'Oppdrag', 'Chatbot', 'ServerRom']}
            showText={false}
          />
          
        </Box>
      </Slide>

      {/*Slide 3: Refleksjon */}
      <Slide>

        <Heading>Refleksjon</Heading>

        <UnorderedList>
          <Appear>
            <ListItem>Ansatte</ListItem>
          </Appear>

          <Appear>
            <ListItem>Miljø</ListItem>
          </Appear>

          <Appear>
            <ListItem>Lærlingeplass</ListItem>
          </Appear>
        </UnorderedList>

      </Slide>

    </Deck>
  );
}

export default App;