import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { Movie } from '@material-ui/icons';

const VideoOption = ({
  title,
  subtitle,
  description,
  source,
  onClick,
  thumbnail
}) => {

  const handleClick = useCallback(() => onClick({
    source,
    title,
    description
  }), [source])

  return (
    <ListItem button onClick={handleClick} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar variant="square" alt="" src={thumbnail}>
          {/* Using this icon as fallback */}
          <Movie />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <>
            <p>{subtitle}</p>
            <p>{description.length > 50 ?
              `${description.slice(0, 50)}...`
              : description}</p>
          </>
        }
      />
    </ListItem>
  )
};

VideoOption.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  thumbnail: PropTypes.string.isRequired
}

export default VideoOption;