import { Link } from 'react-router-dom';
import { Container, Header, Icon, Image, Item, List, Segment } from 'semantic-ui-react';
import { IProjectsProps } from '../interfaces/IProjectsProps';

function Projects(props: IProjectsProps) {
  return (
    <Container text>
      {props.projects.map((project, i) => (
        <div key={i} style={{ marginBottom: "1em" }}>
          <Segment
            attached='top'
            inverted
            tertiary
            color='blue'
          >
            <Link to={`/projects/${project.name}`}>
              <h4 style={{ float: "right", color: 'white', textDecoration:"underline" }}>
                {project.title}
              </h4>
              {project.logoImageSrc !== undefined ?
                <Image src={project.logoImageSrc} /> :
                <Icon name='check square outline' inverted size='big' />
              }
            </Link>
          </Segment>
          <Segment attached='bottom'>
            <Item.Group>
              <Item>
                <Item.Image 
                  size='tiny' as={Link} to={`/projects/${project.name}`} src={project.thumbSrc} />
                <Item.Content verticalAlign='middle'>
                  {project.summary}
                </Item.Content>
              </Item>
            </Item.Group>
            <List size='small'>
              <List.Item key={i}>
                <List.Header>
                  Technologies
                </List.Header>
                <List horizontal size='tiny' items={project.technologies} />
              </List.Item>
            </List>
          </Segment>
        </div>
      ))}
    </Container>
  );
}

export default Projects