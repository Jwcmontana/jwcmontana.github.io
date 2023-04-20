import { Link, useParams } from 'react-router-dom';
import { Breadcrumb, Container, Header, Icon, Image, Item, List, Segment } from 'semantic-ui-react';
import { useAppSelector } from '../../../app/hooks';
import { IProjectsDetailsProps } from '../interfaces/IProjectDetails';

function ProjectDetails(props: IProjectsDetailsProps) {

  let { projectId } = useParams();
  const state = useAppSelector((state) => state);

  const project = state.projects.projects.find(p => p.name === projectId);

  if (project === undefined) {
    throw new TypeError(`Project with id: ${projectId} was not found.`)
  }

  return (
    <Container text>
      <Breadcrumb>
        <Breadcrumb.Section link><Link to="/projects/">Projects</Link></Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>{project.title}</Breadcrumb.Section>
      </Breadcrumb>
      <Header
        as="h4"
        attached='top'
      >
        <Header.Content
          style={{ float: "right", fontStyle: "italic" }}
        >
          {project.title}
        </Header.Content>
        <Icon name='check square outline' />
      </Header>
      <Segment attached='bottom'>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' src={project.thumbSrc} />
            <Item.Content verticalAlign='middle'>
              {project.summary}
            </Item.Content>
          </Item>
        </Item.Group>
        {project.keyFeatures &&
          <List size='small'>
            <List.Item>
              <List.Header>
                Key Features
              </List.Header>
              <List bulleted items={project.keyFeatures} />
            </List.Item>
          </List>
        }
        <List size='small'>
          <List.Item>
            <List.Header>
              Technologies
            </List.Header>
            <List horizontal size='tiny' items={project.technologies} />
          </List.Item>
        </List>
        {project.images &&
          <Image.Group size='small'>
            {project.images.map(image =>
              <Image rounded verticalAlign='top' bordered src={image.thumbSrc} href={image.fullSizeSrc}  />)
            }
          </Image.Group>
        }
        {project.downloads &&
          <List size='small'>

            <List.Item>
              <List.Header>
                Downloads
              </List.Header>
              <List bulleted>
                {project.downloads.map(download =>
                  <List.Item>
                    <a href={download.url}>{download.title}</a>
                  </List.Item>
                )}
              </List>
            </List.Item>
          </List>
        }
      </Segment>
    </Container>
  );
}

export default ProjectDetails