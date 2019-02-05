import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import OfficialPage from './OfficialPage';
import API from './API';

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return (
    <Tab component="a" onClick={(event) => event.preventDefault()} {...props} />
  );
}

const styles = () => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'black',
  },
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  setPage(value) {
    switch (value) {
      case 1:
        return <TabContainer>Page Two</TabContainer>;
      case 2:
        return (
          <TabContainer>
            <API />
          </TabContainer>
        );
      case 3:
        return <TabContainer>Page Four</TabContainer>;
      case 4:
        return <TabContainer>Page Five</TabContainer>;
      default:
        return (
          <TabContainer>
            <OfficialPage />
          </TabContainer>
        );
    }
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar style={{ backgroundColor: 'black' }}>
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={this.handleChange}
            >
              <LinkTab label="Official" href="page1" />
              <LinkTab label="Art/Meme" href="page3" />
              <LinkTab label="API" href="page2" />
              <LinkTab label="Esport" href="page3" />
              <LinkTab label="Misc" href="page3" />
            </Tabs>
          </AppBar>
          {this.setPage(value)}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);
