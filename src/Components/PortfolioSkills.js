import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import PortfolioSkill from './PortfolioSkill';



  const PortfolioSkills = () => {
      return (

        
        <Accordion className="skills">
          <PortfolioSkill skillId="1" title="Javascript" content="yep haha uhah"/>
          <PortfolioSkill skillId="2" title="Java" content="yep haha uhah"/>
          <PortfolioSkill skillId="3" title="Junescape" content="yep haha uhah"/>
          <PortfolioSkill skillId="4" title="React" content="yep haha uhah"/>
          <PortfolioSkill skillId="5" title="React" content="yep haha uhah"/>
          <PortfolioSkill skillId="6" title="React" content="yep haha uhah"/>
          <PortfolioSkill skillId="7" title="React" content="yep haha uhah"/>
          <PortfolioSkill skillId="8" title="React" content="yep haha uhah"/>
        </Accordion>
        
  
  );
}


export default PortfolioSkills



// <h1>Skills</h1>
//           <div className="demo-container"> 
//             <Accordion classname ="skills-acc">
//               {[0, 1, 2, 3, 4].map(item => {
//                 return (
//                   <AccordionItem
//                     key={item}
//                     title={`Item ${item}`}
//                     expanded={this.state.activeClickedItems.includes(item)}>
//                     <div>
//                       {`Item ${item} content sfdgjhfgjdfgjfdjkchfgkgfhkhdjdfjfjhfdgj
//                       sdhsdfhshjfdgjdfjdfjdfj
//                       shsfdhfdghsfghsdfhfds fghsdfgh  sfdghsfdghsdf s hsfdhshsdhsd sd`}
//                     </div>
//                   </AccordionItem>
//                 );
//               })}
//             </Accordion>
//             </div>
          /* <h2>Hovered</h2>
  
          <Accordion onChange={this.handleHover} isHovered>
            {[0, 1, 2, 3, 4].map(item => {
              return (
                <AccordionItem
                  key={item}
                  title={`Item ${item}`}
                  expanded={this.state.activeHoveredItems.includes(item)}
                >
                  <div>
                    {`Item ${item} content`}
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion> */



// const PortfolioSkills = () => { 
//     return (
//       <Accordion>
//             <AccordionItem title={`Item 1`}>
//               <div>
//                 {`Item 1 content`}
//               </div>
//             </AccordionItem>
//       </Accordion>
//     );
//   }

//   export default PortfolioSkills

// import React from 'react';
// import { Card, Button, Accordion} from "react-bootstrap";
// import { FaCaretDown} from 'react-icons/fa';


// const PortfolioSkills = () => { 
//     return (


//   <Accordion className="text-center">
//   <Card >
//     <Card.Header>
//     <FaCaretDown />
//       <Accordion.Toggle className="text-dark" as={Button} variant="link" eventKey="0">
//         Javascript
//       </Accordion.Toggle>
//     </Card.Header>
//     <Accordion.Collapse eventKey="0">
//       <Card.Body>Hello! I'm the body
//       </Card.Body>
//     </Accordion.Collapse>
//   </Card>
//   <Card>
//     <Card.Header>
//       <Accordion.Toggle className="text-dark" as={Button} variant="link" eventKey="1">
//         Java
//       </Accordion.Toggle>
//     </Card.Header>
//     <Accordion.Collapse eventKey="1">
//       <Card.Body>Hello! I'm another body</Card.Body>
//     </Accordion.Collapse>
//   </Card>
// </Accordion>

//     )};

//     export default PortfolioSkills