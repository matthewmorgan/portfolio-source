import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CameraIcon from '@material-ui/icons/PhotoCamera'
import LinkIcon from '@material-ui/icons/Link'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

import AlertDialog from './AlertDialog'

import understanding from './img/understanding.png'
import semjs from './img/semjs.png'
import exercism from './img/exercism.png'
import bread from './img/breadpos.png'
import buzz from './img/buzzdesktop.png'
import buzzonline from './img/buzzonline.png'
import elephantears from './img/elephantears.png'
import honeycreekschool from './img/honeycreekschool.png'
import morganandyork from './img/morganandyork.png'

import superagent from "superagent"

const styles = theme => ({
  appBar:      {
    position: 'relative',
  },
  icon:        {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit:    {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin:   '0 auto',
    padding:  `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout:      {
    width:                                                     'auto',
    marginLeft:                                                theme.spacing.unit * 3,
    marginRight:                                               theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width:       1100,
      marginLeft:  'auto',
      marginRight: 'auto',
    },
  },
  cardGrid:    {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card:        {
    height:        '100%',
    display:       'flex',
    flexDirection: 'column',
  },
  cardMedia:   {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer:      {
    backgroundColor: theme.palette.background.paper,
    padding:         theme.spacing.unit * 6,
  },
})

const cards = [
  {
    heading:     'JSTOR Understanding Series',
    description: 'A web application to assist high school students in researching works of literature and historical documents.  Built at Ithaka in Vue.',
    image:       understanding,
    link:        'https://www.jstor.org/understand'
  },
  {
    heading:     'Honeycreek School',
    description: 'A website built for a community school for social sharing of messages and photos',
    image:       honeycreekschool,
    link:        'http://party.honeycreekschool.org'
  },
  {
    heading:     'exercism.io',
    description: 'I was a maintainer and contributor to this developer education project from 2014-2019, focused primarily on the JavaScript track',
    image:       exercism,
    link:        'https://exercism.io'
  },
  {
    heading:     'SEM.js',
    description: 'I have been on the leadership committee of this local JavaScript focused meetup for the last two years, and helped to run the mentorship study group during much of that time.',
    image:       semjs,
    link:        'https://www.meetup.com/SEM-JS/'
  },
  {
    heading:     'POS Web App',
    description: 'A tablet optimized point of sale system design for a fast-paced coffeehouse.  Built with Backbone on Node, Express, and MongoDB',
    image:       buzzonline
  },
  {
    heading:     'Bread Point of Sale',
    description: 'A touchscreen optimized multi-client desktop retail point of sale and inventory control system.  Built in Java SE and Postgres',
    image:       bread
  },
  {
    heading:     'E-Commerce Site',
    description: "A web app built for a children's clothing store, built with Express and integrated with the client's bricks and mortar POS through an API written in Express over Postgres",
    image:       elephantears
  },
  {
    heading:     'E-Commerce Site',
    description: "A web app built for a specialty grocery store, using Express and integrated with the client's bricks and mortar POS through an API written in Express over Postgres",
    image:       morganandyork
  },
  {
    heading:     'Buzz Point of Sale',
    description: 'A touchscreen optimized retail point of sale built for a fast-paced coffee house.  Java SE and Postgres',
    image:       buzz
  },
]

class Album extends React.Component {

  constructor(props) {
    super(props)
    this.state = {...props, openDialog: false, joke: undefined}
  }

  async getDadJoke() {
    return await superagent
        .get('https://icanhazdadjoke.com/')
        .set('accept', 'text/plain')
  }

  handleClick = async () => {
    const joke = await this.getDadJoke()
    this.setState({
      openDialog: true,
      joke:       joke.text
    })
  }

  handleDialogClose = () => {
    this.setState({openDialog: false})
  }

  render() {
    const classes = this.state.classes
    return (
        <React.Fragment>
          <CssBaseline/>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <CameraIcon className={classes.icon}/>
              <Typography variant="h6" color="inherit" noWrap>
                Matt Morgan's Projects
              </Typography>
            </Toolbar>
          </AppBar>
          <main>
            {/* Hero unit */}
            <div className={classes.heroUnit}>
              <div className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Matt Morgan
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                  I write software, especially modern web applications.
                </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={16} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary" href="https://github.com/matthewmorgan">
                        See my GitHub
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary" onClick={this.handleClick}>
                        Enjoy a dad joke
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
            <AlertDialog open={this.state.openDialog} joke={this.state.joke} handleClose={this.handleDialogClose}/>
            <div className={classNames(classes.layout, classes.cardGrid)}>
              {/* End hero unit */}
              <Grid container spacing={40}>
                {cards.map(card => (
                    <Grid item key={card.description} sm={6} md={4} lg={3}>
                      <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={card.image} // eslint-disable-line max-len
                            title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {card.heading}
                          </Typography>
                          <Typography>
                            {card.description}
                          </Typography>
                          {card.link && <a href={card.link}><LinkIcon className={classes.icon}/></a>}
                        </CardContent>
                      </Card>
                    </Grid>
                ))}
              </Grid>
            </div>
          </main>
          {/* Footer */}
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Thanks for checking it out!
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Built in React using Material Design components and styles
            </Typography>
          </footer>
          {/* End footer */}
        </React.Fragment>
    )
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Album)
