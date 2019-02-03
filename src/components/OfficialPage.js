import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const tileData = [
  {
    img: 'https://i.imgur.com/54eKwIx.gif',
    title: 'Broken Myth: Ylva News Article Title',
    author: 'Short Description',
  },
  {
    img: 'https://i.imgur.com/53xvhuI.jpg',
    title: '3.9 Update Notes',
    author: 'Short Description',
  },
  {
    img: 'https://i.imgur.com/tgoxhWU.jpg',
    title: 'Fan Art/Meme: Enemies Of Our Nation',
    author: 'By: Maxman30',
  },
  {
    img: 'https://i.imgur.com/54eKwIx.gif',
    title: 'Broken Myth: Ylva News Article Title',
    author: 'Short Description',
  },
  {
    img: 'https://i.imgur.com/53xvhuI.jpg',
    title: '3.9 Update Notes',
    author: 'Short Description',
  },
  {
    img: 'https://i.imgur.com/tgoxhWU.jpg',
    title: 'Fan Art/Meme: Enemies Of Our Nation',
    author: 'By: Maxman30',
  },
];

const twitterAccounts = ['vainglory', 'vainglorystatus', 'vaingloryesport'];
function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div>
      <GridList cellHeight={300} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img
              src={tile.img}
              alt={tile.title}
              style={{ borderRadius: '50px' }}
            />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}

        {twitterAccounts.map((account) => (
          <TwitterTimelineEmbed
            sourceType="timeline"
            screenName={account}
            theme="dark"
            noHeader
            noFooter
            noScrollbar
            options={{ height: 400 }}
            key={account}
          />
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
