import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	card: {
		maxWidth: '100%',
	},
	media: {
		height: 280,
	},
	noLink: {
		textDecoration: 'none !important'
	}
});
const linkStyle = {
	color: 'inherit',
	textDecoration: 'none',
}

export default function CardComponent({data, linkTo}) {
	const projectData = data.node;
	const classes = useStyles();
	
	return (
		<Card className={classes.card}>
			<Link to={`${linkTo}`}
						style={linkStyle}
			>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={projectData.image.file.url}
						 title={projectData.image.file.name}
					/>
					<CardContent>
						<Typography gutterBottom
						            variant="h5"
						            component="h2"
						            className={classes.noLink}
						>
							{projectData.title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{projectData.description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Link>
			<CardActions>
				<Link to={`${linkTo}`}
				      style={linkStyle}
				>
					<Button size="small" color="secondary" style={{fontWeight: 800}}>
						{projectData.type ? (
							<span>Go to {projectData.type}<i className='ui icon chevron right' /></span>
							) : (
							<span>Read more<i className='ui icon chevron right' /></span>
							)
						}

					</Button>
				</Link>
				<a href={`https://twitter.com/intent/tweet?text=https://www.jdahbur.com${linkTo}`}
			     style={linkStyle}
				   target={'_blank'}
				>
					<Button size="small" color="primary">
						<span><i className='ui icon twitter' />Share</span>
					</Button>
				</a>
				<a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.jdahbur.com${linkTo}`}
				   style={linkStyle}
				   target={'_blank'}>
					<Button size="small" color="primary">
						<span><i className='ui icon facebook' />Share</span>
					</Button>
				</a>
			</CardActions>
		</Card>
	);
}
