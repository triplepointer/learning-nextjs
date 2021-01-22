import React,{ useState, useEffect } from "react";
import { Grid}  from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

export default function Page() {
  return <MyWonderfulComponentWithStyles id="id" options="options" count="count" color="color" data="data">I'm text from a component</MyWonderfulComponentWithStyles>
}

// We can inject some CSS into the DOM.
const styles = {
  red: {
    color: 'red'
  },
};

function MyWonderfulComponent(props) {
  const { id, options, count, color, data, children, classes } = props;
  const [ summ, setSumm ] = useState(count);

  useEffect(() => {
    console.log(summ);
  }, [summ])

  if (id && options?.params?.fields?.isDynamic) {
    setSumm(summ + 1);
  }

  return (
    <>
    <h1 className={classes.red}>Hello World!</h1>
    <Grid container>
      <Grid item xs={12}>{children}</Grid>
    </Grid>
    </>
  );
}

const MyWonderfulComponentWithStyles = withStyles(styles)(MyWonderfulComponent);