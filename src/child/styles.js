import { Button } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import lime from '@material-ui/core/colors/lime';
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';
import yellow from '@material-ui/core/colors/yellow';
import orange from '@material-ui/core/colors/orange';
import { withStyles } from '@material-ui/core/styles';

const stylishButton = {
  root: {
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    flex: 1,
  },
  label: {
    textTransform: 'uppercase',
    fontSize: 'calc(20px + 10vh)',
    textShadow: '1px 1px 10px #000, -1px -1px 10px #ccc',
  },
};

export const EatButton = withStyles({
  ...stylishButton,
  root: {
    ...stylishButton.root,
    background: `linear-gradient(45deg, ${lime[500]} 30%, ${pink[500]} 90%)`,
    marginBottom: '16px',
  },
})(Button);

export const PooButton = withStyles({
  ...stylishButton,
  root: {
    ...stylishButton.root,
    background: `linear-gradient(45deg, ${orange[500]} 30%, ${purple[500]} 90%)`,
    marginBottom: '16px',
  },
})(Button);

export const HistoryButton = withStyles({
  ...stylishButton,
  root: {
    ...stylishButton.root,
    background: `linear-gradient(45deg, ${blue[500]} 30%, ${yellow[500]} 90%)`,
  },
})(Button);
