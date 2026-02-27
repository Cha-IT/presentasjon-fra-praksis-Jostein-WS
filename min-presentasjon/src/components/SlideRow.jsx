import React from 'react';
import { Appear, Box, UnorderedList, ListItem, Image } from 'spectacle';

function SlideRow({ text, imageSrc, imageAlt, hiddenItems = [], showWhiteBg = false, showText = true }) {
  return (
    <Appear>
      <Box 
        position="absolute" 
        top="0" 
        left="0" 
        width="80%" 
        height="80%" 
        display="grid" 
        style={{gridTemplateColumns: '1fr 1fr', gridColumnGap: '30px'}}
       
      >
        <Box>
          <UnorderedList>
            {hiddenItems.map((item, index) => (
              <ListItem key={index} style={{visibility: 'hidden'}}>{item}</ListItem>
            ))}
            {showText && <ListItem>{text}</ListItem>}
          </UnorderedList>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image src={imageSrc} alt={imageAlt} width="100%" style={{maxHeight: '450px', objectFit: 'contain'}}/>
        </Box>
      </Box>
    </Appear>
  );
}
export default SlideRow;
