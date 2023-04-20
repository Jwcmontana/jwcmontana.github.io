
import { Container, Header, Icon, Item, List, Segment } from 'semantic-ui-react';
import { IResumeProps, WorkExperience } from './IResumeProps';
import './Resume.css';


function Resume(props: IResumeProps) {

  return (

    <Container text>
      <Segment
        attached='top'
        inverted
        tertiary
        color='blue'
      >
        <h4 style={{ float: "right", color: 'white' }}>
          Objective
        </h4>
        <Icon name='eye' inverted size='large' />
      </Segment>
      <Segment attached>
        {props.objective}
      </Segment>
      <Segment
        attached='top'
        inverted
        tertiary
        color='blue'
      >
        <h4 style={{ float: "right", color: 'white' }}>
          Technology Experience
        </h4>
        <Icon name='disk' inverted size='large' />
      </Segment>
      <Segment attached>
        <List size='small'>
          {props.technologyExperience.map((experience, i) => (
            <List.Item key={i}>
              <List.Header>
                {experience.title}
              </List.Header>
              <List horizontal size='tiny' items={experience.list} />
            </List.Item>
          ))}
        </List>
      </Segment>
      <Segment
        attached='top'
        inverted
        tertiary
        color='blue'
      >
        <h4 style={{ float: "right", color: 'white' }}>
          Work Experience
        </h4>
        <Icon name='briefcase' inverted size='large' />
      </Segment>
      <Segment attached>
        {props.workExperiences.map((experience, i) => (
          <Segment key={i} basic>
            <Header as="h4">
              <Header.Content>
                {experience.companyTitle}
              </Header.Content>
              <Header.Subheader style={{ float: 'right' }}>
                <i>{experience.jobTitle}</i>
              </Header.Subheader>
              <Header.Subheader style={{ float: 'right', clear: 'right' }}>
                {experience.employmentYears}
              </Header.Subheader>
              <Header.Subheader>
                {experience.location}
              </Header.Subheader>
            </Header>
            <List bulleted>
              {experience.accomplishments.map((accomplishment, j) => (
                <List.Item key={`${i}${j}`} {...accomplishment} />
              ))}
            </List>
          </Segment>
        ))}
      </Segment>
      <Segment
        attached='top'
        inverted
        tertiary
        color='blue'
      >
        <h4 style={{ float: "right", color: 'white' }}>
        Education
        </h4>
        <Icon name='graduation cap' inverted size='large' />
      </Segment>
      <Segment attached>
        {props.educationExperience.map((experience, i) => (
          <Segment key={i} basic>
            <Header as="h4">
              <Header.Content>
                {experience.institution}
              </Header.Content>
              <Header.Subheader>
                <i>{experience.degree}</i>
              </Header.Subheader>
              <Header.Subheader>
                {experience.location}
              </Header.Subheader>
            </Header>
            {experience.accomplishments &&
              <List bulleted>
                {experience.accomplishments.map((accomplishment, j) => (
                  <List.Item key={`${i}${j}`}>{accomplishment}</List.Item>
                ))}
              </List>
            }
          </Segment>
        ))}
      </Segment>
    </Container >
  );
}

export default Resume;
