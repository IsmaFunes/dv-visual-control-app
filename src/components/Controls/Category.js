import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { List, withStyles } from '@material-ui/core';
import VideoOption from './VideoOption';

const AccordionDetails = withStyles({
  root: {
    flexDirection: 'column',
    overflow: 'scroll'
  }
})(MuiAccordionDetails);

const Category = ({
  name,
  videos,
  onVideoSelected
}) => (
  <Accordion defaultExpanded>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      {name}
    </AccordionSummary>
    <AccordionDetails>
      <List dense component="nav">
        {videos.map(video => (
          <VideoOption
            key={video.title}
            title={video.title}
            description={video.description}
            subtitle={video.subtitle}
            source={video.sources[0]}
            onClick={onVideoSelected}
            thumbnail={video.thumb}
          />
        ))}
      </List>
    </AccordionDetails>
  </Accordion>
);

Category.propTypes = {
  name: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onVideoSelected: PropTypes.func.isRequired
}

export default Category;